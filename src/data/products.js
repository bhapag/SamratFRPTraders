// Centralized product catalogue — Samrat FRP Traders Nepal.
//
// Source of truth for the locked Group 2 / 2.1 architecture:
//   - 33 commercial products across 9 groups. Unsaturated Polyester Resin is a real
//     standalone product page — supplier documentation confirms it is the generic
//     commercial description for the GP Clear Resin grade in this same catalogue;
//     the two entries deliberately carry distinct content and cross-link rather
//     than duplicate each other.
//   - 7 indexable category groups with their own hub page; Gelcoat and ISO Resins
//     are navigation-only (no category URL) and link to their catalogue anchor.
//   - Flat permanent product URLs: /products/{slug}/.
//
// This file asserts NO technical values, prices, stock, packaging, MOQ,
// applications, or performance claims unless they arrive via the optional
// evidence fields below, which may only carry verified supplier facts.
//
// OPTIONAL per-product evidence fields (Wave 4A infrastructure).
// Absent = the product renders as a safe structural shell.
//
//   images                [{ src, width, height }, ...]  Owner-supplied product photography,
//                                    in display order. `src` is the filename in
//                                    public/images/products/; `width`/`height` are the
//                                    file's real intrinsic pixel dimensions (used to render
//                                    each image at its own natural aspect ratio and to
//                                    reserve layout space before it loads — get these from
//                                    the actual file, never guess or reuse another image's
//                                    numbers). images[0] is the primary/default image; any
//                                    further entries become gallery thumbnails (click/tap to
//                                    switch, swipe on touch, arrow keys on desktop). Absent
//                                    or empty = the reserved-placeholder media frame renders
//                                    instead; a single entry renders as one plain image with
//                                    no gallery controls. Alt text is generated from the
//                                    product name, not stored per-image.
//   titleInput            string   Base title input override (brand appended by the layout).
//   metaDescription       string   Candidate-final meta description (never contains
//                                    unverified commercial terms).
//   descriptor            string   Evidence-backed one-line product identity.
//   alternateName          string   A second commercial name the supplier documents for the
//                                    exact same formulation (e.g. a generic commercial
//                                    description alongside the branded name). Verified only —
//                                    never a guess at synonyms. Surfaces in Product JSON-LD as
//                                    `alternateName` so search engines can match both names to
//                                    one page instead of the site fielding two competing pages.
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
    indexable: true,
    summary: 'Sheet grade resin products, including roof light resin, supplied and imported for the Nepal market.',
  }),
  // Gelcoat and ISO Resins stay navigation-only for now: each holds two or
  // fewer products, so a hub page would restate the product pages rather than
  // Both now carry their own category hub, so every family in this list is a
  // first-class category rather than a navigation-only anchor.
  Object.freeze({
    name: 'Gelcoat',
    slug: 'gelcoat',
    indexable: true,
    summary:
      'Gelcoat products supplied and imported for the Nepal market. A gelcoat is the moulded surface layer of an FRP part, applied into the mould before lamination, and is not a laminating resin.',
  }),
  Object.freeze({
    name: 'ISO Resins',
    slug: 'iso-resins',
    indexable: true,
    summary:
      'Isophthalic resin products supplied and imported for the Nepal market. "ISO" here is isophthalic acid, the dibasic acid used to build the resin, and is not an ISO certification.',
  }),
  Object.freeze({
    name: 'Fire Retardant Resins',
    slug: 'fire-retardant-resins',
    indexable: true,
    summary: 'Fire retardant resin products supplied and imported for the Nepal market. Fire performance figures are supplier-issued and must be confirmed from the current TDS.',
  }),
  Object.freeze({
    name: 'FRP Allied Products',
    slug: 'frp-allied-products',
    indexable: true,
    summary: 'Allied FRP materials — reinforcement, pigment, thinner, fillers, release wax and application tools — supplied and imported for the Nepal market.',
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
    indexable: true,
    summary: 'Specialty and industrial resin products, including vinyl ester, bisphenol and marble resin, supplied and imported for the Nepal market.',
  }),
  Object.freeze({
    name: 'Hardeners & Catalysts',
    slug: 'hardeners-catalysts',
    indexable: true,
    summary: 'Hardener, catalyst and accelerator products used alongside polyester and epoxy systems, supplied and imported for the Nepal market.',
  }),
]);

