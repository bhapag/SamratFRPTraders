// Aggregator for per-product bilingual content authored in
// src/data/product-content/<slug>.js (one default export per product:
// { en: {...}, ne: {...} }). Files land progressively; the glob picks up
// whatever exists so pages degrade gracefully while content is authored.

const parts = import.meta.glob('./product-content/*.js', { eager: true });

export const productContent = Object.freeze(
  Object.fromEntries(
    Object.entries(parts).map(([path, mod]) => {
      const slug = path.split('/').pop().replace(/\.js$/, '');
      return [slug, mod.default];
    }),
  ),
);

export function getProductContent(slug) {
  return productContent[slug] ?? null;
}
