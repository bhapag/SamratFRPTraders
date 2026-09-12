// ISO Gelcoat cluster.
// Gelcoat is the product buyers most often misunderstand at a conceptual level
// rather than a numerical one: it gets treated as paint, as a structural layer,
// or as interchangeable with topcoat. The cluster answers those first, then the
// ISO-versus-GP selection question, then the defects buyers name in enquiries.
// No supplier document for this grade is on file, so no figure is stated.

import {
  commercialPosition,
  docsPending,
  enquiryLink,
  neCommercialPosition,
  neDocsPending,
  neEnquiryLink,
} from './shared.js';

const product = {
  href: '/products/iso-gelcoat/',
  label: 'View ISO Gelcoat',
  description: 'The commercial product page, with what we can and cannot confirm about this grade.',
};
const neProduct = {
  href: '/products/iso-gelcoat/',
  label: 'ISO Gelcoat हेर्नुहोस्',
  description: 'व्यावसायिक उत्पादन पृष्ठ — यस grade बारे के पुष्टि गर्न सकिन्छ र के सकिँदैन।',
};
const gpGelcoat = {
  href: '/products/gp-gelcoat-resin/',
  label: 'View GP Gelcoat Resin',
  description: 'The general-purpose gelcoat, with the supplier documents on file.',
};
const neGpGelcoat = {
  href: '/products/gp-gelcoat-resin/',
  label: 'GP Gelcoat Resin हेर्नुहोस्',
  description: 'सामान्य प्रयोजनको gelcoat — supplier कागजात फाइलमा छन्।',
};