export const products = Object.freeze([
  // Polyester Resins
  Object.freeze({
    name: 'Unsaturated Polyester Resin',
    slug: 'unsaturated-polyester-resin',
    group: 'polyester-resins',
    tier: 'A',
    images: Object.freeze([
      Object.freeze({ src: 'unsaturated-polyester-resin-primary.webp', width: 700, height: 698 }),
      Object.freeze({ src: 'unsaturated-polyester-resin-secondary.webp', width: 700, height: 696 }),
    ]),
    alternateName: 'UPR',
    titleInput: 'Unsaturated Polyester Resin (UPR) — Nepal Supplier',
    metaDescription:
      'Unsaturated Polyester Resin (UPR) supplied and imported for Nepal by Samrat FRP Traders. Samrat Poly Resins’ documentation confirms this generic commercial description corresponds to GP Clear Resin, the grade in this catalogue backed by full technical documentation.',
    descriptor:
      'The general commercial/family term for this resin class — Samrat Poly Resins’ documentation confirms it corresponds to GP Clear Resin, the specific grade in this catalogue.',
    overview:
      'Unsaturated Polyester Resin (UPR) is the general commercial and chemical-family term for this resin class. Current Samrat Poly Resins, India documentation confirms that the formulation supplied under this generic description corresponds to GP Clear Resin — the specific grade in this catalogue, with its own full technical data sheet.',
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
    name: 'Lamination Resin',
    slug: 'lamination-resin',
    group: 'polyester-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'lamination-resin-primary.webp', width: 700, height: 688 }),
      Object.freeze({ src: 'lamination-resin-secondary.webp', width: 700, height: 700 }),
    ]),
    titleInput: 'Lamination Resin \u2014 Nepal Supplier',
    metaDescription:
      'Lamination Resin (LR Resin) \u2014 a transparent unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    // The TDS for this grade (SPR-TDS-LR) gives the resin type as
    // "Polyester (unsaturated), transparent" and never says orthophthalic, so
    // the descriptor no longer adds a backbone the source does not state.
    descriptor: 'Transparent unsaturated polyester resin; also known as LR Resin.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Lamination Resin \u2014 also known as LR Resin \u2014 is a transparent unsaturated polyester resin. The supplier lists it for lamination and bonding work; technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Unsaturated polyester, transparent' }),
      Object.freeze({ label: 'Curing system', value: 'Room temperature cure' }),
      Object.freeze({ label: 'Viscosity', value: '400 cPs' }),
      Object.freeze({ label: 'Gel time', value: '5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Cure time', value: '30 minutes \u2013 1 hour' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-LR',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-LR',
        revision: 'Rev. 01',
        date: 'July 2026',
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
    images: Object.freeze([
      Object.freeze({ src: 'gp-clear-resin-primary.jpg', width: 1178, height: 1157 }),
      Object.freeze({ src: 'gp-clear-resin-secondary.jpg', width: 1178, height: 1169 }),
    ]),
    titleInput: 'GP Clear Resin \u2014 Nepal Supplier',
    alternateName: 'Unsaturated Polyester Resin (UPR)',
    // Product name first, then Samrat FRP Traders as the Nepal supplier. The
    // manufacturer is still credited, but as the issuer of the documentation
    // rather than as the lead entity on a Samrat FRP Traders page.
    metaDescription:
      'GP Clear Resin \u2014 also supplied under the generic commercial description "Unsaturated Polyester Resin" (UPR) \u2014 supplied and imported for Nepal by Samrat FRP Traders, Biratnagar. Clear orthophthalic UPR grade with supplier TDS and SDS on file.',
    descriptor:
      'Samrat Poly Resins\u2019 published standard clear orthophthalic unsaturated polyester resin (UPR) grade \u2014 also supplied under the generic commercial description "Unsaturated Polyester Resin."',
    overview:
      'Current Samrat Poly Resins, India documentation identifies GP Clear Resin as its published standard clear orthophthalic unsaturated polyester resin grade. Unsaturated polyester resin (UPR) is the broader polyester resin family, represented by several grades in the Polyester Resins category \u2014 GP Clear Resin is one specific grade within that family, and the supplier\u2019s own documentation confirms it is the exact formulation sold under the generic commercial description "Unsaturated Polyester Resin."',
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
    images: Object.freeze([
      Object.freeze({ src: 'gp-white-resin-primary.webp', width: 700, height: 717 }),
      Object.freeze({ src: 'gp-white-resin-secondary.webp', width: 700, height: 875 }),
    ]),
    titleInput: 'GP White Resin \u2014 Nepal Supplier',
    metaDescription:
      'GP White Resin \u2014 a general-purpose orthophthalic polyester resin supplied and imported for Nepal by Samrat FRP Traders. Grade-specific figures confirmed on enquiry.',
    descriptor: 'General-purpose orthophthalic polyester resin.',
    overview:
      'Samrat Poly Resins, India lists GP White Resin as a general-purpose orthophthalic polyester resin for panels, moulding, hand layup and spray-up work. No technical figures are published here: the Technical Data Sheet currently issued under this name carries GP Clear Resin\u2019s document reference and repeats GP Clear Resin\u2019s property table, so it does not describe this grade. Grade-specific values are confirmed on enquiry.',
    // The figures that stood here \u2014 < 350 cPs, a 6-minute gel time, medium
    // thixotropy and 30-35% styrene \u2014 were attributed to the supplier TDS and
    // are not in it. The sheet issued under the name GP White Resin is GP Clear
    // Resin's sheet with the product name changed: same document reference
    // (SPR-TDS-GCR), same description, same table, appearance given as "Clear".
    // Verified against both the copy published here and the file on the
    // supplier's own site. Until a sheet exists for this grade there is nothing
    // to publish, and another grade's numbers are not a substitute.
    technicalHighlights: Object.freeze([]),
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
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'GP Quartz Resin',
    slug: 'gp-quartz-resin',
    group: 'polyester-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'gp-quartz-resin-primary.webp', width: 700, height: 700 }),
      Object.freeze({ src: 'gp-quartz-resin-secondary.webp', width: 700, height: 1050 }),
    ]),
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
    images: Object.freeze([
      Object.freeze({ src: 'button-grade-resin-primary.webp', width: 700, height: 693 }),
      Object.freeze({ src: 'button-grade-resin-secondary.webp', width: 700, height: 704 }),
    ]),
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
      reference: 'SPR-TDS-BGR',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-BGR',
        revision: 'Rev. 01',
        date: 'July 2026',
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
    images: Object.freeze([
      Object.freeze({ src: 'gp-yellow-resin-primary.jpg', width: 1178, height: 1395 }),
      Object.freeze({ src: 'gp-yellow-resin-secondary.jpg', width: 1178, height: 1402 }),
    ]),
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
    images: Object.freeze([
      Object.freeze({ src: 'sheet-grade-yellow-resin-primary.webp', width: 700, height: 829 }),
      Object.freeze({ src: 'sheet-grade-yellow-resin-secondary.webp', width: 700, height: 831 }),
      Object.freeze({ src: 'sheet-grade-yellow-resin-tertiary.webp', width: 160, height: 191 }),
    ]),
    titleInput: 'Sheet Grade Yellow Resin \u2014 Nepal Supplier',
    metaDescription:
      'Sheet Grade Yellow Resin \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Orthophthalic unsaturated polyester resin; supplier-listed for FRP sheet and panel work.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Sheet Grade Yellow Resin is an orthophthalic unsaturated polyester resin. The supplier lists it for FRP sheets, panels and sheet production contexts. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic unsaturated polyester' }),
      Object.freeze({ label: 'Curing system', value: 'Non-accelerated (MEKP catalyst)' }),
      Object.freeze({ label: 'Viscosity', value: '280 cPs' }),
      Object.freeze({ label: 'Gel time', value: '6.5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Cure time', value: '12 hours' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-SGY',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-SGY',
        revision: 'Rev. 01',
        date: 'July 2026',
        url: 'https://samratpolyresins.in/tds/sheet-grade-yellow-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/sheet-grade-yellow-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Roof Light Resin',
    slug: 'roof-light-resin',
    group: 'sheet-grade-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'roof-light-resin-primary.webp', width: 700, height: 692 }),
      Object.freeze({ src: 'roof-light-resin-secondary.webp', width: 700, height: 700 }),
    ]),
    titleInput: 'Roof Light Resin \u2014 Nepal Supplier',
    metaDescription:
      'Roof Light Resin \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor:
      'Orthophthalic unsaturated polyester resin; supplier-listed for roof light and skylight sheet contexts.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Roof Light Resin is an orthophthalic unsaturated polyester resin. The supplier lists it for roof light panels and skylight sheet contexts; suitability for a specific roofing product should be confirmed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic unsaturated polyester' }),
      Object.freeze({ label: 'Curing system', value: 'Non-accelerated (MEKP catalyst)' }),
      Object.freeze({ label: 'Viscosity', value: '280 cPs' }),
      Object.freeze({ label: 'Gel time', value: '6.5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Cure time', value: '12 hours' }),
      Object.freeze({ label: 'Specific gravity', value: '1.1 g/cm\u00B3' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-RLS',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-RLS',
        revision: 'Rev. 01',
        date: 'July 2026',
        url: 'https://samratpolyresins.in/tds/roof-light-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/roof-light-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Gelcoat
  // Added with the first product-range pass. Identity and formulation come from
  // the supplier's product literature; no measured values, packaging, stock or
  // document availability are asserted until a TDS/SDS is on file.
  Object.freeze({
    name: 'UV Stabilized Sheet Grade Yellow Resin',
    slug: 'uv-stabilized-sheet-grade-yellow-resin',
    images: Object.freeze([
      Object.freeze({ src: 'uv-stabilized-sheet-grade-yellow-resin-primary.jpg', width: 1151, height: 1367 }),
    ]),
    group: 'sheet-grade-resins',
    tier: 'B',
    titleInput: 'UV Stabilized Sheet Grade Yellow Resin — Nepal Supplier',
    metaDescription:
      'UV Stabilized Sheet Grade Yellow Resin — a pre-pigmented, UV-stabilised unsaturated polyester sheet grade supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor:
      'Pre-pigmented, UV-stabilised unsaturated polyester resin for FRP sheet and panel work.',
    overview:
      'UV Stabilized Sheet Grade Yellow Resin is a factory-pigmented yellow unsaturated polyester sheet grade described by the supplier, Samrat Poly Resins, India, as UV-stabilised for outdoor FRP sheet, cladding and panel work. Being pre-pigmented, the colour is mixed at the supplier rather than on the shop floor. Ask us for the current technical documentation before you order.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic unsaturated polyester resin' }),
      Object.freeze({ label: 'Form', value: 'Pre-pigmented yellow liquid resin' }),
      Object.freeze({ label: 'Acceleration status', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '280 cPs at 25 °C' }),
      Object.freeze({ label: 'Gel time', value: '6.5 minutes at 25 °C' }),
      Object.freeze({ label: 'Styrene content', value: '35% by weight' }),
      Object.freeze({ label: 'Specific gravity', value: '1.10 g/cm³ at 25 °C' }),
      Object.freeze({ label: 'Stabiliser system', value: 'UV absorber with HALS light stabiliser' }),
      Object.freeze({ label: 'Cure mechanism', value: 'UV-stabilised; not UV-light-curing' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-USY',
      revision: 'Rev. 01',
      date: 'September 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-USY',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/uv-stabilized-sheet-grade-yellow-resin-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'GP Gelcoat Resin',
    slug: 'gp-gelcoat-resin',
    group: 'gelcoat',
    tier: 'A',
    images: Object.freeze([
      Object.freeze({ src: 'gp-gelcoat-resin-primary.webp', width: 700, height: 679 }),
      Object.freeze({ src: 'gp-gelcoat-resin-secondary.webp', width: 700, height: 680 }),
    ]),
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
      reference: 'SPR-TDS-GGR',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-GGR',
        revision: 'Rev. 01',
        date: 'July 2026',
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
    name: 'ISO Gelcoat',
    slug: 'iso-gelcoat',
    images: Object.freeze([
      Object.freeze({ src: 'iso-gelcoat-primary.jpg', width: 1254, height: 1254 }),
    ]),
    group: 'gelcoat',
    tier: 'B',
    titleInput: 'ISO Gelcoat — Nepal Supplier',
    metaDescription:
      'ISO Gelcoat — an isophthalic gelcoat for protective, high-gloss FRP surfaces, supplied and imported for Nepal by Samrat FRP Traders.',
    descriptor:
      'Isophthalic gelcoat for the protective, high-gloss surface layer of an FRP moulding.',
    overview:
      'ISO Gelcoat is an isophthalic gelcoat described by the supplier, Samrat Poly Resins, India, as a decorative and protective surface layer for FRP mouldings, applied by brush or spray as the first coat in the mould. Isophthalic gelcoats are generally chosen over general-purpose gelcoats where the finished surface has to hold gloss and resist weather and moisture. Ask us for the current technical documentation before you order.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Isophthalic polyester gelcoat' }),
      Object.freeze({ label: 'Colour / appearance', value: 'Creamy off-white to pale ivory thixotropic gelcoat' }),
      Object.freeze({ label: 'Application form', value: 'Brush and spray application' }),
      Object.freeze({ label: 'Acceleration status', value: 'Pre-accelerated' }),
      Object.freeze({ label: 'Viscosity — low shear', value: '40,000 cPs at 25 °C' }),
      Object.freeze({ label: 'Viscosity — high shear', value: '1,500 cPs at 25 °C' }),
      Object.freeze({ label: 'Thixotropic index', value: '26' }),
      Object.freeze({ label: 'Gel time', value: '8 minutes at 25 °C' }),
      Object.freeze({ label: 'Styrene content', value: '32% by weight' }),
      Object.freeze({ label: 'Wet film thickness', value: '700 µm target; 600–800 µm recommended range' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-IGC',
      revision: 'Rev. 01',
      date: 'September 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-IGC',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/iso-gelcoat-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  // ISO Resins
  Object.freeze({
    name: 'ISO Polyester Resin',
    slug: 'iso-polyester-resin',
    images: Object.freeze([
      // Display copy of the supplied poster with only its three printed figures
      // corrected to SPR-TDS-IPR (500 cPs, 15 minutes, 40% styrene); the poster
      // as supplied printed 280 cPs, 6.5 minutes and 35%, which belong to the
      // sheet-grade resins. iso-polyester-resin-primary.jpg is kept unchanged
      // in public/images/products as the record of what was supplied.
      Object.freeze({ src: 'iso-polyester-resin-corrected-figures.jpg', width: 1254, height: 1254 }),
    ]),
    group: 'iso-resins',
    tier: 'B',
    titleInput: 'ISO Polyester Resin — Nepal Supplier',
    metaDescription:
      'ISO Polyester Resin — an isophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Isophthalic grade for demanding FRP service.',
    descriptor:
      'Isophthalic unsaturated polyester resin for FRP work in wet or chemically aggressive service.',
    overview:
      'ISO Polyester Resin is an isophthalic unsaturated polyester resin described by the supplier, Samrat Poly Resins, India, as intended for FRP work where chemical resistance, water resistance and long-term durability matter more than they do in general-purpose laminating. Isophthalic resins are the usual step up from an orthophthalic general-purpose grade for tanks, pipework and other wet or chemically loaded service. The supplier Technical Data Sheet for this grade is linked from this page.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Isophthalic unsaturated polyester resin' }),
      Object.freeze({ label: 'Colour / appearance', value: 'Off-white to light beige liquid' }),
      Object.freeze({ label: 'Acceleration status', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '500 cPs (mPa·s) at 25 °C' }),
      Object.freeze({ label: 'Gel time', value: '15 minutes at 25 °C' }),
      Object.freeze({ label: 'Styrene content', value: '40% by weight' }),
      Object.freeze({ label: 'Specific gravity', value: '1.12 g/cm³ at 25 °C' }),
      Object.freeze({ label: 'Curing system', value: 'MEKP catalyst with cobalt octoate accelerator' }),
      Object.freeze({ label: 'Heat deflection temperature', value: '90 °C' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-IPR',
      revision: 'Rev. 01',
      date: 'September 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-IPR',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/iso-polyester-resin-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Fire Retardant Resin',
    slug: 'fire-retardant-resin',
    group: 'fire-retardant-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'fire-retardant-resin-primary.webp', width: 700, height: 690 }),
      Object.freeze({ src: 'fire-retardant-resin-secondary.webp', width: 700, height: 693 }),
    ]),
    titleInput: 'Fire Retardant Resin \u2014 Nepal Supplier',
    metaDescription:
      'Fire Retardant Resin \u2014 a halogenated fire-retardant unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Unsaturated polyester resin with a halogenated fire-retardant formulation.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Fire Retardant Resin is an unsaturated polyester resin with a halogenated fire-retardant formulation. The classification describes the resin itself, not the fire performance of any finished laminate or product; project-level fire requirements should be reviewed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Base resin', value: 'Unsaturated polyester' }),
      Object.freeze({ label: 'FR type', value: 'Halogenated fire-retardant formulation' }),
      Object.freeze({ label: 'Curing system', value: 'Room temperature cure with MEKP catalyst' }),
      Object.freeze({ label: 'Viscosity', value: '400 cPs' }),
      Object.freeze({ label: 'Gel time', value: '5.5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
      reference: 'SPR-TDS-FRR',
      revision: 'Rev. 01',
      date: 'July 2026',
    }),
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-FRR',
        revision: 'Rev. 01',
        date: 'July 2026',
        url: 'https://samratpolyresins.in/tds/fire-retardant-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/fire-retardant-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'ISO Fire Retardant Resin',
    slug: 'iso-fire-retardant-resin',
    group: 'fire-retardant-resins',
    tier: 'C',
    images: Object.freeze([
      Object.freeze({ src: 'iso-fire-retardant-resin-primary.webp', width: 700, height: 700 }),
      Object.freeze({ src: 'iso-fire-retardant-resin-secondary.webp', width: 700, height: 700 }),
    ]),
    titleInput: 'ISO Fire Retardant Resin \u2014 Nepal Supplier',
    metaDescription:
      'ISO Fire Retardant Resin \u2014 an isophthalic fire-retardant unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor:
      'Isophthalic-based unsaturated polyester resin with a halogen-free, ATH-filled fire-retardant formulation. (\u201CISO\u201D refers to isophthalic chemistry, not ISO certification.)',
    overview:
      'According to current Samrat Poly Resins, India documentation, ISO Fire Retardant Resin is an unsaturated polyester resin with a halogen-free, ATH-filled fire-retardant formulation. The designation \u201CISO\u201D refers to isophthalic-based resin chemistry and not to ISO certification. The classification describes the resin, not the fire performance of a finished product; project requirements should be reviewed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Unsaturated polyester resin (fire-retardant grade)' }),
      Object.freeze({ label: 'FR type', value: 'Halogen-free, ATH-filled formulation' }),
      Object.freeze({ label: 'Curing system', value: 'Room-temperature cure with MEKP catalyst' }),
      Object.freeze({ label: 'Viscosity', value: '400 cPs' }),
      Object.freeze({ label: 'Gel time', value: '5.5 minutes' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.18 g/cm\u00B3' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
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
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // FRP Allied Products
  Object.freeze({
    name: 'FRP Polyester Pigment',
    slug: 'frp-polyester-pigment',
    group: 'frp-allied-products',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'frp-polyester-pigment-primary.webp', width: 700, height: 693 }),
      Object.freeze({ src: 'frp-polyester-pigment-secondary.webp', width: 700, height: 696 }),
    ]),
    titleInput: 'FRP Polyester Pigment \u2014 Nepal Supplier',
    metaDescription:
      'FRP Polyester Pigment \u2014 a polyester pigment paste supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Polyester pigment paste; supplier-listed for polyester, vinyl ester and gelcoat systems.',
    overview:
      'According to current Samrat Poly Resins, India documentation, FRP Polyester Pigment is a pigment paste. The supplier lists binder compatibility with unsaturated polyester, vinyl ester and gelcoat systems. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Form', value: 'Paste' }),
      Object.freeze({ label: 'Binder compatibility', value: 'Unsaturated polyester, vinyl ester & gelcoat systems' }),
      Object.freeze({ label: 'Tinting strength', value: 'High (\u2265 95%)' }),
      Object.freeze({ label: 'Heat resistance', value: 'Up to 180 \u00B0C (per supplier TDS)' }),
      Object.freeze({ label: 'Light fastness', value: '7\u20138 (Blue Wool Scale)' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.45 g/cm\u00B3' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
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
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Glass Fiber Mat',
    slug: 'glass-fiber-mat',
    group: 'frp-allied-products',
    tier: 'A',
    images: Object.freeze([
      Object.freeze({ src: 'glass-fiber-mat-primary.webp', width: 700, height: 696 }),
      Object.freeze({ src: 'glass-fiber-mat-secondary.webp', width: 700, height: 692 }),
    ]),
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
    images: Object.freeze([
      Object.freeze({ src: 'epoxy-clear-casting-resin-primary.webp', width: 700, height: 699 }),
      Object.freeze({ src: 'epoxy-clear-casting-resin-secondary.webp', width: 700, height: 702 }),
    ]),
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
    images: Object.freeze([
      Object.freeze({ src: 'epoxy-art-resin-primary.webp', width: 700, height: 831 }),
      Object.freeze({ src: 'epoxy-art-resin-secondary.webp', width: 700, height: 832 }),
    ]),
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
    name: 'Epoxy Hardener',
    slug: 'epoxy-hardener',
    group: 'epoxy-casting-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'epoxy-hardener-primary.webp', width: 700, height: 700 }),
      Object.freeze({ src: 'epoxy-hardener-secondary.webp', width: 700, height: 700 }),
    ]),
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
    images: Object.freeze([
      Object.freeze({ src: 'dmc-smc-resin-primary.webp', width: 700, height: 715 }),
      Object.freeze({ src: 'dmc-smc-resin-secondary.webp', width: 700, height: 726 }),
      Object.freeze({ src: 'dmc-smc-resin-tertiary.webp', width: 700, height: 737 }),
    ]),
    titleInput: 'DMC/SMC Resin \u2014 Nepal Supplier',
    metaDescription:
      'DMC/SMC Resin \u2014 an orthophthalic unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor:
      'Orthophthalic unsaturated polyester resin; supplier-listed for DMC/SMC moulding-compound contexts.',
    overview:
      'According to current Samrat Poly Resins, India documentation, DMC/SMC Resin is an orthophthalic unsaturated polyester resin. The supplier lists it for DMC and SMC moulding compounds, electrical housings and panel contexts. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Orthophthalic unsaturated polyester resin' }),
      Object.freeze({ label: 'Curing type', value: 'Non-accelerated' }),
      Object.freeze({ label: 'Viscosity', value: '600 cPs (at 25\u00B0C)' }),
      Object.freeze({ label: 'Gel time', value: '12\u201318 minutes (at 25\u00B0C; review current TDS for test context)' }),
      Object.freeze({ label: 'Styrene content', value: '35%' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.12 g/cm\u00B3' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
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
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Polyester Putty Resin',
    slug: 'polyester-putty-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    images: Object.freeze([
      Object.freeze({ src: 'pet-resin-primary.webp', width: 700, height: 700 }),
      Object.freeze({ src: 'pet-resin-secondary.webp', width: 700, height: 731 }),
    ]),
    titleInput: 'Polyester Putty Resin \u2014 Nepal Supplier',
    metaDescription:
      'Polyester Putty Resin — a liquid unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Technical figures confirmed on enquiry.',
    descriptor:
      'Liquid unsaturated polyester resin supplied under the Polyester Putty Resin name.',
    overview:
      'Polyester Putty Resin is a liquid unsaturated polyester resin listed under this name in the Samrat Poly Resins, India documentation we hold. It is supplied as a liquid resin, not as a ready-mixed putty or body filler. No Technical Data Sheet is offered for it here. The sheet previously linked, SPR-TDS-PET, is a historical PET-modified sheet-grade resin document and is no longer presented as this product’s data sheet; technical values are confirmed on enquiry.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/pet-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Marble Resin',
    slug: 'marble-resin',
    group: 'industrial-specialty-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'marble-resin-primary.webp', width: 700, height: 714 }),
      Object.freeze({ src: 'marble-resin-secondary.webp', width: 700, height: 761 }),
    ]),
    titleInput: 'Marble Resin \u2014 Nepal Supplier',
    metaDescription:
      'Marble Resin \u2014 an unsaturated polyester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor:
      'Unsaturated polyester resin; supplier-listed for cultured marble and artificial stone contexts.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Marble Resin is an unsaturated polyester resin (the catalogue labels it orthophthalic UPR). The supplier lists it for cultured marble, artificial stone and decorative architectural contexts; suitability for a specific stone formulation should be confirmed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin family', value: 'Unsaturated polyester resin (TDS)' }),
      Object.freeze({ label: 'Viscosity', value: '450 cPs at 25\u00B0C (TDS)' }),
      Object.freeze({ label: 'Gel time', value: '15\u201320 minutes at 25\u00B0C (TDS)' }),
      Object.freeze({ label: 'Curing time', value: '20\u201340 minutes at 25\u00B0C (TDS)' }),
      Object.freeze({ label: 'Styrene content', value: '35% (TDS)' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.12 g/cm\u00B3' }),
    ]),
    technicalSource: Object.freeze({
      issuer: 'Samrat Poly Resins, India',
      type: 'Technical Data Sheet',
    }),
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
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Vinyl Ester Resin',
    slug: 'vinyl-ester-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    images: Object.freeze([
      Object.freeze({ src: 'vinyl-ester-resin-primary.webp', width: 700, height: 770 }),
      Object.freeze({ src: 'vinyl-ester-resin-secondary.webp', width: 700, height: 1050 }),
    ]),
    titleInput: 'Vinyl Ester Resin \u2014 Nepal Supplier',
    metaDescription:
      'Vinyl Ester Resin \u2014 a bisphenol-A epoxy vinyl ester resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Bisphenol-A epoxy vinyl ester resin; supplier-listed for industrial FRP contexts.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Vinyl Ester Resin is a bisphenol-A epoxy vinyl ester resin. The supplier lists it for FRP tanks, pipelines, ducts, scrubbers and related industrial FRP contexts; suitability for a specific service environment should be confirmed against the supplier documentation. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Bisphenol-A epoxy vinyl ester' }),
      Object.freeze({ label: 'Viscosity', value: '350 cPs (at 25\u00B0C)' }),
      Object.freeze({ label: 'Gel time', value: '15\u201320 minutes at 25\u00B0C (see TDS test condition)' }),
      Object.freeze({ label: 'Styrene content', value: '40%' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.05 g/cm\u00B3' }),
      Object.freeze({
        label: 'Thermal data',
        value: '110\u00B0C (TDS typical data; not a stated service-temperature limit)',
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
        url: 'https://samratpolyresins.in/tds/vinyl-ester-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/vinyl-ester-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Fiberglass Epoxy Resin',
    slug: 'fiberglass-epoxy-resin',
    group: 'industrial-specialty-resins',
    tier: 'B',
    images: Object.freeze([
      Object.freeze({ src: 'fiberglass-epoxy-resin-primary.webp', width: 700, height: 700 }),
      Object.freeze({ src: 'fiberglass-epoxy-resin-secondary.webp', width: 700, height: 780 }),
    ]),
    titleInput: 'Fiberglass Epoxy Resin \u2014 Nepal Supplier',
    metaDescription:
      'Fiberglass Epoxy Resin \u2014 an epoxy resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Epoxy resin; supplier-listed for fibreglass lamination contexts.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Fiberglass Epoxy Resin is an epoxy resin (the catalogue calls it a bisphenol-A epoxy resin). The supplier\u2019s TDS lists hand lay-up and lamination processing; a confirmed hardener pairing is not named in the TDS, so the resin/hardener pairing should be confirmed before ordering. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Epoxy (current TDS)' }),
      Object.freeze({
        label: 'Curing system',
        value: 'Room-temperature cure; TDS identifies an amine hardener but no confirmed product pairing',
      }),
      Object.freeze({ label: 'Published processing', value: 'Hand lay-up and lamination (current TDS)' }),
      Object.freeze({ label: 'Viscosity', value: '700 cPs at 25\u00B0C (TDS)' }),
      Object.freeze({ label: 'Gel time', value: '35\u201345 minutes at 25\u00B0C' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.15 g/cm\u00B3 (TDS)' }),
      Object.freeze({
        label: 'Thermal data',
        value: '75\u00B0C HDT (TDS; no continuous-service limit published)',
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
        url: 'https://samratpolyresins.in/tds/fiberglass-epoxy-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/fiberglass-epoxy-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Bisphenol Resin',
    slug: 'bisphenol-resin',
    group: 'industrial-specialty-resins',
    tier: 'C',
    images: Object.freeze([
      Object.freeze({ src: 'bisphenol-resin-primary.webp', width: 700, height: 719 }),
      Object.freeze({ src: 'bisphenol-resin-secondary.webp', width: 700, height: 903 }),
    ]),
    titleInput: 'Bisphenol Resin \u2014 Nepal Supplier',
    metaDescription:
      'Bisphenol Resin \u2014 a bisphenol-A based thermosetting resin supplied and imported for Nepal by Samrat FRP Traders. Supplier TDS and SDS available.',
    descriptor: 'Bisphenol A and epichlorohydrin based thermosetting resin.',
    overview:
      'According to current Samrat Poly Resins, India documentation, Bisphenol Resin is a bisphenol A and epichlorohydrin based thermosetting resin. The supplier lists it for laminating, FRP composites, coatings and encapsulation contexts. Technical specifications are published in the supplier\u2019s Technical Data Sheet.',
    technicalHighlights: Object.freeze([
      Object.freeze({ label: 'Resin type', value: 'Bisphenol A & epichlorohydrin based (thermosetting)' }),
      Object.freeze({ label: 'Viscosity', value: '600 cPs (at 25\u00B0C)' }),
      Object.freeze({ label: 'Gel time', value: '35\u201345 minutes (at 25\u00B0C)' }),
      Object.freeze({ label: 'Specific gravity / density', value: '1.10 g/cm\u00B3 (at 25\u00B0C)' }),
      Object.freeze({
        label: 'Thermal data',
        value: '80\u00B0C (fully cured; not a published continuous-service limit)',
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
        url: 'https://samratpolyresins.in/tds/bisphenol-resin-tds.pdf',
      }),
      Object.freeze({
        type: 'Safety Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        url: 'https://samratpolyresins.in/sds/bisphenol-resin-sds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'verified',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // Hardeners & Catalysts
  Object.freeze({
    name: 'MEKP Hardener',
    slug: 'mekp-hardener',
    group: 'hardeners-catalysts',
    tier: 'A',
    images: Object.freeze([
      Object.freeze({ src: 'mekp-hardener-primary.webp', width: 700, height: 692 }),
      Object.freeze({ src: 'mekp-hardener-secondary.webp', width: 700, height: 701 }),
    ]),
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
  // Cobalt Octoate is catalogued with Hardeners & Catalysts for buyer
  // navigation. Its product copy accurately identifies it as an
  // accelerator/promoter, not an MEKP hardener or a resin.
  Object.freeze({
    name: 'Cobalt Octoate',
    slug: 'cobalt-octoate',
    group: 'hardeners-catalysts',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'cobalt-octoate-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'Cobalt Octoate Accelerator — Nepal Supplier',
    metaDescription:
      'Cobalt Octoate accelerator/promoter supplied for appropriate unsaturated polyester resin curing systems in Nepal by Samrat FRP Traders. Confirm suitability for the specific resin system during enquiry.',
    descriptor:
      'Polyester-resin accelerator/promoter for appropriate unsaturated polyester resin curing systems; it is not MEKP hardener and not resin.',
    overview:
      'Cobalt Octoate is an accelerator/promoter used in appropriate unsaturated polyester resin curing systems. Samrat FRP Traders supplies it for the Nepal market; confirm suitability with the specific resin system before use.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-COB',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/cobalt-octoate-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),

  // FRP Allied Products
  Object.freeze({
    name: 'Styrene Monomer',
    slug: 'styrene-monomer',
    group: 'frp-allied-products',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'styrene-monomer-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'Styrene Monomer — Nepal Supplier',
    metaDescription:
      'Styrene Monomer supplied for appropriate polyester-resin systems in Nepal by Samrat FRP Traders. Confirm suitability for the specific resin system during enquiry.',
    descriptor:
      'Reactive monomer / reactive diluent for appropriate polyester-resin systems.',
    overview:
      'Styrene Monomer is a reactive monomer and reactive diluent used in appropriate polyester-resin systems. Samrat FRP Traders supplies it for the Nepal market; confirm suitability with the specific resin system before use.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-STY',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/styrene-monomer-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'NC Thinner',
    slug: 'nc-thinner',
    group: 'frp-allied-products',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'nc-thinner-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'NC Thinner — Nepal Supplier',
    metaDescription:
      'NC Thinner, a professional thinner/solvent blend, supplied in Nepal by Samrat FRP Traders for appropriate coating and cleanup contexts.',
    descriptor:
      'Professional thinner/solvent blend for appropriate coating and cleanup contexts.',
    overview:
      'NC Thinner is a professional thinner/solvent blend for appropriate coating and cleanup contexts. Samrat FRP Traders supplies it for the Nepal market; confirm suitability with the intended product system before use.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-NCT',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/nc-thinner-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Paint Brushes',
    slug: 'paint-brushes',
    group: 'frp-allied-products',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'paint-brushes-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'Paint Brushes — Nepal Supplier',
    metaDescription:
      'Paint Brushes supplied in Nepal by Samrat FRP Traders for resin, coating, gelcoat and FRP fabrication application work.',
    descriptor:
      'Application tool for resin, coatings, gelcoat and FRP fabrication.',
    overview:
      'Paint Brushes are application tools for resin, coatings, gelcoat and FRP fabrication work. Samrat FRP Traders supplies them for the Nepal market; confirm the appropriate brush selection for the intended application during enquiry.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Product Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-PDS-BRS',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/pds/paint-brushes-pds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Soap Stone Powder',
    slug: 'soap-stone-powder',
    group: 'frp-allied-products',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'soap-stone-powder-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'Soap Stone Powder — Nepal Supplier',
    metaDescription:
      'Soap Stone Powder, an industrial mineral/filler powder, supplied in Nepal by Samrat FRP Traders for relevant composite and industrial contexts.',
    descriptor:
      'Industrial mineral/filler powder for relevant composite and industrial application contexts.',
    overview:
      'Soap Stone Powder is an industrial mineral/filler powder for relevant composite and industrial application contexts. Samrat FRP Traders supplies it for the Nepal market; confirm suitability for the intended formulation or process during enquiry.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-SSP',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/soap-stone-powder-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
    nepalCommercialEvidenceStatus: 'pending',
  }),
  Object.freeze({
    name: 'Wax Polish',
    slug: 'wax-polish',
    group: 'frp-allied-products',
    tier: 'C',
    socialImage: true,
    images: Object.freeze([
      Object.freeze({ src: 'wax-polish-primary.webp', width: 1254, height: 1254 }),
    ]),
    titleInput: 'Wax Polish — Nepal Supplier',
    metaDescription:
      'Wax Polish supplied in Nepal by Samrat FRP Traders for FRP mould-release and parting-wax preparation contexts.',
    descriptor:
      'FRP mould-release / parting-wax product for mould preparation and release contexts.',
    overview:
      'Wax Polish is used in FRP mould-release and parting-wax preparation contexts. Samrat FRP Traders supplies it for the Nepal market; confirm suitability with the intended mould preparation and release process during enquiry.',
    documents: Object.freeze([
      Object.freeze({
        type: 'Technical Data Sheet',
        issuer: 'Samrat Poly Resins, India',
        reference: 'SPR-TDS-WAX',
        revision: 'Rev. 01',
        date: 'September 2026',
        url: '/tds/wax-polish-tds.pdf',
      }),
    ]),
    technicalEvidenceStatus: 'pending',
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

export function productHref(product, prefix = '') {
  return `${prefix}/products/${product.slug}/`;
}

export function categoryHref(group, prefix = '') {
  return `${prefix}/products/${group.slug}/`;
}

// A product only has a parent category when its group is an indexable category.
// Navigation-only groups intentionally have no category URL, so their products
// breadcrumb as: Home > Products > {Product}.
export function productParentGroup(product) {
  const group = getGroup(product.group);
  return group && group.indexable ? group : null;
}
