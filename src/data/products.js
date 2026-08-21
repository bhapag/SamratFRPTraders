// Centralized product catalogue — Samrat FRP Traders Nepal.
//
// Source of truth for the locked Group 2 / 2.1 architecture:
//   - 24 commercial products across 8 groups, plus one retired legacy UPR route.
//   - Exactly 2 indexable category groups (Polyester Resins, Epoxy & Casting Resins);
//     the other 6 groups are navigation-only (no category URL).
//   - Flat permanent product URLs: /products/{slug}/.
//
// This file asserts NO technical values, prices, stock, packaging, MOQ,
// applications, or performance claims unless they arrive via the optional
// evidence fields below, which may only carry verified supplier facts.
//
// OPTIONAL per-product evidence fields (Wave 4A infrastructure).
// Absent = the product renders as a safe structural shell.
//
//   titleInput            string   Base title input override (brand appended by the layout).
//   metaDescription       string   Candidate-final meta description (never contains
//                                    unverified commercial terms).
//   descriptor            string   Evidence-backed one-line product identity.
//   overview              string   Substantive, procurement-oriented overview paragraph.
//   technicalHighlights   [{ label, value }]  Verified buyer-relevant technical facts.
//                                    No arbitrary length rule; only useful facts.
//   technicalSource       { issuer, type, reference?, revision?, date? }
//                                    One table-level source note for the highlights.
//   documents             [{ type, issuer, reference?, revision?, date?, url? }]
//                                    Verified documents only. url/reference/revision/date
//                                    are omitted (never faked) when unverified.
//   technicalEvidenceStatus        'verified' | 'pending'
//                                    Status of SUPPLIER technical truth for this product.
//   nepalCommercialEvidenceStatus  'verified' | 'pending'
//                                    Status of NEPAL commercial truth (packaging, MOQ,
//                                    stock, pricing, delivery). Supplier-side commercial
//                                    facts never count as Nepal facts.
//
// Rules: supplier technical facts must never be presented as Samrat FRP Traders
// manufacturing claims or as Nepal commercial terms. No fake URL strings.

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
  Object.freeze({
    name: 'GP Clear Resin',
    slug: 'gp-clear-resin',
    group: 'polyester-resins',
    tier: 'A',
    titleInput: 'GP Clear Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP Clear Resin is Samrat Poly Resins\u2019 published standard clear orthophthalic unsaturated polyester resin grade, supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor:
      'Samrat Poly Resins\u2019 published standard clear orthophthalic unsaturated polyester resin grade.',
    overview:
      'Current Samrat Poly Resins, India documentation identifies GP Clear Resin as its published standard clear orthophthalic unsaturated polyester resin grade. Unsaturated polyester resin (UPR) is the broader polyester resin family, represented by several grades in the Polyester Resins category \u2014 GP Clear Resin is one specific grade within that family.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Appearance', value: 'Clear liquid' }),
      Object.freeze({ label: 'Viscosity', value: '350\u2013450 cPs' }),
      Object.freeze({ label: 'Gel time', value: '< 8 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '33\u201340%' }),
      Object.freeze({ label: 'Purity', value: '99%' }),
      Object.freeze({ label: 'Cure time', value: '45 minutes\u20131.5 hours' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-GCR',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-GCR',
        revision: 'Rev. 01',
        date: 'July 2026',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
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
  Object.freeze({
    name: 'Glass Fiber Mat',
    slug: 'glass-fiber-mat',
    group: 'frp-allied-products',
    tier: 'A',
    titleInput: 'Glass Fiber Mat \u2014 Nepal Supplier',
    metaDescription:
      'Glass Fiber Mat \u2014 E-glass chopped strand mat (CSM), supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor: 'E-glass chopped strand mat (CSM).',
    overview:
      'Current Samrat Poly Resins, India documentation identifies Glass Fiber Mat as an E-glass chopped strand mat (CSM), including 300 g/m\u00B2 and 450 g/m\u00B2 grades.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Material', value: 'E-glass' }),
      Object.freeze({ label: 'Form', value: 'Chopped Strand Mat (CSM)' }),
      Object.freeze({ label: 'Available weights', value: '300 g/m\u00B2 and 450 g/m\u00B2' }),
      Object.freeze({ label: 'Fibre length', value: '50 mm' }),
      Object.freeze({ label: 'Roll width', value: '1040 mm' }),
      Object.freeze({ label: 'Sizing', value: 'Polyester-compatible sizing' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({ type: 'Technical Data Sheet', issuer: 'Samrat Poly Resins, India' }),
      Object.freeze({ type: 'Safety Data Sheet', issuer: 'Samrat Poly Resins, India' }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

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
