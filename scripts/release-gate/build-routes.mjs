// Build integrity + route inventory + bilingual parity + lang-attribute
// check. Invariants are derived from the live data files (src/data/*.js),
// never hardcoded page counts — this must stay correct as content grows.

import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { Report, DIST, collectHtmlFiles, readRoute, htmlLang, fileExists } from './lib.mjs';
import { catalogGroups, products } from '../../src/data/products.js';
import { applications } from '../../src/data/applications.js';
import { resources } from '../../src/data/resources.js';

export async function run() {
  const r = new Report('BUILD INTEGRITY + ROUTE INVENTORY + BILINGUAL PARITY');

  if (!existsSync(DIST)) {
    r.error('dist/ does not exist — build did not run or failed.');
    return r;
  }

  const htmlFiles = collectHtmlFiles();
  r.info(`generated HTML files: ${htmlFiles.length}`);

  const zeroByte = htmlFiles.filter((f) => statSync(f).size === 0);
  if (zeroByte.length) r.error(`zero-byte HTML output: ${zeroByte.map((f) => f.slice(DIST.length)).join(', ')}`);

  // Sanity floor: with 24 products, 37 applications and ~157 resources each
  // in 2 languages plus indexes/statics, the site should never regress to
  // a tiny fraction of that. This is a floor, not a fixed target.
  const floor = (products.length + applications.length + resources.filter((x) => !x.draft).length) * 2;
  if (htmlFiles.length < floor) {
    r.error(`generated page count (${htmlFiles.length}) is below the sanity floor (${floor}) derived from current data files — likely a broken build, not a content change.`);
  } else {
    r.info(`page count (${htmlFiles.length}) clears the data-derived sanity floor (${floor}).`);
  }

  // ---- Required static/system routes ----
  const requiredFiles = [
    'index.html',
    'en/index.html',
    'products/index.html',
    'en/products/index.html',
    'applications/index.html',
    'en/applications/index.html',
    'resources/index.html',
    'en/resources/index.html',
    'about/index.html',
    'en/about/index.html',
    'contact/index.html',
    'en/contact/index.html',
    '404.html',
    'sitemap-index.xml',
  ];
  for (const f of requiredFiles) {
    if (!fileExists(f)) r.error(`missing required route/output: /${f}`);
  }

  // The EN 404 is nested (en/404/index.html), not flat like the NE root
  // 404.html. Static hosts (Vercel included, by default) only recognize a
  // single root-level 404.html as the automatic not-found fallback — an
  // unmatched /en/* URL will very likely render the *Nepali* 404 page
  // instead of the English one. This is a hosting-behavior question this
  // local build cannot fully settle (see redirects.mjs's CONFIG-VERIFIED-
  // vs-LIVE-VERIFIED distinction) — flagged as a warning, not silently
  // "fixed", since a real fix means either accepting the degrade or adding
  // Vercel-side rewrite config, both of which are judgment calls.
  if (fileExists('en/404/index.html') && !fileExists('en/404.html')) {
    r.warn('EN 404 exists only at /en/404/ (nested); most static hosts (Vercel default included) only auto-serve a single root /404.html for unmatched routes — an unmatched /en/* URL will likely show the Nepali 404 page. Needs a human/infra decision (accept, or add Vercel rewrite), not a silent code fix.');
  }

  // ---- Product bilingual parity (detail + indexable category pages) ----
  let productPairsOk = 0;
  for (const p of products) {
    const ne = fileExists(`products/${p.slug}/index.html`);
    const en = fileExists(`en/products/${p.slug}/index.html`);
    if (ne && en) productPairsOk++;
    else if (!ne) r.error(`product ${p.slug}: missing Nepali route /products/${p.slug}/`);
    else if (!en) r.error(`product ${p.slug}: missing English route /en/products/${p.slug}/`);
  }
  r.info(`product detail pairs complete: ${productPairsOk}/${products.length}`);

  let categoryPairsOk = 0;
  const indexable = catalogGroups.filter((g) => g.indexable);
  for (const g of indexable) {
    const ne = fileExists(`products/${g.slug}/index.html`);
    const en = fileExists(`en/products/${g.slug}/index.html`);
    if (ne && en) categoryPairsOk++;
    else if (!ne) r.error(`category ${g.slug}: missing Nepali route /products/${g.slug}/`);
    else if (!en) r.error(`category ${g.slug}: missing English route /en/products/${g.slug}/`);
  }
  r.info(`product category pairs complete: ${categoryPairsOk}/${indexable.length}`);

  // ---- Application bilingual parity ----
  const publishedApps = applications.filter((a) => !a.draft);
  let appPairsOk = 0;
  for (const a of publishedApps) {
    const ne = fileExists(`applications/${a.slug}/index.html`);
    const en = fileExists(`en/applications/${a.slug}/index.html`);
    if (ne && en) appPairsOk++;
    else if (!ne) r.error(`application ${a.slug}: missing Nepali route /applications/${a.slug}/`);
    else if (!en) r.error(`application ${a.slug}: missing English route /en/applications/${a.slug}/`);
  }
  r.info(`application detail pairs complete: ${appPairsOk}/${publishedApps.length}`);

  // ---- Resource bilingual parity ----
  const publishedResources = resources.filter((res) => !res.draft);
  let resourcePairsOk = 0;
  for (const res of publishedResources) {
    const ne = fileExists(`resources/${res.slug}/index.html`);
    const en = fileExists(`en/resources/${res.slug}/index.html`);
    if (ne && en) resourcePairsOk++;
    else if (!ne) r.error(`resource ${res.slug}: missing Nepali route /resources/${res.slug}/`);
    else if (!en) r.error(`resource ${res.slug}: missing English route /en/resources/${res.slug}/`);
  }
  r.info(`resource detail pairs complete: ${resourcePairsOk}/${publishedResources.length}`);

  // ---- No resurrected /ne/ prefix architecture ----
  if (existsSync(join(DIST, 'ne'))) {
    r.error('dist/ne/ exists — the retired /ne/ prefix routing architecture has resurrected (vercel.json redirects assume this does NOT exist as a real route).');
  } else {
    r.info('no /ne/ prefix directory in dist/ — retired route architecture stays retired.');
  }

  // ---- lang attribute sanity on a representative sample ----
  const langSamples = [
    ['/', 'ne'],
    ['/en/', 'en'],
    ['/products/', 'ne'],
    ['/en/products/', 'en'],
    ['/about/', 'ne'],
    ['/en/about/', 'en'],
  ];
  for (const [route, expected] of langSamples) {
    const html = readRoute(route);
    if (!html) continue; // already reported as missing above
    const lang = htmlLang(html);
    if (lang !== expected) r.error(`${route}: <html lang="${lang}"> expected "${expected}"`);
  }

  return r;
}
