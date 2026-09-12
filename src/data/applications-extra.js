// Job-led application guides for five grades that had none.
//
// These five products were not uncovered: each already carries a product-led
// guide in the resource library that sets out what its Technical Data Sheet
// lists. What none of them had was a page written from the job rather than
// from the product, which is what the Applications section is for and what a
// buyer searching "cultured marble manufacturing" or "polyester button
// production" is actually looking for.
//
// Rules applied to every entry here:
//   - Samrat FRP Traders is a trader, supplier, importer and reseller. It does
//     not manufacture, formulate, test or certify, and nothing here implies a
//     process endorsement.
//   - Grade values are quoted only where a supplier Technical Data Sheet is on
//     file, and are attributed to Samrat Poly Resins, India.
//   - Process descriptions are general industry practice, not a recipe. No
//     dosage, cure schedule, filler ratio or press setting appears anywhere.
//   - No photography is invented. These entries carry no cardImage, and the
//     index and hero both fall back to a text-first treatment.
//   - No stock, price, lead time or fire-performance claim for a finished part.

export const extraApplications = [
  {
    slug: 'cultured-marble-manufacturing',
    primaryProductSlugs: ['marble-resin'],
    title: 'Cultured Marble and Artificial Stone Manufacturing',
    cardDescription:
      'Cultured marble is a filled polyester casting, not quarried stone. What the resin does in that system, why the filler does most of the work, and what to settle before a production run.',
    cardBenefit: 'The resin is the binder; the mineral filler is the body.',
    seo: {
      title: 'Resin for Cultured Marble and Artificial Stone Manufacturing',
      description:
        'How unsaturated polyester resin is used to cast cultured marble vanity tops, basins and panels, what the filler contributes, and what a manufacturer should confirm before a run.',
      keywords: [
        'cultured marble manufacturing',
        'artificial stone resin',
        'marble resin Nepal',
        'cast marble vanity top',
        'engineered stone resin',
      ],
    },
    intro:
      'Cultured marble is not stone that has been cut. It is a casting: a mineral filler, usually a carbonate or a quartz-type mineral depending on the product, bound together by a liquid resin that cures at room temperature, poured into a mould and released as a finished piece with its own gelcoated face. The veining that makes it look like marble is introduced during the pour rather than being a property of the material. That single fact explains most of what a manufacturer needs to know about the resin: it is the binder in a system where the filler makes up the bulk of what is in the mould.',
    whatTheyManufacture:
      'Producers in this category make vanity tops and integrated wash basins, kitchen and bathroom countertops, wall panels and window sills, decorative architectural components, and smaller cast items such as statues, railings and balusters. The <a href="/products/marble-resin/">Marble Resin</a> Technical Data Sheet issued by Samrat Poly Resins, India lists those contexts for the grade. The same workshop often runs several of them from one mould library, which is why consistency between batches matters more here than peak performance in any single pour.',
    whySuitable:
      '<a href="/products/marble-resin/">Marble Resin</a> is an unsaturated polyester resin, published by Samrat Poly Resins, India with a viscosity of 450 cPs at 25°C, a gel time of 15 to 20 minutes at 25°C, a curing time of 20 to 40 minutes at 25°C, a styrene content of 35% and a specific gravity of 1.12 g/cm³. The property that matters most in this job is the working window: a filled mix is heavy and slow to move, and a pour that begins to gel while it is still being placed or vibrated traps air and leaves a visible defect in a surface that is the product. A longer gel time is what buys the time to place, de-air and strike the mould. Those are the manufacturer’s published figures for the supplied resin, not a statement about a finished slab.',
    requiredCharacteristics: [
      'A working window long enough to place and de-air a heavily filled mix before it begins to gel',
      'Consistent batch-to-batch behaviour, because a mould library runs the same parts repeatedly and a shift in gel time shows up as scrap',
      'Compatibility with the mineral filler and pigment system the workshop actually uses, confirmed against the supplier document rather than assumed',
      'A cured body that takes a gelcoated face without telegraphing the filler through it',
      'Room-temperature cure, so parts can be produced without a heated press or oven',
    ],
    manufacturingProcess:
      'The general industry sequence is straightforward and the detail belongs to each workshop. A mould is prepared and released, and a <a href="/products/gp-gelcoat-resin/">gelcoat</a> is applied to the mould face first, since that layer becomes the visible surface of the finished piece. The casting mix is then prepared by dispersing mineral filler and pigment into the catalysed resin until uniform, and poured or placed into the mould. Vibration is normally used to release entrained air, because air that stays in the mix becomes a pinhole in a surface nobody can repair invisibly. The piece cures at room temperature, is released, then trimmed, finished and inspected. Filler loading, pigment quantity, catalyst dosage, vibration time and cure schedule are all workshop and formulation decisions governed by the current supplier documentation and by your own approved procedure, and none of them is published here.',
    advantages: [
      'Room-temperature cure, so production does not depend on a heated press or oven',
      'A published working window long enough to place and de-air a heavily filled mix',
      'The supplier Technical Data Sheet and Safety Data Sheet for this grade are both on file and linked from the product page',
      'One documented grade across a mould library keeps successive parts behaving the same way',
    ],
    commonProducts: [
      'Cultured marble vanity tops and integrated wash basins',
      'Kitchen and bathroom countertops',
      'Wall panels and window sills',
      'Decorative architectural components, statues, railings and balusters',
    ],
    faqs: [
      {
        q: 'Is cultured marble the same as quartz or engineered stone?',
        a: 'They are related but not the same, and the difference is mostly in the mineral and the process. Our range carries <a href="/products/gp-quartz-resin/">GP Quartz Resin</a> separately for quartz and engineered-stone work, and there is a comparison guide covering how the two routes differ. Tell us the finished product rather than the category name and the grade question usually answers itself.',
      },
      {
        q: 'Does the resin decide how the finished slab performs?',
        a: 'No, and this is the most common misreading of a resin data sheet in this trade. What a finished cultured marble piece does in service depends on the filler, the loading, the pigment, the gelcoat, the cure and the mould as much as on the resin. A Technical Data Sheet describes the supplied liquid. It is not a performance certificate for a slab somebody casts from it.',
      },
      {
        q: 'What filler should I use, and at what loading?',
        a: 'That is a formulation decision and it belongs to your own approved procedure and to the supplier documentation, not to a general guide. We supply the resin and the documentation the manufacturer publishes for it; we do not issue filler ratios or approve a formulation.',
      },
      {
        q: 'Why do my pieces have pinholes at the surface?',
        a: 'Air trapped in a filled mix is the usual explanation, and it is why vibration is a normal part of the sequence. Mixing practice, filler dispersion, pour technique and how long the mix stands before placing all contribute. It is a process question rather than evidence of a resin fault, though a batch that behaves differently from the last one is worth raising with us.',
      },
      {
        q: 'Do you supply the gelcoat and pigment as well?',
        a: 'Yes, both sit in the range. <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> covers the moulded face and <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> the colour. Which gelcoat suits a bathroom surface that stays permanently wet is worth a conversation rather than an assumption.',
      },
    ],
    relatedProductSlugs: ['gp-gelcoat-resin', 'frp-polyester-pigment', 'mekp-hardener', 'gp-quartz-resin'],
    ctaHeading: 'Planning a cultured marble or artificial stone run?',
    ctaText:
      'Tell us the finished product, the mineral system you work with, the quantity you expect to take and any document your quality process needs, and we will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'frp-compression-moulding-dmc-smc',
    primaryProductSlugs: ['dmc-smc-resin'],
    title: 'DMC and SMC Compression Moulding',
    cardDescription:
      'Compression moulding turns a pre-made compound into a finished part under heat and pressure. Where the resin sits in that chain, and why it is bought differently from a lay-up resin.',
    cardBenefit: 'The resin goes into a compound, not into a mould.',
    seo: {
      title: 'Resin for DMC and SMC Compression Moulding',
      description:
        'How unsaturated polyester resin is used in dough and sheet moulding compounds for electrical housings, manhole covers and panels, and what a compounder should confirm before ordering.',
      keywords: [
        'DMC resin',
        'SMC resin',
        'compression moulding resin',
        'moulding compound Nepal',
        'electrical housing FRP',
      ],
    },
    intro:
      'Compression moulding is the odd one out among the processes in this section, because the fabricator who presses the part usually does not handle liquid resin at all. The resin goes into a compound first — a dough moulding compound or a sheet moulding compound, made up with reinforcement, filler and additives — and it is that compound, not the resin, which is loaded into a heated mould and pressed. Understanding where the resin sits in that chain is the difference between buying it sensibly and buying it as though it were a lay-up resin.',
    whatTheyManufacture:
      'The <a href="/products/dmc-smc-resin/">DMC/SMC Resin</a> Technical Data Sheet issued by Samrat Poly Resins, India lists DMC and SMC moulding compounds, electrical housings, manhole covers, automotive panels, transportation components, water tanks and sanitaryware. These are parts that suit a pressed process: repeatable geometry, moderate to high volumes, and a finished surface straight out of the tool rather than a laminate that is trimmed and finished by hand.',
    whySuitable:
      '<a href="/products/dmc-smc-resin/">DMC/SMC Resin</a> is published by Samrat Poly Resins, India as an orthophthalic unsaturated polyester resin with a non-accelerated cure system, a viscosity of 600 cPs at 25°C, a gel time of 12 to 18 minutes at 25°C, a styrene content of 35% and a specific gravity of 1.12 g/cm³. In a compounding operation the relevant questions are how the resin wets and carries a filler and reinforcement load, and how consistently it behaves from batch to batch, because a compound that varies produces parts that vary. Those are the manufacturer’s published figures for the supplied resin and describe the liquid, not the pressed part.',
    requiredCharacteristics: [
      'Predictable behaviour when carrying a filler and reinforcement load rather than wetting out mat by hand',
      'Batch-to-batch consistency, since a compound is made ahead of moulding and variation shows up later as scrap',
      'A non-accelerated system, so the compounder controls the cure rather than inheriting it',
      'Compatibility with the thickener, filler and additive package the compound formulation uses',
      'Documentation a downstream moulder can be shown, because the part maker is often not the resin buyer',
    ],
    manufacturingProcess:
      'In general industry practice the resin is first made up into a compound: resin, filler, reinforcement, and the additive and thickening package the formulation calls for are mixed to a dough for DMC, or spread and impregnated into a sheet for SMC, which is then left to mature. The compound is cut or weighed into charges, placed in a heated matched-metal tool, and pressed. Heat and pressure flow the charge to fill the cavity and cure it, and the part is removed and trimmed. Compound formulation, maturation, charge weight, tool temperature, pressure and cure time are all decisions for the compounder and the moulder, governed by their own approved procedure and by the current supplier documentation. None of them is published here.',
    advantages: [
      'A published non-accelerated system leaves cure control with the compounder rather than fixing it at supply',
      'Published viscosity and gel-time figures give a compounder a documented starting point for trials',
      'The supplier Technical Data Sheet and Safety Data Sheet are both on file and linked from the product page',
      'One documented grade across a compounding run keeps the compound behaving the same way from batch to batch',
    ],
    commonProducts: [
      'Electrical housings, enclosures and switchgear components',
      'Manhole covers and utility access products',
      'Automotive and transportation panels',
      'Moulded water tank sections and sanitaryware',
    ],
    faqs: [
      {
        q: 'What is the difference between DMC and SMC?',
        a: 'Both are compression moulding compounds and both are made from the same broad ingredients. The difference is the form: a dough moulding compound is a bulk dough, while a sheet moulding compound is produced and matured as a sheet. There is a dedicated comparison guide covering how the two differ and where each is normally used.',
      },
      {
        q: 'Can I use this resin for hand lay-up instead?',
        a: 'That is a question for the supplier documentation and your own process, not something a general guide should extend. The grade is published for compounding contexts. If the job is hand lay-up, the general-purpose grades are the documented route and there is a selection guide covering that choice.',
      },
      {
        q: 'Do you supply the finished compound, or the resin?',
        a: 'We supply the resin. Samrat FRP Traders is a trader, supplier, importer and reseller, and the compound is made by whoever formulates it. If your requirement is actually for a ready-made compound rather than a resin, say so at the enquiry stage, because those are different purchases.',
      },
      {
        q: 'Will this resin meet the electrical or fire requirement in my specification?',
        a: 'A resin grade on its own does not answer a finished-part requirement. Electrical and fire performance are properties of the moulded part and the full formulation, and they need the specific standard named and the supporting test evidence. For work where fire performance is specified, ask about the fire-retardant grades rather than assuming a general grade will carry it.',
      },
    ],
    relatedProductSlugs: ['glass-fiber-mat', 'mekp-hardener', 'frp-polyester-pigment', 'soap-stone-powder'],
    ctaHeading: 'Compounding for DMC or SMC production?',
    ctaText:
      'Tell us the compound you are producing, the parts it feeds, the quantity you expect to take and the documentation your customers ask for, and we will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'polyester-button-manufacturing',
    primaryProductSlugs: ['button-grade-resin'],
    title: 'Polyester Button Manufacturing',
    cardDescription:
      'Buttons are cut from cast polyester sheet or rod, not moulded one at a time. What that means for the resin, and why clarity and a controlled cure matter more than strength.',
    cardBenefit: 'Cast the blank first; the button is machined from it.',
    seo: {
      title: 'Resin for Polyester Button Manufacturing',
      description:
        'How polyester casting resin is used to produce button blanks, what the casting stage demands of the resin, and what a button manufacturer should confirm before ordering.',
      keywords: [
        'polyester button resin',
        'button grade resin Nepal',
        'button manufacturing resin',
        'polyester casting resin',
        'fashion accessory resin',
      ],
    },
    intro:
      'Polyester buttons are not moulded individually. The normal industry route is to cast a sheet or a rod first, let it cure, and then produce buttons from that blank by cutting, turning, drilling and polishing. Everything the resin is asked to do happens at the casting stage, before a single button exists, which is why a button producer buys on clarity, colour behaviour and a controlled cure rather than on the mechanical properties that matter in a laminate.',
    whatTheyManufacture:
      'Producers in this category make buttons for garments and uniforms, fashion accessories and trims, and small decorative cast items. The <a href="/products/button-grade-resin/">Button Grade Resin</a> Technical Data Sheet issued by Samrat Poly Resins, India lists buttons, fashion accessories and small casting work for the grade. In a garment supply chain the same producer usually runs many colours and finishes from one process, so repeatability across batches is the commercial constraint rather than any single property.',
    whySuitable:
      '<a href="/products/button-grade-resin/">Button Grade Resin</a> is published by Samrat Poly Resins, India as a polyester (unsaturated) resin with a viscosity of 1,100 cPs, a gel time of 9.5 minutes, a curing time of 2 hours and a styrene content of 33%. The thicker body separates it from a laminating grade: a casting resin is not being asked to wet out fibre, it is being asked to hold pigment and effect evenly in a body that will be cut and polished afterwards. The published cure time matters for the same reason, since a blank that is machined before it is properly cured does not finish cleanly. Those are the manufacturer’s figures for the supplied resin, not a property of a finished button.',
    requiredCharacteristics: [
      'A body that holds pigment and decorative effect in suspension rather than letting it settle out of a thin liquid',
      'A controlled, documented cure, because blanks are machined afterwards and an under-cured blank does not finish cleanly',
      'Consistency between batches, since a garment order is usually matched across many buttons and several runs',
      'Clarity behaviour appropriate to the finish being produced, confirmed against the supplier document',
      'Room-temperature cure, so casting does not require heated equipment',
    ],
    manufacturingProcess:
      'The general sequence used across the trade is to catalyse the resin, add pigment or effect, and cast a sheet or rod, allowing it to cure fully before anything is cut from it. Buttons are then produced from the blank by cutting or turning to shape, drilling the holes or fitting the shank, and finishing the edges. Polishing, often in a tumbling operation, produces the final surface. Catalyst dosage, pigment quantity, casting thickness, cure schedule and polishing media are workshop decisions governed by the current supplier documentation and your own approved procedure. This page publishes none of them, and the resin data sheet describes the liquid rather than the finished button.',
    advantages: [
      'A published thicker body suited to holding pigment and effect in a cast blank',
      'A documented cure time, which is the figure that governs when a blank can be machined',
      'The supplier Technical Data Sheet and Safety Data Sheet are both on file and linked from the product page',
      'One documented grade across a colour run keeps successive batches behaving the same way',
    ],
    commonProducts: [
      'Buttons for garments, shirting and uniforms',
      'Fashion accessories and trims',
      'Small decorative cast items',
      'Cast sheet and rod blanks for downstream machining',
    ],
    faqs: [
      {
        q: 'Can I use a general-purpose resin for buttons instead?',
        a: 'General-purpose grades are formulated to wet out glass reinforcement, which is not what this job asks for. There is a comparison guide covering the button grade against a general-purpose resin, and it is worth reading before substituting on price alone.',
      },
      {
        q: 'How is this different from a clear casting resin?',
        a: 'Both are casting rather than laminating resins, but they are positioned for different work and cure differently. We carry <a href="/products/clear-casting-resin/">Clear Casting Resin</a> separately for art and deep-pour casting, and there is a comparison guide covering the two.',
      },
      {
        q: 'What causes cracking or crazing in a cast sheet?',
        a: 'Casting faults are generally attributed to cure conditions: thickness, exotherm, catalyst level and ambient temperature. That is process territory rather than a resin fault, and the supplier documentation for the grade is the controlling reference. A batch behaving differently from the previous one is worth raising with us.',
      },
      {
        q: 'Do you supply pigments and effects for buttons?',
        a: 'We supply <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> in the range. Whether a particular pigment suits a button finish is a question for the supplier documentation, since a colour that works in a laminate does not automatically behave the same way in a cast and polished blank.',
      },
    ],
    relatedProductSlugs: ['mekp-hardener', 'frp-polyester-pigment', 'clear-casting-resin', 'wax-polish'],
    ctaHeading: 'Producing polyester buttons or cast accessories?',
    ctaText:
      'Tell us the finished item, the casting format you work in, the colours and finishes you run and the quantity you expect to take, and we will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'fire-retardant-frp-panels-and-cladding',
    primaryProductSlugs: ['fire-retardant-resin'],
    title: 'Fire-Retardant FRP Panels, Cladding and Enclosures',
    cardDescription:
      'A fire-retardant resin is a formulation, not a rating. What that distinction means for a specification, and what evidence a project will actually ask for.',
    cardBenefit: 'The resin is classified; the finished part is tested.',
    seo: {
      title: 'Fire-Retardant Resin for FRP Panels, Cladding and Enclosures',
      description:
        'How a fire-retardant polyester resin is used in FRP panels, cladding and enclosures, and why a resin classification is not the same as a fire rating for a finished part.',
      keywords: [
        'fire retardant resin',
        'fire retardant FRP panel',
        'FRP cladding fire',
        'halogenated fire retardant resin',
        'fire retardant resin Nepal',
      ],
    },
    intro:
      'This is the application in the range where the wrong assumption is the expensive one. A fire-retardant resin is a resin formulated to resist ignition and flame spread. It is not a rating, and buying one does not give a finished panel a fire classification. Fire performance is a property of the completed construction and is established by testing that construction against a named standard. A project that asks for a fire requirement is asking for evidence about a part, and the resin is one input to that evidence rather than the answer to it.',
    whatTheyManufacture:
      'Fabricators in this category produce FRP panels and cladding for buildings, enclosures and housings, ducting and industrial partitions, and components for interiors where a fire requirement forms part of the specification. The common thread is not the shape of the part but the paperwork behind it: somebody downstream has to demonstrate that the finished item meets a stated requirement.',
    whySuitable:
      '<a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> is published by Samrat Poly Resins, India as an unsaturated polyester resin with a halogenated fire-retardant formulation, a room-temperature cure with an MEKP catalyst, a viscosity of 400 cPs, a gel time of 5.5 minutes and a styrene content of 35%. The supplier classification describes the resin, not the fire performance of any laminate made from it. In practice the grade is chosen because a project requires a fire-retardant resin system as an input, and because it still laminates by the ordinary room-temperature route, so a fabricator does not have to change process to meet that input.',
    requiredCharacteristics: [
      'A fire-retardant formulation documented by the manufacturer, so the input to the specification can be evidenced',
      'A room-temperature cure, so fire-rated work does not require different equipment from ordinary lamination',
      'A working window that suits panel-sized lay-up, noting the published gel time is shorter than the general-purpose grades',
      'Documentation a specifier can be shown, including the Safety Data Sheet, since halogenated systems raise their own handling questions',
      'Clarity about which standard the project requires, established before fabrication rather than after',
    ],
    manufacturingProcess:
      'The laminating sequence itself is the familiar one. Reinforcement is placed against a prepared and released mould, the catalysed resin is worked into it by roller or brush, layers are built up to the specified thickness, and the part cures at room temperature before release and trim. What changes on a fire-specified job is everything around the lamination: which standard applies, what construction was tested, what thickness and lay-up that test covered, and what records have to accompany the delivered part. Catalyst dosage, laminate schedule and cure conditions belong to the current supplier documentation and to your own approved procedure. The published gel time for this grade is shorter than the general-purpose grades, which is worth planning a panel lay-up around rather than discovering mid-pour.',
    advantages: [
      'A fire-retardant formulation documented by the manufacturer, with the Technical Data Sheet and Safety Data Sheet both on file',
      'Room-temperature cure, so a fire-specified job uses the same process as ordinary lamination',
      'Published viscosity and gel-time figures give a fabricator a documented starting point for trials',
      'A halogen-free alternative exists in the range where a project rules out halogenated systems',
    ],
    commonProducts: [
      'FRP panels and cladding for buildings',
      'Enclosures, housings and equipment covers',
      'Ducting and industrial partitions',
      'Interior components where a fire requirement is specified',
    ],
    faqs: [
      {
        q: 'Does this resin make my panel fireproof?',
        a: 'No. Fire retardant and fireproof are different claims and the distinction matters commercially, which is why there is a dedicated guide on it. A fire-retardant formulation resists ignition and flame spread; it does not make a part incombustible, and it does not by itself give the part a rating.',
      },
      {
        q: 'What evidence will my project ask for?',
        a: 'Normally a named standard, the test evidence for the construction that was tested, and traceability showing that what was delivered matches it. A resin Technical Data Sheet is an input to that package rather than a substitute for it. Establish which standard applies before fabrication, because a test result cannot be produced retrospectively for a part already built.',
      },
      {
        q: 'What is the difference between this and the ISO fire-retardant grade?',
        a: 'This grade uses a halogenated formulation. The <a href="/products/iso-fire-retardant-resin/">ISO Fire Retardant Resin</a> is isophthalic-based with a halogen-free, ATH-filled formulation, which is the route to ask about where a project rules out halogenated systems or where corrosion resistance is required alongside fire performance. There is a comparison guide covering the two.',
      },
      {
        q: 'Does the reinforcement affect fire performance?',
        a: 'The finished laminate is what gets tested, and the reinforcement is part of it. There is a guide covering fire-retardant resin and glass fibre specifically. The practical point is that changing the lay-up changes the thing that was tested.',
      },
      {
        q: 'Are there extra handling requirements?',
        a: 'Treat the Safety Data Sheet as the controlling reference for handling, storage, protective equipment and disposal, as with any resin. Halogenated systems raise their own questions and those belong to the supplier documentation and to your site controls rather than to a web page.',
      },
    ],
    relatedProductSlugs: ['glass-fiber-mat', 'mekp-hardener', 'iso-fire-retardant-resin', 'gp-gelcoat-resin'],
    ctaHeading: 'Working to a fire requirement?',
    ctaText:
      'Tell us the component, the standard your project names, the fabrication process and the documentation you have to produce, and we will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'fire-retardant-frp-for-corrosive-service',
    primaryProductSlugs: ['iso-fire-retardant-resin'],
    title: 'FRP for Corrosive Service With a Fire Requirement',
    cardDescription:
      'Some equipment has to resist chemicals and meet a fire requirement at the same time. Why that combination has its own grade, and what to establish before specifying it.',
    cardBenefit: 'Two requirements at once, and one grade built for both.',
    seo: {
      title: 'ISO Fire Retardant Resin for Corrosive FRP Service',
      description:
        'How a halogen-free, ATH-filled isophthalic fire-retardant resin is used for FRP ducting and process equipment that must resist chemicals and meet a fire requirement.',
      keywords: [
        'ISO fire retardant resin',
        'halogen free fire retardant resin',
        'FRP ducting fire retardant',
        'corrosive service FRP Nepal',
        'ATH filled resin',
      ],
    },
    intro:
      'Most FRP equipment has one governing requirement. A storage tank has to resist what is inside it. A wall panel has to meet a fire requirement. A smaller set of equipment has both at once: extract ducting carrying a corrosive vapour through an occupied building, scrubber components, process equipment in a plant with its own fire regime. That combination is the reason a separate grade exists, because meeting one requirement with a resin chosen for the other is where specifications come apart.',
    whatTheyManufacture:
      'Fabricators in this category produce ducting and extract systems handling corrosive vapour, scrubber and process equipment, tanks and vessels in plants with a fire requirement, and structural or enclosure components in chemically loaded environments. The defining feature is that two separate requirements have to be satisfied by one laminate, and both have to be evidenced separately.',
    whySuitable:
      '<a href="/products/iso-fire-retardant-resin/">ISO Fire Retardant Resin</a> is published by Samrat Poly Resins, India as an unsaturated polyester resin with a halogen-free, ATH-filled fire-retardant formulation, a room-temperature cure with an MEKP catalyst, a viscosity of 400 cPs, a gel time of 5.5 minutes, a styrene content of 35% and a specific gravity of 1.18 g/cm³. The "ISO" refers to isophthalic resin chemistry and not to an ISO certification. The isophthalic backbone is the part that addresses wet and chemically loaded service, and the halogen-free filled formulation is the part that addresses the fire input. As with any fire-retardant grade, the classification describes the resin rather than the fire performance of a finished laminate.',
    requiredCharacteristics: [
      'An isophthalic backbone, for laminates that stay wet or meet chemicals over a long service life',
      'A documented fire-retardant formulation, so the fire input to a specification can be evidenced',
      'A halogen-free route, which some projects and some clients require explicitly',
      'Room-temperature cure, so the work does not require different equipment from ordinary lamination',
      'Chemical-resistance guidance for the specific service condition, obtained from the manufacturer rather than inferred',
    ],
    manufacturingProcess:
      'The lamination itself follows ordinary room-temperature practice: a prepared and released mould or mandrel, reinforcement placed and wetted out with catalysed resin, layers built to the specified schedule, cure, release and trim. Where this work differs is in what has to be established first. The chemical, its concentration and its service temperature decide whether an isophthalic laminate is the right answer at all, or whether the duty belongs to <a href="/products/vinyl-ester-resin/">vinyl ester</a>. The fire requirement decides which standard governs and what construction has to be tested. Both need settling before fabrication. Laminate schedule, catalyst dosage and cure conditions belong to the current supplier documentation and your own approved procedure, and none is published here.',
    advantages: [
      'One documented grade addresses both the chemical and the fire input rather than compromising on one',
      'A halogen-free formulation, which is a requirement in its own right on some projects',
      'An isophthalic backbone, the route the industry specifies for wet and chemically loaded service',
      'The supplier Technical Data Sheet and Safety Data Sheet are both on file and linked from the product page',
    ],
    commonProducts: [
      'Ducting and extract systems handling corrosive vapour',
      'Scrubber and process equipment components',
      'Tanks and vessels in plants with a fire requirement',
      'Enclosures and structural components in chemically loaded environments',
    ],
    faqs: [
      {
        q: 'Does the "ISO" mean this resin is ISO certified?',
        a: 'No. It refers to isophthalic resin chemistry, which is a description of what the resin is made from. It is not a certification and it is unrelated to ISO 9001. There is a fuller explainer on that naming, because it is the single most common misreading in this part of the range.',
      },
      {
        q: 'Why choose a halogen-free formulation?',
        a: 'Some projects and some clients require it explicitly, and where that is the case it is a specification requirement rather than a preference. Where a project does not rule out halogenated systems, the <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> grade is the other documented route and there is a comparison guide covering both.',
      },
      {
        q: 'Is this enough for an aggressive chemical duty?',
        a: 'It depends entirely on the chemical, its concentration and its temperature. An isophthalic laminate handles a great deal but not everything, and above a certain severity the conversation moves to vinyl ester. Send the service condition rather than a resin name and the question can be answered properly.',
      },
      {
        q: 'Does this grade give my ducting a fire rating?',
        a: 'No. A fire-retardant classification describes the resin. A rating belongs to a finished construction and is established by testing it against a named standard. Establish which standard applies before fabrication, since the test covers the construction that was tested rather than the resin on its own.',
      },
      {
        q: 'Can I use it for the whole laminate, or just a barrier layer?',
        a: 'Both approaches exist in the industry, and which is appropriate is a design decision for whoever specifies the laminate, settled against the governing standard rather than by analogy. We supply the material and the manufacturer documentation; we do not approve a laminate schedule.',
      },
    ],
    relatedProductSlugs: ['glass-fiber-mat', 'mekp-hardener', 'vinyl-ester-resin', 'fire-retardant-resin'],
    ctaHeading: 'Specifying for chemical and fire service together?',
    ctaText:
      'Tell us the equipment, the chemical, its concentration and temperature, the fire standard your project names and the documentation you have to produce, and we will review the grade and the current supplier documentation with you.',
  },
];
