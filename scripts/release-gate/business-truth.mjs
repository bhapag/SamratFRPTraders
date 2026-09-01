// Business-truth guard + identity assertions + contact-data consistency.
//
// Design principle (explicitly requested): do NOT blindly flag every
// appearance of "India", "manufacturer" or "ISO" — "Samrat Poly Resins,
// India" is a verified, approved supplier attribution, and packaging-size
// mentions (e.g. "225 kg drums") describe the supplier's product format as
// a documented technical fact, not a Nepal commercial promise (the data
// layer already distinguishes this via `nepalCommercialEvidenceStatus`).
// Hard-fail only on unambiguous, unsupported SFT-as-manufacturer or
// pricing/currency claims; everything else context-sensitive is reported
// as a separate, capped "ambiguous — review" bucket rather than noise.

import { readFileSync } from 'node:fs';
import { collectHtmlFiles, toRoute, Report } from './lib.mjs';
import { site } from '../../src/data/site.js';

const SAFE_CONTEXT_RE = /samrat poly resins|supplier|india\)/i;
// A negation word anywhere in the same ~180-char context window as
// "certified" — regardless of which comes first ("materials that ... does
// not currently supply" negates a "certified" that appeared earlier in the
// same sentence) — means the sentence is a disclaimer ("this is NOT
// certified for..."), not a claim. Exactly the kind of responsible, honest
// content this scanner exists to leave alone; without a bidirectional
// check, sentences built the other way around still showed up as
// "ambiguous", drowning out any real signal.
const NEGATION_WORD_RE = /\bnot\b|\bdoesn't\b|\bdoes not\b|\bdo not\b|होइन|गर्दैन|नगर्ने|नगरिएको|गरिँदैन/i;

function context(html, index, radius = 90) {
  return html.slice(Math.max(0, index - radius), index + radius).replace(/\s+/g, ' ').trim();
}

// Unambiguous — always a hard fail regardless of surrounding text.
const HARD_FAIL_PATTERNS = [
  { name: 'GSTIN', re: /\bGSTIN\b/gi },
  { name: 'pan-India business claim', re: /\bpan-india\b/gi },
  { name: 'currency symbol (₹)', re: /₹/g },
  { name: 'INR currency code', re: /(?<![A-Za-z])INR(?![A-Za-z])/g },
  { name: 'Rs. currency prefix', re: /\bRs\.\s?\d/g },
  { name: 'direct manufacturer claim ("we manufacture")', re: /\bwe manufacture\b/gi },
  { name: 'direct manufacturer claim ("our factory")', re: /\bour factory\b/gi },
  { name: 'direct manufacturer claim ("our manufacturing facility")', re: /\bour manufacturing facility\b/gi },
  { name: 'direct manufacturer claim ("our plant")', re: /\bour plant\b/gi },
  { name: 'direct manufacturer claim (SFT manufactures)', re: /\bsamrat frp traders manufactures\b/gi },
  { name: 'factory ownership claim', re: /\bfactory-owned\b/gi },
];

// Context-sensitive — flagged only when NOT near a safe supplier-attribution
// context (Samrat Poly Resins / "supplier" / "India)" as in the standard
// "(Samrat Poly Resins, India)" attribution parenthetical).
const AMBIGUOUS_PATTERNS = [
  { name: 'manufacturer of', re: /\bmanufacturer of\b/gi },
  { name: 'manufacturing facility', re: /\bmanufacturing facility\b/gi },
  { name: 'certification wording', re: /\bISO\s?9001\b|\bcertified\b/gi },
];

