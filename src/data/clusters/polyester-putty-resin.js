// Polyester Putty Resin cluster addition.
//
// This product already had a cluster, but it was written under the retired
// "PET Resin" name and did not answer the question the product's own name
// provokes: whether what arrives is a tub of ready-mixed body filler. It is
// not. It is a polyester resin used to make putty and polish for body repair.
//
// No Technical Data Sheet or Safety Data Sheet is presented for this grade. The
// documents once associated with the name (SPR-TDS-PET, SPR-SDS-PET) were
// issued for PET Resin, a sheet-grade resin, and do not establish this grade's
// specification or safety data, so neither is linked or quoted here.

import {
  commercialPosition,
  enquiryLink,
  neCommercialPosition,
  neEnquiryLink,
} from './shared.js';

const product = {
  href: '/products/polyester-putty-resin/',
  label: 'View Polyester Putty Resin',
  description: 'The commercial product page and enquiry route.',
};
const neProduct = {
  href: '/products/polyester-putty-resin/',
  label: 'Polyester Putty Resin हेर्नुहोस्',
  description: 'व्यावसायिक उत्पादन पृष्ठ र सोधपुछको बाटो।',
};

export const polyesterPuttyResinCluster = [
  {
    slug: 'is-polyester-putty-resin-a-body-filler',
    title: 'Is Polyester Putty Resin a Ready-Mixed Body Filler? What Actually Arrives',
    description:
      'The product name says putty; what is supplied is the resin putty is made from. How it differs from a two-part body filler bought by the tin, and which of the two your job actually needs.',
    category: 'Product Selection',
    icon: 'drum',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'Is Polyester Putty Resin a Body Filler? | Nepal Supplier',
      ogTitle: 'Is Polyester Putty Resin a Body Filler?',
      ogDescription:
        'A polyester resin for making putty and polish, not a tub of two-part filler. What is supplied, and which one your job needs.',
      keywords: [
        'polyester putty resin',
        'polyester putty resin body filler',
        'polyester putty Nepal',
        'two part body filler',
        'polyester putty resin supplier Nepal',
      ],
    },
    quickFacts: {
      'What is supplied': 'A polyester resin for making putty and polish, not a ready-mixed putty or body filler',
      'What a body filler is': 'A heavily filled paste sold with its own hardener, ready to use',
      'Document position': 'No TDS or SDS offered here; technical and safety information confirmed on enquiry',
      'Values issued by': 'Samrat Poly Resins, India — confirmed for the supplied resin on enquiry',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: [
      'what-is-polyester-putty-resin',
      'polyester-putty-resin-technical-specifications-and-rfq',
      'polyester-putty-resin-applications',
    ],
    recommendedLinks: [
      product,
      {
        href: '/resources/what-is-polyester-putty-resin/',
        label: 'What is Polyester Putty Resin?',
        description: 'The explainer covering what the resin is used for and what the name does not mean.',
      },
      {
        href: '/resources/polyester-putty-resin-technical-specifications-and-rfq/',
        label: 'Polyester Putty Resin enquiry guide',
        description: 'What is and is not published for this grade, and how to ask for the rest.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'If I order Polyester Putty Resin, do I get a tub of filler I can apply straight away?',
        a: 'No. What is supplied is a polyester resin used to make putty and polish for body repair. A ready-mixed body filler is a different commercial product: a heavily filled paste sold in a tin with its own hardener, formulated and ready to spread. The name overlaps; the product does not.',
      },
      {
        q: 'Why is it called putty resin if it is not a putty?',
        a: 'Because the name describes what the resin is used to make rather than the form it is supplied in. Producers use it as the resin in putty and polish for body repair. We use the supplier’s name for the product and state plainly that it is an ingredient, so the name does not imply a ready-to-spread paste.',
      },
      {
        q: 'What does the supplier publish about the supplied resin?',
        a: 'No Technical Data Sheet or Safety Data Sheet is offered for this grade on this site. The PET Resin documents once associated with the name describe a different, sheet-grade resin and are not used here. Technical values and safety information are confirmed with Samrat Poly Resins, India on enquiry. Whatever those values are, they are not a formulation, a mix ratio or a performance guarantee for any putty or polish made from it.',
      },
      {
        q: 'Can I use this resin as a laminating resin?',
        a: 'That is a question for the supplier and for your own process, not for a general guide. Laminating grades and putty or polish systems are formulated for different jobs — wetting out fibre against filling and finishing a surface — and this page does not extend the resin’s stated use to a different application.',
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
        heading: 'The name promises a paste and the drum holds a resin',
        body: [
          'This is the single most common surprise associated with this grade, and it is entirely the fault of the naming. A buyer reads "Polyester Putty Resin", pictures the tin of two-part filler used in a body shop, and expects something they can spread with a spatula on arrival.',
          'What arrives is a polyester resin that producers use to make putty and polish for body repair. The product page says so in the first paragraph rather than leaving the name to do the work. A resin of this type belongs upstream of a finished putty or polish, not at the point where someone is filling a panel.',
          'We keep the supplier’s product name because that is the name buyers will encounter elsewhere. What we will not do is let the name imply a finished product the drum does not contain.',
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
        heading: 'What is and is not published for this grade',
        body: [
          'No Technical Data Sheet or Safety Data Sheet is offered for this grade here. The PET Resin documents once associated with the name were issued for a sheet-grade resin and do not establish this grade’s specification or safety data, so no supplied-resin figures are quoted in this guide. Ask for current technical values and safety information at the enquiry stage.',
          'Two boundaries apply to those figures once they are confirmed. They are properties of the supplied resin, published by the manufacturer who makes it, and they describe what is in the drum. They are not a formulation, not a mix ratio, not a cure schedule, and not a performance claim about any finished article somebody produces from the resin.',
          'Samrat FRP Traders does not generate any of those values. We are the trader, supplier, importer and reseller, and we reproduce what the manufacturer publishes with the manufacturer named.',
        ],
      },
      {
        heading: 'Why the PET Resin documents are not used here',
        body: [
          'Some documents that circulated under this product name were issued for PET Resin, a sheet-grade resin with its own figures and its own recommended uses in sheet, fibre-sheet and panel work. They describe a different product role from a resin used to make putty and polish, so they are not linked from this site.',
          'Read casually, the PET label also suggests polyethylene terephthalate, the thermoplastic used for bottles and fibre — a completely different polymer class from a thermosetting polyester resin. Neither reading establishes what this grade is.',
          'The practical rule for a buyer is the same in every case: a name on a listing is a description, and a document issued for the exact grade is the evidence. Until one is on file for this grade, technical and safety information is confirmed on enquiry.',
        ],
      },
      {
        heading: 'How to make the enquiry produce the right thing',
        body: [
          'Describe the job rather than the product. What are you filling or making, on what substrate, at what scale, and are you buying resin to make putty or polish with, or a finished product to apply directly. That one distinction sorts this grade from a ready-to-use filler immediately.',
          'If your own quality process needs documentation before you can accept material, say so at the enquiry stage. No Technical Data Sheet or Safety Data Sheet is offered for this grade here, so ask what the supplier can provide for the exact grade before an order. If you need batch-specific evidence, that is a Certificate of Analysis and it is a separate request worth raising before dispatch rather than after.',
          'Pricing, packaging and availability in Nepal are confirmed on enquiry. We do not publish them, because a figure without a stated quantity, pack format, destination and date is not something a buyer can rely on.',
        ],
      },
    ],
    ne: {
      title: 'के Polyester Putty Resin तयारी Body Filler हो? वास्तवमा के आउँछ',
      description:
        'नाममा putty छ; आपूर्ति हुने कुरा चाहिँ putty बनाइने resin हो। टिनमा किनिने दुई-भागे body filler भन्दा यो कसरी फरक छ, र तपाईंको कामलाई वास्तवमा कुन चाहिन्छ।',
      seo: {
        title: 'के Polyester Putty Resin एउटा Body Filler हो? | नेपाल',
        ogTitle: 'के Polyester Putty Resin एउटा Body Filler हो?',
        ogDescription:
          'यो putty र polish बनाउने polyester resin हो, दुई-भागे filler को टिन होइन। के आपूर्ति हुन्छ, र तपाईंलाई कुन चाहिन्छ।',
        keywords: [
          'polyester putty resin',
          'body filler बनाम polyester resin',
          'polyester putty नेपाल',
          'दुई भागे body filler',
        ],
      },
      quickFacts: {
        'के आपूर्ति हुन्छ': 'Putty र polish बनाउने polyester resin — तयारी putty वा body filler होइन',
        'Body filler भनेको के': 'आफ्नै hardener सहित आउने, प्रयोगका लागि तयार बाक्लो filled paste',
        'कागजातको अवस्था': 'यहाँ TDS वा SDS प्रस्तुत छैन; प्राविधिक र सुरक्षा जानकारी सोधपुछमा पुष्टि',
        'मान जारी गर्ने': 'Samrat Poly Resins, India — आपूर्ति हुने resin का लागि सोधपुछमा पुष्टि',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/resources/what-is-polyester-putty-resin/',
          label: 'Polyester Putty Resin के हो?',
          description: 'यो resin केका लागि प्रयोग हुन्छ र नामको अर्थ के होइन भन्ने व्याख्या।',
        },
        {
          href: '/resources/polyester-putty-resin-technical-specifications-and-rfq/',
          label: 'Polyester Putty Resin सोधपुछ गाइड',
          description: 'यस grade का लागि के प्रकाशित छ र के छैन, र बाँकी कसरी माग्ने।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'Polyester Putty Resin अर्डर गरे तुरुन्तै लगाउन मिल्ने filler को टिन आउँछ?',
          a: 'आउँदैन। आपूर्ति हुने कुरा body repair का लागि putty र polish बनाउन प्रयोग हुने polyester resin हो। तयारी body filler फरक व्यावसायिक उत्पादन हो: आफ्नै hardener सहित टिनमा आउने, बनिसकेको र लगाउन तयार बाक्लो filled paste। नाम मिल्छ; उत्पादन मिल्दैन।',
        },
        {
          q: 'Putty होइन भने putty resin किन भनिन्छ?',
          a: 'किनभने नामले आपूर्ति हुने रूप होइन, resin बाट के बनाइन्छ भन्ने जनाउँछ। उत्पादकहरूले यसलाई body repair का putty र polish मा resin का रूपमा प्रयोग गर्छन्। हामी आपूर्तिकर्ताकै नाम प्रयोग गर्छौं तर यो कच्चा सामग्री हो भनी स्पष्ट भन्छौँ, ताकि नामले लगाउन तयार paste को अर्थ नदिओस्।',
        },
        {
          q: 'आपूर्ति हुने resin बारे आपूर्तिकर्ताले के प्रकाशित गरेका छन्?',
          a: 'यस साइटमा यस grade का लागि कुनै Technical Data Sheet वा Safety Data Sheet प्रस्तुत गरिएको छैन। नामसँग पहिले जोडिएका PET Resin कागजातले फरक, sheet-grade resin को वर्णन गर्छन् र यहाँ प्रयोग गरिँदैनन्। प्राविधिक मान र सुरक्षा जानकारी सोधपुछमा Samrat Poly Resins, India सँग पुष्टि गरिन्छ। ती मान जे भए पनि formulation, mix ratio वा यसबाट बनेको putty वा polish को कार्यसम्पादनको ग्यारेन्टी होइनन्।',
        },
        {
          q: 'के यो resin laminating resin का रूपमा प्रयोग गर्न मिल्छ?',
          a: 'त्यो आपूर्तिकर्ता र तपाईंकै प्रक्रियाको प्रश्न हो, सामान्य गाइडको होइन। Laminating grade र putty वा polish प्रणाली फरक कामका लागि बनाइन्छन् — fibre भिजाउने, र सतह भर्ने तथा finish गर्ने — र यो पृष्ठले resin को भनिएको प्रयोगलाई अर्को कामसम्म तन्काउँदैन।',
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
          heading: 'नामले paste को वाचा गर्छ, drum मा resin हुन्छ',
          body: [
            'यस grade सँग जोडिएको सबैभन्दा सामान्य अचम्म यही हो, र यसको पूरै दोष नामकरणकै हो। खरिदकर्ताले "Polyester Putty Resin" पढ्छन्, body shop मा प्रयोग हुने दुई-भागे filler को टिन कल्पना गर्छन्, र सामान आइपुग्नेबित्तिकै spatula ले लगाउन मिल्ने कुराको अपेक्षा गर्छन्।',
            'आइपुग्ने कुरा चाहिँ उत्पादकहरूले body repair का लागि putty र polish बनाउन प्रयोग गर्ने polyester resin हो। उत्पादन पृष्ठले नामलाई काम गर्न छाड्नुको सट्टा पहिलो अनुच्छेदमै त्यो भन्छ। यस प्रकारको resin बनिसकेको putty वा polish भन्दा अघिल्लो चरणमा पर्छ, कसैले प्यानल भरिरहेको ठाउँमा होइन।',
            'हामी आपूर्तिकर्ताको उत्पादन नाम राख्छौँ, किनभने खरिदकर्ताले अन्यत्र पनि त्यही नाम भेट्छन्। तर drum मा नभएको बनिसकेको उत्पादनको अर्थ नामले लगाओस् भन्ने हामी हुन दिँदैनौँ।',
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
          heading: 'यस grade का लागि के प्रकाशित छ र के छैन',
          body: [
            'यस grade का लागि यहाँ कुनै Technical Data Sheet वा Safety Data Sheet प्रस्तुत गरिएको छैन। नामसँग पहिले जोडिएका PET Resin कागजात sheet-grade resin का लागि जारी भएका थिए र तिनले यस grade को specification वा सुरक्षा डाटा स्थापित गर्दैनन्, त्यसैले यो गाइडमा आपूर्ति हुने resin का अंक राखिएका छैनन्। हालको प्राविधिक मान र सुरक्षा जानकारी सोधपुछकै बेला माग्नुहोस्।',
            'ती अंक पुष्टि भएपछि दुई सीमा लागू हुन्छन्, र ती महत्त्वपूर्ण छन्। यी आपूर्ति हुने resin का गुण हुन्, बनाउने निर्माताले प्रकाशित गरेका, र drum भित्र के छ भन्ने बताउँछन्। यी formulation होइनन्, mix ratio होइनन्, cure schedule होइनन्, र कसैले यस resin बाट बनाएको तयारी वस्तुको कार्यसम्पादनको दाबी पनि होइनन्।',
            'Samrat FRP Traders ले यीमध्ये कुनै मान उत्पन्न गर्दैन। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ, र निर्माताले प्रकाशित गरेको कुरा निर्माताकै नाम राखेर दोहोर्‍याउँछौँ।',
          ],
        },
        {
          heading: 'PET Resin कागजात यहाँ किन प्रयोग गरिँदैनन्',
          body: [
            'यस उत्पादन नाममा चलेका केही कागजात PET Resin का लागि जारी भएका थिए — आफ्नै अंक र sheet, fibre-sheet तथा panel काममा आफ्नै सिफारिस गरिएका प्रयोग भएको sheet-grade resin। तिनले putty र polish बनाउने resin भन्दा फरक उत्पादन भूमिकाको वर्णन गर्छन्, त्यसैले यो साइटबाट लिंक गरिँदैनन्।',
            'हतारमा पढ्दा PET label ले polyethylene terephthalate — बोतल र धागोमा प्रयोग हुने thermoplastic — को अर्थ पनि दिन्छ, जुन thermosetting polyester resin भन्दा बिल्कुलै फरक polymer वर्ग हो। दुवैमध्ये कुनै अर्थले यो grade के हो भनी स्थापित गर्दैन।',
            'खरिदकर्ताका लागि व्यावहारिक नियम हरेक अवस्थामा उस्तै हो: listing को नाम विवरण हो, र ठ्याक्कै त्यही grade का लागि जारी कागजात प्रमाण हो। यस grade का लागि त्यस्तो कागजात फाइलमा नआउन्जेल प्राविधिक र सुरक्षा जानकारी सोधपुछमा पुष्टि गरिन्छ।',
          ],
        },
        {
          heading: 'सोधपुछबाट ठीक कुरा आओस् भन्नका लागि',
          body: [
            'उत्पादन होइन, काम वर्णन गर्नुहोस्। के भर्दै वा बनाउँदै हुनुहुन्छ, कुन substrate मा, कति ठूलो पैमानामा, र तपाईं putty वा polish बनाउन resin किन्दै हुनुहुन्छ कि सिधै लगाउने बनिसकेको उत्पादन। यही एउटा फरकले यस grade लाई लगाउन तयार filler बाट तुरुन्तै छुट्याउँछ।',
            'सामग्री स्वीकार गर्नुअघि आफ्नो गुणस्तर प्रक्रियालाई कागजात चाहिन्छ भने सोधपुछकै बेला भन्नुहोस्। यस grade का लागि यहाँ कुनै Technical Data Sheet वा Safety Data Sheet प्रस्तुत गरिएको छैन, त्यसैले अर्डरअघि ठ्याक्कै यस grade का लागि आपूर्तिकर्ताले के दिन सक्छन् भनी सोध्नुहोस्। Batch-विशेष प्रमाण चाहिन्छ भने त्यो Certificate of Analysis हो र त्यो छुट्टै माग हो — पठाइसकेपछि होइन, अघि नै उठाउनु राम्रो।',
            'नेपालमा मूल्य, प्याकेजिङ र उपलब्धता सोधपुछमा पुष्टि हुन्छन्। हामी ती प्रकाशित गर्दैनौँ, किनभने परिमाण, pack format, गन्तव्य र मिति नभनी दिइएको अंकमा खरिदकर्ताले भर पर्न सक्दैन।',
          ],
        },
      ],
    },
  },
];
