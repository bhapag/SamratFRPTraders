export const site = Object.freeze({
  name: 'Samrat FRP Traders',
  legalName: 'M/s SAMRAT F.R.P TRADERS',
  descriptor: 'FRP materials supplier',
  url: 'https://samratfrptraders.com/',
  description:
    'Samrat FRP Traders supplies and imports FRP materials and industrial resins across Nepal — polyester resins, gelcoats, glass fiber, hardeners and related materials, with supplier technical documentation.',
  // Verified business details (owner-provided)
  business: Object.freeze({
    addressLine1: 'Ward No. 2, Tinpani Chowk, Main Road',
    city: 'Biratnagar',
    country: 'Nepal',
    phone: '+977 9805526904',
    tel: '+9779805526904',
    whatsapp: '9779805526904', // digits only, country code, no +
    contactNumbers: Object.freeze([
      Object.freeze({
        country: 'Nepal',
        countryNe: 'नेपाल',
        phone: '+977 9805526904',
        tel: '+9779805526904',
        whatsapp: '9779805526904',
      }),
      Object.freeze({
        country: 'India',
        countryNe: 'भारत',
        phone: '+91 7463881005',
        tel: '+917463881005',
        whatsapp: '917463881005',
      }),
      Object.freeze({
        country: 'India',
        countryNe: 'भारत',
        phone: '+91 7463881652',
        tel: '+917463881652',
        whatsapp: '917463881652',
      }),
    ]),
    email: 'samratfrptraders@gmail.com',
    pan: '623071827',
    vat: '623071827',
    exim: '6230718270114NP',
  }),
});

export const navigation = Object.freeze([
  { href: '/', label: 'गृहपृष्ठ' },
  { href: '/products/', label: 'उत्पादनहरू' },
  { href: '/applications/', label: 'प्रयोगहरू' },
  { href: '/resources/', label: 'जानकारी केन्द्र' },
  { href: '/about/', label: 'हाम्रोबारे' },
  { href: '/contact/', label: 'सम्पर्क' },
]);

export function buildCanonicalUrl(pathname) {
  return new URL(pathname, site.url).toString();
}

// Shared WhatsApp link builder — language-aware prefilled messages.
export function buildWhatsAppLink(message) {
  return `https://wa.me/${site.business.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Contact-page-only WhatsApp link builder. Global enquiry CTAs intentionally
// continue to use buildWhatsAppLink() and the primary Nepal number above.
export function buildContactWhatsAppLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Shared, concise WhatsApp enquiry copy. Keep each intent here so every CTA
// opens a consistent B2B conversation in the page's language.
export const whatsAppMessages = Object.freeze({
  generic: Object.freeze({
    en: 'Hello, I’d like to discuss an FRP material requirement.',
    ne: 'नमस्ते, मलाई FRP सामग्रीबारे जानकारी चाहिएको छ।',
  }),
  quoteFallback: Object.freeze({
    en: 'Hello, I’d like to discuss a quotation for FRP materials.',
    ne: 'नमस्ते, मलाई FRP सामग्रीको कोटेशनबारे कुरा गर्न चाहिएको छ।',
  }),
});

export function getWhatsAppMessage(intent, lang = 'en', productName = '') {
  const locale = lang === 'ne' ? 'ne' : 'en';

  if (intent === 'generic') return whatsAppMessages.generic[locale];

  if (intent === 'product') {
    return productName
      ? locale === 'ne'
        ? `नमस्ते, म ${productName} मा रुचि राख्छु। कृपया विवरण साझा गर्नुहोस्।`
        : `Hello, I’m interested in ${productName}. Please share details.`
      : whatsAppMessages.generic[locale];
  }

  if (intent === 'quote') {
    return productName
      ? locale === 'ne'
        ? `नमस्ते, मलाई ${productName} को कोटेशन चाहिएको छ।`
        : `Hello, I’d like a quote for ${productName}.`
      : whatsAppMessages.quoteFallback[locale];
  }

  throw new Error(`Unknown WhatsApp message intent: ${intent}`);
}

export function buildWhatsAppIntentLink(intent, lang = 'en', productName = '') {
  return buildWhatsAppLink(getWhatsAppMessage(intent, lang, productName));
}