export const isoGelcoatCluster = [
  {
    slug: 'what-is-gelcoat',
    title: 'What Is Gelcoat? The Surface Layer, Not Paint and Not the Laminate',
    description:
      'Gelcoat explained for FRP fabricators and buyers in Nepal: where it sits in a moulding, why it is not paint, how it differs from topcoat and laminating resin, and what it does and does not do for the finished part.',
    category: 'Product Guide',
    icon: 'layers',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'What Is Gelcoat? FRP Surface Layer Explained',
      ogTitle: 'What Is Gelcoat, and What Is It Not?',
      ogDescription:
        'Gelcoat is the moulded surface layer of an FRP part. Why it is not paint, not topcoat and not the structural laminate.',
      keywords: [
        'what is gelcoat',
        'gelcoat vs paint',
        'gelcoat vs topcoat',
        'FRP gelcoat Nepal',
        'gelcoat supplier Nepal',
      ],
    },
    quickFacts: {
      'Where it goes': 'Into the mould first, against the mould face, before any lamination',
      'What it is not': 'Paint, topcoat, or the structural laminating resin',
      'Structural role': 'None — the glass-reinforced laminate behind it carries the load',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: [
      'iso-gelcoat-vs-gp-gelcoat',
      'gelcoat-defects-and-what-causes-them',
      'how-to-select-a-gelcoat',
    ],
    recommendedLinks: [
      product,
      gpGelcoat,
      {
        href: '/applications/gelcoat-for-general-frp-mould-finishing/',
        label: 'Gelcoat for general FRP mould finishing',
        description: 'How the surface layer is used in ordinary moulding work.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is gelcoat just a type of paint?',
        a: 'No, although the shorthand is everywhere. Paint is applied to a finished surface and dries on top of it. Gelcoat goes into the mould first and cures together with the laminate built behind it, so it becomes an integral part of the moulding rather than a film sitting on one.',
      },
      {
        q: 'What is the difference between gelcoat and topcoat?',
        a: 'The usual distinction is wax. A topcoat contains added wax so that it cures tack-free as a final exposed surface. A gelcoat is formulated to stay tacky on its air side so that the laminate applied over it bonds properly. Using one where the other belongs is a common and avoidable error.',
      },
      {
        q: 'Does gelcoat make the part stronger?',
        a: 'No. Gelcoat carries no reinforcement and is not a structural layer. The strength of an FRP part comes from the glass-reinforced laminate behind the gelcoat. Applying a thicker gelcoat does not add strength, and industry troubleshooting literature treats excessive thickness as a cause of cracking rather than a benefit.',
      },
      {
        q: 'Can I just add pigment to laminating resin instead of buying gelcoat?',
        a: 'That is not what a gelcoat is. A gelcoat is a separately formulated system — thixotropic so it will hold on a vertical mould face without running, and filled and pigmented for an opaque, durable surface. Pigmented laminating resin does not behave the same way in the mould or in service.',
      },
      {
        q: 'Does a gelcoat make the part waterproof and weatherproof for good?',
        a: 'It is the layer that takes the weather, the cleaning and the abrasion, and it resists bulk water penetration. It is not permanent. Industry sources describe gelcoat surfaces as degrading under prolonged sunlight and as permitting water-vapour transmission over long periods, which is why maintenance is treated as normal rather than optional.',
      },
      {
        q: 'Do you have a data sheet for ISO Gelcoat?',
        a: 'Not yet. The supplier Technical Data Sheet and Safety Data Sheet for that grade are not currently in our document library, so no figures for it appear on this site. GP Gelcoat Resin, the general-purpose grade, does have its supplier documents on file.',
      },
    ],
    sections: [
      {
        heading: 'Where gelcoat actually sits',
        body: [
          'In an open mould, the gelcoat goes in first, straight against the mould face, before any glass or laminating resin. It is allowed to gel, and then the reinforcement is wetted out and built up behind it. When the part is released, the face that was against the mould is the gelcoat, and that is the surface the customer sees, cleans and weathers.',
          'Everything structural is behind it. That single fact resolves most of the confusion around the product: the gelcoat is a surface, and the part is the laminate. Once that ordering is clear, the rest of the questions people ask about gelcoat answer themselves more easily.',
        ],
      },
      {
        heading: 'Three things it is repeatedly confused with',
        body: [
          'Paint is the most common. Paint goes onto a finished surface and dries there, and it can be stripped and redone. Gelcoat goes into a mould before the part exists and cures as part of it. You cannot strip gelcoat off a moulding the way you strip paint off a panel, because it is not sitting on the part — it is the face of the part.',
          'Topcoat is the most costly confusion because it produces a real defect. A topcoat has wax in it so that it cures tack-free, which is exactly what you want on a final exposed surface and exactly what you do not want under a laminate. A gelcoat stays tacky on its air side so that the laminate bonds to it. Buy the wrong one and the bond is the thing that suffers.',
          'Laminating resin is the third. A gelcoat is thixotropic so that it clings to a vertical or curved mould face without sagging, and it is filled and pigmented for an opaque surface. Laminating resin is formulated to wet out fibre. Adding pigment to a laminating resin does not turn it into a gelcoat.',
        ],
      },
      {
        heading: 'What the gelcoat is actually doing for you',
        body: [
          'It is doing cosmetic and protective work. It gives the moulding a uniform colour and finish that does not depend on how the laminate behind it happened to lay up, and it puts a resin-rich layer between the reinforcement and the outside world so that glass fibres are not sitting at the exposed surface.',
          'That second job is worth understanding, because it is what fails visibly over years outdoors. As a surface weathers, the resin erodes faster than the glass, and the fibres begin to show through. A sound, correctly applied gelcoat delays that. A thin or poorly cured one delays it less.',
          'What it is not doing is carrying load, adding stiffness, or making a thin laminate into a thick one. If a part flexes too much or cracks under load, the answer is in the laminate schedule, not in the gelcoat.',
        ],
      },
      {
        heading: 'Thicker is not better',
        body: [
          'The instinct that more gelcoat means more protection is understandable and wrong. Composites troubleshooting literature consistently treats excessive or uneven film thickness as a direct cause of defects: cracking and crazing, pre-release from the mould, sagging on vertical faces, and uneven cure.',
          'The same literature treats consistency as the thing that matters. An even film, correctly cured before lamination, does the job. An over-thick film introduces stress into a layer that has no reinforcement to carry it, and it cracks.',
          'Film thickness, catalyst quantity and timing before lamination are all grade-specific and belong to the manufacturer’s documentation for the gelcoat you are actually using. This page deliberately gives no figures for them.',
        ],
      },
      {
        heading: 'What we supply, and in what role',
        body: [
          'Samrat FRP Traders supplies and imports gelcoats for the Nepal market from Samrat Poly Resins, India. We are a trader, supplier, importer and reseller. We do not manufacture, formulate or test gelcoat, and we do not issue approvals for any application.',
          'Two grades sit in the range. GP Gelcoat Resin is the general-purpose orthophthalic route and has its supplier Technical Data Sheet and Safety Data Sheet on file. ISO Gelcoat is the isophthalic route, newer to the range, and its supplier documents are not yet on file — which is why you will find no viscosity, thixotropic index, film thickness or gel time figures for it anywhere on this site.',
        ],
      },
    ],
    ne: {
      title: 'Gelcoat के हो? सतहको तह — रङ पनि होइन, laminate पनि होइन',
      description:
        'नेपालका FRP fabricator र खरिदकर्ताका लागि gelcoat: moulding मा यो कहाँ बस्छ, यो किन रङ होइन, topcoat र laminating resin भन्दा कसरी फरक छ, र तयारी भागका लागि यसले के गर्छ र के गर्दैन।',
      seo: {
        title: 'Gelcoat के हो? FRP सतह तहको व्याख्या',
        ogTitle: 'Gelcoat के हो, र के होइन?',
        ogDescription:
          'Gelcoat FRP भागको moulded सतह तह हो। यो किन रङ, topcoat वा संरचनात्मक laminate होइन।',
        keywords: [
          'gelcoat के हो',
          'gelcoat र रङ फरक',
          'gelcoat बनाम topcoat',
          'FRP gelcoat नेपाल',
        ],
      },
      quickFacts: {
        'कहाँ लगाइन्छ': 'Lamination अघि सबैभन्दा पहिले साँचोभित्र, साँचोकै सतहमा',
        'यो के होइन': 'रङ, topcoat, वा संरचनात्मक laminating resin',
        'संरचनात्मक भूमिका': 'छैन — पछाडिको glass-reinforced laminate ले भार बोक्छ',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        neProduct,
        neGpGelcoat,
        {
          href: '/applications/gelcoat-for-general-frp-mould-finishing/',
          label: 'सामान्य FRP mould finishing का लागि gelcoat',
          description: 'सामान्य moulding काममा सतह तह कसरी प्रयोग हुन्छ।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के gelcoat भनेको रङकै एक प्रकार हो?',
          a: 'होइन, यद्यपि यो भनाइ सर्वत्र सुनिन्छ। रङ बनिसकेको सतहमा लगाइन्छ र त्यसैमाथि सुक्छ। Gelcoat भने पहिले साँचोभित्र जान्छ र पछाडि बनाइएको laminate सँगै जम्छ, त्यसैले यो moulding माथि बसेको पत्र होइन, moulding कै अभिन्न भाग बन्छ।',
        },
        {
          q: 'Gelcoat र topcoat बीच के फरक छ?',
          a: 'सामान्य फरक wax को हो। Topcoat मा wax मिसाइएको हुन्छ जसले अन्तिम खुला सतहका रूपमा टाँसिने नभई सुक्खा जम्न दिन्छ। Gelcoat भने हावातर्फको सतह अलिकति टाँसिने गरी बनाइन्छ, ताकि माथि लगाइने laminate राम्ररी जोडियोस्। एउटाको ठाउँमा अर्को प्रयोग गर्नु सामान्य तर टार्न सकिने गल्ती हो।',
        },
        {
          q: 'के gelcoat ले भाग बलियो बनाउँछ?',
          a: 'बनाउँदैन। Gelcoat मा reinforcement हुँदैन र यो संरचनात्मक तह होइन। FRP भागको बल पछाडिको glass-reinforced laminate बाट आउँछ। बाक्लो gelcoat ले बल थप्दैन, र उद्योगका troubleshooting कागजातले अत्यधिक मोटाइलाई फाइदा होइन, चर्किने कारण मान्छन्।',
        },
        {
          q: 'Gelcoat किन्नुको सट्टा laminating resin मै pigment हाले हुँदैन?',
          a: 'Gelcoat त्यस्तो कुरा होइन। Gelcoat छुट्टै बनाइएको प्रणाली हो — ठाडो साँचोको सतहमा नबगी अडिन thixotropic, र अपारदर्शी तथा टिकाउ सतहका लागि filled र pigmented। Pigment मिसाइएको laminating resin साँचोमा पनि, सेवामा पनि त्यसरी व्यवहार गर्दैन।',
        },
        {
          q: 'के gelcoat ले भागलाई सधैँका लागि पानी र मौसम सहने बनाउँछ?',
          a: 'मौसम, सफाइ र घर्षण सहने तह यही हो, र यसले पानीको प्रवेश रोक्छ। तर यो स्थायी होइन। उद्योगका स्रोतहरूले लामो घाममा gelcoat सतह बिस्तारै बिग्रने र लामो अवधिमा जलवाष्प आरपार जान सक्ने वर्णन गर्छन् — त्यसैले मर्मत-सम्भार ऐच्छिक होइन, सामान्य कुरा मानिन्छ।',
        },
        {
          q: 'के ISO Gelcoat को data sheet छ?',
          a: 'अहिले छैन। त्यस grade को supplier Technical Data Sheet र Safety Data Sheet हाम्रो कागजात पुस्तकालयमा छैनन्, त्यसैले यस साइटमा त्यसका अंक कतै छैनन्। सामान्य प्रयोजनको GP Gelcoat Resin का supplier कागजात भने फाइलमा छन्।',
        },
      ],
      sections: [
        {
          heading: 'Gelcoat वास्तवमा कहाँ बस्छ',
          body: [
            'खुला साँचोमा gelcoat सबैभन्दा पहिले, सिधै साँचोको सतहमा जान्छ — कुनै glass वा laminating resin अघि। यसलाई जम्न दिइन्छ, त्यसपछि reinforcement भिजाएर पछाडि तह थपिन्छ। भाग निकाल्दा साँचोतर्फ रहेको अनुहार नै gelcoat हो, र ग्राहकले देख्ने, सफा गर्ने र मौसम खप्ने सतह त्यही हो।',
            'संरचनात्मक सबै कुरा यसको पछाडि हुन्छ। यही एउटा तथ्यले यस उत्पादनसम्बन्धी अधिकांश अन्योल हटाउँछ: gelcoat सतह हो, र भाग चाहिँ laminate हो। यो क्रम स्पष्ट भएपछि gelcoat बारेका बाँकी प्रश्न आफैँ सजिलो हुन्छन्।',
          ],
        },
        {
          heading: 'बारम्बार झुक्किने तीन कुरा',
          body: [
            'रङसँगको झुक्याइ सबैभन्दा सामान्य हो। रङ बनिसकेको सतहमा लगाइन्छ र त्यहीँ सुक्छ, अनि खुर्केर फेरि लगाउन सकिन्छ। Gelcoat भाग बन्नुअघि नै साँचोभित्र जान्छ र भागकै अंश बनेर जम्छ। प्यानलबाट रङ खुर्के जस्तो gelcoat खुर्कन मिल्दैन, किनभने यो भागमाथि बसेको होइन — भागकै अनुहार हो।',
            'Topcoat सँगको झुक्याइ सबैभन्दा महँगो पर्छ, किनभने यसले वास्तविक दोष निम्त्याउँछ। Topcoat मा wax हुन्छ जसले टाँसिन नदिई जमाउँछ — अन्तिम खुला सतहमा त्यही चाहिन्छ, र laminate मुनि ठ्याक्कै त्यही चाहिँदैन। Gelcoat हावातर्फ टाँसिने रहन्छ ताकि laminate जोडियोस्। गलत उत्पादन किन्दा बिग्रने कुरा त्यही जोड हो।',
            'तेस्रो laminating resin हो। Gelcoat thixotropic हुन्छ ताकि ठाडो वा बाङ्गो साँचोको सतहमा नझरी अडियोस्, र अपारदर्शी सतहका लागि filled तथा pigmented हुन्छ। Laminating resin चाहिँ fibre भिजाउन बनाइएको हुन्छ। Laminating resin मा pigment हाल्दैमा त्यो gelcoat बन्दैन।',
          ],
        },
        {
          heading: 'Gelcoat ले तपाईंका लागि वास्तवमा के गरिरहेको छ',
          body: [
            'यसले सजावटी र सुरक्षात्मक काम गर्छ। पछाडिको laminate जसरी लागेको भए पनि त्यसमा भर नपर्ने एकनास रङ र फिनिस दिन्छ, र reinforcement तथा बाहिरी वातावरणबीच resin-rich तह राख्छ ताकि glass fibre खुला सतहमा नआऊन्।',
            'दोस्रो काम बुझ्नु जरुरी छ, किनभने वर्षौँ बाहिर रहँदा देखिने गरी बिग्रने यही हो। सतह मौसमले खिइँदै जाँदा resin glass भन्दा छिटो खिइन्छ र fibre देखिन थाल्छन्। राम्रो र ठीकसँग लगाइएको gelcoat ले त्यसलाई ढिलो बनाउँछ। पातलो वा राम्ररी नजमेकोले कम ढिलो बनाउँछ।',
            'यसले नगर्ने काम भनेको भार बोक्ने, कडापन थप्ने वा पातलो laminate लाई बाक्लो बनाउने हो। भाग धेरै लच्किन्छ वा भारमा चर्किन्छ भने उत्तर laminate को schedule मा छ, gelcoat मा होइन।',
          ],
        },
        {
          heading: 'बाक्लो भए राम्रो होइन',
          body: [
            'बढी gelcoat भए बढी सुरक्षा भन्ने अनुमान स्वाभाविक भए पनि गलत हो। Composites का troubleshooting कागजातहरूले अत्यधिक वा असमान मोटाइलाई दोषको सीधा कारण मान्छन्: चर्किने र crazing, साँचोबाट समयअघि छुट्ने (pre-release), ठाडो सतहमा बग्ने, र असमान cure।',
            'तिनै कागजातले एकरूपतालाई महत्त्वपूर्ण मान्छन्। Lamination अघि ठीकसँग जमेको एकनास तहले काम गर्छ। अत्यधिक बाक्लो तहले reinforcement नभएको तहमा तनाव थप्छ, र त्यो चर्किन्छ।',
            'Film को मोटाइ, catalyst को मात्रा र lamination अघिको समय — सबै grade-अनुसार फरक हुन्छन् र तपाईंले प्रयोग गर्ने gelcoat कै निर्माता कागजातको विषय हुन्। यस पृष्ठले ती अंक जानाजान दिँदैन।',
          ],
        },
        {
          heading: 'हामी के आपूर्ति गर्छौं, कुन भूमिकामा',
          body: [
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट नेपाली बजारका लागि gelcoat आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी gelcoat उत्पादन, formulation वा परीक्षण गर्दैनौँ, र कुनै प्रयोगका लागि approval जारी गर्दैनौँ।',
            'श्रेणीमा दुई grade छन्। GP Gelcoat Resin सामान्य प्रयोजनको orthophthalic बाटो हो र यसका supplier Technical Data Sheet तथा Safety Data Sheet फाइलमा छन्। ISO Gelcoat isophthalic बाटो हो, श्रेणीमा नयाँ, र यसका supplier कागजात अझै फाइलमा छैनन् — त्यसैले यस साइटमा त्यसका viscosity, thixotropic index, film मोटाइ वा gel time का अंक कतै भेटिँदैनन्।',
          ],
        },
      ],
    },
  },

  // --------------------------------------------- ISO vs GP gelcoat
  {
    slug: 'iso-gelcoat-vs-gp-gelcoat',
    title: 'ISO Gelcoat vs GP Gelcoat: What the Exposure Decides',
    description:
      'Isophthalic and general-purpose gelcoat compared for Nepal fabricators — what actually differs in the chemistry, which parts justify the isophthalic route, and why the two are impossible to tell apart once cured.',
    category: 'Comparison Guide',
    icon: 'compare',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'ISO Gelcoat vs GP Gelcoat | Selection Comparison',
      ogTitle: 'ISO Gelcoat vs GP Gelcoat: Which One, and When',
      ogDescription:
        'Isophthalic and general-purpose gelcoat compared by exposure rather than price. Both supplied in Nepal by Samrat FRP Traders.',
      keywords: [
        'ISO gelcoat vs GP gelcoat',
        'isophthalic gelcoat Nepal',
        'gelcoat for boat hull',
        'gelcoat for bathware',
        'gelcoat selection guide',
      ],
    },
    quickFacts: {
      'The difference': 'The acid in the gelcoat’s polyester backbone — isophthalic against orthophthalic',
      'What it buys': 'Gloss retention and resistance to water in long or immersed service',
      'Visual check': 'None — the two are indistinguishable once pigmented and cured',
      'Verification route': 'The manufacturer’s document naming the resin type, plus traceability',
      'Document status': docsPending,
    },
    relatedSlugs: ['what-is-gelcoat', 'how-to-select-a-gelcoat', 'gelcoat-defects-and-what-causes-them'],
    recommendedLinks: [
      product,
      gpGelcoat,
      {
        href: '/resources/what-is-gelcoat/',
        label: 'What is gelcoat?',
        description: 'The background explainer, if the role of the layer itself is the open question.',
      },
      enquiryLink,
    ],
    comparisonTable: {
      title: 'ISO Gelcoat and GP Gelcoat side by side',
      note: 'This compares gelcoat families in general terms. No figures are given for ISO Gelcoat because no supplier document for that grade is on file yet. Confirm any specific grade against the manufacturer’s current documentation.',
      headers: ['Buyer question', 'ISO (isophthalic) gelcoat', 'GP (orthophthalic) gelcoat'],
      rows: [
        ['Backbone chemistry', 'Built on isophthalic acid', 'Built on orthophthalic acid'],
        [
          'Positioned for',
          'Gloss retention and water resistance in demanding or immersed service',
          'General mould finishing where exposure is moderate',
        ],
        [
          'Typical parts',
          'Boats and marine parts, pools and water slides, bathware, external panels',
          'Sheltered indoor mouldings, general FRP parts, cosmetic surfaces',
        ],
        [
          'Behaviour in continuous immersion',
          'The route the industry specifies for this duty',
          'Described in marine literature as more prone to osmotic blistering over time',
        ],
        ['Application method', 'Brush or spray, as with other gelcoats', 'Brush or spray'],
        ['Relative cost', 'Higher, driven by the acid', 'Lower'],
        [
          'Can you tell them apart on the part',
          'No — identical in appearance once cured',
          'No — identical in appearance once cured',
        ],
        [
          'Document position on this site',
          'No supplier TDS or SDS on file yet',
          'Supplier TDS and SDS on file and linked from the product page',
        ],
      ],
    },
    faqs: [
      {
        q: 'Can I see the difference between an ISO and a GP gelcoat on a finished part?',
        a: 'No. Once pigmented and cured they look identical, which is precisely why this is a documentation question rather than an inspection one. If a customer requires an isophthalic gelcoat, the evidence is the manufacturer’s document for the grade used and your own traceability, not the appearance of the moulding.',
      },
      {
        q: 'Is an ISO gelcoat worth the extra cost?',
        a: 'It depends on the exposure. For a hull that stays in the water, a pool, a water slide, bathware or an external panel that must hold its gloss for years, the isophthalic route is what the industry specifies and the cost buys service life. For a sheltered indoor moulding it usually buys nothing the part will use.',
      },
      {
        q: 'Will a GP gelcoat blister if the part is permanently in water?',
        a: 'Marine literature associates orthophthalic chemistry with higher water absorption and a greater reported susceptibility to osmotic blistering in immersion service. That is a tendency described across the industry rather than a certainty for any one part, and it is the main reason isophthalic gelcoats exist.',
      },
      {
        q: 'Is ISO/NPG the same as ISO?',
        a: 'No. NPG refers to neopentyl glycol, a further modification described as a step beyond isophthalic alone and generally reserved for the most demanding marine and immersion work. If a specification names ISO/NPG, treat it as a distinct requirement.',
      },
      {
        q: 'Does the gelcoat choice replace the decision about the laminating resin behind it?',
        a: 'No. They are separate decisions. A gelcoat is a surface layer with no structural role, so the resin used in the laminate behind it is chosen on its own terms. A part in demanding service often needs attention to both, and one does not compensate for the other.',
      },
    ],
    sections: [
      {
        heading: 'The same decision as the laminating resins, one layer out',
        body: [
          'If you already understand why an isophthalic laminating resin is specified for wet service, this comparison will feel familiar, because it is the same chemistry argument applied to the surface layer. Orthophthalic and isophthalic acid produce different polyester backbones, and the isophthalic one is described across the industry as more resistant to hydrolysis.',
          'In a gelcoat that shows up as gloss that holds longer and a surface less prone to blistering and dulling where the part lives outdoors or stays wet. It is a durability argument, not a strength or appearance argument on day one. Both gelcoats look good when the part comes out of the mould. The difference is what the surface looks like in a few years.',
        ],
      },
      {
        heading: 'Which parts justify it',
        body: [
          'The isophthalic route is the industry answer for boats and marine components, swimming pools and water slides, bathware and sanitaryware, and external panels that must keep their finish through years of sun and rain. These are the parts where the surface is the product: if the gloss goes, the part looks finished long before it is structurally finished.',
          'A general-purpose gelcoat is a reasonable choice for sheltered indoor mouldings and parts where the surface is cosmetic but not weathered. Specifying an isophthalic gelcoat there is not wrong, it simply costs more without changing what the part does.',
          'One thing worth separating out: resistance to weather and resistance to immersion are not the same requirement. A gelcoat suited to one is not automatically suited to the other, so describe the actual exposure when you enquire rather than asking for the "better" gelcoat.',
        ],
      },
      {
        heading: 'Why this has to be a paperwork decision',
        body: [
          'Cured gelcoats do not announce their chemistry. An isophthalic and an orthophthalic gelcoat in the same colour are indistinguishable on the finished moulding, by eye and by any check a buyer can perform on receipt. That has a practical consequence: if the requirement matters, it has to be carried by documents.',
          'That means asking for the manufacturer’s document that names the resin type for the grade being supplied, keeping the batch reference with the job record, and requesting a Certificate of Analysis where your own quality system needs batch evidence. A product name on an invoice is a description, not a verification.',
          'It also means being careful with claims in the other direction. A supplier’s ISO 9001 certificate is about their management system. It is not evidence that a given gelcoat is isophthalic.',
        ],
      },
      {
        heading: 'What we can document today',
        body: [
          'Samrat FRP Traders supplies and imports both gelcoat routes for Nepal from Samrat Poly Resins, India. We are the trader, supplier, importer and reseller, and we do not manufacture, formulate or test gelcoat.',
          'GP Gelcoat Resin has its supplier Technical Data Sheet and Safety Data Sheet on file, and both are linked from its product page. ISO Gelcoat does not yet, so no figures for it are published anywhere on this site. If your decision depends on a published property of the isophthalic grade, raise it at the enquiry stage and we will put the question to the supplier rather than fill the gap ourselves.',
        ],
      },
    ],
    ne: {
      title: 'ISO Gelcoat बनाम GP Gelcoat: सम्पर्क-अवस्थाले निर्णय गर्छ',
      description:
        'नेपाली fabricator का लागि isophthalic र सामान्य प्रयोजनको gelcoat को तुलना — रसायनमा वास्तवमा के फरक छ, कुन भागमा isophthalic बाटो सार्थक हुन्छ, र जमेपछि यी दुई किन छुट्याउनै सकिँदैन।',
      seo: {
        title: 'ISO Gelcoat बनाम GP Gelcoat | छनोट तुलना',
        ogTitle: 'ISO Gelcoat बनाम GP Gelcoat: कुन, कहिले',
        ogDescription:
          'मूल्यको होइन, सम्पर्क-अवस्थाको आधारमा isophthalic र सामान्य प्रयोजनको gelcoat तुलना। दुवै Samrat FRP Traders द्वारा नेपालमा आपूर्ति।',
        keywords: [
          'ISO gelcoat बनाम GP gelcoat',
          'isophthalic gelcoat नेपाल',
          'डुङ्गाका लागि gelcoat',
          'bathware का लागि gelcoat',
        ],
      },
      quickFacts: {
        'फरक कहाँ': 'Gelcoat को polyester संरचनाको acid — isophthalic कि orthophthalic',
        'यसले के दिन्छ': 'लामो वा डुबेको सेवामा चमक टिकाउ र पानी सहने क्षमता',
        'आँखाले जाँच': 'हुँदैन — रङ लागेर जमेपछि दुवै उस्तै देखिन्छन्',
        'पुष्टिको बाटो': 'Resin type उल्लेख भएको निर्माता कागजात र traceability',
        'कागजात अवस्था': neDocsPending,
      },
      recommendedLinks: [
        neProduct,
        neGpGelcoat,
        {
          href: '/resources/what-is-gelcoat/',
          label: 'Gelcoat के हो?',
          description: 'यो तहकै भूमिका प्रश्न हो भने पृष्ठभूमि व्याख्या।',
        },
        neEnquiryLink,
      ],
      comparisonTable: {
        title: 'ISO Gelcoat र GP Gelcoat आमनेसामने',
        note: 'यो तुलना gelcoat परिवारको सामान्य वर्णन हो। ISO Gelcoat का अंक दिइएका छैनन् किनभने त्यस grade को supplier कागजात अझै फाइलमा छैन। कुनै grade निर्माताको हालको कागजातबाट पुष्टि गर्नुहोस्।',
        headers: ['खरिदकर्ताको प्रश्न', 'ISO (isophthalic) gelcoat', 'GP (orthophthalic) gelcoat'],
        rows: [
          ['संरचनाको रसायन', 'Isophthalic acid मा बनेको', 'Orthophthalic acid मा बनेको'],
          [
            'कुन प्रयोगका लागि',
            'कडा वा डुबेको सेवामा चमक टिकाउ र पानी प्रतिरोध',
            'सम्पर्क मध्यम भएको सामान्य mould finishing',
          ],
          [
            'सामान्य भागहरू',
            'डुङ्गा र समुद्री भाग, पुल र water slide, bathware, बाहिरी प्यानल',
            'छोपिएका भित्री moulding, सामान्य FRP भाग, सजावटी सतह',
          ],
          [
            'निरन्तर डुबेको अवस्थामा व्यवहार',
            'यस्तो कामका लागि उद्योगले तोक्ने बाटो',
            'समुद्री साहित्यमा समयक्रममा osmotic blistering को सम्भावना बढी भनिएको',
          ],
          ['लगाउने तरिका', 'अन्य gelcoat जस्तै ब्रस वा स्प्रे', 'ब्रस वा स्प्रे'],
          ['सापेक्षिक लागत', 'बढी, acid कै कारण', 'कम'],
          [
            'भागमा छुट्याउन सकिन्छ?',
            'सकिँदैन — जमेपछि देखावट उस्तै',
            'सकिँदैन — जमेपछि देखावट उस्तै',
          ],
          [
            'यस साइटमा कागजात अवस्था',
            'Supplier TDS/SDS अझै फाइलमा छैन',
            'Supplier TDS र SDS फाइलमा छन् र उत्पादन पृष्ठबाट लिंक गरिएका छन्',
          ],
        ],
      },
      faqs: [
        {
          q: 'तयारी भागमा ISO र GP gelcoat को फरक देख्न सकिन्छ?',
          a: 'सकिँदैन। रङ लागेर जमेपछि दुवै उस्तै देखिन्छन् — त्यसैले यो निरीक्षणको होइन, कागजातको प्रश्न हो। ग्राहकले isophthalic gelcoat मागेको छ भने प्रमाण भनेको प्रयोग भएको grade कै निर्माता कागजात र तपाईंको आफ्नै traceability हो, moulding को देखावट होइन।',
        },
        {
          q: 'के ISO gelcoat को थप लागत सार्थक हुन्छ?',
          a: 'सम्पर्क-अवस्थामा भर पर्छ। पानीमै रहने hull, पुल, water slide, bathware वा वर्षौँ चमक टिकाउनुपर्ने बाहिरी प्यानलका लागि isophthalic बाटो नै उद्योगले तोक्ने हो र लागतले सेवा-अवधि किन्छ। छोपिएको भित्री moulding मा भने भागले प्रयोग नगर्ने गुणमा खर्च हुन्छ।',
        },
        {
          q: 'भाग सधैँ पानीमा रहे GP gelcoat मा फोका आउँछ?',
          a: 'समुद्री साहित्यले orthophthalic रसायनलाई बढी पानी सोस्ने र डुबेको सेवामा osmotic blistering को सम्भावना बढी भएको बताउँछ। यो उद्योगभर वर्णन गरिएको प्रवृत्ति हो, कुनै एक भागका लागि निश्चितता होइन — र isophthalic gelcoat हुनुको मुख्य कारण पनि यही हो।',
        },
        {
          q: 'के ISO/NPG र ISO उस्तै हो?',
          a: 'होइन। NPG ले neopentyl glycol जनाउँछ, जुन isophthalic मात्रभन्दा अर्को पाइला मानिन्छ र प्रायः सबैभन्दा कडा समुद्री तथा डुबेको कामका लागि राखिन्छ। Specification मा ISO/NPG लेखिएको छ भने त्यसलाई छुट्टै माग मान्नुहोस्।',
        },
        {
          q: 'के gelcoat को छनोटले पछाडिको laminating resin को निर्णय पनि टुंग्याउँछ?',
          a: 'टुंग्याउँदैन। यी छुट्टै निर्णय हुन्। Gelcoat संरचनात्मक भूमिका नभएको सतह तह हो, त्यसैले पछाडिको laminate को resin आफ्नै आधारमा छानिन्छ। कडा सेवामा रहने भागलाई प्रायः दुवैमा ध्यान चाहिन्छ, र एउटाले अर्कोको कमी पूर्ति गर्दैन।',
        },
      ],
      sections: [
        {
          heading: 'Laminating resin कै निर्णय, एक तह बाहिर',
          body: [
            'भिज्ने सेवाका लागि isophthalic laminating resin किन तोकिन्छ भन्ने बुझिसक्नुभएको छ भने यो तुलना परिचित लाग्नेछ, किनभने यो उही रासायनिक तर्क सतह तहमा लागू भएको हो। Orthophthalic र isophthalic acid ले फरक polyester संरचना बनाउँछन्, र isophthalic लाई उद्योगभर बढी hydrolysis सहने भनिन्छ।',
            'Gelcoat मा यो कुरा लामो समय टिक्ने चमक र बाहिर वा भिजिरहने ठाउँमा कम फोका तथा कम धमिलोपनका रूपमा देखिन्छ। यो पहिलो दिनको बल वा देखावटको तर्क होइन, टिकाउपनको तर्क हो। साँचोबाट निस्कँदा दुवै gelcoat राम्रै देखिन्छन्। फरक केही वर्षपछि सतह कस्तो देखिन्छ भन्नेमा हुन्छ।',
          ],
        },
        {
          heading: 'कुन भागमा सार्थक हुन्छ',
          body: [
            'डुङ्गा र समुद्री भाग, स्विमिङ पुल र water slide, bathware तथा sanitaryware, अनि वर्षौँ घाम-पानी खाएर पनि फिनिस जोगाउनुपर्ने बाहिरी प्यानल — यी सबैका लागि isophthalic बाटो नै उद्योगको उत्तर हो। यी त्यस्ता भाग हुन् जहाँ सतह नै उत्पादन हो: चमक गयो भने भाग संरचनात्मक रूपमा सकिनुभन्दा धेरै पहिले नै सकिएको देखिन्छ।',
            'छोपिएका भित्री moulding र सतह सजावटी मात्र भएका, मौसम नखाने भागका लागि सामान्य प्रयोजनको gelcoat व्यावहारिक छनोट हो। त्यहाँ isophthalic gelcoat तोक्नु गलत होइन, तर भागले गर्ने काम नफेरी लागत मात्र बढ्छ।',
            'एउटा कुरा छुट्याउनु जरुरी छ: मौसम सहनु र डुबाइ सहनु एउटै माग होइनन्। एउटाका लागि उपयुक्त gelcoat अर्काका लागि स्वतः उपयुक्त हुँदैन — त्यसैले सोध्दा "राम्रो" gelcoat माग्नुको सट्टा वास्तविक सम्पर्क-अवस्था बताउनुहोस्।',
          ],
        },
        {
          heading: 'यो किन कागजातकै निर्णय हुनुपर्छ',
          body: [
            'जमेको gelcoat ले आफ्नो रसायन बताउँदैन। एउटै रङको isophthalic र orthophthalic gelcoat तयारी moulding मा आँखाले पनि, प्राप्तिका बेला खरिदकर्ताले गर्न सक्ने कुनै जाँचले पनि छुट्याउन सकिँदैन। यसको व्यावहारिक अर्थ छ: माग महत्त्वपूर्ण छ भने त्यसलाई कागजातले बोक्नुपर्छ।',
            'अर्थात् आपूर्ति हुने grade को resin type उल्लेख भएको निर्माता कागजात माग्नुहोस्, batch सन्दर्भ काम-रेकर्डसँगै राख्नुहोस्, र आफ्नो गुणस्तर प्रणालीलाई batch प्रमाण चाहिन्छ भने Certificate of Analysis माग्नुहोस्। Invoice मा लेखिएको उत्पादनको नाम विवरण हो, पुष्टि होइन।',
            'उल्टो दिशाका दाबीमा पनि सतर्क हुनुपर्छ। आपूर्तिकर्ताको ISO 9001 प्रमाणपत्र उनीहरूको व्यवस्थापन प्रणालीबारे हो। कुनै gelcoat isophthalic हो भन्ने प्रमाण होइन।',
          ],
        },
        {
          heading: 'आज हामी के कागजात देखाउन सक्छौँ',
          body: [
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट नेपालका लागि दुवै gelcoat बाटो आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ; gelcoat उत्पादन, formulation वा परीक्षण गर्दैनौँ।',
            'GP Gelcoat Resin का supplier Technical Data Sheet र Safety Data Sheet फाइलमा छन् र दुवै उत्पादन पृष्ठबाट लिंक गरिएका छन्। ISO Gelcoat का अझै छैनन्, त्यसैले यस साइटमा त्यसका अंक कतै प्रकाशित छैनन्। तपाईंको निर्णय isophthalic grade को कुनै प्रकाशित गुणमा भर पर्छ भने सोधपुछकै बेला उठाउनुहोस् — हामी आफैँ खाली ठाउँ भर्नुको सट्टा आपूर्तिकर्तालाई सोध्नेछौँ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------- gelcoat defects
  {
    slug: 'gelcoat-defects-and-what-causes-them',
    title: 'Gelcoat Defects and What Causes Them: Fisheyes, Pinholes, Pre-Release and the Rest',
    description:
      'The gelcoat faults fabricators name in enquiries, and what composites troubleshooting literature attributes each of them to — so that a surface problem gets diagnosed as a process, mould or timing issue rather than blamed on the wrong material.',
    category: 'Troubleshooting Guide',
    icon: 'shield',
    readingTime: '7 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'Gelcoat Defects and Their Causes | Troubleshooting Guide',
      ogTitle: 'Gelcoat Defects: Fisheyes, Pinholes, Pre-Release',
      ogDescription:
        'What the common gelcoat faults are usually caused by, according to composites troubleshooting literature. A buyer-level guide from Samrat FRP Traders.',
      keywords: [
        'gelcoat defects',
        'gelcoat fisheyes',
        'gelcoat pinholing',
        'gelcoat pre-release',
        'alligatoring gelcoat',
        'gelcoat troubleshooting Nepal',
      ],
    },
    quickFacts: {
      'Most faults are not resin faults': 'Contamination, film thickness, cure state and timing dominate',
      'Thickness is the recurring culprit': 'Excessive or uneven film is linked to cracking, sagging and pre-release',
      'Timing matters as much': 'Laminating too early over an under-cured film causes its own fault',
      'What this guide is not': 'A repair procedure, a dosage table or a warranty position',
    },
    relatedSlugs: ['what-is-gelcoat', 'iso-gelcoat-vs-gp-gelcoat', 'how-to-select-a-gelcoat'],
    recommendedLinks: [
      product,
      gpGelcoat,
      {
        href: '/resources/what-is-gelcoat/',
        label: 'What is gelcoat?',
        description: 'Where the layer sits and what it is for, if that is the underlying question.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'My gelcoat has small craters right after spraying. What is that?',
        a: 'That pattern is generally described as fisheyes or de-wetting, and troubleshooting literature attributes it to a surface-tension mismatch, usually from contamination on the mould: oil, silicone, or an excess or residue of release agent. It is a mould-preparation issue far more often than a gelcoat issue.',
      },
      {
        q: 'What causes pinholes and porosity in the gelcoat surface?',
        a: 'Air trapped in or under the film. Sources point to atomisation and spray technique, viscosity, and application practice that does not let entrained air escape before the film gels. It is a process variable rather than a property of the resin family.',
      },
      {
        q: 'The gelcoat wrinkled or cracked into a pattern like alligator skin. Why?',
        a: 'Alligatoring is generally attributed to laminating over a gelcoat film that had not cured enough to take it, or to uneven cure caused by inconsistent thickness, catalyst or temperature. It is a timing and cure-state fault rather than evidence that the wrong gelcoat was supplied.',
      },
      {
        q: 'The part came out of the mould dull and distorted in patches. What is pre-release?',
        a: 'Pre-release describes the cured gelcoat film separating from the mould face before the part is ready to come out, leaving a dull or distorted area. The causes usually cited are uneven or excessive film thickness, an unusually fast cure, or lamination delayed too long after the gelcoat gelled.',
      },
      {
        q: 'Is blistering the same problem as pinholing?',
        a: 'No, and it is worth keeping them apart. Blistering in production is generally linked to trapped air or moisture and incomplete cure beneath the surface. Blistering that appears later, on a part that has been immersed in service, is discussed separately in marine literature as hydrolysis of the resin’s ester linkages, and is reported as more common with orthophthalic than with isophthalic chemistry.',
      },
      {
        q: 'Can you tell me from a photograph which fault I have?',
        a: 'No. We are a trader, supplier, importer and reseller. We do not inspect mouldings, diagnose production problems or issue technical rulings, and a photograph cannot show mould preparation, film thickness, catalyst level, workshop temperature or timing. Take a fault like this to the gelcoat manufacturer’s own troubleshooting guidance and to whoever supervises your process.',
      },
    ],
    sections: [
      {
        heading: 'Why this guide exists',
        body: [
          'When a moulding comes out of the mould with a surface fault, the first instinct is often to suspect the material. Sometimes that is right. Far more often, the composites troubleshooting literature points somewhere else: to mould preparation, to how thickly and evenly the film went on, to the state of cure when lamination started, or to workshop conditions on the day.',
          'That matters commercially as well as technically. A fabricator who changes gelcoat supplier over a fault caused by residual release agent will meet the same fault with the new supplier. This page sets out what the published literature attributes each common fault to, so that the diagnosis starts in the right place.',
          'It is a buyer-level orientation, not a repair procedure. Nothing here tells you how to fix a part, and nothing here is a dosage, a film thickness or a cure schedule. Those belong to the manufacturer’s documentation for the gelcoat in front of you.',
        ],
      },
      {
        heading: 'Faults that point at the mould',
        body: [
          'Fisheyes, sometimes called de-wetting, appear as small craters where the gelcoat has pulled away from the mould face. The accepted explanation is a surface-tension mismatch, most often caused by contamination: oil, silicone from an unrelated product used nearby, or too much release agent or residue left behind. The diagnosis is usually in the mould preparation rather than in the drum.',
          'Pre-release is the related mould-side fault, where the cured film separates from the mould before the part is ready, leaving dull or distorted patches. Sources attribute it to uneven or excessive film thickness, an unusually fast cure, or lamination that was delayed too long after the gelcoat gelled.',
          'The practical reading of both: mould condition and release-agent discipline are part of the gelcoat system, not a separate concern from it.',
        ],
      },
      {
        heading: 'Faults that point at film thickness',
        body: [
          'Excessive or uneven thickness is the single most frequently cited cause across the literature, and it produces several different symptoms. Cracking and crazing are attributed to too much thickness, to rapid temperature change, or to stress at high-load areas of a part with an inadequate laminate behind it. Sagging on a vertical face is attributed to a heavy film combined with high spray pressure, low viscosity or a long gel time.',
          'This is where the intuition that more gelcoat means more protection does real damage. The gelcoat layer has no reinforcement in it. Making it thicker adds material that has to carry its own cure stress without any fibre to distribute it, and the result is a layer more likely to crack, not a layer with more life in it.',
          'The useful target is an even film of the thickness the manufacturer specifies for that grade, applied consistently across the part.',
        ],
      },
      {
        heading: 'Faults that point at timing and cure',
        body: [
          'Alligatoring, the wrinkled pattern that looks like alligator skin, is generally attributed to laminating over a gelcoat film that was not yet cured enough to take it, or to uneven cure caused by inconsistent thickness, catalyst level or temperature. The gelcoat needs to reach a particular state before the laminate goes on, and both too early and too late cause identifiable problems.',
          'Production blistering, as distinct from in-service blistering, is generally linked to trapped air or moisture and incomplete cure beneath the surface. Colour variation and patchiness are attributed to pigment dispersion and mixing practice, and to batch-to-batch consistency in the supplied material.',
          'The common thread is that a gelcoat is not finished when it has been applied. It is finished when it has reached the right cure state and the laminate has gone on at the right moment, and both of those depend on conditions in the workshop on the day.',
        ],
      },
      {
        heading: 'What weathers later, and why it is a different conversation',
        body: [
          'Some things buyers call defects are not production faults at all. Chalking is the resin binder at the surface breaking down under prolonged sunlight into a powdery residue. Fading and gradual loss of gloss follow the same mechanism. Fibre prominence, where the reinforcement begins to show through, happens because resin erodes faster than glass.',
          'These are weathering behaviours described across the industry rather than manufacturing faults, and they are the reason gelcoat grades intended for outdoor or immersed service exist at all. If a part is dulling after years outdoors, the question to ask is whether the gelcoat specified was the right one for that exposure, not whether the batch was defective.',
          'In-service blistering on immersed parts belongs in the same category. Marine literature describes it as hydrolysis of the ester linkages over long water contact and reports it as more common with orthophthalic chemistry, which is precisely the argument for an isophthalic gelcoat on parts that stay wet.',
        ],
      },
      {
        heading: 'What we can and cannot do about a fault',
        body: [
          'Samrat FRP Traders is a trader, supplier, importer and reseller of FRP materials in Nepal. We supply gelcoat manufactured by Samrat Poly Resins, India. We do not formulate it, test it, inspect mouldings or issue technical determinations about a production problem.',
          'What we can do is put a specific, well-described question to the supplier, and supply the documentation they publish for the grade you are using. A useful description covers the part and the mould, the conditions on the day, how the gelcoat was applied and how long after gelling the laminate went on. A photograph on its own rarely settles anything.',
          'Where a grade’s supplier documentation is not yet in our library, as is currently the case for ISO Gelcoat, we will tell you that plainly rather than answer from a general article.',
        ],
      },
    ],
    ne: {
      title: 'Gelcoat का दोष र तिनका कारण: Fisheye, Pinhole, Pre-release र अरू',
      description:
        'Fabricator हरूले सोधपुछमा नाम लिने gelcoat का दोष, र composites troubleshooting साहित्यले तीमध्ये प्रत्येकलाई केसँग जोड्छ — ताकि सतहको समस्या गलत सामग्रीमाथि दोष नथोपरी प्रक्रिया, साँचो वा समयको समस्याका रूपमा पहिचान होस्।',
      seo: {
        title: 'Gelcoat का दोष र कारण | Troubleshooting गाइड',
        ogTitle: 'Gelcoat दोष: Fisheye, Pinhole, Pre-release',
        ogDescription:
          'Composites troubleshooting साहित्यअनुसार सामान्य gelcoat दोषका कारण। Samrat FRP Traders को खरिदकर्ता-स्तरको गाइड।',
        keywords: [
          'gelcoat दोष',
          'gelcoat fisheyes',
          'gelcoat pinholing',
          'gelcoat pre-release',
          'gelcoat troubleshooting नेपाल',
        ],
      },
      quickFacts: {
        'धेरैजसो दोष resin का होइनन्': 'Contamination, film को मोटाइ, cure अवस्था र समय नै मुख्य हुन्',
        'मोटाइ बारम्बारको कारण': 'अत्यधिक वा असमान film चर्किने, बग्ने र pre-release सँग जोडिन्छ',
        'समय पनि उत्तिकै महत्त्वपूर्ण': 'नजमेको film माथि चाँडै lamination गर्दा आफ्नै दोष निम्तिन्छ',
        'यो गाइड के होइन': 'मर्मत विधि, dosage तालिका वा warranty को अडान',
      },
      recommendedLinks: [
        neProduct,
        neGpGelcoat,
        {
          href: '/resources/what-is-gelcoat/',
          label: 'Gelcoat के हो?',
          description: 'यो तह कहाँ बस्छ र केका लागि हो — आधारभूत प्रश्न त्यही हो भने।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'Spray गरेलगत्तै gelcoat मा साना खाडल देखिए। त्यो के हो?',
          a: 'त्यो ढाँचालाई सामान्यतया fisheye वा de-wetting भनिन्छ, र troubleshooting साहित्यले यसलाई surface-tension को बेमेलसँग जोड्छ — प्रायः साँचोमा रहेको fat, तेल, silicone वा release agent को बढी मात्रा/अवशेषबाट। यो gelcoat को भन्दा धेरै साँचो तयारीको समस्या हो।',
        },
        {
          q: 'Gelcoat सतहमा pinhole र porosity किन आउँछ?',
          a: 'Film भित्र वा मुनि हावा अड्किएर। स्रोतहरूले atomisation र spray प्रविधि, viscosity, र film जम्नुअघि अड्किएको हावा निस्कन नदिने प्रयोग-अभ्यासलाई कारण मान्छन्। यो resin परिवारको गुण होइन, प्रक्रियाको चल हो।',
        },
        {
          q: 'Gelcoat गोही छालाजस्तो चाउरिएर चर्कियो। किन?',
          a: 'Alligatoring लाई सामान्यतया पर्याप्त नजमेको gelcoat माथि lamination गरिएको, वा असमान मोटाइ, catalyst तथा तापक्रमका कारण असमान cure सँग जोडिन्छ। यो समय र cure अवस्थाको दोष हो, गलत gelcoat आपूर्ति भएको प्रमाण होइन।',
        },
        {
          q: 'भाग साँचोबाट धमिलो र ठाउँ-ठाउँमा बिग्रिएको निस्कियो। Pre-release भनेको के हो?',
          a: 'Pre-release भनेको भाग तयार हुनुअघि नै जमेको gelcoat film साँचोको सतहबाट छुट्नु हो, जसले धमिलो वा बिग्रिएको क्षेत्र छोड्छ। प्रायः असमान वा अत्यधिक मोटाइ, असामान्य छिटो cure, वा gelcoat जमेपछि धेरै ढिलो गरिएको lamination लाई कारण मानिन्छ।',
        },
        {
          q: 'के blistering र pinholing एउटै समस्या हो?',
          a: 'होइन, र यी छुट्याउनु राम्रो। उत्पादनका बेलाको blistering प्रायः अड्किएको हावा वा चिस्यान र सतहमुनि अपूर्ण cure सँग जोडिन्छ। सेवामा गएपछि, डुबेको भागमा देखिने blistering चाहिँ समुद्री साहित्यमा छुट्टै विषय हो — resin का ester बन्धनको hydrolysis, जुन isophthalic भन्दा orthophthalic मा बढी हुने भनिन्छ।',
        },
        {
          q: 'फोटो हेरेर मेरो दोष कुन हो भन्न सक्नुहुन्छ?',
          a: 'सक्दैनौँ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी moulding निरीक्षण गर्दैनौँ, उत्पादन समस्याको निदान गर्दैनौँ र प्राविधिक निर्णय दिँदैनौँ — अनि फोटोले साँचो तयारी, film मोटाइ, catalyst मात्रा, कार्यशालाको तापक्रम वा समय देखाउँदैन। यस्तो दोष gelcoat निर्माताको आफ्नै troubleshooting निर्देशन र आफ्नो प्रक्रिया हेर्ने व्यक्तिसमक्ष लैजानुहोस्।',
        },
      ],
      sections: [
        {
          heading: 'यो गाइड किन',
          body: [
            'Moulding साँचोबाट सतहको दोष सहित निस्कँदा पहिलो शंका प्रायः सामग्रीमाथि जान्छ। कहिलेकाहीँ त्यो ठीक हुन्छ। तर धेरैजसो अवस्थामा composites troubleshooting साहित्यले अन्तै औँल्याउँछ: साँचोको तयारी, film कति बाक्लो र कति एकनास लाग्यो, lamination सुरु गर्दा cure को अवस्था कस्तो थियो, र त्यस दिनको कार्यशालाको अवस्था।',
            'यो प्राविधिक मात्र होइन, व्यावसायिक रूपमै महत्त्वपूर्ण छ। Release agent को अवशेषले आएको दोषका कारण gelcoat आपूर्तिकर्ता फेर्ने fabricator ले नयाँ आपूर्तिकर्तासँग पनि त्यही दोष भेट्छ। यो पृष्ठले प्रकाशित साहित्यले कुन दोषलाई केसँग जोड्छ भन्ने राख्छ, ताकि निदान सही ठाउँबाट सुरु होस्।',
            'यो खरिदकर्ता-स्तरको परिचय हो, मर्मत विधि होइन। यहाँ भाग कसरी सुधार्ने भन्ने छैन, र dosage, film मोटाइ वा cure schedule पनि छैन। ती तपाईंसामु रहेको gelcoat कै निर्माता कागजातका विषय हुन्।',
          ],
        },
        {
          heading: 'साँचोतर्फ औँल्याउने दोष',
          body: [
            'Fisheye, जसलाई de-wetting पनि भनिन्छ, gelcoat साँचोको सतहबाट तानिएर बनेका साना खाडलका रूपमा देखिन्छ। स्वीकृत व्याख्या surface-tension को बेमेल हो, जुन प्रायः contamination बाट आउँछ: तेल, नजिकै प्रयोग भएको अरू उत्पादनको silicone, वा धेरै भएको release agent तथा त्यसको अवशेष। निदान प्रायः drum मा होइन, साँचो तयारीमा हुन्छ।',
            'Pre-release साँचोतर्फकै सम्बन्धित दोष हो — भाग तयार हुनुअघि नै जमेको film साँचोबाट छुट्छ र धमिलो वा बिग्रिएका ठाउँ छोड्छ। स्रोतहरूले यसलाई असमान वा अत्यधिक film मोटाइ, असामान्य छिटो cure, वा gelcoat जमेपछि धेरै ढिलो भएको lamination सँग जोड्छन्।',
            'दुवैको व्यावहारिक अर्थ: साँचोको अवस्था र release agent को अनुशासन gelcoat प्रणालीकै भाग हो, छुट्टै चासो होइन।',
          ],
        },
        {
          heading: 'Film को मोटाइतर्फ औँल्याउने दोष',
          body: [
            'साहित्यभर सबैभन्दा बढी उल्लेख हुने कारण भनेको अत्यधिक वा असमान मोटाइ हो, र यसले फरक-फरक लक्षण देखाउँछ। चर्किने र crazing लाई धेरै मोटाइ, तापक्रमको छिटो परिवर्तन, वा पछाडि अपर्याप्त laminate भएको भागमा उच्च भार पर्ने ठाउँको तनावसँग जोडिन्छ। ठाडो सतहमा बग्ने कुरा बाक्लो film सँगै उच्च spray चाप, कम viscosity वा लामो gel time सँग जोडिन्छ।',
            'बढी gelcoat भए बढी सुरक्षा भन्ने अनुमानले वास्तविक क्षति गर्ने ठाउँ यही हो। Gelcoat तहमा कुनै reinforcement हुँदैन। बाक्लो बनाउनु भनेको cure को तनाव आफैँ बोक्नुपर्ने, बाँड्न fibre नभएको सामग्री थप्नु हो — नतिजा बढी टिक्ने तह होइन, बढी चर्किने तह हुन्छ।',
            'उपयोगी लक्ष्य भनेको त्यस grade का लागि निर्माताले तोकेको मोटाइको एकनास film, भागभरि एकरूप रूपमा लगाइएको।',
          ],
        },
        {
          heading: 'समय र cure तर्फ औँल्याउने दोष',
          body: [
            'Alligatoring — गोही छालाजस्तो चाउरिने ढाँचा — लाई सामान्यतया पर्याप्त नजमेको gelcoat माथि lamination गरिएको वा असमान मोटाइ, catalyst मात्रा तथा तापक्रमले ल्याएको असमान cure सँग जोडिन्छ। Laminate लगाउनुअघि gelcoat निश्चित अवस्थामा पुग्नुपर्छ, र चाँडो तथा ढिलो दुवैले पहिचान गर्न सकिने समस्या ल्याउँछन्।',
            'उत्पादनका बेलाको blistering — सेवामा गएपछिको भन्दा फरक — प्रायः अड्किएको हावा वा चिस्यान र सतहमुनि अपूर्ण cure सँग जोडिन्छ। रङको फरकपन र ठाउँ-ठाउँमा असमानतालाई pigment को फैलावट, मिसाउने अभ्यास र आपूर्ति भएको सामग्रीको batch-देखि-batch एकरूपतासँग जोडिन्छ।',
            'साझा कुरा यो हो: gelcoat लगाइसक्दा काम सकिँदैन। ठीक cure अवस्थामा पुगेर ठीक समयमा laminate लागेपछि मात्र सकिन्छ, र ती दुवै त्यस दिनको कार्यशालाको अवस्थामा भर पर्छन्।',
          ],
        },
        {
          heading: 'पछि मौसमले बिगार्ने कुरा, र त्यो किन फरक विषय हो',
          body: [
            'खरिदकर्ताले दोष भन्ने केही कुरा उत्पादनका दोष नै होइनन्। Chalking भनेको लामो घाममा सतहको resin binder भत्किएर धुलोजस्तो अवशेष बन्नु हो। रङ खुइलिने र चमक बिस्तारै घट्ने पनि यही प्रक्रियाबाट आउँछ। Reinforcement देखिन थाल्ने (fibre prominence) चाहिँ resin glass भन्दा छिटो खिइने भएकाले हुन्छ।',
            'यी उद्योगभर वर्णन गरिएका weathering व्यवहार हुन्, उत्पादनका दोष होइनन् — र बाहिरी वा डुबेको सेवाका लागि छुट्टै gelcoat grade हुनुको कारण पनि यही हो। वर्षौँ बाहिर रहेको भाग धमिलो हुँदै छ भने सोध्नुपर्ने प्रश्न batch बिग्रेको थियो कि भन्ने होइन, त्यो सम्पर्क-अवस्थाका लागि तोकिएको gelcoat ठीक थियो कि थिएन भन्ने हो।',
            'डुबेका भागमा सेवाका क्रममा आउने blistering पनि यही वर्गमा पर्छ। समुद्री साहित्यले यसलाई लामो पानी-सम्पर्कमा ester बन्धनको hydrolysis भन्छ र orthophthalic रसायनमा बढी हुने बताउँछ — भिजिरहने भागमा isophthalic gelcoat को तर्क ठ्याक्कै यही हो।',
          ],
        },
        {
          heading: 'दोषबारे हामी के गर्न सक्छौँ, के सक्दैनौँ',
          body: [
            'Samrat FRP Traders नेपालमा FRP सामग्रीको व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो। हामी Samrat Poly Resins, India ले उत्पादन गरेको gelcoat आपूर्ति गर्छौं। हामी यसको formulation, परीक्षण, moulding निरीक्षण वा उत्पादन समस्याबारे प्राविधिक निर्णय गर्दैनौँ।',
            'हामीले गर्न सक्ने कुरा भनेको स्पष्ट र विस्तृत प्रश्न आपूर्तिकर्तासमक्ष पुर्‍याउने र तपाईंले प्रयोग गरिरहेको grade का लागि उनीहरूले प्रकाशित गरेको कागजात उपलब्ध गराउने हो। उपयोगी विवरणमा भाग र साँचो, त्यस दिनको अवस्था, gelcoat कसरी लगाइयो र जमेको कति पछि laminate लाग्यो भन्ने पर्छ। फोटो मात्रले प्रायः केही टुंगो लगाउँदैन।',
            'कुनै grade को supplier कागजात हाम्रो पुस्तकालयमा छैन भने — जस्तो अहिले ISO Gelcoat को छैन — हामी सामान्य लेखबाट उत्तर दिनुको सट्टा त्यही कुरा स्पष्ट भन्नेछौँ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------ gelcoat selection
  {
    slug: 'how-to-select-a-gelcoat',
    title: 'How to Select a Gelcoat: Five Questions That Settle It',
    description:
      'A selection guide for FRP fabricators in Nepal — the five questions that decide which gelcoat a part needs, why "which is better" is the wrong question, and what to confirm in the supplier documentation before you commit a production run.',
    category: 'Selection Guide',
    icon: 'checklist',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'How to Select a Gelcoat | FRP Selection Guide Nepal',
      ogTitle: 'How to Select a Gelcoat for an FRP Part',
      ogDescription:
        'Five questions that decide which gelcoat a part needs, and what to confirm before a production run. From Samrat FRP Traders, Nepal.',
      keywords: [
        'gelcoat selection guide',
        'which gelcoat to use',
        'gelcoat for FRP part Nepal',
        'gelcoat vs topcoat selection',
        'gelcoat buying guide',
      ],
    },
    quickFacts: {
      'Question that decides most of it': 'What the finished surface is exposed to, and for how long',
      'Question that catches people out': 'Whether you need a gelcoat or a topcoat',
      'Colour matching': 'A batch-consistency conversation to have before the run, not during it',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: ['what-is-gelcoat', 'iso-gelcoat-vs-gp-gelcoat', 'gelcoat-defects-and-what-causes-them'],
    recommendedLinks: [
      product,
      gpGelcoat,
      {
        href: '/resources/iso-gelcoat-vs-gp-gelcoat/',
        label: 'ISO gelcoat vs GP gelcoat',
        description: 'The chemistry comparison behind the exposure question.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Which gelcoat is best?',
        a: 'There is no best gelcoat, only a gelcoat suited to an exposure. A grade chosen for a hull that stays in the water is being asked to do something different from a grade on a sheltered indoor moulding. Describe the part and the exposure and the choice usually becomes obvious.',
      },
      {
        q: 'Do I need a gelcoat or a topcoat?',
        a: 'If a laminate is going on behind it, you need a gelcoat, which stays tacky on its air side so the laminate bonds. If the surface is the final exposed face with nothing going over it, a topcoat with wax is what cures tack-free. Getting this the wrong way round is one of the most common and most avoidable errors.',
      },
      {
        q: 'How do I keep colour consistent across a production run?',
        a: 'Pigment dispersion, mixing practice and batch-to-batch consistency all affect it, and it is a known pain point in the industry. The practical step is to raise it before the run: order the quantity you need for the job together where you can, keep batch references, and check a sample against existing parts if the new work has to match something already on site.',
      },
      {
        q: 'Can I brush a gelcoat, or must it be sprayed?',
        a: 'Brush and roller application is possible and is described in supplier literature, but fabricators and suppliers generally recommend spraying for finish quality and film consistency. Since uneven thickness is behind several of the common defects, the method matters more than it first appears.',
      },
      {
        q: 'Do you supply gelcoat in custom colours?',
        a: 'Colour availability is a supplier question, and the answer depends on the grade and the quantity. Ask at the enquiry stage rather than assuming, and if the part must match existing panels on site, say so — matching an existing colour is a different request from choosing a standard one.',
      },
    ],
    sections: [
      {
        heading: 'Start with the part, not the product list',
        body: [
          'Gelcoat selection goes wrong most often when it starts from a catalogue rather than from the component. The question is not which gelcoat is best. It is what this particular surface has to survive, for how long, and what is going on behind it.',
          'Five questions settle most cases. What is the part. What is the surface exposed to in service. Is a laminate going over this layer. How is it being applied. And does the colour have to match something that already exists. Work through those and the specification usually writes itself.',
        ],
      },
      {
        heading: 'Question one and two: the part and its exposure',
        body: [
          'The exposure does most of the work in the decision. A moulding that sits indoors under shelter is asking for a cosmetic surface that stays clean and looks right. A hull that stays in the water, a pool, a water slide, a bathware moulding or an external panel in full sun for years is asking for something that holds gloss and resists water over a long service life.',
          'That is the line between the general-purpose route and the isophthalic route. It is also worth separating weather exposure from immersion: resisting years of sunlight and resisting continuous water contact are related but not identical requirements, and a grade positioned for one is not automatically right for the other.',
          'If the part is covered by a customer specification or a standard, that overrides judgement. Read what it names, and ask for that.',
        ],
      },
      {
        heading: 'Question three: gelcoat or topcoat',
        body: [
          'This single question causes more avoidable rework than any other in the category. A gelcoat is formulated to stay tacky on its air side so the laminate applied over it bonds properly. A topcoat has wax in it so that it cures tack-free as a final exposed surface.',
          'So the test is simple: is anything going on top of this layer. If yes, it is a gelcoat. If the layer you are applying is the last one and will be exposed, it is a topcoat you want. Buying a topcoat and laminating over it, or buying a gelcoat and leaving it as the final surface, both produce predictable problems.',
        ],
      },
      {
        heading: 'Question four and five: application and colour',
        body: [
          'Application method is a genuine selection input rather than an afterthought. Brush and roller work is possible, but spraying is what suppliers and fabricators generally recommend for finish quality and, more importantly, for an even film. Since uneven or excessive thickness is behind cracking, sagging and pre-release, the way the gelcoat goes on affects the defect rate directly.',
          'Colour is the question people raise too late. Pigment dispersion, mixing practice and batch consistency all influence how well one run matches another, and matching an existing part on site is a harder request than choosing a standard colour for new work. Raise it before the production run, order what you need for the job together where that is possible, and keep the batch references with the job.',
          'Where a shade has to match panels already installed, ask to check against a sample rather than against a colour name.',
        ],
      },
      {
        heading: 'What to confirm before committing a run',
        body: [
          'Before a production quantity is committed, it is worth having four things settled: the grade and its resin type, confirmed from the manufacturer’s document rather than from a product name; the film thickness and cure guidance the manufacturer publishes for that grade; the safety documentation your workshop needs in order to write a handling procedure; and the colour and batch arrangement for the quantity you are taking.',
          'Samrat FRP Traders supplies and imports gelcoat for Nepal from Samrat Poly Resins, India. We are a trader, supplier, importer and reseller, and we do not manufacture, formulate, test or approve gelcoat for an application.',
          'GP Gelcoat Resin has its supplier Technical Data Sheet and Safety Data Sheet on file. ISO Gelcoat does not yet, so for that grade we can describe what the supplier positions it for and put your question to them, but we publish no figures of our own.',
        ],
      },
    ],
    ne: {
      title: 'Gelcoat कसरी छान्ने: निर्णय गर्ने पाँच प्रश्न',
      description:
        'नेपालका FRP fabricator का लागि छनोट गाइड — कुनै भागलाई कस्तो gelcoat चाहिन्छ भनी तय गर्ने पाँच प्रश्न, "कुन राम्रो" किन गलत प्रश्न हो, र उत्पादन सुरु गर्नुअघि supplier कागजातमा के पुष्टि गर्ने।',
      seo: {
        title: 'Gelcoat कसरी छान्ने | FRP छनोट गाइड नेपाल',
        ogTitle: 'FRP भागका लागि gelcoat कसरी छान्ने',
        ogDescription:
          'भागलाई कस्तो gelcoat चाहिन्छ भनी तय गर्ने पाँच प्रश्न, र उत्पादन अघि के पुष्टि गर्ने। Samrat FRP Traders, नेपाल।',
        keywords: [
          'gelcoat छनोट गाइड',
          'कुन gelcoat प्रयोग गर्ने',
          'FRP भागका लागि gelcoat नेपाल',
          'gelcoat बनाम topcoat',
        ],
      },
      quickFacts: {
        'धेरैजसो निर्णय गर्ने प्रश्न': 'तयारी सतह केसँग, कति लामो समय सम्पर्कमा रहन्छ',
        'धेरैलाई झुक्याउने प्रश्न': 'तपाईंलाई gelcoat चाहिएको हो कि topcoat',
        'रङ मिलाउने कुरा': 'उत्पादन सुरु भएपछि होइन, अघि नै गर्नुपर्ने छलफल',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        neProduct,
        neGpGelcoat,
        {
          href: '/resources/iso-gelcoat-vs-gp-gelcoat/',
          label: 'ISO gelcoat बनाम GP gelcoat',
          description: 'सम्पर्क-अवस्थाको प्रश्नपछाडिको रासायनिक तुलना।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'कुन gelcoat सबैभन्दा राम्रो?',
          a: 'सबैभन्दा राम्रो gelcoat भन्ने हुँदैन — कुनै सम्पर्क-अवस्थाका लागि उपयुक्त gelcoat मात्र हुन्छ। पानीमै रहने hull का लागि छानिएको grade र छोपिएको भित्री moulding को grade ले फरक काम गरिरहेका हुन्छन्। भाग र सम्पर्क-अवस्था बताउनुभयो भने छनोट प्रायः आफैँ स्पष्ट हुन्छ।',
        },
        {
          q: 'मलाई gelcoat चाहिन्छ कि topcoat?',
          a: 'पछाडि laminate लाग्ने हो भने gelcoat चाहिन्छ — यो हावातर्फ टाँसिने रहन्छ ताकि laminate जोडियोस्। सतह नै अन्तिम खुला अनुहार हो र माथि केही लाग्दैन भने wax भएको topcoat ले टाँसिन नदिई जमाउँछ। यसलाई उल्टो पारिनु सबैभन्दा सामान्य र सजिलै टार्न सकिने गल्तीमध्ये एक हो।',
        },
        {
          q: 'उत्पादनभरि रङ कसरी एकनास राख्ने?',
          a: 'Pigment को फैलावट, मिसाउने अभ्यास र batch-देखि-batch एकरूपता — सबैले असर गर्छन्, र यो उद्योगमा चिनिएको समस्या हो। व्यावहारिक कदम भनेको उत्पादन सुरु हुनुअघि नै यो कुरा उठाउनु हो: सकेसम्म कामका लागि चाहिने परिमाण सँगै अर्डर गर्नुहोस्, batch सन्दर्भ राख्नुहोस्, र नयाँ काम साइटमा भएका भागसँग मिल्नुपर्ने हो भने नमुनासँग दाँज्नुहोस्।',
        },
        {
          q: 'Gelcoat ब्रसले लगाउन मिल्छ कि स्प्रे नै गर्नुपर्छ?',
          a: 'ब्रस र roller ले लगाउन मिल्छ र आपूर्तिकर्ताका कागजातमा पनि उल्लेख हुन्छ, तर फिनिसको गुणस्तर र film को एकरूपताका लागि fabricator तथा आपूर्तिकर्ताहरू सामान्यतया spray सिफारिस गर्छन्। असमान मोटाइ नै धेरै सामान्य दोषको कारण भएकाले तरिका देखिनेभन्दा बढी महत्त्वपूर्ण हुन्छ।',
        },
        {
          q: 'के तपाईंहरू custom रङमा gelcoat दिनुहुन्छ?',
          a: 'रङको उपलब्धता आपूर्तिकर्ताको प्रश्न हो, र उत्तर grade तथा परिमाणमा भर पर्छ। अनुमान नगरी सोधपुछकै बेला सोध्नुहोस्; भाग साइटमा भएका प्यानलसँग मिल्नुपर्ने हो भने त्यो पनि भन्नुहोस् — भएको रङ मिलाउनु र standard रङ छान्नु फरक माग हुन्।',
        },
      ],
      sections: [
        {
          heading: 'उत्पादन सूचीबाट होइन, भागबाट सुरु गर्नुहोस्',
          body: [
            'Gelcoat को छनोट प्रायः तब बिग्रन्छ जब यो component बाट होइन, catalogue बाट सुरु हुन्छ। प्रश्न कुन gelcoat राम्रो भन्ने होइन। यो खास सतहले के सहनुपर्छ, कति समय सहनुपर्छ, र यसको पछाडि के लाग्दै छ भन्ने हो।',
            'पाँच प्रश्नले धेरैजसो अवस्था टुंग्याउँछन्। भाग के हो। सेवामा सतह केसँग सम्पर्कमा रहन्छ। यस तहमाथि laminate लाग्दै छ कि छैन। कसरी लगाइँदै छ। अनि रङ पहिल्यै भएको कुनै चीजसँग मिल्नुपर्छ कि पर्दैन। यी हेर्दै जाँदा specification प्रायः आफैँ बन्छ।',
          ],
        },
        {
          heading: 'पहिलो र दोस्रो प्रश्न: भाग र त्यसको सम्पर्क-अवस्था',
          body: [
            'निर्णयमा सबैभन्दा ठूलो काम सम्पर्क-अवस्थाले गर्छ। छोपिएर भित्र रहने moulding लाई सफा रहने र राम्रो देखिने सजावटी सतह चाहिन्छ। पानीमै रहने hull, पुल, water slide, bathware वा वर्षौँ घाममा रहने बाहिरी प्यानललाई भने लामो सेवा-अवधिभर चमक टिकाउने र पानी सहने कुरा चाहिन्छ।',
            'सामान्य प्रयोजनको बाटो र isophthalic बाटोबीचको रेखा यही हो। मौसमको सम्पर्क र डुबाइलाई पनि छुट्याउनुपर्छ: वर्षौँको घाम सहनु र निरन्तर पानीको सम्पर्क सहनु सम्बन्धित भए पनि उही माग होइनन्, र एउटाका लागि राखिएको grade अर्काका लागि स्वतः ठीक हुँदैन।',
            'भाग ग्राहकको specification वा कुनै मानकअन्तर्गत छ भने त्यसले विवेकलाई हटाउँछ। त्यहाँ के नाम लेखिएको छ पढ्नुहोस्, र त्यही माग्नुहोस्।',
          ],
        },
        {
          heading: 'तेस्रो प्रश्न: gelcoat कि topcoat',
          body: [
            'यस श्रेणीमा सबैभन्दा धेरै टार्न सकिने पुनःकार्य यही एउटा प्रश्नले निम्त्याउँछ। Gelcoat हावातर्फ टाँसिने रहने गरी बनाइन्छ ताकि माथि लगाइने laminate राम्ररी जोडियोस्। Topcoat मा wax हुन्छ जसले अन्तिम खुला सतहका रूपमा टाँसिन नदिई जमाउँछ।',
            'त्यसैले जाँच सरल छ: यस तहमाथि केही लाग्दै छ कि छैन। छ भने gelcoat हो। तपाईंले लगाउन लागेको तह अन्तिम हो र खुला रहन्छ भने topcoat चाहिन्छ। Topcoat किनेर माथि lamination गर्नु, वा gelcoat किनेर त्यसैलाई अन्तिम सतह छोड्नु — दुवैले अनुमान गर्न सकिने समस्या ल्याउँछन्।',
          ],
        },
        {
          heading: 'चौथो र पाँचौँ प्रश्न: लगाउने तरिका र रङ',
          body: [
            'लगाउने तरिका पछि सोच्ने कुरा होइन, छनोटकै वास्तविक आधार हो। ब्रस र roller ले काम गर्न मिल्छ, तर फिनिसको गुणस्तर र विशेष गरी एकनास film का लागि आपूर्तिकर्ता तथा fabricator हरू सामान्यतया spray सिफारिस गर्छन्। असमान वा अत्यधिक मोटाइ नै चर्किने, बग्ने र pre-release का पछाडि भएकाले gelcoat कसरी लाग्छ भन्नेले दोष-दर सीधै असर गर्छ।',
            'रङ त्यो प्रश्न हो जुन मानिस धेरै ढिलो उठाउँछन्। Pigment को फैलावट, मिसाउने अभ्यास र batch एकरूपता — सबैले एउटा उत्पादन अर्कोसँग कति मिल्छ भन्नेमा असर गर्छन्, र साइटमा भएको भागसँग मिलाउनु नयाँ कामका लागि standard रङ छान्नुभन्दा गाह्रो माग हो। उत्पादन सुरु हुनुअघि नै उठाउनुहोस्, सम्भव भएसम्म कामका लागि चाहिने परिमाण सँगै अर्डर गर्नुहोस्, र batch सन्दर्भ कामसँगै राख्नुहोस्।',
            'जडान भइसकेका प्यानलसँग रङ मिल्नुपर्ने हो भने रङको नामसँग होइन, नमुनासँग दाँजेर जाँच्न माग्नुहोस्।',
          ],
        },
        {
          heading: 'उत्पादन सुरु गर्नुअघि के पुष्टि गर्ने',
          body: [
            'उत्पादन परिमाण तय गर्नुअघि चार कुरा टुंगिनु राम्रो: grade र त्यसको resin type — उत्पादनको नामबाट होइन, निर्माताको कागजातबाट पुष्टि गरिएको; त्यस grade का लागि निर्माताले प्रकाशित गरेको film मोटाइ र cure निर्देशन; handling कार्यविधि लेख्न कार्यशालालाई चाहिने सुरक्षा कागजात; अनि तपाईंले लिने परिमाणका लागि रङ र batch को व्यवस्था।',
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट नेपालका लागि gelcoat आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ; gelcoat उत्पादन, formulation, परीक्षण वा कुनै प्रयोगका लागि approval गर्दैनौँ।',
            'GP Gelcoat Resin का supplier Technical Data Sheet र Safety Data Sheet फाइलमा छन्। ISO Gelcoat का अझै छैनन् — त्यसैले त्यस grade का लागि आपूर्तिकर्ताले कुन प्रयोग तोकेका छन् भन्न र तपाईंको प्रश्न उनीहरूसमक्ष पुर्‍याउन सक्छौँ, तर आफ्नो तर्फबाट कुनै अंक प्रकाशित गर्दैनौँ।',
          ],
        },
      ],
    },
  },
];
