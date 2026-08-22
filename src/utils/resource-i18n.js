// Shared helpers for localizing the Nepali resource-article routes.
// Translated narrative content lives per-resource under `resource.ne` (see
// src/data/resources.js) and is progressively merged over the English
// original — any field not yet translated gracefully falls back to English.
//
// Bulk translations may also live as one-file-per-resource overrides in
// src/data/resources-ne/<slug>.js (each file default-exports the same
// `ne` object shape). Inline `resource.ne` (if present) takes priority;
// otherwise the per-resource file is merged. This keeps the same proven
// override/merge semantics while allowing conflict-free parallel writes.

const neOverrideFiles = import.meta.glob('../data/resources-ne/*.js', { eager: true });

const NE_OVERRIDES = Object.fromEntries(
  Object.entries(neOverrideFiles).map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.js$/, '');
    return [slug, mod.default];
  }),
);

// Category tag translations (28 categories, shared across all resources —
// translated once here rather than duplicated per resource entry).
const CATEGORY_LABELS_NE = {
  'Product Guide': 'उत्पादन गाइड',
  'Application Guide': 'प्रयोग गाइड',
  'Buying Guide': 'खरिद गाइड',
  'Technical Data': 'प्राविधिक डाटा',
  'Best Practices': 'उत्तम अभ्यास',
  'Technical Guide': 'प्राविधिक गाइड',
  'Comparison Guide': 'तुलना गाइड',
  'Buyer Guide': 'खरिदकर्ता गाइड',
  'Troubleshooting Guide': 'समस्या समाधान गाइड',
  'Technical Explainer': 'प्राविधिक व्याख्या',
  'Process Guide': 'प्रक्रिया गाइड',
  'Procurement Guide': 'प्रापूर्ति गाइड',
  'Reinforcement Guide': 'सुदृढीकरण गाइड',
  'Selection Guide': 'छनोट गाइड',
  'Compatibility Guide': 'अनुकूलता गाइड',
  'Epoxy System Guide': 'Epoxy प्रणाली गाइड',
  'System Selection': 'प्रणाली छनोट',
  'Product Selection': 'उत्पादन छनोट',
  'Vinyl Ester Guide': 'Vinyl Ester गाइड',
  'Service Requirement Guide': 'सेवा आवश्यकता गाइड',
  'Technical Data Guide': 'प्राविधिक डाटा गाइड',
  'Bisphenol Resin Guide': 'Bisphenol Resin गाइड',
  'Technical Selection Guide': 'प्राविधिक छनोट गाइड',
  'Epoxy & Composite Guide': 'Epoxy र Composite गाइड',
  'System Selection Guide': 'प्रणाली छनोट गाइड',
  'Application Selection Guide': 'प्रयोग छनोट गाइड',
  'Technical & Documentation Guide': 'प्राविधिक र कागजात गाइड',
  'Technical & Procurement Guide': 'प्राविधिक र प्रापूर्ति गाइड',
};

export function categoryLabelNe(category) {
  return CATEGORY_LABELS_NE[category] ?? category;
}

// Callout tag translations, keyed by the stable `variant` field rather than
// the English `label` text (so a single map covers every callout).
const CALLOUT_LABELS_NE = {
  info: 'जानकारी',
  technical: 'प्राविधिक',
  practice: 'उत्तम अभ्यास',
  warning: 'महत्त्वपूर्ण जानकारी',
  takeaway: 'निष्कर्ष',
};

export function calloutLabelNe(variant) {
  return CALLOUT_LABELS_NE[variant] ?? CALLOUT_LABELS_NE.info;
}

// "10 min read" -> "१० मिनेट पढ्ने पढाइ". Falls back to the original string
// if it doesn't match the expected shape rather than producing broken text.
const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

function toDevanagariDigits(n) {
  return String(n).replace(/[0-9]/g, (d) => DEVANAGARI_DIGITS[Number(d)]);
}

export function readingTimeNe(readingTime) {
  const match = /^(\d+)\s*min/i.exec(readingTime ?? '');
  if (!match) return readingTime;
  return `${toDevanagariDigits(match[1])} मिनेट पढ्ने`;
}

// Progressive-enhancement merge: any key present in `resource.ne` (inline in
// resources.js) or in the per-resource override file (src/data/resources-ne/)
// overrides the English original; anything absent falls back to English
// untouched. This lets translation land resource-by-resource, field-by-field,
// without ever breaking the page or requiring an all-or-nothing switch.
export function localizeResource(resource) {
  const ne = resource?.ne ?? NE_OVERRIDES[resource?.slug];
  if (!ne) return resource;
  return { ...resource, ...ne };
}

export function isFullyLocalized(resource) {
  const ne = resource?.ne ?? NE_OVERRIDES[resource?.slug];
  return Boolean(ne?.sections && ne.title && ne.description);
}
