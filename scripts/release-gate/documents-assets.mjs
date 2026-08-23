// PDF/document integrity (customer catalogue CTA vs. supplier TDS/SDS
// mirrors, kept explicitly distinct) + general asset integrity + local
// machine-path leakage detection, all against the built dist/ output.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { Report, ROOT, DIST, PROD_ORIGIN, collectFiles, collectHtmlFiles, toRoute, hrefs, fileExists, fileSize } from './lib.mjs';
import { products } from '../../src/data/products.js';

function isPdfSignatureValid(distRelativePath) {
  const file = join(DIST, distRelativePath.replace(/^\//, ''));
  const buf = Buffer.alloc(5);
  try {
    const fd = readFileSync(file);
    return fd.slice(0, 5).toString('ascii') === '%PDF-';
  } catch {
    return false;
  }
}

const LOCAL_PATH_LEAK_PATTERNS = [
  { name: 'localhost URL', re: /https?:\/\/localhost(:\d+)?/gi },
  { name: '127.0.0.1 URL', re: /https?:\/\/127\.0\.0\.1(:\d+)?/gi },
  { name: 'file:// URL', re: /file:\/\//gi },
  { name: 'Windows drive path', re: /[A-Za-z]:\\[A-Za-z0-9_\\.\- ]+/g },
  { name: 'developer home path', re: /\/Users\/[A-Za-z0-9_.\-]+\/dev\//g },
  { name: 'Vercel preview host', re: /[a-z0-9-]+\.vercel\.app/gi },
];

export async function run() {
  const r = new Report('DOCUMENT INTEGRITY + ASSET INTEGRITY + PATH-LEAK SAFETY');

  // ---- Customer catalogue CTA (Samrat FRP Traders' own catalogue) ----
  const customerCatalogue = 'downloads/samrat-frp-traders-product-catalogue.pdf';
  if (!fileExists(customerCatalogue)) {
    r.error(`customer catalogue CTA missing: /${customerCatalogue}`);
  } else if (fileSize(customerCatalogue) === 0) {
    r.error(`customer catalogue CTA is zero-byte: /${customerCatalogue}`);
  } else if (!isPdfSignatureValid(`/${customerCatalogue}`)) {
    r.error(`customer catalogue CTA does not start with a valid %PDF signature: /${customerCatalogue}`);
  } else {
    r.info(`customer catalogue CTA OK: /${customerCatalogue} (${fileSize(customerCatalogue)} bytes)`);
  }

  // ---- Supplier technical source citation (Samrat Poly Resins catalogue) ----
  const supplierCatalogue = 'downloads/samrat-poly-resins-product-catalogue.pdf';
  if (!fileExists(supplierCatalogue)) {
    r.warn(`supplier technical-source catalogue not found: /${supplierCatalogue} (not customer-facing CTA — lower priority)`);
  } else if (fileSize(supplierCatalogue) === 0 || !isPdfSignatureValid(`/${supplierCatalogue}`)) {
    r.error(`supplier technical-source catalogue is invalid/zero-byte: /${supplierCatalogue}`);
  } else {
    r.info(`supplier technical-source catalogue OK: /${supplierCatalogue}`);
  }

  // ---- Per-product TDS/SDS mirrors (local, customer-facing download links) ----
  // The local mirror filename is NOT reliably derivable from the product's
  // own Nepal-facing slug (e.g. slug "glass-fiber-mat" mirrors as
  // "fibre-glass-mat-tds.pdf", "polyester-putty-resin" as "pet-resin-tds.
  // pdf") — it follows the supplier's own filename convention, which is
  // recorded verbatim in each product's `documents[].url`. Deriving the
  // expected local path from that basename (rather than guessing from the
  // slug) is what the actual page templates do too, so this validates what
  // the site really links to.
  function localDocPath(kind, product) {
    const doc = (product.documents ?? []).find((d) => d.type === (kind === 'tds' ? 'Technical Data Sheet' : 'Safety Data Sheet'));
    if (!doc?.url) return null;
    const basename = doc.url.split('/').pop();
    return `${kind}/${basename}`;
  }

  let tdsOk = 0;
  let sdsOk = 0;
  for (const p of products) {
    const tds = localDocPath('tds', p);
    const sds = localDocPath('sds', p);

    if (!tds) r.warn(`${p.slug}: no Technical Data Sheet entry in documents[] to derive an expected local path from.`);
    else if (!fileExists(tds)) r.error(`${p.slug}: missing TDS file /${tds}`);
    else if (fileSize(tds) === 0 || !isPdfSignatureValid(`/${tds}`)) r.error(`${p.slug}: TDS file invalid/zero-byte /${tds}`);
    else tdsOk++;

    if (!sds) r.warn(`${p.slug}: no Safety Data Sheet entry in documents[] to derive an expected local path from.`);
    else if (!fileExists(sds)) r.error(`${p.slug}: missing SDS file /${sds}`);
    else if (fileSize(sds) === 0 || !isPdfSignatureValid(`/${sds}`)) r.error(`${p.slug}: SDS file invalid/zero-byte /${sds}`);
    else sdsOk++;
  }
  r.info(`product TDS coverage: ${tdsOk}/${products.length}`);
  r.info(`product SDS coverage: ${sdsOk}/${products.length}`);

  // ---- Every locally-referenced asset in the built HTML must resolve ----
  const htmlFiles = collectHtmlFiles();
  const missingAssets = new Set();
  const zeroByteAssets = new Set();
  const referenced = new Set();
  const leaks = [];

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const route = toRoute(file);

    for (const rawUrl of hrefs(html)) {
      if (!rawUrl || rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:') || rawUrl.startsWith('javascript:')) continue;
      // og:image/twitter:image content is an absolute production URL
      // (buildCanonicalUrl) — treat our own origin as internal rather than
      // skipping it as "external".
      const url = rawUrl.startsWith(PROD_ORIGIN) ? rawUrl.slice(PROD_ORIGIN.length) : rawUrl;
      if (/^https?:\/\//.test(url)) continue; // genuinely external — not our asset to validate
      if (!url.startsWith('/')) continue;
      const clean = url.split('#')[0].split('?')[0];
      // Only care about actual asset-looking paths here (images/video/pdf/fonts) —
      // internal page routes are build-routes.mjs's job, and check:links already
      // covers general href resolution.
      if (!/\.(png|jpe?g|webp|avif|svg|gif|mp4|webm|pdf|woff2?|ttf|otf|ico)$/i.test(clean)) continue;
      referenced.add(clean);
      if (!fileExists(clean)) {
        missingAssets.add(`${clean} (referenced from ${route})`);
      } else if (fileSize(clean) === 0) {
        zeroByteAssets.add(clean);
      }
    }

    for (const { name, re } of LOCAL_PATH_LEAK_PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(html))) leaks.push(`${route}: ${name} — "${m[0]}"`);
    }
  }

  r.info(`unique local assets referenced across ${htmlFiles.length} pages: ${referenced.size}`);
  if (missingAssets.size) {
    for (const m of [...missingAssets].slice(0, 20)) r.error(`missing referenced asset: ${m}`);
    if (missingAssets.size > 20) r.error(`... and ${missingAssets.size - 20} more missing assets`);
  } else {
    r.info('all locally-referenced image/video/pdf/font assets resolve to real files.');
  }
  if (zeroByteAssets.size) {
    for (const z of zeroByteAssets) r.error(`zero-byte asset: /${z}`);
  }

  if (leaks.length) {
    for (const l of leaks.slice(0, 15)) r.error(`local-machine/dev path leaked into production HTML: ${l}`);
    if (leaks.length > 15) r.error(`... and ${leaks.length - 15} more path leaks`);
  } else {
    r.info('no localhost/file://Windows-path/dev-machine-path/Vercel-preview leakage found in built HTML.');
  }

  // ---- Orphan candidates: files under public/ never referenced by any
  // built page. Report only — never delete. ----
  const publicDir = join(ROOT, 'public');
  const NEVER_FLAG = new Set(['_headers', 'robots.txt', 'favicon.png', 'apple-touch-icon.png']);
  const publicFiles = collectFiles(publicDir).map((f) => relative(publicDir, f).replace(/\\/g, '/'));
  const orphanCandidates = publicFiles.filter((f) => {
    if (NEVER_FLAG.has(f)) return false;
    if (f.startsWith('images/og/') || f.includes('og-images/')) return false; // og:image assets aren't <img>/href-referenced in-page
    return !referenced.has(`/${f}`);
  });
  if (orphanCandidates.length) {
    r.warn(`${orphanCandidates.length} file(s) under public/ are never referenced by any built page (orphan candidates — report only, not removed):`);
    for (const o of orphanCandidates.slice(0, 20)) r.warn(`  /${o}`);
    if (orphanCandidates.length > 20) r.warn(`  ... and ${orphanCandidates.length - 20} more`);
  } else {
    r.info('no orphan candidates found under public/.');
  }

  return r;
}
