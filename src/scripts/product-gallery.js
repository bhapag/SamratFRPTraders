// Lightweight, dependency-free product image gallery.
// Every image is pre-rendered in the DOM as a hidden/visible <img> slide —
// switching images is a show/hide toggle, never a src swap, so there's no
// flash of missing content and no extra network request on interaction.
// Handles thumbnail click, prev/next buttons, arrow-key navigation, and
// touch swipe on the main image. No-ops entirely for single-image or
// placeholder products (those never render the gallery chrome at all).
export function wireProductGalleries() {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    if (gallery.dataset.wired === 'true') return;
    gallery.dataset.wired = 'true';

    const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
    const thumbs = [...gallery.querySelectorAll('[data-gallery-thumb]')];
    const prevBtn = gallery.querySelector('[data-gallery-prev]');
    const nextBtn = gallery.querySelector('[data-gallery-next]');
    const main = gallery.querySelector('[data-gallery-main]');
    if (slides.length < 2 || !main) return;

    let active = slides.findIndex((slide) => !slide.hidden);
    if (active < 0) active = 0;

    function show(index) {
      const next = (index + slides.length) % slides.length;
      if (next === active) return;
      slides[active].hidden = true;
      thumbs[active]?.setAttribute('aria-pressed', 'false');
      thumbs[active]?.classList.remove('is-active');
      active = next;
      slides[active].hidden = false;
      thumbs[active]?.setAttribute('aria-pressed', 'true');
      thumbs[active]?.classList.add('is-active');
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => show(i));
    });

    prevBtn?.addEventListener('click', () => show(active - 1));
    nextBtn?.addEventListener('click', () => show(active + 1));

    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(active - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(active + 1);
      }
    });

    // Touch swipe on the main image only. Vertical page scroll is left
    // completely alone until the gesture is clearly horizontal — only
    // then do we take over via preventDefault, so a normal vertical swipe
    // anywhere on the image keeps scrolling the page as expected.
    let touchStartX = 0;
    let touchStartY = 0;
    let swiping = false;

    main.addEventListener(
      'touchstart',
      (event) => {
        const t = event.touches[0];
        touchStartX = t.clientX;
        touchStartY = t.clientY;
        swiping = false;
      },
      { passive: true },
    );

    main.addEventListener(
      'touchmove',
      (event) => {
        const t = event.touches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        if (!swiping && Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
          swiping = true;
        }
        if (swiping) event.preventDefault();
      },
      { passive: false },
    );

    main.addEventListener('touchend', (event) => {
      if (!swiping) return;
      const t = event.changedTouches[0];
      const dx = t.clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        show(dx < 0 ? active + 1 : active - 1);
      }
      swiping = false;
    });
  });
}
