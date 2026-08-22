// Single-open accordion behavior for FAQ groups built on native <details>/<summary>.
// Keyboard and toggle semantics stay entirely native — this only closes the
// previously-open sibling within the same .faq-list group once another opens.
export function wireFaqAccordions() {
  document.querySelectorAll('.faq-list').forEach((list) => {
    if (list.dataset.accordionWired === 'true') return;
    list.dataset.accordionWired = 'true';

    const items = list.querySelectorAll(':scope > details.faq-item');
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });
}
