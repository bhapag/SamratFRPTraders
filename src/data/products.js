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
//                                    Verified documents only. `url` now carries live
//                                    supplier-hosted HTTPS URLs (verified at implementation).
//                                    reference/revision/date are omitted when unverified.
//   technicalEvidenceStatus        'verified' | 'pending'
//                                    Status of SUPPLIER technical truth for this product.
//   nepalCommercialEvidenceStatus  'verified' | 'pending'
//                                    Status of NEPAL commercial truth (packaging, MOQ,
//                                    stock, pricing, delivery). Supplier-side commercial
//                                    facts never count as Nepal facts.
//
// Rules: supplier technical facts must never be presented as Samrat FRP Traders
// manufacturing claims or as Nepal commercial terms. No fake URL strings.
// Supplier-hosted documents are issuer-attributed and open via real HTTPS URLs.

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
  Object.freeze({
    name: 'Lamination Resin',
    slug: 'lamination-resin',
    group: 'polyester-resins',
    tier: 'B',
    titleInput: 'Lamination Resin \u2014 Nepal Supplier',
    metaDescription:
      'Lamination Resin (LR Resin) \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Orthophthalic unsaturated polyester resin; also known as LR Resin.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Lamination Resin \u2014 also known as LR Resin \u2014 is an orthophthalic unsaturated polyester resin. The supplier lists it for lamination and bonding work; technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic, unsaturated polyester' }),
      Object.freeze({ label: 'Curing system', value: 'Room temperature cure' }),
      Object.freeze({ label: 'Viscosity', value: '400 cPs' }),
      Object.freeze({ label: 'Gel time', value: '5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Cure time', value: '30 minutes \u2013 1 hour' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/lamination-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/lamination-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
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
        url: 'https://samratpolyresins.in/tds/gp-clear-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/gp-clear-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'GP White Resin',
    slug: 'gp-white-resin',
    group: 'polyester-resins',
    tier: 'B',
    titleInput: 'GP White Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP White Resin \u2014 a white orthophthalic polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'White orthophthalic polyester resin.',
    overview:
      'According to current Samrat Poly Resins, India documentation, GP White Resin is an orthophthalic polyester resin. The supplier lists it for panels, general-purpose moulding, hand layup and spray-up work. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic' }),
      Object.freeze({ label: 'Curing system', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '< 350 cPs' }),
      Object.freeze({ label: 'Gel time', value: '6 minutes' }),
      Object.freeze({ label: 'Thixotropy', value: 'Medium thixotropic' }),
      Object.freeze({ label: 'Styrene content', value: '30\u201335%' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/gp-white-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/gp-white-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'GP Quartz Resin',
    slug: 'gp-quartz-resin',
    group: 'polyester-resins',
    tier: 'B',
    titleInput: 'GP Quartz Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP Quartz Resin \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor:
      'Orthophthalic unsaturated polyester resin; supplier-listed for engineered stone and cast stone work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, GP Quartz Resin is an orthophthalic unsaturated polyester resin. The supplier lists it for artificial quartz stone, engineered stone and cast stone work; suitability for any specific formulation should be confirmed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic (ortho) unsaturated polyester resin' }),
      Object.freeze({ label: 'Curing system', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '400\u2013800 cPs' }),
      Object.freeze({ label: 'Gel time', value: '7\u201310 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35\u201340%' }),
      Object.freeze({ label: 'Cure time', value: '2 hours' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/gp-quartz-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/gp-quartz-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Button Grade Resin',
    slug: 'button-grade-resin',
    group: 'polyester-resins',
    tier: 'C',
    titleInput: 'Button Grade Resin \u2014 Nepal Supplier',
    metaDescription:
      'Button Grade Resin \u2014 an unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Unsaturated polyester resin; supplier-listed for button and small casting work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Button Grade Resin is a polyester (unsaturated) resin. The supplier lists it for buttons, fashion accessories and small casting work. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Polyester (unsaturated)' }),
      Object.freeze({ label: 'Viscosity', value: '1,100 cPs' }),
      Object.freeze({ label: 'Gel time', value: '9.5 minutes' }),
      Object.freeze({ label: 'Curing time', value: '2 hours' }),
      Object.freeze({ label: 'Styrene content', value: '33%' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/button-grade-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/button-grade-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'GP Yellow Resin',
    slug: 'gp-yellow-resin',
    group: 'polyester-resins',
    tier: 'C',
    titleInput: 'GP Yellow Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP Yellow Resin \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Orthophthalic unsaturated polyester resin; supplier-listed for general FRP work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, GP Yellow Resin is an orthophthalic unsaturated polyester resin. The supplier lists it for roofing sheets, water tanks, FRP doors and general FRP work. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic, unsaturated polyester' }),
      Object.freeze({ label: 'Curing system', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '450\u2013600 cPs at 25\u00B0C' }),
      Object.freeze({ label: 'Gel time', value: '10\u201315 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '34\u201338%' }),
      Object.freeze({ label: 'Cure time', value: '60\u201390 minutes' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/gp-yellow-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/gp-yellow-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Sheet Grade Resins
  Object.freeze({
    name: 'Sheet Grade Yellow Resin',
    slug: 'sheet-grade-yellow-resin',
    group: 'sheet-grade-resins',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/sheet-grade-yellow-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/sheet-grade-yellow-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Roof Light Resin',
    slug: 'roof-light-resin',
    group: 'sheet-grade-resins',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/roof-light-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/roof-light-resin-sds.pdf',
      }),
    ]),
  }),

  // Gelcoat
  Object.freeze({
    name: 'GP Gelcoat Resin',
    slug: 'gp-gelcoat-resin',
    group: 'gelcoat',
    tier: 'A',
    titleInput: 'GP Gelcoat Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP Gelcoat Resin is a polyester surface-coating gelcoat supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor:
      'Polyester surface-coating gelcoat for the mould-facing / outer-layer role.',
    overview:
      'Current Samrat Poly Resins, India documentation identifies GP Gelcoat Resin as a polyester surface-coating gelcoat for the mould-facing / outer-layer role in FRP laminate systems. The supplier\u2019s listed product characteristics \u2014 white, high-gloss and thixotropic \u2014 are supplier product facts, not performance guarantees for any finished laminate.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Type', value: 'Polyester surface-coating gelcoat' }),
      Object.freeze({ label: 'Role', value: 'Mould-facing / outer-layer' }),
      Object.freeze({ label: 'Colour', value: 'White' }),
      Object.freeze({ label: 'Finish characteristic', value: 'High-gloss' }),
      Object.freeze({ label: 'Rheology', value: 'Thixotropic' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/gp-gelcoat-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/gp-gelcoat-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Fire Retardant Resins
  Object.freeze({
    name: 'Fire Retardant Resin',
    slug: 'fire-retardant-resin',
    group: 'fire-retardant-resins',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/fire-retardant-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/fire-retardant-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'ISO Fire Retardant Resin',
    slug: 'iso-fire-retardant-resin',
    group: 'fire-retardant-resins',
    tier: 'C',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/iso-fire-retardant-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/iso-fire-retardant-resin-sds.pdf',
      }),
    ]),
  }),

  // FRP Allied Products
  Object.freeze({
    name: 'FRP Polyester Pigment',
    slug: 'frp-polyester-pigment',
    group: 'frp-allied-products',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/frp-polyester-pigment-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/frp-polyester-pigment-sds.pdf',
      }),
    ]),
  }),
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
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/fibre-glass-mat-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/fibre-glass-mat-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Epoxy & Casting Resins
  Object.freeze({
    name: 'Clear Casting Resin',
    slug: 'clear-casting-resin',
    group: 'epoxy-casting-resins',
    tier: 'C',
    titleInput: 'Clear Casting Resin \u2014 Nepal Supplier',
    metaDescription:
      'Clear Casting Resin \u2014 a two-part epoxy system supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Two-part epoxy system; supplier-listed for clear casting work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Clear Casting Resin is a two-part epoxy system. The supplier lists it for river tables, jewellery making and decorative casting. Technical specifications are published in the supplier\u2019s Technical Data Sheet; mixing and application details remain document-level information.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Epoxy, two-part system' }),
      Object.freeze({ label: 'Viscosity', value: '900 cPs (at 25\u00B0C)' }),
      Object.freeze({ label: 'Initial cure time', value: '24 hours (at 25\u00B0C)' }),
      Object.freeze({ label: 'Full cure time', value: '72 hours (at 25\u00B0C)' }),
      Object.freeze({ label: 'Hardness (fully cured)', value: 'Shore D 82' }),
      Object.freeze({ label: 'Shrinkage', value: '< 0.2%' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/epoxy-clear-casting-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/epoxy-clear-casting-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Epoxy Art Resin',
    slug: 'epoxy-art-resin',
    group: 'epoxy-casting-resins',
    tier: 'C',
    titleInput: 'Epoxy Art Resin \u2014 Nepal Supplier',
    metaDescription:
      'Epoxy Art Resin \u2014 a two-component epoxy supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Two-component epoxy; supplier-listed for art and decorative coating work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Epoxy Art Resin is a two-component epoxy. The supplier lists it for floor art, table tops, river tables and decorative coatings. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Component type', value: 'Two component' }),
      Object.freeze({ label: 'Curing time', value: '24 hours' }),
      Object.freeze({ label: 'UV resistance', value: 'Yes (per supplier TDS)' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/epoxy-art-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/epoxy-art-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'UV Resin',
    slug: 'uv-resin',
    group: 'epoxy-casting-resins',
    tier: 'C',
    titleInput: 'UV Resin \u2014 Nepal Supplier',
    metaDescription:
      'UV Resin \u2014 an epoxy acrylate resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Epoxy acrylate resin; UV/LED curing.',
    overview:
      'According to current Samrat Poly Resins, India documentation, UV Resin is an epoxy acrylate resin cured with UV/LED light. The supplier lists it for jewellery making, encapsulation, crafts and coatings. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin chemistry', value: 'Epoxy acrylate' }),
      Object.freeze({ label: 'Curing type', value: 'UV LED cure' }),
      Object.freeze({ label: 'Viscosity', value: 'Low' }),
      Object.freeze({ label: 'Hardness', value: 'Medium' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/uv-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/uv-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Epoxy Hardener',
    slug: 'epoxy-hardener',
    group: 'epoxy-casting-resins',
    tier: 'B',
    titleInput: 'Epoxy Hardener \u2014 Nepal Supplier',
    metaDescription:
      'Epoxy Hardener \u2014 a polyamide curing agent supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Polyamide (amine-based) curing agent for compatible epoxy resin systems.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Epoxy Hardener is a polyamide (amine-based) curing agent. The supplier notes that it is used with compatible epoxy resin systems and that the resin/hardener pairing should be confirmed before ordering. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Hardener type', value: 'Polyamide (amine-based curing agent)' }),
      Object.freeze({ label: 'Viscosity', value: '500 cPs (at 25\u00B0C)' }),
      Object.freeze({ label: 'Specific gravity / density', value: '0.97 g/cm\u00B3' }),
      Object.freeze({ label: 'Amine value', value: '320 mg KOH/g' }),
      Object.freeze({
        label: 'System compatibility',
        value: 'Compatible epoxy resin systems \u2014 confirm the resin/hardener pairing before ordering (per supplier documentation)',
      }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/epoxy-hardener-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/epoxy-hardener-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Industrial & Specialty Resins
  Object.freeze({
    name: 'DMC/SMC Resin',
    slug: 'dmc-smc-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/dmc-smc-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/dmc-smc-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Polyester Putty Resin',
    slug: 'polyester-putty-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/pet-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/pet-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Marble Resin',
    slug: 'marble-resin',
    group: 'industrial-specialty-resins',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/marble-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/marble-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Vinyl Ester Resin',
    slug: 'vinyl-ester-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/vinyl-ester-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/vinyl-ester-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Fiberglass Epoxy Resin',
    slug: 'fiberglass-epoxy-resin',
    group: 'industrial-specialty-resins',
    tier: 'B',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/fiberglass-epoxy-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/fiberglass-epoxy-resin-sds.pdf',
      }),
    ]),
  }),
  Object.freeze({
    name: 'Bisphenol Resin',
    slug: 'bisphenol-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/bisphenol-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/bisphenol-resin-sds.pdf',
      }),
    ]),
  }),

  // Hardeners & Catalysts
  Object.freeze({
    name: 'MEKP Hardener',
    slug: 'mekp-hardener',
    group: 'hardeners-catalysts',
    tier: 'A',
    titleInput: 'MEKP Hardener \u2014 Nepal Supplier',
    metaDescription:
      'MEKP Hardener (Methyl Ethyl Ketone Peroxide) is an organic peroxide initiator supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor:
      'Methyl Ethyl Ketone Peroxide (MEKP) \u2014 organic peroxide initiator / catalyst.',
    overview:
      'According to current Samrat Poly Resins, India documentation, MEKP (Methyl Ethyl Ketone Peroxide) is an organic peroxide initiator used in selected unsaturated polyester, vinyl ester and gelcoat systems. For safety, handling and storage information, refer to the current supplier Safety Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Full name', value: 'Methyl Ethyl Ketone Peroxide (MEKP)' }),
      Object.freeze({ label: 'Product role', value: 'Organic peroxide initiator / catalyst' }),
      Object.freeze({
        label: 'Supplier-listed system context',
        value: 'Unsaturated polyester, vinyl ester and gelcoat systems',
      }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/tds/mekp-hardener-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/mekp-hardener-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
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
