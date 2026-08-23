// SEO tag presence/structure, hreflang reciprocity, sitemap safety, and
// JSON-LD structured-data validation (including the Product.manufacturer
// business-truth guard) — all read from the built dist/ HTML, so this
// checks what actually ships, not what the templates merely intend.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  Report,
  DIST,
  PROD_ORIGIN,
  collectHtmlFiles,
  toRoute,
  readRoute,
  title,
  metaContent,
  metaProperty,
  canonical,
  hreflangs,
  robotsMeta,
  jsonLdBlocks,
} from './lib.mjs';
import { products } from '../../src/data/products.js';
import { applications } from '../../src/data/applications.js';
import { resources } from '../../src/data/resources.js';

const FORBIDDEN_CANONICAL_HOSTS = ['localhost', '127.0.0.1', '.vercel.app', 'samratpolyresins'];

// 404 pages set canonical={false} deliberately (src/pages/404.astro) — a
// not-found page has no "correct URL" to canonicalize to. Excluded from
// the canonical requirement rather than flagged as a false regression.
const NO_CANONICAL_ROUTES = new Set(['/404.html', '/en/404/']);

function checkPageSeo(r, route, html) {
  if (!title(html)) r.error(`${route}: missing <title>`);
  if (!metaContent(html, 'description')) r.error(`${route}: missing meta description`);

  const c = canonical(html);
  if (!c) {
    if (!NO_CANONICAL_ROUTES.has(route)) r.error(`${route}: missing canonical link`);
  } else {
    if (!/^https?:\/\//.test(c)) r.error(`${route}: canonical is not absolute ("${c}")`);
    if (!c.startsWith(PROD_ORIGIN)) r.error(`${route}: canonical does not use ${PROD_ORIGIN} ("${c}")`);
    for (const bad of FORBIDDEN_CANONICAL_HOSTS) {
      if (c.includes(bad)) r.error(`${route}: canonical leaks forbidden host "${bad}" ("${c}")`);
    }
  }

  if (!robotsMeta(html)) r.warn(`${route}: no meta robots tag present`);
  if (!metaProperty(html, 'og:title')) r.warn(`${route}: missing og:title`);
  if (!metaProperty(html, 'og:description')) r.warn(`${route}: missing og:description`);
  if (!metaContent(html, 'twitter:card')) r.warn(`${route}: missing twitter:card`);
}

function checkHreflangPair(r, neRoute, enRoute) {
  const neHtml = readRoute(neRoute);
  const enHtml = readRoute(enRoute);
  if (!neHtml || !enHtml) return; // route existence is build-routes.mjs's job

  const neAlt = hreflangs(neHtml);
  const enAlt = hreflangs(enHtml);
  const neUrl = `${PROD_ORIGIN}${neRoute}`;
  const enUrl = `${PROD_ORIGIN}${enRoute}`;

  const find = (list, code) => list.find((a) => a.hreflang === code)?.href;

  // Nepali page: ne-NP -> self, en-NP -> EN counterpart, x-default -> self
  if (find(neAlt, 'ne-NP') !== neUrl) r.error(`${neRoute}: hreflang ne-NP should self-reference "${neUrl}", got "${find(neAlt, 'ne-NP')}"`);
  if (find(neAlt, 'en-NP') !== enUrl) r.error(`${neRoute}: hreflang en-NP should point to "${enUrl}", got "${find(neAlt, 'en-NP')}"`);
  if (find(neAlt, 'x-default') !== neUrl) r.error(`${neRoute}: hreflang x-default should be the Nepali/default route "${neUrl}", got "${find(neAlt, 'x-default')}"`);

  // English page: ne-NP -> NE counterpart, en-NP -> self, x-default -> NE counterpart
  if (find(enAlt, 'ne-NP') !== neUrl) r.error(`${enRoute}: hreflang ne-NP should point to "${neUrl}", got "${find(enAlt, 'ne-NP')}"`);
  if (find(enAlt, 'en-NP') !== enUrl) r.error(`${enRoute}: hreflang en-NP should self-reference "${enUrl}", got "${find(enAlt, 'en-NP')}"`);
  if (find(enAlt, 'x-default') !== neUrl) r.error(`${enRoute}: hreflang x-default should point to the Nepali/default route "${neUrl}", got "${find(enAlt, 'x-default')}"`);

  // No duplicated alternate entries
  for (const [route, list] of [[neRoute, neAlt], [enRoute, enAlt]]) {
    const codes = list.map((a) => a.hreflang);
    const dupes = codes.filter((c, i) => codes.indexOf(c) !== i);
    if (dupes.length) r.error(`${route}: duplicated hreflang entries: ${[...new Set(dupes)].join(', ')}`);
  }
}

function checkJsonLd(r, route, html) {
  const blocks = jsonLdBlocks(html);
  for (const [i, raw] of blocks.entries()) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      r.error(`${route}: JSON-LD block ${i} is invalid JSON (${e.message})`);
      continue;
    }
    const type = data['@type'];
    const types = Array.isArray(type) ? type : [type];

    if (types.includes('Product')) {
      // The hard business-truth rule: Samrat FRP Traders is a trader/
      // supplier/importer/reseller, never the manufacturer. Samrat Poly
      // Resins is the documented TDS/SDS-issuing supplier — that
      // attribution is fine anywhere else, but a schema.org
      // `manufacturer` field on our own Product markup asserting *us* (or
      // any unsupported party) as manufacturer is a hard-fail regression.
      if (data.manufacturer) {
        const asString = JSON.stringify(data.manufacturer);
        r.error(`${route}: Product schema has a "manufacturer" field (${asString}) — Samrat FRP Traders is documented as trader/supplier/importer/reseller, never manufacturer. This field should not exist on our Product markup.`);
      }
    }

    // Any URL-typed field present should be absolute against production,
    // never a bare path, localhost, or preview host.
    for (const key of ['url', '@id']) {
      if (typeof data[key] === 'string' && data[key].startsWith('/')) {
        r.warn(`${route}: JSON-LD "${key}" is a relative path ("${data[key]}") — should be absolute.`);
      }
    }
  }
  return blocks.length;
}

