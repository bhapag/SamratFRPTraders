// Allied-consumables cluster.
//
// The six allied items (cobalt octoate, styrene monomer, NC thinner, brushes,
// soap stone powder, wax polish) already carry one well-written guide each, and
// padding them out to match the article count of a resin would produce exactly
// the template overlap this repository has removed twice before.
//
// What was genuinely missing is the confusion that sits BETWEEN two of them: a
// lacquer thinner and a reactive diluent are both "thinners" in ordinary speech
// and are not interchangeable in a polyester system. That question belongs to
// neither product's own guide, which is why it gets its own page here.

import { commercialPosition, enquiryLink, neCommercialPosition, neEnquiryLink } from './shared.js';

export const alliedConsumablesCluster = [
  {
    slug: 'nc-thinner-vs-styrene-monomer',
    title: 'NC Thinner vs Styrene Monomer: Why Only One of Them Belongs in Resin',
    description:
      'Both get called thinners and they do entirely different jobs. Why a lacquer thinner reduces viscosity without ever becoming part of the laminate, what a reactive diluent does instead, and where each one genuinely belongs in an FRP workshop.',
    category: 'Comparison Guide',
    icon: 'compare',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'NC Thinner vs Styrene Monomer | What Thins Polyester Resin',
      ogTitle: 'NC Thinner vs Styrene Monomer in an FRP Workshop',
      ogDescription:
        'One evaporates out and leaves a weaker laminate. The other reacts into the cured network. Why the two are not interchangeable.',
      keywords: [
        'NC thinner',
        'styrene monomer',
        'thinning polyester resin',
        'reactive diluent',
        'FRP workshop solvent Nepal',
      ],
    },
    quickFacts: {
      'NC Thinner': 'A solvent blend for nitrocellulose lacquer work and for cleaning tools',
      'Styrene Monomer': 'A reactive diluent that copolymerises into the cured polyester network',
      'The error this page addresses': 'Reducing polyester resin viscosity with a lacquer thinner',
      'Who decides how much diluent': 'The resin manufacturer, in the document for that grade',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: ['styrene-monomer-guide', 'nc-thinner-guide', 'cobalt-octoate-guide'],
    recommendedLinks: [
      {
        href: '/products/styrene-monomer/',
        label: 'View Styrene Monomer',
        description: 'The reactive diluent, with the buyer guide that covers storage and inhibitor.',
      },
      {
        href: '/products/nc-thinner/',
        label: 'View NC Thinner',
        description: 'The lacquer solvent blend, with its own practical guide.',
      },
      {
        href: '/resources/styrene-monomer-guide/',
        label: 'Styrene monomer as a reactive diluent',
        description: 'What a reactive diluent is and what changes when you add one.',
      },
      enquiryLink,
    ],
    comparisonTable: {
      title: 'Two products that are both called thinners',
      note: 'This page describes what each product class does. It is not a dosage table. How much of any diluent a resin will tolerate is set by the resin manufacturer in the document for that grade.',
      headers: ['Question', 'NC Thinner', 'Styrene Monomer'],
      rows: [
        ['What it is', 'A blend of solvents formulated for nitrocellulose lacquer', 'A reactive monomer, and already a component of the resin you buy'],
        ['What happens to it during cure', 'Nothing — it evaporates and leaves', 'It copolymerises and becomes part of the cured network'],
        ['Effect on a polyester laminate', 'Leaves solvent that must escape, and it weakens what is left behind', 'Becomes part of the crosslinked structure, within the limits the manufacturer sets'],
        ['Legitimate use in an FRP workshop', 'Cleaning tools, brushes and equipment; lacquer coating work', 'Adjusting viscosity within the manufacturer’s published guidance'],
        ['Legitimate use in coating work', 'This is its actual purpose', 'Not a lacquer thinner'],
        ['Can it fix a resin that has thickened in storage', 'No — and using it that way hides the real problem', 'Not a substitute for checking why the resin thickened'],
      ],
    },
    faqs: [
      {
        q: 'Can I use NC thinner to thin polyester resin?',
        a: 'This is the question the page exists for, and the answer is that a lacquer thinner is not a diluent for a polyester laminating system. It does not react into the cured resin. It reduces viscosity by sitting in the mix as a solvent that then has to leave, and what it leaves behind is a laminate with less resin holding it together than the lay-up was designed around.',
      },
      {
        q: 'What is a reactive diluent, and why is styrene one?',
        a: 'A reactive diluent lowers viscosity and then takes part in the curing reaction rather than evaporating out. Styrene is already in the resin you buy — an unsaturated polyester is supplied dissolved in it — and it crosslinks with the polyester chains during cure. That is why adding it is a different act from adding a solvent.',
      },
      {
        q: 'So can I add as much styrene as I like?',
        a: 'No. Changing the styrene content changes the cure and the properties of the finished laminate, and every resin has limits set by the manufacturer. How much, if any, is appropriate for a grade is published by whoever made it. We do not publish dosages here and no general article should.',
      },
      {
        q: 'What should I use to clean brushes and tools?',
        a: 'Solvent cleaning of tools is exactly where a thinner belongs, and it is a normal part of an FRP workshop. Which solvent suits which job, along with ventilation, storage and disposal, is covered by the safety documentation for the product you are using and by your own workshop controls.',
      },
      {
        q: 'My resin has thickened in the drum. Can I thin it and carry on?',
        a: 'Treat a resin that has thickened as a question rather than a viscosity problem. Storage conditions, age and shelf life all matter, and thinning to get a workable liquid can disguise a material that will not cure as intended. Check the shelf life and storage guidance in the supplier document before deciding anything.',
      },
      {
        q: 'Do you sell both of these?',
        a: 'Yes, and they are separate products with separate purposes. Samrat FRP Traders is a trader, supplier, importer and reseller. We supply materials and the manufacturer’s documentation for them, and we do not issue dosage instructions or approve a formulation change.',
      },
    ],
    sections: [
      {
        heading: 'Two products, one word',
        body: [
          'In everyday workshop speech, anything that makes a thick liquid thinner is a thinner. That is where this goes wrong, because two products in this catalogue answer to that description and they behave nothing alike once the resin starts to cure.',
          'NC Thinner is a solvent blend formulated for nitrocellulose lacquer work. It reduces viscosity by dissolving into a mixture, and then it leaves: evaporation is how a solvent-based coating dries. Styrene monomer is a reactive diluent. It reduces viscosity too, but instead of evaporating it takes part in the curing reaction and ends up as part of the finished polymer.',
          'That difference is not a detail of chemistry. It decides whether the thing you added is still in the laminate when the job is finished, or gone and leaving space behind it.',
        ],
      },
      {
        heading: 'What happens when a lacquer thinner goes into laminating resin',
        body: [
          'A polyester laminating resin cures by crosslinking. The proportions in the drum are what the manufacturer formulated, and the cured laminate is what those proportions produce. A non-reactive solvent stirred into that mixture does not participate. It is present during lay-up, it makes the resin easier to work, and then it has to get out.',
          'Getting out is the problem. Solvent trapped inside a laminate leaves as it can, and what it leaves behind is a structure with less resin binding the reinforcement than the lay-up assumed. The visible consequences reported in workshops are the ones you would expect from a soft or under-cured laminate, and they are not always obvious on the day the part comes out of the mould.',
          'The commercial version of this mistake is worse than the technical one. It is usually done to save resin or to rescue an awkward batch, which means it tends to happen on a production run rather than on a test piece.',
        ],
      },
      {
        heading: 'Styrene is already in the resin',
        body: [
          'It helps to remember what an unsaturated polyester resin actually is when it arrives. The polyester is dissolved in styrene. The styrene is not an additive somebody puts in later, it is part of the supplied product and part of the reaction that turns it into a solid.',
          'That is why adding more of it is a formulation change rather than a dilution. It shifts the ratio the manufacturer set, and ratios are not free parameters: styrene content affects how the resin cures and what the cured laminate is like afterwards. There are limits, and they belong to the grade.',
          'So the right question is never "how much styrene can I add" asked of a general guide. It is what the manufacturer publishes for the specific grade in front of you, and whether your application needs the change at all.',
        ],
      },
      {
        heading: 'Where each one genuinely belongs',
        body: [
          'NC Thinner belongs in lacquer coating work, which is what it is formulated for, and in cleaning: brushes, rollers, tools and equipment between batches. That is real, routine and useful work in an FRP shop, and our brushes guide covers what resin and solvent do to a brush over its life.',
          'Styrene monomer belongs where a resin manufacturer says a viscosity adjustment is appropriate, in the quantity they specify, for the grade they specify it for. It also arrives as part of every polyester resin you buy, which is why its storage, inhibitor behaviour and ventilation requirements matter in a workshop whether or not you buy it separately.',
          'Both are covered by their own safety documentation, and both raise ventilation and storage questions that belong to your site rather than to a web page.',
        ],
      },
      {
        heading: 'What we can help with',
        body: [
          'Samrat FRP Traders supplies and imports both products for the Nepal market. We are a trader, supplier, importer and reseller. We do not formulate resin systems, we do not issue dosage instructions, and we do not approve a change to a manufacturer’s formulation.',
          'What we can do is supply the material, provide the documentation the manufacturer publishes for it, and put a specific question to the supplier when the answer is not in the document. If your workshop is currently thinning laminating resin with a lacquer solvent, that is worth raising at the enquiry stage, because the useful conversation is about why the resin is not working as expected rather than about which solvent to buy.',
        ],
      },
    ],
    ne: {
      title: 'NC Thinner बनाम Styrene Monomer: Resin मा किन एउटा मात्र मिल्छ',
      description:
        'दुवैलाई thinner भनिन्छ, तर काम बिल्कुलै फरक। Lacquer thinner ले viscosity घटाए पनि किन कहिल्यै laminate को भाग बन्दैन, reactive diluent ले बरु के गर्छ, र FRP कार्यशालामा कुन कहाँ साँच्चै मिल्छ।',
      seo: {
        title: 'NC Thinner बनाम Styrene Monomer | Polyester Resin के ले पातलो पार्छ',
        ogTitle: 'FRP कार्यशालामा NC Thinner बनाम Styrene Monomer',
        ogDescription:
          'एउटा उडेर जान्छ र कमजोर laminate छोड्छ। अर्को जमेको संरचनामै मिल्छ। यी किन साट्न मिल्दैन।',
        keywords: [
          'NC thinner',
          'styrene monomer',
          'polyester resin पातलो पार्ने',
          'reactive diluent',
          'FRP कार्यशाला solvent नेपाल',
        ],
      },
      quickFacts: {
        'NC Thinner': 'Nitrocellulose lacquer काम र उपकरण सफा गर्न प्रयोग हुने solvent मिश्रण',
        'Styrene Monomer': 'Reactive diluent — जमेको polyester संरचनामै मिल्ने',
        'यो पृष्ठको विषय भएको गल्ती': 'Lacquer thinner हालेर polyester resin पातलो पार्नु',
        'Diluent को मात्रा कसले तोक्छ': 'त्यही grade को कागजातमा resin निर्माताले',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        {
          href: '/products/styrene-monomer/',
          label: 'Styrene Monomer हेर्नुहोस्',
          description: 'Reactive diluent — भण्डारण र inhibitor समेट्ने खरिदकर्ता गाइड सहित।',
        },
        {
          href: '/products/nc-thinner/',
          label: 'NC Thinner हेर्नुहोस्',
          description: 'Lacquer solvent मिश्रण, आफ्नै व्यावहारिक गाइड सहित।',
        },
        {
          href: '/resources/styrene-monomer-guide/',
          label: 'Reactive diluent का रूपमा styrene monomer',
          description: 'Reactive diluent भनेको के हो र थप्दा के फेरिन्छ।',
        },
        neEnquiryLink,
      ],
      comparisonTable: {
        title: 'दुवैलाई thinner भनिने दुई उत्पादन',
        note: 'यो पृष्ठले प्रत्येक उत्पादन वर्गले के गर्छ भन्ने बताउँछ। यो dosage तालिका होइन। कुनै resin ले कति diluent सहन्छ भन्ने त्यही grade को कागजातमा resin निर्माताले तोक्छ।',
        headers: ['प्रश्न', 'NC Thinner', 'Styrene Monomer'],
        rows: [
          ['यो के हो', 'Nitrocellulose lacquer का लागि बनाइएको solvent मिश्रण', 'Reactive monomer — तपाईंले किन्ने resin मै पहिल्यै रहेको'],
          ['Cure का बेला यसलाई के हुन्छ', 'केही हुँदैन — उडेर जान्छ', 'Copolymerise भएर जमेको संरचनाकै भाग बन्छ'],
          ['Polyester laminate मा असर', 'निस्कनैपर्ने solvent छोड्छ, र बाँकी रहेको संरचना कमजोर बनाउँछ', 'निर्माताले तोकेको सीमाभित्र crosslinked संरचनाकै भाग बन्छ'],
          ['FRP कार्यशालामा वैध प्रयोग', 'ब्रस, उपकरण र सामान सफा गर्न; lacquer coating काम', 'निर्माताको प्रकाशित निर्देशनभित्र viscosity मिलाउन'],
          ['Coating काममा वैध प्रयोग', 'यही नै यसको वास्तविक काम हो', 'यो lacquer thinner होइन'],
          ['भण्डारणमा बाक्लिएको resin सुधार्छ?', 'गर्दैन — र यसरी प्रयोग गर्दा असली समस्या लुक्छ', 'Resin किन बाक्लियो भनी हेर्नुको विकल्प होइन'],
        ],
      },
      faqs: [
        {
          q: 'के polyester resin पातलो पार्न NC thinner प्रयोग गर्न मिल्छ?',
          a: 'यो पृष्ठ यही प्रश्नका लागि छ, र उत्तर हो: lacquer thinner polyester laminating प्रणालीको diluent होइन। यो जमेको resin सँग प्रतिक्रिया गर्दैन। यसले solvent का रूपमा मिश्रणमा बसेर viscosity घटाउँछ र पछि निस्कनुपर्छ — अनि छोड्ने कुरा भनेको lay-up ले अनुमान गरेभन्दा कम resin ले बाँधिएको laminate हो।',
        },
        {
          q: 'Reactive diluent भनेको के हो, र styrene किन त्यस्तो हो?',
          a: 'Reactive diluent ले viscosity घटाउँछ र उडेर जानुको सट्टा cure प्रतिक्रियामै भाग लिन्छ। Styrene तपाईंले किन्ने resin मै हुन्छ — unsaturated polyester त्यसैमा घोलिएर आपूर्ति हुन्छ — र cure का बेला polyester श्रृंखलासँग crosslink हुन्छ। त्यसैले यो थप्नु solvent थप्नुभन्दा फरक काम हो।',
        },
        {
          q: 'त्यसो भए जति styrene हाले पनि हुन्छ?',
          a: 'हुँदैन। Styrene को मात्रा फेर्दा cure र तयारी laminate का गुण दुवै फेरिन्छन्, र हरेक resin का लागि निर्माताले सीमा तोकेको हुन्छ। कुनै grade मा कति उपयुक्त हुन्छ — वा हुँदै हुन्छ कि हुँदैन — त्यो बनाउनेले प्रकाशित गर्छ। हामी यहाँ dosage राख्दैनौँ, र कुनै सामान्य लेखले राख्नु पनि हुँदैन।',
        },
        {
          q: 'ब्रस र उपकरण सफा गर्न के प्रयोग गर्ने?',
          a: 'उपकरण solvent ले सफा गर्नु ठ्याक्कै thinner को ठाउँ हो, र यो FRP कार्यशालाको सामान्य काम हो। कुन कामका लागि कुन solvent, अनि ventilation, भण्डारण र disposal — यी तपाईंले प्रयोग गर्ने उत्पादनको safety कागजात र आफ्नो कार्यशालाको नियन्त्रणले तय गर्छन्।',
        },
        {
          q: 'Drum मा resin बाक्लियो। पातलो पारेर काम गरे हुन्छ?',
          a: 'बाक्लिएको resin लाई viscosity को समस्या होइन, प्रश्न मान्नुहोस्। भण्डारणको अवस्था, उमेर र shelf life सबैले असर गर्छन्, र काम गर्न मिल्ने बनाउन पातलो पार्दा सोचेजस्तो cure नहुने सामग्री लुक्न सक्छ। केही निर्णय गर्नुअघि supplier कागजातको shelf life र भण्डारण निर्देशन हेर्नुहोस्।',
        },
        {
          q: 'के तपाईंहरू दुवै बेच्नुहुन्छ?',
          a: 'बेच्छौँ, र यी फरक उद्देश्य भएका छुट्टै उत्पादन हुन्। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो। हामी सामग्री र त्यसका लागि निर्माताले दिएको कागजात उपलब्ध गराउँछौँ; dosage निर्देशन दिँदैनौँ र formulation परिवर्तन स्वीकृत गर्दैनौँ।',
        },
      ],
      sections: [
        {
          heading: 'दुई उत्पादन, एउटै शब्द',
          body: [
            'कार्यशालाको दैनिक बोलीमा बाक्लो झोललाई पातलो बनाउने जुनसुकै कुरालाई thinner भनिन्छ। गडबडी यहीँबाट सुरु हुन्छ, किनभने यस श्रेणीका दुई उत्पादन त्यो वर्णनमा पर्छन् र resin जम्न थालेपछि तिनको व्यवहार बिल्कुलै मिल्दैन।',
            'NC Thinner nitrocellulose lacquer कामका लागि बनाइएको solvent मिश्रण हो। यो मिश्रणमा घुलेर viscosity घटाउँछ, अनि निस्कन्छ — solvent-आधारित coating सुक्ने तरिका नै उडेर जानु हो। Styrene monomer भने reactive diluent हो। यसले पनि viscosity घटाउँछ, तर उडेर जानुको सट्टा cure प्रतिक्रियामै भाग लिन्छ र अन्ततः तयारी polymer कै भाग बन्छ।',
            'यो फरक रसायनको सानो विवरण होइन। काम सकिँदा तपाईंले थपेको कुरा laminate मा अझै छ कि छैन, वा गएर ठाउँ छोडेको छ — यही कुरा यसले तय गर्छ।',
          ],
        },
        {
          heading: 'Laminating resin मा lacquer thinner हाल्दा के हुन्छ',
          body: [
            'Polyester laminating resin crosslinking बाट जम्छ। Drum भित्रको अनुपात निर्माताले बनाएको हो, र जमेको laminate त्यही अनुपातको उपज हो। त्यो मिश्रणमा मिसाइएको non-reactive solvent ले प्रतिक्रियामा भाग लिँदैन। यो lay-up का बेला उपस्थित हुन्छ, resin सजिलो बनाउँछ, अनि बाहिर निस्कनुपर्छ।',
            'निस्कनु नै समस्या हो। Laminate भित्र अड्किएको solvent जसरी सक्छ त्यसरी निस्कन्छ, र छोड्ने कुरा भनेको lay-up ले अनुमान गरेभन्दा कम resin ले reinforcement बाँधेको संरचना हो। कार्यशालाहरूमा देखिने परिणाम नरम वा अपूर्ण cure भएको laminate बाट अपेक्षित नै हुन्छन्, र ती भाग साँचोबाट निस्केकै दिन सधैँ देखिँदैनन्।',
            'यस गल्तीको व्यावसायिक रूप प्राविधिक रूपभन्दा नराम्रो छ। यो प्रायः resin बचाउन वा अप्ठ्यारो batch जोगाउन गरिन्छ — अर्थात् परीक्षण टुक्रामा होइन, उत्पादन कै बेला हुन्छ।',
          ],
        },
        {
          heading: 'Styrene resin मै पहिल्यै हुन्छ',
          body: [
            'Unsaturated polyester resin आइपुग्दा वास्तवमा के हो भन्ने सम्झनु उपयोगी हुन्छ। Polyester styrene मै घोलिएको हुन्छ। Styrene पछि कसैले थप्ने additive होइन — यो आपूर्ति हुने उत्पादनकै भाग हो र यसलाई ठोस बनाउने प्रतिक्रियाकै भाग पनि।',
            'त्यसैले यसलाई थप्नु dilution होइन, formulation परिवर्तन हो। यसले निर्माताले तोकेको अनुपात सार्छ, र अनुपात स्वतन्त्र चल होइनन्: styrene को मात्राले resin कसरी जम्छ र जमेपछि laminate कस्तो हुन्छ — दुवैमा असर गर्छ। सीमा हुन्छ, र ती grade सँगै आउँछन्।',
            'त्यसैले सही प्रश्न कहिल्यै पनि सामान्य गाइडलाई सोधिने "कति styrene हाल्न मिल्छ" होइन। सामु रहेको खास grade का लागि निर्माताले के प्रकाशित गरेका छन्, र तपाईंको कामलाई त्यो परिवर्तन चाहिन्छ कि चाहिँदैन — प्रश्न त्यो हो।',
          ],
        },
        {
          heading: 'कुन कहाँ साँच्चै मिल्छ',
          body: [
            'NC Thinner lacquer coating काममा मिल्छ — यो त्यसैका लागि बनाइएको हो — र सफाइमा: batch बीचमा ब्रस, roller, उपकरण र सामान। FRP कार्यशालामा यो वास्तविक, नियमित र उपयोगी काम हो, र हाम्रो ब्रस गाइडले ब्रसको आयुभरि resin र solvent ले के गर्छन् भन्ने समेट्छ।',
            'Styrene monomer त्यहाँ मिल्छ जहाँ resin निर्माताले viscosity मिलाउनु उपयुक्त भनेका छन्, उनीहरूले तोकेको मात्रामा, उनीहरूले तोकेकै grade का लागि। यो तपाईंले किन्ने हरेक polyester resin कै भाग भएर पनि आउँछ — त्यसैले छुट्टै किन्नुभएको छ कि छैन, कार्यशालामा यसको भण्डारण, inhibitor व्यवहार र ventilation का माग महत्त्वपूर्ण हुन्छन्।',
            'दुवैका आफ्नै safety कागजात छन्, र दुवैले ventilation तथा भण्डारणका प्रश्न उठाउँछन् — जुन वेब पृष्ठको होइन, तपाईंको साइटको विषय हो।',
          ],
        },
        {
          heading: 'हामी केमा सहयोग गर्न सक्छौँ',
          body: [
            'Samrat FRP Traders ले नेपाली बजारका लागि दुवै उत्पादन आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी resin प्रणाली formulate गर्दैनौँ, dosage निर्देशन दिँदैनौँ, र निर्माताको formulation मा परिवर्तन स्वीकृत गर्दैनौँ।',
            'हामीले गर्न सक्ने भनेको सामग्री उपलब्ध गराउने, त्यसका लागि निर्माताले प्रकाशित गरेको कागजात दिने, र कागजातमा उत्तर नभएको बेला आपूर्तिकर्तालाई निश्चित प्रश्न सोध्ने हो। तपाईंको कार्यशालाले अहिले laminating resin लाई lacquer solvent ले पातलो पारिरहेको छ भने सोधपुछकै बेला भन्नुहोस् — उपयोगी कुरा कुन solvent किन्ने भन्ने होइन, resin सोचेजस्तो किन काम गरिरहेको छैन भन्ने हो।',
          ],
        },
      ],
    },
  },
];
