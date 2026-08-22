// Progressive-enhancement copy-to-clipboard for the footer PAN/VAT/EXIM values.
// Feature-detects the Clipboard API; when it is unavailable the values stay
// plain, selectable text with no interactive affordance added.
export function wireFooterCopy() {
  if (!(navigator.clipboard && navigator.clipboard.writeText)) return;

  const statusEl = document.querySelector('[data-copy-status]');

  document.querySelectorAll('.legal-item[data-copy-value]').forEach((el) => {
    if (el.dataset.copyWired === 'true') return;
    el.dataset.copyWired = 'true';

    const label = el.textContent.trim();
    el.classList.add('is-copyable');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `Copy ${label}`);

    const copyValue = async () => {
      try {
        await navigator.clipboard.writeText(el.getAttribute('data-copy-value') || '');
        el.classList.add('is-copied');
        if (statusEl) statusEl.textContent = `${label} copied`;
        window.setTimeout(() => el.classList.remove('is-copied'), 1500);
      } catch {
        // Clipboard write was blocked or denied; value remains selectable manually.
      }
    };

    el.addEventListener('click', copyValue);
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        copyValue();
      }
    });
  });
}
