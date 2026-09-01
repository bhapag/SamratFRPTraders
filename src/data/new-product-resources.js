// Evidence-led, grade-neutral education for newly listed products. These guides
// deliberately avoid supplied-grade specifications; buyers must confirm the
// current TDS/SDS and the exact system before use.
const profiles = [
  ['cobalt-octoate','Cobalt Octoate Accelerator','Cobalt Octoate Accelerator: Role in Polyester Resin Curing','cobalt accelerator/promoter for suitable polyester cure systems','/products/cobalt-octoate/','Cobalt Octoate Accelerator नेपाल','उपयुक्त polyester resin curing system का लागि cobalt accelerator/promoter','Cobalt Octoate लाई MEKP वा resin नठान्नुहोस्।'],
  ['styrene-monomer','Styrene Monomer','Styrene Monomer in Unsaturated Polyester Resin Systems','a reactive diluent commonly used in unsaturated polyester systems','/products/styrene-monomer/','Styrene Monomer नेपाल','unsaturated polyester प्रणालीमा प्रयोग हुने reactive diluent','Exact inhibitor level, handling and compatibility must be confirmed from the current SDS/TDS.'],
  ['nc-thinner','NC Thinner','NC Thinner for Nitrocellulose Lacquer Systems','a thinner used with suitable nitrocellulose lacquer systems','/products/nc-thinner/','NC Thinner नेपाल','उपयुक्त nitrocellulose lacquer प्रणालीका लागि thinner','Exact solvent blend and application guidance depend on the supplied product and coating system.'],
  ['paint-brushes','Paint Brushes','Paint Brushes for FRP Hand Lay-up and Detail Work','a hand applicator for suitable resin, gelcoat and detail work','/products/paint-brushes/','Paint Brushes नेपाल','उपयुक्त FRP hand lay-up र detail work का लागि hand applicator','Brush material, size and re-use suitability must be confirmed for the actual job.'],
  ['soap-stone-powder','Soap Stone Powder','Soap Stone Powder as a Mineral Filler: Buyer Guide','a mineral filler considered in suitable resin compounds, putties and coatings','/products/soap-stone-powder/','Soap Stone Powder नेपाल','उपयुक्त resin compound, putty र coating मा विचार गरिने mineral filler','Mesh, mineral analysis, loading and dispersion requirements depend on the supplied grade and system.'],
  ['wax-polish','FRP Mould Release Wax','FRP Mould Release Wax: Preparation and Parting Guide','a parting-wax route for suitable FRP mould preparation','/products/wax-polish/','FRP Mould Release Wax नेपाल','उपयुक्त FRP mould preparation का लागि parting-wax route','Confirm the mould surface and the release product instructions before production.'],
];

const topics = [
  ['what-is','What Is {name}?','{name} के हो?','Product Guide'],
  ['applications','{name}: Applications and Process Context','{name}: प्रयोग र प्रक्रिया सन्दर्भ','Application Guide'],
  ['buyer-guide','{name} Buyer and Enquiry Checklist','{name} खरिदकर्ता र enquiry checklist','Buyer Guide'],
  ['selection','Choosing {name}: Compatibility Questions to Ask','{name} छनोट: compatibility का प्रश्नहरू','Selection Guide'],
  ['handling','{name}: General Handling and Storage Principles','{name}: सामान्य handling र storage सिद्धान्त','Best Practices'],
  ['troubleshooting','{name}: Common Workflow Problems and Checks','{name}: सामान्य workflow समस्या र जाँच','Troubleshooting Guide'],
  ['comparison','{name}: Related Material Classes Compared','{name}: सम्बन्धित material class तुलना','Comparison Guide'],
  ['faq','{name} Frequently Asked Questions','{name} सामान्य प्रश्नहरू','Product Guide'],
];

