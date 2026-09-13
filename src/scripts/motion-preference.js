// Page-level "pause moving media" control (WCAG 2.2.2 Pause, Stop, Hide).
//
// The ambient loop, the homepage hero loop and the brand film start on their
// own on screens that can afford video. prefers-reduced-motion already stops
// them, but an operating-system setting is not a control on the page, so the
// footer offers one. The choice lives only on the <html> element for the
// current page: nothing is written to cookies or browser storage.
export function isMotionPaused() {
  return typeof document !== 'undefined' && document.documentElement.dataset.motion === 'paused';
}

export function setMotionPaused(paused) {
  document.documentElement.dataset.motion = paused ? 'paused' : 'playing';
  document.dispatchEvent(new CustomEvent('site:motion-change'));
}

export function onMotionChange(handler) {
  document.addEventListener('site:motion-change', handler);
  return () => document.removeEventListener('site:motion-change', handler);
}
