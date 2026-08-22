// Scratch validation for resources-ne overrides. Not part of the app.
import { resources } from './src/data/resources.js';

const slugs = [
  'epoxy-hardener-for-clear-casting-and-art-resin','what-is-dmc-smc-resin','dmc-vs-smc',
  'smc-resin-vs-sheet-grade-resin','dmc-smc-resin-vs-gp-resin','dmc-smc-resin-applications',
  'dmc-smc-resin-technical-specifications','dmc-smc-resin-procurement-checklist','epoxy-hardener-procurement-guide',
  'what-is-pet-modified-polyester-resin','pet-resin-liquid-grade-vs-thermoplastic-pet','pet-resin-applications-sheet-lamination-and-panels',
  'pet-resin-vs-gp-resin','pet-resin-vs-lamination-resin','what-is-bisphenol-resin','bisphenol-resin-applications',
  'bisphenol-resin-vs-upr-and-gp-resin','bisphenol-resin-vs-epoxy-resin','bisphenol-resin-data-vs-finished-component-performance',
  'bisphenol-resin-procurement-checklist','what-is-marble-resin','marble-resin-raw-resin-vs-finished-marble-composite',
  'marble-resin-applications-cultured-marble-artificial-stone','marble-resin-vs-pet-resin','marble-resin-vs-gp-resin',
  'marble-resin-vs-epoxy-clear-casting-resin','what-is-fiberglass-epoxy-resin','fiberglass-epoxy-resin-system-and-hardener',
  'fiberglass-epoxy-resin-vs-clear-casting-and-art-resin','fiberglass-epoxy-resin-vs-polyester-lamination-upr-gp',
  'fiberglass-epoxy-resin-vs-vinyl-ester-resin','fiberglass-epoxy-resin-applications',
  'fiberglass-epoxy-resin-technical-specifications-and-document-check','fiberglass-epoxy-resin-data-vs-finished-composite-performance',
  'fiberglass-epoxy-resin-procurement-checklist','marble-resin-technical-specifications-and-rfq',
];

const enMap = Object.fromEntries(resources.map(r => [r.slug, r]));
const forbidden = ['slug','category','icon','readingTime','publishDate','relatedSlugs'];

let errors = 0;
const missing = [];

