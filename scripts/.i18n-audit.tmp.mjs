import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { resources } from '../src/data/resources.js';

// import.meta.glob is Vite-only; load override files with plain fs instead.
const overridesDir = path.join(process.cwd(), 'src', 'data', 'resources-ne');
const OVERRIDES = {};
if (fs.existsSync(overridesDir)) {
  for (const file of fs.readdirSync(overridesDir)) {
    if (!file.endsWith('.js')) continue;
    const slug = file.replace(/\.js$/, '');
    OVERRIDES[slug] = (await import(pathToFileURL(path.join(overridesDir, file)).href)).default;
  }
}

function isFullyLocalized(resource) {
  const ne = resource?.ne ?? OVERRIDES[resource?.slug];
  return Boolean(ne?.sections && ne.title && ne.description);
}
function neOf(resource) {
  return resource?.ne ?? OVERRIDES[resource?.slug] ?? null;
}

const nonDraft = resources.filter((r) => !r.draft);
const localized = nonDraft.filter((r) => isFullyLocalized(r));
const remaining = nonDraft.filter((r) => !isFullyLocalized(r));

console.log(`non-draft: ${nonDraft.length}`);
console.log(`fully localized: ${localized.length}`);
console.log(`remaining (material English): ${remaining.length}`);
if (remaining.length) remaining.forEach((r) => console.log('  REMAINING ' + r.slug));

// Structural parity for localized ones
const problems = [];
let tables = 0, visuals = 0, callouts = 0, checked = 0;
for (const r of localized) {
  const ne = neOf(r);
  if (!ne) continue;
  checked++;
  if (r.sections && ne.sections) {
    if (r.sections.length !== ne.sections.length) problems.push(`${r.slug}: sections ${r.sections.length}->${ne.sections.length}`);
    const structural = ['table', 'photo', 'visuals', 'visualsAfter', 'callouts', 'subsections', 'diagram'];
    r.sections.forEach((sec, i) => {
      const nes = ne.sections[i];
      if (!nes) { problems.push(`${r.slug}: missing ne section ${i}`); return; }
      for (const key of structural) {
        if (sec[key] !== undefined && nes[key] === undefined) problems.push(`${r.slug}: section ${i} lost '${key}'`);
      }
      if (sec.table) tables++;
      if (sec.visuals || sec.photo || sec.diagram) visuals++;
      if (sec.callouts) callouts++;
    });
  }
  if (r.faqs && ne.faqs && r.faqs.length !== ne.faqs.length) problems.push(`${r.slug}: faqs ${r.faqs.length}->${ne.faqs.length}`);
  if (r.recommendedLinks && ne.recommendedLinks && r.recommendedLinks.length !== ne.recommendedLinks.length) problems.push(`${r.slug}: recommendedLinks ${r.recommendedLinks.length}->${ne.recommendedLinks.length}`);
}

console.log(`structurally checked: ${checked}`);
console.log(`preserved tables: ${tables}, visual blocks: ${visuals}, callout blocks: ${callouts}`);
if (problems.length) {
  console.log(`STRUCTURAL PROBLEMS: ${problems.length}`);
  problems.slice(0, 40).forEach((p) => console.log('  ' + p));
} else {
  console.log('STRUCTURAL PROBLEMS: 0');
}