export async function run() {
  const r = new Report('BUSINESS TRUTH + IDENTITY + CONTACT CONSISTENCY');
  const htmlFiles = collectHtmlFiles();

  let hardFails = 0;
  const ambiguous = [];

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const route = toRoute(file);

    for (const { name, re } of HARD_FAIL_PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(html))) {
        hardFails++;
        r.error(`${route}: ${name} — "${context(html, m.index)}"`);
      }
    }

    for (const { name, re } of AMBIGUOUS_PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(html))) {
        const ctx = context(html, m.index);
        if (SAFE_CONTEXT_RE.test(ctx)) continue; // near "Samrat Poly Resins" / "supplier" — treat as safe attribution
        if (name === 'certification wording' && NEGATION_WORD_RE.test(ctx)) continue; // an honest "not certified" disclaimer, not a claim
        ambiguous.push(`${route}: ${name} — "${ctx}"`);
      }
    }
  }

  r.info(`hard-fail business-truth patterns found: ${hardFails}`);
  if (ambiguous.length) {
    r.warn(`${ambiguous.length} ambiguous match(es) not near a recognized safe-supplier context — human review, not auto-failed:`);
    for (const a of ambiguous.slice(0, 25)) r.warn(`  ${a}`);
    if (ambiguous.length > 25) r.warn(`  ... and ${ambiguous.length - 25} more (see full scan for all)`);
  } else {
    r.info('no ambiguous manufacturer/certification wording outside recognized safe-supplier context.');
  }

  // ---- Business identity assertions (About page, both languages) ----
  const identityChecks = [
    ['/about/', /व्यापारी[^<]*आपूर्तिकर्ता[^<]*आयातकर्ता[^<]*पुनर्विक्रेता/, 'Nepali trader/supplier/importer/reseller positioning'],
    ['/en/about/', /Trader[^<]*Supplier[^<]*Importer[^<]*Reseller/i, 'English trader/supplier/importer/reseller positioning'],
  ];
  for (const [route, re, label] of identityChecks) {
    const file = htmlFiles.find((f) => toRoute(f) === route);
    if (!file) continue;
    const html = readFileSync(file, 'utf8');
    if (!re.test(html)) r.error(`${route}: expected ${label} not found — business identity may have drifted.`);
    else r.info(`${route}: ${label} present.`);
  }

  // Manufacturer word should never appear directly bound to the brand name.
  for (const route of ['/about/', '/en/about/']) {
    const file = htmlFiles.find((f) => toRoute(f) === route);
    if (!file) continue;
    const html = readFileSync(file, 'utf8');
    if (/samrat frp traders[^.]{0,40}\bmanufactur/i.test(html)) {
      r.error(`${route}: "Samrat FRP Traders" appears within ~40 chars of "manufactur..." — verify this isn't an accidental manufacturer claim.`);
    }
  }

  // ---- Contact-data consistency: single source of truth (site.js) vs
  // what actually shipped in the built HTML. ----
  const canonicalPhone = site.business.phone;
  const canonicalTel = site.business.tel;
  const canonicalEmail = site.business.email;
  const canonicalWa = site.business.whatsapp;
  const allowedTels = new Set(site.business.contactNumbers.map((contact) => contact.tel));
  const allowedWa = new Set(site.business.contactNumbers.map((contact) => contact.whatsapp));

  const telRe = /tel:(\+?\d[\d-]*)/g;
  const mailRe = /mailto:([^"'?]+)/g;
  const waRe = /wa\.me\/(\d+)/g;

  const foundTel = new Set();
  const foundMail = new Set();
  const foundWa = new Set();

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    let m;
    telRe.lastIndex = 0;
    while ((m = telRe.exec(html))) foundTel.add(m[1]);
    mailRe.lastIndex = 0;
    while ((m = mailRe.exec(html))) foundMail.add(m[1]);
    waRe.lastIndex = 0;
    while ((m = waRe.exec(html))) foundWa.add(m[1]);
  }

  const badTel = [...foundTel].filter((t) => !allowedTels.has(t));
  const badMail = [...foundMail].filter((e) => e !== canonicalEmail);
  const badWa = [...foundWa].filter((w) => !allowedWa.has(w));

  if (badTel.length) r.error(`tel: links drifted from site.js approved contact values: found ${badTel.join(', ')}`);
  else r.info(`all tel: links match the approved contact values — ${foundTel.size ? 'checked' : 'none found in dist'}.`);

  if (badMail.length) r.error(`mailto: links drifted from site.js canonical value ("${canonicalEmail}"): found ${badMail.join(', ')}`);
  else r.info(`all mailto: links match the canonical address (${canonicalEmail}).`);

  if (badWa.length) r.error(`wa.me links drifted from site.js approved contact values: found ${badWa.join(', ')}`);
  else r.info(`all wa.me links match the approved contact values.`);

  for (const file of htmlFiles) {
    const route = toRoute(file);
    if (route === '/contact/' || route === '/en/contact/') continue;
    const html = readFileSync(file, 'utf8');
    waRe.lastIndex = 0;
    let m;
    while ((m = waRe.exec(html))) {
      if (m[1] !== canonicalWa) {
        r.error(`${route}: non-contact WhatsApp link must use the primary Nepal number ("${canonicalWa}"): found ${m[1]}`);
      }
    }
  }

  r.info(`canonical business identity — name: "${site.name}", legal: "${site.legalName}", phone: "${canonicalPhone}", address: "${site.business.addressLine1}, ${site.business.city}, ${site.business.country}".`);

  return r;
}
