// Polyester Putty Resin cluster addition.
//
// This product already had a cluster, but it was written under the retired
// "PET Resin" name and did not answer the question the product's own name
// provokes: whether what arrives is a tub of ready-mixed body filler. It is
// not. It is a liquid resin, and the supplier documentation says so.
//
// Unlike the other three priority clusters, this grade DOES have a supplier
// Technical Data Sheet and Safety Data Sheet on file, so published values may
// be quoted here — always attributed to Samrat Poly Resins, India and always
// as supplied-resin properties rather than finished-product performance.

import {
  commercialPosition,
  enquiryLink,
  neCommercialPosition,
  neEnquiryLink,
} from './shared.js';

const product = {
  href: '/products/polyester-putty-resin/',
  label: 'View Polyester Putty Resin',
  description: 'The commercial product page, with the supplier Technical Data Sheet and Safety Data Sheet.',
};
const neProduct = {
  href: '/products/polyester-putty-resin/',
  label: 'Polyester Putty Resin हेर्नुहोस्',
  description: 'व्यावसायिक उत्पादन पृष्ठ — supplier Technical Data Sheet र Safety Data Sheet सहित।',
};

export const polyesterPuttyResinCluster = [
  {
    slug: 'polyester-putty-resin-vs-ready-mixed-body-filler',
    title: 'Polyester Putty Resin vs Ready-Mixed Body Filler: What Actually Arrives',
    description:
      'The product name says putty, the drum contains liquid resin. What Samrat Poly Resins, India documents this grade as, how it differs from a two-part body filler bought by the tin, and which of the two your job actually needs.',
    category: 'Product Selection',
    icon: 'drum',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'Polyester Putty Resin vs Ready-Mixed Body Filler | Nepal',
      ogTitle: 'Polyester Putty Resin vs Body Filler: What Arrives',
      ogDescription:
        'A liquid unsaturated polyester resin, not a tub of two-part filler. What the supplier documents, and which one your job needs.',
      keywords: [
        'polyester putty resin',
        'body filler vs polyester resin',
        'polyester putty Nepal',
        'two part body filler',
        'polyester putty resin supplier Nepal',
      ],
    },
    quickFacts: {
      'What is supplied': 'A liquid unsaturated polyester resin, not a ready-mixed putty or body filler',
      'What a body filler is': 'A heavily filled paste sold with its own hardener, ready to use',
      'Document position': 'Supplier Technical Data Sheet and Safety Data Sheet are on file for this grade',
      'Values issued by': 'Samrat Poly Resins, India — published for the supplied resin',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: [
      'what-is-polyester-putty-resin',
      'polyester-putty-resin-vs-thermoplastic-pet',
      'polyester-putty-resin-applications',
    ],
    recommendedLinks: [
      product,
      {
        href: '/resources/what-is-polyester-putty-resin/',
        label: 'What is Polyester Putty Resin?',
        description: 'The explainer covering the grade and the two names it appears under.',
      },
      {
        href: '/resources/polyester-putty-resin-vs-thermoplastic-pet/',
        label: 'Polyester Putty Resin vs thermoplastic PET',
        description: 'The other naming confusion around this grade, and why the two are different materials.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'If I order Polyester Putty Resin, do I get a tub of filler I can apply straight away?',
        a: 'No. What is supplied is a liquid unsaturated polyester resin. A ready-mixed body filler is a different commercial product: a heavily filled paste sold in a tin with its own hardener, formulated and ready to spread. The name overlaps; the product does not.',
      },
      {
        q: 'Why is it called putty resin if it is a liquid?',
        a: 'Because the name describes the family of end use rather than the form supplied. Resins of this kind go into filled and putty-type systems downstream. Samrat Poly Resins, India lists the grade under this name, and its Technical Data Sheet identifies what is actually supplied. We use the supplier’s name for the product and state the form plainly rather than letting the name imply a paste.',
      },
      {
        q: 'What does the supplier publish about the supplied resin?',
        a: 'The current Technical Data Sheet issued by Samrat Poly Resins, India gives a viscosity of 450 to 650 cPs at 25°C, a solid content of 60 to 64 per cent, a specific gravity of 1.05 to 1.12 g/cm³ at 25°C and a heat deflection temperature of 70 to 85°C when cured. Those are supplied-resin properties published by the manufacturer. They are not a formulation, a mix ratio or a performance guarantee for any finished item made from it.',
      },
      {
        q: 'Can I use this resin as a laminating resin?',
        a: 'That is a question for the supplier’s documentation and for your own process, not for a general guide. Laminating grades and filled or putty-type systems are formulated for different jobs — wetting out fibre against bulk filling — and this page does not extend the supplier’s published use to a different application.',
      },
      {
        q: 'Is polyester putty a structural repair material?',
        a: 'Industry and trade commentary is consistent that a polyester filler is a cosmetic surface-restoration and fairing material, not a substitute for metal repair, welding or a fibre-reinforced backing. That applies to the finished filler as a class. It is one of the most repeated misunderstandings in the category.',
      },
      {
        q: 'Do you supply ready-mixed body filler as well?',
        a: 'Tell us what the job actually requires and we will tell you what we can and cannot supply. What we will not do is let a name do the talking: if you need a tin of ready-to-spread filler, that is a different request from this grade, and it is better settled before an order than after delivery.',
      },
    ],
    sections: [
      {
        heading: 'The name promises a paste and the drum holds a liquid',
        body: [
          'This is the single most common surprise associated with this grade, and it is entirely the fault of the naming. A buyer reads "Polyester Putty Resin", pictures the tin of two-part filler used in a body shop, and expects something they can spread with a spatula on arrival.',
          'What arrives is a liquid unsaturated polyester resin. The Samrat Poly Resins, India documentation identifies it that way, and the product page says so in the first paragraph rather than leaving the name to do the work. A resin of this type belongs upstream of a filled or putty-type system, not at the point where someone is filling a panel.',
          'We keep the supplier’s product name because that is the name on the documentation and the name buyers will encounter elsewhere. What we will not do is let the name imply a form the drum does not contain.',
        ],
      },
      {
        heading: 'What a ready-mixed body filler actually is',
        body: [
          'The product most people have in mind is a two-part system sold complete: a heavily filled, thixotropic paste in a tin, with a separate hardener paste supplied alongside it. The hardener is worked into the base on a clean, non-porous surface until the colour and consistency are completely uniform, and the mixture then has a finite working period before it begins to gel.',
          'It goes on in thin to moderate layers over a prepared surface, deep repairs built up in several passes rather than one thick mass, with the edges tapered out into the surrounding surface — the technique body shops call feather-edging. Once fully hard it is sanded, starting coarse to establish the shape and moving to finer grades to blend the edge, and then primed, because the cured filler surface is porous and needs sealing before paint.',
          'That is a formulated end product with its own documentation. Describing it accurately here is worth doing precisely because it is what people expect to receive and it is not what this grade is.',
        ],
      },
      {
        heading: 'What the supplier publishes for this grade',
        body: [
          'This grade differs from several newer additions to our range in one important respect: the supplier documentation is on file. The current Technical Data Sheet issued by Samrat Poly Resins, India publishes a viscosity of 450 to 650 cPs at 25°C, a solid content of 60 to 64 per cent, a specific gravity of 1.05 to 1.12 g/cm³ at 25°C, and a heat deflection temperature of 70 to 85°C once cured. A Safety Data Sheet is on file as well, and both are linked from the product page.',
          'Two boundaries apply to those figures, and they matter. They are properties of the supplied resin, published by the manufacturer who makes it, and they describe what is in the drum. They are not a formulation, not a mix ratio, not a cure schedule, and not a performance claim about any finished article somebody produces from the resin.',
          'Samrat FRP Traders did not generate any of those values. We are the trader, supplier, importer and reseller, and we reproduce what the manufacturer publishes with the manufacturer named.',
        ],
      },
      {
        heading: 'The other confusion worth clearing at the same time',
        body: [
          'A second naming problem follows this product around: the label "PET resin", which appears in some trade listings for materials of this kind. Read casually, that suggests polyethylene terephthalate, the thermoplastic used for bottles and fibre, which is a completely different polymer class from a thermosetting unsaturated polyester.',
          'There is a real chemistry behind why such names exist. Published industrial routes describe producing unsaturated polyester resin feedstock by breaking down recycled or waste PET and building a new unsaturated polyester from the result. A resin made that way is still a thermoset, and still behaves as an unsaturated polyester rather than as bottle plastic.',
          'The practical rule for a buyer is the same in both cases: the name on a listing is a description, and the document for the grade is the evidence. We have a separate guide on this specific distinction, linked above.',
        ],
      },
      {
        heading: 'How to make the enquiry produce the right thing',
        body: [
          'Describe the job rather than the product. What are you filling or making, on what substrate, at what scale, and are you buying material to formulate with or material to apply directly. That one distinction sorts this grade from a ready-to-use filler immediately.',
          'If your own quality process needs documentation before you can accept material, say so at the enquiry stage. For this grade both the Technical Data Sheet and the Safety Data Sheet are on file and can be provided. If you need batch-specific evidence, that is a Certificate of Analysis and it is a separate request worth raising before dispatch rather than after.',
          'Pricing, packaging and availability in Nepal are confirmed on enquiry. We do not publish them, because a figure without a stated quantity, pack format, destination and date is not something a buyer can rely on.',
        ],
      },
    ],
    ne: {
      title: 'Polyester Putty Resin बनाम तयारी Body Filler: वास्तवमा के आउँछ',
      description:
        'नाममा putty छ, drum मा liquid resin। Samrat Poly Resins, India ले यस grade लाई कसरी दस्तावेजीकृत गरेका छन्, टिनमा किनिने दुई-भागे body filler भन्दा यो कसरी फरक छ, र तपाईंको कामलाई वास्तवमा कुन चाहिन्छ।',
      seo: {
        title: 'Polyester Putty Resin बनाम तयारी Body Filler | नेपाल',
        ogTitle: 'Polyester Putty Resin बनाम Body Filler: के आउँछ',
        ogDescription:
          'यो liquid unsaturated polyester resin हो, दुई-भागे filler को टिन होइन। आपूर्तिकर्ताले के दस्तावेजीकृत गरेका छन्, र तपाईंलाई कुन चाहिन्छ।',
        keywords: [
          'polyester putty resin',
          'body filler बनाम polyester resin',
          'polyester putty नेपाल',
          'दुई भागे body filler',
        ],
      },
      quickFacts: {
        'के आपूर्ति हुन्छ': 'Liquid unsaturated polyester resin — तयारी putty वा body filler होइन',
        'Body filler भनेको के': 'आफ्नै hardener सहित आउने, प्रयोगका लागि तयार बाक्लो filled paste',
        'कागजातको अवस्था': 'यस grade का supplier Technical Data Sheet र Safety Data Sheet फाइलमा छन्',
        'मान जारी गर्ने': 'Samrat Poly Resins, India — आपूर्ति हुने resin का लागि प्रकाशित',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/resources/what-is-polyester-putty-resin/',
          label: 'Polyester Putty Resin के हो?',
          description: 'यस grade र यसका दुई नामबारे व्याख्या।',
        },
        {
          href: '/resources/polyester-putty-resin-vs-thermoplastic-pet/',
          label: 'Polyester Putty Resin बनाम thermoplastic PET',
          description: 'यस grade सँग जोडिएको अर्को नाम-अन्योल, र यी दुई किन फरक सामग्री हुन्।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'Polyester Putty Resin अर्डर गरे तुरुन्तै लगाउन मिल्ने filler को टिन आउँछ?',
          a: 'आउँदैन। आपूर्ति हुने कुरा liquid unsaturated polyester resin हो। तयारी body filler फरक व्यावसायिक उत्पादन हो: आफ्नै hardener सहित टिनमा आउने, बनिसकेको र लगाउन तयार बाक्लो filled paste। नाम मिल्छ; उत्पादन मिल्दैन।',
        },
        {
          q: 'Liquid नै हो भने putty resin किन भनिन्छ?',
          a: 'किनभने नामले आपूर्ति हुने रूप होइन, अन्तिम प्रयोगको परिवार जनाउँछ। यस्ता resin पछि गएर filled र putty प्रकारका प्रणालीमा जान्छन्। Samrat Poly Resins, India ले यस grade लाई यही नाममा सूचीबद्ध गर्छन्, र उनीहरूको Technical Data Sheet ले वास्तवमा के आपूर्ति हुन्छ भन्ने पहिचान गर्छ। हामी आपूर्तिकर्ताकै नाम प्रयोग गर्छौं तर रूप स्पष्ट भन्छौँ, नामलाई paste को अर्थ लगाउन दिँदैनौँ।',
        },
        {
          q: 'आपूर्ति हुने resin बारे आपूर्तिकर्ताले के प्रकाशित गरेका छन्?',
          a: 'Samrat Poly Resins, India ले जारी गरेको हालको Technical Data Sheet ले 25°C मा 450–650 cPs viscosity, 60–64% solid content, 25°C मा 1.05–1.12 g/cm³ specific gravity र cure भएपछि 70–85°C heat deflection temperature दिन्छ। यी निर्माताले प्रकाशित गरेका, आपूर्ति हुने resin का गुण हुन्। यी formulation, mix ratio वा यसबाट बनेको कुनै तयारी वस्तुको कार्यसम्पादनको ग्यारेन्टी होइनन्।',
        },
        {
          q: 'के यो resin laminating resin का रूपमा प्रयोग गर्न मिल्छ?',
          a: 'त्यो आपूर्तिकर्ताको कागजात र तपाईंकै प्रक्रियाको प्रश्न हो, सामान्य गाइडको होइन। Laminating grade र filled वा putty प्रकारका प्रणाली फरक कामका लागि बनाइन्छन् — fibre भिजाउने र bulk भर्ने — र यो पृष्ठले आपूर्तिकर्ताको प्रकाशित प्रयोगलाई अर्को कामसम्म तन्काउँदैन।',
        },
        {
          q: 'के polyester putty संरचनात्मक मर्मतको सामग्री हो?',
          a: 'उद्योग र व्यापारिक टिप्पणी एकनास छन्: polyester filler सजावटी सतह पुनर्स्थापना र fairing को सामग्री हो, धातु मर्मत, welding वा fibre-reinforced backing को विकल्प होइन। यो तयारी filler लाई वर्गका रूपमा लागू हुन्छ, र यस श्रेणीका सबैभन्दा धेरै दोहोरिने गलत बुझाइमध्ये एक हो।',
        },
        {
          q: 'के तपाईंहरू तयारी body filler पनि दिनुहुन्छ?',
          a: 'काममा वास्तवमा के चाहिएको हो भन्नुहोस्, हामीले के दिन सक्छौँ र सक्दैनौँ बताउँछौँ। हामी नामलाई बोल्न दिँदैनौँ: लगाउन तयार filler को टिन चाहिएको हो भने त्यो यस grade भन्दा फरक माग हो, र delivery पछि होइन, अर्डरअघि नै टुंग्याउनु राम्रो हुन्छ।',
        },
      ],
      sections: [
        {
          heading: 'नामले paste को वाचा गर्छ, drum मा liquid हुन्छ',
          body: [
            'यस grade सँग जोडिएको सबैभन्दा सामान्य अचम्म यही हो, र यसको पूरै दोष नामकरणकै हो। खरिदकर्ताले "Polyester Putty Resin" पढ्छन्, body shop मा प्रयोग हुने दुई-भागे filler को टिन कल्पना गर्छन्, र सामान आइपुग्नेबित्तिकै spatula ले लगाउन मिल्ने कुराको अपेक्षा गर्छन्।',
            'आइपुग्ने कुरा चाहिँ liquid unsaturated polyester resin हो। Samrat Poly Resins, India का कागजातले यसलाई त्यसै गरी पहिचान गर्छन्, र उत्पादन पृष्ठले नामलाई काम गर्न छाड्नुको सट्टा पहिलो अनुच्छेदमै त्यो भन्छ। यस प्रकारको resin filled वा putty प्रणालीभन्दा अघिल्लो चरणमा पर्छ, कसैले प्यानल भरिरहेको ठाउँमा होइन।',
            'हामी आपूर्तिकर्ताको उत्पादन नाम राख्छौँ, किनभने कागजातमा त्यही नाम छ र खरिदकर्ताले अन्यत्र पनि त्यही भेट्छन्। तर drum मा नभएको रूपको अर्थ नामले लगाओस् भन्ने हामी हुन दिँदैनौँ।',
          ],
        },
        {
          heading: 'तयारी body filler वास्तवमा के हो',
          body: [
            'धेरैको मनमा हुने उत्पादन पूरै सेटमा बेचिने दुई-भागे प्रणाली हो: टिनमा बाक्लो, filled, thixotropic paste, र सँगै छुट्टै hardener paste। Hardener लाई सफा, नसोस्ने सतहमा राखेर रङ र गाढापन पूर्ण रूपमा एकनास नहुन्जेल मिसाइन्छ, र त्यसपछि मिश्रणलाई जम्न थाल्नुअघि सीमित समय हुन्छ।',
            'यो तयार पारिएको सतहमा पातलोदेखि मध्यम तहमा लगाइन्छ; गहिरो मर्मत एउटै बाक्लो थुप्रोमा होइन, धेरै पटकमा बनाइन्छ, र किनारा वरिपरिको सतहमा मिल्ने गरी पातलो पारिन्छ — body shop हरूले यसलाई feather-edging भन्छन्। पूरै कडा भएपछि घोटिन्छ: आकार बनाउन खस्रोबाट सुरु गरेर किनारा मिलाउन बिस्तारै मसिनोमा जान्छ, अनि primer लगाइन्छ, किनभने जमेको filler को सतह पोरस हुन्छ र रङअघि सिल गर्नुपर्छ।',
            'त्यो आफ्नै कागजात भएको बनिसकेको अन्तिम उत्पादन हो। यहाँ त्यसको सही वर्णन गर्नु सार्थक छ, किनभने मानिसले पाउँछु भन्ने ठानेको त्यही हो — र यो grade त्यो होइन।',
          ],
        },
        {
          heading: 'यस grade का लागि आपूर्तिकर्ताले के प्रकाशित गर्छन्',
          body: [
            'यो grade हाम्रो श्रेणीका केही नयाँ थपहरूभन्दा एउटा महत्त्वपूर्ण कुरामा फरक छ: यसको supplier कागजात फाइलमा छ। Samrat Poly Resins, India ले जारी गरेको हालको Technical Data Sheet ले 25°C मा 450–650 cPs viscosity, 60–64% solid content, 25°C मा 1.05–1.12 g/cm³ specific gravity, र cure भएपछि 70–85°C heat deflection temperature प्रकाशित गर्छ। Safety Data Sheet पनि फाइलमा छ, र दुवै उत्पादन पृष्ठबाट लिंक गरिएका छन्।',
            'ती अंकमा दुई सीमा लागू हुन्छन्, र ती महत्त्वपूर्ण छन्। यी आपूर्ति हुने resin का गुण हुन्, बनाउने निर्माताले प्रकाशित गरेका, र drum भित्र के छ भन्ने बताउँछन्। यी formulation होइनन्, mix ratio होइनन्, cure schedule होइनन्, र कसैले यस resin बाट बनाएको तयारी वस्तुको कार्यसम्पादनको दाबी पनि होइनन्।',
            'Samrat FRP Traders ले यीमध्ये कुनै मान उत्पन्न गरेको होइन। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ, र निर्माताले प्रकाशित गरेको कुरा निर्माताकै नाम राखेर दोहोर्‍याउँछौँ।',
          ],
        },
        {
          heading: 'सँगै हटाउन लायक अर्को अन्योल',
          body: [
            'यस उत्पादनसँगै अर्को नाम-समस्या पनि आउँछ: केही व्यापारिक listing मा देखिने "PET resin" भन्ने label। हतारमा पढ्दा यसले polyethylene terephthalate — बोतल र धागोमा प्रयोग हुने thermoplastic — को अर्थ दिन्छ, जुन thermosetting unsaturated polyester भन्दा बिल्कुलै फरक polymer वर्ग हो।',
            'यस्ता नाम हुनुको पछाडि वास्तविक रसायन पनि छ। प्रकाशित औद्योगिक विधिहरूले प्रयोग भइसकेको वा फालिएको PET भत्काएर त्यसबाट नयाँ unsaturated polyester बनाउने बाटो वर्णन गर्छन्। त्यसरी बनेको resin पनि thermoset नै रहन्छ र बोतलको प्लास्टिक जस्तो होइन, unsaturated polyester कै जस्तो व्यवहार गर्छ।',
            'खरिदकर्ताका लागि व्यावहारिक नियम दुवै अवस्थामा उस्तै हो: listing को नाम विवरण हो, र grade कै कागजात प्रमाण हो। यही फरकबारे हाम्रो छुट्टै गाइड छ, माथि लिंक गरिएको।',
          ],
        },
        {
          heading: 'सोधपुछबाट ठीक कुरा आओस् भन्नका लागि',
          body: [
            'उत्पादन होइन, काम वर्णन गर्नुहोस्। के भर्दै वा बनाउँदै हुनुहुन्छ, कुन substrate मा, कति ठूलो पैमानामा, र तपाईं formulation गर्न सामग्री किन्दै हुनुहुन्छ कि सिधै लगाउने सामग्री। यही एउटा फरकले यस grade लाई लगाउन तयार filler बाट तुरुन्तै छुट्याउँछ।',
            'सामग्री स्वीकार गर्नुअघि आफ्नो गुणस्तर प्रक्रियालाई कागजात चाहिन्छ भने सोधपुछकै बेला भन्नुहोस्। यस grade का Technical Data Sheet र Safety Data Sheet दुवै फाइलमा छन् र उपलब्ध गराउन सकिन्छ। Batch-विशेष प्रमाण चाहिन्छ भने त्यो Certificate of Analysis हो र त्यो छुट्टै माग हो — पठाइसकेपछि होइन, अघि नै उठाउनु राम्रो।',
            'नेपालमा मूल्य, प्याकेजिङ र उपलब्धता सोधपुछमा पुष्टि हुन्छन्। हामी ती प्रकाशित गर्दैनौँ, किनभने परिमाण, pack format, गन्तव्य र मिति नभनी दिइएको अंकमा खरिदकर्ताले भर पर्न सक्दैन।',
          ],
        },
      ],
    },
  },
];
