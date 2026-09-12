// ISO Polyester Resin cluster.
// The dominant buyer confusion for this grade is the letters themselves:
// "ISO" here is isophthalic acid, not an ISO certification. Every guide in this
// cluster is built around a question buyers actually ask, and none of them
// states a grade value, because no supplier document for this grade is on file.

import {
  commercialPosition,
  docsPending,
  enquiryLink,
  neCommercialPosition,
  neDocsPending,
  neEnquiryLink,
} from './shared.js';

const product = {
  href: '/products/iso-polyester-resin/',
  label: 'View ISO Polyester Resin',
  description: 'The commercial product page, with what we can and cannot confirm about this grade.',
};
const neProduct = {
  href: '/products/iso-polyester-resin/',
  label: 'ISO Polyester Resin हेर्नुहोस्',
  description: 'व्यावसायिक उत्पादन पृष्ठ — यस grade बारे के पुष्टि गर्न सकिन्छ र के सकिँदैन।',
};

export const isoPolyesterResinCluster = [
  {
    slug: 'what-is-isophthalic-polyester-resin',
    title: 'What Is Isophthalic Polyester Resin? The ISO in ISO Resin',
    description:
      'Isophthalic polyester resin explained for Nepal buyers: what the "ISO" actually refers to, how the isophthalic backbone differs from a general-purpose orthophthalic one, and four things the label is assumed to guarantee but does not.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '7 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'What Is Isophthalic Polyester Resin? ISO Resin Explained',
      ogTitle: 'What Is Isophthalic (ISO) Polyester Resin?',
      ogDescription:
        'The "ISO" in ISO resin is isophthalic acid, not an ISO certification. What the isophthalic backbone changes, and what it does not.',
      keywords: [
        'isophthalic polyester resin',
        'ISO resin',
        'ISO polyester resin Nepal',
        'isophthalic vs orthophthalic',
        'ISO NPG resin',
        'unsaturated polyester resin Nepal',
      ],
    },
    quickFacts: {
      'What "ISO" means here': 'Isophthalic acid — the dibasic acid used to build the polyester backbone',
      'What it does not mean': 'An ISO certification, an ISO standard number, or a quality tier',
      'Typically specified for': 'Laminates that stay wet or meet chemicals over a long service life',
      'Commercial position': commercialPosition,
      'Document status': docsPending,
    },
    relatedSlugs: [
      'iso-polyester-resin-vs-gp-polyester-resin',
      'iso-polyester-resin-vs-vinyl-ester-resin',
      'iso-polyester-resin-procurement-guide',
    ],
    recommendedLinks: [
      product,
      {
        href: '/products/polyester-resins/',
        label: 'Polyester resin range',
        description: 'Where this grade sits among the other polyester grades in the catalogue.',
      },
      {
        href: '/resources/what-is-gp-polyester-resin/',
        label: 'What is GP polyester resin?',
        description: 'The general-purpose grade this one is usually being compared against.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Does "ISO" mean the resin is ISO certified?',
        a: 'No, and this is the most common misreading of the name. The letters stand for isophthalic acid, one of the raw materials used to build the polyester backbone. It is a chemistry description, not a certification. A supplier may separately hold ISO 9001, but that certifies how the company runs its quality management system. It is not a statement about the technical performance of a resin batch.',
      },
      {
        q: 'What is the difference between isophthalic and orthophthalic resin?',
        a: 'They are built on positional isomers of the same acid, and that structural difference carries through to the cured laminate. Orthophthalic grades are the economical general-purpose default. Isophthalic grades are described across the industry as more resistant to hydrolysis, which is the property that matters when a laminate holds water or chemicals for years rather than sitting dry.',
      },
      {
        q: 'Is isophthalic resin the same as vinyl ester resin?',
        a: 'No. They are different resin families. Vinyl ester is generally positioned above isophthalic polyester for aggressive chemical service. The two are often mentioned together because both are sold for corrosion duty, but they should not be treated as interchangeable names for one product.',
      },
      {
        q: 'Is ISO/NPG resin the same as ISO resin?',
        a: 'Not quite. NPG refers to neopentyl glycol, a further compositional choice layered on top of the isophthalic acid choice. An ISO/NPG grade is a more specific specification than "isophthalic" alone, so if a drawing or standard calls for ISO/NPG, asking for an isophthalic resin is not automatically the same request.',
      },
      {
        q: 'Does an isophthalic grade make a laminate fire retardant or approved for drinking water?',
        a: 'No. Flame retardancy comes from a formulation designed for it, and potable-water suitability depends on a specific approval covering contact with drinking water. Neither follows from the acid used in the backbone. If your project needs either, ask which standard or certificate is being claimed and for the document that supports it.',
      },
      {
        q: 'Can you send the data sheet for your ISO Polyester Resin?',
        a: 'Not yet. The supplier Technical Data Sheet and Safety Data Sheet for this grade are not currently in our document library. Contact us and we will confirm what Samrat Poly Resins, India publishes for the grade at the time of your enquiry. We would rather say that than publish a figure we cannot evidence.',
      },
    ],
    sections: [
      {
        heading: 'Three letters, two meanings',
        body: [
          'Almost every enquiry about this grade starts from the same misunderstanding. The buyer sees "ISO" and reads it as a certification mark, the same ISO that appears in ISO 9001 on a supplier letterhead. It is not. In resin naming, ISO is shorthand for isophthalic acid, one of the two building blocks used to make the polyester backbone.',
          'The distinction matters commercially, not just pedantically. A buyer who thinks ISO means certified will accept the label as proof of quality and stop asking questions. A buyer who knows ISO means isophthalic will ask the questions that actually settle whether the grade suits the job: which acid, which glycol, what the manufacturer publishes for it, and whether any standard is being claimed alongside.',
          'It is worth being blunt about the other half of that confusion too. A supplier holding ISO 9001 has demonstrated a documented quality management system. That is a real and useful thing. It says nothing about whether a particular drum of resin will resist the chemical you intend to store in it.',
        ],
      },
      {
        heading: 'What changes when the acid changes',
        body: [
          'An unsaturated polyester resin is built by reacting a dibasic acid with a glycol and dissolving the result in styrene. Change the acid and you change the structure of the cured network. Orthophthalic and isophthalic acid are positional isomers, the same atoms arranged differently, and that rearrangement changes how the finished polymer holds up when water gets into it.',
          'The industry description is consistent: the isophthalic backbone is more resistant to hydrolysis, the slow chemical attack that water carries out on ester linkages over years of contact. That is the whole reason the grade exists. It is not a stronger resin in the sense of a higher number on a tensile test, and it should not be sold that way.',
          'Everything else about working with it is broadly familiar. It is still an unsaturated polyester. It still cures at workshop temperature with a peroxide catalyst and, where the system calls for one, an accelerator. It still wets out glass reinforcement. A fabricator moving from a general-purpose grade to an isophthalic one is changing the durability of the finished part, not relearning the process.',
        ],
      },
      {
        heading: 'When the upgrade earns its cost, and when it does not',
        body: [
          'The practical decision is about service condition, not about which resin is better. If the finished part stays wet or meets chemicals, such as storage tanks, pipework, scrubbers, cooling tower components and effluent handling, the isophthalic route is what the industry specifies, and the extra cost buys service life. If the part is a dry indoor panel, a decorative moulding or a sheltered enclosure, that same extra cost usually earns nothing.',
          'The asymmetry is worth stating plainly, because it is where money is actually lost. Paying for an isophthalic backbone on a dry indoor laminate wastes a margin. Using a general-purpose grade on a chemical tank risks the tank. Those two mistakes do not cost the same.',
          'There is also a middle route that gets overlooked. Many designs do not use one resin throughout: they use an isophthalic barrier or surface layer against the wet face and a general-purpose structural laminate behind it. Whether that is appropriate for your part depends on the design and on any standard governing it, so it is a question for whoever specifies the laminate rather than a general rule.',
        ],
      },
      {
        heading: 'Four things the label does not carry',
        body: [
          'Fire retardancy is a separate formulation. A resin is flame retardant because it was built to be, and because test data supports the claim. It is not flame retardant because it is isophthalic. If you need a fire-retardant grade, ask for one by name and ask what test the claim rests on.',
          'Potable-water suitability is a separate approval. Holding drinking water is a regulated use, and the question is which standard or certificate covers it and whether the certificate names the whole construction, including any gelcoat or lining on the water-contact face, not just the laminating resin.',
          'A batch guarantee is a separate document. A Technical Data Sheet describes typical published properties of a grade. A Certificate of Analysis reports measured values for a specific batch, and is only meaningful when its batch number matches the drum in front of you and the invoice.',
          'And a marketplace listing title is not a specification. "ISO resin" typed into a product title is a seller’s description. What settles the matter is the manufacturer’s own document for the grade you are actually being offered.',
        ],
      },
      {
        heading: 'What we can and cannot tell you about our grade',
        body: [
          'Samrat FRP Traders supplies and imports ISO Polyester Resin for the Nepal market. The supplier is Samrat Poly Resins, India, a separate business. We are the trader, supplier, importer and reseller, and we do not manufacture, formulate or test resin.',
          'For this particular grade we do not yet hold the supplier’s Technical Data Sheet or Safety Data Sheet. That is why you will not find viscosity, gel time, styrene content or storage figures anywhere on our ISO Polyester Resin pages. Publishing numbers we cannot evidence would make the pages look more complete and be worth less than nothing to a buyer who then specified against them.',
          'What we can do is tell you what the supplier positions the grade for, put your question to them, and send you what they currently publish. If your own quality process needs a specific document before you can order, say so at the enquiry stage rather than after.',
        ],
      },
      {
        heading: 'Boundaries of this guide',
        body: [
          'This page explains a resin family and the naming around it. It is not a formulation, a dosage table, a cure schedule, a chemical-compatibility chart or an approval for any specific duty. Catalyst and accelerator quantities, storage conditions, personal protective equipment and incompatibilities are governed by the current supplier documentation for the grade you receive and by the controls in place at your own site.',
        ],
      },
    ],
    ne: {
      title: 'Isophthalic Polyester Resin के हो? ISO Resin मा ISO को अर्थ',
      description:
        'नेपाली खरिदकर्ताका लागि isophthalic polyester resin: "ISO" ले वास्तवमा के जनाउँछ, isophthalic संरचना सामान्य orthophthalic भन्दा कसरी फरक हुन्छ, र यसले दिन्छ भन्ने अनुमान गरिने तर वास्तवमा नदिने चार कुरा।',
      seo: {
        title: 'Isophthalic Polyester Resin के हो? ISO Resin व्याख्या',
        ogTitle: 'Isophthalic (ISO) Polyester Resin के हो?',
        ogDescription:
          'ISO Resin मा "ISO" भनेको isophthalic acid हो, ISO प्रमाणपत्र होइन। Isophthalic संरचनाले के फेर्छ र के फेर्दैन।',
        keywords: [
          'isophthalic polyester resin',
          'ISO resin नेपाल',
          'ISO polyester resin',
          'isophthalic र orthophthalic फरक',
          'unsaturated polyester resin नेपाल',
        ],
      },
      quickFacts: {
        '"ISO" को अर्थ': 'Isophthalic acid — polyester संरचना बनाउन प्रयोग हुने dibasic acid',
        'यसको अर्थ होइन': 'ISO प्रमाणपत्र, ISO मानक नम्बर वा गुणस्तर तह',
        'सामान्यतया कहाँ तोकिन्छ': 'लामो समय पानी वा रसायनको सम्पर्कमा रहने laminate',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'कागजात अवस्था': neDocsPending,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/products/polyester-resins/',
          label: 'Polyester resin श्रेणी',
          description: 'यो grade अन्य polyester grade बीच कहाँ पर्छ।',
        },
        {
          href: '/resources/what-is-gp-polyester-resin/',
          label: 'GP polyester resin के हो?',
          description: 'प्रायः यसैसँग तुलना गरिने सामान्य प्रयोजनको grade।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के "ISO" ले resin ISO certified छ भन्ने जनाउँछ?',
          a: 'जनाउँदैन — यही नै सबैभन्दा धेरै हुने गलत बुझाइ हो। यी अक्षरले isophthalic acid जनाउँछन्, जुन polyester संरचना बनाउने कच्चा पदार्थमध्ये एक हो। यो रसायनको वर्णन हो, प्रमाणपत्र होइन। आपूर्तिकर्ताले छुट्टै ISO 9001 राखेको हुन सक्छ, तर त्यसले कम्पनीको गुणस्तर व्यवस्थापन प्रणाली प्रमाणित गर्छ, कुनै resin batch को प्राविधिक कार्यसम्पादन होइन।',
        },
        {
          q: 'Isophthalic र orthophthalic resin बीच के फरक छ?',
          a: 'दुवै एउटै acid का positional isomer बाट बन्छन्, र त्यो संरचनागत फरक जमेको laminate सम्म पुग्छ। Orthophthalic grade सस्तो र सामान्य प्रयोजनको हुन्छ। Isophthalic grade लाई उद्योगभर बढी hydrolysis सहने भनिन्छ — वर्षौँ पानी वा रसायन बोक्नुपर्ने laminate मा यही गुण महत्त्वपूर्ण हुन्छ।',
        },
        {
          q: 'के isophthalic resin र vinyl ester resin उस्तै हुन्?',
          a: 'होइनन्। यी फरक resin परिवार हुन्। कडा रासायनिक सेवाका लागि vinyl ester लाई सामान्यतया isophthalic polyester भन्दा माथि राखिन्छ। दुवै corrosion सेवाका लागि बेचिने भएकाले सँगै उल्लेख हुन्छन्, तर एकअर्काको पर्यायवाची होइनन्।',
        },
        {
          q: 'के ISO/NPG resin र ISO resin एउटै हो?',
          a: 'ठ्याक्कै होइन। NPG ले neopentyl glycol जनाउँछ, जुन isophthalic acid छनोटमाथि थपिने अर्को संरचनागत छनोट हो। ISO/NPG grade "isophthalic" भन्दा बढी निर्दिष्ट माग हो, त्यसैले drawing वा मानकले ISO/NPG मागेको छ भने isophthalic resin मागे पुग्छ भन्ने हुँदैन।',
        },
        {
          q: 'के isophthalic grade ले laminate लाई fire retardant वा खानेपानी-उपयुक्त बनाउँछ?',
          a: 'बनाउँदैन। Flame retardancy त्यसैका लागि बनाइएको formulation बाट आउँछ, र खानेपानी उपयुक्तता खानेपानी सम्पर्कसम्बन्धी निश्चित स्वीकृतिमा भर पर्छ। संरचनामा प्रयोग भएको acid ले यी दुवै दिँदैन। आवश्यक भए कुन मानक वा प्रमाणपत्र दाबी गरिएको हो र त्यसको कागजात के हो भनी सोध्नुहोस्।',
        },
        {
          q: 'तपाईंको ISO Polyester Resin को data sheet पठाउन सक्नुहुन्छ?',
          a: 'अहिले सक्दैनौँ। यस grade को supplier Technical Data Sheet र Safety Data Sheet हाम्रो कागजात पुस्तकालयमा छैन। सम्पर्क गर्नुहोस्; सोधपुछका बेला Samrat Poly Resins, India ले के प्रकाशित गरेका छन् हामी पुष्टि गरेर पठाउँछौँ। प्रमाणित गर्न नसक्ने अंक प्रकाशित गर्नुभन्दा यो भन्नु उचित ठान्छौँ।',
        },
      ],
      sections: [
        {
          heading: 'तीन अक्षर, दुई अर्थ',
          body: [
            'यस grade बारे आउने लगभग हरेक सोधपुछ एउटै गलत बुझाइबाट सुरु हुन्छ। खरिदकर्ताले "ISO" देख्छन् र त्यसलाई प्रमाणपत्रको चिन्ह ठान्छन् — आपूर्तिकर्ताको letterhead मा देखिने ISO 9001 कै ISO। त्यो होइन। Resin को नाममा ISO भनेको isophthalic acid हो, polyester संरचना बनाउने दुई मुख्य कच्चा पदार्थमध्ये एक।',
            'यो फरक व्यावसायिक रूपमै महत्त्वपूर्ण छ। ISO लाई प्रमाणपत्र ठान्ने खरिदकर्ताले label लाई नै गुणस्तरको प्रमाण मानेर थप प्रश्न सोध्न छोड्छन्। ISO भनेको isophthalic हो भन्ने थाहा पाउनेले चाहिँ काम बन्ने-नबन्ने निर्धारण गर्ने प्रश्न सोध्छन्: कुन acid, कुन glycol, निर्माताले के प्रकाशित गरेका छन्, र सँगै कुनै मानक दाबी गरिएको छ कि छैन।',
            'अर्को आधा कुरा पनि स्पष्ट भन्नुपर्छ। ISO 9001 राख्ने आपूर्तिकर्ताले दस्तावेजीकृत गुणस्तर व्यवस्थापन प्रणाली देखाएको हुन्छ। त्यो वास्तविक र उपयोगी कुरा हो। तर त्यसले तपाईंले राख्न खोजेको रसायन कुनै खास drum को resin ले सहन्छ कि सहँदैन भन्नेबारे केही भन्दैन।',
          ],
        },
        {
          heading: 'Acid फेरिँदा के फेरिन्छ',
          body: [
            'Unsaturated polyester resin dibasic acid र glycol को प्रतिक्रियाबाट बनेर styrene मा घोलिन्छ। Acid फेर्नुभयो भने जमेको network कै संरचना फेरिन्छ। Orthophthalic र isophthalic acid positional isomer हुन् — उही परमाणु, फरक व्यवस्था — र त्यही फरकले वर्षौँ पानीको सम्पर्कमा रहँदा polymer कसरी टिक्छ भन्ने कुरा बदल्छ।',
            'उद्योगको वर्णन एकनास छ: isophthalic संरचनाले hydrolysis बढी सहन्छ, अर्थात् वर्षौँको सम्पर्कमा पानीले ester बन्धनमाथि गर्ने ढिलो रासायनिक आक्रमण। यही grade को अस्तित्वको कारण हो। यो tensile परीक्षणमा ठूलो अंक दिने अर्थमा "बलियो" resin होइन, र त्यसरी बेचिनु पनि हुँदैन।',
            'बाँकी काम गर्ने तरिका प्रायः उस्तै हो। यो अझै unsaturated polyester नै हो। कार्यशालाको तापक्रममा peroxide catalyst र आवश्यक परे accelerator सहित जम्छ। Glass reinforcement लाई उस्तै भिजाउँछ। सामान्य प्रयोजनको grade बाट isophthalic मा जाने fabricator ले तयारी भागको टिकाउ अवधि फेरिरहेको हुन्छ, प्रक्रिया फेरि सिकिरहेको होइन।',
          ],
        },
        {
          heading: 'थप लागत कहिले सार्थक हुन्छ, कहिले हुँदैन',
          body: [
            'व्यावहारिक निर्णय सेवा-अवस्थाको हो, कुन resin राम्रो भन्ने होइन। तयारी भाग भिजिरहने वा रसायन भेट्ने हो भने — भण्डारण ट्यांकी, पाइप, scrubber, कूलिङ टावरका भाग, ढल प्रणाली — उद्योगले isophthalic बाटो नै तोक्छ, र थप लागतले सेवा-अवधि किन्छ। भाग सुक्खा भित्री प्यानल, सजावटी moulding वा छोपिएको enclosure हो भने त्यही थप लागतले प्रायः केही दिँदैन।',
            'यो असन्तुलन स्पष्ट भन्नु जरुरी छ, किनभने पैसा यहीँ गुम्छ। सुक्खा भित्री laminate मा isophthalic संरचनाको पैसा तिर्नु नाफा खेर फाल्नु हो। रासायनिक ट्यांकीमा सामान्य प्रयोजनको grade प्रयोग गर्नु ट्यांकी नै जोखिममा पार्नु हो। यी दुई गल्तीको मूल्य बराबर होइन।',
            'बीचको एउटा बाटो पनि छ, जुन प्रायः बिर्सिन्छ। धेरै डिजाइनमा पूरै भागभरि एउटै resin प्रयोग हुँदैन: भिज्ने अनुहारमा isophthalic barrier वा सतह तह र पछाडि सामान्य प्रयोजनको संरचनात्मक laminate राखिन्छ। तपाईंको भागका लागि यो उपयुक्त हो कि होइन भन्ने डिजाइन र लागू हुने मानकले तय गर्छ, त्यसैले यो laminate तोक्ने व्यक्तिको प्रश्न हो।',
          ],
        },
        {
          heading: 'Label ले नबोक्ने चार कुरा',
          body: [
            'Fire retardancy छुट्टै formulation हो। Resin flame retardant हुन्छ किनभने त्यसै गरी बनाइएको हुन्छ र दाबीलाई परीक्षण डाटाले समर्थन गर्छ। Isophthalic भएकाले होइन। Fire-retardant grade चाहिन्छ भने नामै लिएर माग्नुहोस् र दाबी कुन परीक्षणमा आधारित छ सोध्नुहोस्।',
            'खानेपानी उपयुक्तता छुट्टै स्वीकृति हो। खानेपानी राख्नु नियमन गरिएको प्रयोग हो, र प्रश्न यो हो: कुन मानक वा प्रमाणपत्रले यसलाई समेट्छ, र त्यो प्रमाणपत्रले पानी छुने अनुहारको gelcoat वा lining समेत सिङ्गो निर्माण समेट्छ कि laminating resin मात्र।',
            'Batch को ग्यारेन्टी छुट्टै कागजात हो। Technical Data Sheet ले grade का प्रकाशित सामान्य गुण बताउँछ। Certificate of Analysis ले निश्चित batch का नापिएका मान बताउँछ, र त्यो batch नम्बर अगाडिको drum र invoice सँग मिलेमा मात्र अर्थपूर्ण हुन्छ।',
            'अनि marketplace को listing शीर्षक specification होइन। उत्पादनको शीर्षकमा लेखिएको "ISO resin" बिक्रेताको वर्णन मात्र हो। निर्णायक कुरा तपाईंलाई दिइन लागेको grade कै लागि निर्माताले जारी गरेको कागजात हो।',
          ],
        },
        {
          heading: 'हाम्रो grade बारे के भन्न सक्छौँ, के सक्दैनौँ',
          body: [
            'Samrat FRP Traders ले नेपाली बजारका लागि ISO Polyester Resin आपूर्ति र आयात गर्दछ। आपूर्तिकर्ता Samrat Poly Resins, India हो — छुट्टै व्यवसाय। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ; resin उत्पादन, formulation वा परीक्षण गर्दैनौँ।',
            'यस grade का लागि आपूर्तिकर्ताको Technical Data Sheet र Safety Data Sheet हामीसँग अहिले छैन। त्यसैले हाम्रा ISO Polyester Resin पृष्ठमा viscosity, gel time, styrene content वा भण्डारणका अंक कतै भेट्नुहुन्न। प्रमाणित गर्न नसकिने अंक राख्दा पृष्ठ बढी पूर्ण देखिन्थ्यो, तर त्यही अंकका आधारमा specification बनाउने खरिदकर्ताका लागि त्यो शून्यभन्दा तल हुन्थ्यो।',
            'हामीले गर्न सक्ने कुरा यो हो: आपूर्तिकर्ताले यस grade लाई कुन प्रयोगका लागि राखेका छन् भन्ने बताउने, तपाईंको प्रश्न उनीहरूसम्म पुर्‍याउने, र उनीहरूले हाल प्रकाशित गरेको पठाउने। अर्डरअघि कुनै निश्चित कागजात चाहिने हो भने सोधपुछकै बेला भन्नुहोस्, पछि होइन।',
          ],
        },
        {
          heading: 'यो गाइडको सीमा',
          body: [
            'यो पृष्ठले resin परिवार र त्यसको नामकरण बुझाउँछ। यो formulation, dosage तालिका, cure schedule, रासायनिक अनुकूलता चार्ट वा कुनै निश्चित कामको approval होइन। Catalyst र accelerator मात्रा, भण्डारण अवस्था, PPE र incompatibility तपाईंले पाउने grade कै हालको supplier कागजात र आफ्नो साइटको नियन्त्रणले निर्धारण गर्छ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------ ISO vs GP comparison
  {
    slug: 'iso-polyester-resin-vs-gp-polyester-resin',
    title: 'ISO Polyester Resin vs GP Polyester Resin: Which Service Condition Decides',
    description:
      'A working comparison of isophthalic and general-purpose orthophthalic polyester resin for Nepal fabricators — what actually differs, which jobs justify the isophthalic grade, and why the two are not a cheap-versus-expensive version of one product.',
    category: 'Comparison Guide',
    icon: 'compare',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'ISO Polyester Resin vs GP Polyester Resin | Comparison',
      ogTitle: 'ISO vs GP Polyester Resin: Which One, and When',
      ogDescription:
        'Isophthalic and general-purpose polyester resin compared by service condition rather than by price. Supplied in Nepal by Samrat FRP Traders.',
      keywords: [
        'ISO vs GP resin',
        'isophthalic vs orthophthalic resin',
        'ISO polyester resin Nepal',
        'GP polyester resin Nepal',
        'which polyester resin for water tank',
      ],
    },
    quickFacts: {
      'The real difference': 'The dibasic acid in the backbone — isophthalic against orthophthalic',
      'What it changes': 'Resistance to hydrolysis over a long wet or chemical service life',
      'What it does not change': 'The cure system, the reinforcement or the lay-up process',
      'Wrong answer that costs most': 'A general-purpose grade in permanently wet or chemical service',
      'Document status': docsPending,
    },
    relatedSlugs: [
      'what-is-isophthalic-polyester-resin',
      'iso-polyester-resin-vs-vinyl-ester-resin',
      'iso-polyester-resin-procurement-guide',
    ],
    recommendedLinks: [
      product,
      {
        href: '/products/gp-clear-resin/',
        label: 'View GP Clear Resin',
        description: 'The general-purpose orthophthalic grade, with the supplier TDS and SDS on file.',
      },
      {
        href: '/resources/what-is-isophthalic-polyester-resin/',
        label: 'What is isophthalic polyester resin?',
        description: 'The longer explainer behind this comparison, including what the ISO name does not mean.',
      },
      enquiryLink,
    ],
    comparisonTable: {
      title: 'ISO Polyester Resin and GP Polyester Resin side by side',
      note: 'This comparison is general and describes resin families, not specific grades. No figures are given for ISO Polyester Resin because no supplier document for that grade is on file yet. Confirm any specific grade against the manufacturer’s current documentation before you specify it.',
      headers: ['Question a buyer actually asks', 'ISO (isophthalic)', 'GP (orthophthalic)'],
      rows: [
        [
          'What is different in the chemistry',
          'Isophthalic acid in the polyester backbone',
          'Orthophthalic acid in the polyester backbone',
        ],
        [
          'What the industry buys it for',
          'Resistance to water and chemicals over a long service life',
          'Economical general-purpose lamination',
        ],
        [
          'Typical service',
          'Storage tanks, pipework, scrubbers, cooling tower components, effluent handling',
          'Dry or sheltered laminates, panels, general mouldings, decorative work',
        ],
        [
          'Cure system',
          'Room-temperature peroxide cure, as with other unsaturated polyesters',
          'Room-temperature peroxide cure',
        ],
        [
          'Process change for the fabricator',
          'None in principle — same lay-up, same reinforcement',
          'None — this is the familiar default',
        ],
        [
          'Relative material cost',
          'Higher, because the acid costs more',
          'Lower',
        ],
        [
          'Where choosing it wrongly hurts',
          'Paying for it on a dry indoor part earns nothing',
          'Using it on a chemical or permanently wet part risks the part',
        ],
        [
          'Document position on this site',
          'No supplier TDS or SDS on file yet — ask before ordering',
          'Supplier TDS and SDS on file and linked from the product page',
        ],
      ],
    },
    faqs: [
      {
        q: 'Is ISO resin simply a better version of GP resin?',
        a: 'No, and treating it that way leads to bad specifications in both directions. They are different backbones built for different service conditions. An isophthalic grade is the right answer when the laminate stays wet or meets chemicals. For a dry indoor panel it is an expense that buys nothing the part will ever use.',
      },
      {
        q: 'Can I substitute one for the other if my usual grade is out of stock?',
        a: 'That depends entirely on what the part does in service, and it is a decision for whoever specified the laminate. Substituting an isophthalic grade into a general-purpose job is usually harmless but costs more. Substituting a general-purpose grade into a chemical or immersion job is the substitution that causes failures.',
      },
      {
        q: 'Do I need to change my catalyst or process if I switch?',
        a: 'Both are unsaturated polyester resins cured at room temperature with a peroxide catalyst, so the process is familiar in principle. Gel time and working behaviour are grade-specific, so treat the manufacturer’s document for the grade you actually receive as the controlling reference and test on your own conditions rather than carrying figures across from another resin.',
      },
      {
        q: 'Is GP resin acceptable for a water tank?',
        a: 'General-purpose grades are widely used for the structural laminate of FRP water tanks, and our own application guides describe that use. What changes the answer is what the tank holds, how long it holds it and whether any standard governs the construction. Tell us the duty and we will discuss the options rather than give one blanket answer.',
      },
      {
        q: 'Why does this page not compare viscosity or gel time?',
        a: 'Because we hold no supplier document for the ISO Polyester Resin grade yet. Comparing a published figure for one grade against an estimate for the other would produce a table that looks authoritative and is not. When the document is on file, the figures will appear with the issuer named.',
      },
    ],
    sections: [
      {
        heading: 'The comparison that is usually made, and the one that matters',
        body: [
          'Most buyers meet these two grades as a price difference. The isophthalic grade quotes higher, so it gets read as the premium option and the general-purpose grade as the economical one, and the decision turns into a budget question. That framing is the source of most of the poor choices made between them.',
          'The useful comparison is not price against price. It is service condition against backbone. Ask what the finished part will be doing in five years: sitting dry in a workshop, or holding water or a chemical continuously. That single question decides the grade, and the price follows from it rather than driving it.',
        ],
      },
      {
        heading: 'What is genuinely different',
        body: [
          'Both are unsaturated polyester resins. Both are built by reacting a dibasic acid with a glycol and dissolving the result in styrene. The difference is which acid. General-purpose grades use orthophthalic acid. The grades sold as ISO use isophthalic acid, a positional isomer of the same molecule.',
          'That change produces a cured network described across the industry as more resistant to hydrolysis, the slow attack water makes on ester linkages over years of contact. In practice that shows up as a laminate that holds up in permanently wet or chemically loaded service, where an orthophthalic laminate is more likely to absorb water and, in immersion service, to blister over time.',
          'It is worth being precise about what does not change. The isophthalic route is not a strength upgrade in the sense of a bigger number on a mechanical test, it is not a fire-retardant grade, and it is not an approval for drinking-water contact. Those are separate formulations and separate documents.',
        ],
      },
      {
        heading: 'How the choice plays out on the shop floor',
        body: [
          'For a fabricator the process barely changes. Both cure at workshop temperature with a peroxide catalyst and, where the system calls for it, an accelerator. Both wet out chopped strand mat and woven roving. Both are laid up by hand or sprayed in the usual way. There is no new equipment and no new technique to learn.',
          'What does change is the working behaviour of the specific grade in front of you: gel time, body, how it rolls out on a vertical face. Those are grade properties, not family properties, and they are the reason a trial on your own conditions is worth more than a figure copied from another workshop or another season.',
          'The other practical change is documentation discipline. If you have moved to an isophthalic grade because a customer or a standard required it, the paperwork that proves which grade went into the part matters as much as the resin. Keep the delivery note, the batch reference and the manufacturer’s document together.',
        ],
      },
      {
        heading: 'Where each one belongs',
        body: [
          'A general-purpose grade is the sensible default for the broad run of FRP work in Nepal: panels, door skins, sheltered mouldings, decorative parts, general lamination and the structural laminate of many everyday products. It is economical, familiar and well documented, and our GP Clear Resin page carries the supplier’s Technical Data Sheet and Safety Data Sheet.',
          'An isophthalic grade belongs where the part is permanently wet or chemically loaded: chemical storage tanks, FRP pipes and process equipment, scrubbers, cooling tower components, effluent handling. It is also the grade to ask about when the customer’s own specification names an isophthalic or ISO/NPG system, because at that point the requirement is contractual rather than a matter of judgement.',
          'If the service is more aggressive still, the conversation moves past isophthalic polyester altogether and into vinyl ester. That is a different resin family, not a higher grade of the same one.',
        ],
      },
      {
        heading: 'What we can support today',
        body: [
          'Samrat FRP Traders supplies and imports both routes for the Nepal market from Samrat Poly Resins, India. We are the trader, supplier, importer and reseller. We do not manufacture or test resin, and we do not publish a specification we cannot attribute to the manufacturer.',
          'GP Clear Resin has the supplier Technical Data Sheet and Safety Data Sheet on file, and those documents are linked from its product page. ISO Polyester Resin does not yet. If your decision depends on a published figure for the isophthalic grade, tell us at the enquiry stage and we will put the request to the supplier rather than estimate on their behalf.',
        ],
      },
    ],
    ne: {
      title: 'ISO Polyester Resin बनाम GP Polyester Resin: सेवा-अवस्थाले निर्णय गर्छ',
      description:
        'नेपाली fabricator का लागि isophthalic र सामान्य प्रयोजनको orthophthalic polyester resin को व्यावहारिक तुलना — वास्तवमा के फरक छ, कुन काममा isophthalic grade सार्थक हुन्छ, र किन यी दुई एउटै उत्पादनका सस्तो-महँगो रूप होइनन्।',
      seo: {
        title: 'ISO Polyester Resin बनाम GP Polyester Resin | तुलना',
        ogTitle: 'ISO बनाम GP Polyester Resin: कुन, कहिले',
        ogDescription:
          'मूल्यको होइन, सेवा-अवस्थाको आधारमा isophthalic र सामान्य प्रयोजनको polyester resin तुलना। Samrat FRP Traders द्वारा नेपालमा आपूर्ति।',
        keywords: [
          'ISO बनाम GP resin',
          'isophthalic र orthophthalic तुलना',
          'ISO polyester resin नेपाल',
          'GP polyester resin नेपाल',
          'पानी ट्यांकीका लागि कुन resin',
        ],
      },
      quickFacts: {
        'वास्तविक फरक': 'संरचनाको dibasic acid — isophthalic कि orthophthalic',
        'यसले के फेर्छ': 'लामो समय भिज्ने वा रासायनिक सेवामा hydrolysis सहने क्षमता',
        'यसले के फेर्दैन': 'Cure प्रणाली, reinforcement वा lay-up प्रक्रिया',
        'सबैभन्दा महँगो पर्ने गल्ती': 'सधैँ भिज्ने वा रासायनिक सेवामा सामान्य प्रयोजनको grade',
        'कागजात अवस्था': neDocsPending,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/products/gp-clear-resin/',
          label: 'GP Clear Resin हेर्नुहोस्',
          description: 'सामान्य प्रयोजनको orthophthalic grade — supplier TDS र SDS फाइलमा छन्।',
        },
        {
          href: '/resources/what-is-isophthalic-polyester-resin/',
          label: 'Isophthalic polyester resin के हो?',
          description: 'यस तुलनाको पछाडिको विस्तृत व्याख्या — ISO नामले के जनाउँदैन सहित।',
        },
        neEnquiryLink,
      ],
      comparisonTable: {
        title: 'ISO Polyester Resin र GP Polyester Resin आमनेसामने',
        note: 'यो तुलना सामान्य हो र resin परिवारको वर्णन गर्छ, कुनै निश्चित grade को होइन। ISO Polyester Resin का अंक दिइएका छैनन् किनभने त्यस grade को supplier कागजात अझै फाइलमा छैन। कुनै grade तोक्नुअघि निर्माताको हालको कागजातबाट पुष्टि गर्नुहोस्।',
        headers: ['खरिदकर्ताको वास्तविक प्रश्न', 'ISO (isophthalic)', 'GP (orthophthalic)'],
        rows: [
          [
            'रसायनमा के फरक',
            'Polyester संरचनामा isophthalic acid',
            'Polyester संरचनामा orthophthalic acid',
          ],
          [
            'उद्योगले किन किन्छ',
            'लामो सेवा-अवधिभर पानी र रसायन सहन',
            'किफायती सामान्य प्रयोजनको lamination',
          ],
          [
            'सामान्य सेवा',
            'भण्डारण ट्यांकी, पाइप, scrubber, कूलिङ टावरका भाग, ढल प्रणाली',
            'सुक्खा वा छोपिएका laminate, प्यानल, सामान्य moulding, सजावटी काम',
          ],
          [
            'Cure प्रणाली',
            'अन्य unsaturated polyester जस्तै कोठाको तापक्रममा peroxide cure',
            'कोठाको तापक्रममा peroxide cure',
          ],
          [
            'Fabricator का लागि प्रक्रिया परिवर्तन',
            'सिद्धान्ततः छैन — उही lay-up, उही reinforcement',
            'छैन — यही परिचित default हो',
          ],
          [
            'सापेक्षिक सामग्री लागत',
            'बढी, किनभने acid महँगो पर्छ',
            'कम',
          ],
          [
            'गलत छनोटले कहाँ बिगार्छ',
            'सुक्खा भित्री भागमा यसको पैसा तिर्दा केही फाइदा हुँदैन',
            'रासायनिक वा सधैँ भिज्ने भागमा प्रयोग गर्दा भाग नै जोखिममा पर्छ',
          ],
          [
            'यस साइटमा कागजात अवस्था',
            'Supplier TDS/SDS अझै फाइलमा छैन — अर्डरअघि सोध्नुहोस्',
            'Supplier TDS र SDS फाइलमा छन् र उत्पादन पृष्ठबाट लिंक गरिएका छन्',
          ],
        ],
      },
      faqs: [
        {
          q: 'के ISO resin भनेको GP resin कै राम्रो संस्करण हो?',
          a: 'होइन, र त्यसै ठान्दा दुवैतर्फ गलत specification बन्छ। यी फरक सेवा-अवस्थाका लागि बनेका फरक संरचना हुन्। Laminate सधैँ भिज्ने वा रसायन भेट्ने हो भने isophthalic grade सही उत्तर हो। सुक्खा भित्री प्यानलका लागि यो त्यस्तो खर्च हो जसको उपयोग भागले कहिल्यै गर्दैन।',
        },
        {
          q: 'सधैँ प्रयोग गर्ने grade नपाए अर्कोले साट्न मिल्छ?',
          a: 'त्यो भागले सेवामा के गर्छ भन्नेमा भर पर्छ, र यो laminate तोक्ने व्यक्तिको निर्णय हो। सामान्य प्रयोजनको काममा isophthalic grade राख्दा प्रायः हानि हुँदैन, तर लागत बढी पर्छ। रासायनिक वा डुबिरहने काममा सामान्य प्रयोजनको grade राख्नु चाहिँ असफलता निम्त्याउने साटासाट हो।',
        },
        {
          q: 'साट्दा catalyst वा प्रक्रिया फेर्नुपर्छ?',
          a: 'दुवै unsaturated polyester resin हुन् र कोठाको तापक्रममा peroxide catalyst ले जम्छन्, त्यसैले प्रक्रिया सिद्धान्ततः परिचित छ। Gel time र काम गर्ने व्यवहार grade-अनुसार फरक हुन्छ, त्यसैले तपाईंले पाउने grade कै निर्माता कागजातलाई नियन्त्रक सन्दर्भ मान्नुहोस् र अर्को resin का अंक सार्नुको सट्टा आफ्नै अवस्थामा परीक्षण गर्नुहोस्।',
        },
        {
          q: 'के पानी ट्यांकीका लागि GP resin स्वीकार्य छ?',
          a: 'FRP पानी ट्यांकीको संरचनात्मक laminate मा सामान्य प्रयोजनका grade व्यापक प्रयोग हुन्छन्, र हाम्रै application गाइडहरूले त्यो प्रयोग वर्णन गर्छन्। ट्यांकीले के राख्छ, कति लामो समय राख्छ र निर्माणलाई कुनै मानकले नियन्त्रण गर्छ कि गर्दैन भन्नेले उत्तर फेर्छ। काम बताउनुहोस्, एउटै ढाँचाको उत्तर दिनुको सट्टा विकल्पबारे छलफल गरौँला।',
        },
        {
          q: 'यो पृष्ठले viscosity वा gel time किन तुलना गर्दैन?',
          a: 'किनभने ISO Polyester Resin grade को supplier कागजात हामीसँग छैन। एउटा grade को प्रकाशित अंकलाई अर्कोको अनुमानसँग तुलना गर्दा आधिकारिक देखिने तर वास्तवमा नभएको तालिका बन्छ। कागजात फाइलमा आएपछि जारीकर्ताको नाम सहित अंक राखिनेछ।',
        },
      ],
      sections: [
        {
          heading: 'प्रायः गरिने तुलना, र महत्त्वपूर्ण तुलना',
          body: [
            'धेरै खरिदकर्ताले यी दुई grade लाई मूल्यको फरकका रूपमा भेट्छन्। Isophthalic grade को भाउ बढी हुन्छ, त्यसैले त्यो premium विकल्प र सामान्य प्रयोजनको grade किफायती विकल्प ठानिन्छ, अनि निर्णय बजेटको प्रश्न बन्छ। यी दुईबीच हुने अधिकांश गलत छनोटको जड यही ढाँचा हो।',
            'उपयोगी तुलना मूल्य बनाम मूल्य होइन — सेवा-अवस्था बनाम संरचना हो। पाँच वर्षपछि तयारी भागले के गरिरहेको हुन्छ भनी सोध्नुहोस्: कार्यशालामा सुक्खा बसिरहेको, कि निरन्तर पानी वा रसायन बोकिरहेको। यही एउटा प्रश्नले grade तय गर्छ, र मूल्य त्यसपछि आउँछ।',
          ],
        },
        {
          heading: 'वास्तवमा के फरक छ',
          body: [
            'दुवै unsaturated polyester resin हुन्। दुवै dibasic acid र glycol को प्रतिक्रियाबाट बनेर styrene मा घोलिन्छन्। फरक कुन acid भन्नेमा छ। सामान्य प्रयोजनका grade मा orthophthalic acid हुन्छ। ISO नामले बेचिने grade मा isophthalic acid — उही अणुको positional isomer — हुन्छ।',
            'त्यो परिवर्तनले बनेको जमेको network लाई उद्योगभर बढी hydrolysis सहने भनिन्छ, अर्थात् वर्षौँको सम्पर्कमा पानीले ester बन्धनमाथि गर्ने ढिलो आक्रमण। व्यवहारमा यो सधैँ भिज्ने वा रासायनिक भारमा रहने सेवामा टिक्ने laminate का रूपमा देखिन्छ, जहाँ orthophthalic laminate ले पानी बढी सोस्ने र डुबेको सेवामा समयक्रममा फोका आउने सम्भावना बढी हुन्छ।',
            'के फेरिँदैन भन्ने पनि स्पष्ट हुनुपर्छ। Isophthalic बाटो यान्त्रिक परीक्षणमा ठूलो अंक दिने अर्थमा बल वृद्धि होइन, fire-retardant grade होइन, र खानेपानी सम्पर्कको स्वीकृति पनि होइन। ती छुट्टै formulation र छुट्टै कागजात हुन्।',
          ],
        },
        {
          heading: 'कार्यशालामा छनोट कसरी देखिन्छ',
          body: [
            'Fabricator का लागि प्रक्रिया खासै फेरिँदैन। दुवै कार्यशालाको तापक्रममा peroxide catalyst र आवश्यक परे accelerator सहित जम्छन्। दुवैले chopped strand mat र woven roving भिजाउँछन्। दुवै सामान्य तरिकाले हातले वा spray ले लगाइन्छन्। नयाँ उपकरण पनि चाहिँदैन, नयाँ सीप पनि।',
            'फेरिने कुरा भनेको अगाडिको खास grade को काम गर्ने व्यवहार हो: gel time, गाढापन, ठाडो सतहमा कसरी बेल्न मिल्छ। यी grade का गुण हुन्, परिवारका होइनन् — त्यसैले अर्को कार्यशाला वा अर्को मौसमबाट सारिएको अंकभन्दा आफ्नै अवस्थामा गरिएको परीक्षण बढी मूल्यवान् हुन्छ।',
            'अर्को व्यावहारिक परिवर्तन कागजातको अनुशासन हो। ग्राहक वा मानकले मागेकाले isophthalic grade मा गएको हो भने, भागमा कुन grade गयो भन्ने प्रमाणित गर्ने कागज resin जत्तिकै महत्त्वपूर्ण हुन्छ। Delivery note, batch सन्दर्भ र निर्माताको कागजात सँगै राख्नुहोस्।',
          ],
        },
        {
          heading: 'कुन कहाँ पर्छ',
          body: [
            'नेपालको धेरैजसो FRP काममा सामान्य प्रयोजनको grade नै व्यावहारिक default हो: प्यानल, door skin, छोपिएका moulding, सजावटी भाग, सामान्य lamination र धेरै दैनिक उत्पादनको संरचनात्मक laminate। यो किफायती, परिचित र राम्ररी कागजात भएको छ — हाम्रो GP Clear Resin पृष्ठमा आपूर्तिकर्ताको Technical Data Sheet र Safety Data Sheet छन्।',
            'Isophthalic grade त्यहाँ पर्छ जहाँ भाग सधैँ भिज्छ वा रासायनिक भारमा रहन्छ: रासायनिक भण्डारण ट्यांकी, FRP पाइप र प्रोसेस उपकरण, scrubber, कूलिङ टावरका भाग, ढल प्रणाली। ग्राहककै specification ले isophthalic वा ISO/NPG प्रणाली तोकेको छ भने पनि यही grade सोध्नुपर्छ — त्यहाँ माग विवेकको होइन, सम्झौताको विषय बन्छ।',
            'सेवा अझ कडा छ भने कुरा isophthalic polyester भन्दा पर vinyl ester सम्म पुग्छ। त्यो उही परिवारको माथिल्लो grade होइन, फरक resin परिवार हो।',
          ],
        },
        {
          heading: 'आज हामी के समर्थन गर्न सक्छौँ',
          body: [
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट दुवै बाटो नेपाली बजारका लागि आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी resin उत्पादन वा परीक्षण गर्दैनौँ, र निर्मातालाई श्रेय दिन नसकिने specification प्रकाशित गर्दैनौँ।',
            'GP Clear Resin को supplier Technical Data Sheet र Safety Data Sheet फाइलमा छन् र ती उत्पादन पृष्ठबाट लिंक गरिएका छन्। ISO Polyester Resin का छैनन्। तपाईंको निर्णय isophthalic grade को प्रकाशित अंकमा भर पर्छ भने सोधपुछकै बेला भन्नुहोस् — हामी आपूर्तिकर्ताको तर्फबाट अनुमान गर्नुको सट्टा उनीहरूसमक्ष माग पुर्‍याउँछौँ।',
          ],
        },
      ],
    },
  },

  // --------------------------------------- ISO vs vinyl ester comparison
  {
    slug: 'iso-polyester-resin-vs-vinyl-ester-resin',
    title: 'ISO Polyester Resin vs Vinyl Ester Resin: Where the Corrosion Line Sits',
    description:
      'Two resin families sold for the same reason and priced very differently. What separates isophthalic polyester from vinyl ester, the questions that decide between them, and why the chemical alone is not enough information to choose.',
    category: 'Comparison Guide',
    icon: 'compare',
    readingTime: '5 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'ISO Polyester Resin vs Vinyl Ester Resin | Comparison',
      ogTitle: 'ISO Polyester vs Vinyl Ester: Which Corrosion Route',
      ogDescription:
        'Isophthalic polyester and vinyl ester compared for FRP corrosion service. Both supplied in Nepal by Samrat FRP Traders.',
      keywords: [
        'ISO polyester vs vinyl ester',
        'vinyl ester resin Nepal',
        'isophthalic polyester corrosion',
        'FRP chemical storage tank resin',
        'which resin for chemical tank',
      ],
    },
    quickFacts: {
      'Same reason to buy': 'Both are specified for water and chemical service rather than general lamination',
      'Not the same family': 'Isophthalic polyester and vinyl ester are different chemistries, not two grades of one',
      'What decides': 'The chemical, its concentration and its temperature — not the word "corrosion"',
      'Common error': 'Choosing from the resin name instead of from the service condition',
      'Document status': docsPending,
    },
    relatedSlugs: [
      'what-is-isophthalic-polyester-resin',
      'iso-polyester-resin-vs-gp-polyester-resin',
      'iso-polyester-resin-procurement-guide',
    ],
    recommendedLinks: [
      product,
      {
        href: '/products/vinyl-ester-resin/',
        label: 'View Vinyl Ester Resin',
        description: 'The vinyl ester route, with its own application guides.',
      },
      {
        href: '/applications/vinyl-ester-resin-for-chemical-storage-tanks/',
        label: 'Vinyl ester for chemical storage tanks',
        description: 'How the vinyl ester route is used in tank fabrication.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is vinyl ester just a stronger isophthalic polyester?',
        a: 'No. Vinyl ester is a separate resin chemistry, generally positioned above isophthalic polyester for aggressive chemical service. Describing it as a higher grade of the same product understates how different the two are and encourages buyers to treat the choice as a budget slider rather than a specification decision.',
      },
      {
        q: 'How do I know which one my tank needs?',
        a: 'The deciding information is the chemical, its concentration and its service temperature, plus how long the tank must last and whether any standard governs the build. A resin name on its own cannot answer it. Give us those details and we will discuss the options; where the duty is demanding, the manufacturer’s chemical-resistance guidance for the specific grade is the controlling reference.',
      },
      {
        q: 'Can I use isophthalic polyester behind a vinyl ester barrier layer?',
        a: 'Dual-laminate constructions of that general kind are used in the industry, with a chemically resistant barrier against the wet face and a more economical structural laminate behind it. Whether it is appropriate for your part is a design decision for whoever specifies the laminate, and it should be settled against the relevant standard rather than by analogy.',
      },
      {
        q: 'Is vinyl ester always the safer choice if I am unsure?',
        a: 'It is the more expensive choice, and over-specifying has a real cost on a large tank. It is also not a universal answer: some services are handled perfectly well by an isophthalic laminate, and some are beyond both families. Uncertainty is a reason to establish the service condition, not a reason to default upward.',
      },
      {
        q: 'Which of the two can you document today?',
        a: 'Vinyl Ester Resin is an established grade in our range with its own product page and application guides. ISO Polyester Resin is newer to the range and its supplier Technical Data Sheet and Safety Data Sheet are not yet on file, so no figures for it appear anywhere on this site.',
      },
    ],
    sections: [
      {
        heading: 'Two answers to one question',
        body: [
          'Both of these resins are bought for the same reason: a laminate that has to survive water or chemicals rather than sit dry. That shared purpose is why they end up on the same quotation, and it is also why they get confused with each other. They are not two grades of one product. They are different chemistries that happen to compete for the same jobs.',
          'Isophthalic polyester is an unsaturated polyester built on isophthalic acid. Vinyl ester is a different family again, generally described in the industry as offering greater resistance to aggressive chemical attack and better toughness, at a higher cost. The gap between them is real, and so is the gap in price.',
        ],
      },
      {
        heading: 'What actually decides the choice',
        body: [
          'The resin name is not enough information to choose, and a buyer who asks "isophthalic or vinyl ester?" without stating the duty cannot be given a responsible answer. Three things decide it: which chemical, at what concentration and at what temperature. A dilute solution at ambient temperature and a hot concentrated one are not the same problem, and the same resin can be appropriate for one and unsuitable for the other.',
          'Two further questions shape it. How long must the equipment last, because service life is what the more expensive resin is actually buying. And is there a governing standard or customer specification, because if there is, the requirement is contractual and the judgement has already been made for you.',
          'Where the duty is demanding, the controlling reference is the manufacturer’s chemical-resistance guidance for the specific grade, not a general article. That is true of this page as much as any other.',
        ],
      },
      {
        heading: 'The cost of getting it wrong in each direction',
        body: [
          'Under-specifying is the failure everyone pictures: a tank built in a resin that the contents slowly attack, which leaks or fails some years in, long after the saving has been forgotten. On a large vessel the replacement cost dwarfs the difference in resin price.',
          'Over-specifying is quieter and more common. Vinyl ester across an entire structure where an isophthalic laminate would have served, on a duty that never required it, is money spent on a property the equipment will not use. On a big tank that margin is not trivial.',
          'This is why the dual-laminate approach exists in the industry: a chemically resistant barrier where the contents actually touch, and a more economical structural laminate behind it. It is not a shortcut, and it is not a decision to make by analogy from someone else’s tank. It belongs to whoever specifies the laminate.',
        ],
      },
      {
        heading: 'What we supply and what we can evidence',
        body: [
          'Samrat FRP Traders supplies and imports both routes for Nepal from Samrat Poly Resins, India. We are the trader, supplier, importer and reseller. We do not manufacture resin, we do not run chemical-resistance testing, and we do not issue approvals for a service condition.',
          'Vinyl Ester Resin is an established part of the range and has its own product page and application guides covering chemical storage tanks, pipelines, ducts and scrubbers, filament winding and pultrusion. ISO Polyester Resin is newer to the range, and until its supplier documentation is on file we publish no figures for it at all.',
          'If you are weighing the two for a specific vessel, the most useful thing you can send us is the service condition rather than a resin name. That is the information the supplier needs in order to answer properly.',
        ],
      },
    ],
    ne: {
      title: 'ISO Polyester Resin बनाम Vinyl Ester Resin: Corrosion को सीमा कहाँ',
      description:
        'एउटै कारणले बेचिने तर निकै फरक मूल्यका दुई resin परिवार। Isophthalic polyester र vinyl ester बीच के छुट्टिन्छ, कुन प्रश्नले निर्णय गर्छ, र रसायनको नाम मात्रले किन छनोट पुग्दैन।',
      seo: {
        title: 'ISO Polyester Resin बनाम Vinyl Ester Resin | तुलना',
        ogTitle: 'ISO Polyester बनाम Vinyl Ester: कुन corrosion बाटो',
        ogDescription:
          'FRP corrosion सेवाका लागि isophthalic polyester र vinyl ester को तुलना। दुवै Samrat FRP Traders द्वारा नेपालमा आपूर्ति।',
        keywords: [
          'ISO polyester बनाम vinyl ester',
          'vinyl ester resin नेपाल',
          'रासायनिक ट्यांकीका लागि resin',
          'FRP chemical storage tank नेपाल',
        ],
      },
      quickFacts: {
        'किन्ने कारण उस्तै': 'दुवै सामान्य lamination होइन, पानी र रसायन सेवाका लागि तोकिन्छन्',
        'परिवार भने फरक': 'Isophthalic polyester र vinyl ester फरक रसायन हुन्, एउटैका दुई grade होइनन्',
        'के ले निर्णय गर्छ': 'कुन रसायन, कति मात्रा र कति तापक्रम — "corrosion" शब्दले होइन',
        'सामान्य गल्ती': 'सेवा-अवस्थाबाट होइन, resin को नामबाट छनोट गर्नु',
        'कागजात अवस्था': neDocsPending,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/products/vinyl-ester-resin/',
          label: 'Vinyl Ester Resin हेर्नुहोस्',
          description: 'Vinyl ester बाटो, आफ्नै application गाइडसहित।',
        },
        {
          href: '/applications/vinyl-ester-resin-for-chemical-storage-tanks/',
          label: 'रासायनिक भण्डारण ट्यांकीका लागि vinyl ester',
          description: 'ट्यांकी निर्माणमा vinyl ester बाटो कसरी प्रयोग हुन्छ।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के vinyl ester भनेको बलियो isophthalic polyester मात्र हो?',
          a: 'होइन। Vinyl ester छुट्टै resin रसायन हो र कडा रासायनिक सेवाका लागि सामान्यतया isophthalic polyester भन्दा माथि राखिन्छ। यसलाई उही उत्पादनको माथिल्लो grade भन्नु दुईबीचको फरकलाई सानो देखाउनु हो, र त्यसले खरिदकर्तालाई यो छनोटलाई specification होइन, बजेटको slider ठान्न उक्साउँछ।',
        },
        {
          q: 'मेरो ट्यांकीलाई कुन चाहिन्छ भनी कसरी थाहा पाउने?',
          a: 'निर्णायक जानकारी भनेको रसायन, त्यसको मात्रा र सेवाको तापक्रम हो — साथै ट्यांकी कति वर्ष टिक्नुपर्छ र निर्माणलाई कुनै मानकले नियन्त्रण गर्छ कि गर्दैन। Resin को नाम मात्रले यसको जवाफ दिँदैन। यी विवरण दिनुहोस्, विकल्पबारे छलफल गरौँला; काम कडा छ भने त्यही grade का लागि निर्माताको chemical-resistance निर्देशन नै नियन्त्रक सन्दर्भ हुन्छ।',
        },
        {
          q: 'के vinyl ester को barrier पछाडि isophthalic polyester प्रयोग गर्न मिल्छ?',
          a: 'यस्तै प्रकारका dual-laminate निर्माण उद्योगमा प्रयोग हुन्छन् — भिज्ने अनुहारमा रसायन सहने barrier र पछाडि बढी किफायती संरचनात्मक laminate। तपाईंको भागका लागि उपयुक्त हो कि होइन भन्ने laminate तोक्ने व्यक्तिको डिजाइन निर्णय हो, र यो अरूको उदाहरण हेरेर होइन, सम्बन्धित मानकका आधारमा टुंग्याउनुपर्छ।',
        },
        {
          q: 'अन्योल भएमा vinyl ester नै सुरक्षित छनोट हो?',
          a: 'त्यो महँगो छनोट हो, र ठूलो ट्यांकीमा आवश्यकभन्दा बढी specification को वास्तविक लागत हुन्छ। यो सार्वभौम उत्तर पनि होइन: कतिपय सेवा isophthalic laminate ले राम्ररी थेग्छ, र कतिपय दुवै परिवारभन्दा बाहिरका हुन्छन्। अन्योल भनेको सेवा-अवस्था पत्ता लगाउने कारण हो, सिधै माथिल्लो विकल्पमा जाने कारण होइन।',
        },
        {
          q: 'यी दुईमध्ये कुनको कागजात आज देखाउन सक्नुहुन्छ?',
          a: 'Vinyl Ester Resin हाम्रो श्रेणीको स्थापित grade हो, आफ्नै उत्पादन पृष्ठ र application गाइडसहित। ISO Polyester Resin श्रेणीमा नयाँ हो र यसको supplier Technical Data Sheet तथा Safety Data Sheet अझै फाइलमा छैनन्, त्यसैले यस साइटमा त्यसका अंक कतै छैनन्।',
        },
      ],
      sections: [
        {
          heading: 'एउटै प्रश्नका दुई उत्तर',
          body: [
            'यी दुवै resin एउटै कारणले किनिन्छन्: सुक्खा बस्ने होइन, पानी वा रसायन सहनुपर्ने laminate। यही साझा उद्देश्यले तिनलाई एउटै quotation मा ल्याउँछ, र यही कारण एकअर्कासँग झुक्किन्छन् पनि। यी एउटै उत्पादनका दुई grade होइनन् — एउटै काम पाउन प्रतिस्पर्धा गर्ने फरक रसायन हुन्।',
            'Isophthalic polyester isophthalic acid मा बनेको unsaturated polyester हो। Vinyl ester फेरि अर्कै परिवार हो, जसलाई उद्योगमा कडा रासायनिक आक्रमण बढी सहने र बढी toughness दिने भनिन्छ — बढी लागतमा। दुईबीचको अन्तर वास्तविक हो, र मूल्यको अन्तर पनि।',
          ],
        },
        {
          heading: 'छनोट वास्तवमा कसले तय गर्छ',
          body: [
            'Resin को नाम छनोटका लागि पर्याप्त जानकारी होइन, र काम नबताई "isophthalic कि vinyl ester?" सोध्ने खरिदकर्तालाई जिम्मेवार उत्तर दिन सकिँदैन। तीन कुराले निर्णय गर्छ: कुन रसायन, कति मात्रामा र कति तापक्रममा। पातलो घोल सामान्य तापक्रममा र तातो सघन घोल एउटै समस्या होइनन्, र एउटै resin एउटाका लागि उपयुक्त र अर्काका लागि अनुपयुक्त हुन सक्छ।',
            'थप दुई प्रश्नले आकार दिन्छन्। उपकरण कति वर्ष टिक्नुपर्छ — किनभने महँगो resin ले किन्ने भनेकै सेवा-अवधि हो। अनि कुनै मानक वा ग्राहकको specification छ कि छैन — भए माग सम्झौताको विषय बन्छ र निर्णय पहिल्यै भइसकेको हुन्छ।',
            'काम कडा भएका ठाउँमा नियन्त्रक सन्दर्भ भनेको त्यही grade का लागि निर्माताको chemical-resistance निर्देशन हो, कुनै सामान्य लेख होइन। यो कुरा अरू जस्तै यस पृष्ठमा पनि लागू हुन्छ।',
          ],
        },
        {
          heading: 'दुवैतर्फ गलत हुँदाको मूल्य',
          body: [
            'आवश्यकभन्दा कम specification गर्नु सबैले कल्पना गर्ने असफलता हो: सामग्रीले बिस्तारै आक्रमण गर्ने resin मा बनेको ट्यांकी, जुन केही वर्षपछि चुहिन्छ वा बिग्रन्छ — बचत बिर्सिसकेपछि। ठूलो vessel मा प्रतिस्थापन लागत resin को मूल्य फरकभन्दा कयौँ गुणा हुन्छ।',
            'आवश्यकभन्दा बढी specification गर्नु चाहिँ चुपचाप र बढी सामान्य छ। Isophthalic laminate ले पुग्ने काममा पूरै संरचनाभरि vinyl ester राख्नु उपकरणले कहिल्यै प्रयोग नगर्ने गुणमा पैसा खर्चनु हो। ठूलो ट्यांकीमा त्यो अन्तर सानो हुँदैन।',
            'त्यसैले उद्योगमा dual-laminate बाटो छ: सामग्री छुने ठाउँमा रसायन सहने barrier, र पछाडि बढी किफायती संरचनात्मक laminate। यो छोटो बाटो होइन, र अरूको ट्यांकी हेरेर गर्ने निर्णय पनि होइन। यो laminate तोक्ने व्यक्तिकै जिम्मा हो।',
          ],
        },
        {
          heading: 'हामी के आपूर्ति गर्छौं र के प्रमाणित गर्न सक्छौँ',
          body: [
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट दुवै बाटो नेपालका लागि आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी resin उत्पादन गर्दैनौँ, chemical-resistance परीक्षण चलाउँदैनौँ, र कुनै सेवा-अवस्थाका लागि approval जारी गर्दैनौँ।',
            'Vinyl Ester Resin श्रेणीको स्थापित भाग हो र यसका आफ्नै उत्पादन पृष्ठ तथा application गाइड छन् — रासायनिक भण्डारण ट्यांकी, पाइपलाइन, duct र scrubber, filament winding र pultrusion समेटेर। ISO Polyester Resin श्रेणीमा नयाँ हो, र यसको supplier कागजात फाइलमा नआउन्जेल हामी त्यसका कुनै अंक प्रकाशित गर्दैनौँ।',
            'कुनै निश्चित vessel का लागि दुईबीच तौलिरहनुभएको छ भने, resin को नाम होइन, सेवा-अवस्था पठाउनु सबैभन्दा उपयोगी हुन्छ। ठीकसँग उत्तर दिन आपूर्तिकर्तालाई चाहिने जानकारी त्यही हो।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------- procurement guide
  {
    slug: 'iso-polyester-resin-procurement-guide',
    title: 'Buying ISO Polyester Resin in Nepal: What to Confirm Before You Order',
    description:
      'A procurement checklist for isophthalic polyester resin in Nepal — which documents mean what, how to verify that a grade is genuinely isophthalic, and the questions worth settling before a purchase order rather than after delivery.',
    category: 'Procurement Guide',
    icon: 'checklist',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'Buying ISO Polyester Resin in Nepal | Procurement Guide',
      ogTitle: 'ISO Polyester Resin: What to Confirm Before Ordering',
      ogDescription:
        'Documents, verification and the questions to settle before a purchase order. Supplied in Nepal by Samrat FRP Traders.',
      keywords: [
        'ISO polyester resin Nepal',
        'isophthalic resin procurement',
        'resin TDS SDS COA',
        'FRP resin buying guide Nepal',
        'ISO resin supplier Nepal',
      ],
    },
    quickFacts: {
      'Three different documents': 'TDS describes a grade, SDS covers safety, COA reports one batch',
      'ISO 9001 is not a product claim': 'It certifies a quality management system, not a resin',
      'Verification route': 'The manufacturer’s document for the grade offered, not the listing title',
      'Commercial position': commercialPosition,
      'Document status': docsPending,
    },
    relatedSlugs: [
      'what-is-isophthalic-polyester-resin',
      'iso-polyester-resin-vs-gp-polyester-resin',
      'iso-polyester-resin-vs-vinyl-ester-resin',
    ],
    recommendedLinks: [
      product,
      {
        href: '/products/polyester-resins/',
        label: 'Polyester resin range',
        description: 'The other polyester grades, several with supplier documents already on file.',
      },
      {
        href: '/resources/what-is-isophthalic-polyester-resin/',
        label: 'What is isophthalic polyester resin?',
        description: 'The background explainer, including what the ISO name does not certify.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'What is the difference between a TDS, an SDS and a COA?',
        a: 'A Technical Data Sheet describes the typical published properties of a grade. A Safety Data Sheet covers hazards, handling, storage, protective equipment and emergency response. A Certificate of Analysis reports measured values for one specific batch. They answer different questions, and one does not substitute for another.',
      },
      {
        q: 'How do I verify that what I am buying is genuinely isophthalic?',
        a: 'Through the manufacturer’s document for the grade being offered. A listing title, a product name or a description on an invoice is a seller’s description. Cured isophthalic and orthophthalic laminates are not distinguishable by eye, so documentation and traceability are the verification, not inspection.',
      },
      {
        q: 'Does your supplier’s ISO 9001 certificate cover the resin?',
        a: 'A quality management system certificate covers how a company documents and controls its processes. It is genuinely useful information about a supplier. It is not a technical certification of a resin grade and should never be quoted as one.',
      },
      {
        q: 'Why will you not quote a price per kilogram on this page?',
        a: 'Because a published price without a stated quantity, packaging, delivery point and date is not information a buyer can rely on, and it would be out of date the week after it was written. Send the requirement and we will quote against it.',
      },
      {
        q: 'Can you confirm stock and delivery time for Nepal?',
        a: 'Not on a web page. Availability and timing depend on the grade, the quantity and the moment you ask, so we confirm them on enquiry rather than publishing a claim that may not hold when you act on it.',
      },
      {
        q: 'What if my customer’s specification names ISO/NPG?',
        a: 'Then treat that as a distinct requirement rather than a synonym for isophthalic, and say so in the enquiry. NPG is a further compositional choice, and asking for the wrong one is the kind of mismatch that surfaces at inspection rather than at ordering.',
      },
    ],
    sections: [
      {
        heading: 'Start from the service condition, not the product name',
        body: [
          'The most productive enquiry begins with what the part does, not with a resin name. What is the component, what does it hold, at what concentration and temperature, and for how long. Whether it is continuously immersed, intermittently wet or simply outdoors. Which process will be used to build it, and in what conditions.',
          'That information lets a supplier answer properly and lets you compare offers meaningfully. An enquiry that says only "ISO resin, best price" invites every seller to interpret the request differently, and the offers that come back will not be comparable.',
          'It also protects you against the naming problem. If the service condition is stated, a grade that does not suit it can be identified before the order rather than after the first tank is in service.',
        ],
      },
      {
        heading: 'Know which document answers which question',
        body: [
          'Three documents come up in resin procurement and they are routinely conflated. The Technical Data Sheet describes a grade: appearance, published properties, the manufacturer’s positioning. The Safety Data Sheet covers hazard classification, handling, storage, protective equipment, spill response and disposal. The Certificate of Analysis reports measured values for one production batch.',
          'The practical consequence is simple. If you need to know whether a grade suits a duty, that is a TDS question. If you need to write a safe handling procedure for your workshop, that is an SDS question and the SDS governs. If your own quality system requires evidence about the material you actually received, that is a COA, and it is only meaningful when its batch number matches the drum and the invoice.',
          'Ask for what you actually need at the enquiry stage. Document requests raised after delivery are harder to satisfy and sometimes cannot be satisfied at all for material already dispatched.',
        ],
      },
      {
        heading: 'Separate the supplier claim from the product claim',
        body: [
          'A supplier may hold ISO 9001. That certifies a documented quality management system, and it is a legitimate thing to consider when choosing who to buy from. It is not a statement about the performance of a resin, and a certificate number on a letterhead does not answer a technical question.',
          'The same separation applies to product standards. If a project requires compliance with a specific national or international standard for tanks, pipes or laminates, that is a distinct, verifiable claim. Ask which standard, which version, and for the document that supports it. "Isophthalic" on a label is not compliance with anything.',
          'And be careful with marketplace listings. Titles such as "ISO resin" or "isophthalic resin" are written by the seller and are not independently verified. This is exactly why the manufacturer’s own document for the specific grade is the thing worth asking for.',
        ],
      },
      {
        heading: 'What to put in the enquiry',
        body: [
          'A quote-ready enquiry for this grade usually contains: the component and its service condition; the process you will use; the quantity you expect to take and over what period; the packaging format that suits your workshop; the delivery location; and any document your own quality process requires before you can accept material.',
          'If a customer specification or a drawing governs the work, attach it or quote the relevant clause. That single step removes most of the back-and-forth, because it tells the supplier what has already been decided and what is still open.',
          'Do not ask us to confirm a figure we have not seen. Where a grade’s supplier documentation is not on file, we will say so and put the question to the manufacturer rather than estimate on their behalf.',
        ],
      },
      {
        heading: 'Where this grade stands with us today',
        body: [
          'Samrat FRP Traders is a trader, supplier, importer and reseller of FRP materials in Nepal. Our supplier for this grade is Samrat Poly Resins, India, a separate business. We do not manufacture, formulate, test or certify resin.',
          'For ISO Polyester Resin specifically, the supplier Technical Data Sheet and Safety Data Sheet are not yet in our document library, and no pricing, packaging, stock position or delivery commitment for Nepal is published anywhere on this site. Those are confirmed on enquiry, against the grade and quantity you actually need.',
          'Several other grades in the polyester range do have their supplier documents on file and linked from their product pages. If your requirement is flexible on grade, that is worth knowing when you plan the enquiry.',
        ],
      },
    ],
    ne: {
      title: 'नेपालमा ISO Polyester Resin किन्दा: अर्डरअघि के पुष्टि गर्ने',
      description:
        'नेपालमा isophthalic polyester resin का लागि खरिद जाँचसूची — कुन कागजातले के भन्छ, कुनै grade साँच्चै isophthalic हो भनी कसरी पुष्टि गर्ने, र purchase order अघि नै टुंग्याउनुपर्ने प्रश्नहरू।',
      seo: {
        title: 'नेपालमा ISO Polyester Resin खरिद | Procurement गाइड',
        ogTitle: 'ISO Polyester Resin: अर्डरअघि के पुष्टि गर्ने',
        ogDescription:
          'कागजात, पुष्टि र purchase order अघि टुंग्याउनुपर्ने प्रश्न। Samrat FRP Traders द्वारा नेपालमा आपूर्ति।',
        keywords: [
          'ISO polyester resin नेपाल',
          'isophthalic resin खरिद',
          'resin TDS SDS COA',
          'FRP resin खरिद गाइड नेपाल',
        ],
      },
      quickFacts: {
        'तीन फरक कागजात': 'TDS ले grade, SDS ले सुरक्षा, COA ले एउटा batch बताउँछ',
        'ISO 9001 उत्पादनको दाबी होइन': 'यसले गुणस्तर व्यवस्थापन प्रणाली प्रमाणित गर्छ, resin होइन',
        'पुष्टि गर्ने बाटो': 'Listing को शीर्षक होइन, प्रस्ताव गरिएको grade कै निर्माता कागजात',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'कागजात अवस्था': neDocsPending,
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/products/polyester-resins/',
          label: 'Polyester resin श्रेणी',
          description: 'अन्य polyester grade — कतिपयका supplier कागजात पहिल्यै फाइलमा छन्।',
        },
        {
          href: '/resources/what-is-isophthalic-polyester-resin/',
          label: 'Isophthalic polyester resin के हो?',
          description: 'पृष्ठभूमि व्याख्या — ISO नामले के प्रमाणित गर्दैन सहित।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'TDS, SDS र COA बीच के फरक छ?',
          a: 'Technical Data Sheet ले grade का प्रकाशित सामान्य गुण बताउँछ। Safety Data Sheet ले जोखिम, handling, भण्डारण, सुरक्षा उपकरण र आपत्कालीन प्रतिकार्य समेट्छ। Certificate of Analysis ले कुनै एक batch का नापिएका मान बताउँछ। तीनवटाले फरक प्रश्नको उत्तर दिन्छन् र एउटाले अर्कोको ठाउँ लिँदैन।',
        },
        {
          q: 'म किनिरहेको साँच्चै isophthalic हो भनी कसरी पुष्टि गर्ने?',
          a: 'प्रस्ताव गरिएको grade कै निर्माता कागजातबाट। Listing को शीर्षक, उत्पादनको नाम वा invoice को विवरण बिक्रेताको भनाइ हो। जमेका isophthalic र orthophthalic laminate आँखाले छुट्याउन सकिँदैन, त्यसैले पुष्टि भनेको निरीक्षण होइन — कागजात र traceability हो।',
        },
        {
          q: 'के आपूर्तिकर्ताको ISO 9001 प्रमाणपत्रले resin समेट्छ?',
          a: 'गुणस्तर व्यवस्थापन प्रणालीको प्रमाणपत्रले कम्पनीले प्रक्रिया कसरी दस्तावेजीकृत र नियन्त्रित गर्छ भन्ने समेट्छ। आपूर्तिकर्ताबारे यो साँच्चै उपयोगी जानकारी हो। तर यो resin grade को प्राविधिक प्रमाणीकरण होइन र त्यसरी उद्धृत गर्नु हुँदैन।',
        },
        {
          q: 'यस पृष्ठमा प्रतिकिलो मूल्य किन राख्नुहुन्न?',
          a: 'किनभने परिमाण, प्याकेजिङ, delivery स्थान र मिति नभनी प्रकाशित मूल्यमा खरिदकर्ताले भर पर्न सक्दैन, र लेखेको एक हप्तामै त्यो पुरानो हुन्छ। आवश्यकता पठाउनुहोस्, त्यसैअनुसार भाउ दिन्छौँ।',
        },
        {
          q: 'नेपालका लागि स्टक र delivery समय पुष्टि गर्न सक्नुहुन्छ?',
          a: 'वेब पृष्ठमा सक्दैनौँ। उपलब्धता र समय grade, परिमाण र सोध्ने समयमा भर पर्छ, त्यसैले पछि टिक्न नसक्ने दाबी प्रकाशित गर्नुको सट्टा सोधपुछमै पुष्टि गर्छौं।',
        },
        {
          q: 'मेरो ग्राहकको specification मा ISO/NPG लेखिएको छ भने?',
          a: 'त्यसलाई isophthalic कै पर्यायवाची नठानी छुट्टै माग मान्नुहोस् र सोधपुछमा स्पष्ट लेख्नुहोस्। NPG थप संरचनागत छनोट हो, र गलत कुरा माग्दा त्यो बेमेल अर्डरका बेला होइन, निरीक्षणका बेला देखिन्छ।',
        },
      ],
      sections: [
        {
          heading: 'उत्पादनको नामबाट होइन, सेवा-अवस्थाबाट सुरु गर्नुहोस्',
          body: [
            'सबैभन्दा उपयोगी सोधपुछ resin को नामबाट होइन, भागले के गर्छ भन्नेबाट सुरु हुन्छ। कुन component हो, त्यसले के राख्छ, कति मात्रा र कति तापक्रममा, र कति समयसम्म। निरन्तर डुबेको हो, बीचबीचमा भिज्ने हो, कि बाहिर मात्र रहने हो। कुन प्रक्रियाले र कस्तो अवस्थामा बनाइन्छ।',
            'यही जानकारीले आपूर्तिकर्तालाई ठीक उत्तर दिन र तपाईंलाई प्रस्तावहरू अर्थपूर्ण रूपमा दाँज्न दिन्छ। "ISO resin, राम्रो भाउ" मात्र लेखिएको सोधपुछले हरेक बिक्रेतालाई फरक अर्थ लगाउन दिन्छ, र आउने प्रस्तावहरू तुलनायोग्य हुँदैनन्।',
            'यसले नामको समस्याबाट पनि जोगाउँछ। सेवा-अवस्था लेखिएको छ भने, नमिल्ने grade पहिलो ट्यांकी सेवामा गएपछि होइन, अर्डरअघि नै पहिचान हुन्छ।',
          ],
        },
        {
          heading: 'कुन कागजातले कुन प्रश्नको उत्तर दिन्छ, थाहा पाउनुहोस्',
          body: [
            'Resin खरिदमा तीन कागजात आउँछन् र प्रायः एकअर्कासँग मिसिन्छन्। Technical Data Sheet ले grade बताउँछ: देखावट, प्रकाशित गुण, निर्माताले तोकेको प्रयोग। Safety Data Sheet ले जोखिम वर्गीकरण, handling, भण्डारण, सुरक्षा उपकरण, spill प्रतिकार्य र disposal समेट्छ। Certificate of Analysis ले एक उत्पादन batch का नापिएका मान बताउँछ।',
            'व्यावहारिक निष्कर्ष सरल छ। कुनै grade ले काम थेग्छ कि थेग्दैन भन्ने TDS को प्रश्न हो। कार्यशालाका लागि सुरक्षित कार्यविधि लेख्नु SDS को प्रश्न हो र त्यहाँ SDS नै नियन्त्रक हुन्छ। आफ्नो गुणस्तर प्रणालीलाई वास्तवमा प्राप्त सामग्रीको प्रमाण चाहिन्छ भने त्यो COA हो, र त्यसको batch नम्बर drum तथा invoice सँग मिलेमा मात्र अर्थपूर्ण हुन्छ।',
            'आवश्यक कुरा सोधपुछकै बेला माग्नुहोस्। Delivery पछि उठाइएका कागजातका माग पूरा गर्न गाह्रो हुन्छ र पठाइसकेको सामग्रीका लागि कहिलेकाहीँ सम्भव नै हुँदैन।',
          ],
        },
        {
          heading: 'आपूर्तिकर्ताको दाबी र उत्पादनको दाबी छुट्याउनुहोस्',
          body: [
            'आपूर्तिकर्ताले ISO 9001 राखेको हुन सक्छ। त्यसले दस्तावेजीकृत गुणस्तर व्यवस्थापन प्रणाली प्रमाणित गर्छ, र कोसँग किन्ने भन्ने छनोटमा यो वैध विचारणीय कुरा हो। तर यो resin को कार्यसम्पादनबारेको भनाइ होइन, र letterhead मा भएको प्रमाणपत्र नम्बरले प्राविधिक प्रश्नको उत्तर दिँदैन।',
            'यही छुट्याइ उत्पादन मानकमा पनि लागू हुन्छ। परियोजनाले ट्यांकी, पाइप वा laminate का लागि कुनै राष्ट्रिय वा अन्तर्राष्ट्रिय मानकको पालना मागेको छ भने त्यो छुट्टै, प्रमाणित गर्न सकिने दाबी हो। कुन मानक, कुन संस्करण, र त्यसलाई समर्थन गर्ने कागजात के हो सोध्नुहोस्। Label मा लेखिएको "isophthalic" कुनै मानकको पालना होइन।',
            'Marketplace का listing सँग सतर्क रहनुहोस्। "ISO resin" वा "isophthalic resin" जस्ता शीर्षक बिक्रेताले लेखेका हुन् र स्वतन्त्र रूपमा प्रमाणित हुँदैनन्। त्यसैले खास grade कै लागि निर्माताको आफ्नै कागजात माग्नु सबैभन्दा सार्थक हुन्छ।',
          ],
        },
        {
          heading: 'सोधपुछमा के राख्ने',
          body: [
            'यस grade का लागि भाउ दिन मिल्ने सोधपुछमा सामान्यतया यी हुन्छन्: component र त्यसको सेवा-अवस्था; प्रयोग गर्ने प्रक्रिया; अपेक्षित परिमाण र कति अवधिमा; कार्यशालालाई मिल्ने प्याकेजिङ; delivery स्थान; र सामग्री स्वीकार गर्नुअघि आफ्नो गुणस्तर प्रणालीलाई चाहिने कागजात।',
            'ग्राहकको specification वा drawing ले काम नियन्त्रण गर्छ भने त्यो संलग्न गर्नुहोस् वा सम्बन्धित दफा उद्धृत गर्नुहोस्। यही एउटा कदमले धेरै ओहोरदोहोर हटाउँछ, किनभने आपूर्तिकर्तालाई के पहिल्यै तय भइसक्यो र के बाँकी छ भन्ने थाहा हुन्छ।',
            'हामीले नदेखेको अंक पुष्टि गर्न नभन्नुहोस्। कुनै grade को supplier कागजात फाइलमा छैन भने हामी त्यसै भन्छौँ र निर्माताको तर्फबाट अनुमान गर्नुको सट्टा प्रश्न उनीहरूसमक्ष पुर्‍याउँछौँ।',
          ],
        },
        {
          heading: 'यो grade हामीसँग आज कहाँ छ',
          body: [
            'Samrat FRP Traders नेपालमा FRP सामग्रीको व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो। यस grade का लागि हाम्रो आपूर्तिकर्ता Samrat Poly Resins, India — छुट्टै व्यवसाय — हो। हामी resin उत्पादन, formulation, परीक्षण वा प्रमाणीकरण गर्दैनौँ।',
            'विशेष गरी ISO Polyester Resin का लागि supplier Technical Data Sheet र Safety Data Sheet अझै हाम्रो कागजात पुस्तकालयमा छैनन्, र नेपालका लागि मूल्य, प्याकेजिङ, स्टक अवस्था वा delivery प्रतिबद्धता यस साइटमा कतै प्रकाशित छैन। ती तपाईंलाई चाहिने grade र परिमाणअनुसार सोधपुछमा पुष्टि हुन्छन्।',
            'Polyester श्रेणीका अरू केही grade का supplier कागजात भने फाइलमा छन् र उत्पादन पृष्ठबाट लिंक गरिएका छन्। तपाईंको आवश्यकता grade मा लचिलो छ भने सोधपुछ योजना बनाउँदा यो जान्नु उपयोगी हुन्छ।',
          ],
        },
      ],
    },
  },
];
