import { resources } from '../src/data/resources.js';

const nonDraft = resources.filter((r) => !r.draft);
const localized = nonDraft.filter((r) => r.ne?.sections && r.ne?.title && r.ne?.description);
const remaining = nonDraft.filter((r) => !(r.ne?.sections && r.ne?.title && r.ne?.description));

console.log('total resources:', resources.length);
console.log('non-draft:', nonDraft.length);
console.log('fully localized (ne.sections+title+desc):', localized.length);
console.log('remaining:', remaining.length);

console.log('\nLOCALIZED SLUGS:');
localized.forEach((r) => console.log('  ' + r.slug));

console.log('\nREMAINING SLUGS (deterministic order):');
remaining.forEach((r, i) => console.log(`${String(i + 1).padStart(3)}. ${r.slug}`));