export async function run() {
  const r = new Report('SEO + HREFLANG + STRUCTURED DATA');
  const htmlFiles = collectHtmlFiles();

  // Which routes count as "indexable page classes" for the SEO tag check —
  // everything except the raw sitemap/robots/asset output, which aren't
  // HTML pages at all (already filtered by collectHtmlFiles's .html scope).
  let checked = 0;
  const schemaTypeCounts = {};
  let jsonLdTotal = 0;
  for (const file of htmlFiles) {
    const route = toRoute(file);
    const html = readFileSync(file, 'utf8');
    checkPageSeo(r, route, html);
    checked++;

    const blocks = jsonLdBlocks(html);
    jsonLdTotal += checkJsonLd(r, route, html);
    for (const raw of blocks) {
      try {
        const data = JSON.parse(raw);
        const types = Array.isArray(data['@type']) ? data['@type'] : [data['@type']];
        for (const t of types) if (t) schemaTypeCounts[t] = (schemaTypeCounts[t] ?? 0) + 1;
      } catch {
        /* already reported above */
      }
    }
  }
  r.info(`pages checked for SEO tags: ${checked}`);
  r.info(`JSON-LD blocks parsed: ${jsonLdTotal}`);
  r.info(`schema types found: ${Object.entries(schemaTypeCounts).map(([k, v]) => `${k}=${v}`).join(', ') || 'none'}`);

  // ---- Hreflang reciprocity across every bilingual pair ----
  checkHreflangPair(r, '/', '/en/');
  checkHreflangPair(r, '/products/', '/en/products/');
  checkHreflangPair(r, '/applications/', '/en/applications/');
  checkHreflangPair(r, '/resources/', '/en/resources/');
  checkHreflangPair(r, '/about/', '/en/about/');
  checkHreflangPair(r, '/contact/', '/en/contact/');
  for (const p of products) checkHreflangPair(r, `/products/${p.slug}/`, `/en/products/${p.slug}/`);
  for (const a of applications.filter((x) => !x.draft)) checkHreflangPair(r, `/applications/${a.slug}/`, `/en/applications/${a.slug}/`);
  for (const res of resources.filter((x) => !x.draft)) checkHreflangPair(r, `/resources/${res.slug}/`, `/en/resources/${res.slug}/`);
  r.info(`hreflang reciprocity checked across ${1 + 1 + 1 + 1 + 1 + 1 + products.length + applications.filter((x) => !x.draft).length + resources.filter((x) => !x.draft).length} bilingual pairs.`);

  // ---- Sitemap safety ----
  try {
    const sitemapIndex = readFileSync(join(DIST, 'sitemap-index.xml'), 'utf8');
    const sitemapUrls = [...sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    r.info(`sitemap-index.xml references ${sitemapUrls.length} sub-sitemap(s).`);
    let totalUrls = 0;
    const badUrls = [];
    for (const sub of sitemapUrls) {
      const localName = sub.split('/').pop();
      const subPath = join(DIST, localName);
      let subXml;
      try {
        subXml = readFileSync(subPath, 'utf8');
      } catch {
        r.error(`sitemap-index.xml references "${sub}" but ${localName} was not found in dist/`);
        continue;
      }
      const urls = [...subXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      totalUrls += urls.length;
      for (const u of urls) {
        if (!u.startsWith(PROD_ORIGIN)) badUrls.push(u);
        if (u.includes('/ne/')) badUrls.push(u);
        // The literal retired PRODUCT route only — NOT any resource
        // article whose slug happens to discuss "unsaturated polyester
        // resin" as a chemistry topic (e.g. "what-is-unsaturated-
        // polyester-resin"), which is legitimate educational content.
        if (u.includes('/products/unsaturated-polyester-resin/')) badUrls.push(u);
      }
    }
    r.info(`sitemap contains ${totalUrls} URL(s) total.`);
    if (badUrls.length) {
      const sample = [...new Set(badUrls)].slice(0, 10);
      r.error(`sitemap contains ${badUrls.length} unsafe URL(s) (wrong host, retired /ne/ prefix, or the retired UPR route): ${sample.join(', ')}${badUrls.length > sample.length ? ', ...' : ''}`);
    } else {
      r.info('sitemap URLs are all production-host, no /ne/ legacy paths, no retired UPR route.');
    }
  } catch (e) {
    r.error(`could not validate sitemap: ${e.message}`);
  }

  return r;
}
