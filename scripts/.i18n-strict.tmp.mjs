import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { resources } from '../src/data/resources.js';

// STRICT final localization audit. isFullyLocalized() remains the weak
// rendering helper; THIS check gates the 157/157 claim.
//
// Rules:
// 1. Every visible narrative field that EXISTS in the English original must
//    have a localized counterpart in the merged `ne` (presence check).
// 2. Each localized narrative string must actually be Nepali: it must contain
//    Devanagari OR be too short/technical to matter. A string of >=20 chars
//    with Latin letters but zero Devanagari counts as MATERIAL ENGLISH.
// 3. Technical values (table VALUES, quickFacts VALUES, units, numbers),
//    URLs, filenames and structural fields are exempt by construction (only
//    narrative paths are inspected).
// 4. Structural parity: section/faq/link counts and structural subfields
//    (table/photo/visuals/visualsAfter/callouts/subsections/diagram) must
//    survive the localization.

const overridesDir = path.join(process.cwd(), 'src', 'data', 'resources-ne');
const OVERRIDES = {};
if (fs.existsSync(overridesDir)) {
  for (const file of fs.readdirSync(overridesDir)) {
    if (!file.endsWith('.js')) continue;
    OVERRIDES[file.replace(/\.js$/, '')] = (await import(pathToFileURL(path.join(overridesDir, file)).href)).default;
  }
}

const DEVA = /[\u0900-\u097F]/;
const hasDeva = (s) => DEVA.test(s ?? '');

// A narrative string is "material English" when it is long enough to be a
// sentence/label AND contains real Latin letters AND has no Devanagari.
function isMaterialEnglish(s, pathLabel) {
  if (typeof s !== 'string' || s.trim() === '') return false;
  const len = s.trim().length;
  if (len < 20) return false;
  if (hasDeva(s)) return false;
  // Exempt pure technical/identifier strings that legitimately stay English.
  if (/^[A-Za-z0-9\s.,°%:()\-–—/+·]*$/.test(s) && /^[^a-z]{0,60}[A-Z]{2,}[^a-z]*$/.test(s.trim())) {
    // all-caps identifiers like "FRP", "ISO 9001:2015" — allow short ones
    if (len <= 26) return false;
  }
  if (/[a-z]{4,}/.test(s)) return true; // real lowercase English words present
  return false;
}

const findings = [];

function checkNarrative(value, label, container) {
  if (typeof value === 'string') {
    if (isMaterialEnglish(value, label)) findings.push(`${container} :: ${label} :: material-English`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => checkNarrative(item, `${label}[${i}]`, container));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      if (k === 'href' || k === 'src' || k === 'url' || k === 'variant' || k === 'icon') continue;
      checkNarrative(v, `${label}.${k}`, container);
    }
  }
}

const STRUCTURAL_KEYS = ['table', 'photo', 'visuals', 'visualsAfter', 'callouts', 'subsections', 'diagram'];

let total = 0, pass = 0;
const failures = [];

