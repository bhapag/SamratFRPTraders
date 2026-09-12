// GP Yellow Resin — the last product in the 33-item matrix with no foundation
// explainer. It had six supporting pages, but all of them were comparisons,
// application guides or troubleshooting: nothing answered "what is this grade
// and why would I choose it".
//
// This grade has a supplier Technical Data Sheet and Safety Data Sheet on file,
// so published values may be quoted, attributed to Samrat Poly Resins, India.
// It is deliberately written as a trade-off against GP Clear rather than as an
// improvement on it, which is how the existing comparison already frames it.

import { commercialPosition, enquiryLink, neCommercialPosition, neEnquiryLink } from './shared.js';

export const gpYellowResinCluster = [
  {
    slug: 'what-is-gp-yellow-resin',
    title: 'What Is GP Yellow Resin? A Slower-Gelling General-Purpose Grade',
    description:
      'GP Yellow Resin explained for Nepal fabricators: what the supplier documents it as, why a thicker body and a longer gel time are a trade-off rather than an upgrade, and the kinds of work where that trade-off pays.',
    category: 'Product Guide',
    icon: 'info',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'What Is GP Yellow Resin? General-Purpose Grade Explained',
      ogTitle: 'What Is GP Yellow Resin?',
      ogDescription:
        'An orthophthalic general-purpose polyester resin with a longer open working window. What that buys, and what it costs.',
      keywords: [
        'GP Yellow Resin',
        'GP Yellow Resin Nepal',
        'orthophthalic polyester resin',
        'general purpose resin gel time',
        'FRP resin supplier Nepal',
      ],
    },
    quickFacts: {
      'Resin type': 'Orthophthalic unsaturated polyester, non-accelerated — per the supplier Technical Data Sheet',
      'Published viscosity': '450–600 cPs at 25°C (Samrat Poly Resins, India)',
      'Published gel time': '10–15 minutes (Samrat Poly Resins, India)',
      'What it is not': 'A higher grade of GP Clear — it is a different working characteristic',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: [
      'gp-clear-resin-vs-gp-yellow-resin',
      'gp-yellow-resin-uses-in-frp-manufacturing',
      'understanding-gel-time-in-polyester-resin',
    ],
    recommendedLinks: [
      {
        href: '/products/gp-yellow-resin/',
        label: 'View GP Yellow Resin',
        description: 'The commercial product page, with the supplier Technical Data Sheet and Safety Data Sheet.',
      },
      {
        href: '/products/gp-clear-resin/',
        label: 'View GP Clear Resin',
        description: 'The faster-gelling clear grade this one is usually weighed against.',
      },
      {
        href: '/resources/gp-clear-resin-vs-gp-yellow-resin/',
        label: 'GP Clear vs GP Yellow',
        description: 'The direct comparison, with the published figures side by side.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Is GP Yellow Resin better than GP Clear Resin?',
        a: 'No, and it is not sold as such. They are both orthophthalic general-purpose grades. GP Yellow has a thicker body and a longer gel time, which gives a longer open working window and a slower production cycle. Which one suits you depends on whether your constraint is working time or throughput.',
      },
      {
        q: 'What does the supplier publish for this grade?',
        a: 'The Samrat Poly Resins, India Technical Data Sheet identifies an orthophthalic unsaturated polyester resin with a non-accelerated cure system, a viscosity of 450 to 600 cPs at 25°C, a gel time of 10 to 15 minutes, a styrene content of 34 to 38 per cent and a cure time of 60 to 90 minutes. A Safety Data Sheet is on file as well, and both are linked from the product page.',
      },
      {
        q: 'Why is it yellow? Does the colour do anything?',
        a: 'The colour identifies the grade rather than performing a function in the laminate. It is a transparent yellow rather than the clear of a GP Clear grade. If the appearance of the finished surface matters, that is a gelcoat or pigment question rather than a laminating-resin one.',
      },
      {
        q: 'Does the longer gel time mean I have more time in hot weather?',
        a: 'Gel time is temperature-sensitive for every unsaturated polyester, so a published figure describes behaviour under the conditions the manufacturer tested, not a guarantee for a warm afternoon in Biratnagar. The sensible approach is to treat the published figure as a starting point and trial the mix under your own workshop conditions.',
      },
      {
        q: 'Is this the same thing as Sheet Grade Yellow Resin?',
        a: 'No. Sheet Grade Yellow Resin is a pre-pigmented sheet grade for sheet and panel production. GP Yellow is a general-purpose laminating grade that happens to be yellow. There is a separate comparison guide covering that distinction.',
      },
      {
        q: 'What is a non-accelerated cure system?',
        a: 'It means the accelerator is not pre-mixed into the resin, so the fabricator adds both the catalyst and, where the system calls for it, the accelerator separately. That gives control over gel time to suit conditions and batch size. The two are always dispersed into the resin separately and never combined with each other first.',
      },
    ],
    sections: [
      {
        heading: 'What the supplier documents it as',
        body: [
          'Samrat Poly Resins, India documents GP Yellow Resin as an orthophthalic unsaturated polyester resin with a non-accelerated cure system, and lists it for roofing sheets, water tanks, FRP doors and general FRP work. Samrat FRP Traders supplies and imports it for the Nepal market as a trader, supplier, importer and reseller — we do not manufacture or test it.',
          'The published values on the Technical Data Sheet are a viscosity of 450 to 600 cPs at 25°C, a gel time of 10 to 15 minutes, a styrene content of 34 to 38 per cent and a cure time of 60 to 90 minutes. Those are the manufacturer’s figures for the supplied resin, and both the Technical Data Sheet and the Safety Data Sheet are on file and linked from the product page.',
          'Everything below is about what those figures mean on a shop floor. None of it is a dosage, a cure schedule or an approval for a specific part.',
        ],
      },
      {
        heading: 'The same chemistry as the clear grade',
        body: [
          'GP Yellow is orthophthalic, which puts it in the same family as GP Clear Resin and the rest of the general-purpose range. That matters because it settles what this grade is not: it is not an isophthalic grade, so it is not the answer for a laminate that will sit in water or hold chemicals for years. The isophthalic route is a separate conversation.',
          'What GP Yellow offers within the general-purpose family is a different working characteristic. Its body is thicker than GP Clear’s and its gel time is longer, and those two things travel together. Neither is an improvement on the clear grade. They are a trade.',
        ],
      },
      {
        heading: 'What a longer open window actually buys',
        body: [
          'The practical benefit of a 10 to 15 minute gel time against a faster grade is the size of the piece you can finish in one go. Rolling reinforcement out across a large tank panel, a door skin or a wide sheet takes time, and a resin that begins setting while you are still working it produces exactly the defects a laminator does not want: dry patches where it dragged, and a laminate that was rolled after it had started to gel.',
          'The thicker body cuts the other way. It asks more of the roller to drive the resin fully through the fibre without leaving it sitting on the surface, which is why the same grade that helps on a big panel can feel like extra work on a small one.',
          'So the question is about the piece, not the price. Large areas worked by hand favour the longer window. Small parts and high-throughput production favour the faster grade, because each cycle finishes sooner.',
        ],
      },
      {
        heading: 'What it costs you',
        body: [
          'A longer gel time is a slower production cycle. On a line that turns parts around all day, that is a real throughput cost, and it is the reason a faster grade exists at all. The trade is only worth making when the working window is the binding constraint.',
          'The non-accelerated cure system gives back some of that control. Because the accelerator is not pre-mixed, dosage can be adjusted to suit workshop temperature and batch size rather than being fixed by the supplier. That is a genuine flexibility, and it is also a responsibility: the accelerator and the peroxide catalyst are always added to the resin separately and never brought into contact with each other first.',
          'Gel time in a real workshop is not a fixed number. Ambient temperature dominates, followed by the temperature of the resin itself and the mass of the mix, which retains its own reaction heat. A published figure is a starting point for a trial, not a promise about a particular afternoon.',
        ],
      },
      {
        heading: 'Where it sits in the range',
        body: [
          'Against GP Clear Resin: same chemistry, thicker body, longer working window, slower cycle. A trade-off, and there is a dedicated comparison covering both sets of published figures.',
          'Against Sheet Grade Yellow Resin: different job entirely. The sheet grade is pre-pigmented for sheet and panel production; GP Yellow is a general-purpose laminating resin that happens to be yellow. Confusing the two on a purchase order is a real and avoidable error.',
          'Against an isophthalic grade: a different question again. If the part is going to stay wet or meet chemicals, neither general-purpose grade is the right starting point, and the conversation moves to an ISO grade or to vinyl ester depending on how demanding the service is.',
        ],
      },
      {
        heading: 'What to settle before ordering',
        body: [
          'Describe the part and the way it is laid up: the size of the area worked in one pass, whether it is hand lay-up or spray, and the conditions in your workshop across the year. That is what decides between the grades, and it is information no catalogue page can supply on your behalf.',
          'If your quality process needs documentation before you can accept material, say so at the enquiry stage. Both the Technical Data Sheet and the Safety Data Sheet are on file for this grade. Batch-specific evidence is a Certificate of Analysis and is a separate request, better raised before dispatch than after.',
          'Pricing, packaging and availability in Nepal are confirmed on enquiry and are not published here, because a figure without a stated quantity, pack format, destination and date is not something a buyer can act on.',
        ],
      },
    ],
    ne: {
      title: 'GP Yellow Resin के हो? ढिलो जम्ने सामान्य प्रयोजनको grade',
      description:
        'नेपाली fabricator का लागि GP Yellow Resin: आपूर्तिकर्ताले यसलाई कसरी दस्तावेजीकृत गरेका छन्, बाक्लो body र लामो gel time किन सुधार होइन साटासाट हो, र त्यो साटासाट कस्तो काममा फाइदाजनक हुन्छ।',
      seo: {
        title: 'GP Yellow Resin के हो? सामान्य प्रयोजनको grade व्याख्या',
        ogTitle: 'GP Yellow Resin के हो?',
        ogDescription:
          'लामो खुला कार्य-समय दिने orthophthalic सामान्य प्रयोजनको polyester resin। यसले के दिन्छ र के लिन्छ।',
        keywords: [
          'GP Yellow Resin',
          'GP Yellow Resin नेपाल',
          'orthophthalic polyester resin',
          'सामान्य प्रयोजन resin gel time',
        ],
      },
      quickFacts: {
        'Resin प्रकार': 'Orthophthalic unsaturated polyester, non-accelerated — supplier Technical Data Sheet अनुसार',
        'प्रकाशित viscosity': '25°C मा 450–600 cPs (Samrat Poly Resins, India)',
        'प्रकाशित gel time': '10–15 मिनेट (Samrat Poly Resins, India)',
        'यो के होइन': 'GP Clear को माथिल्लो grade — यो फरक कार्य-व्यवहार हो',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        {
          href: '/products/gp-yellow-resin/',
          label: 'GP Yellow Resin हेर्नुहोस्',
          description: 'व्यावसायिक उत्पादन पृष्ठ — supplier Technical Data Sheet र Safety Data Sheet सहित।',
        },
        {
          href: '/products/gp-clear-resin/',
          label: 'GP Clear Resin हेर्नुहोस्',
          description: 'प्रायः यसैसँग तुलना गरिने छिटो जम्ने clear grade।',
        },
        {
          href: '/resources/gp-clear-resin-vs-gp-yellow-resin/',
          label: 'GP Clear बनाम GP Yellow',
          description: 'प्रकाशित अंक आमनेसामने राखेको सीधा तुलना।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के GP Yellow Resin, GP Clear Resin भन्दा राम्रो हो?',
          a: 'होइन, र त्यसरी बेचिँदैन पनि। दुवै orthophthalic सामान्य प्रयोजनका grade हुन्। GP Yellow को body बाक्लो र gel time लामो हुन्छ, जसले लामो खुला कार्य-समय र ढिलो production cycle दिन्छ। तपाईंको बाधा कार्य-समय हो कि उत्पादन गति — त्यसैले कुन उपयुक्त हो तय हुन्छ।',
        },
        {
          q: 'यस grade का लागि आपूर्तिकर्ताले के प्रकाशित गर्छन्?',
          a: 'Samrat Poly Resins, India को Technical Data Sheet ले non-accelerated cure प्रणाली भएको orthophthalic unsaturated polyester resin पहिचान गर्छ — 25°C मा 450–600 cPs viscosity, 10–15 मिनेट gel time, 34–38% styrene content र 60–90 मिनेट cure time सहित। Safety Data Sheet पनि फाइलमा छ, र दुवै उत्पादन पृष्ठबाट लिंक गरिएका छन्।',
        },
        {
          q: 'यो पहेँलो किन छ? रङले केही गर्छ?',
          a: 'रङले laminate मा काम गर्दैन, grade चिनाउँछ। यो GP Clear grade को सफा रङभन्दा फरक, पारदर्शी पहेँलो हो। तयारी सतहको देखावट महत्त्वपूर्ण छ भने त्यो gelcoat वा pigment को प्रश्न हो, laminating resin को होइन।',
        },
        {
          q: 'लामो gel time भनेको तातो मौसममा बढी समय पाइन्छ भन्ने हो?',
          a: 'हरेक unsaturated polyester मा gel time तापक्रम-संवेदनशील हुन्छ, त्यसैले प्रकाशित अंकले निर्माताले परीक्षण गरेको अवस्थाको व्यवहार बताउँछ — विराटनगरको न्यानो दिउँसोको ग्यारेन्टी होइन। प्रकाशित अंकलाई सुरुवात बिन्दु मानेर आफ्नै कार्यशालाको अवस्थामा परीक्षण गर्नु व्यावहारिक हुन्छ।',
        },
        {
          q: 'के यो Sheet Grade Yellow Resin कै हो?',
          a: 'होइन। Sheet Grade Yellow Resin sheet र प्यानल उत्पादनका लागि पूर्व-रङ्गिएको sheet grade हो। GP Yellow सामान्य प्रयोजनको laminating grade हो, जुन पहेँलो पनि छ। यही फरक समेट्ने छुट्टै तुलना गाइड छ।',
        },
        {
          q: 'Non-accelerated cure प्रणाली भनेको के हो?',
          a: 'यसको अर्थ accelerator resin मा पहिल्यै मिसाइएको हुँदैन — fabricator ले catalyst र प्रणालीले मागेमा accelerator छुट्टाछुट्टै हाल्छ। यसले अवस्था र batch आकारअनुसार gel time नियन्त्रण गर्न दिन्छ। दुवैलाई resin मा सधैँ छुट्टाछुट्टै मिसाइन्छ, कहिल्यै पहिले आपसमा मिसाइँदैन।',
        },
      ],
      sections: [
        {
          heading: 'आपूर्तिकर्ताले यसलाई कसरी दस्तावेजीकृत गरेका छन्',
          body: [
            'Samrat Poly Resins, India ले GP Yellow Resin लाई non-accelerated cure प्रणाली भएको orthophthalic unsaturated polyester resin भनेर दस्तावेजीकृत गर्छन्, र यसलाई छाना पाता, पानी ट्यांकी, FRP ढोका र सामान्य FRP कामका लागि सूचीबद्ध गर्छन्। Samrat FRP Traders ले यसलाई नेपाली बजारका लागि व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेताको हैसियतले आपूर्ति र आयात गर्छ — हामी यो उत्पादन वा परीक्षण गर्दैनौँ।',
            'Technical Data Sheet का प्रकाशित मान यी हुन्: 25°C मा 450–600 cPs viscosity, 10–15 मिनेट gel time, 34–38% styrene content र 60–90 मिनेट cure time। यी आपूर्ति हुने resin का लागि निर्माताका अंक हुन्, र Technical Data Sheet तथा Safety Data Sheet दुवै फाइलमा छन् र उत्पादन पृष्ठबाट लिंक गरिएका छन्।',
            'तलका कुरा ती अंकले कार्यशालामा के अर्थ राख्छन् भन्नेबारे हुन्। यीमध्ये कुनै पनि dosage, cure schedule वा कुनै भागका लागि approval होइन।',
          ],
        },
        {
          heading: 'Clear grade कै रसायन',
          body: [
            'GP Yellow orthophthalic हो, जसले यसलाई GP Clear Resin र बाँकी सामान्य प्रयोजन श्रेणीकै परिवारमा राख्छ। यो महत्त्वपूर्ण छ किनभने यसले यो grade के होइन भन्ने टुंग्याउँछ: यो isophthalic grade होइन, त्यसैले वर्षौँ पानीमा रहने वा रसायन बोक्ने laminate को उत्तर यो होइन। Isophthalic बाटो छुट्टै कुरा हो।',
            'सामान्य प्रयोजन परिवारभित्र GP Yellow ले दिने कुरा भनेको फरक कार्य-व्यवहार हो। यसको body GP Clear भन्दा बाक्लो छ र gel time लामो, र यी दुई सँगै आउँछन्। यीमध्ये कुनै पनि clear grade माथिको सुधार होइन। यो साटासाट हो।',
          ],
        },
        {
          heading: 'लामो खुला समयले वास्तवमा के दिन्छ',
          body: [
            'छिटो जम्ने grade को तुलनामा 10–15 मिनेट gel time को व्यावहारिक फाइदा भनेको एकै पटकमा सक्न मिल्ने टुक्राको आकार हो। ठूलो ट्यांकी प्यानल, door skin वा चौडा sheet भरि reinforcement बेल्न समय लाग्छ, र काम गर्दागर्दै जम्न थाल्ने resin ले laminator ले नचाहेको दोष नै ल्याउँछ: तानिएका ठाउँमा सुक्खा दाग, र जम्न थालिसकेपछि बेलिएको laminate।',
            'बाक्लो body भने उल्टो दिशामा जान्छ। Resin लाई fibre भित्रसम्म पुर्‍याउन roller ले बढी मिहिनेत खोज्छ, नत्र सतहमै बसिरहन्छ — त्यसैले ठूलो प्यानलमा सघाउने grade सानो भागमा थप काम जस्तो लाग्न सक्छ।',
            'त्यसैले प्रश्न मूल्यको होइन, टुक्राको हो। हातले काम गरिने ठूला क्षेत्रलाई लामो खुला समय मन पर्छ। साना भाग र उच्च उत्पादन गतिलाई छिटो grade, किनभने हरेक चक्र चाँडै सकिन्छ।',
          ],
        },
        {
          heading: 'यसको मूल्य के हो',
          body: [
            'लामो gel time भनेको ढिलो production cycle हो। दिनभरि भाग निकाल्ने line मा यो वास्तविक उत्पादन-गति लागत हो, र छिटो grade हुनुको कारण पनि यही हो। कार्य-समय नै मुख्य बाधा भएको बेला मात्र यो साटासाट सार्थक हुन्छ।',
            'Non-accelerated cure प्रणालीले त्यसमध्ये केही नियन्त्रण फिर्ता दिन्छ। Accelerator पहिल्यै नमिसाइएकाले मात्रा आपूर्तिकर्ताले तोकेभन्दा फरक, कार्यशालाको तापक्रम र batch आकारअनुसार मिलाउन सकिन्छ। यो साँच्चै लचिलोपन हो, र जिम्मेवारी पनि: accelerator र peroxide catalyst सधैँ resin मा छुट्टाछुट्टै हालिन्छन् र कहिल्यै पहिले आपसमा सम्पर्कमा ल्याइँदैनन्।',
            'वास्तविक कार्यशालामा gel time स्थिर अंक होइन। Ambient तापक्रमको प्रभाव सबैभन्दा बढी हुन्छ, त्यसपछि resin कै तापक्रम र मिश्रणको मात्रा — जसले आफ्नै प्रतिक्रिया-ताप जोगाउँछ। प्रकाशित अंक परीक्षणको सुरुवात बिन्दु हो, कुनै खास दिउँसोको वाचा होइन।',
          ],
        },
        {
          heading: 'श्रेणीमा यो कहाँ पर्छ',
          body: [
            'GP Clear Resin सँग: उही रसायन, बाक्लो body, लामो कार्य-समय, ढिलो चक्र। साटासाट हो, र दुवैका प्रकाशित अंक समेट्ने छुट्टै तुलना गाइड छ।',
            'Sheet Grade Yellow Resin सँग: बिल्कुलै फरक काम। Sheet grade sheet र प्यानल उत्पादनका लागि पूर्व-रङ्गिएको हुन्छ; GP Yellow सामान्य प्रयोजनको laminating resin हो जुन पहेँलो पनि छ। खरिद आदेशमा यी दुई झुक्किनु वास्तविक र टार्न सकिने गल्ती हो।',
            'Isophthalic grade सँग: फेरि अर्कै प्रश्न। भाग भिजिरहने वा रसायन भेट्ने हो भने कुनै पनि सामान्य प्रयोजनको grade सुरुवात बिन्दु होइन, र सेवा कति कडा छ त्यसअनुसार कुरा ISO grade वा vinyl ester सम्म जान्छ।',
          ],
        },
        {
          heading: 'अर्डरअघि के टुंग्याउने',
          body: [
            'भाग र त्यो कसरी बनाइन्छ भन्ने वर्णन गर्नुहोस्: एकै पटकमा काम गरिने क्षेत्रको आकार, hand lay-up हो कि spray, र वर्षभरि कार्यशालाको अवस्था। Grade बीचको निर्णय यसैले गर्छ, र यो जानकारी कुनै catalogue पृष्ठले तपाईंको तर्फबाट दिन सक्दैन।',
            'सामग्री स्वीकार गर्नुअघि गुणस्तर प्रक्रियालाई कागजात चाहिन्छ भने सोधपुछकै बेला भन्नुहोस्। यस grade का Technical Data Sheet र Safety Data Sheet दुवै फाइलमा छन्। Batch-विशेष प्रमाण Certificate of Analysis हो र त्यो छुट्टै माग — पठाइसकेपछि होइन, अघि नै उठाउनु राम्रो।',
            'नेपालमा मूल्य, प्याकेजिङ र उपलब्धता सोधपुछमा पुष्टि हुन्छन् र यहाँ प्रकाशित गरिँदैनन्, किनभने परिमाण, pack format, गन्तव्य र मिति नभनी दिइएको अंकमा खरिदकर्ताले काम गर्न सक्दैन।',
          ],
        },
      ],
    },
  },
];
