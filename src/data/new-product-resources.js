// Consolidated product guides for the FRP allied-products range.
//
// These six guides replace an earlier set of 48 template-generated articles
// (6 products x 8 topics). That set was measured at 58-60% five-gram overlap
// between pages about chemically unrelated products, because every article was
// produced from one shared body template with the product name substituted in.
// Each guide below is written from its own subject matter instead.
//
// Scope rules that apply to every guide here:
//   - Samrat FRP Traders is a trader/supplier/importer/reseller, never a
//     manufacturer, and asserts no formulation, approval or performance claim.
//   - None of these six products currently has a supplier TDS/SDS on file, so
//     no grade values, dosages, mixing ratios or safety procedures are stated.
//     General industry context only; the current supplier document governs.
//   - Retired slugs are 301-redirected per product in vercel.json.

const commercialPosition = 'Supplied by Samrat FRP Traders as a trader, supplier, importer and reseller';
const neCommercialPosition = 'Samrat FRP Traders द्वारा व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेताको रूपमा आपूर्ति';

const enquiryLink = {
  href: '/contact/',
  label: 'Discuss your requirement',
  description: 'Tell us the process, the resin or coating system involved, and any document you need.',
};
const neEnquiryLink = {
  href: '/contact/',
  label: 'आफ्नो आवश्यकता छलफल गर्नुहोस्',
  description: 'प्रक्रिया, सम्बन्धित resin वा coating system र आवश्यक कागजात उल्लेख गर्नुहोस्।',
};

