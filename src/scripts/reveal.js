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

  // threshold is a ratio of the TARGET's own area, not the viewport's —
  // for any element taller than roughly viewport-height / threshold (here,
  // ~11,250px at a 900px viewport), the maximum possible intersecting area
  // can never reach that ratio, so `isIntersecting` never becomes true and
  // the element stays permanently hidden. This is exactly what happened to
  // long-form resource articles (12,000px+): threshold 0 fires on any
  // overlap at all, independent of the target's size, which is both the
  // correct behavior for a "reveal as it scrolls into view" pattern and
  // immune to future content growth.
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry);
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0 },
  );

  items.forEach((element) => observer.observe(element));
}
