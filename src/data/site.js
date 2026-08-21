export const site = Object.freeze({
  name: 'Samrat FRP Traders',
  legalName: 'M/s SAMRAT F.R.P TRADERS',
  descriptor: 'FRP materials supplier',
  url: 'https://samratfrptraders.np/',
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

export const whatsAppMessages = Object.freeze({
  ne: 'नमस्ते, मलाई Samrat FRP Traders का उत्पादनबारे जानकारी चाहिएको छ।',
  en: 'Hello, I would like information about Samrat FRP Traders products.',
});

// Product-specific quote message (used by product pages and enquiry CTAs).
export function buildProductQuoteLink(productName, lang = 'en') {
  const message =
    lang === 'ne'
      ? `नमस्ते, मलाई ${productName} को मूल्य तथा उपलब्धताबारे जानकारी चाहिएको छ।`
      : `Hello, I would like a quote for ${productName} from Samrat FRP Traders.`;
  return buildWhatsAppLink(message);
}