function record(profile, topic, index) {
  const [slug,name,enIntro,role,href,neName,neRole,boundary] = profile;
  const [suffix,enTitle,neTitle,category] = topic;
  const topicFocus = {
    'what-is': `Define the material class and its boundary: ${role}; it is not a supplied-grade specification.`,
    applications: `Map the real workflow first, then check whether ${name} is appropriate for that specific process and system.`,
    'buyer-guide': `A buyer should identify the intended use, related materials, document requirement and commercial requirement before requesting a quote.`,
    selection: `Selection is a compatibility question: confirm the exact supplied grade, the surrounding system and the required finished result.`,
    handling: `Use high-level good practice only: keep the current supplier SDS/TDS central to handling, storage, PPE and emergency guidance.`,
    troubleshooting: `Troubleshoot the full workflow—material identity, substrate or mould condition, process sequence and confirmed product instructions—rather than changing materials by guesswork.`,
    comparison: `Compare product classes by their role in the workflow, not by an unsupported claim that one supplied grade is universally better.`,
    faq: `Answer buyer questions with clear boundaries, then route exact-grade questions to the current TDS/SDS and a focused enquiry.`,
  }[suffix];
  const neTopicDescription = {
    'what-is': 'उत्पादनको वर्ग, भूमिका र यसको व्यावहारिक सीमा बुझ्ने',
    applications: 'प्रयोग क्षेत्र र प्रक्रिया सन्दर्भ बुझ्ने',
    'buyer-guide': 'खरिद तथा enquiry अघि जाँचिने विषयहरू बुझ्ने',
    selection: 'compatibility र छनोटका प्रश्नहरू पहिचान गर्ने',
    handling: 'सामान्य handling तथा storage का सिद्धान्त बुझ्ने',
    troubleshooting: 'सामान्य workflow समस्या र प्रारम्भिक जाँच बुझ्ने',
    comparison: 'सम्बन्धित material class बीचको भूमिका तुलना गर्ने',
    faq: 'खरिदकर्ताका सामान्य प्रश्नहरूको स्पष्ट उत्तर पाउने',
  }[suffix];
  const title = enTitle.replaceAll('{name}', name);
  const ne = neTitle.replaceAll('{name}', neName);
  const articleSlug = `${slug}-${suffix}`;
  const description = `${title}. ${topicFocus} Confirm the current supplier TDS/SDS before procurement or use.`;
  return {
    slug: articleSlug, title, description, category, icon: 'info', readingTime: '5 min read', publishDate: '2026-09-02',
    seo: { title, ogTitle: title, ogDescription: description },
    quickFacts: { 'Commercial position': 'Supplied by Samrat FRP Traders as a trader/supplier/importer/reseller', 'Exact-grade boundary': 'Confirm current TDS/SDS before selection or use', 'Use this guide for': 'General industry context and buyer questions' },
    relatedSlugs: topics.filter((_, i) => i !== index).slice(0, 3).map(([s]) => `${slug}-${s}`),
    recommendedLinks: [{ href, label: `View ${name}`, description: 'Review the commercial product page and send an application-led enquiry.' }, { href: '/contact/', label: 'Discuss your requirement', description: 'Share the intended system, process and document requirements.' }],
    faqs: [
      { q: `Is this a specification for the supplied ${name}?`, a: `No. ${description} Exact values, suitability, handling, storage and compatibility depend on the supplied grade and should be confirmed from the current TDS/SDS.` },
      { q: `Does Samrat FRP Traders manufacture ${name}?`, a: 'No manufacturer claim is made. Samrat FRP Traders is a trader, supplier, importer and reseller.' },
      { q: `What should a buyer include in an enquiry?`, a: 'State the intended process or finished part, related materials, document requirement, quantity and delivery location. Do not assume a generic guide confirms a specific system.' }
    ],
    sections: [
      { heading: 'Industry context', body: [`${enIntro}. In general industry use, it is discussed as ${role}. ${topicFocus}`, `This guide explains the product class rather than claiming a formulation, performance value or approval for the supplied item. A useful selection conversation starts with the real process, substrate or resin/coating system—not a product name alone. ${boundary}`] },
      { heading: 'Buyer checks before use', body: [`Confirm the exact product identity, current TDS/SDS, intended system, process conditions and any required written standard with the relevant supplier or technical authority. Generic information cannot replace a system-specific approval, recipe or safety instruction.`, `For an enquiry, link this topic back to the commercial ${name} page and identify related materials only after confirming the actual application.`] },
      { heading: 'Practical boundary', body: [`Do not treat this education page as a mixing instruction, dosage guide, certification, finished-part guarantee or emergency procedure. Follow the current supplier documentation and applicable workplace controls.`] }
    ],
    ne: {
      title: ne, description: `${neName}: ${neTopicDescription} grade-neutral उद्योग गाइड। सटीक grade विवरणका लागि TDS/SDS पुष्टि गर्नुहोस्।`,
      seo: { title: ne, ogTitle: ne, ogDescription: `${neName}: ${neTopicDescription} सामान्य उद्योग सन्दर्भ। सटीक grade विवरणका लागि TDS/SDS पुष्टि गर्नुहोस्।` },
      quickFacts: { 'व्यावसायिक भूमिका': 'Samrat FRP Traders द्वारा व्यापारी/आपूर्तिकर्ता/आयातकर्ता/पुनर्विक्रेताको रूपमा आपूर्ति', 'सटीक grade सीमा': 'छनोट वा प्रयोगअघि हालको TDS/SDS पुष्टि गर्नुहोस्', 'यो गाइडको उद्देश्य': 'सामान्य उद्योग सन्दर्भ र खरिदकर्ता प्रश्नहरू' },
      recommendedLinks: [{ href, label: `${neName} हेर्नुहोस्`, description: 'व्यावसायिक उत्पादन पृष्ठ र application-led enquiry हेर्नुहोस्।' }, { href: '/contact/', label: 'आफ्नो आवश्यकता छलफल गर्नुहोस्', description: 'प्रयोग, सम्बन्धित सामग्री र कागजात आवश्यकतासहित सम्पर्क गर्नुहोस्।' }],
      faqs: [{ q: `के यो ${neName} को supplied-grade specification हो?`, a: `होइन। सटीक मान, उपयुक्तता, handling, storage र compatibility supplied grade अनुसार फरक हुन्छन्; हालको TDS/SDS बाट पुष्टि गर्नुहोस्।` }, { q: `के Samrat FRP Traders ले ${neName} उत्पादन गर्छ?`, a: 'होइन। Samrat FRP Traders व्यापारी, आपूर्तिकर्ता, आयातकर्ता र पुनर्विक्रेता हो।' }, { q: 'Enquiry मा के समावेश गर्ने?', a: 'प्रयोग, सम्बन्धित सामग्री, आवश्यक कागजात, मात्रा र डेलिभरी स्थान स्पष्ट गर्नुहोस्।' }],
      sections: [{ heading: 'उद्योग सन्दर्भ', body: [`${neName} लाई सामान्य उद्योग सन्दर्भमा ${neRole} का रूपमा चर्चा गरिन्छ। यो पृष्ठ supplied item को formulation, performance वा approval दाबी गर्दैन।`, `छनोटको निर्णय वास्तविक process, substrate वा resin/coating system बाट सुरु हुन्छ। ${boundary}`] }, { heading: 'प्रयोगअघि खरिदकर्ता जाँच', body: ['सटीक product identity, हालको TDS/SDS, intended system, process condition र आवश्यक written standard पुष्टि गर्नुहोस्। सामान्य जानकारीले system-specific approval वा safety instruction प्रतिस्थापन गर्दैन।', `Enquiry मा ${neName} को commercial product page र वास्तविक application उल्लेख गर्नुहोस्।`] }, { heading: 'व्यावहारिक सीमा', body: ['यो पृष्ठलाई mixing instruction, dosage guide, certification, finished-part guarantee वा emergency procedure नमान्नुहोस्। हालको supplier document र लागू workplace control पालना गर्नुहोस्।'] }]
    }
  };
}

export const newProductResources = Object.freeze(profiles.flatMap((profile) => topics.map((topic, index) => record(profile, topic, index))));
