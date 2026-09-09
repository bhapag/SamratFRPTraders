// Document-library derivation — Samrat FRP Traders Nepal.
//
// This module asserts NOTHING. It only reshapes the `documents` arrays that
// already live on each product in products.js, so the library page and the
// category hubs can present the same verified facts without a second,
// hand-maintained copy that could drift out of sync.
//
// Every document surfaced here is issuer-attributed and carries a live
// supplier-hosted HTTPS URL that was verified at implementation time.
// Products with no documents on file are reported explicitly rather than
// hidden, so the page can never imply that a missing document exists.

import { catalogGroups, products } from './products.js';

// Every document in the catalogue is issued by the supplier, not by
// Samrat FRP Traders. This single constant keeps that attribution honest
// in one place; it is rendered on the library page and each hub.
export const DOCUMENT_ISSUER = 'Samrat Poly Resins, India';

function docsOf(product) {
  return product.documents ?? [];
}

/**
 * Products whose entire document set is also published under another
 * product name. The supplier issues one TDS/SDS pair covering both names
 * (e.g. GP Clear Resin and its generic commercial description,
 * Unsaturated Polyester Resin), so the library says so instead of
 * presenting the same PDF twice as if two documents existed.
 */
function buildSharedIndex() {
  const owners = new Map();
  for (const product of products) {
    for (const doc of docsOf(product)) {
      if (!doc.url) continue;
      if (!owners.has(doc.url)) owners.set(doc.url, []);
      owners.get(doc.url).push(product);
    }
  }

  const shared = new Map();
  for (const product of products) {
    const docs = docsOf(product).filter((d) => d.url);
    if (!docs.length) continue;
    const partners = docs
      .map((d) => owners.get(d.url).filter((p) => p.slug !== product.slug))
      .reduce((acc, list) => acc.filter((p) => list.some((q) => q.slug === p.slug)), owners.get(docs[0].url).filter((p) => p.slug !== product.slug));
    if (partners.length) shared.set(product.slug, partners);
  }
  return shared;
}

const sharedIndex = buildSharedIndex();

/** Products that share their whole document set with another product, or []. */
export function sharesDocumentsWith(product) {
  return sharedIndex.get(product.slug) ?? [];
}

/**
 * The library, grouped by real catalogue family, in catalogue order.
 * Families with no documented product are omitted entirely — an empty
 * heading would imply documents that do not exist.
 */
export function documentSections() {
  return catalogGroups
    .map((group) => ({
      group,
      entries: products
        .filter((p) => p.group === group.slug && docsOf(p).length)
        .map((product) => ({
          product,
          documents: docsOf(product),
          sharedWith: sharesDocumentsWith(product),
        })),
    }))
    .filter((section) => section.entries.length > 0);
}

/** Catalogue products that have no document on file, in catalogue order. */
export function productsWithoutDocuments() {
  return products.filter((p) => !docsOf(p).length);
}

/** Real, build-time counts. Never hand-typed, so they cannot go stale. */
export function documentStats() {
  const documented = products.filter((p) => docsOf(p).length);
  const uniqueUrls = new Set();
  let entries = 0;
  for (const product of documented) {
    for (const doc of docsOf(product)) {
      entries += 1;
      if (doc.url) uniqueUrls.add(doc.url);
    }
  }
  return {
    totalProducts: products.length,
    documentedProducts: documented.length,
    undocumentedProducts: products.length - documented.length,
    documentEntries: entries,
    uniqueFiles: uniqueUrls.size,
    families: documentSections().length,
  };
}

/**
 * Every distinct document issuer in the catalogue.
 *
 * Today this is a single supplier, which is why the library states the
 * issuer once per family rather than repeating it on all 50 rows — a
 * column carrying one identical value 50 times informs nobody, and it
 * made the supplier the dominant name on a Samrat FRP Traders page. If a
 * second issuer is ever added, the per-row column returns automatically.
 */
export function distinctIssuers() {
  const issuers = new Set();
  for (const product of products) {
    for (const doc of docsOf(product)) {
      if (doc.issuer) issuers.add(doc.issuer);
    }
  }
  return [...issuers];
}

/** Documents available for one family — used by the category hubs. */
export function documentsForGroup(groupSlug) {
  const inGroup = products.filter((p) => p.group === groupSlug);
  const documented = inGroup.filter((p) => docsOf(p).length);
  return {
    products: inGroup,
    documented,
    undocumented: inGroup.filter((p) => !docsOf(p).length),
    entries: documented.reduce((sum, p) => sum + docsOf(p).length, 0),
  };
}

/**
 * A verified grade-comparison matrix for one family, built only from
 * technicalHighlights that the supplier actually publishes.
 *
 * Rows are limited to labels present on at least two products in the
 * family, because a column that only one grade fills compares nothing.
 * Returns null when the family cannot support an honest comparison —
 * the hub then simply does not render a table rather than padding one
 * out with blanks or inferred values.
 */
export function gradeComparison(groupSlug) {
  const withHighlights = products.filter(
    (p) => p.group === groupSlug && (p.technicalHighlights ?? []).length,
  );
  if (withHighlights.length < 2) return null;

  const counts = new Map();
  for (const product of withHighlights) {
    for (const h of product.technicalHighlights) {
      counts.set(h.label, (counts.get(h.label) ?? 0) + 1);
    }
  }

  const labels = [...counts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label]) => label);

  if (!labels.length) return null;

  return {
    labels,
    rows: withHighlights.map((product) => ({
      product,
      values: labels.map((label) => {
        const hit = product.technicalHighlights.find((h) => h.label === label);
        return hit ? hit.value : null;
      }),
      source: product.technicalSource ?? null,
    })),
  };
}
