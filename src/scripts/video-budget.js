// One place decides whether a page may spend a visitor's data on video.
//
// The site carries three video surfaces: the ambient page loop, the homepage
// hero loop and the brand film. Measured on the built site, the homepage alone
// fetched 4,220 KB of hero loop and 12,457 KB of brand film — 16.7 MB of
// autoplaying video before a visitor had read anything. On a Nepali phone on
// mobile data that is the whole page experience.
//
// Video is therefore an enhancement for screens and connections that can carry
// it. Everywhere it is refused, a still frame carries the same picture, so
// nothing disappears from the page — it just stops downloading uninvited.
export function canAffordVideo() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  // Phones and small tablets: the cost is highest and the decorative payoff
  // lowest, so autoplaying video never loads there on its own.
  if (window.matchMedia('(max-width: 820px)').matches) return false;

  const conn =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    if (conn.saveData) return false;
    if (/(^|-)2g$/.test(conn.effectiveType || '')) return false;
    if (conn.effectiveType === '3g') return false;
  }
  if (typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4) return false;
  return true;
}
