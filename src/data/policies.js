// Website policies for Samrat FRP Traders (Nepal). Written from how this site
// actually works on the effective date below:
//   - no accounts, payments or online ordering;
//   - no cookies, analytics, advertising or tracking tools, and no browser
//     storage (verified by network, cookie and storage inspection);
//   - the enquiry and custom-specification forms do not post to a server:
//     they open WhatsApp or the visitor's email program with a message the
//     visitor reviews and sends;
//   - third parties involved in loading or answering: Vercel (hosting),
//     Google Fonts, WhatsApp, Gmail.
// Nepali and English carry the same meaning and structure.
import { site } from './site.js';

const b = site.business;
export const POLICY_EFFECTIVE = Object.freeze({ en: '13 September 2026', ne: '१३ सेप्टेम्बर २०२६', version: 1 });

const contactEn = [
  `${site.legalName} (Samrat FRP Traders), ${b.addressLine1}, ${b.city}, ${b.country}.`,
  `Email: ${b.email} · Phone / WhatsApp: ${b.phone}`,
];
const contactNe = [
  `${site.legalName} (Samrat FRP Traders), वडा नं. २, तीनपानी चोक, मेन रोड, विराटनगर, नेपाल।`,
  `इमेल: ${b.email} · फोन / WhatsApp: ${b.phone}`,
];

