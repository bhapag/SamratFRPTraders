// UV Stabilized Sheet Grade Yellow Resin cluster.
// The defining problem for this grade is a word collision: "UV stabilised"
// (a weathering additive package in a normally MEKP-cured resin) and "UV cured"
// (a resin that hardens under a lamp) sit next to each other in listings and
// search results, and buyers arrive assuming one when they mean the other.
// This range previously carried a product described as a UV-cure system. That
// description was wrong and the product was withdrawn; these guides exist partly
// so the same confusion does not take hold again.
// Grade figures live in the supplier TDS (SPR-TDS-USY), linked from the product page; no service-life claim is made.

import {
  commercialPosition,
  docsTdsOnFile,
  enquiryLink,
  neCommercialPosition,
  neDocsTdsOnFile,
  neEnquiryLink,
} from './shared.js';

const product = {
  href: '/products/uv-stabilized-sheet-grade-yellow-resin/',
  label: 'View UV Stabilized Sheet Grade Yellow Resin',
  description: 'The commercial product page, with what we can and cannot confirm about this grade.',
};
const neProduct = {
  href: '/products/uv-stabilized-sheet-grade-yellow-resin/',
  label: 'UV Stabilized Sheet Grade Yellow Resin हेर्नुहोस्',
  description: 'व्यावसायिक उत्पादन पृष्ठ — यस grade बारे के पुष्टि गर्न सकिन्छ र के सकिँदैन।',
};
const sheetGrade = {
  href: '/products/sheet-grade-yellow-resin/',
  label: 'View Sheet Grade Yellow Resin',
  description: 'The standard pre-pigmented sheet grade, for comparison.',
};
const neSheetGrade = {
  href: '/products/sheet-grade-yellow-resin/',
  label: 'Sheet Grade Yellow Resin हेर्नुहोस्',
  description: 'तुलनाका लागि सामान्य पूर्व-रङ्गिएको sheet grade।',
};

