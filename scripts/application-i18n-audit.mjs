import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { applications } from '../src/data/applications.js';

const overridesDir = path.join(process.cwd(), 'src', 'data', 'applications-ne');
const OVERRIDES = {};
if (fs.existsSync(overridesDir)) {
  for (const file of fs.readdirSync(overridesDir)) {
    if (!file.endsWith('.js')) continue;
    OVERRIDES[file.replace(/\.js$/, '')] = (await import(pathToFileURL(path.join(overridesDir, file)).href)).default;
  }
}

const DEVA = /[\u0900-\u097F]/;
function isMaterialEnglish(s) {
  if (typeof s !== 'string' || s.trim() === '') return false;
  if (s.trim().length < 20) return false;
  if (DEVA.test(s)) return false;
  if (/[a-z]{4,}/.test(s)) return true;
  return false;
}

function hrefsOf(html) {
  const out = [];
  if (typeof html !== 'string') return out;
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

let total = 0, pass = 0;
const failures = [];

for (const app of applications) {
  if (app.draft) continue;
  total++;
  const ne = { ...OVERRIDES[app.slug], ...app.ne };
  if (!ne.title || !ne.intro) { failures.push(`${app.slug}: no ne override`); continue; }
  let ok = true;
  const flag = (msg) => { ok = false; failures.push(`${app.slug}: ${msg}`); };

  const enFields = [
    ['title', 'string'], ['cardDescription', 'string'], ['cardBenefit', 'string'],
    ['cardImageAlt', 'string'], ['intro', 'html'], ['whatTheyManufacture', 'html'],
    ['whySuitable', 'html'], ['manufacturingProcess', 'html'],
    ['ctaHeading', 'string'], ['ctaText', 'string'],
  ];
  for (const [key, kind] of enFields) {
    if (!app[key]) continue;
    if (!ne[key]) { flag(`missing ne.${key}`); continue; }
    if (kind === 'string' && isMaterialEnglish(ne[key])) flag(`ne.${key} material-English`);
    if (kind === 'html') {
      if (isMaterialEnglish(ne[key].replace(/<[^>]+>/g, ' '))) flag(`ne.${key} material-English`);
      const enH = hrefsOf(app[key]).sort().join('|');
      const neH = hrefsOf(ne[key]).sort().join('|');
      if (enH !== neH) flag(`ne.${key} hrefs changed`);
    }
  }
  if (app.seo?.title && !ne.seo?.title) flag('missing ne.seo.title');
  if (app.seo?.description && !ne.seo?.description) flag('missing ne.seo.description');

  for (const arrKey of ['requiredCharacteristics', 'advantages', 'commonProducts']) {
    if (!app[arrKey] || !app[arrKey].length) continue;
    if (!ne[arrKey]) { flag(`missing ne.${arrKey}`); continue; }
    if (app[arrKey].length !== ne[arrKey].length) flag(`${arrKey} ${app[arrKey].length}->${ne[arrKey].length}`);
    app[arrKey].forEach((item, i) => {
      const ni = ne[arrKey][i];
      if (typeof ni !== 'string') { flag(`${arrKey}[${i}] missing`); return; }
      if (isMaterialEnglish(ni.replace(/<[^>]+>/g, ' '))) flag(`${arrKey}[${i}] material-English`);
      if (hrefsOf(item).sort().join('|') !== hrefsOf(ni).sort().join('|')) flag(`${arrKey}[${i}] hrefs changed`);
    });
  }

  if (app.faqs && app.faqs.length) {
    if (!ne.faqs) { flag('missing ne.faqs'); }
    else {
      if (app.faqs.length !== ne.faqs.length) flag(`faqs ${app.faqs.length}->${ne.faqs.length}`);
      app.faqs.forEach((f, i) => {
        const nf = ne.faqs[i];
        if (!nf) { flag(`missing ne.faqs[${i}]`); return; }
        if (isMaterialEnglish(nf.q)) flag(`faqs[${i}].q material-English`);
        if (isMaterialEnglish(String(nf.a).replace(/<[^>]+>/g, ' '))) flag(`faqs[${i}].a material-English`);
        if (hrefsOf(f.a).sort().join('|') !== hrefsOf(nf.a).sort().join('|')) flag(`faqs[${i}].a hrefs changed`);
      });
    }
  }

  if (ok) pass++;
}

console.log(`applications: ${total}`);
console.log(`STRICT PASS: ${pass}/${total}`);
console.log(`STRICT FAILURES: ${failures.length}`);
for (const f of failures.slice(0, 60)) console.log('  ' + f);
if (failures.length > 60) console.log(`  ... and ${failures.length - 60} more`);

const bySlug = {};
for (const f of failures) {
  const [slug, ...rest] = f.split(': ');
  (bySlug[slug] ??= []).push(rest.join(': '));
}
fs.writeFileSync(path.join(process.cwd(), 'scripts', '.app-failures.json'), JSON.stringify(bySlug, null, 2));
