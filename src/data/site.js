export const site = Object.freeze({
  name: 'Samrat FRP Traders',
  descriptor: 'FRP materials supplier',
  url: 'https://samratfrptraders.np/',
  description:
    'Development foundation for the Samrat FRP Traders Nepal website. Business, product, and contact information remains pending verification.',
});

export const navigation = Object.freeze([
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' },
]);

export function buildCanonicalUrl(pathname) {
  return new URL(pathname, site.url).toString();
}