export const uvStabilizedSheetResinCluster = [
  {
    slug: 'what-is-uv-stabilised-polyester-resin',
    title: 'What Is UV-Stabilised Polyester Resin? And Why It Is Not UV-Cured',
    description:
      'UV-stabilised polyester resin explained for Nepal sheet manufacturers: what the stabiliser package is for, why the resin still cures with an MEKP catalyst, and how to tell a weathering claim apart from a curing mechanism when both are sold as "UV resin".',
    category: 'Product Guide',
    icon: 'roof',
    readingTime: '7 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'What Is UV-Stabilised Polyester Resin? Not UV-Cured',
      ogTitle: 'UV-Stabilised Polyester Resin Explained',
      ogDescription:
        'UV-stabilised resists sunlight in service. UV-cured hardens under a lamp. Two unrelated properties sold under the same two letters.',
      keywords: [
        'UV stabilised polyester resin',
        'UV stabilized resin Nepal',
        'UV cured vs UV stabilised',
        'FRP roofing sheet resin',
        'sheet grade resin Nepal',
      ],
    },
    quickFacts: {
      'What UV-stabilised means': 'An additive package that slows sunlight damage during the sheet’s service life',
      'What it does not mean': 'That the resin hardens under a UV lamp',
      'How it cures': 'With a peroxide catalyst at workshop temperature, like other polyester sheet grades',
      'Commercial position': commercialPosition,
      'Document status': docsTdsOnFile,
    },
    relatedSlugs: [
      'uv-stabilised-vs-uv-curable-resin',
      'how-frp-sheets-weather-outdoors',
      'choosing-a-sheet-grade-resin-for-outdoor-exposure',
    ],
    recommendedLinks: [
      product,
      sheetGrade,
      {
        href: '/products/mekp-hardener/',
        label: 'View MEKP Hardener',
        description: 'The catalyst route these sheet grades actually cure by.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'Does UV-stabilised resin harden under a UV lamp?',
        a: 'No. It is UV-stabilised, not UV-curing. It cures with a peroxide catalyst at workshop temperature like other unsaturated polyester sheet grades. The stabilisation is about resisting sunlight during the sheet’s years in service, which is a completely separate property from how the resin hardens.',
      },
      {
        q: 'Then why do both products get called "UV resin"?',
        a: 'Because the same two letters describe two unrelated things. UV-curable resins use a photoinitiator and harden when light reaches them, and they are sold for surfboard repair, quick patching and similar work. UV-stabilised resins contain additives that slow weathering damage. Both appear in the same search results and sometimes in the same supplier catalogue, with nothing distinguishing them.',
      },
      {
        q: 'If I leave a laminated sheet in the sun, will it cure faster or over-cure?',
        a: 'Sun exposure does not trigger a cure in a peroxide-catalysed resin the way it would in a photoinitiator system. Heat from the sun can affect how the cure proceeds, since cure behaviour is temperature-sensitive in all unsaturated polyester resins, but that is a temperature effect, not a UV one.',
      },
      {
        q: 'Is "UV stabilised" a real technical description or just marketing?',
        a: 'It describes a real formulation choice: stabilisers compounded into the resin, generally described as UV absorbers that convert absorbed energy before it breaks polymer chains, or as radical scavengers that interrupt the degradation reaction. What it does not tell you by itself is which stabiliser, at what loading, or what service life that produces. Those are questions for the manufacturer.',
      },
      {
        q: 'Does the stabiliser sit through the whole sheet or only at the surface?',
        a: 'In composites generally, weathering protection is described as coming from additives compounded into the resin, from a surfacing veil, from a gelcoat, or from a combination of those. Which of those a specific sheet relies on is a product-specific question and should be put to the manufacturer rather than assumed.',
      },
      {
        q: 'Can you send the data sheet for this grade?',
        a: 'Yes. The supplier Technical Data Sheet for UV Stabilized Sheet Grade Yellow Resin, SPR-TDS-USY (Rev. 01, September 2026), is linked from its product page and listed in our document library. It states the grade’s viscosity, gel time, styrene content, stabiliser system and a laboratory weathering result.',
      },
    ],
    sections: [
      {
        heading: 'Two letters, two unrelated properties',
        body: [
          'A resin described as UV-stabilised and a resin described as UV-curable have almost nothing in common except the two letters. One is a statement about how the material survives sunlight over years of service. The other is a statement about what makes it harden in the first place. They are not points on a scale and they are not grades of one product.',
          'A UV-curable resin contains a photoinitiator. Light reaching it starts the reaction, which is why it is sold for surfboard repair and quick patching, where a lamp or direct sun is the trigger. A UV-stabilised resin cures the ordinary way, with a peroxide catalyst at workshop temperature. Its stabiliser package has nothing to do with curing at all.',
          'This site previously listed a product described as a UV-cure system with a cure time in seconds. That description did not match what was actually being supplied, and the product was withdrawn from the range rather than left in place with a corrected label. Part of the reason this guide exists is so the same confusion does not quietly return.',
        ],
      },
      {
        heading: 'What the stabiliser package is actually for',
        body: [
          'Polyester sheets outdoors are under continuous attack from sunlight. The published literature describes the mechanism as photo-oxidation: ultraviolet energy breaking polymer chains at and near the surface, producing the discoloration, chalking and surface roughening that every fabricator recognises on an old sheet.',
          'Stabilisers are compounded in to slow that down. They are generally described in two roles: UV absorbers, which take up the energy and dissipate it before it reaches the polymer chains, and radical scavengers such as hindered amine light stabilisers, which interrupt the chain of degradation reactions once it has started.',
          'What that buys is time, not immunity. A stabilised sheet still weathers. It weathers more slowly, which on a roof that is expected to last is the entire commercial argument.',
        ],
      },
      {
        heading: 'How it cures, and why that matters on the shop floor',
        body: [
          'It cures like any other unsaturated polyester sheet grade: catalysed with a peroxide hardener, typically MEKP, at workshop temperature, with an accelerator where the system calls for one. Nothing about the process changes because the resin is stabilised.',
          'That has a practical consequence worth stating. If a supplier has offered you a resin that hardens under a lamp and described it as suitable for roofing sheet production, that is a different product class and the conversation needs to start again. And if you are switching to a stabilised sheet grade from a standard one, you are changing what the sheet does in five years, not what your line does tomorrow.',
          'Gel time and catalyst behaviour are grade properties and are temperature-sensitive, so they belong to the manufacturer’s document for the grade you receive and to a trial on your own conditions. This page gives no figures for them.',
        ],
      },
      {
        heading: 'Pre-pigmented, and why sheet lines care',
        body: [
          'This grade is supplied already pigmented yellow rather than clear. That is a production decision as much as an appearance one. When colour is mixed at the manufacturer, the shade does not depend on how carefully pigment paste is dosed into each batch on the shop floor, and successive runs match each other more reliably.',
          'The trade-off is flexibility: a factory-pigmented grade gives you the colour it gives you. If a sheet has to match panels already installed at a site, that is a different request from choosing a standard colour for new work, and it is worth raising before you order rather than after the first run.',
          'Pigment itself should not be confused with the stabiliser package. A coloured sheet is not automatically more or less durable than a clear one because of the pigment; weathering resistance is generally attributed to the additive, veil and surfacing system rather than to pigment loading.',
        ],
      },
      {
        heading: 'What we can evidence for this grade',
        body: [
          'Samrat FRP Traders supplies and imports UV Stabilized Sheet Grade Yellow Resin for the Nepal market. The supplier is Samrat Poly Resins, India, a separate business. We are the trader, supplier, importer and reseller. We do not manufacture, formulate, test or certify resin, and we do not run weathering trials.',
          'The supplier’s Technical Data Sheet for this grade is in our document library and linked from the product page, where its headline values are published with the issuer named. It reports a 1,000-hour xenon-arc weathering test (ISO 4892-2) — colour change ΔE 3–5, 80% gloss retention, 85% tensile strength retention. That is a laboratory exposure result, not a lifespan, and we still make no claim about how many years a sheet made with it will last: that depends on the formulation, the sheet construction, the climate and the maintenance.',
          'If your decision depends on a published figure, raise it at the enquiry stage and we will put the question to the supplier rather than estimate on their behalf.',
        ],
      },
    ],
    ne: {
      title: 'UV-Stabilised Polyester Resin के हो? र यो किन UV-Cured होइन',
      description:
        'नेपालका sheet उत्पादकका लागि UV-stabilised polyester resin: stabiliser package केका लागि हो, resin किन अझै MEKP catalyst ले नै जम्छ, र दुवैलाई "UV resin" भनिने बेलामा weathering को दाबी र cure हुने तरिका कसरी छुट्याउने।',
      seo: {
        title: 'UV-Stabilised Polyester Resin के हो? UV-Cured होइन',
        ogTitle: 'UV-Stabilised Polyester Resin को व्याख्या',
        ogDescription:
          'UV-stabilised ले सेवाका क्रममा घाम सहन्छ। UV-cured बत्तीले जम्छ। उही दुई अक्षरमा बेचिने दुई असम्बन्धित गुण।',
        keywords: [
          'UV stabilised polyester resin',
          'UV stabilized resin नेपाल',
          'UV cured र UV stabilised फरक',
          'FRP छाना पाता resin',
        ],
      },
      quickFacts: {
        'UV-stabilised को अर्थ': 'Sheet को सेवा-अवधिभर घामबाट हुने क्षति ढिलो बनाउने additive package',
        'यसको अर्थ होइन': 'Resin UV बत्तीले कडा हुन्छ भन्ने',
        'कसरी जम्छ': 'अन्य polyester sheet grade जस्तै कार्यशालाको तापक्रममा peroxide catalyst ले',
        'व्यावसायिक भूमिका': neCommercialPosition,
        'कागजात अवस्था': neDocsTdsOnFile,
      },
      recommendedLinks: [
        neProduct,
        neSheetGrade,
        {
          href: '/products/mekp-hardener/',
          label: 'MEKP Hardener हेर्नुहोस्',
          description: 'यी sheet grade वास्तवमा जम्ने catalyst बाटो।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'के UV-stabilised resin UV बत्तीले कडा हुन्छ?',
          a: 'हुँदैन। यो UV-stabilised हो, UV-curing होइन। अन्य unsaturated polyester sheet grade जस्तै कार्यशालाको तापक्रममा peroxide catalyst ले जम्छ। Stabilisation भनेको sheet को वर्षौँको सेवामा घाम सहने कुरा हो — resin कसरी कडा हुन्छ भन्नेसँग यसको कुनै सम्बन्ध छैन।',
        },
        {
          q: 'त्यसो भए दुवैलाई किन "UV resin" भनिन्छ?',
          a: 'किनभने उही दुई अक्षरले दुई असम्बन्धित कुरा जनाउँछन्। UV-curable resin मा photoinitiator हुन्छ र प्रकाश पुग्दा कडा हुन्छ — surfboard मर्मत, छिटो patching जस्ता काममा बेचिन्छ। UV-stabilised resin मा weathering ढिलो बनाउने additive हुन्छन्। दुवै एउटै खोजी नतिजामा, कहिलेकाहीँ एउटै supplier catalogue मा देखिन्छन्, र छुट्याउने कुनै संकेत हुँदैन।',
        },
        {
          q: 'Laminate गरेको sheet घाममा छोडे छिटो वा बढी cure हुन्छ?',
          a: 'Photoinitiator प्रणालीमा जस्तो घामले peroxide-catalysed resin मा cure सुरु गर्दैन। घामको तातोले cure अगाडि बढ्ने तरिकामा असर गर्न सक्छ, किनभने सबै unsaturated polyester resin मा cure व्यवहार तापक्रम-संवेदनशील हुन्छ — तर त्यो तापक्रमको प्रभाव हो, UV को होइन।',
        },
        {
          q: '"UV stabilised" वास्तविक प्राविधिक वर्णन हो कि मार्केटिङ शब्द?',
          a: 'यो वास्तविक formulation छनोट जनाउँछ: resin मा मिसाइएका stabiliser — सामान्यतया UV absorber, जसले polymer श्रृंखला भत्काउनुअघि नै ऊर्जा सोसेर फ्याँक्छन्, वा radical scavenger, जसले सुरु भइसकेको क्षय प्रतिक्रिया रोक्छन्। तर यो शब्दले आफैँ कुन stabiliser, कति मात्रामा र कति सेवा-अवधि दिन्छ भन्ने बताउँदैन। ती निर्माताका प्रश्न हुन्।',
        },
        {
          q: 'Stabiliser पूरै sheet भरि हुन्छ कि सतहमा मात्र?',
          a: 'Composites मा सामान्यतया weathering सुरक्षा resin मा मिसाइएका additive, surfacing veil, gelcoat वा तिनको संयोजनबाट आउने भनिन्छ। कुनै खास sheet ले यीमध्ये कसमा भर पर्छ भन्ने उत्पादन-विशेष प्रश्न हो र अनुमान नगरी निर्मातालाई सोध्नुपर्छ।',
        },
        {
          q: 'यस grade को data sheet पठाउन सक्नुहुन्छ?',
          a: 'सक्छौँ। UV Stabilized Sheet Grade Yellow Resin को आपूर्तिकर्ता Technical Data Sheet, SPR-TDS-USY (Rev. 01, September 2026), त्यसको उत्पादन पृष्ठबाट लिंक गरिएको छ र हाम्रो कागजात पुस्तकालयमा पनि छ। यसले grade को viscosity, gel time, styrene content, stabiliser प्रणाली र प्रयोगशालाको weathering नतिजा उल्लेख गर्छ।',
        },
      ],
      sections: [
        {
          heading: 'दुई अक्षर, दुई असम्बन्धित गुण',
          body: [
            'UV-stabilised भनिएको resin र UV-curable भनिएको resin बीच ती दुई अक्षरबाहेक लगभग केही साझा छैन। एउटा वर्षौँको सेवामा सामग्रीले घाम कसरी सहन्छ भन्ने कुरा हो। अर्को त्यो सामग्री पहिले कडा नै कसरी हुन्छ भन्ने कुरा। यी एउटै मापनका बिन्दु पनि होइनन्, एउटै उत्पादनका grade पनि होइनन्।',
            'UV-curable resin मा photoinitiator हुन्छ। प्रकाश पुग्नेबित्तिकै प्रतिक्रिया सुरु हुन्छ — त्यसैले surfboard मर्मत र छिटो patching जस्ता, बत्ती वा सिधा घाम नै trigger हुने काममा बेचिन्छ। UV-stabilised resin सामान्य तरिकाले, कार्यशालाको तापक्रममा peroxide catalyst ले जम्छ। यसको stabiliser package को cure सँग कुनै सम्बन्ध छैन।',
            'यस साइटमा पहिले सेकेन्डमा cure हुने UV-cure प्रणाली भनिएको उत्पादन सूचीबद्ध थियो। त्यो वर्णन वास्तवमा आपूर्ति भइरहेको कुरासँग मिल्दैनथ्यो, र त्यसलाई label सच्याएर राख्नुको सट्टा श्रेणीबाटै हटाइयो। यो गाइड हुनुको एउटा कारण त्यही अन्योल फेरि चुपचाप नफर्कोस् भन्ने पनि हो।',
          ],
        },
        {
          heading: 'Stabiliser package वास्तवमा केका लागि',
          body: [
            'बाहिर रहेका polyester sheet माथि घामको निरन्तर आक्रमण हुन्छ। प्रकाशित साहित्यले यसलाई photo-oxidation भन्छ: पराबैजनी ऊर्जाले सतह र त्यसनजिकका polymer श्रृंखला भत्काउँछ, जसबाट पुरानो sheet मा हरेक fabricator ले चिन्ने रङ परिवर्तन, chalking र सतह खस्रो हुने अवस्था आउँछ।',
            'त्यसलाई ढिलो बनाउन stabiliser मिसाइन्छ। सामान्यतया दुई भूमिकामा वर्णन गरिन्छ: UV absorber, जसले ऊर्जा लिएर polymer श्रृंखलासम्म पुग्नुअघि नै फैलाइदिन्छ; र hindered amine light stabiliser जस्ता radical scavenger, जसले सुरु भइसकेको क्षय-श्रृंखला बीचमै रोक्छन्।',
            'यसले किन्ने कुरा भनेको समय हो, उन्मुक्ति होइन। Stabilised sheet पनि मौसमले खाइन्छ। तर ढिलो खाइन्छ — र वर्षौँ टिक्नुपर्ने छानामा सम्पूर्ण व्यावसायिक तर्क त्यही हो।',
          ],
        },
        {
          heading: 'यो कसरी जम्छ, र कार्यशालामा त्यो किन महत्त्वपूर्ण छ',
          body: [
            'यो अन्य unsaturated polyester sheet grade जस्तै जम्छ: कार्यशालाको तापक्रममा peroxide hardener — प्रायः MEKP — ले catalyse गरेर, र प्रणालीले मागेमा accelerator सहित। Resin stabilised भएकाले प्रक्रियामा केही फेरिँदैन।',
            'यसको एउटा व्यावहारिक अर्थ स्पष्ट भन्नुपर्छ। कसैले बत्तीले कडा हुने resin दिएर त्यसलाई छाना पाता उत्पादनका लागि उपयुक्त भनेको छ भने त्यो फरक वर्गको उत्पादन हो र कुरा सुरुदेखि गर्नुपर्छ। अनि सामान्य sheet grade बाट stabilised grade मा जाँदै हुनुहुन्छ भने, भोलि तपाईंको line ले गर्ने काम होइन — पाँच वर्षपछि sheet ले गर्ने काम फेरिँदै छ।',
            'Gel time र catalyst को व्यवहार grade का गुण हुन् र तापक्रम-संवेदनशील हुन्छन्, त्यसैले ती तपाईंले पाउने grade कै निर्माता कागजात र आफ्नै अवस्थाको परीक्षणका विषय हुन्। यस पृष्ठले तिनका अंक दिँदैन।',
          ],
        },
        {
          heading: 'पूर्व-रङ्गिएको हुनु, र sheet line लाई किन मतलब हुन्छ',
          body: [
            'यो grade सफा (clear) होइन, पहिल्यै पहेँलो रङ मिसाइएर आउँछ। यो देखावटजत्तिकै उत्पादनको निर्णय पनि हो। रङ निर्माताकहाँ नै मिसिँदा कार्यशालामा हरेक batch मा pigment paste कति ध्यान दिएर हालियो भन्नेमा shade भर पर्दैन, र लगातारका उत्पादन एकअर्कासँग बढी भरपर्दो रूपमा मिल्छन्।',
            'बदलामा लचिलोपन घट्छ: कारखानामै रङ मिसिएको grade ले दिने रङ त्यही हो। Sheet साइटमा जडान भइसकेका प्यानलसँग मिल्नुपर्ने हो भने त्यो नयाँ कामका लागि standard रङ छान्नुभन्दा फरक माग हो, र पहिलो उत्पादनपछि होइन, अर्डरअघि उठाउनु उपयुक्त हुन्छ।',
            'Pigment लाई stabiliser package सँग नमिसाउनुहोस्। Pigment भएकै कारण रङीन sheet सफा sheet भन्दा बढी वा कम टिकाउ हुने होइन; weathering प्रतिरोध सामान्यतया additive, veil र surfacing प्रणालीसँग जोडिन्छ, pigment को मात्रासँग होइन।',
          ],
        },
        {
          heading: 'यस grade का लागि हामी के प्रमाणित गर्न सक्छौँ',
          body: [
            'Samrat FRP Traders ले नेपाली बजारका लागि UV Stabilized Sheet Grade Yellow Resin आपूर्ति र आयात गर्छ। आपूर्तिकर्ता Samrat Poly Resins, India — छुट्टै व्यवसाय — हो। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी resin उत्पादन, formulation, परीक्षण वा प्रमाणीकरण गर्दैनौँ, र weathering परीक्षण पनि चलाउँदैनौँ।',
            'यस grade को आपूर्तिकर्ता Technical Data Sheet हाम्रो कागजात पुस्तकालयमा छ र उत्पादन पृष्ठबाट लिंक गरिएको छ; त्यहाँ मुख्य मान जारीकर्ताको नामसहित प्रकाशित छन्। Sheet ले 1,000 घण्टाको xenon-arc weathering परीक्षण (ISO 4892-2) को नतिजा दिन्छ — रङ परिवर्तन ΔE 3–5, 80% gloss कायम, 85% tensile strength कायम। यो प्रयोगशालाको सम्पर्क-नतिजा हो, आयु होइन, र यसबाट बनेको sheet कति वर्ष टिक्छ भन्ने दाबी हामी अझै गर्दैनौँ: त्यो formulation, sheet को बनोट, हावापानी र मर्मत-सम्भारमा भर पर्छ।',
            'तपाईंको निर्णय कुनै प्रकाशित अंकमा भर पर्छ भने सोधपुछकै बेला उठाउनुहोस् — हामी आपूर्तिकर्ताको तर्फबाट अनुमान गर्नुको सट्टा उनीहरूसमक्ष प्रश्न पुर्‍याउँछौँ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------- UV stabilised vs UV curable
  {
    slug: 'uv-stabilised-vs-uv-curable-resin',
    title: 'UV-Stabilised vs UV-Curable Resin: Two Products, One Abbreviation',
    description:
      'How to tell a weathering additive package apart from a light-activated curing mechanism when both are listed as "UV resin" — what each is actually for, where the confusion shows up in enquiries, and the one question that settles it.',
    category: 'Comparison Guide',
    icon: 'compare',
    readingTime: '5 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'UV-Stabilised vs UV-Curable Resin | What Is the Difference',
      ogTitle: 'UV-Stabilised vs UV-Curable Resin',
      ogDescription:
        'One resists sunlight in service. The other hardens under a lamp. How to tell which one a listing is selling.',
      keywords: [
        'UV stabilised vs UV curable',
        'UV cure resin',
        'UV resin meaning',
        'photoinitiator resin',
        'FRP sheet resin Nepal',
      ],
    },
    quickFacts: {
      'UV-stabilised': 'Cures with a peroxide catalyst; the additives resist sunlight damage in service',
      'UV-curable': 'Contains a photoinitiator; hardens when light reaches it',
      'The question that settles it': 'Ask what makes this resin harden',
      'Where it bites': 'Roofing and cladding sheet enquiries, where only one of the two belongs',
    },
    relatedSlugs: [
      'what-is-uv-stabilised-polyester-resin',
      'how-frp-sheets-weather-outdoors',
      'choosing-a-sheet-grade-resin-for-outdoor-exposure',
    ],
    recommendedLinks: [
      product,
      {
        href: '/resources/what-is-uv-stabilised-polyester-resin/',
        label: 'What is UV-stabilised polyester resin?',
        description: 'The fuller explainer, including what the stabiliser package does.',
      },
      {
        href: '/products/mekp-hardener/',
        label: 'View MEKP Hardener',
        description: 'The peroxide catalyst route that sheet grades cure by.',
      },
      enquiryLink,
    ],
    comparisonTable: {
      title: 'UV-stabilised and UV-curable side by side',
      note: 'These are two different product categories, not two grades of one product. Always confirm which one a listing is offering against the manufacturer’s documentation.',
      headers: ['Question', 'UV-stabilised resin', 'UV-curable resin'],
      rows: [
        ['What makes it harden', 'A peroxide catalyst, typically MEKP, at workshop temperature', 'A photoinitiator activated by light'],
        ['What "UV" refers to', 'Resistance to sunlight during the part’s service life', 'The energy that triggers the cure'],
        ['Typical use', 'Outdoor FRP sheet, cladding and panel production', 'Surfboard and quick repair work, patching, touch-up'],
        ['Does sunlight start the reaction', 'No', 'Yes, that is the mechanism'],
        ['Is it right for roofing sheet manufacture', 'This is the category that belongs there', 'Not the product family sold for sheet production'],
        ['What you should ask the seller', 'Which stabiliser system and what the TDS says', 'Nothing — if you wanted a sheet grade, this is the wrong product'],
      ],
    },
    faqs: [
      {
        q: 'How do I tell which one a supplier is actually offering?',
        a: 'Ask one question: what makes this resin harden. If the answer involves a catalyst and workshop temperature, it is a conventionally cured resin and any UV claim is about weathering. If the answer involves a lamp or sunlight, it is a photoinitiator system and belongs to a different category of work.',
      },
      {
        q: 'Are UV-curable resins a bad product?',
        a: 'Not at all. They are a legitimate category with real uses, particularly for repair work where curing on demand is the whole point. The problem is not the product, it is the abbreviation: a buyer looking for outdoor sheet resin and a buyer looking for a light-cured repair resin can type the same search and get the same results.',
      },
      {
        q: 'Why does this matter so much for roofing sheet production?',
        a: 'Because sheet manufacture needs a resin that cures predictably through the thickness of a laminate on a production line, and because the sheet then has to survive years of sunlight. Those are the two requirements, and only one of the two product categories addresses the first one at all.',
      },
      {
        q: 'Did this range ever carry a UV-curable product?',
        a: 'It carried a product described that way. The description did not match what was being supplied, so the product was withdrawn from the range rather than relabelled. Anyone who followed an old link for it is sent to the current product range instead.',
      },
    ],
    sections: [
      {
        heading: 'The confusion is structural, not careless',
        body: [
          'It would be easy to treat this as sloppy labelling by individual sellers, but the problem is built into the vocabulary. "UV" is doing two completely different jobs in composites. In one, it names the thing the product resists. In the other, it names the thing that makes the product work.',
          'Trade listings reinforce it. "UV stabilized", "UV resistant", "UV protected" and "anti-UV" get used as interchangeable marketing adjectives on sheet resin. Separately, genuine light-curing products are sold as "UV cure resin" and "UV curable resin". Search for "UV resin" and both categories come back together, sometimes in the same supplier catalogue, with no metadata separating them.',
          'The result is enquiries where the two sides of the conversation are discussing different product families without either noticing.',
        ],
      },
      {
        heading: 'One question settles it',
        body: [
          'Ask what makes the resin harden. Everything else follows from the answer.',
          'If hardening comes from a peroxide catalyst added to the resin at workshop temperature, you are looking at a conventional unsaturated polyester and any UV claim on the label is about weathering in service. If hardening comes from light reaching a photoinitiator, you are looking at a UV-curable product, and the UV in its name is the trigger rather than the threat.',
          'It is a better question than "is this UV resin?" because it cannot be answered ambiguously. A seller either describes a catalyst or describes a lamp.',
        ],
      },
      {
        heading: 'Where the mix-up actually causes damage',
        body: [
          'The place it bites is outdoor sheet production. A manufacturer looking for a sheet grade wants two things: a resin that cures predictably through a laminate on a production line, and a sheet that survives years of sun. A UV-curable repair resin addresses neither requirement for that job.',
          'It also produces a distinctive kind of enquiry, where a buyer asks whether sunlight during lamination will cure or over-cure the sheet. That question only makes sense if the two meanings have already been merged. The answer is that sun exposure does not trigger a peroxide cure, though heat can influence how the cure proceeds, because cure behaviour is temperature-sensitive in all polyester resins.',
          'This range has its own history with the confusion. A product described as a UV-cure system with a cure time in seconds was listed here, that description did not match what was supplied, and the product was withdrawn rather than quietly relabelled.',
        ],
      },
      {
        heading: 'What to ask for instead',
        body: [
          'If you are buying for outdoor sheet, cladding or panel work, ask for a sheet grade and ask what weathering protection the manufacturer describes for it: stabilisers compounded into the resin, a surfacing veil, a gelcoat, or a combination. Then ask for the document that supports the description.',
          'For UV Stabilized Sheet Grade Yellow Resin specifically, Samrat FRP Traders is the trader, supplier, importer and reseller in Nepal, and Samrat Poly Resins, India is the manufacturer. That grade’s Technical Data Sheet is on file and linked from its product page; we publish the values it states and make no service-life claim. Anything the sheet does not cover, we put to the supplier.',
        ],
      },
    ],
    ne: {
      title: 'UV-Stabilised बनाम UV-Curable Resin: दुई उत्पादन, एउटै संक्षेप',
      description:
        'दुवैलाई "UV resin" भनेर सूचीबद्ध गरिँदा weathering additive र प्रकाशले सक्रिय हुने cure प्रणाली कसरी छुट्याउने — कुन केका लागि हो, सोधपुछमा अन्योल कहाँ देखिन्छ, र निर्णय गर्ने एउटै प्रश्न।',
      seo: {
        title: 'UV-Stabilised बनाम UV-Curable Resin | के फरक छ',
        ogTitle: 'UV-Stabilised बनाम UV-Curable Resin',
        ogDescription:
          'एउटाले सेवामा घाम सहन्छ। अर्को बत्तीले जम्छ। कुन listing ले कुन बेचिरहेको छ, कसरी थाहा पाउने।',
        keywords: [
          'UV stabilised बनाम UV curable',
          'UV cure resin',
          'UV resin अर्थ',
          'FRP sheet resin नेपाल',
        ],
      },
      quickFacts: {
        'UV-stabilised': 'Peroxide catalyst ले जम्छ; additive ले सेवामा घामको क्षति रोक्छ',
        'UV-curable': 'Photoinitiator हुन्छ; प्रकाश पुग्दा कडा हुन्छ',
        'निर्णय गर्ने प्रश्न': 'यो resin कसले कडा बनाउँछ भनी सोध्नुहोस्',
        'कहाँ बिगार्छ': 'छाना र cladding sheet का सोधपुछमा, जहाँ दुईमध्ये एउटा मात्र मिल्छ',
      },
      recommendedLinks: [
        neProduct,
        {
          href: '/resources/what-is-uv-stabilised-polyester-resin/',
          label: 'UV-stabilised polyester resin के हो?',
          description: 'Stabiliser package ले के गर्छ सहित विस्तृत व्याख्या।',
        },
        {
          href: '/products/mekp-hardener/',
          label: 'MEKP Hardener हेर्नुहोस्',
          description: 'Sheet grade जम्ने peroxide catalyst बाटो।',
        },
        neEnquiryLink,
      ],
      comparisonTable: {
        title: 'UV-stabilised र UV-curable आमनेसामने',
        note: 'यी एउटै उत्पादनका दुई grade होइनन्, फरक उत्पादन वर्ग हुन्। कुनै listing ले कुन दिइरहेको छ, निर्माताको कागजातबाट सधैँ पुष्टि गर्नुहोस्।',
        headers: ['प्रश्न', 'UV-stabilised resin', 'UV-curable resin'],
        rows: [
          ['कसले कडा बनाउँछ', 'कार्यशालाको तापक्रममा peroxide catalyst, प्रायः MEKP', 'प्रकाशले सक्रिय हुने photoinitiator'],
          ['"UV" ले के जनाउँछ', 'भागको सेवा-अवधिभर घाम सहने क्षमता', 'Cure सुरु गर्ने ऊर्जा'],
          ['सामान्य प्रयोग', 'बाहिरी FRP sheet, cladding र प्यानल उत्पादन', 'Surfboard तथा छिटो मर्मत, patching, touch-up'],
          ['घामले प्रतिक्रिया सुरु गर्छ?', 'गर्दैन', 'गर्छ — त्यही नै यसको प्रणाली हो'],
          ['छाना पाता उत्पादनका लागि ठीक?', 'यही वर्ग त्यहाँ मिल्छ', 'Sheet उत्पादनका लागि बेचिने परिवार होइन'],
          ['बिक्रेतालाई के सोध्ने', 'कुन stabiliser प्रणाली, र TDS मा के लेखिएको छ', 'केही होइन — sheet grade चाहिएको हो भने यो गलत उत्पादन हो'],
        ],
      },
      faqs: [
        {
          q: 'आपूर्तिकर्ताले वास्तवमा कुन दिइरहेको छ, कसरी थाहा पाउने?',
          a: 'एउटै प्रश्न सोध्नुहोस्: यो resin कसले कडा बनाउँछ। उत्तरमा catalyst र कार्यशालाको तापक्रम आयो भने त्यो परम्परागत रूपमा जम्ने resin हो र UV को दाबी weathering बारे हो। उत्तरमा बत्ती वा घाम आयो भने त्यो photoinitiator प्रणाली हो र फरक कामको वर्गमा पर्छ।',
        },
        {
          q: 'के UV-curable resin नराम्रो उत्पादन हो?',
          a: 'पटक्कै होइन। यो वास्तविक प्रयोग भएको वैध वर्ग हो, विशेष गरी चाहेको बेला cure गर्नुपर्ने मर्मत कामका लागि। समस्या उत्पादनको होइन, संक्षेपको हो: बाहिरी sheet resin खोज्ने र प्रकाशले जम्ने मर्मत resin खोज्ने दुवैले उही शब्द टाइप गर्दा उही नतिजा पाउँछन्।',
        },
        {
          q: 'छाना पाता उत्पादनमा यो किन यति महत्त्वपूर्ण छ?',
          a: 'किनभने sheet उत्पादनलाई उत्पादन लाइनमा laminate को मोटाइभरि भरपर्दो रूपमा जम्ने resin चाहिन्छ, अनि त्यो sheet ले वर्षौँको घाम पनि सहनुपर्छ। दुई माग यिनै हुन्, र दुई उत्पादन वर्गमध्ये एउटाले मात्र पहिलो माग सम्बोधन गर्छ।',
        },
        {
          q: 'के यस श्रेणीमा कहिल्यै UV-curable उत्पादन थियो?',
          a: 'त्यसरी वर्णन गरिएको उत्पादन थियो। वर्णन आपूर्ति भइरहेको कुरासँग मिल्दैनथ्यो, त्यसैले label फेर्नुको सट्टा उत्पादन नै श्रेणीबाट हटाइयो। पुरानो लिंक पछ्याउनेलाई हालको उत्पादन श्रेणीमा पुर्‍याइन्छ।',
        },
      ],
      sections: [
        {
          heading: 'यो अन्योल संरचनागत हो, लापरबाहीको होइन',
          body: [
            'यसलाई बिक्रेताहरूको हेलचेक्र्याइँ भन्न सजिलो होला, तर समस्या शब्दावलीमै गाडिएको छ। Composites मा "UV" ले दुई बिल्कुलै फरक काम गरिरहेको छ। एउटामा यसले उत्पादनले सहने कुरा जनाउँछ। अर्कोमा उत्पादनलाई काम गराउने कुरा।',
            'व्यापारिक listing हरूले यसलाई बलियो बनाउँछन्। Sheet resin मा "UV stabilized", "UV resistant", "UV protected" र "anti-UV" एकअर्काको ठाउँमा प्रयोग हुन्छन्। छुट्टै, साँच्चै प्रकाशले जम्ने उत्पादन "UV cure resin" र "UV curable resin" भनेर बेचिन्छन्। "UV resin" खोज्दा दुवै वर्ग सँगै आउँछन् — कहिलेकाहीँ एउटै supplier catalogue मै — र छुट्याउने कुनै संकेत हुँदैन।',
            'नतिजा यस्तो सोधपुछ हो जहाँ दुवै पक्ष फरक उत्पादन परिवारबारे कुरा गरिरहेका हुन्छन्, र कसैलाई थाहै हुँदैन।',
          ],
        },
        {
          heading: 'एउटै प्रश्नले टुंग्याउँछ',
          body: [
            'Resin लाई कसले कडा बनाउँछ भनी सोध्नुहोस्। बाँकी सबै त्यही उत्तरबाट आउँछ।',
            'कार्यशालाको तापक्रममा resin मा हालिने peroxide catalyst ले कडा बनाउँछ भने तपाईंसामु परम्परागत unsaturated polyester छ, र label मा भएको UV को दाबी सेवाका क्रममा weathering बारे हो। Photoinitiator सम्म प्रकाश पुगेर कडा हुन्छ भने त्यो UV-curable उत्पादन हो, र त्यसको नाममा भएको UV खतरा होइन, trigger हो।',
            '"यो UV resin हो?" भन्दा यो राम्रो प्रश्न हो, किनभने यसको अस्पष्ट उत्तर दिन सकिँदैन। बिक्रेताले या त catalyst बताउँछ, या बत्ती।',
          ],
        },
        {
          heading: 'गडबडीले वास्तवमा कहाँ क्षति गर्छ',
          body: [
            'यसले सबैभन्दा बढी बाहिरी sheet उत्पादनमा बिगार्छ। Sheet grade खोज्ने उत्पादकलाई दुई कुरा चाहिन्छ: उत्पादन लाइनमा laminate भरि भरपर्दो रूपमा जम्ने resin, र वर्षौँको घाम सहने sheet। UV-curable मर्मत resin ले त्यस कामका लागि यीमध्ये कुनै पनि माग पूरा गर्दैन।',
            'यसले एक किसिमको विशिष्ट सोधपुछ पनि जन्माउँछ, जहाँ खरिदकर्ता lamination का बेला घामले sheet cure वा over-cure गर्छ कि भनी सोध्छन्। त्यो प्रश्न दुई अर्थ मिसिइसकेपछि मात्र अर्थपूर्ण हुन्छ। उत्तर यो हो: घामले peroxide cure सुरु गर्दैन, यद्यपि तातोले cure अगाडि बढ्ने तरिकामा असर गर्न सक्छ, किनभने सबै polyester resin मा cure व्यवहार तापक्रम-संवेदनशील हुन्छ।',
            'यस श्रेणीको आफ्नै इतिहास पनि यही अन्योलसँग जोडिएको छ। सेकेन्डमा cure हुने UV-cure प्रणाली भनिएको उत्पादन यहाँ सूचीबद्ध थियो, त्यो वर्णन आपूर्ति भइरहेको कुरासँग मिल्दैनथ्यो, र त्यसलाई चुपचाप label फेर्नुको सट्टा हटाइयो।',
          ],
        },
        {
          heading: 'बरु के माग्ने',
          body: [
            'बाहिरी sheet, cladding वा प्यानल कामका लागि किन्दै हुनुहुन्छ भने sheet grade माग्नुहोस् र निर्माताले त्यसका लागि कस्तो weathering सुरक्षा वर्णन गरेका छन् सोध्नुहोस्: resin मा मिसाइएका stabiliser, surfacing veil, gelcoat, वा तिनको संयोजन। त्यसपछि त्यो वर्णनलाई समर्थन गर्ने कागजात माग्नुहोस्।',
            'विशेष गरी UV Stabilized Sheet Grade Yellow Resin का लागि: नेपालमा Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो, र निर्माता Samrat Poly Resins, India हो। त्यस grade को Technical Data Sheet फाइलमा छ र उत्पादन पृष्ठबाट लिंक गरिएको छ; त्यसले उल्लेख गरेका मान हामी प्रकाशित गर्छौँ, तर सेवा-अवधिको दाबी गर्दैनौँ। Sheet ले नसमेटेको कुरा हामी आपूर्तिकर्तासमक्ष पुर्‍याउँछौँ।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------- weathering guide
  {
    slug: 'how-frp-sheets-weather-outdoors',
    title: 'How FRP Sheets Weather Outdoors: Yellowing, Chalking and Fibre Bloom',
    description:
      'What actually happens to an FRP roofing or cladding sheet over years of sun and monsoon — the degradation the industry describes, which of it is reversible, and the mitigations built into a sheet rather than applied afterwards.',
    category: 'Technical Guide',
    icon: 'roof',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'How FRP Sheets Weather Outdoors | Yellowing and Fibre Bloom',
      ogTitle: 'How FRP Sheets Weather: Yellowing, Chalking, Fibre Bloom',
      ogDescription:
        'What years of sun do to an FRP sheet, what cleaning can and cannot recover, and how weathering protection is built in.',
      keywords: [
        'FRP sheet yellowing',
        'FRP sheet chalking',
        'fibre bloom FRP',
        'FRP roofing sheet life',
        'surfacing veil FRP',
      ],
    },
    quickFacts: {
      'What degrades first': 'The resin at the surface, not the glass reinforcement',
      'Why fibres appear': 'Resin erodes faster than glass, leaving the fibres standing proud',
      'What cleaning recovers': 'Dirt and grime — not eroded resin',
      'Where protection comes from': 'Stabilisers in the resin, a surfacing veil, a gelcoat, or a combination',
    },
    relatedSlugs: [
      'what-is-uv-stabilised-polyester-resin',
      'choosing-a-sheet-grade-resin-for-outdoor-exposure',
      'uv-stabilised-vs-uv-curable-resin',
    ],
    recommendedLinks: [
      product,
      sheetGrade,
      {
        href: '/products/roof-light-resin/',
        label: 'View Roof Light Sheet Resin',
        description: 'The translucent roof-light route, where light transmission is the point.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'How many years will an FRP sheet last on a roof?',
        a: 'We do not publish a figure, and a figure offered without context is worth very little. Service life depends on the resin formulation, the stabiliser and surfacing system, the sheet construction, the severity of the climate and how the roof is maintained. Sources do publish figures; what they cannot do is publish one that covers your roof.',
      },
      {
        q: 'Why do glass fibres start showing through the surface?',
        a: 'Because the resin and the glass do not erode at the same rate. Under sunlight and weather the resin at the surface breaks down faster, and as it goes the fibres beneath it become exposed and stand proud. The industry calls this fibre bloom or fibre prominence, and it is described as a weathering mechanism rather than a manufacturing defect.',
      },
      {
        q: 'Can chalking or fibre bloom be cleaned off and reversed?',
        a: 'Cleaning removes dirt and grime that has collected in a roughened surface, and that can recover some light transmission. It does not put back resin that has eroded. Once chalking and fibre bloom have progressed, industry sources generally describe the surface damage as irreversible short of recoating or replacement.',
      },
      {
        q: 'Does a hot, high-sun, monsoon climate make it worse?',
        a: 'Intense ultraviolet exposure, heat and humidity are all described in the weathering literature as accelerating factors for polymer degradation. That is a general statement about the mechanisms rather than a lifespan figure for any particular region, and we are not in a position to publish one for Nepal.',
      },
      {
        q: 'Do coloured sheets fade the same way clear ones yellow?',
        a: 'Both use the same underlying resin chemistry and both are subject to ultraviolet degradation, though it shows up differently: a clear sheet yellows and hazes, a pigmented one shifts and dulls in colour. Resistance is generally attributed to the stabiliser, veil and surfacing system rather than to the pigment itself.',
      },
      {
        q: 'Is yellowing always a weathering problem?',
        a: 'Not always. Some sources note that discoloration can also be introduced during manufacture, through cure problems or an unbalanced catalyst and accelerator system. A sheet that is yellow when new is a different conversation from a sheet that yellows after years on a roof.',
      },
    ],
    sections: [
      {
        heading: 'What sunlight actually does to a sheet',
        body: [
          'The mechanism described in the weathering literature is photo-oxidation. Ultraviolet energy breaks polymer chains at and near the surface of the resin, and the breakdown products are what produce the visible discoloration. This is a surface process, working inward slowly, rather than a bulk failure of the laminate.',
          'Three visible consequences follow from it. The sheet discolours, generally yellowing in a clear or translucent sheet. The binder at the surface breaks down into a loose powder, which the industry calls chalking. And the surface roughens and micro-cracks, a pattern described as crazing or surface erosion.',
          'None of these is a structural failure on the day it appears. All of them are the surface telling you how far the process has gone.',
        ],
      },
      {
        heading: 'Fibre bloom and why it is not a defect',
        body: [
          'The most commonly reported complaint after a few years is that glass fibres have started to show through the surface. The explanation is straightforward: resin and glass do not erode at the same rate. As the resin at the exposed face wears away, the reinforcement that was below it is uncovered and begins to stand proud.',
          'This is a weathering outcome rather than a manufacturing fault, though a thin or poorly protected surface reaches it sooner. It matters because it is self-accelerating: a rough, fibrous surface holds dirt, and the dirtier and rougher the surface gets, the less light passes through it and the more it is worked on by the weather.',
          'Industry sources generally describe the state as effectively irreversible. Cleaning helps with what has collected on the surface. It does not restore resin that has gone.',
        ],
      },
      {
        heading: 'Light transmission, and what a wash recovers',
        body: [
          'For a translucent roofing or skylight sheet, the property that matters commercially is how much light still comes through. That falls for two distinct reasons, and they are worth separating because only one responds to maintenance.',
          'The first is accumulated dirt and grime trapped in a roughened surface. Cleaning addresses that, and the improvement after a wash can be real. The second is the roughening and chalking itself, which scatters light regardless of how clean the sheet is. That part does not come back.',
          'The practical reading for a building owner: regular cleaning is worth doing and will keep a sheet performing better for longer, but it postpones rather than prevents the eventual need to replace.',
        ],
      },
      {
        heading: 'How weathering protection is built into a sheet',
        body: [
          'Three mitigations appear across the technical literature, and a given sheet may use one, two or all three.',
          'Stabilisers compounded into the resin are the first. They are described either as ultraviolet absorbers, which take up the energy and dissipate it before it reaches the polymer chains, or as radical scavengers such as hindered amine light stabilisers, which interrupt the degradation reaction once it has started.',
          'A surfacing veil is the second. A glass or synthetic veil laid at the surface creates a resin-rich layer that smooths the finish and physically delays reinforcement fibres from blooming through as the surface erodes. Synthetic veils are generally described as resin-agnostic and suited to ultraviolet-exposed work, while glass veils depend on resin compatibility.',
          'A gelcoat is the third: a chemically bonded, resin-rich surface layer, sometimes carrying its own stabiliser package, acting as a thicker sacrificial face ahead of the structural laminate.',
        ],
      },
      {
        heading: 'What we can and cannot tell you',
        body: [
          'Samrat FRP Traders is a trader, supplier, importer and reseller of FRP materials in Nepal. We supply resin manufactured by Samrat Poly Resins, India. We do not run weathering trials, we do not manufacture sheet, and we do not issue service-life predictions.',
          'For UV Stabilized Sheet Grade Yellow Resin the supplier Technical Data Sheet names the stabiliser system — a benzotriazole-type UV absorber with a HALS light stabiliser — but not its loading, and this cluster makes no lifespan claim. Whether a specific sheet relies on stabilisers in the resin, a veil, a gelcoat or a combination is a product-specific question for the manufacturer, and it is a good question to put to them before a large order.',
        ],
      },
    ],
    ne: {
      title: 'FRP Sheet बाहिर कसरी बिग्रन्छ: पहेँलिनु, Chalking र Fibre Bloom',
      description:
        'वर्षौँको घाम र मनसुनपछि FRP छाना वा cladding sheet मा वास्तवमा के हुन्छ — उद्योगले वर्णन गर्ने क्षय, त्यसमध्ये के फर्काउन सकिन्छ, र पछि लगाइने होइन, sheet भित्रै राखिने सुरक्षा उपाय।',
      seo: {
        title: 'FRP Sheet बाहिर कसरी बिग्रन्छ | पहेँलिनु र Fibre Bloom',
        ogTitle: 'FRP Sheet को weathering: पहेँलिनु, Chalking, Fibre Bloom',
        ogDescription:
          'वर्षौँको घामले FRP sheet मा के गर्छ, सफा गर्दा के फर्किन्छ र के फर्किँदैन, र weathering सुरक्षा कसरी भित्रै राखिन्छ।',
        keywords: [
          'FRP sheet पहेँलिनु',
          'FRP sheet chalking',
          'fibre bloom FRP',
          'FRP छाना पाता आयु',
        ],
      },
      quickFacts: {
        'पहिले के बिग्रन्छ': 'सतहको resin — glass reinforcement होइन',
        'Fibre किन देखिन्छ': 'Resin glass भन्दा छिटो खिइन्छ, त्यसैले fibre उठेर देखिन्छन्',
        'सफा गर्दा के फर्किन्छ': 'धुलो र मैला — खिइएको resin होइन',
        'सुरक्षा कहाँबाट आउँछ': 'Resin मा stabiliser, surfacing veil, gelcoat वा तिनको संयोजन',
      },
      recommendedLinks: [
        neProduct,
        neSheetGrade,
        {
          href: '/products/roof-light-resin/',
          label: 'Roof Light Sheet Resin हेर्नुहोस्',
          description: 'उज्यालो छिर्नु नै मुख्य भएको पारदर्शी roof-light बाटो।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'FRP sheet छानामा कति वर्ष टिक्छ?',
          a: 'हामी कुनै अंक प्रकाशित गर्दैनौँ, र सन्दर्भबिना दिइएको अंकको मूल्य थोरै हुन्छ। सेवा-अवधि resin को formulation, stabiliser र surfacing प्रणाली, sheet को बनोट, हावापानीको कठोरता र छानाको मर्मत-सम्भारमा भर पर्छ। स्रोतहरूले अंक प्रकाशित गर्छन्; तर तपाईंकै छाना समेट्ने अंक कसैले दिन सक्दैन।',
        },
        {
          q: 'Glass fibre सतहमा किन देखिन थाल्छन्?',
          a: 'किनभने resin र glass एउटै दरमा खिइँदैनन्। घाम र मौसमले सतहको resin छिटो भत्किन्छ, र त्यो जाँदै जाँदा मुनिका fibre खुल्दै उठेर देखिन्छन्। उद्योगले यसलाई fibre bloom वा fibre prominence भन्छ, र यसलाई उत्पादनको दोष होइन, weathering को प्रक्रिया मान्छ।',
        },
        {
          q: 'Chalking वा fibre bloom सफा गरेर हटाउन सकिन्छ?',
          a: 'सफा गर्दा खस्रो सतहमा जमेको धुलो र मैला हट्छ, र त्यसले केही उज्यालो फिर्ता ल्याउन सक्छ। तर खिइएको resin फर्किँदैन। Chalking र fibre bloom बढिसकेपछि उद्योगका स्रोतहरूले त्यो सतह क्षतिलाई पुनः coating वा प्रतिस्थापनबिना नफर्कने मान्छन्।',
        },
        {
          q: 'तातो, तीव्र घाम र मनसुन भएको हावापानीले झन् बिगार्छ?',
          a: 'तीव्र पराबैजनी सम्पर्क, तातो र आर्द्रता — सबैलाई weathering साहित्यले polymer क्षय छिटो बनाउने कारक भन्छ। यो प्रक्रियाबारेको सामान्य भनाइ हो, कुनै क्षेत्रविशेषको आयु-अंक होइन, र नेपालका लागि त्यस्तो अंक प्रकाशित गर्ने ठाउँमा हामी छैनौँ।',
        },
        {
          q: 'रङीन sheet पनि सफा sheet पहेँलिए झैँ खुइलिन्छ?',
          a: 'दुवैको आधारभूत resin रसायन उही हो र दुवै पराबैजनी क्षयको अधीनमा हुन्छन्, तर देखिने तरिका फरक हुन्छ: सफा sheet पहेँलिन्छ र धमिलो हुन्छ, रङीन sheet को रङ सर्छ र मलिन हुन्छ। प्रतिरोध सामान्यतया stabiliser, veil र surfacing प्रणालीसँग जोडिन्छ, pigment सँग होइन।',
        },
        {
          q: 'पहेँलिनु सधैँ weathering कै समस्या हो?',
          a: 'सधैँ होइन। केही स्रोतले उत्पादनकै क्रममा — cure को समस्या वा catalyst तथा accelerator को असन्तुलनबाट — रङ परिवर्तन आउन सक्ने बताउँछन्। नयाँ हुँदै पहेँलो भएको sheet र वर्षौँ छानामा रहेर पहेँलिएको sheet फरक विषय हुन्।',
        },
      ],
      sections: [
        {
          heading: 'घामले sheet मा वास्तवमा के गर्छ',
          body: [
            'Weathering साहित्यले वर्णन गर्ने प्रक्रिया photo-oxidation हो। पराबैजनी ऊर्जाले resin को सतह र त्यसनजिकका polymer श्रृंखला भत्काउँछ, र त्यही भत्किएका उपजले देखिने रङ परिवर्तन ल्याउँछन्। यो laminate को समग्र असफलता होइन, बिस्तारै भित्रतिर बढ्ने सतहको प्रक्रिया हो।',
            'यसबाट तीन देखिने परिणाम आउँछन्। Sheet को रङ बदलिन्छ — सफा वा पारदर्शी sheet सामान्यतया पहेँलिन्छ। सतहको binder भत्किएर धुलोजस्तो हुन्छ, जसलाई उद्योगले chalking भन्छ। अनि सतह खस्रो हुन्छ र सूक्ष्म चिरा पर्छन्, जसलाई crazing वा सतह क्षय भनिन्छ।',
            'देखिएकै दिन यीमध्ये कुनै पनि संरचनात्मक असफलता होइन। यी सबै प्रक्रिया कति अगाडि बढ्यो भन्ने सतहले दिएको संकेत हुन्।',
          ],
        },
        {
          heading: 'Fibre bloom, र यो किन दोष होइन',
          body: [
            'केही वर्षपछि सबैभन्दा धेरै आउने गुनासो भनेको सतहमा glass fibre देखिन थाल्नु हो। कारण सरल छ: resin र glass एउटै दरमा खिइँदैनन्। खुला अनुहारको resin खिइँदै जाँदा मुनिको reinforcement खुल्छ र उठेर देखिन थाल्छ।',
            'यो उत्पादनको दोष होइन, weathering को परिणाम हो — यद्यपि पातलो वा कमजोर सुरक्षित सतह यहाँसम्म चाँडै पुग्छ। यो महत्त्वपूर्ण छ किनभने यो आफैँ बढ्दै जान्छ: खस्रो, fibre देखिने सतहले धुलो अड्काउँछ, र सतह जति मैलो र खस्रो हुन्छ, उज्यालो त्यति कम छिर्छ र मौसमले त्यति बढी काम गर्छ।',
            'उद्योगका स्रोतहरूले यो अवस्थालाई व्यवहारमा नफर्कने मान्छन्। सफा गर्दा सतहमा जमेको कुरामा सहयोग पुग्छ। गइसकेको resin भने फर्किँदैन।',
          ],
        },
        {
          heading: 'उज्यालो छिर्ने क्षमता, र धुने काम ले के फर्काउँछ',
          body: [
            'पारदर्शी छाना वा skylight sheet का लागि व्यावसायिक रूपमा महत्त्वपूर्ण गुण भनेको अझै कति उज्यालो छिर्छ भन्ने हो। यो दुई फरक कारणले घट्छ, र दुई कारण छुट्याउनु जरुरी छ किनभने मर्मतले एउटालाई मात्र सम्बोधन गर्छ।',
            'पहिलो, खस्रो सतहमा जमेको धुलो र मैला। सफा गर्दा त्यो हट्छ, र धोएपछिको सुधार वास्तविक हुन सक्छ। दोस्रो, सतहकै खस्रोपन र chalking, जसले sheet जति सफा भए पनि उज्यालो छरिदिन्छ। त्यो भाग फर्किँदैन।',
            'भवन धनीका लागि व्यावहारिक अर्थ: नियमित सफाइ गर्नु सार्थक छ र sheet लाई लामो समय राम्रो राख्छ, तर यसले प्रतिस्थापनको आवश्यकता रोक्दैन — पर सार्छ मात्र।',
          ],
        },
        {
          heading: 'Sheet भित्रै weathering सुरक्षा कसरी राखिन्छ',
          body: [
            'प्राविधिक साहित्यमा तीन उपाय देखिन्छन्, र कुनै sheet ले तीमध्ये एक, दुई वा तीनै प्रयोग गरेको हुन सक्छ।',
            'पहिलो, resin मै मिसाइएका stabiliser। यिनलाई या त पराबैजनी absorber भनिन्छ — जसले ऊर्जा लिएर polymer श्रृंखलासम्म पुग्नुअघि नै फैलाइदिन्छ — या hindered amine light stabiliser जस्ता radical scavenger, जसले सुरु भइसकेको क्षय प्रतिक्रिया रोक्छन्।',
            'दोस्रो, surfacing veil। सतहमा राखिएको glass वा synthetic veil ले resin-rich तह बनाउँछ, जसले फिनिस चिल्लो पार्छ र सतह खिइँदै जाँदा reinforcement fibre बाहिर निस्कन ढिलो बनाउँछ। Synthetic veil सामान्यतया resin-निरपेक्ष र पराबैजनी सम्पर्क भएका कामका लागि उपयुक्त भनिन्छ, भने glass veil resin सँगको अनुकूलतामा भर पर्छ।',
            'तेस्रो, gelcoat: रासायनिक रूपमा जोडिएको resin-rich सतह तह, कहिलेकाहीँ आफ्नै stabiliser package सहित, जुन संरचनात्मक laminate अगाडि बाक्लो बलिदानी अनुहारका रूपमा काम गर्छ।',
          ],
        },
        {
          heading: 'हामी के भन्न सक्छौँ, के सक्दैनौँ',
          body: [
            'Samrat FRP Traders नेपालमा FRP सामग्रीको व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो। हामी Samrat Poly Resins, India ले उत्पादन गरेको resin आपूर्ति गर्छौं। हामी weathering परीक्षण चलाउँदैनौँ, sheet उत्पादन गर्दैनौँ, र सेवा-अवधिको अनुमान जारी गर्दैनौँ।',
            'UV Stabilized Sheet Grade Yellow Resin को आपूर्तिकर्ता Technical Data Sheet ले stabiliser प्रणाली — benzotriazole प्रकारको UV absorber र HALS light stabiliser — उल्लेख गर्छ, तर त्यसको मात्रा उल्लेख गर्दैन, र यस cluster मा आयुको दाबी छैन। कुनै खास sheet resin का stabiliser, veil, gelcoat वा तिनको संयोजनमा भर पर्छ भन्ने उत्पादन-विशेष प्रश्न निर्माताको हो, र ठूलो अर्डरअघि उनीहरूलाई सोध्न लायक राम्रो प्रश्न पनि हो।',
          ],
        },
      ],
    },
  },

  // ------------------------------------------- sheet resin selection
  {
    slug: 'choosing-a-sheet-grade-resin-for-outdoor-exposure',
    title: 'Standard or UV-Stabilised? Choosing a Sheet Grade for Outdoor Exposure',
    description:
      'A selection guide for sheet manufacturers in Nepal: how the sheet grades in this range differ, which questions decide between a standard and a UV-stabilised grade, and what to settle with the supplier before a production run.',
    category: 'Selection Guide',
    icon: 'checklist',
    readingTime: '6 min read',
    publishDate: '2026-09-12',
    seo: {
      title: 'Standard or UV-Stabilised Sheet Grade Resin | Nepal',
      ogTitle: 'Standard or UV-Stabilised Sheet Grade Resin?',
      ogDescription:
        'How the sheet grades differ, what decides between them, and what to confirm before a production run. From Samrat FRP Traders, Nepal.',
      keywords: [
        'FRP roofing sheet resin',
        'sheet grade resin selection',
        'FRP cladding resin Nepal',
        'roof light sheet resin',
        'UV stabilized sheet resin Nepal',
      ],
    },
    quickFacts: {
      'First question': 'Is the sheet translucent for light, or opaque for cover',
      'Second question': 'How much direct sun will it take, and for how long',
      'Pre-pigmented grades': 'Colour is mixed at the manufacturer rather than dosed on your line',
      'Commercial position': commercialPosition,
    },
    relatedSlugs: [
      'what-is-uv-stabilised-polyester-resin',
      'how-frp-sheets-weather-outdoors',
      'uv-stabilised-vs-uv-curable-resin',
    ],
    recommendedLinks: [
      product,
      sheetGrade,
      {
        href: '/resources/frp-roofing-sheet-resin-selection-guide/',
        label: 'FRP roofing sheet resin selection guide',
        description: 'The shorter selection guide covering the roof-light and standard sheet routes.',
      },
      enquiryLink,
    ],
    faqs: [
      {
        q: 'What is the difference between the standard and the UV-stabilised sheet grade?',
        a: 'Both are pre-pigmented yellow sheet grades that cure with a peroxide catalyst. The supplier product artwork describes the UV-stabilised one as carrying a stabiliser package intended for outdoor exposure. For sheets in direct sun for years that is the distinction to ask about; for indoor or sheltered panels the standard sheet grade may be sufficient.',
      },
      {
        q: 'Do I still need to add pigment to a pre-pigmented grade?',
        a: 'No. The colour is part of the supplied resin. Fabricators choose a factory-pigmented grade specifically to avoid the batch-to-batch colour variation that comes from dosing pigment paste by hand on the line.',
      },
      {
        q: 'Which grade do I use for translucent roof-light sheets?',
        a: 'A translucent sheet is a different requirement from an opaque coloured one, because light transmission is the property being sold. Roof Light Sheet Resin is the grade in this range positioned for that work, and it has its own application guide.',
      },
      {
        q: 'Should I be asking about veils and gelcoat as well as resin?',
        a: 'If the sheet is going outdoors, yes. Weathering protection in composites is described as coming from stabilisers in the resin, from a surfacing veil, from a gelcoat, or from a combination. Choosing a stabilised resin and ignoring the surface construction addresses only part of the problem.',
      },
      {
        q: 'Can you quote a price per kilogram for sheet grade resin?',
        a: 'Not on a web page. Price depends on the grade, the quantity, the packaging and the timing, and a published number without those would be misleading rather than helpful. Send the requirement and we will quote against it.',
      },
    ],
    sections: [
      {
        heading: 'Start with what the sheet is for',
        body: [
          'Sheet resin selection divides on a single early question: is this sheet there to let light through, or to cover and colour. A translucent roof-light sheet is selling light transmission, and everything about its specification follows from protecting that property over time. An opaque coloured sheet is selling cover, appearance and weather resistance.',
          'That question decides which family of grades you are choosing between before any comparison of individual products. Getting it settled first avoids most of the confusion that follows.',
        ],
      },
      {
        heading: 'Then ask how much sun it will take',
        body: [
          'The second question is exposure. A panel inside a shed, under a canopy, or on a wall that never sees direct sun is in a different situation from a roofing sheet in full sun through every dry season for years.',
          'That is the line between a standard pre-pigmented sheet grade and a UV-stabilised one. The stabilised grade is not a better product in general terms. It is a product carrying an additive package aimed at a problem the sheltered panel does not have, so on a sheltered panel the extra cost usually earns nothing, and on a roof it is the whole point.',
          'Be specific about the exposure when you enquire. "Outdoor" covers a wall panel in partial shade and a south-facing roof, and they are not the same job.',
        ],
      },
      {
        heading: 'Why a pre-pigmented grade is a production decision',
        body: [
          'Both yellow sheet grades in this range are supplied already pigmented rather than clear. On a sheet line that is a consistency decision more than an aesthetic one. When the colour is mixed at the manufacturer, the shade of a run does not depend on how carefully pigment paste was dosed into each batch, and successive runs match each other more reliably.',
          'What you give up is choice of shade, and the ability to adjust colour on the line. If your sheets have to match panels already installed somewhere, that is a harder request than picking a standard colour for a new job, and it needs raising before the order rather than after the first run comes off.',
          'Pigment and weathering protection are separate matters. A coloured sheet is not durable because it is coloured; resistance is generally attributed to the stabiliser, veil and surfacing system.',
        ],
      },
      {
        heading: 'Do not stop at the resin',
        body: [
          'For outdoor sheet, the resin is one part of the weathering answer. The published literature describes protection as coming from stabilisers compounded into the resin, from a surfacing veil that keeps a resin-rich layer at the face and delays fibre bloom, from a gelcoat acting as a thicker sacrificial surface, or from some combination of those.',
          'That means a sensible enquiry covers the sheet construction, not only the drum. Ask the manufacturer which of those mechanisms the grade relies on, and whether a veil is expected as part of the construction it was designed for.',
          'It also means a sheet that dulls after several years is not automatically evidence of a bad batch. It may be evidence that the construction chosen was not aimed at that exposure.',
        ],
      },
      {
        heading: 'What to settle before a production run',
        body: [
          'Before committing a production quantity: confirm the grade and what the manufacturer publishes for it; confirm the catalyst system and the gel-time behaviour you should expect, and run a trial under your own workshop conditions rather than relying on figures from another site or season; confirm the colour arrangement and batch grouping for the quantity you need; and obtain the safety documentation your workshop needs in order to write its handling procedure.',
          'Samrat FRP Traders supplies and imports sheet grades for Nepal from Samrat Poly Resins, India. We are a trader, supplier, importer and reseller. We do not manufacture resin or sheet, and we publish no price, stock position or delivery commitment on this site.',
          'For UV Stabilized Sheet Grade Yellow Resin the supplier Technical Data Sheet is on file, and the values it states are published on its product page with the issuer named. Anything it does not cover, ask at the enquiry stage and we will put the question to the supplier.',
        ],
      },
    ],
    ne: {
      title: 'सामान्य कि UV-Stabilised? बाहिरी प्रयोगका लागि Sheet Grade छनोट',
      description:
        'नेपालका sheet उत्पादकका लागि छनोट गाइड: यस श्रेणीका sheet grade कसरी फरक छन्, सामान्य र UV-stabilised grade बीच कुन प्रश्नले निर्णय गर्छ, र उत्पादन सुरु गर्नुअघि आपूर्तिकर्तासँग के टुंग्याउने।',
      seo: {
        title: 'सामान्य कि UV-Stabilised Sheet Grade Resin | नेपाल',
        ogTitle: 'सामान्य कि UV-Stabilised Sheet Grade Resin?',
        ogDescription:
          'Sheet grade कसरी फरक छन्, केले निर्णय गर्छ, र उत्पादन अघि के पुष्टि गर्ने। Samrat FRP Traders, नेपाल।',
        keywords: [
          'FRP छाना पाता resin',
          'sheet grade resin छनोट',
          'FRP cladding resin नेपाल',
          'roof light sheet resin',
        ],
      },
      quickFacts: {
        'पहिलो प्रश्न': 'Sheet उज्यालोका लागि पारदर्शी हो, कि छोप्नका लागि अपारदर्शी',
        'दोस्रो प्रश्न': 'कति सिधा घाम खान्छ, र कति लामो समय',
        'पूर्व-रङ्गिएका grade': 'रङ तपाईंको line मा होइन, निर्माताकहाँ मिसिन्छ',
        'व्यावसायिक भूमिका': neCommercialPosition,
      },
      recommendedLinks: [
        neProduct,
        neSheetGrade,
        {
          href: '/resources/frp-roofing-sheet-resin-selection-guide/',
          label: 'FRP छाना पाता resin छनोट गाइड',
          description: 'Roof-light र सामान्य sheet बाटो समेट्ने छोटो छनोट गाइड।',
        },
        neEnquiryLink,
      ],
      faqs: [
        {
          q: 'सामान्य र UV-stabilised sheet grade बीच के फरक छ?',
          a: 'दुवै पूर्व-रङ्गिएका पहेँलो sheet grade हुन् र peroxide catalyst ले जम्छन्। आपूर्तिकर्ताको उत्पादन artwork ले UV-stabilised लाई बाहिरी सम्पर्कका लागि stabiliser package भएको भन्छन्। वर्षौँ सिधा घाममा रहने sheet का लागि यही फरक सोध्नुपर्छ; भित्री वा छोपिएका प्यानलका लागि सामान्य sheet grade पुग्न सक्छ।',
        },
        {
          q: 'पूर्व-रङ्गिएको grade मा पनि pigment हाल्नुपर्छ?',
          a: 'पर्दैन। रङ आपूर्ति हुने resin मै हुन्छ। Line मा हातले pigment paste हाल्दा आउने batch-देखि-batch रङ फरक हटाउन नै fabricator हरूले कारखानामै रङ मिसिएको grade रोज्छन्।',
        },
        {
          q: 'पारदर्शी roof-light sheet का लागि कुन grade?',
          a: 'पारदर्शी sheet अपारदर्शी रङीन sheet भन्दा फरक माग हो, किनभने बिक्री हुने गुण नै उज्यालो छिर्ने क्षमता हो। यस श्रेणीमा त्यस कामका लागि राखिएको grade Roof Light Sheet Resin हो, र यसको आफ्नै application गाइड छ।',
        },
        {
          q: 'Resin सँगै veil र gelcoat बारे पनि सोध्नुपर्छ?',
          a: 'Sheet बाहिर जाने हो भने पर्छ। Composites मा weathering सुरक्षा resin मा मिसाइएका stabiliser, surfacing veil, gelcoat वा तिनको संयोजनबाट आउने भनिन्छ। Stabilised resin छानेर सतहको बनोट बेवास्ता गर्नु समस्याको एक भाग मात्र सम्बोधन गर्नु हो।',
        },
        {
          q: 'Sheet grade resin को प्रतिकिलो मूल्य भन्न सक्नुहुन्छ?',
          a: 'वेब पृष्ठमा सक्दैनौँ। मूल्य grade, परिमाण, प्याकेजिङ र समयमा भर पर्छ, र ती नभनी राखिएको अंक सहयोगी होइन, भ्रामक हुन्छ। आवश्यकता पठाउनुहोस्, त्यसैअनुसार भाउ दिन्छौँ।',
        },
      ],
      sections: [
        {
          heading: 'Sheet केका लागि हो, त्यहीँबाट सुरु गर्नुहोस्',
          body: [
            'Sheet resin को छनोट सुरुकै एउटा प्रश्नमा विभाजित हुन्छ: यो sheet उज्यालो छिराउन राखिएको हो, कि छोप्न र रङ दिन। पारदर्शी roof-light sheet ले उज्यालो छिर्ने क्षमता बेच्छ, र यसको सम्पूर्ण specification त्यही गुण समयसँगै जोगाउने कुराबाट आउँछ। अपारदर्शी रङीन sheet ले छोप, देखावट र मौसम प्रतिरोध बेच्छ।',
            'यही प्रश्नले कुनै व्यक्तिगत उत्पादनको तुलना गर्नुअघि नै तपाईं कुन grade परिवारबीच छान्दै हुनुहुन्छ भन्ने तय गर्छ। यो पहिले टुंगिए पछिका धेरै अन्योल आफैँ हट्छन्।',
          ],
        },
        {
          heading: 'त्यसपछि कति घाम खान्छ भनी सोध्नुहोस्',
          body: [
            'दोस्रो प्रश्न सम्पर्क-अवस्थाको हो। छाप्रोभित्रको प्यानल, canopy मुनिको, वा कहिल्यै सिधा घाम नखाने भित्तामा रहेको प्यानल र वर्षौँसम्म हरेक सुक्खा मौसममा भरपूर घाम खाने छाना पाता फरक अवस्थामा हुन्छन्।',
            'सामान्य पूर्व-रङ्गिएको sheet grade र UV-stabilised grade बीचको रेखा त्यही हो। Stabilised grade समग्रमा राम्रो उत्पादन होइन। यो छोपिएको प्यानललाई नभएको समस्यालाई लक्ष्य गरेको additive package बोकेको उत्पादन हो — त्यसैले छोपिएको प्यानलमा थप लागतले प्रायः केही दिँदैन, र छानामा त्यही नै सबथोक हो।',
            'सोध्दा सम्पर्क-अवस्था स्पष्ट भन्नुहोस्। "बाहिर" भन्नाले आंशिक छायाँमा रहेको भित्ता प्यानल पनि पर्छ, दक्षिणमुखी छाना पनि — तर ती एउटै काम होइनन्।',
          ],
        },
        {
          heading: 'पूर्व-रङ्गिएको grade किन उत्पादनको निर्णय हो',
          body: [
            'यस श्रेणीका दुवै पहेँलो sheet grade सफा होइन, पहिल्यै रङ मिसाइएर आउँछन्। Sheet line का लागि यो सौन्दर्यभन्दा बढी एकरूपताको निर्णय हो। रङ निर्माताकहाँ मिसिँदा कुनै उत्पादनको shade हरेक batch मा pigment paste कति ध्यान दिएर हालियो भन्नेमा भर पर्दैन, र लगातारका उत्पादन एकअर्कासँग बढी भरपर्दो रूपमा मिल्छन्।',
            'बदलामा shade को छनोट र line मै रङ मिलाउने सुविधा गुम्छ। तपाईंका sheet कतै जडान भइसकेका प्यानलसँग मिल्नुपर्ने हो भने त्यो नयाँ कामका लागि standard रङ छान्नुभन्दा गाह्रो माग हो, र पहिलो उत्पादन निस्केपछि होइन, अर्डरअघि उठाउनुपर्छ।',
            'Pigment र weathering सुरक्षा छुट्टै कुरा हुन्। रङीन भएकै कारण sheet टिकाउ हुँदैन; प्रतिरोध सामान्यतया stabiliser, veil र surfacing प्रणालीसँग जोडिन्छ।',
          ],
        },
        {
          heading: 'Resin मै नरोकिनुहोस्',
          body: [
            'बाहिरी sheet का लागि resin weathering उत्तरको एक भाग मात्र हो। प्रकाशित साहित्यले सुरक्षा resin मा मिसाइएका stabiliser, अनुहारमा resin-rich तह राखेर fibre bloom ढिलो बनाउने surfacing veil, बाक्लो बलिदानी सतह बन्ने gelcoat, वा तिनको कुनै संयोजनबाट आउने भन्छ।',
            'अर्थात् व्यावहारिक सोधपुछले drum मात्र होइन, sheet को बनोट पनि समेट्छ। यो grade कुन प्रणालीमा भर पर्छ र यसको डिजाइनमा veil अपेक्षित छ कि छैन — निर्मातालाई सोध्नुहोस्।',
            'यसको अर्को अर्थ पनि छ: केही वर्षपछि धमिलो भएको sheet आफैँमा batch बिग्रेको प्रमाण होइन। त्यो छानिएको बनोट त्यस सम्पर्क-अवस्थाका लागि लक्षित थिएन भन्ने प्रमाण हुन सक्छ।',
          ],
        },
        {
          heading: 'उत्पादन सुरु गर्नुअघि के टुंग्याउने',
          body: [
            'उत्पादन परिमाण तय गर्नुअघि: grade र त्यसका लागि निर्माताले प्रकाशित गरेको कुरा पुष्टि गर्नुहोस्; catalyst प्रणाली र अपेक्षित gel-time व्यवहार पुष्टि गर्नुहोस्, र अर्को साइट वा मौसमका अंकमा भर पर्नुको सट्टा आफ्नै कार्यशालाको अवस्थामा परीक्षण चलाउनुहोस्; चाहिने परिमाणका लागि रङ र batch को व्यवस्था मिलाउनुहोस्; अनि handling कार्यविधि लेख्न कार्यशालालाई चाहिने सुरक्षा कागजात लिनुहोस्।',
            'Samrat FRP Traders ले Samrat Poly Resins, India बाट नेपालका लागि sheet grade आपूर्ति र आयात गर्छ। हामी व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हौँ। हामी resin वा sheet उत्पादन गर्दैनौँ, र यस साइटमा मूल्य, स्टक अवस्था वा delivery प्रतिबद्धता प्रकाशित गर्दैनौँ।',
            'UV Stabilized Sheet Grade Yellow Resin को आपूर्तिकर्ता Technical Data Sheet फाइलमा छ, र त्यसले उल्लेख गरेका मान जारीकर्ताको नामसहित उत्पादन पृष्ठमा प्रकाशित छन्। त्यसले नसमेटेको कुरा सोधपुछकै बेला भन्नुहोस्, हामी प्रश्न आपूर्तिकर्तासमक्ष पुर्‍याउँछौँ।',
          ],
        },
      ],
    },
  },
];
