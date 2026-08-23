// Industry groupings for the Applications index. Matched against `slug`
// (stable and English-only even on the Nepali route, unlike `title`, which
// carries a localized override) rather than a hand-typed slug list per
// group — the same reasoning as resource-hub.js: a fixed slug list goes
// stale the moment a new application is added, a keyword match does not.
// Order matters: first matching rule wins, so more specific patterns
// (e.g. the "gelcoat-for-" prefix, which would otherwise fall into the
// tanks/roofing bucket via "water-tank") are checked first.

const INDUSTRY_GROUPS = [
  {
    slug: 'marine-automotive-gelcoat',
    name: 'Marine, Automotive & Gelcoat Finishing',
    test: (slug) => slug.startsWith('gelcoat-for-') || slug.includes('boat-manufacturing'),
  },
  {
    slug: 'casting-resin-art',
    name: 'Casting & Resin Art',
    test: (slug) => slug.includes('casting'),
  },
  {
    slug: 'fabrication-processes',
    name: 'Fabrication Processes',
    test: (slug) =>
      /hand-lay-up|spray-up|filament-winding|pultrusion|general-frp-lamination|general-frp-moulded-products/.test(
        slug,
      ),
  },
  {
    slug: 'doors-furniture-lamination',
    name: 'Doors & Furniture Lamination',
    test: (slug) =>
      slug.includes('door') ||
      slug.includes('furniture-lamination') ||
      slug.includes('decorative-panel-lamination') ||
      slug.includes('decorative-plywood-lamination'),
  },
  {
    slug: 'tanks-roofing-structural',
    name: 'Tanks, Roofing & Structural Sheet',
    test: (slug) =>
      /water-tank|cooling-tower|chemical-storage-tank|roofing-sheet|roof-light-sheet|pipelines-ducts-scrubbers|frp-panel-manufacturing/.test(
        slug,
      ),
  },
];

const DISPLAY_ORDER = [
  'tanks-roofing-structural',
  'doors-furniture-lamination',
  'marine-automotive-gelcoat',
  'fabrication-processes',
  'casting-resin-art',
  'general',
];

export function groupApplicationsByIndustry(publishedApplications) {
  const byGroup = new Map();

  for (const app of publishedApplications) {
    const match = INDUSTRY_GROUPS.find((g) => g.test(app.slug));
    const key = match?.slug ?? 'general';
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(app);
  }

  return DISPLAY_ORDER.filter((key) => byGroup.has(key)).map((key) => {
    const group = INDUSTRY_GROUPS.find((g) => g.slug === key);
    return {
      slug: key,
      name: group?.name ?? 'General FRP Applications',
      items: byGroup.get(key),
    };
  });
}