for (const r of resources) {
  if (r.draft) continue;
  total++;
  const ne = r.ne ?? OVERRIDES[r.slug] ?? null;
  if (!ne) { failures.push(`${r.slug}: no ne override`); continue; }
  let ok = true;
  const flag = (msg) => { ok = false; failures.push(`${r.slug}: ${msg}`); };

  // Presence + language for top-level narrative fields
  for (const key of ['title', 'description']) {
    if (r[key] && !ne[key]) flag(`missing ne.${key}`);
    else if (ne[key] && isMaterialEnglish(ne[key], key)) flag(`ne.${key} material-English`);
  }
  if (r.seo?.title && !ne.seo?.title) flag('missing ne.seo.title');
  if (r.seo?.description && !ne.seo?.description) flag('missing ne.seo.description');
  if (r.seo?.ogTitle && !ne.seo?.ogTitle) flag('missing ne.seo.ogTitle');
  if (r.seo?.ogDescription && !ne.seo?.ogDescription) flag('missing ne.seo.ogDescription');
  if (r.intro && !ne.intro) flag('missing ne.intro');

  // quickFacts: keys are labels (narrative), values are technical (exempt).
  // Localized keys legitimately REPLACE English keys — require count parity
  // and localized keys instead of English-key presence.
  if (r.quickFacts && Object.keys(r.quickFacts).length) {
    if (!ne.quickFacts) flag('missing ne.quickFacts');
    else {
      const enKeys = Object.keys(r.quickFacts);
      const neKeys = Object.keys(ne.quickFacts);
      if (enKeys.length !== neKeys.length) flag(`quickFacts keys ${enKeys.length}->${neKeys.length}`);
      for (const k of neKeys) {
        if (isMaterialEnglish(k, 'quickFacts-key')) flag(`quickFacts key '${k}' material-English`);
      }
    }
  }

  // Tables: keys/notes/titles narrative; values exempt. Same count-parity rule.
  for (const tableKey of ['propertiesTable', 'resinFamilyTable']) {
    const enTable = r[tableKey];
    if (!enTable || typeof enTable !== 'object' || !Object.keys(enTable).length) continue;
    const neTable = ne[tableKey];
    if (!neTable) { flag(`missing ne.${tableKey}`); continue; }
    const enKeys = Object.keys(enTable).filter((k) => k !== 'title' && k !== 'note');
    const neKeys = Object.keys(neTable).filter((k) => k !== 'title' && k !== 'note');
    if (enKeys.length !== neKeys.length) flag(`${tableKey} keys ${enKeys.length}->${neKeys.length}`);
    for (const k of neKeys) {
      if (isMaterialEnglish(k, `${tableKey}-key`)) flag(`${tableKey} key '${k}' material-English`);
    }
    for (const k of ['title', 'note']) {
      if (enTable[k] && !neTable[k]) flag(`${tableKey} missing '${k}'`);
      else if (neTable[k] && isMaterialEnglish(neTable[k], `${tableKey}.${k}`)) flag(`${tableKey}.${k} material-English`);
    }
  }
  const ct = r.comparisonTable;
  if (ct && typeof ct === 'object') {
    const nect = ne.comparisonTable;
    if (!nect) flag('missing ne.comparisonTable');
    else {
      if (ct.title && !nect.title) flag('comparisonTable missing title');
      if (ct.note && !nect.note) flag('comparisonTable missing note');
      const enKeys = Object.keys(ct).filter((k) => k !== 'title' && k !== 'note');
      const neKeys = Object.keys(nect).filter((k) => k !== 'title' && k !== 'note');
      if (enKeys.length !== neKeys.length) flag(`comparisonTable keys ${enKeys.length}->${neKeys.length}`);
      for (const k of neKeys) {
        if (isMaterialEnglish(k, 'comparisonTable-key')) flag(`comparisonTable key '${k}' material-English`);
      }
    }
  }

  // sections: same count/order; structural keys preserved; narrative localized
  if (r.sections && r.sections.length) {
    if (!ne.sections) flag('missing ne.sections');
    else {
      if (r.sections.length !== ne.sections.length) flag(`sections ${r.sections.length}->${ne.sections.length}`);
      r.sections.forEach((sec, i) => {
        const nes = ne.sections[i];
        if (!nes) { flag(`missing ne.sections[${i}]`); return; }
        if (sec.heading) {
          if (!nes.heading) flag(`sections[${i}] missing heading`);
          else if (isMaterialEnglish(nes.heading, `sections[${i}].heading`)) flag(`sections[${i}].heading material-English`);
        }
        if (sec.body && Array.isArray(sec.body)) {
          if (!Array.isArray(nes.body)) flag(`sections[${i}] missing body array`);
          else {
            if (sec.body.length !== nes.body.length) flag(`sections[${i}] body ${sec.body.length}->${nes.body.length}`);
            nes.body.forEach((p, j) => {
              if (isMaterialEnglish(p, `sections[${i}].body[${j}]`)) flag(`sections[${i}].body[${j}] material-English`);
            });
          }
        }
        for (const key of STRUCTURAL_KEYS) {
          if (sec[key] !== undefined && nes[key] === undefined) flag(`sections[${i}] lost '${key}'`);
        }
        // subsections
        if (sec.subsections && Array.isArray(sec.subsections)) {
          if (nes.subsections?.length !== sec.subsections.length) flag(`sections[${i}] subsections ${sec.subsections.length}->${nes.subsections?.length}`);
          sec.subsections.forEach((sub, j) => {
            const nesub = nes.subsections?.[j];
            if (!nesub) { flag(`sections[${i}] missing subsection ${j}`); return; }
            if (sub.heading && isMaterialEnglish(nesub.heading ?? '', `sections[${i}].subsections[${j}].heading`)) flag(`sections[${i}].subsections[${j}].heading material-English`);
            if (sub.body) (Array.isArray(nesub.body) ? nesub.body : []).forEach((p, k) => {
              if (isMaterialEnglish(p, `sections[${i}].subsections[${j}].body[${k}]`)) flag(`sections[${i}].subsections[${j}].body[${k}] material-English`);
            });
          });
        }
        // callouts
        if (sec.callouts && Array.isArray(sec.callouts)) {
          if (nes.callouts?.length !== sec.callouts.length) flag(`sections[${i}] callouts ${sec.callouts.length}->${nes.callouts?.length}`);
          sec.callouts.forEach((c, j) => {
            const nec = nes.callouts?.[j];
            if (!nec) { flag(`sections[${i}] missing callout ${j}`); return; }
            for (const k of ['title', 'body']) {
              if (c[k] && isMaterialEnglish(nec[k] ?? '', `sections[${i}].callouts[${j}].${k}`)) flag(`sections[${i}].callouts[${j}].${k} material-English`);
            }
            if (c.items && Array.isArray(c.items)) {
              (Array.isArray(nec.items) ? nec.items : []).forEach((it, k) => {
                if (isMaterialEnglish(it, `sections[${i}].callouts[${j}].items[${k}]`)) flag(`sections[${i}].callouts[${j}].items[${k}] material-English`);
              });
            }
          });
        }
        // visuals / visualsAfter: labels + captions narrative
        for (const vKey of ['visuals', 'visualsAfter']) {
          if (sec[vKey] && Array.isArray(sec[vKey])) {
            if (nes[vKey]?.length !== sec[vKey].length) flag(`sections[${i}] ${vKey} ${sec[vKey].length}->${nes[vKey]?.length}`);
            sec[vKey].forEach((v, j) => {
              const nev = nes[vKey]?.[j];
              if (!nev) { flag(`sections[${i}] missing ${vKey}[${j}]`); return; }
              for (const k of ['label', 'caption', 'title', 'alt']) {
                if (typeof v[k] === 'string' && v[k].trim() && isMaterialEnglish(nev[k] ?? '', `sections[${i}].${vKey}[${j}].${k}`)) flag(`sections[${i}].${vKey}[${j}].${k} material-English`);
              }
            });
          }
        }
        // photo caption/alt
        if (sec.photo && typeof sec.photo === 'object') {
          for (const k of ['caption', 'alt', 'title']) {
            if (typeof sec.photo[k] === 'string' && sec.photo[k].trim() && isMaterialEnglish(nes.photo?.[k] ?? '', `sections[${i}].photo.${k}`)) flag(`sections[${i}].photo.${k} material-English`);
          }
        }
      });
    }
  }

  // faqs
  if (r.faqs && r.faqs.length) {
    if (!ne.faqs) flag('missing ne.faqs');
    else {
      if (r.faqs.length !== ne.faqs.length) flag(`faqs ${r.faqs.length}->${ne.faqs.length}`);
      r.faqs.forEach((f, i) => {
        const nef = ne.faqs[i];
        if (!nef) { flag(`missing ne.faqs[${i}]`); return; }
        if (isMaterialEnglish(nef.q ?? '', `faqs[${i}].q`)) flag(`faqs[${i}].q material-English`);
        if (isMaterialEnglish(nef.a ?? '', `faqs[${i}].a`)) flag(`faqs[${i}].a material-English`);
      });
    }
  }

  // recommendedLinks: hrefs untouched; labels/descriptions narrative
  if (r.recommendedLinks && r.recommendedLinks.length) {
    if (!ne.recommendedLinks) flag('missing ne.recommendedLinks');
    else {
      if (r.recommendedLinks.length !== ne.recommendedLinks.length) flag(`recommendedLinks ${r.recommendedLinks.length}->${ne.recommendedLinks.length}`);
      r.recommendedLinks.forEach((l, i) => {
        const nel = ne.recommendedLinks[i];
        if (!nel) { flag(`missing ne.recommendedLinks[${i}]`); return; }
        if (l.href !== nel.href) flag(`recommendedLinks[${i}] href changed`);
        for (const k of ['label', 'description']) {
          if (typeof l[k] === 'string' && l[k].trim() && isMaterialEnglish(nel[k] ?? '', `recommendedLinks[${i}].${k}`)) flag(`recommendedLinks[${i}].${k} material-English`);
        }
      });
    }
  }

  if (ok) pass++;
}

console.log(`non-draft resources: ${total}`);
console.log(`STRICT PASS: ${pass}/${total}`);
console.log(`STRICT FAILURES: ${failures.length}`);
for (const f of failures.slice(0, 80)) console.log('  ' + f);
if (failures.length > 80) console.log(`  ... and ${failures.length - 80} more`);
