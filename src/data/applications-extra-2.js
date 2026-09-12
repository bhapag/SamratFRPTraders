// Job-led application guides for six grades that had no page of their own.
//
// The audit that produced this file read the rendered English product pages
// rather than the data, so "an article exists somewhere in the repository"
// never counted as coverage. Seven products surfaced no application at all and
// five more surfaced only a guide where they are a supporting material rather
// than the subject. These six are the gaps where a real Nepal buyer has a real
// job and the evidence supports writing about it.
//
// Rules applied to every entry:
//   - Samrat FRP Traders is the Nepal supplier, importer and reseller. It does
//     not manufacture, formulate, test or certify anything here.
//   - Grade values appear only where a supplier document is on file, attributed
//     to Samrat Poly Resins, India. ISO Polyester Resin, ISO Gelcoat and UV
//     Stabilized Sheet Grade Yellow Resin have none, so their pages carry no
//     figures and say so.
//   - The product posters published in 4441104 print viscosity, gel time,
//     styrene and pack-size figures. Those are NOT repeated here as verified
//     specifications, because the artwork is not a data sheet.
//   - Process descriptions are general industry practice. No dosage, no mix
//     ratio, no cure schedule, no filler loading, no hardener pairing.
//   - No stock, delivery, minimum order, price, certification or test result.
//   - No photography is invented. These carry no cardImage.

