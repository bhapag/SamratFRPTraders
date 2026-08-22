// Localization for the Nepali application routes — mirrors the proven
// resource-i18n `ne` override/merge architecture. Per-application Nepali
// overrides live in src/data/applications-ne/<slug>.js (default export =
// the `ne` object); inline `app.ne` (if ever present) takes priority.

const neOverrideFiles = import.meta.glob('../data/applications-ne/*.js', { eager: true });

const NE_OVERRIDES = Object.fromEntries(
  Object.entries(neOverrideFiles).map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.js$/, '');
    return [slug, mod.default];
  }),
);

export function localizeApplication(app) {
  const ne = app?.ne ?? NE_OVERRIDES[app?.slug];
  if (!ne) return app;
  return { ...app, ...ne };
}

export function isApplicationLocalized(app) {
  const ne = app?.ne ?? NE_OVERRIDES[app?.slug];
  return Boolean(ne?.title && ne?.intro);
}