export const newProductResources = Object.freeze([
  // ---------------------------------------------------------------- cobalt
  {
    slug: 'cobalt-octoate-guide',
    title: 'Cobalt Octoate in Polyester Cure Systems: A Buyer’s Guide',
    description:
      'How a cobalt accelerator functions alongside a catalyst in unsaturated polyester systems, what changes gel time in practice, the handling separation the industry treats as non-negotiable, and what to confirm before ordering.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '5 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'Cobalt Octoate in Polyester Cure Systems: A Buyer’s Guide',
      ogTitle: 'Cobalt Octoate: Accelerator Guide for FRP Buyers',
      ogDescription:
        'What a cobalt accelerator does in a polyester cure, what affects gel time, and what to confirm before ordering. Supplied in Nepal by Samrat FRP Traders.',
    },
    quickFacts: {
      'Material class': 'Cobalt accelerator / promoter for polyester cure systems',
      'Works alongside': 'A separate catalyst (commonly MEKP) — never premixed with it',
      'Commercial position': commercialPosition,
      'Before ordering': 'Confirm cobalt content, carrier and form against the current supplier document',
    },
    relatedSlugs: ['styrene-monomer-guide', 'wax-polish-guide'],
    recommendedLinks: [
      { href: '/products/cobalt-octoate/', label: 'View Cobalt Octoate', description: 'Commercial product page and enquiry route.' },
      { href: '/products/hardeners-catalysts/', label: 'Hardeners & catalysts', description: 'The wider catalyst and accelerator range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is cobalt octoate the same as a catalyst or hardener?',
        a: 'No. In a polyester system the catalyst (commonly MEKP) starts the reaction and the cobalt accelerator determines how readily it proceeds at working temperature. They perform different jobs and are supplied as separate products.',
      },
      {
        q: 'Can cobalt and catalyst be mixed together before adding to resin?',
        a: 'No. Combining an accelerator and a peroxide catalyst directly is treated across the composites industry as a hazardous practice. Each is dispersed into the resin separately, with thorough mixing in between. Follow the current supplier safety documentation.',
      },
      {
        q: 'Why does gel time change between batches on site?',
        a: 'Ambient temperature is usually the largest factor, followed by resin temperature, mass of the mix and workshop humidity. A change in gel time is more often a condition change than a material fault.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture cobalt octoate?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing or certification claim.',
      },
    ],
    sections: [
      {
        heading: 'What the accelerator actually does',
        body: [
          'An unsaturated polyester resin will not cure usefully at workshop temperature on catalyst alone. The accelerator — here a cobalt soap dissolved in a carrier — allows the catalyst to break down and begin crosslinking at ambient conditions rather than requiring heat. In practice the fabricator is buying room-temperature workability.',
          'This is why a cobalt accelerator is only ever half of a pair. It has no useful hardening effect by itself, and adding more of it does not substitute for the catalyst. Some resins arrive pre-accelerated by the manufacturer, in which case additional cobalt may be unnecessary or actively unhelpful. Confirming whether the resin in use is pre-accelerated is the first question, not an afterthought.',
        ],
      },
      {
        heading: 'The separation rule',
        body: [
          'Accelerator and peroxide catalyst are added to the resin separately, never combined with each other first. Bringing the two into direct contact in concentrated form is a recognised hazard, and the practice is avoided as a matter of routine across the industry regardless of brand or grade.',
          'The working sequence is straightforward: disperse the accelerator into the resin and mix thoroughly, then add the catalyst and mix again. This is general good practice, not a dosage instruction — quantities, sequence and any exception belong to the current supplier documentation and to your own approved workshop procedure.',
        ],
      },
      {
        heading: 'What moves gel time in real workshops',
        body: [
          'Gel time is rarely stable across a working year. Ambient temperature dominates: the same mix that behaves predictably in warm conditions will slow noticeably on a cold morning. Resin that has been stored somewhere cold behaves as cold resin even in a warm room, so material temperature and air temperature are separate variables.',
          'Mix mass matters too. A larger volume retains its own reaction heat and accelerates itself, which is why a bucket can behave very differently from a small test cup of the identical mix. Humidity, substrate temperature and mould temperature all contribute at the margins.',
          'The practical consequence for buyers: test on the actual job conditions rather than assuming a figure from another site or season carries across.',
        ],
      },
      {
        heading: 'What to confirm before ordering',
        body: [
          'Useful enquiries state the resin system in use and whether it is already accelerated, the process (hand lay-up, spray-up, casting, moulding), the working conditions, and any documentation your own quality process requires.',
          'On the product itself, the points worth pinning down are cobalt content, the carrier it is supplied in, pack format and the form you will actually handle. These are grade-specific and must come from the current supplier document rather than from a general guide such as this one.',
        ],
      },
      {
        heading: 'Boundaries of this guide',
        body: [
          'This page explains a material class and its role in a workflow. It is not a formulation, a dosage table, a safety procedure or an approval for any specific system. Storage, personal protective equipment, incompatibilities, spill response and disposal are governed by the current supplier safety data sheet and by the controls in place at your own site.',
        ],
      },
    ],
    ne: {
      title: 'Cobalt Octoate र Polyester Cure प्रणाली: खरिदकर्ता गाइड',
      description:
        'Polyester प्रणालीमा cobalt accelerator ले कसरी काम गर्छ, gel time मा के-कस्ता कुराले असर गर्छ, र अर्डर गर्नुअघि के पुष्टि गर्ने — सामान्य उद्योग सन्दर्भ।',
      seo: {
        title: 'Cobalt Octoate र Polyester Cure प्रणाली: खरिदकर्ता गाइड',
        ogTitle: 'Cobalt Octoate: FRP खरिदकर्ताका लागि गाइड',
        ogDescription: 'Cobalt accelerator को भूमिका, gel time मा असर गर्ने कुरा र अर्डरअघि पुष्टि गर्नुपर्ने विषयहरू।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'Polyester cure प्रणालीका लागि cobalt accelerator / promoter',
        'सँगै प्रयोग हुने': 'छुट्टै catalyst (सामान्यतया MEKP) — कहिल्यै आपसमा पूर्व-मिश्रण नगर्ने',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'Cobalt content, carrier र form हालको supplier कागजातबाट पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/cobalt-octoate/', label: 'Cobalt Octoate हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/hardeners-catalysts/', label: 'Hardeners र Catalysts', description: 'सम्बन्धित catalyst तथा accelerator श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के cobalt octoate नै catalyst वा hardener हो?',
          a: 'होइन। Catalyst ले प्रतिक्रिया सुरु गर्छ भने cobalt accelerator ले कार्यरत तापक्रममा त्यो प्रतिक्रिया सहज बनाउँछ। दुवैको काम फरक हो र छुट्टाछुट्टै आपूर्ति हुन्छन्।',
        },
        {
          q: 'के cobalt र catalyst लाई पहिले आपसमा मिसाउन मिल्छ?',
          a: 'मिल्दैन। Accelerator र peroxide catalyst लाई सीधै मिसाउनु उद्योगभर जोखिमपूर्ण मानिन्छ। दुवैलाई resin मा छुट्टाछुट्टै, बीचमा राम्ररी मिसाउँदै हाल्नुपर्छ। हालको supplier safety कागजात पालना गर्नुहोस्।',
        },
        {
          q: 'साइटमा gel time किन फरक पर्छ?',
          a: 'प्रायः ambient तापक्रम मुख्य कारण हुन्छ; त्यसपछि resin को तापक्रम, मिश्रणको मात्रा र आर्द्रता। Gel time फेरिनु प्रायः अवस्था फेरिएको संकेत हो, सामग्री बिग्रेको होइन।',
        },
        {
          q: 'के Samrat FRP Traders ले cobalt octoate उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो; कुनै उत्पादन वा प्रमाणीकरण दाबी गरिँदैन।',
        },
      ],
      sections: [
        {
          heading: 'Accelerator ले वास्तवमा के गर्छ',
          body: [
            'Catalyst मात्रले unsaturated polyester resin लाई कार्यशालाको सामान्य तापक्रममा राम्रोसँग cure गराउँदैन। Accelerator ले catalyst लाई ambient अवस्थामै सक्रिय बनाउन सघाउँछ, जसले तातो नदिईकन काम गर्न मिल्ने बनाउँछ।',
            'त्यसैले cobalt accelerator सधैँ जोडीको एक भाग हो। एक्लै यसले उपयोगी hardening दिँदैन, र यसको मात्रा बढाउँदैमा catalyst को काम पूरा हुँदैन। कुनै resin पहिल्यै pre-accelerated हुन सक्छ — त्यस अवस्थामा थप cobalt आवश्यक नहुन सक्छ। प्रयोग हुने resin pre-accelerated हो कि होइन भन्ने पहिले नै पुष्टि गर्नुपर्छ।',
          ],
        },
        {
          heading: 'छुट्याएर हाल्ने नियम',
          body: [
            'Accelerator र peroxide catalyst लाई resin मा छुट्टाछुट्टै हालिन्छ, कहिल्यै पहिले आपसमा मिसाइँदैन। दुवैलाई सघन रूपमा सीधै सम्पर्कमा ल्याउनु मान्यता प्राप्त जोखिम हो र brand वा grade जेसुकै भए पनि यो अभ्यास टारिन्छ।',
            'सामान्य क्रम यस्तो हुन्छ: पहिले accelerator लाई resin मा राम्ररी मिसाउने, त्यसपछि catalyst हालेर फेरि मिसाउने। यो सामान्य असल अभ्यास हो — मात्रा र अपवाद हालको supplier कागजात र आफ्नो स्वीकृत कार्यविधिले निर्धारण गर्छ।',
          ],
        },
        {
          heading: 'Gel time मा असर गर्ने व्यावहारिक कुरा',
          body: [
            'Gel time वर्षभरि उस्तै रहँदैन। Ambient तापक्रमको प्रभाव सबैभन्दा बढी हुन्छ; जाडो बिहानमा उही मिश्रण ढिलो हुन्छ। चिसो ठाउँमा राखिएको resin न्यानो कोठामा पनि चिसै व्यवहार गर्छ, त्यसैले सामग्रीको तापक्रम र हावाको तापक्रम फरक कुरा हुन्।',
            'मिश्रणको मात्रा पनि महत्त्वपूर्ण छ। ठूलो मात्राले आफ्नै प्रतिक्रिया-ताप जोगाउँछ र आफैँलाई छिटो बनाउँछ; त्यसैले बाल्टिनको व्यवहार सानो test cup भन्दा फरक हुन्छ।',
            'खरिदकर्ताका लागि निष्कर्ष: अर्को साइट वा अर्को मौसमको आँकडा सारेर नहेरी, वास्तविक कार्य-अवस्थामै परीक्षण गर्नुहोस्।',
          ],
        },
        {
          heading: 'अर्डरअघि के पुष्टि गर्ने',
          body: [
            'उपयोगी enquiry मा प्रयोग हुने resin प्रणाली र त्यो pre-accelerated हो कि होइन, प्रक्रिया (hand lay-up, spray-up, casting, moulding), कार्य-अवस्था र आवश्यक कागजात उल्लेख गर्नुहोस्।',
            'उत्पादनतर्फ cobalt content, carrier, pack format र वास्तविक form स्पष्ट पार्नुपर्ने विषय हुन्। यी grade-अनुसार फरक हुन्छन् र हालको supplier कागजातबाट मात्र पुष्टि हुन्छन्।',
          ],
        },
        {
          heading: 'यो गाइडको सीमा',
          body: [
            'यो पृष्ठले सामग्री वर्ग र त्यसको भूमिका बुझाउँछ। यो formulation, dosage तालिका, safety procedure वा कुनै प्रणालीको approval होइन। Storage, PPE, incompatibility, spill र disposal हालको supplier safety data sheet र तपाईंको साइटको नियन्त्रणले निर्धारण गर्छ।',
          ],
        },
      ],
    },
  },

  // -------------------------------------------------------------- styrene
  {
    slug: 'styrene-monomer-guide',
    title: 'Styrene Monomer as a Reactive Diluent: What Buyers Should Know',
    description:
      'Why styrene monomer behaves differently from an inert thinner in unsaturated polyester systems, where viscosity reduction helps and where it weakens a laminate, and the storage and ventilation questions worth settling before ordering.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '5 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'Styrene Monomer as a Reactive Diluent: What Buyers Should Know',
      ogTitle: 'Styrene Monomer: Reactive Diluent Guide',
      ogDescription:
        'How styrene monomer differs from an inert solvent in polyester systems, and what to confirm before ordering. Supplied in Nepal by Samrat FRP Traders.',
    },
    quickFacts: {
      'Material class': 'Reactive diluent / monomer used in unsaturated polyester systems',
      'Key distinction': 'Participates in the cure — it is not an inert thinner',
      'Commercial position': commercialPosition,
      'Before ordering': 'Confirm purity, inhibitor status and storage requirements from the current supplier document',
    },
    relatedSlugs: ['cobalt-octoate-guide', 'nc-thinner-guide'],
    recommendedLinks: [
      { href: '/products/styrene-monomer/', label: 'View Styrene Monomer', description: 'Commercial product page and enquiry route.' },
      { href: '/products/frp-allied-products/', label: 'FRP allied products', description: 'The wider allied-materials range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is styrene monomer just a thinner?',
        a: 'No, and the difference matters. An inert thinner evaporates and leaves the polymer behind. Styrene is a monomer: it takes part in the crosslinking reaction and ends up chemically bound into the cured laminate. Treating it as an ordinary solvent leads to poor decisions about how much to add.',
      },
      {
        q: 'Can it be used to fix resin that has thickened in storage?',
        a: 'Thickening can indicate age, temperature exposure or advancing reaction, and thinning it does not reverse those. Adding monomer to a resin that has changed in storage may produce a workable viscosity and still cure poorly. Confirm the resin is fit for use before adjusting it.',
      },
      {
        q: 'Why is ventilation emphasised so consistently?',
        a: 'Styrene is volatile and has a strong, low-threshold odour, so vapour accumulates in enclosed workshops and moulds. Exposure control is a routine requirement wherever polyester systems are worked, and the specifics belong to the current safety data sheet and local workplace regulation.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture styrene monomer?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing or certification claim.',
      },
    ],
    sections: [
      {
        heading: 'A diluent that becomes part of the laminate',
        body: [
          'Unsaturated polyester resin is supplied already containing styrene, because the monomer is what allows the polyester chains to crosslink into a rigid network. Additional monomer is sometimes introduced to reduce viscosity for a particular process — but unlike a solvent, it does not leave. It reacts, and whatever is added changes the chemistry of the finished part.',
          'That single fact governs most sensible use. The question is never simply "how thin do I want this?" but "what am I doing to the crosslink density and the properties that depend on it?"',
        ],
      },
      {
        heading: 'Where thinning helps, and where it costs',
        body: [
          'Lower viscosity genuinely helps in some situations: better wet-out of dense reinforcement, easier flow into detailed moulds, more manageable spraying. For those processes a resin that is too thick is a real production problem.',
          'The cost appears when dilution goes past what the system was designed for. Over-addition is commonly associated with increased shrinkage, softer or under-cured sections, reduced mechanical performance and greater emission during work. None of that is visible while mixing; it shows up in the part.',
          'The practical route is to establish whether the process actually needs thinner resin, or whether the real issue is resin temperature, reinforcement choice or technique — all of which change wet-out without altering the chemistry.',
        ],
      },
      {
        heading: 'Inhibitor, shelf life and storage',
        body: [
          'Monomer is supplied with an inhibitor because it will otherwise slowly polymerise on its own, and that tendency increases with warmth and time. Storage conditions are therefore not a formality: heat exposure shortens usable life, and material held too long or too warm can begin to change in the drum.',
          'For a buyer this means stock rotation and storage location are part of the purchasing decision, not just a warehouse detail. Exact inhibitor type, storage temperature limits and shelf life are grade-specific and belong to the current supplier documentation.',
        ],
      },
      {
        heading: 'Ventilation and workshop control',
        body: [
          'Styrene vapour is heavier than air and collects in confined spaces — inside moulds, in pits, in poorly ventilated corners of a workshop. Extraction, air movement and appropriate personal protection are standard practice wherever polyester work is carried out at any volume.',
          'This guide deliberately does not state exposure limits or protective equipment specifications. Those are set by the current safety data sheet and by the workplace regulations applying at your site, and they must come from those sources rather than from a supplier guide.',
        ],
      },
      {
        heading: 'What to confirm before ordering',
        body: [
          'A useful enquiry states the resin system, the process it feeds, the volumes involved and the storage available. On the product, confirm purity, inhibitor status, pack size and handling requirements against the current supplier document.',
          'If the underlying problem is workability rather than formulation, say so in the enquiry — the correct answer is sometimes a different resin grade rather than a diluent.',
        ],
      },
    ],
    ne: {
      title: 'Reactive Diluent का रूपमा Styrene Monomer: खरिदकर्ताले बुझ्नुपर्ने कुरा',
      description:
        'Polyester प्रणालीमा styrene monomer किन साधारण thinner भन्दा फरक हुन्छ, viscosity घटाउँदा कहाँ फाइदा र कहाँ हानि हुन्छ, र अर्डरअघि के पुष्टि गर्ने।',
      seo: {
        title: 'Reactive Diluent का रूपमा Styrene Monomer: खरिदकर्ता गाइड',
        ogTitle: 'Styrene Monomer: Reactive Diluent गाइड',
        ogDescription: 'Styrene monomer र साधारण solvent बीचको भिन्नता, तथा अर्डरअघि पुष्टि गर्नुपर्ने विषय।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'Unsaturated polyester प्रणालीमा प्रयोग हुने reactive diluent / monomer',
        'मुख्य भिन्नता': 'Cure प्रक्रियामै सहभागी हुन्छ — यो निष्क्रिय thinner होइन',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'Purity, inhibitor अवस्था र storage आवश्यकता supplier कागजातबाट पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/styrene-monomer/', label: 'Styrene Monomer हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'सम्बन्धित allied सामग्री श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के styrene monomer साधारण thinner हो?',
          a: 'होइन, र यो भिन्नता महत्त्वपूर्ण छ। साधारण thinner उडेर जान्छ; styrene monomer भने crosslinking प्रतिक्रियामै भाग लिन्छ र cured laminate भित्रै रासायनिक रूपमा बाँधिन्छ।',
        },
        {
          q: 'भण्डारणमा बाक्लिएको resin सुधार्न प्रयोग गर्न मिल्छ?',
          a: 'बाक्लिनुले उमेर, तापक्रम वा प्रतिक्रिया अघि बढेको संकेत गर्न सक्छ, र पातलो बनाउँदैमा ती फर्किंदैनन्। पातलो त होला तर cure राम्रो नहुन सक्छ। पहिले resin प्रयोगयोग्य छ कि छैन पुष्टि गर्नुहोस्।',
        },
        {
          q: 'Ventilation मा किन यति जोड दिइन्छ?',
          a: 'Styrene वाष्पशील हुन्छ र बन्द कार्यशाला तथा mould भित्र वाष्प जम्मा हुन्छ। Polyester काम हुने ठाउँमा exposure नियन्त्रण नियमित आवश्यकता हो; विवरण हालको safety data sheet र स्थानीय नियमले तोक्छ।',
        },
        {
          q: 'के Samrat FRP Traders ले styrene monomer उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।',
        },
      ],
      sections: [
        {
          heading: 'Laminate कै अंश बन्ने diluent',
          body: [
            'Unsaturated polyester resin मा styrene पहिल्यै हुन्छ, किनभने यही monomer ले polyester chain हरूलाई crosslink गरेर बलियो संरचना बनाउँछ। कुनै प्रक्रियाका लागि viscosity घटाउन थप monomer हालिन सक्छ — तर solvent जस्तो यो उडेर जाँदैन; प्रतिक्रिया गर्छ र तयारी भागकै रसायनमा परिवर्तन ल्याउँछ।',
            'त्यसैले प्रश्न "कति पातलो चाहियो?" मात्र होइन, "crosslink density र त्यसमा निर्भर गुणहरूमा के असर पर्दैछ?" पनि हो।',
          ],
        },
        {
          heading: 'कहाँ फाइदा, कहाँ हानि',
          body: [
            'कम viscosity केही अवस्थामा साँच्चै सहयोगी हुन्छ: बाक्लो reinforcement मा राम्रो wet-out, विस्तृत mould मा सजिलो flow, र सहज spraying।',
            'तर प्रणालीले सहने सीमाभन्दा बढी पातलो बनाउँदा समस्या आउँछ — बढी shrinkage, नरम वा अपूर्ण cure भएका भाग, कमजोर mechanical प्रदर्शन र काम गर्दा बढी उत्सर्जन। मिसाउँदा यी देखिँदैनन्; तयारी भागमा मात्र देखिन्छन्।',
            'त्यसैले पहिले सोध्नुपर्छ: साँच्चै पातलो resin चाहिएको हो, कि समस्या resin को तापक्रम, reinforcement छनोट वा प्रविधिमा छ?',
          ],
        },
        {
          heading: 'Inhibitor, shelf life र भण्डारण',
          body: [
            'Monomer inhibitor सहित आपूर्ति हुन्छ, किनभने नत्र यो आफैँ बिस्तारै polymerise हुन सक्छ, र तातोसँगै यो प्रवृत्ति बढ्छ। त्यसैले भण्डारण अवस्था औपचारिकता होइन: तातोले प्रयोगयोग्य अवधि घटाउँछ।',
            'खरिदकर्ताका लागि stock rotation र भण्डारण स्थान खरिद निर्णयकै भाग हुन्। Inhibitor प्रकार, तापक्रम सीमा र shelf life grade-अनुसार फरक हुन्छन् र supplier कागजातबाट पुष्टि हुन्छन्।',
          ],
        },
        {
          heading: 'Ventilation र कार्यशाला नियन्त्रण',
          body: [
            'Styrene वाष्प हावाभन्दा गह्रौँ हुन्छ र mould भित्र, खाडल तथा हावा नचल्ने कुनामा जम्मा हुन्छ। Extraction, हावाको प्रवाह र उपयुक्त सुरक्षा सामग्री सामान्य अभ्यास हुन्।',
            'यो गाइडले exposure limit वा सुरक्षा उपकरणको विवरण दिँदैन। ती हालको safety data sheet र तपाईंको साइटमा लागू नियमले तोक्छ।',
          ],
        },
        {
          heading: 'अर्डरअघि के पुष्टि गर्ने',
          body: [
            'Enquiry मा resin प्रणाली, प्रक्रिया, मात्रा र उपलब्ध भण्डारण उल्लेख गर्नुहोस्। उत्पादनतर्फ purity, inhibitor अवस्था, pack size र handling आवश्यकता supplier कागजातसँग पुष्टि गर्नुहोस्।',
            'यदि वास्तविक समस्या workability हो भने त्यही उल्लेख गर्नुहोस् — कहिलेकाहीँ सही उत्तर diluent होइन, फरक resin grade हुन्छ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------ nc thinner
  {
    slug: 'nc-thinner-guide',
    title: 'NC Thinner for Nitrocellulose Lacquer Work: A Practical Guide',
    description:
      'Why NC thinner is a blended solvent rather than a single chemical, how evaporation rate affects finish quality in humid conditions, what it is not suitable for, and what to confirm before ordering.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '5 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'NC Thinner for Nitrocellulose Lacquer Work: A Practical Guide',
      ogTitle: 'NC Thinner: Practical Guide for Coating Work',
      ogDescription:
        'How NC thinner works with nitrocellulose lacquer systems, why blend and evaporation rate matter, and what to confirm before ordering.',
    },
    quickFacts: {
      'Material class': 'Blended solvent thinner for nitrocellulose lacquer systems',
      'Not interchangeable with': 'Polyester or FRP resin diluents — a different chemistry entirely',
      'Commercial position': commercialPosition,
      'Before ordering': 'Match the thinner to the specific lacquer system and confirm from the current supplier document',
    },
    relatedSlugs: ['styrene-monomer-guide', 'paint-brushes-guide'],
    recommendedLinks: [
      { href: '/products/nc-thinner/', label: 'View NC Thinner', description: 'Commercial product page and enquiry route.' },
      { href: '/products/frp-allied-products/', label: 'FRP allied products', description: 'The wider allied-materials range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Can NC thinner be used to thin polyester or FRP resin?',
        a: 'No. NC thinner is formulated for nitrocellulose coating systems. Polyester resins use a reactive diluent that becomes part of the cured polymer, which is a fundamentally different mechanism. Substituting one for the other can prevent proper cure and ruin the work.',
      },
      {
        q: 'Is one thinner the same as another?',
        a: 'No. NC thinner is a blend of several solvents balanced for a particular class of lacquer. A blend intended for a different coating can dissolve the film incorrectly, flash off at the wrong rate, or leave defects even though it appears to work at first.',
      },
      {
        q: 'What causes a milky or cloudy finish?',
        a: 'This is commonly associated with moisture condensing into the drying film when fast-evaporating solvent cools the surface in humid conditions. It is usually a condition and blend problem rather than a fault in the lacquer.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture NC thinner?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing or certification claim.',
      },
    ],
    sections: [
      {
        heading: 'A blend, not a single solvent',
        body: [
          'NC thinner is not one chemical. It is a balanced mixture of solvents with different evaporation speeds and different abilities to dissolve the resin in the coating. The fast components carry the coating off the gun or brush and begin flashing immediately; the slower components stay in the film long enough for it to flow out level before it sets.',
          'That balance is the product. It is why a thinner cannot be judged by price or by how well it appears to dilute the lacquer in the tin — the meaningful test is the finish once it has dried.',
        ],
      },
      {
        heading: 'Matching thinner to the coating system',
        body: [
          'A thinner is designed against a coating class. Using a blend intended for a different chemistry may still produce a sprayable liquid, and that is exactly what makes the mistake easy: the problem appears later as poor flow, slow hardening, softening of an earlier coat, blooming or adhesion failure.',
          'For repeat production work, settling the thinner and the lacquer as a matched pair — and then not varying it casually between batches — removes a large share of intermittent finish problems.',
        ],
      },
      {
        heading: 'Humidity, evaporation and blushing',
        body: [
          'Rapid solvent evaporation cools the wet film. In humid conditions that cooling can be enough to condense moisture into the surface, producing the pale, cloudy result usually described as blushing. It is a physical effect of the working conditions, not evidence of a defective lacquer.',
          'Workshops address this by working in drier conditions where possible, by adjusting the blend so it holds longer before setting, or by improving air movement and temperature. Which of those is appropriate depends on the system in use, and on guidance from the coating manufacturer rather than from a general guide.',
        ],
      },
      {
        heading: 'Storage and workshop handling',
        body: [
          'Solvent thinners are volatile and flammable, and vapour accumulates near floor level in enclosed rooms. Containers are kept closed, stored away from heat and ignition sources, and used with ventilation appropriate to the volume being sprayed.',
          'Specific flashpoint, storage limits, protective equipment and disposal routes are grade-specific and are governed by the current supplier safety data sheet and by local workplace regulation. This guide does not state them.',
        ],
      },
      {
        heading: 'What to confirm before ordering',
        body: [
          'State the lacquer or coating system, the application method (brush, conventional spray, other), the conditions in the workshop and the pack size you need. Where a finish problem is the reason for the enquiry, describing the defect is more useful than naming a product.',
          'On the product itself, the blend, evaporation behaviour and handling requirements are grade-specific and belong to the current supplier document.',
        ],
      },
    ],
    ne: {
      title: 'Nitrocellulose Lacquer कामका लागि NC Thinner: व्यावहारिक गाइड',
      description:
        'NC thinner किन एउटै रसायन नभई मिश्रण हो, आर्द्रतामा evaporation दरले finish मा कस्तो असर गर्छ, यो केका लागि उपयुक्त छैन, र अर्डरअघि के पुष्टि गर्ने।',
      seo: {
        title: 'Nitrocellulose Lacquer कामका लागि NC Thinner: व्यावहारिक गाइड',
        ogTitle: 'NC Thinner: Coating कामका लागि गाइड',
        ogDescription: 'NC thinner को भूमिका, blend र evaporation को महत्त्व, र अर्डरअघि पुष्टि गर्नुपर्ने कुरा।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'Nitrocellulose lacquer प्रणालीका लागि मिश्रित solvent thinner',
        'साटासाट नमिल्ने': 'Polyester वा FRP resin diluent — रसायन नै फरक',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'प्रयोग हुने lacquer प्रणालीसँग मिल्ने हो कि होइन supplier कागजातबाट पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/nc-thinner/', label: 'NC Thinner हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'सम्बन्धित allied सामग्री श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के NC thinner ले polyester वा FRP resin पातलो बनाउन मिल्छ?',
          a: 'मिल्दैन। NC thinner nitrocellulose coating प्रणालीका लागि बनेको हो। Polyester मा reactive diluent प्रयोग हुन्छ जुन cured polymer कै अंश बन्छ — संयन्त्र नै फरक हो। साटासाट गर्दा cure बिग्रन सक्छ।',
          },
        {
          q: 'के सबै thinner उस्तै हुन्?',
          a: 'होइनन्। NC thinner एउटा निश्चित lacquer वर्गका लागि सन्तुलित मिश्रण हो। अर्को coating का लागि बनेको मिश्रणले सुरुमा काम गरे जस्तो देखिए पनि पछि दोष देखाउन सक्छ।',
        },
        {
          q: 'Finish दुधे वा धमिलो किन हुन्छ?',
          a: 'छिटो उड्ने solvent ले सतह चिसो बनाउँदा आर्द्र अवस्थामा नमी film मा जम्न सक्छ। यो प्रायः अवस्था र blend को कुरा हो, lacquer कै दोष होइन।',
        },
        {
          q: 'के Samrat FRP Traders ले NC thinner उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।',
        },
      ],
      sections: [
        {
          heading: 'एउटै रसायन होइन, मिश्रण हो',
          body: [
            'NC thinner एउटै रसायन होइन। यो फरक-फरक उड्ने गति र घुलाउने क्षमता भएका solvent हरूको सन्तुलित मिश्रण हो। छिटो उड्ने भागले coating लाई सतहसम्म पुर्‍याउँछ भने ढिलो भागले film लाई समतल हुन पर्याप्त समय दिन्छ।',
            'यही सन्तुलन नै उत्पादन हो। त्यसैले thinner लाई मूल्य वा भाँडोमा कति राम्रो मिसियो भन्नेले होइन, सुकेपछिको finish ले जाँचिन्छ।',
          ],
        },
        {
          heading: 'Coating प्रणालीसँग मिलाउने',
          body: [
            'Thinner एउटा coating वर्ग लक्षित गरेर बनाइन्छ। फरक रसायनका लागि बनेको मिश्रणले पनि spray गर्न मिल्ने तरल दिन सक्छ — यही कारण गल्ती सजिलै हुन्छ। समस्या पछि flow नराम्रो हुनु, ढिलो कडा हुनु, अघिल्लो कोट नरम हुनु वा adhesion बिग्रनुमा देखिन्छ।',
            'नियमित उत्पादनमा lacquer र thinner लाई जोडीका रूपमा तय गरेर बारम्बार नफेर्नुले धेरै अनियमित finish समस्या हटाउँछ।',
          ],
        },
        {
          heading: 'आर्द्रता, evaporation र blushing',
          body: [
            'Solvent छिटो उड्दा भिजेको film चिसो हुन्छ। आर्द्र अवस्थामा त्यो चिसोले सतहमा नमी जमाउन सक्छ, र त्यसैले फिक्का, धमिलो नतिजा देखिन्छ। यो कार्य-अवस्थाको भौतिक असर हो।',
            'कार्यशालाहरू सुक्खा अवस्थामा काम गरेर, blend मिलाएर वा हावा र तापक्रम सुधारेर यसलाई सम्बोधन गर्छन्। कुन उपाय उपयुक्त हो भन्ने coating निर्मातासँगको निर्देशनले तय गर्छ।',
          ],
        },
        {
          heading: 'भण्डारण र कार्यशाला व्यवस्थापन',
          body: [
            'Solvent thinner वाष्पशील र ज्वलनशील हुन्छ, र बन्द कोठामा वाष्प भुइँ नजिक जम्मा हुन्छ। भाँडा बन्द राख्ने, तातो र आगोको स्रोतबाट टाढा राख्ने र पर्याप्त ventilation मा प्रयोग गर्ने अभ्यास हो।',
            'Flashpoint, भण्डारण सीमा, सुरक्षा उपकरण र disposal grade-अनुसार फरक हुन्छन् र हालको safety data sheet तथा स्थानीय नियमले तोक्छ। यो गाइडले ती तोक्दैन।',
          ],
        },
        {
          heading: 'अर्डरअघि के पुष्टि गर्ने',
          body: [
            'Lacquer वा coating प्रणाली, प्रयोग विधि (brush, spray), कार्यशालाको अवस्था र आवश्यक pack size उल्लेख गर्नुहोस्। Finish समस्याका कारण सोध्दै हुनुहुन्छ भने उत्पादनको नाम भन्दा दोषको विवरण बढी उपयोगी हुन्छ।',
            'Blend, evaporation व्यवहार र handling आवश्यकता grade-अनुसार फरक हुन्छन् र supplier कागजातबाट पुष्टि हुन्छन्।',
          ],
        },
      ],
    },
  },

  // -------------------------------------------------------------- brushes
  {
    slug: 'paint-brushes-guide',
    title: 'Brushes for FRP Hand Lay-up: Choosing and Using Them Well',
    description:
      'Where a brush still outperforms a roller in composite work, how resin and solvent attack brush construction, why shedding shows up in the finished laminate, and what to specify when ordering.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '4 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'Brushes for FRP Hand Lay-up: Choosing and Using Them Well',
      ogTitle: 'Paint Brushes for FRP Work: Selection Guide',
      ogDescription:
        'Choosing brushes for resin, gelcoat and detail work in FRP fabrication, and what to specify when ordering.',
    },
    quickFacts: {
      'Material class': 'Hand applicators for resin, gelcoat and detail work',
      'Main failure mode': 'Bristle shedding into the laminate and ferrule loosening',
      'Commercial position': commercialPosition,
      'Before ordering': 'Match size and bristle type to the job; confirm availability by size',
    },
    relatedSlugs: ['wax-polish-guide', 'nc-thinner-guide'],
    recommendedLinks: [
      { href: '/products/paint-brushes/', label: 'View Paint Brushes', description: 'Commercial product page and enquiry route.' },
      { href: '/products/frp-allied-products/', label: 'FRP allied products', description: 'The wider allied-materials range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Why not use a roller for everything?',
        a: 'Rollers are better for consolidating flat and gently curved areas quickly. Brushes remain necessary for corners, tight radii, edges, narrow returns and any detail a roller cannot reach or would bridge over. Most fabrication work uses both.',
      },
      {
        q: 'Why do bristles end up in the laminate?',
        a: 'Resin and cleaning solvent both attack the adhesive holding bristles in the ferrule, and repeated cleaning accelerates it. A brush that has been used and cleaned several times sheds far more than a new one, and each loose bristle becomes a defect in the part.',
      },
      {
        q: 'Is it worth cleaning brushes for reuse?',
        a: 'It depends on the brush and on solvent cost. For detail brushes and short production runs, cleaning is often worthwhile. For high-volume lay-up, many workshops treat cheaper brushes as consumable because solvent, labour and the risk of shedding outweigh the saving.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture brushes?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing claim.',
      },
    ],
    sections: [
      {
        heading: 'Where a brush is still the right tool',
        body: [
          'In hand lay-up the roller does the bulk work: wetting out reinforcement across an open area and driving air out of the laminate. But rollers bridge. They skip over inside corners, they cannot reach into a narrow return, and they will not push resin properly into a tight radius.',
          'Those are precisely the areas where a part fails — dry corners and trapped air at the edges. A brush is what gets resin into them, which is why brushes remain standard equipment even in workshops running mostly roller work.',
          'Brushes also do the jobs that are not lay-up at all: cutting in gelcoat at an edge, touching up a missed area, applying release agent into detail.',
        ],
      },
      {
        heading: 'What resin and solvent do to a brush',
        body: [
          'A brush in composite work has a hard life. Resin cures into whatever it is left in; cleaning solvent then attacks the same adhesive that holds the bristle bundle into the ferrule. Handles swell or soften, ferrules loosen, and the bundle gradually gives up its grip.',
          'The practical consequences are predictable. Bristles come loose. The brush loses its shape and stops laying resin evenly. Cured resin left in the heel from a previous session makes the brush stiff and less able to reach into detail.',
          'None of this is avoidable in an absolute sense; it is managed by choosing brushes suited to the job and by deciding deliberately which ones are worth cleaning.',
        ],
      },
      {
        heading: 'Shedding, and why it matters more than it seems',
        body: [
          'A loose bristle in a decorative gelcoat surface is a visible defect that usually has to be cut back and repaired. In a structural laminate it is a small void and a stress feature. Either way the cost of finding a bristle in the part is much higher than the cost of the brush.',
          'This is the strongest argument for not over-reusing brushes on visible or critical work, and for keeping better brushes for gelcoat and detail while using cheaper ones for bulk wet-out where a stray bristle can be rolled out and inspected.',
        ],
      },
      {
        heading: 'What to specify when ordering',
        body: [
          'Useful information in an enquiry: what the brushes are for (bulk lay-up, gelcoat cutting-in, release agent, detail), the sizes you actually use, and roughly how many you consume per job or per month. Consumption rate matters more than unit price for this category.',
          'Bristle type, ferrule construction, size availability and pack quantity are supply-specific. Confirm them against the current supplier information rather than assuming a size will always be in stock.',
        ],
      },
    ],
    ne: {
      title: 'FRP Hand Lay-up का लागि Brush: छनोट र सही प्रयोग',
      description:
        'Composite काममा roller भन्दा brush कहाँ राम्रो हुन्छ, resin र solvent ले brush लाई कसरी बिगार्छ, bristle झर्दा laminate मा किन दोष देखिन्छ, र अर्डर गर्दा के उल्लेख गर्ने।',
      seo: {
        title: 'FRP Hand Lay-up का लागि Brush: छनोट र सही प्रयोग',
        ogTitle: 'FRP कामका लागि Paint Brushes: छनोट गाइड',
        ogDescription: 'Resin, gelcoat र detail कामका लागि brush छनोट र अर्डरमा उल्लेख गर्नुपर्ने कुरा।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'Resin, gelcoat र detail कामका लागि hand applicator',
        'मुख्य समस्या': 'Bristle झर्नु र ferrule खुकुलो हुनु',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'कामअनुसार साइज र bristle प्रकार मिलाउनुहोस्; साइज उपलब्धता पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/paint-brushes/', label: 'Paint Brushes हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'सम्बन्धित allied सामग्री श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'सबै काममा roller किन प्रयोग नगर्ने?',
          a: 'समतल र हल्का बाङ्गो भागमा roller छिटो र राम्रो हुन्छ। तर कुना, साँघुरो भाग, किनारा र सानो radius मा brush नै चाहिन्छ। प्रायः कारखानामा दुवै प्रयोग हुन्छ।',
        },
        {
          q: 'Bristle किन laminate भित्र पुग्छ?',
          a: 'Resin र सफा गर्ने solvent दुवैले ferrule भित्रको adhesive लाई कमजोर बनाउँछ, र पटक-पटक सफा गर्दा यो झन् बढ्छ। पुरानो brush ले नयाँ भन्दा धेरै बढी bristle झार्छ।',
        },
        {
          q: 'Brush सफा गरेर पुनः प्रयोग गर्नु उपयुक्त हुन्छ?',
          a: 'Brush को प्रकार र solvent को लागतमा भर पर्छ। Detail brush र सानो उत्पादनमा सफा गर्नु प्रायः फाइदाजनक हुन्छ। ठूलो परिमाणको lay-up मा भने धेरैले सस्तो brush लाई उपभोग्य सामग्री मान्छन्।',
        },
        {
          q: 'के Samrat FRP Traders ले brush उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।',
        },
      ],
      sections: [
        {
          heading: 'Brush कहाँ सही उपकरण हो',
          body: [
            'Hand lay-up मा ठूलो काम roller ले गर्छ — खुला भागमा reinforcement भिजाउने र हावा निकाल्ने। तर roller ले कुना नाघ्छ, साँघुरो भागमा पुग्दैन र सानो radius मा resin ठीकसँग पुर्‍याउँदैन।',
            'यी ठीक त्यही ठाउँ हुन् जहाँ भाग बिग्रन्छ — सुक्खा कुना र किनारामा अड्किएको हावा। त्यहाँ resin पुर्‍याउने काम brush ले गर्छ।',
            'Brush ले lay-up बाहेकका काम पनि गर्छ: किनारामा gelcoat लगाउने, छुटेको भाग पूर्ति गर्ने, detail मा release agent लगाउने।',
          ],
        },
        {
          heading: 'Resin र solvent ले brush लाई के गर्छ',
          body: [
            'Composite काममा brush को आयु छोटो हुन्छ। छाडिएको ठाउँमै resin जम्छ; सफा गर्ने solvent ले ferrule भित्रको adhesive लाई आक्रमण गर्छ। बिस्तारै bistle बन्धन खुकुलो हुन्छ।',
            'नतिजा अनुमानयोग्य छ — bristle झर्छ, brush को आकार बिग्रन्छ र resin समान रूपमा लाग्दैन। अघिल्लो पटकको जमेको resin ले brush कडा बनाउँछ।',
            'यो पूर्ण रूपमा रोकिँदैन; कामअनुसार brush छनोट गरेर र कुन brush सफा गर्ने भन्ने सोचेर व्यवस्थापन गरिन्छ।',
          ],
        },
        {
          heading: 'Bristle झर्नु किन ठूलो कुरा हो',
          body: [
            'देखिने gelcoat सतहमा झरेको bristle स्पष्ट दोष हो र प्रायः काटेर मर्मत गर्नुपर्छ। Structural laminate मा यो सानो void र तनावको बिन्दु बन्छ। दुवै अवस्थामा भागमा bristle भेटिनुको लागत brush को मूल्यभन्दा धेरै बढी हुन्छ।',
            'त्यसैले देखिने वा महत्त्वपूर्ण काममा brush धेरै पटक नदोहोर्‍याउने, र gelcoat तथा detail का लागि राम्रो brush छुट्याउने अभ्यास उपयोगी हुन्छ।',
          ],
        },
        {
          heading: 'अर्डर गर्दा के उल्लेख गर्ने',
          body: [
            'Enquiry मा brush कुन कामका लागि हो (bulk lay-up, gelcoat, release agent, detail), प्रयोग हुने साइज र प्रति काम वा महिना कति खपत हुन्छ उल्लेख गर्नुहोस्। यो श्रेणीमा खपत दर एकाइ मूल्यभन्दा बढी महत्त्वपूर्ण हुन्छ।',
            'Bristle प्रकार, ferrule बनावट, साइज उपलब्धता र pack मात्रा आपूर्ति-अनुसार फरक हुन्छन्; हालको supplier जानकारीबाट पुष्टि गर्नुहोस्।',
          ],
        },
      ],
    },
  },

  // ----------------------------------------------------------- soap stone
  {
    slug: 'soap-stone-powder-guide',
    title: 'Soap Stone Powder as a Filler: What It Changes in a Resin System',
    description:
      'What a mineral filler does to cost, viscosity, shrinkage and mechanical behaviour, why mesh size and loading limits matter, how dispersion goes wrong, and what to confirm before ordering.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '5 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'Soap Stone Powder as a Filler: What It Changes in a Resin System',
      ogTitle: 'Soap Stone Powder: Mineral Filler Guide',
      ogDescription:
        'How a mineral filler affects viscosity, shrinkage and mechanical behaviour in resin compounds, and what to confirm before ordering.',
    },
    quickFacts: {
      'Material class': 'Mineral filler used in resin compounds, putties and coatings',
      'Typical trade-off': 'Lower cost and shrinkage against higher viscosity and reduced strength at high loading',
      'Commercial position': commercialPosition,
      'Before ordering': 'Confirm mesh/particle size and moisture condition against the current supplier document',
    },
    relatedSlugs: ['cobalt-octoate-guide', 'styrene-monomer-guide'],
    recommendedLinks: [
      { href: '/products/soap-stone-powder/', label: 'View Soap Stone Powder', description: 'Commercial product page and enquiry route.' },
      { href: '/products/frp-allied-products/', label: 'FRP allied products', description: 'The wider allied-materials range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is filler just a way of making resin go further?',
        a: 'Cost reduction is one reason, but not the only one. Fillers also reduce shrinkage, control sag on vertical surfaces, add body to putties and change the surface character of a compound. Used purely as a cost measure and pushed too far, they degrade the part.',
      },
      {
        q: 'How much can be added?',
        a: 'There is no universal figure. The workable limit depends on the resin system, the particle size, the process and the properties the part needs. Past that limit the mix becomes difficult to wet out and to de-air, and strength falls away.',
      },
      {
        q: 'Why does the powder clump in storage?',
        a: 'Fine mineral powders pick up atmospheric moisture and compact under their own weight. Damp or compacted filler disperses poorly and can carry moisture into a resin system, so dry storage off the floor is basic practice.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture soap stone powder?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing claim.',
      },
    ],
    sections: [
      {
        heading: 'What a filler actually changes',
        body: [
          'Adding mineral filler to a resin system changes several things at once, and buyers who think only about cost usually get caught by the others. Volume goes up for less money. Viscosity rises, often sharply. Cure shrinkage falls, because there is less reacting resin per unit volume. Exotherm moderates for the same reason.',
          'Mechanical behaviour changes too, and not always favourably: a filled system is generally stiffer but more brittle, and above a certain loading it loses strength rather than gaining it. Surface character changes, which matters where the compound is visible or has to be finished.',
          'The useful way to approach filler is therefore as a set of trade-offs, chosen for a particular job, rather than as an ingredient that simply reduces the bill.',
        ],
      },
      {
        heading: 'Particle size and loading',
        body: [
          'Fineness governs how the filler behaves in the mix. Finer grades disperse into a smoother compound and give a better finished surface, but they raise viscosity faster and demand more mixing energy. Coarser grades load more easily but can settle and can show in the surface.',
          'Every combination of resin and filler has a point beyond which the mix stops being workable — it will not wet out properly, air becomes impossible to remove, and the cured result is weaker and more porous than the unfilled system. Finding that limit belongs to trials on the actual system, not to a general figure quoted from elsewhere.',
        ],
      },
      {
        heading: 'Dispersion and mixing order',
        body: [
          'Most filler problems in practice are dispersion problems. Powder tipped in too quickly forms lumps with dry centres that never wet out, and those lumps become weak points. Adding filler gradually with continuous mixing, rather than all at once, is the difference between a uniform compound and a marbled one.',
          'Mixing also entrains air, and a filled system holds that air more stubbornly than an unfilled one because of its higher viscosity. Allowing the mix to stand, or de-airing where the process supports it, is often necessary.',
          'Where a catalysed system is involved, the sequence matters: filler is dispersed into the resin before the reactive additions, so that mixing time does not eat into working time.',
        ],
      },
      {
        heading: 'Moisture and storage',
        body: [
          'Fine mineral powder is hygroscopic in practical terms — it takes up moisture from humid air, and it compacts in the bag under its own weight. Both make dispersion harder, and moisture carried into a resin system can affect cure and adhesion.',
          'Storage on pallets rather than the floor, in closed bags, in the driest available space, is ordinary practice and costs nothing. Material that has become damp or hard-packed should be assessed before use rather than forced into a mix.',
        ],
      },
      {
        heading: 'What to confirm before ordering',
        body: [
          'State the resin system and the application — putty, casting compound, coating, moulding — along with the surface finish you need and the volumes involved. Whether the filled compound is structural or cosmetic changes what matters.',
          'On the product, mesh or particle size, mineral consistency between batches and moisture condition are the points to confirm against the current supplier document. Batch-to-batch consistency is worth asking about directly where the compound is used in repeat production.',
        ],
      },
    ],
    ne: {
      title: 'Filler का रूपमा Soap Stone Powder: Resin प्रणालीमा के फेरिन्छ',
      description:
        'Mineral filler ले लागत, viscosity, shrinkage र mechanical व्यवहारमा के असर गर्छ, mesh size र loading सीमा किन महत्त्वपूर्ण छ, dispersion कसरी बिग्रन्छ, र अर्डरअघि के पुष्टि गर्ने।',
      seo: {
        title: 'Filler का रूपमा Soap Stone Powder: Resin प्रणालीमा के फेरिन्छ',
        ogTitle: 'Soap Stone Powder: Mineral Filler गाइड',
        ogDescription: 'Filler ले viscosity, shrinkage र strength मा गर्ने असर, र अर्डरअघि पुष्टि गर्नुपर्ने कुरा।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'Resin compound, putty र coating मा प्रयोग हुने mineral filler',
        'मुख्य सन्तुलन': 'कम लागत र shrinkage बनाम बढी viscosity र उच्च loading मा घट्ने strength',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'Mesh/particle size र नमी अवस्था supplier कागजातबाट पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/soap-stone-powder/', label: 'Soap Stone Powder हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'सम्बन्धित allied सामग्री श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के filler resin बढाउने उपाय मात्र हो?',
          a: 'लागत घटाउनु एउटा कारण हो, तर एउटै होइन। Filler ले shrinkage घटाउँछ, ठाडो सतहमा sag नियन्त्रण गर्छ र putty लाई body दिन्छ। तर लागत मात्र हेरेर धेरै हाल्दा भागको गुणस्तर घट्छ।',
        },
        {
          q: 'कति मात्रा हाल्न मिल्छ?',
          a: 'सर्वमान्य आँकडा छैन। Resin प्रणाली, particle size, प्रक्रिया र आवश्यक गुणअनुसार सीमा फरक हुन्छ। सीमा नाघेपछि wet-out र de-air गाह्रो हुन्छ र strength घट्छ।',
        },
        {
          q: 'भण्डारणमा powder किन डल्लो पर्छ?',
          a: 'मसिनो mineral powder हावाबाट नमी तान्छ र आफ्नै तौलले खाँदिन्छ। ओसिलो वा खाँदिएको filler राम्ररी छरिँदैन र resin प्रणालीमा नमी लैजान सक्छ।',
        },
        {
          q: 'के Samrat FRP Traders ले soap stone powder उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।',
        },
      ],
      sections: [
        {
          heading: 'Filler ले वास्तवमा के फेर्छ',
          body: [
            'Resin प्रणालीमा mineral filler हाल्दा एकैपटक धेरै कुरा फेरिन्छ, र लागत मात्र सोच्नेहरू अरू कुरामा अल्झिन्छन्। कम खर्चमा आयतन बढ्छ। Viscosity बढ्छ, प्रायः धेरै नै। Cure shrinkage घट्छ, किनभने प्रति आयतन प्रतिक्रिया गर्ने resin कम हुन्छ। सोही कारण exotherm पनि नरम हुन्छ।',
            'Mechanical व्यवहार पनि फेरिन्छ, सधैँ अनुकूल भने होइन: filled प्रणाली सामान्यतया बढी कडा तर बढी भंगुर हुन्छ, र निश्चित सीमापछि strength बढ्नुको सट्टा घट्छ।',
            'त्यसैले filler लाई बिल घटाउने सामग्री होइन, निश्चित कामका लागि छानिने सन्तुलनको समूह मान्नु उपयुक्त हुन्छ।',
          ],
        },
        {
          heading: 'Particle size र loading',
          body: [
            'मसिनोपनले मिश्रणमा filler को व्यवहार तय गर्छ। मसिनो grade राम्रो सतह दिन्छ तर viscosity छिटो बढाउँछ र बढी मिसाउने शक्ति माग्छ। बाक्लो grade सजिलै मिसिन्छ तर थिग्रिन सक्छ र सतहमा देखिन सक्छ।',
            'हरेक resin-filler संयोजनको एउटा सीमा हुन्छ, जसपछि मिश्रण काम लायक रहँदैन — wet-out हुँदैन, हावा निस्कँदैन र cured नतिजा कमजोर तथा porous हुन्छ। यो सीमा वास्तविक प्रणालीमा परीक्षण गरेर पत्ता लगाउनुपर्छ।',
          ],
        },
        {
          heading: 'Dispersion र मिसाउने क्रम',
          body: [
            'व्यवहारमा filler का धेरैजसो समस्या dispersion कै समस्या हुन्। एकैपटक छिटो खन्याउँदा भित्र सुक्खा रहेका डल्ला बन्छन् जुन कहिल्यै भिज्दैनन् र कमजोर बिन्दु बन्छन्। बिस्तारै, मिसाउँदै हाल्नु र एकैचोटि खन्याउनुबीचको फरक यही हो।',
            'मिसाउँदा हावा पनि पस्छ, र बढी viscosity भएकाले filled प्रणालीले त्यो हावा सजिलै छाड्दैन। केही बेर छाड्नु वा de-air गर्नु प्रायः आवश्यक हुन्छ।',
            'Catalysed प्रणालीमा क्रम महत्त्वपूर्ण छ: reactive सामग्री हाल्नुअघि filler लाई resin मा छर्नुपर्छ, ताकि मिसाउने समयले working time नखाओस्।',
          ],
        },
        {
          heading: 'नमी र भण्डारण',
          body: [
            'मसिनो mineral powder ले आर्द्र हावाबाट नमी लिन्छ र बोरामै आफ्नै तौलले खाँदिन्छ। दुवैले dispersion गाह्रो बनाउँछ, र resin प्रणालीमा गएको नमीले cure र adhesion मा असर गर्न सक्छ।',
            'भुइँमा नराखी pallet मा, बन्द बोरामा, सकेसम्म सुक्खा ठाउँमा राख्नु सामान्य अभ्यास हो। ओसिलो वा खाँदिएको सामग्री जबरजस्ती मिसाउनुभन्दा पहिले जाँच्नुपर्छ।',
          ],
        },
        {
          heading: 'अर्डरअघि के पुष्टि गर्ने',
          body: [
            'Resin प्रणाली र प्रयोग (putty, casting compound, coating, moulding), आवश्यक सतह finish र मात्रा उल्लेख गर्नुहोस्। Compound structural हो कि cosmetic भन्नेले प्राथमिकता फेर्छ।',
            'उत्पादनतर्फ mesh वा particle size, batch बीचको एकरूपता र नमी अवस्था supplier कागजातसँग पुष्टि गर्नुहोस्। नियमित उत्पादनमा batch एकरूपताबारे सिधै सोध्नु उपयोगी हुन्छ।',
          ],
        },
      ],
    },
  },

  // ----------------------------------------------------------- release wax
  {
    slug: 'wax-polish-guide',
    title: 'FRP Mould Release Wax: Preparation, Application and Failure',
    description:
      'How release wax works on a mould surface, why new and repaired moulds need more preparation, what thin coats and cure time actually achieve, and how to read a release failure before it damages a mould.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '5 min read',
    publishDate: '2026-09-09',
    seo: {
      title: 'FRP Mould Release Wax: Preparation, Application and Failure',
      ogTitle: 'FRP Mould Release Wax: Practical Guide',
      ogDescription:
        'Preparing and waxing an FRP mould, why multiple thin coats matter, and how to diagnose release failure.',
    },
    quickFacts: {
      'Material class': 'Parting wax for FRP mould preparation',
      'Most common error': 'Too few coats on a new mould, or insufficient time between coats',
      'Commercial position': commercialPosition,
      'Before ordering': 'Confirm suitability for your mould surface and gelcoat system',
    },
    relatedSlugs: ['paint-brushes-guide', 'cobalt-octoate-guide'],
    recommendedLinks: [
      { href: '/products/wax-polish/', label: 'View FRP Mould Release Wax', description: 'Commercial product page and enquiry route.' },
      { href: '/products/frp-allied-products/', label: 'FRP allied products', description: 'The wider allied-materials range.' },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'How many coats does a new mould need?',
        a: 'Substantially more than a mould already in production, because a new or freshly repaired surface is porous and absorbs the first coats rather than building a film. The exact number is set by the wax manufacturer’s instructions for the product in use.',
      },
      {
        q: 'Is wax an alternative to PVA release film?',
        a: 'They are different tools. Wax builds a semi-permanent barrier suited to repeat production; PVA forms a sacrificial film often used on difficult, new or repaired surfaces. Some workshops use both together in demanding situations.',
      },
      {
        q: 'Why did the part stick even though the mould was waxed?',
        a: 'Common causes include too few coats on a fresh surface, not allowing each coat to haze and cure before buffing, buffing so hard that the film is removed, damage or porosity in the mould surface, and sharp geometry with insufficient draft. Waxing more heavily rarely fixes any of them.',
      },
      {
        q: 'Does Samrat FRP Traders manufacture release wax?',
        a: 'No. Samrat FRP Traders is a trader, supplier, importer and reseller, and makes no manufacturing claim.',
      },
    ],
    sections: [
      {
        heading: 'What the wax is doing',
        body: [
          'Release wax builds a thin barrier that fills the microscopic texture of the mould surface and stops the gelcoat bonding to it. It is a surface treatment, not a lubricant, and it works by being present as a continuous film — which is why coverage matters far more than quantity.',
          'It follows that wax cannot compensate for a mould that is mechanically wrong. A surface with porosity, damage, or geometry that grips the part will still fight you when you try to release it. Wax is the last step in mould preparation, not a substitute for the earlier ones.',
        ],
      },
      {
        heading: 'New and repaired moulds',
        body: [
          'A new mould, or an area that has just been repaired and polished, behaves differently from one in regular production. The surface is more open, and the first applications are absorbed into it rather than building the film that does the releasing. Treating a new mould like an established one is the most common reason a first pull sticks.',
          'The practical approach is to build up the surface deliberately over several applications before attempting a part, and to expect the first pulls from a new mould to be the most demanding. Some workshops additionally use a sacrificial film for the first few parts while the wax layer establishes.',
        ],
      },
      {
        heading: 'Thin coats, haze, and buffing',
        body: [
          'Wax is applied thinly and evenly, allowed to haze as the carrier flashes off, and then buffed to a polish. Each of those three stages does something: thin application gives an even film, the pause allows the film to set rather than smear, and buffing removes excess while leaving the barrier behind.',
          'Two errors dominate. Applying thickly and buffing immediately produces a smeared, uneven layer that releases inconsistently and can print into the part surface. Buffing too aggressively, or too many times over the same area, can take the film back off entirely — leaving a mould that looks beautifully polished and releases badly.',
          'Time between coats is not a formality either. Each layer needs its interval before the next goes on, and the interval belongs to the product instructions rather than to the production schedule.',
        ],
      },
      {
        heading: 'Reading a release failure',
        body: [
          'When a part sticks, the useful response is to work out which of a small number of causes applies rather than adding more wax. Look at where it stuck: an edge or a tight radius suggests geometry and draft, or wax not reaching into detail. A general overall grip on a new mould suggests insufficient film build. A patch that sticks repeatedly in the same place suggests damage or porosity at that spot.',
          'Transfer — gelcoat pulling away onto the mould — is the outcome worth avoiding at all costs, because repairing the mould is far more expensive than the part. That risk is the reason preparation is treated as seriously as it is, and the reason it is worth stopping to diagnose rather than forcing a second attempt.',
        ],
      },
      {
        heading: 'What to confirm before ordering',
        body: [
          'State the mould surface, the gelcoat or resin system in use, whether moulds are new or established, and the production frequency. A workshop pulling parts daily has different requirements from one running occasional jobs.',
          'Suitability for your particular surface, the recommended number of coats and the interval between them are product-specific, and must come from the current supplier instructions rather than from a general guide.',
        ],
      },
    ],
    ne: {
      title: 'FRP Mould Release Wax: तयारी, प्रयोग र असफलता',
      description:
        'Release wax ले mould सतहमा कसरी काम गर्छ, नयाँ र मर्मत गरिएको mould लाई किन बढी तयारी चाहिन्छ, पातलो coat र समयको महत्त्व, र release असफल हुँदा कसरी बुझ्ने।',
      seo: {
        title: 'FRP Mould Release Wax: तयारी, प्रयोग र असफलता',
        ogTitle: 'FRP Mould Release Wax: व्यावहारिक गाइड',
        ogDescription: 'Mould तयारी, पातलो coat को महत्त्व र release असफलताको निदान।',
      },
      quickFacts: {
        'सामग्री वर्ग': 'FRP mould तयारीका लागि parting wax',
        'सामान्य गल्ती': 'नयाँ mould मा कम coat, वा coat बीच पर्याप्त समय नदिनु',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'अर्डरअघि': 'आफ्नो mould सतह र gelcoat प्रणालीसँग उपयुक्तता पुष्टि गर्नुहोस्',
      },
      recommendedLinks: [
        { href: '/products/wax-polish/', label: 'FRP Mould Release Wax हेर्नुहोस्', description: 'व्यावसायिक उत्पादन पृष्ठ र enquiry।' },
        { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'सम्बन्धित allied सामग्री श्रेणी।' },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'नयाँ mould लाई कति coat चाहिन्छ?',
          a: 'उत्पादनमा रहेको mould भन्दा धेरै बढी, किनभने नयाँ वा भर्खर मर्मत गरिएको सतह porous हुन्छ र सुरुका coat सोसिन्छन्। सटीक संख्या प्रयोग हुने wax को निर्देशनले तोक्छ।',
        },
        {
          q: 'के wax र PVA release film उस्तै हुन्?',
          a: 'फरक हुन्। Wax ले पुनः प्रयोगयोग्य barrier बनाउँछ; PVA ले एकपटके film बनाउँछ जुन गाह्रो वा नयाँ सतहमा प्रयोग हुन्छ। कठिन अवस्थामा दुवै सँगै प्रयोग गरिन्छ।',
        },
        {
          q: 'Wax लगाएर पनि भाग किन टाँसियो?',
          a: 'नयाँ सतहमा कम coat, coat लाई haze र set हुन समय नदिनु, धेरै जोडले buff गरेर film नै हटाउनु, mould मा क्षति वा porosity, र कम draft भएको तीखो geometry — सामान्य कारण यिनै हुन्। बढी wax लगाउँदैमा यी सुध्रिँदैनन्।',
        },
        {
          q: 'के Samrat FRP Traders ले release wax उत्पादन गर्छ?',
          a: 'गर्दैन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।',
        },
      ],
      sections: [
        {
          heading: 'Wax ले के गरिरहेको हुन्छ',
          body: [
            'Release wax ले mould सतहको सूक्ष्म बनावट भर्दै पातलो barrier बनाउँछ र gelcoat लाई सतहमा टाँसिनबाट रोक्छ। यो सतह उपचार हो, chikna पदार्थ होइन, र निरन्तर film का रूपमा रहेर काम गर्छ — त्यसैले मात्रा भन्दा समान coverage धेरै महत्त्वपूर्ण छ।',
            'त्यसैले mould नै मेकानिकल रूपमा गलत छ भने wax ले पूर्ति गर्दैन। Porosity, क्षति वा भाग समात्ने geometry भएको सतहले release गाह्रो बनाइरहन्छ। Wax तयारीको अन्तिम चरण हो, अघिल्ला चरणको विकल्प होइन।',
          ],
        },
        {
          heading: 'नयाँ र मर्मत गरिएको mould',
          body: [
            'नयाँ mould वा भर्खर मर्मत गरी polish गरिएको भाग नियमित उत्पादनको mould भन्दा फरक व्यवहार गर्छ। सतह बढी खुला हुन्छ र सुरुका coat film बनाउनुको सट्टा सोसिन्छन्। नयाँ mould लाई पुरानै जस्तो व्यवहार गर्नु पहिलो भाग टाँसिनुको सबैभन्दा सामान्य कारण हो।',
            'त्यसैले भाग निकाल्नुअघि धेरै पटक लगाएर सतह तयार पार्नुपर्छ, र नयाँ mould का सुरुका pull सबैभन्दा कठिन हुन्छन् भन्ने अपेक्षा गर्नुपर्छ। कतिपय कारखानाले सुरुका केही भागमा sacrificial film पनि प्रयोग गर्छन्।',
          ],
        },
        {
          heading: 'पातलो coat, haze र buffing',
          body: [
            'Wax पातलो र समान रूपमा लगाइन्छ, carrier उडेपछि haze हुन दिइन्छ, अनि buff गरिन्छ। तीनवटै चरणको आफ्नै काम छ: पातलो प्रयोगले समान film दिन्छ, पर्खाइले film लाई set हुन दिन्छ, र buffing ले अतिरिक्त हटाउँदै barrier छाड्छ।',
            'दुई गल्ती प्रमुख छन्। बाक्लो लगाएर तुरुन्तै buff गर्दा असमान तह बन्छ र भागको सतहमा छाप पर्न सक्छ। धेरै जोडले वा एउटै ठाउँमा धेरै पटक buff गर्दा film नै हट्न सक्छ — mould हेर्दा राम्रो चम्किलो देखिन्छ तर release बिग्रन्छ।',
            'Coat बीचको समय पनि औपचारिकता होइन। हरेक तहलाई आफ्नो अन्तराल चाहिन्छ, र त्यो उत्पादन तालिकाले होइन, उत्पादनको निर्देशनले तोक्छ।',
          ],
        },
        {
          heading: 'Release असफलता कसरी बुझ्ने',
          body: [
            'भाग टाँसिँदा थप wax लगाउनुभन्दा कारण पहिचान गर्नु उपयोगी हुन्छ। कहाँ टाँसियो हेर्नुहोस्: किनारा वा सानो radius मा भए geometry, draft वा detail मा wax नपुगेको संकेत हो। नयाँ mould मा समग्र पकड भए film कम बनेको हो। एउटै ठाउँमा बारम्बार टाँसिए त्यहाँ क्षति वा porosity हुन सक्छ।',
            'Transfer — अर्थात् gelcoat नै mould मा टाँसिएर आउनु — सबैभन्दा टार्नुपर्ने नतिजा हो, किनभने mould मर्मत भाग बनाउनुभन्दा धेरै महँगो हुन्छ। यही जोखिमका कारण तयारीलाई गम्भीर रूपमा लिइन्छ र दोस्रो प्रयास गर्नुअघि निदान गर्नु उपयुक्त हुन्छ।',
          ],
        },
        {
          heading: 'अर्डरअघि के पुष्टि गर्ने',
          body: [
            'Mould सतह, प्रयोग हुने gelcoat वा resin प्रणाली, mould नयाँ हो कि पुरानो, र उत्पादनको आवृत्ति उल्लेख गर्नुहोस्। दैनिक भाग निकाल्ने कारखाना र कहिलेकाहीँ काम गर्नेको आवश्यकता फरक हुन्छ।',
            'तपाईंको सतहका लागि उपयुक्तता, सिफारिस गरिएको coat संख्या र बीचको अन्तराल उत्पादन-अनुसार फरक हुन्छन्; हालको supplier निर्देशनबाट पुष्टि गर्नुहोस्।',
          ],
        },
      ],
    },
  },
]);