export const policies = Object.freeze({
  'privacy-policy': {
    en: {
      title: 'Privacy Policy',
      description: 'What information Samrat FRP Traders handles when you use samratfrptraders.com or contact us, why, which services are involved, and the choices you have.',
      lead: 'This policy explains what information Samrat FRP Traders handles when you use this website or contact us, why we use it, which outside services are involved, and the choices you have. It describes how the website works today.',
      sections: [
        { heading: 'Who we are', paragraphs: [...contactEn, `PAN ${b.pan}. Samrat FRP Traders is a trader, supplier, importer and reseller of FRP materials in Nepal.`] },
        { heading: 'What this website does not do', list: [
          'It has no user accounts, no online payment and no online ordering.',
          'It does not set cookies and does not use analytics, advertising or tracking tools.',
          'It does not store anything in your browser’s local or session storage.',
          'It does not embed maps, social media widgets, chat widgets or third-party video players. Videos are served from this website.',
        ] },
        { heading: 'Information you choose to send us', paragraphs: [
          'The enquiry form and the custom resin specification form do not send information to our website server. When you press a send button, your browser opens WhatsApp or your own email program with a message that you can read, change and then decide whether to send. Only what you send reaches us.',
          'Depending on what you fill in, a message can include your name, company, city, phone number, email address, the product and quantity you need, how you will use it, requested properties and notes. The “Print / save” option creates a document on your own device only.',
          'When you phone, message or email us directly, we receive your number or address and what you tell us.',
          'Please do not send sensitive personal information, such as health details, identity documents or bank details. It is not needed for a product enquiry.',
        ] },
        { heading: 'Information processed when pages load', list: [
          'Hosting: the website is hosted by Vercel. As with any website, its servers process technical request information such as your IP address, browser type and the page requested, in order to deliver pages and keep the service secure. We do not use this information to identify visitors.',
          'Fonts: pages load typefaces from Google Fonts (fonts.googleapis.com and fonts.gstatic.com), so your browser sends your IP address and browser information to Google when it fetches them.',
        ] },
        { heading: 'How we use information', paragraphs: [
          'We use the information you send to answer your enquiry, prepare a quotation, arrange supply, follow up on an order you place with us, deal with a complaint, and keep the business records we need to keep. We use it only for the purpose for which you gave it. We do not sell personal information, and we do not send you marketing messages unless you have asked to receive them.',
        ] },
        { heading: 'When information is shared', list: [
          'With our supplier, Samrat Poly Resins, India, where we need to confirm technical or product information for your enquiry. We share the product requirement for that purpose and ask for your consent before sharing your name or contact details.',
          'With the services that carry the communication you choose: WhatsApp, email providers (our email is provided by Google Gmail) and our website host.',
          'Where the law requires it, or an authorised official requests it under the law.',
        ] },
        { heading: 'Services based outside Nepal', paragraphs: [
          'WhatsApp, Gmail, Google Fonts and Vercel are operated by companies based outside Nepal and may process information on servers in other countries, under their own terms and privacy policies.',
        ] },
        { heading: 'How long we keep information', paragraphs: [
          'We keep enquiry messages and related business records only for as long as we need them to deal with your enquiry or order and to meet our legal and accounting obligations. You can ask us to delete messages we no longer need.',
        ] },
        { heading: 'Security', paragraphs: [
          'We take reasonable care to protect the information we hold. No method of sending or storing information is completely secure, so we cannot guarantee absolute security.',
        ] },
        { heading: 'Your choices and requests', paragraphs: [
          'You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete information we do not need to keep. Contact us using the details on this page. Deleting a conversation from your own WhatsApp or email account does not delete our copy, so please ask us as well.',
          'Nepal’s Privacy Act, 2075 (2018) protects personal information such as your address, telephone number and email address, and requires consent for its collection and use. This policy does not limit any right you have under the laws of Nepal.',
        ] },
        { heading: 'Children', paragraphs: ['This website is intended for businesses and adult buyers of industrial materials.'] },
        { heading: 'Changes to this policy', paragraphs: ['If we change how information is handled, we will update this page and its effective date.'] },
        { heading: 'Contact', paragraphs: contactEn },
      ],
    },
    ne: {
      title: 'गोपनीयता नीति',
      description: 'samratfrptraders.com प्रयोग गर्दा वा हामीलाई सम्पर्क गर्दा Samrat FRP Traders ले कुन जानकारी राख्छ, किन, कुन सेवा संलग्न हुन्छन् र तपाईंसँग के विकल्प छन्।',
      lead: 'तपाईंले यो वेबसाइट प्रयोग गर्दा वा हामीलाई सम्पर्क गर्दा Samrat FRP Traders ले कुन जानकारी राख्छ, त्यसलाई किन प्रयोग गर्छ, कुन बाहिरी सेवा संलग्न हुन्छन् र तपाईंसँग के विकल्प छन् भन्ने कुरा यो नीतिले बताउँछ। यसले वेबसाइट हाल जसरी चल्छ त्यही वर्णन गर्छ।',
      sections: [
        { heading: 'हामी को हौँ', paragraphs: [...contactNe, `PAN ${b.pan}। Samrat FRP Traders नेपालमा FRP सामग्रीको व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।`] },
        { heading: 'यो वेबसाइटले के गर्दैन', list: [
          'यसमा प्रयोगकर्ता खाता, अनलाइन भुक्तानी वा अनलाइन अर्डर छैन।',
          'यसले cookie राख्दैन, र analytics, विज्ञापन वा ट्र्याकिङ उपकरण प्रयोग गर्दैन।',
          'यसले तपाईंको browser को local वा session storage मा केही पनि राख्दैन।',
          'यसमा नक्सा, सामाजिक सञ्जाल widget, chat widget वा तेस्रो पक्षको भिडियो प्लेयर राखिएको छैन। भिडियो यही वेबसाइटबाट चल्छन्।',
        ] },
        { heading: 'तपाईंले रोजेर पठाउने जानकारी', paragraphs: [
          'सोधपुछ फारम र अनुकूल रेजिन स्पेसिफिकेसन फारमले हाम्रो वेबसाइट सर्भरमा जानकारी पठाउँदैनन्। पठाउने बटन थिच्दा तपाईंको browser ले WhatsApp वा तपाईंकै इमेल प्रोग्राममा सन्देश खोल्छ, जुन तपाईं पढ्न, बदल्न र पठाउने वा नपठाउने निर्णय गर्न सक्नुहुन्छ। तपाईंले पठाएको कुरा मात्र हामीकहाँ आइपुग्छ।',
          'तपाईंले के भर्नुहुन्छ त्यसअनुसार सन्देशमा नाम, कम्पनी, सहर, फोन नम्बर, इमेल ठेगाना, चाहिने उत्पादन र परिमाण, प्रयोग, अनुरोध गरिएका गुण र टिप्पणी हुन सक्छन्। “प्रिन्ट / सेभ” विकल्पले तपाईंकै उपकरणमा मात्र कागजात बनाउँछ।',
          'तपाईंले हामीलाई सिधै फोन, सन्देश वा इमेल गर्दा हामीले तपाईंको नम्बर वा ठेगाना र तपाईंले भनेको कुरा पाउँछौँ।',
          'स्वास्थ्य विवरण, परिचयपत्र वा बैंक विवरणजस्ता संवेदनशील व्यक्तिगत जानकारी नपठाउनुहोस्। उत्पादन सोधपुछका लागि त्यो आवश्यक पर्दैन।',
        ] },
        { heading: 'पृष्ठ खुल्दा प्रशोधन हुने जानकारी', list: [
          'होस्टिङ: यो वेबसाइट Vercel मा होस्ट गरिएको छ। अरू वेबसाइटजस्तै, पृष्ठ पुर्‍याउन र सेवा सुरक्षित राख्न त्यसका सर्भरले तपाईंको IP ठेगाना, browser को प्रकार र मागिएको पृष्ठजस्ता प्राविधिक अनुरोध जानकारी प्रशोधन गर्छन्। आगन्तुक पहिचान गर्न हामी यो जानकारी प्रयोग गर्दैनौँ।',
          'फन्ट: पृष्ठहरूले Google Fonts (fonts.googleapis.com र fonts.gstatic.com) बाट अक्षर-शैली लोड गर्छन्, त्यसैले ती लिँदा तपाईंको browser ले Google लाई तपाईंको IP ठेगाना र browser जानकारी पठाउँछ।',
        ] },
        { heading: 'जानकारी कसरी प्रयोग गर्छौँ', paragraphs: [
          'तपाईंले पठाएको जानकारी हामी तपाईंको सोधपुछको जवाफ दिन, कोटेशन तयार गर्न, आपूर्ति मिलाउन, तपाईंले हामीसँग गरेको अर्डरको फलोअप गर्न, गुनासो सम्बोधन गर्न र राख्नुपर्ने व्यावसायिक अभिलेख राख्न प्रयोग गर्छौँ। तपाईंले जुन उद्देश्यले दिनुभयो त्यसैका लागि मात्र प्रयोग गर्छौँ। हामी व्यक्तिगत जानकारी बेच्दैनौँ, र तपाईंले नमागेसम्म मार्केटिङ सन्देश पठाउँदैनौँ।',
        ] },
        { heading: 'जानकारी कहिले साझा हुन्छ', list: [
          'तपाईंको सोधपुछका लागि प्राविधिक वा उत्पादन जानकारी पुष्टि गर्नुपर्दा हाम्रो आपूर्तिकर्ता Samrat Poly Resins, India सँग। त्यस उद्देश्यका लागि उत्पादनको आवश्यकता साझा गर्छौँ, र तपाईंको नाम वा सम्पर्क विवरण साझा गर्नुअघि तपाईंको सहमति लिन्छौँ।',
          'तपाईंले रोजेको सञ्चार पुर्‍याउने सेवासँग: WhatsApp, इमेल सेवा प्रदायक (हाम्रो इमेल Google Gmail ले दिएको हो) र हाम्रो वेबसाइट होस्ट।',
          'कानूनले माग गरेमा, वा अख्तियारप्राप्त अधिकारीले कानूनबमोजिम माग गरेमा।',
        ] },
        { heading: 'नेपाल बाहिर आधारित सेवा', paragraphs: [
          'WhatsApp, Gmail, Google Fonts र Vercel नेपाल बाहिर आधारित कम्पनीहरूले सञ्चालन गर्छन्, र आफ्नै सर्त तथा गोपनीयता नीतिअनुसार अन्य देशका सर्भरमा जानकारी प्रशोधन गर्न सक्छन्।',
        ] },
        { heading: 'जानकारी कति समय राख्छौँ', paragraphs: [
          'सोधपुछ सन्देश र सम्बन्धित व्यावसायिक अभिलेख तपाईंको सोधपुछ वा अर्डर सम्हाल्न तथा कानूनी र लेखासम्बन्धी दायित्व पूरा गर्न आवश्यक भएसम्म मात्र राख्छौँ। अब आवश्यक नपर्ने सन्देश मेटाउन तपाईं हामीलाई भन्न सक्नुहुन्छ।',
        ] },
        { heading: 'सुरक्षा', paragraphs: [
          'हामीसँग रहेको जानकारी सुरक्षित राख्न उचित सावधानी अपनाउँछौँ। जानकारी पठाउने वा राख्ने कुनै पनि तरिका पूर्ण रूपमा सुरक्षित नहुने भएकाले हामी पूर्ण सुरक्षाको ग्यारेन्टी दिन सक्दैनौँ।',
        ] },
        { heading: 'तपाईंका विकल्प र अनुरोध', paragraphs: [
          'हामीसँग तपाईंबारे कुन व्यक्तिगत जानकारी छ भनी सोध्न, त्यसलाई सच्याउन वा हामीले राख्नु नपर्ने जानकारी मेटाउन अनुरोध गर्न सक्नुहुन्छ। यस पृष्ठमा दिइएको विवरणबाट सम्पर्क गर्नुहोस्। तपाईंकै WhatsApp वा इमेल खाताबाट कुराकानी मेटाउँदा हाम्रो प्रति मेटिँदैन, त्यसैले हामीलाई पनि भन्नुहोस्।',
          'नेपालको वैयक्तिक गोपनीयता सम्बन्धी ऐन, २०७५ ले ठेगाना, टेलिफोन नम्बर र इमेल ठेगानाजस्ता व्यक्तिगत जानकारी संरक्षण गर्छ, र त्यसको सङ्कलन तथा प्रयोगका लागि सहमति आवश्यक पार्छ। यो नीतिले नेपालको कानूनबमोजिम तपाईंलाई प्राप्त कुनै पनि अधिकार सीमित गर्दैन।',
        ] },
        { heading: 'बालबालिका', paragraphs: ['यो वेबसाइट व्यवसाय तथा औद्योगिक सामग्री किन्ने वयस्क खरिदकर्ताका लागि हो।'] },
        { heading: 'नीतिमा परिवर्तन', paragraphs: ['जानकारी सम्हाल्ने तरिका बदलिएमा यो पृष्ठ र त्यसको लागू मिति अद्यावधिक गर्नेछौँ।'] },
        { heading: 'सम्पर्क', paragraphs: contactNe },
      ],
    },
  },

  terms: {
    en: {
      title: 'Terms of Website Use',
      description: 'The terms for using samratfrptraders.com: an information website for a Nepal trader of FRP materials, with supplier documents, quotations on enquiry and no online ordering.',
      lead: 'These terms apply to your use of samratfrptraders.com, operated by Samrat FRP Traders of Biratnagar, Nepal. By using the website you accept them. If you do not accept them, please do not use the website.',
      sections: [
        { heading: 'An information website', paragraphs: [
          'The website gives information about the FRP materials and industrial resins that Samrat FRP Traders supplies in Nepal, how they are used and the supplier documents that relate to them. It does not sell online, take payment or provide user accounts.',
        ] },
        { heading: 'Prices, quotations and orders', list: [
          'Prices are not published. Price, packaging, quantity, availability and delivery are confirmed on enquiry.',
          'Information on the website is not an offer to sell.',
          'A quotation applies to the products, quantities and terms stated in that quotation.',
          'An order is agreed only when Samrat FRP Traders confirms it directly with you.',
        ] },
        { heading: 'Supplier documents', paragraphs: [
          'Technical Data Sheets, Safety Data Sheets and Product Data Sheets on this website are issued by the supplier, Samrat Poly Resins, India, and are published as issued. Samrat FRP Traders does not write, certify or own these documents or the specifications in them. Values are those published by the issuer and can change; check the current document for the exact grade and batch.',
        ] },
        { heading: 'Suitability and safe use', paragraphs: [
          'Product pages and guides give general information. They are not professional advice and are not a recommendation for a particular process or finished product. You are responsible for confirming that a material suits your process and product, for any testing that requires, for safe handling and storage, and for meeting the rules that apply to your work. Where a Safety Data Sheet is available, follow it.',
        ] },
        { heading: 'Accuracy and changes', paragraphs: [
          'We try to keep the website accurate and up to date, but it may contain errors or information that has changed. We may change or remove content without notice.',
        ] },
        { heading: 'Intellectual property', paragraphs: [
          'The website’s text, layout and the Samrat FRP Traders name and logo belong to Samrat FRP Traders. Supplier documents, product posters and supplier media belong to Samrat Poly Resins, India or their other owners and are shown to identify their products. Other product and company names belong to their owners.',
          'You may view, download and print pages and documents to evaluate products for your business. Do not republish or commercially reuse website content without permission from the owner concerned.',
        ] },
        { heading: 'Links to other services', paragraphs: [
          'Links may open WhatsApp, your email program or other websites. Those services are run by others under their own terms, and we are not responsible for their content or practices.',
        ] },
        { heading: 'Acceptable use', list: [
          'Do not try to disrupt the website or gain unauthorised access to it or to the systems that host it.',
          'Do not collect website content automatically in a way that burdens the service.',
          'Do not use the contact channels to send spam, or pretend to be another person or business.',
        ] },
        { heading: 'Liability', paragraphs: [
          'To the extent the laws of Nepal allow, Samrat FRP Traders is not liable for loss caused by relying on general information on this website instead of confirming it for your own purchase and use. Nothing in these terms limits any liability or consumer right that cannot be limited under the laws of Nepal, including rights under the Consumer Protection Act, 2075 (2018).',
        ] },
        { heading: 'Governing law', paragraphs: ['These terms are governed by the laws of Nepal.'] },
        { heading: 'Changes to these terms', paragraphs: ['We may update these terms. The version and effective date on this page show which terms apply.'] },
        { heading: 'Contact', paragraphs: contactEn },
      ],
    },
    ne: {
      title: 'वेबसाइट प्रयोगका सर्तहरू',
      description: 'samratfrptraders.com प्रयोगका सर्त: FRP सामग्रीको नेपाली व्यापारीको जानकारीमूलक वेबसाइट, आपूर्तिकर्ता कागजात, सोधपुछमा कोटेशन र अनलाइन अर्डर नहुने।',
      lead: 'यी सर्त विराटनगर, नेपालको Samrat FRP Traders ले सञ्चालन गर्ने samratfrptraders.com को प्रयोगमा लागू हुन्छन्। वेबसाइट प्रयोग गरेर तपाईं यी सर्त स्वीकार गर्नुहुन्छ। स्वीकार नभए कृपया वेबसाइट प्रयोग नगर्नुहोस्।',
      sections: [
        { heading: 'जानकारीमूलक वेबसाइट', paragraphs: [
          'यो वेबसाइटले Samrat FRP Traders ले नेपालमा आपूर्ति गर्ने FRP सामग्री तथा औद्योगिक रेजिन, तिनको प्रयोग र सम्बन्धित आपूर्तिकर्ता कागजातबारे जानकारी दिन्छ। यसले अनलाइन बिक्री गर्दैन, भुक्तानी लिँदैन, र प्रयोगकर्ता खाता दिँदैन।',
        ] },
        { heading: 'मूल्य, कोटेशन र अर्डर', list: [
          'मूल्य प्रकाशित गरिँदैन। मूल्य, प्याकेजिङ, परिमाण, उपलब्धता र डेलिभरी सोधपुछमा पुष्टि गरिन्छ।',
          'वेबसाइटमा रहेको जानकारी बिक्रीको प्रस्ताव होइन।',
          'कोटेशन त्यसमा उल्लेख गरिएका उत्पादन, परिमाण र सर्तमा लागू हुन्छ।',
          'Samrat FRP Traders ले तपाईंसँग सिधै पुष्टि गरेपछि मात्र अर्डर तय हुन्छ।',
        ] },
        { heading: 'आपूर्तिकर्ताका कागजात', paragraphs: [
          'यस वेबसाइटका Technical Data Sheet, Safety Data Sheet र Product Data Sheet आपूर्तिकर्ता Samrat Poly Resins, India ले जारी गरेका हुन्, र जारी भएकै रूपमा प्रकाशित गरिएका छन्। Samrat FRP Traders ले यी कागजात वा तिनमा रहेका स्पेसिफिकेसन लेख्दैन, प्रमाणित गर्दैन वा तिनको स्वामित्व राख्दैन। मानहरू जारीकर्ताले प्रकाशित गरेका हुन् र बदलिन सक्छन्; ठ्याक्कै grade र batch का लागि हालको कागजात हेर्नुहोस्।',
        ] },
        { heading: 'उपयुक्तता र सुरक्षित प्रयोग', paragraphs: [
          'उत्पादन पृष्ठ र गाइडले सामान्य जानकारी दिन्छन्। ती पेशागत सल्लाह होइनन्, न त कुनै खास प्रक्रिया वा तयार उत्पादनका लागि सिफारिस नै। सामग्री तपाईंको प्रक्रिया र उत्पादनलाई मिल्छ भनी पुष्टि गर्ने, त्यसका लागि चाहिने परीक्षण गर्ने, सुरक्षित रूपमा सम्हाल्ने तथा भण्डारण गर्ने, र तपाईंको कामलाई लागू हुने नियम पालना गर्ने जिम्मेवारी तपाईंको हो। Safety Data Sheet उपलब्ध भएमा त्यसको पालना गर्नुहोस्।',
        ] },
        { heading: 'शुद्धता र परिवर्तन', paragraphs: [
          'वेबसाइट शुद्ध र अद्यावधिक राख्ने प्रयास गर्छौँ, तर त्यसमा त्रुटि वा बदलिसकेको जानकारी हुन सक्छ। सूचना नदिई सामग्री बदल्न वा हटाउन सक्छौँ।',
        ] },
        { heading: 'बौद्धिक सम्पत्ति', paragraphs: [
          'वेबसाइटका पाठ, बनोट र Samrat FRP Traders को नाम तथा लोगो Samrat FRP Traders का हुन्। आपूर्तिकर्ताका कागजात, उत्पादन पोस्टर र आपूर्तिकर्ताका मिडिया Samrat Poly Resins, India वा अन्य स्वामीका हुन्, र तिनका उत्पादन चिनाउन देखाइएका छन्। अरू उत्पादन तथा कम्पनीका नाम तिनका स्वामीका हुन्।',
          'आफ्नो व्यवसायका लागि उत्पादन मूल्याङ्कन गर्न पृष्ठ तथा कागजात हेर्न, डाउनलोड गर्न र प्रिन्ट गर्न सक्नुहुन्छ। सम्बन्धित स्वामीको अनुमतिबिना वेबसाइटको सामग्री पुनः प्रकाशन वा व्यावसायिक प्रयोग नगर्नुहोस्।',
        ] },
        { heading: 'अन्य सेवाका लिंक', paragraphs: [
          'लिंकले WhatsApp, तपाईंको इमेल प्रोग्राम वा अन्य वेबसाइट खोल्न सक्छन्। ती सेवा अरूले आफ्नै सर्तमा चलाउँछन्, र तिनका सामग्री वा अभ्यासका लागि हामी जिम्मेवार हुँदैनौँ।',
        ] },
        { heading: 'स्वीकार्य प्रयोग', list: [
          'वेबसाइटमा अवरोध पुर्‍याउने, वा वेबसाइट वा त्यसलाई होस्ट गर्ने प्रणालीमा अनधिकृत पहुँच गर्ने प्रयास नगर्नुहोस्।',
          'सेवामा भार पर्ने गरी वेबसाइटको सामग्री स्वचालित रूपमा सङ्कलन नगर्नुहोस्।',
          'सम्पर्क माध्यम स्प्याम पठाउन प्रयोग नगर्नुहोस्, वा अर्को व्यक्ति वा व्यवसाय भएको बहाना नगर्नुहोस्।',
        ] },
        { heading: 'दायित्व', paragraphs: [
          'नेपालको कानूनले दिएसम्म, आफ्नो खरिद तथा प्रयोगका लागि पुष्टि नगरी यस वेबसाइटको सामान्य जानकारीमा भर परेर हुने हानिका लागि Samrat FRP Traders दायी हुँदैन। नेपालको कानूनबमोजिम सीमित गर्न नमिल्ने कुनै पनि दायित्व वा उपभोक्ता अधिकार, उपभोक्ता संरक्षण ऐन, २०७५ अन्तर्गतका अधिकारसमेत, यी सर्तले सीमित गर्दैनन्।',
        ] },
        { heading: 'लागू हुने कानून', paragraphs: ['यी सर्त नेपालको कानूनबमोजिम सञ्चालित हुन्छन्।'] },
        { heading: 'सर्तमा परिवर्तन', paragraphs: ['हामी यी सर्त अद्यावधिक गर्न सक्छौँ। कुन सर्त लागू हुन्छन् भन्ने कुरा यस पृष्ठको संस्करण र लागू मितिले देखाउँछ।'] },
        { heading: 'सम्पर्क', paragraphs: contactNe },
      ],
    },
  },

  'sales-returns-complaints': {
    en: {
      title: 'Sales, Returns and Complaints',
      description: 'How buying from Samrat FRP Traders works, how returns are handled for a specific order, and how to raise a complaint. The website takes no payments or online orders.',
      lead: 'This page explains how buying from Samrat FRP Traders works and how to raise a problem with a delivery. The website does not take payments or online orders.',
      sections: [
        { heading: 'How sales work', list: [
          'Contact us by phone, WhatsApp, email or one of the website forms with the product, quantity and delivery location you need.',
          'We confirm the product and grade, quantity, packaging, price and delivery arrangements with you.',
          'An order is agreed when both sides confirm it directly. Payment and delivery terms are agreed for that order.',
        ] },
        { heading: 'Returns, replacements and refunds', paragraphs: [
          'Returns, replacements, refunds and cancellations are handled for each order in line with what was agreed when that order was placed. Because we do not sell online, there is no online cancellation or refund process.',
          'This does not affect any right you have under the laws of Nepal, including the Consumer Protection Act, 2075 (2018).',
        ] },
        { heading: 'Checking a delivery', paragraphs: [
          'Please check goods, labels and quantities when you receive them, and tell us promptly about any shortage, damage or wrong product. Include the bill or invoice number and, where possible, photographs of the goods and labels.',
        ] },
        { heading: 'Raising a complaint', list: [
          'Contact us by phone or WhatsApp on +977 9805526904, or by email at samratfrptraders@gmail.com.',
          'Give your name, the bill, invoice or order details, the product and batch or label details, what went wrong, and photographs where they help.',
          'We will look into it with you. Questions about product quality or performance may need to be referred to the supplier, Samrat Poly Resins, India, for technical investigation.',
        ] },
        { heading: 'Contact', paragraphs: contactEn },
      ],
    },
    ne: {
      title: 'बिक्री, फिर्ता र गुनासो',
      description: 'Samrat FRP Traders बाट किनमेल कसरी हुन्छ, कुनै अर्डरमा फिर्ता कसरी मिलाइन्छ, र गुनासो कसरी राख्ने। वेबसाइटले भुक्तानी वा अनलाइन अर्डर लिँदैन।',
      lead: 'Samrat FRP Traders बाट किनमेल कसरी हुन्छ र डेलिभरीमा समस्या आए कसरी जानकारी दिने भन्ने कुरा यो पृष्ठले बताउँछ। वेबसाइटले भुक्तानी वा अनलाइन अर्डर लिँदैन।',
      sections: [
        { heading: 'बिक्री कसरी हुन्छ', list: [
          'चाहिने उत्पादन, परिमाण र डेलिभरी स्थानसहित फोन, WhatsApp, इमेल वा वेबसाइटका फारमबाट सम्पर्क गर्नुहोस्।',
          'उत्पादन तथा grade, परिमाण, प्याकेजिङ, मूल्य र डेलिभरी व्यवस्था तपाईंसँग पुष्टि गर्छौँ।',
          'दुवै पक्षले सिधै पुष्टि गरेपछि अर्डर तय हुन्छ। भुक्तानी र डेलिभरीका सर्त त्यही अर्डरका लागि तय गरिन्छन्।',
        ] },
        { heading: 'फिर्ता, सट्टा र रकम फिर्ता', paragraphs: [
          'फिर्ता, सट्टा, रकम फिर्ता र रद्द हरेक अर्डर राख्दा जे सहमति भएको थियो सोहीअनुसार मिलाइन्छ। हामी अनलाइन बिक्री नगर्ने भएकाले अनलाइन रद्द वा रकम फिर्ता प्रक्रिया छैन।',
          'यसले उपभोक्ता संरक्षण ऐन, २०७५ लगायत नेपालको कानूनबमोजिम तपाईंलाई प्राप्त कुनै पनि अधिकारमा असर गर्दैन।',
        ] },
        { heading: 'डेलिभरी जाँच', paragraphs: [
          'सामान प्राप्त गर्दा सामान, लेबल र परिमाण जाँच्नुहोस्, र कमी, क्षति वा फरक उत्पादन भए तुरुन्तै हामीलाई भन्नुहोस्। बिल वा इनभ्वाइस नम्बर र सम्भव भएसम्म सामान तथा लेबलका फोटो समावेश गर्नुहोस्।',
        ] },
        { heading: 'गुनासो राख्ने तरिका', list: [
          '+977 9805526904 मा फोन वा WhatsApp गर्नुहोस्, वा samratfrptraders@gmail.com मा इमेल गर्नुहोस्।',
          'तपाईंको नाम, बिल, इनभ्वाइस वा अर्डर विवरण, उत्पादन तथा batch वा लेबल विवरण, के समस्या भयो, र सहयोगी भए फोटो दिनुहोस्।',
          'हामी तपाईंसँग मिलेर हेर्नेछौँ। उत्पादनको गुणस्तर वा कार्यसम्पादनसम्बन्धी प्रश्न प्राविधिक छानबिनका लागि आपूर्तिकर्ता Samrat Poly Resins, India कहाँ पठाउनुपर्ने हुन सक्छ।',
        ] },
        { heading: 'सम्पर्क', paragraphs: contactNe },
      ],
    },
  },
});

export const POLICY_LINKS = Object.freeze([
  { slug: 'privacy-policy', en: 'Privacy Policy', ne: 'गोपनीयता नीति' },
  { slug: 'terms', en: 'Terms of Website Use', ne: 'वेबसाइट प्रयोगका सर्त' },
  { slug: 'sales-returns-complaints', en: 'Sales, Returns and Complaints', ne: 'बिक्री, फिर्ता र गुनासो' },
]);
