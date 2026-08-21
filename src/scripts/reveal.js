// Lightweight, dependency-free scroll-reveal for the static shell.
// Elements opt in with `data-reveal`; per-element stagger uses
// `--reveal-delay` (set inline or via a style attribute).
//
// The hidden state is only ever applied when:
//   1. the synchronous head snippet added the `js-reveal` class, and
//   2. the user has not requested reduced motion.
// If either condition fails, content simply stays visible — no animation,
// no risk of invisible content, and nothing depends on JavaScript.

export function initReveal() {
  if (!('IntersectionObserver' in window)) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  const items = document.querySelectorAll('[data-reveal]');
  if (items.length === 0) return;

  // 700ms matches the CSS reveal duration; the delay buffer keeps the
  // reveal state on the element long enough for the transition to finish.
  const REVEAL_DURATION_MS = 700;

  const reveal = (entry) => {
    const element = entry.target;
    element.classList.add('is-in-view');
    observer.unobserve(element);

    const delayMs = Number.parseFloat(
      element.style.getPropertyValue('--reveal-delay'),
    );
    const bufferMs = Number.isFinite(delayMs) ? delayMs : 0;

    window.setTimeout(() => {
      // Dropping the attribute returns the element to its natural styles,
      // so its own hover/interaction transforms are never overridden.
      element.removeAttribute('data-reveal');
      element.classList.remove('is-in-view');
    }, REVEAL_DURATION_MS + bufferMs);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry);
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  );

  items.forEach((element) => observer.observe(element));
}
