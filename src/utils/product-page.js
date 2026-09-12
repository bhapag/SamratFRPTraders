// Shared derivations for the product-page system.
// Everything here is data-driven from the verified catalogue, the migrated
// applications/resources archives, and supplier document URLs.

import { applications } from '../data/applications.js';
import { resources } from '../data/resources.js';
import { getGroup, products } from '../data/products.js';

// Supplier-site slugs used inside applications/resources data → current
// Nepal catalogue slugs.
const SLUG_ALIASES = {
  'fibre-glass-mat': 'glass-fiber-mat',
  'pet-resin': 'polyester-putty-resin',
  'epoxy-clear-casting-resin': 'clear-casting-resin',
};

const alias = (slug) => SLUG_ALIASES[slug] ?? slug;

// Product slugs referenced by a resource's recommendedLinks (product hrefs).
export const hrefProductSlug = (href) => {
  if (!href || typeof href !== 'string') return null;
  const match = href.match(/\/products\/([^/?#]+)\/?$/);
  return match ? alias(match[1]) : null;
};

// An application guide is *about* the products in its primaryProductSlugs.
// relatedProductSlugs is a different thing: the other materials a fabricator
// also needs for that job. Matching on the second list made every guide that
// merely mentioned a resin appear as if it were written about it, so general
// grades collected guides belonging to other products while their own guides
// went missing. Subject first; the materials list is only a fallback.
const liveApplications = () => applications.filter((app) => !app.draft);

// Guides written about this product.
export function primaryApplicationsFor(product) {
  return liveApplications().filter((app) =>
    (app.primaryProductSlugs ?? []).map(alias).includes(product.slug),
  );
}

// Guides where this product is one of the other materials the job needs.
export function materialApplicationsFor(product) {
  return liveApplications().filter(
    (app) =>
      !(app.primaryProductSlugs ?? []).map(alias).includes(product.slug) &&
      (app.relatedProductSlugs ?? []).map(alias).includes(product.slug),
  );
}

// Guides to show on a product page. A resin or gelcoat shows the guides that
// are about it. A consumable such as glass fibre mat or an MEKP hardener is
// never the subject of a guide, so it shows the jobs it is used in instead.
export function applicationsFor(product) {
  const primary = primaryApplicationsFor(product);
  return primary.length > 0 ? primary : materialApplicationsFor(product);
}

// Resource articles whose recommendedLinks reference this product's page.
export function resourcesFor(product) {
  const seen = new Set();
  return resources.filter((r) => {
    if (r.draft) return false;
    const slugs = (r.recommendedLinks ?? []).map((link) => hrefProductSlug(link.href)).filter(Boolean);
    if (slugs.includes(product.slug) && !seen.has(r.slug)) {
      seen.add(r.slug);
      return true;
    }
    return false;
  });
}

const isComparison = (r) => /(vs|versus|comparison|difference)/i.test(`${r.slug} ${r.title}`);

export function comparisonsFor(product) {
  return resourcesFor(product).filter(isComparison).slice(0, 3);
}

export function guidesFor(product) {
  return resourcesFor(product).filter((r) => !isComparison(r)).slice(0, 6);
}

// Same-group siblings plus catalogue partners that co-occur in supplier
// resource articles. Neutral "related" language — no compatibility claims.
export function relatedProductsFor(product) {
  const group = getGroup(product.group);
  const siblings = products.filter((p) => p.slug !== product.slug && p.group === product.group);
  const partners = new Map();
  for (const r of resources) {
    if (r.draft) continue;
    const slugs = [...new Set((r.recommendedLinks ?? []).map((link) => hrefProductSlug(link.href)).filter(Boolean))];
    if (!slugs.includes(product.slug)) continue;
    for (const s of slugs) {
      if (s === product.slug) continue;
      if (!partners.has(s) && products.some((p) => p.slug === s)) partners.set(s, r.slug);
    }
  }
  const seen = new Set(siblings.map((p) => p.slug));
  const related = [...siblings];
  for (const slug of partners.keys()) {
    if (seen.has(slug) || related.length >= 8) break;
    seen.add(slug);
    related.push(products.find((p) => p.slug === slug));
  }
  return related.filter(Boolean);
}

// Derive the local copy of a supplier document (TDS/SDS/PDS) from its URL:
// https://samratpolyresins.in/tds/gp-clear-resin-tds.pdf → /tds/gp-clear-resin-tds.pdf
// Documents first published on this site are recorded by their local path,
// which is returned as it is rather than attributed to a supplier-hosted URL.
export function localDocUrl(doc) {
  if (!doc || !doc.url) return null;
  if (/^\/(tds|sds|pds)\/[^/?#]+\.pdf$/.test(doc.url)) return doc.url;
  const match = doc.url.match(/https?:\/\/[^/]+\/(tds|sds|pds)\/([^?#]+)/);
  return match ? `/${match[1]}/${match[2]}` : null;
}

export function tdsDoc(product) {
  return (product.documents ?? []).find((d) => /technical data sheet/i.test(d.type));
}

export function sdsDoc(product) {
  return (product.documents ?? []).find((d) => /safety data sheet/i.test(d.type));
}

// A Product Data Sheet is its own document type — for items such as
// application tools — and is never presented as a Technical Data Sheet.
export function pdsDoc(product) {
  return (product.documents ?? []).find((d) => /product data sheet/i.test(d.type));
}

// Shared bilingual alt text for owner-supplied product photography, so the
// wording lives in one place rather than being hand-typed per product.
export function productImageAlt(product, isNe) {
  return isNe
    ? `${product.name} — Samrat FRP Traders द्वारा नेपालमा आपूर्ति गरिएको`
    : `${product.name} supplied by Samrat FRP Traders in Nepal`;
}
