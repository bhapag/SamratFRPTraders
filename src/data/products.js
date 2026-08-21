// Centralized product catalogue — Samrat FRP Traders Nepal.
//
// Source of truth for the locked Group 2 / 2.1 architecture:
//   - 24 commercial products across 8 groups, plus one retired legacy UPR route.
//   - Exactly 2 indexable category groups (Polyester Resins, Epoxy & Casting Resins);
//     the other 6 groups are navigation-only (no category URL).
//   - Flat permanent product URLs: /products/{slug}/.
//
// This file asserts NO technical values, prices, stock, packaging, MOQ,
// applications, or performance claims. Those remain unverified.

export const catalogGroups = Object.freeze([
  Object.freeze({
    name: 'Polyester Resins',
    slug: 'polyester-resins',
    indexable: true,
    summary: 'Polyester resin family, including unsaturated polyester resin (UPR), supplied and imported for the Nepal market.',
  }),
  Object.freeze({
    name: 'Sheet Grade Resins',
    slug: 'sheet-grade-resins',
    indexable: false,
  }),
  Object.freeze({
    name: 'Gelcoat',
    slug: 'gelcoat',
    indexable: false,
  }),
  Object.freeze({
    name: 'Fire Retardant Resins',
    slug: 'fire-retardant-resins',
    indexable: false,
  }),
  Object.freeze({
    name: 'FRP Allied Products',
    slug: 'frp-allied-products',
    indexable: false,
  }),
  Object.freeze({
    name: 'Epoxy & Casting Resins',
    slug: 'epoxy-casting-resins',
    indexable: true,
    summary: 'Epoxy and casting resin products supplied and imported for the Nepal market.',
  }),
  Object.freeze({
    name: 'Industrial & Specialty Resins',
    slug: 'industrial-specialty-resins',
    indexable: false,
  }),
  Object.freeze({
    name: 'Hardeners & Catalysts',
    slug: 'hardeners-catalysts',
    indexable: false,
  }),
]);

export const products = Object.freeze([
  // Polyester Resins
  Object.freeze({ name: 'Lamination Resin', slug: 'lamination-resin', group: 'polyester-resins', tier: 'B' }),
  Object.freeze({ name: 'GP Clear Resin', slug: 'gp-clear-resin', group: 'polyester-resins', tier: 'A' }),
  Object.freeze({ name: 'GP White Resin', slug: 'gp-white-resin', group: 'polyester-resins', tier: 'B' }),
  Object.freeze({ name: 'GP Quartz Resin', slug: 'gp-quartz-resin', group: 'polyester-resins', tier: 'B' }),
  Object.freeze({ name: 'Button Grade Resin', slug: 'button-grade-resin', group: 'polyester-resins', tier: 'C' }),
  Object.freeze({ name: 'GP Yellow Resin', slug: 'gp-yellow-resin', group: 'polyester-resins', tier: 'C' }),

  // Sheet Grade Resins
  Object.freeze({ name: 'Sheet Grade Yellow Resin', slug: 'sheet-grade-yellow-resin', group: 'sheet-grade-resins', tier: 'B' }),
  Object.freeze({ name: 'Roof Light Resin', slug: 'roof-light-resin', group: 'sheet-grade-resins', tier: 'B' }),

  // Gelcoat
  Object.freeze({ name: 'GP Gelcoat Resin', slug: 'gp-gelcoat-resin', group: 'gelcoat', tier: 'A' }),

  // Fire Retardant Resins
  Object.freeze({ name: 'Fire Retardant Resin', slug: 'fire-retardant-resin', group: 'fire-retardant-resins', tier: 'B' }),
  Object.freeze({ name: 'ISO Fire Retardant Resin', slug: 'iso-fire-retardant-resin', group: 'fire-retardant-resins', tier: 'C' }),

  // FRP Allied Products
  Object.freeze({ name: 'FRP Polyester Pigment', slug: 'frp-polyester-pigment', group: 'frp-allied-products', tier: 'B' }),
  Object.freeze({ name: 'Glass Fiber Mat', slug: 'glass-fiber-mat', group: 'frp-allied-products', tier: 'A' }),

  // Epoxy & Casting Resins
  Object.freeze({ name: 'Clear Casting Resin', slug: 'clear-casting-resin', group: 'epoxy-casting-resins', tier: 'C' }),
  Object.freeze({ name: 'Epoxy Art Resin', slug: 'epoxy-art-resin', group: 'epoxy-casting-resins', tier: 'C' }),
  Object.freeze({ name: 'UV Resin', slug: 'uv-resin', group: 'epoxy-casting-resins', tier: 'C' }),
  Object.freeze({ name: 'Epoxy Hardener', slug: 'epoxy-hardener', group: 'epoxy-casting-resins', tier: 'B' }),

  // Industrial & Specialty Resins
  Object.freeze({ name: 'DMC/SMC Resin', slug: 'dmc-smc-resin', group: 'industrial-specialty-resins', tier: 'C' }),
  Object.freeze({ name: 'Polyester Putty Resin', slug: 'polyester-putty-resin', group: 'industrial-specialty-resins', tier: 'C' }),
  Object.freeze({ name: 'Marble Resin', slug: 'marble-resin', group: 'industrial-specialty-resins', tier: 'B' }),
  Object.freeze({ name: 'Vinyl Ester Resin', slug: 'vinyl-ester-resin', group: 'industrial-specialty-resins', tier: 'C' }),
  Object.freeze({ name: 'Fiberglass Epoxy Resin', slug: 'fiberglass-epoxy-resin', group: 'industrial-specialty-resins', tier: 'B' }),
  Object.freeze({ name: 'Bisphenol Resin', slug: 'bisphenol-resin', group: 'industrial-specialty-resins', tier: 'C' }),

  // Hardeners & Catalysts
  Object.freeze({ name: 'MEKP Hardener', slug: 'mekp-hardener', group: 'hardeners-catalysts', tier: 'A' }),
]);

export function getGroup(slug) {
  return catalogGroups.find((group) => group.slug === slug);
}

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function productsInGroup(groupSlug) {
  return products.filter((product) => product.group === groupSlug);
}

export function productHref(product) {
  return `/products/${product.slug}/`;
}

export function categoryHref(group) {
  return `/products/${group.slug}/`;
}

// A product only has a parent category when its group is an indexable category.
// Navigation-only groups intentionally have no category URL, so their products
// breadcrumb as: Home > Products > {Product}.
export function productParentGroup(product) {
  const group = getGroup(product.group);
  return group && group.indexable ? group : null;
}