export const extraApplications2 = [
  {
    slug: 'frp-effluent-and-process-tanks',
    primaryProductSlugs: ['iso-polyester-resin'],
    title: 'FRP Effluent and Process Tanks',
    cardDescription:
      'The tanks that sit between ordinary water storage and aggressive chemical duty. Why an isophthalic laminate is the usual answer there, and what decides whether it is enough.',
    cardBenefit: 'The middle band, where general purpose is thin and vinyl ester is overspent.',
    seo: {
      title: 'Resin for FRP Effluent and Process Tanks in Nepal',
      description:
        'Which laminating resin suits an FRP effluent or process tank, why isophthalic sits between a general-purpose grade and vinyl ester, and the service details that settle the choice.',
      keywords: [
        'FRP effluent tank',
        'FRP process tank Nepal',
        'isophthalic resin tank',
        'ISO polyester resin Nepal',
        'effluent treatment plant FRP',
      ],
    },
    intro:
      'Most resin questions about tanks get answered at one of two extremes. A domestic or institutional water tank is a general-purpose job, and an acid storage vessel is a vinyl ester job. A large amount of real work in Nepal sits between them: effluent holding and treatment tanks, process water in dyeing and textile plants, plating, rinse and washdown tanks, and cooling tower basins. These are permanently wet, often warm, mildly chemically loaded, and expected to last. That band is where an isophthalic laminate is the usual industry answer, and it is the band this page is about.',
    whatTheyManufacture:
      'Fabricators in this category build effluent holding and treatment tanks, process water vessels for textile and dyeing plants, washdown, rinse and plating tanks, cooling tower basins and sumps, and the pipework and launders that connect them. Anything holding food, beverage or drinking water is a separate question, because that turns on an approval for contact with the contents rather than on the resin family. The tanks are often sectional or shop-moulded and assembled on site, which means the laminate specification has to hold across many panels made on different days.',
    whySuitable:
      '<a href="/products/iso-polyester-resin/">ISO Polyester Resin</a> is an isophthalic unsaturated polyester. The isophthalic backbone is the reason it exists: it is described across the industry as more resistant to hydrolysis, the slow attack water makes on ester linkages over years of contact, than the orthophthalic backbone of a general-purpose grade. For a tank that never dries out, that difference is the whole service life. It is not a strength upgrade and it does not make a laminate chemically inert. Samrat FRP Traders supplies and imports this grade for Nepal; the supplier is Samrat Poly Resins, India. We do not yet hold their Technical Data Sheet or Safety Data Sheet for it, so this page publishes no figures for the grade and none should be inferred from product artwork.',
    requiredCharacteristics: [
      'A backbone chosen for hydrolysis resistance, because the laminate never dries out between uses',
      'Predictable wet-out of chopped strand mat and woven roving, since tank walls are built in several passes that all have to bond',
      'Consistency across panels, because a sectional tank is assembled from parts made on different days',
      'A cure system the fabricator controls, so gel time can be matched to panel size and workshop temperature',
      'Chemical-resistance guidance for the actual contents, obtained from the manufacturer rather than inferred from the resin family',
    ],
    manufacturingProcess:
      'The lay-up itself is ordinary open-mould work. Reinforcement is placed against a prepared and released mould, catalysed resin is worked through it with roller or brush, and layers are built to the specified wall thickness before the panel cures at room temperature and is trimmed. What changes on this class of tank is the specification work before anyone mixes resin. The contents have to be stated properly: what is in the tank, at what concentration, at what temperature, and whether the duty is continuous or intermittent. Many designs then use a resin-rich inner surface against the contents with the structural laminate behind it. Whether that is appropriate here, and what laminate schedule goes with it, belongs to whoever specifies the vessel and to any standard governing it. Catalyst quantities, cure schedules and laminate schedules are not published on this page.',
    advantages: [
      'Isophthalic is the chemistry the industry specifies for permanently wet service; this grade sits in that family',
      'Room-temperature cure, so no heated equipment is needed for tank panels',
      'The same familiar hand lay-up process as a general-purpose grade, so nothing has to be relearned',
      'A documented alternative exists in both directions: a general-purpose grade below it and vinyl ester above',
    ],
    commonProducts: [
      'Effluent holding and treatment tanks',
      'Process water vessels for textile and dyeing plants',
      'Washdown, plating and rinse tanks',
      'Cooling tower basins, sumps and launders',
    ],
    faqs: [
      {
        q: 'How do I know whether this is an isophthalic job or a vinyl ester job?',
        a: 'By the contents rather than the category. State the chemical, its concentration and its service temperature, and whether exposure is continuous. Mild, dilute and ambient generally sits in the isophthalic band; hot, concentrated or oxidising duty moves the conversation to <a href="/products/vinyl-ester-resin/">vinyl ester</a>. Where the answer is not obvious, the manufacturer’s chemical-resistance guidance for the specific grade decides it, not a general article.',
      },
      {
        q: 'Could I just use a general-purpose resin and make the wall thicker?',
        a: 'Thickness does not address hydrolysis. A general-purpose laminate in permanently wet service is exposed to the same slow attack throughout its thickness, and a thicker wall mainly buys stiffness. This is the reason the isophthalic grade exists as a separate product rather than as a premium version of the same one.',
      },
      {
        q: 'Is this suitable for drinking water?',
        a: 'That is a separate question with a separate answer. Potable-water suitability depends on an approval covering contact with drinking water, and it has to name the whole construction including any gelcoat or lining on the wetted face. It does not follow from the acid used in the resin backbone. Ask which standard or certificate is required and we will put that to the supplier.',
      },
      {
        q: 'Why are there no technical figures on this page?',
        a: 'Because we do not hold the supplier Technical Data Sheet or Safety Data Sheet for this grade yet. The product artwork carries printed figures, but artwork is not a data sheet and we do not republish numbers from it as verified specifications. Ask us and we will confirm what Samrat Poly Resins, India currently publishes.',
      },
      {
        q: 'What else do I need besides the resin?',
        a: 'Reinforcement and a catalyst system at minimum: <a href="/products/glass-fiber-mat/">glass fibre mat</a> for the laminate and an <a href="/products/mekp-hardener/">MEKP hardener</a>, with a cobalt accelerator where the system calls for one. Whether the wetted face also needs a gelcoat is a design decision for the vessel.',
      },
    ],
    relatedProductSlugs: ['glass-fiber-mat', 'mekp-hardener', 'cobalt-octoate', 'vinyl-ester-resin', 'gp-clear-resin'],
    ctaHeading: 'Specifying an effluent or process tank?',
    ctaText:
      'Tell us the vessel, what it holds, the concentration and temperature, whether exposure is continuous, and any standard your project names. We will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'gelcoat-for-swimming-pools-and-water-slides',
    primaryProductSlugs: ['iso-gelcoat'],
    title: 'Gelcoat for Swimming Pools and Water Slides',
    cardDescription:
      'A pool surface is wet, sunlit, chemically treated and touched by people all day. What that asks of a gelcoat, and where the honest limits of the answer sit.',
    cardBenefit: 'Four demands on one surface, none of them structural.',
    seo: {
      title: 'Gelcoat for FRP Swimming Pools and Water Slides in Nepal',
      description:
        'What a pool or water slide surface asks of a gelcoat, why the isophthalic route is normally specified, and the questions to settle before a moulding run.',
      keywords: [
        'gelcoat for swimming pool',
        'water slide gelcoat',
        'ISO gelcoat Nepal',
        'FRP pool surface',
        'isophthalic gelcoat',
      ],
    },
    intro:
      'A pool shell or a water slide asks more of its surface than almost anything else an FRP shop makes. The face is wet continuously rather than occasionally, it sits in direct sun, the water is chemically treated, and people slide along it and touch it all day. None of that is carried by the gelcoat structurally, because a gelcoat never carries anything structurally. All of it is carried by the gelcoat cosmetically, which is the same thing as the product from the customer’s point of view.',
    whatTheyManufacture:
      'Fabricators in this category produce one-piece and sectional pool shells, water slide flumes and curved sections, pool steps, ledges and surrounds, splash pads and play features, and the moulded fittings that go with them. The product artwork issued by Samrat Poly Resins, India for <a href="/products/iso-gelcoat/">ISO Gelcoat</a> lists swimming pools and water slides among its contexts. That is a positioning statement on marketing material rather than a technical document, which is why the boundaries below matter. The commercial reality is that these are highly visible products where a dull or blistered surface is a complaint even when the laminate behind it is sound.',
    whySuitable:
      'ISO Gelcoat is an isophthalic gelcoat. The isophthalic backbone is described across the industry as more resistant to hydrolysis than an orthophthalic one, which is why it is the route normally specified where a moulded face stays wet or has to hold gloss outdoors. Two honest boundaries belong on this page. First, isophthalic is not the same as ISO/NPG: neopentyl glycol modification is a further compositional step that the marine and immersion trade specifies for its most demanding work, and nothing in the documentation we hold says this grade carries it. Second, we do not yet hold the supplier Technical Data Sheet or Safety Data Sheet for this grade, so no figures for it appear here and none should be read off product artwork. Where continuous-immersion performance has to be evidenced, ask for the document rather than relying on the family name.',
    requiredCharacteristics: [
      'A backbone chosen for water and hydrolysis resistance, since the face is wet continuously rather than occasionally',
      'Gloss retention under direct sun, because pool products are outdoors for their whole service life',
      'A thixotropic body that holds on the steep curves of a flume or a shell without sagging',
      'Even film thickness across a large mould, since thickness variation is behind most gelcoat defects',
      'Colour consistency across a run, because a shell and its steps are seen together',
    ],
    manufacturingProcess:
      'The sequence is conventional open-mould work and the detail belongs to each shop. The mould is prepared and released, the gelcoat is applied into it by brush or spray and allowed to reach the right state of cure, and the glass-reinforced laminate is then built up behind it before the part is released and trimmed. Two things matter more here than on a smaller part. Large curved moulds make even film thickness harder, and thickness variation is what the troubleshooting literature attributes cracking, sagging and pre-release to. And the timing between gelcoat and lamination has to be right: laminating too early over an under-cured film is the accepted cause of the wrinkled pattern the trade calls alligatoring. Film thickness, catalyst quantity and the interval before lamination are grade-specific and belong to the manufacturer’s documentation, not to this page.',
    advantages: [
      'Isophthalic is the chemistry the industry specifies for surfaces that stay wet and sunlit; this grade sits in that family',
      'Applied by brush or spray with the same equipment a shop already runs',
      'A general-purpose gelcoat remains the documented alternative for sheltered indoor mouldings',
      'The gelcoat and the laminate behind it are specified separately, so the surface decision does not constrain the structural one',
    ],
    commonProducts: [
      'One-piece and sectional FRP pool shells',
      'Water slide flumes and curved sections',
      'Pool steps, ledges and surrounds',
      'Splash pads, play features and moulded fittings',
    ],
    faqs: [
      {
        q: 'Is an isophthalic gelcoat the same as ISO/NPG?',
        a: 'No, and the difference matters on this particular job. NPG refers to neopentyl glycol, a further modification the marine and immersion trade specifies for its most demanding work. Isophthalic describes the acid in the backbone. Nothing in the documentation we hold says this grade is NPG-modified, so if your specification names ISO/NPG, treat that as a distinct requirement and ask.',
      },
      {
        q: 'Will this gelcoat survive continuous immersion in treated pool water?',
        a: 'We cannot evidence that, and we will not claim it. The isophthalic route is the one the industry specifies for wet service, which is why the grade is positioned here, but continuous immersion in chemically treated water is a performance question that belongs to the manufacturer’s documentation for the specific grade. We do not hold that document yet. Ask us before committing a pool run and we will put the question to Samrat Poly Resins, India.',
      },
      {
        q: 'Does the gelcoat make the shell strong enough?',
        a: 'No. A gelcoat carries no reinforcement and no load. The strength of a pool shell comes from the glass-reinforced laminate behind it, and that laminate is specified on its own terms. Applying a thicker gelcoat does not add strength and is a documented cause of cracking.',
      },
      {
        q: 'Why does my pool surface look dull after a few years?',
        a: 'Prolonged sunlight breaks down the resin at the surface, which the industry calls chalking, and a roughened surface then holds dirt. That is weathering rather than a manufacturing fault. It is also the reason the gelcoat specified for an outdoor pool is not the same decision as the one for a sheltered indoor moulding.',
      },
      {
        q: 'What else goes into the job?',
        a: 'A laminating resin and reinforcement behind the gelcoat, a catalyst system, and pigment where colour is not supplied ready-mixed. Which laminating resin suits a pool shell depends on the design; a general-purpose grade is the common structural choice and an isophthalic grade is specified where the laminate itself has to resist the water.',
      },
    ],
    relatedProductSlugs: ['gp-gelcoat-resin', 'glass-fiber-mat', 'mekp-hardener', 'frp-polyester-pigment', 'iso-polyester-resin'],
    ctaHeading: 'Moulding pool shells or slide sections?',
    ctaText:
      'Tell us the product, the mould size, how the surface is applied and what evidence your client asks for on immersion performance. We will review the grade and put any document question to the supplier.',
  },

  {
    slug: 'coloured-frp-sheet-and-cladding-manufacturing',
    primaryProductSlugs: ['uv-stabilized-sheet-grade-yellow-resin'],
    title: 'Coloured FRP Sheet and Cladding Manufacturing',
    cardDescription:
      'Opaque coloured sheet for outdoor use, made on an ordinary catalysed line. What UV stabilised actually buys, and why it has nothing to do with curing under a lamp.',
    cardBenefit: 'Stabilised against sunlight, cured by catalyst like any other sheet grade.',
    seo: {
      title: 'Resin for Coloured FRP Sheet and Cladding Manufacturing',
      description:
        'Making opaque coloured FRP sheet and cladding for outdoor use: what a UV-stabilised pre-pigmented sheet grade contributes, and why it is not a UV-curing resin.',
      keywords: [
        'coloured FRP sheet manufacturing',
        'FRP cladding resin Nepal',
        'UV stabilized sheet grade resin',
        'pre-pigmented sheet resin',
        'outdoor FRP sheet',
      ],
    },
    intro:
      'Two different products get called FRP sheet. One is translucent and sold on the light it lets through. The other is opaque and coloured, sold on cover, appearance and how long it holds that appearance outdoors. This page is about the second. It is a production job rather than a fabrication job: a line runs the same sheet repeatedly, and the commercial question is whether run forty looks like run one, and whether either of them still looks right in five years on a roof.',
    whatTheyManufacture:
      'Producers in this category make coloured roofing and cladding sheet, wall and partition panels, coloured sheet for industrial and agricultural buildings, boundary and screening panels, and moulded or laminated parts cut from the same stock. The product is usually corrugated or profiled, produced continuously or in press runs, and installed where it is seen.',
    whySuitable:
      '<a href="/products/uv-stabilized-sheet-grade-yellow-resin/">UV Stabilized Sheet Grade Yellow Resin</a> is a pre-pigmented unsaturated polyester sheet grade that supplier literature describes as carrying a UV-stabilised formulation for outdoor sheet, cladding and panel work. Two things follow. The colour arrives mixed at the manufacturer rather than dosed on the line, which is what removes batch-to-batch colour drift from a production operation. And the stabiliser package addresses weathering in service, not curing: this resin is catalysed with a peroxide hardener at workshop temperature like any other sheet grade. We do not yet hold the supplier Technical Data Sheet or Safety Data Sheet for it, so no figures for this grade appear on this page, and the figures printed on product artwork are not republished here as specifications.',
    requiredCharacteristics: [
      'Pigment supplied already dispersed, so shade does not depend on dosing accuracy on the line',
      'A stabiliser package aimed at sunlight exposure over the sheet’s service life',
      'Wet-out behaviour suited to continuous or press sheet production rather than hand lay-up of a one-off part',
      'Batch-to-batch consistency, because sheet installed together must match',
      'A conventional peroxide cure, so an existing line needs no new equipment',
    ],
    manufacturingProcess:
      'In general industry practice the catalysed resin and reinforcement are brought together against a film or mould surface, consolidated to remove air, profiled if the sheet is corrugated, and cured before trimming to length. Weathering protection in composite sheet is described in the literature as coming from stabilisers compounded into the resin, from a surfacing veil that keeps a resin-rich layer at the face and delays fibre bloom, from a surface film, or from a combination. A stabilised resin is one input to that, not the whole answer, so the surface construction is worth settling with the manufacturer alongside the resin. Catalyst quantities, line speeds, cure conditions and veil selection belong to your own approved procedure and to the current supplier documentation.',
    advantages: [
      'Colour mixed at the manufacturer removes hand-dosing as a source of variation between runs',
      'A stabiliser package aimed at the one thing that ages an outdoor sheet',
      'Conventional peroxide cure on existing equipment, with no light-curing plant involved',
      'A standard pre-pigmented sheet grade remains available where sheet is sheltered or indoors',
    ],
    commonProducts: [
      'Coloured FRP roofing and cladding sheet',
      'Wall, partition and screening panels',
      'Sheet for industrial and agricultural buildings',
      'Moulded and laminated parts cut from sheet stock',
    ],
    faqs: [
      {
        q: 'Does this resin cure under a UV lamp?',
        a: 'No, and this is the confusion worth settling before anything else. UV stabilised describes additives that resist sunlight during the sheet’s service life. UV curable describes a resin that hardens when light reaches a photoinitiator, which is a different product class sold for repair and patching work. This grade cures with a peroxide catalyst at workshop temperature, as sheet grades do.',
      },
      {
        q: 'How is this different from the standard Sheet Grade Yellow Resin?',
        a: 'Both are pre-pigmented yellow sheet grades. Supplier literature describes this one as carrying a UV-stabilised formulation intended for outdoor exposure. Where sheet sits in direct sun for years that is the distinction to ask about; for sheltered or indoor panels the <a href="/products/sheet-grade-yellow-resin/">standard sheet grade</a> may be the sensible specification.',
      },
      {
        q: 'How many years will the sheet last?',
        a: 'We do not publish a figure and a figure offered without context is worth little. Service life depends on the resin formulation, the stabiliser and surfacing system, the sheet construction, how severe the climate is and how the roof is maintained. What can be said is what degrades: sunlight breaks down resin at the surface, which shows as discoloration, chalking and eventually fibres standing proud.',
      },
      {
        q: 'Do I still add pigment on the line?',
        a: 'No. The colour is part of the supplied resin. Avoiding hand-dosed colour variation between batches is the main reason a sheet line chooses a factory-pigmented grade in the first place.',
      },
      {
        q: 'Should I be asking about veils as well as resin?',
        a: 'For outdoor sheet, yes. A surfacing veil keeps a resin-rich layer at the exposed face and delays reinforcement fibres from showing through as the surface erodes. Choosing a stabilised resin and ignoring the surface construction only addresses part of the problem.',
      },
    ],
    relatedProductSlugs: ['sheet-grade-yellow-resin', 'glass-fiber-mat', 'mekp-hardener', 'frp-polyester-pigment', 'roof-light-resin'],
    ctaHeading: 'Running a coloured sheet or cladding line?',
    ctaText:
      'Tell us the sheet you produce, the profile, the exposure it is installed into and the surface construction you use. We will review the grade and put any document question to the supplier.',
  },

  {
    slug: 'polyester-putty-and-filler-manufacturing',
    primaryProductSlugs: ['polyester-putty-resin'],
    title: 'Manufacturing Polyester Putty and Filler Products',
    cardDescription:
      'Making the filler, not using it. What a putty base resin contributes to a formulated two-part product, and what the buyer of the resin is actually deciding.',
    cardBenefit: 'This is the ingredient, several steps before the tin.',
    seo: {
      title: 'Polyester Putty Resin for Filler and Putty Manufacturing',
      description:
        'Using a liquid unsaturated polyester as the base resin for formulated putty and filler products: what the resin contributes, what the filler does, and what to confirm before ordering.',
      keywords: [
        'polyester putty manufacturing',
        'body filler base resin',
        'polyester putty resin Nepal',
        'filler formulation resin',
        'two part filler production',
      ],
    },
    intro:
      'There are two completely different conversations about polyester putty, and they rarely happen in the same room. One is a body shop deciding which tin of filler to buy. The other is a manufacturer deciding which liquid resin to formulate that tin from. This page is the second conversation. It matters because the product name invites the first: people order a resin expecting a tub of ready-mixed filler and receive a drum of liquid, which is exactly what the supplier documentation says it is.',
    whatTheyManufacture:
      'Producers in this category formulate and pack two-part polyester putties and fillers: general body filler, fine finishing and glazing putty, fibre-reinforced heavy fillers, and industrial and marine fairing compounds. The finished product is a filled paste supplied with its own hardener. <a href="/products/polyester-putty-resin/">Polyester Putty Resin</a> is one input to that formulation rather than the product itself.',
    whySuitable:
      'Samrat Poly Resins, India documents Polyester Putty Resin as a liquid unsaturated polyester resin, and the Technical Data Sheet on file publishes a viscosity of 450 to 650 cPs at 25°C, a solid content of 60 to 64 per cent, a specific gravity of 1.05 to 1.12 g/cm³ at 25°C, and a heat deflection temperature of 70 to 85°C once cured. Those are properties of the supplied liquid, published by the manufacturer. They are not a specification for any putty somebody formulates from it: what a finished filler does on a panel depends on the filler system, the loading, the additives and the hardener as much as on the resin. A Safety Data Sheet is on file as well, and both are linked from the product page.',
    requiredCharacteristics: [
      'A liquid body that will carry a heavy mineral filler load without the filler settling out',
      'Consistency between batches, because a formulated product has to behave the same tin after tin',
      'A cured hardness and heat resistance appropriate to a product that will be sanded and then painted over',
      'Compatibility with the filler, additive and hardener system the formulation actually uses, confirmed against the supplier document',
      'Documentation a downstream customer can be shown, since the buyer of the tin is rarely the buyer of the resin',
    ],
    manufacturingProcess:
      'In general industry practice the base resin is compounded with mineral filler, thixotropes, pigment and the additive package the formulation calls for, mixed under conditions that disperse the filler fully rather than leaving it to settle, then packed with a separate hardener paste. The finished product is used by catalysing on a clean board, spreading in thin to moderate layers over a prepared surface, building deep repairs in several passes rather than one thick mass, tapering the edges into the surrounding surface, then sanding once fully hard and priming before paint. That end-use sequence is included here for context only. Filler loading, additive selection, mixing conditions, hardener type and pack ratio are formulation decisions that belong to the manufacturer of the finished putty and to their own approved procedure, and none of them is published on this page.',
    advantages: [
      'The supplier Technical Data Sheet and Safety Data Sheet for this grade are both on file and linked from the product page',
      'Published liquid properties give a formulator a documented starting point for trials',
      'A liquid resin leaves the filler, additive and hardener choices with the formulator rather than fixing them at supply',
      'One documented grade across a production campaign keeps the formulated product behaving consistently',
    ],
    commonProducts: [
      'Two-part body filler for vehicle repair',
      'Fine finishing and glazing putty',
      'Fibre-reinforced heavy filler',
      'Industrial and marine fairing compounds',
    ],
    faqs: [
      {
        q: 'If I order this, do I get a tin of filler I can use straight away?',
        a: 'No. What is supplied is a liquid unsaturated polyester resin, and the supplier documentation identifies it that way. A ready-mixed body filler is a formulated end product sold with its own hardener. If that is what you need, say so at the enquiry stage, because it is a different purchase.',
      },
      {
        q: 'Is this the same as PET, the bottle plastic?',
        a: 'No. Some trade listings for materials of this kind use a PET label, which invites that reading, but thermoplastic PET and a thermosetting unsaturated polyester are different polymer classes. There is a separate guide covering that naming problem in detail.',
      },
      {
        q: 'Can I use the published resin figures as my product specification?',
        a: 'No, and this is the most common misreading of a resin data sheet in this trade. Those figures describe the liquid in the drum. A finished filler is the resin plus the filler system, the loading, the additives and the hardener, and its behaviour on a panel is a property of the whole formulation. Your own product needs its own testing and its own documentation.',
      },
      {
        q: 'What filler and what loading should I use?',
        a: 'That is a formulation decision and it belongs to your approved procedure, not to a supplier’s general guide. We supply the resin and the documentation the manufacturer publishes for it. We do not issue filler ratios, additive packages or hardener pairings.',
      },
      {
        q: 'Can it be used as a laminating resin instead?',
        a: 'That is a question for the supplier documentation and your own process rather than something a general page should extend. The grade is documented as a liquid unsaturated polyester; if the job is fibre lamination, the general-purpose and isophthalic grades are the documented routes and there are selection guides covering that choice.',
      },
    ],
    relatedProductSlugs: ['soap-stone-powder', 'frp-polyester-pigment', 'mekp-hardener', 'styrene-monomer'],
    ctaHeading: 'Formulating a putty or filler product?',
    ctaText:
      'Tell us the finished product you make, the filler system you work with, the quantity you expect to take and the documentation your customers ask for. We will review the grade and the current supplier documentation with you.',
  },

  {
    slug: 'frp-repair-and-reinforcement-with-epoxy',
    primaryProductSlugs: ['fiberglass-epoxy-resin'],
    title: 'FRP Repair and Reinforcement with Epoxy',
    cardDescription:
      'Bonding new laminate to something already cured is the job polyester is worst at. Why epoxy is reached for, and the one pairing question that has to be settled first.',
    cardBenefit: 'Chosen for adhesion to cured work, not for being stronger.',
    seo: {
      title: 'Epoxy Resin for FRP Repair and Reinforcement in Nepal',
      description:
        'Why epoxy is specified for repairing and reinforcing cured FRP, what a fabricator should confirm about the hardener pairing first, and where polyester remains the right answer.',
      keywords: [
        'FRP repair epoxy',
        'fibreglass repair resin Nepal',
        'epoxy reinforcement laminate',
        'fiberglass epoxy resin',
        'bonding to cured FRP',
      ],
    },
    intro:
      'Repair is a different job from manufacture, and the difference is what the new material has to stick to. Building a part means wetting out fibre against a mould. Repairing or strengthening one means bonding fresh laminate onto something that cured months or years ago, often contaminated, often load-bearing. Adhesion to cured substrate is the property that decides the outcome, and it is the property that most often sends a fabricator from polyester to epoxy.',
    whatTheyManufacture:
      'Work in this category includes repairing cracked or holed FRP tanks, panels and mouldings, strengthening or stiffening existing laminates, bonding FRP to itself and to other substrates, patching boats and industrial equipment, and building up localised reinforcement where a part has failed in service. It is usually site or workshop work on an existing asset rather than production.',
    whySuitable:
      'Samrat Poly Resins, India documents <a href="/products/fiberglass-epoxy-resin/">Fiberglass Epoxy Resin</a> as an epoxy resin, listing hand lay-up and lamination processing, with a viscosity of 700 cPs at 25°C, a gel time of 35 to 45 minutes at 25°C, a specific gravity of 1.15 g/cm³ and a heat deflection temperature of 75°C. The long published gel time is the property that suits repair work: a repair is fitted, positioned and consolidated by hand, often in an awkward position, and a resin that starts setting while that is happening produces exactly the dry, poorly bonded patch the job exists to avoid. One boundary must be stated plainly. The supplier documentation identifies an amine hardener but does not name a confirmed product pairing, and the pairing has to be confirmed before ordering rather than assumed. We do not publish a pairing, a mix ratio or a cure schedule.',
    requiredCharacteristics: [
      'Adhesion to an already cured and prepared substrate, which is the whole reason for the choice',
      'A working window long enough to fit, position and consolidate a patch by hand',
      'A confirmed resin and hardener pairing, established with the supplier before the material is ordered',
      'Documentation the asset owner can be shown, since repairs on equipment usually have to be recorded',
      'Realistic expectations of service temperature, read from the published data rather than assumed',
    ],
    manufacturingProcess:
      'General industry practice for a bonded repair starts with the substrate rather than the resin. The damaged area is cut back to sound material, the surrounding surface is abraded and cleaned to give the new laminate something to key into, and any contamination is removed. Reinforcement is then cut, wetted out with the mixed system and laid into the prepared area, usually in staggered layers so the repair tapers into the parent laminate rather than ending abruptly. The repair is consolidated to remove air, cured, then trimmed and finished. Mix ratios, cure schedules, surface preparation standards and the hardener to pair with the resin are governed by the supplier documentation for the system you actually receive and by your own approved procedure. None of them is published here.',
    advantages: [
      'A published gel time of 35 to 45 minutes at 25°C gives room to fit and consolidate a patch by hand',
      'The supplier Technical Data Sheet and Safety Data Sheet are both on file and linked from the product page',
      'Documented for hand lay-up and lamination, which is how repair work is actually done',
      'Polyester grades remain the documented route for production lamination, so the choice stays deliberate',
    ],
    commonProducts: [
      'Repairs to cracked or holed FRP tanks, panels and mouldings',
      'Localised strengthening and stiffening of existing laminates',
      'Bonded joints between FRP and other substrates',
      'Boat and industrial equipment patching',
    ],
    faqs: [
      {
        q: 'Why epoxy rather than the polyester I build with?',
        a: 'Because the job is adhesion to cured material rather than wetting out fibre in a mould. Polyester laminating resins are formulated for the second, and bonding fresh polyester onto old cured laminate is the case where they are weakest. That is the reason a shop keeps an epoxy on the shelf even when everything it manufactures is polyester.',
      },
      {
        q: 'Which hardener do I use with it?',
        a: 'We will not name one, and you should be wary of anyone who does without checking. The supplier documentation identifies an amine hardener but does not name a confirmed product pairing, and it asks that the pairing be confirmed before ordering. Tell us the system you intend to run and we will put that question to Samrat Poly Resins, India rather than answer it ourselves.',
      },
      {
        q: 'Is epoxy always stronger than polyester?',
        a: 'That framing causes more bad specifications than it prevents. The families differ in adhesion, shrinkage, cost and processing, and which matters depends on the job. For production lamination against a mould, a polyester grade is usually the documented and economical route. For bonding to cured work, epoxy is normally the answer.',
      },
      {
        q: 'How hot can the repair get in service?',
        a: 'The Technical Data Sheet publishes a 75°C heat deflection temperature. Note what that is and is not: it is a published property of the resin, and the supplier documentation does not publish a continuous-service temperature limit. If your equipment runs hot, raise that specifically at the enquiry stage.',
      },
      {
        q: 'Do I need to prepare the surface, or can I laminate straight over the damage?',
        a: 'Surface preparation is the part of a bonded repair that decides whether it holds. Cutting back to sound material, abrading and cleaning are standard practice across the trade. A repair laid over contamination or a glossy surface fails at the bond line regardless of which resin was used.',
      },
    ],
    relatedProductSlugs: ['epoxy-hardener', 'glass-fiber-mat', 'nc-thinner', 'paint-brushes'],
    ctaHeading: 'Repairing or strengthening an FRP asset?',
    ctaText:
      'Tell us what is being repaired, the substrate and its condition, the service the part sees and the hardener system you intend to pair. We will review the grade and put the pairing question to the supplier.',
  },

  {
    slug: 'engineered-quartz-surface-manufacturing',
    primaryProductSlugs: ['gp-quartz-resin'],
    title: 'Engineered Quartz and Cast Stone Surface Manufacturing',
    cardDescription:
      'A quartz surface is mostly mineral held together by a small fraction of resin. What the binder has to do at that loading, and why it is a different job from cultured marble.',
    cardBenefit: 'A binder at low loading, in a product that is mostly stone.',
    seo: {
      title: 'Resin for Engineered Quartz and Cast Stone Manufacturing',
      description:
        'How an unsaturated polyester binder is used in engineered quartz and cast stone surfaces, how the job differs from cultured marble, and what to settle before a production run.',
      keywords: [
        'engineered quartz resin',
        'quartz surface manufacturing',
        'GP quartz resin Nepal',
        'cast stone resin',
        'artificial stone binder',
      ],
    },
    intro:
      'Engineered quartz and cultured marble get grouped together because both are minerals bound by a resin and cast into a shape. On a shop floor they are different jobs. Cultured marble is a poured, gelcoated casting made largely of carbonate filler. An engineered quartz surface is a much harder, quartz-based product in which the resin is a comparatively small fraction of the mass and is doing one job: holding a great deal of mineral together with no voids. That difference changes what the buyer is choosing.',
    whatTheyManufacture:
      'Producers in this category make engineered quartz slabs and worktops, kitchen and vanity surfaces, cast and artificial stone components, window sills, thresholds and cladding elements, and decorative architectural pieces. Supplier literature for <a href="/products/gp-quartz-resin/">GP Quartz Resin</a> lists artificial quartz stone, engineered stone and cast stone work.',
    whySuitable:
      'Samrat Poly Resins, India documents GP Quartz Resin as an orthophthalic unsaturated polyester resin with a non-accelerated cure system, publishing a viscosity of 400 to 800 cPs, a gel time of 7 to 10 minutes, a styrene content of 35 to 40 per cent and a cure time of two hours. Two of those matter most at high mineral loading. Viscosity governs whether the binder can coat a large surface area of mineral and still fill between the particles rather than leaving voids, and gel time governs whether the mix can be placed and consolidated before it starts to set. The non-accelerated system leaves that timing with the producer rather than fixing it at supply. These are the manufacturer’s published figures for the supplied resin, not a specification for a finished slab.',
    requiredCharacteristics: [
      'A viscosity that wets a very large mineral surface area and still fills between particles',
      'A working window long enough to place and consolidate a heavily loaded mix before it gels',
      'Consistency between batches, since slabs made on different days are installed side by side',
      'A cure the producer controls, so timing can be matched to slab size and workshop temperature',
      'Compatibility with the specific quartz grading and pigment system in use, confirmed against the supplier document',
    ],
    manufacturingProcess:
      'General industry practice is to blend graded quartz with the catalysed binder and pigment until every particle is coated, distribute the mix into a mould or onto a forming surface, and consolidate it, with vibration and compaction used to eliminate voids because trapped air in a stone-like product shows as a visible flaw and a weak point. The slab is cured, then released and taken through calibration, grinding and polishing to its finished surface. Mineral grading, binder fraction, pigment quantity, catalyst dosage, compaction method and cure schedule are formulation and plant decisions governed by the current supplier documentation and your own approved procedure. None is published here, and the resin data sheet describes the liquid rather than the finished surface.',
    advantages: [
      'Published viscosity and gel-time figures give a producer a documented starting point for trials',
      'A non-accelerated system leaves cure timing with the producer rather than fixing it at supply',
      'The supplier Technical Data Sheet and Safety Data Sheet are both on file and linked from the product page',
      'A separate grade is documented for cultured marble and artificial stone, so the two jobs stay distinct',
    ],
    commonProducts: [
      'Engineered quartz slabs and worktops',
      'Kitchen and vanity surfaces',
      'Cast and artificial stone components',
      'Window sills, thresholds and decorative architectural elements',
    ],
    faqs: [
      {
        q: 'How is this different from the cultured marble job?',
        a: 'Mineral, loading and finishing. Cultured marble is typically a carbonate-filled casting finished with a gelcoated face straight out of the mould. An engineered quartz surface is quartz-based, harder, usually consolidated rather than simply poured, and finished by grinding and polishing. There is a separate page for <a href="/applications/cultured-marble-manufacturing/">cultured marble manufacturing</a> and a separate grade documented for it.',
      },
      {
        q: 'Does the resin determine how the slab performs?',
        a: 'Not on its own. At the loadings used in this product the mineral dominates the finished properties, and the binder’s job is to hold it together without voids. A resin data sheet describes the supplied liquid. It is not a performance certificate for a slab.',
      },
      {
        q: 'What quartz grading and what binder fraction should I use?',
        a: 'Those are formulation decisions and they belong to your own approved procedure and to the supplier documentation. We supply the resin and the manufacturer’s documentation for it; we do not issue mineral gradings or binder ratios.',
      },
      {
        q: 'Why do my slabs show pinholes or weak spots?',
        a: 'Trapped air is the usual explanation at high mineral loading, which is why consolidation is central to the process rather than optional. Mixing practice, how well the mineral is coated, and how the mix is placed all contribute. A batch behaving differently from the previous one is worth raising with us.',
      },
      {
        q: 'Do you supply the pigment as well?',
        a: 'Yes, <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> sits in the range. Whether a particular pigment suits a ground and polished stone surface is a question for the supplier documentation, since colour that reads well in a moulded face does not necessarily behave the same way once a surface is cut back and polished.',
      },
    ],
    relatedProductSlugs: ['marble-resin', 'mekp-hardener', 'frp-polyester-pigment', 'soap-stone-powder'],
    ctaHeading: 'Producing engineered quartz or cast stone?',
    ctaText:
      'Tell us the finished surface, the mineral system and grading you work with, the slab format and the quantity you expect to take. We will review the grade and the current supplier documentation with you.',
  },
];
