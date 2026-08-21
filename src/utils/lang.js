// Language-aware URL helpers for the Nepali-first (root) / English (/en) architecture.
// Root URLs are the Nepali pages; English equivalents live under /en/.
// Asset URLs (images, videos, tds, downloads, og-images) are language-neutral
// and must never be prefixed.

const PAGE_ROOTS = ['products', 'applications', 'resources', 'about', 'contact'];

export function enHref(href) {
  if (!href || typeof href !== 'string') return href;
  if (/^https?:\/\//.test(href)) return href;
  if (href.startsWith('/en/')) return href;
  if (PAGE_ROOTS.some((root) => href.startsWith(`/${root}/`))) return `/en${href}`;
  return href;
}

// Rewrite inline <a href="/..."> links inside supplier-derived HTML bodies
// so English pages link to the /en/ equivalents. Asset and external links
// are left untouched.
export function enHtml(html) {
  if (!html || typeof html !== 'string') return html;
  return html.replace(
    /href="\/(products|applications|resources|about|contact)(\/|")/g,
    'href="/en/$1$2',
  );
}