for (const slug of slugs) {
  const en = enMap[slug];
  if (!en) { console.log(`ENG-MISSING  ${slug}`); errors++; continue; }
  let ne;
  try {
    ne = (await import(`./src/data/resources-ne/${slug}.js`)).default;
  } catch (e) {
    missing.push(slug);
    console.log(`NE-MISSING   ${slug}`);
    continue;
  }
  const problems = [];
  if (!ne || typeof ne !== 'object') problems.push('no default export object');
  else {
    if (typeof ne.title !== 'string' || !ne.title) problems.push('title missing');
    if (typeof ne.description !== 'string' || !ne.description) problems.push('description missing');
    for (const k of forbidden) if (k in ne) problems.push(`forbidden key: ${k}`);
    // seo
    if (!ne.seo) problems.push('seo missing');
    else {
      if (typeof ne.seo.title !== 'string') problems.push('seo.title');
      if (typeof ne.seo.ogTitle !== 'string') problems.push('seo.ogTitle');
      if (typeof ne.seo.ogDescription !== 'string') problems.push('seo.ogDescription');
      if (JSON.stringify(ne.seo.keywords ?? null) !== JSON.stringify(en.seo.keywords ?? null)) problems.push('seo.keywords not verbatim');
    }
    // sections
    if (!Array.isArray(ne.sections)) problems.push('sections not array');
    else if (ne.sections.length !== en.sections.length) problems.push(`sections ${ne.sections.length} vs ${en.sections.length}`);
    else {
      ne.sections.forEach((s, i) => {
        const es = en.sections[i];
        if (typeof s.heading !== 'string' || !s.heading) problems.push(`sections[${i}].heading`);
        if (!Array.isArray(s.body)) problems.push(`sections[${i}].body not array`);
        else if (s.body.length !== es.body.length) problems.push(`sections[${i}].body ${s.body.length} vs ${es.body.length}`);
      });
    }
    // faqs
    if (!Array.isArray(ne.faqs)) problems.push('faqs not array');
    else if (ne.faqs.length !== en.faqs.length) problems.push(`faqs ${ne.faqs.length} vs ${en.faqs.length}`);
    else ne.faqs.forEach((f, i) => { if (typeof f.q !== 'string' || typeof f.a !== 'string') problems.push(`faqs[${i}] shape`); });
    // quickFacts
    if (en.quickFacts) {
      if (!ne.quickFacts) problems.push('quickFacts missing');
      else {
        const a = Object.keys(en.quickFacts), b = Object.keys(ne.quickFacts);
        if (a.length !== b.length) problems.push(`quickFacts keys ${b.length} vs ${a.length}`);
      }
    }
    // propertiesTable
    if (en.propertiesTable && !ne.propertiesTable) problems.push('propertiesTable missing');
    if (!en.propertiesTable && ne.propertiesTable) problems.push('unexpected propertiesTable');
    if (en.propertiesTable && ne.propertiesTable) {
      if (JSON.stringify(en.propertiesTable.headers) !== JSON.stringify(ne.propertiesTable.headers)) problems.push('propertiesTable.headers mismatch');
      if (en.propertiesTable.rows.length !== ne.propertiesTable.rows.length) problems.push(`propertiesTable.rows ${ne.propertiesTable.rows.length} vs ${en.propertiesTable.rows.length}`);
      if ((en.propertiesTable.note && !ne.propertiesTable.note) || (!en.propertiesTable.note && ne.propertiesTable.note)) problems.push('propertiesTable.note presence mismatch');
    }
    // comparisonTable
    if (en.comparisonTable && !ne.comparisonTable) problems.push('comparisonTable missing');
    if (!en.comparisonTable && ne.comparisonTable) problems.push('unexpected comparisonTable');
    if (en.comparisonTable && ne.comparisonTable) {
      const ct = ne.comparisonTable;
      if (typeof ct.title !== 'string') problems.push('comparisonTable.title');
      if (en.comparisonTable.headers && JSON.stringify(en.comparisonTable.headers) !== JSON.stringify(ct.headers)) problems.push('comparisonTable.headers mismatch');
      if (en.comparisonTable.rows && en.comparisonTable.rows.length !== ct.rows.length) problems.push(`comparisonTable.rows ${ct.rows?.length} vs ${en.comparisonTable.rows.length}`);
      if ((en.comparisonTable.note && !ct.note) || (!en.comparisonTable.note && ct.note)) problems.push('comparisonTable.note presence mismatch');
    }
    // recommendedLinks
    if (!Array.isArray(ne.recommendedLinks)) problems.push('recommendedLinks not array');
    else if (ne.recommendedLinks.length !== en.recommendedLinks.length) problems.push(`recommendedLinks ${ne.recommendedLinks.length} vs ${en.recommendedLinks.length}`);
    else {
      ne.recommendedLinks.forEach((l, i) => {
        if (l.href !== en.recommendedLinks[i].href) problems.push(`recommendedLinks[${i}].href mismatch`);
        if (typeof l.label !== 'string' || typeof l.description !== 'string') problems.push(`recommendedLinks[${i}] shape`);
      });
    }
  }
  if (problems.length) {
    errors++;
    console.log(`PROBLEMS     ${slug}: ${problems.join('; ')}`);
  } else {
    console.log(`OK           ${slug}`);
  }
}

console.log(`\nTotal slugs: ${slugs.length}; missing: ${missing.length}; with-problems: ${errors};`);
console.log(`Missing list: ${missing.join(', ') || '(none)'}`);
