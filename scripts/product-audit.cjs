const fs = require('fs');
const path = require('path');

const dist = path.join(process.cwd(), 'dist');

const slugs = [
  'lamination-resin', 'gp-clear-resin', 'gp-white-resin', 'gp-quartz-resin',
  'button-grade-resin', 'gp-yellow-resin', 'sheet-grade-yellow-resin', 'roof-light-resin',
  'fire-retardant-resin', 'iso-fire-retardant-resin', 'gp-gelcoat-resin',
  'frp-polyester-pigment', 'glass-fiber-mat', 'clear-casting-resin', 'epoxy-art-resin',
  'uv-resin', 'epoxy-hardener', 'mekp-hardener', 'dmc-smc-resin', 'polyester-putty-resin',
  'marble-resin', 'vinyl-ester-resin', 'fiberglass-epoxy-resin', 'bisphenol-resin',
];

const counts = {
  h1: 0, descriptor: 0, specs: 0, tds: 0, sds: 0, faq: 0, related: 0,
  resources: 0, apps: 0, seoTitle: 0, metaDesc: 0, canonical: 0, hreflang: 0,
  xdefault: 0, schema: 0, cta: 0, noindex: 0,
};
let pages = 0;
const problems = [];

const NE = ['', '/en'];
for (const prefix of NE) {
  for (const slug of slugs) {
    const file = path.join(dist, prefix, 'products', slug, 'index.html');
    if (!fs.existsSync(file)) {
      problems.push(`MISSING PAGE: ${prefix}/products/${slug}/`);
      continue;
    }
    pages++;
    const html = fs.readFileSync(file, 'utf8');
    if (/<h1[^>]*>/.test(html)) counts.h1++;
    if (/product-descriptor/.test(html)) counts.descriptor++;
    if (/spec-table/.test(html)) counts.specs++;
    if (/\/tds\/[^"']+\.pdf/.test(html)) counts.tds++;
    if (/\/sds\/[^"']+\.pdf/.test(html)) counts.sds++;
    if (/class="faq-item"/.test(html)) counts.faq++;
    if (/Related products|सम्बन्धित उत्पादनहरू/.test(html)) counts.related++;
    if (/(Technical resource hub|प्राविधिक जानकारी केन्द्र)/.test(html) || /\/resources\//.test(html)) counts.resources++;
    if (/app-card/.test(html) || /app-grid/.test(html)) counts.apps++;
    if (/<title>[^<]+/.test(html)) counts.seoTitle++;
    if (/name="description" content="[^"]+"/.test(html)) counts.metaDesc++;
    if (/rel="canonical"/.test(html)) counts.canonical++;
    if (/hreflang="en-NP"/.test(html) && /hreflang="ne-NP"/.test(html)) counts.hreflang++;
    if (/hreflang="x-default"/.test(html)) counts.xdefault++;
    if (/"@type":"Product"/.test(html) && /"@type":"BreadcrumbList"/.test(html)) counts.schema++;
    if (/(Request a quote|कोटेशन माग्नुहोस्)/.test(html)) counts.cta++;
    if (/noindex, nofollow/.test(html)) counts.noindex++;
    // hygiene per product page
    if (/₹/.test(html)) problems.push(`${prefix}/products/${slug}/ contains ₹`);
    if (/\bMOQ\b/.test(html)) problems.push(`${prefix}/products/${slug}/ mentions MOQ`);
    if (/(225 kg|50 kg drums|35 kg PET)/.test(html)) problems.push(`${prefix}/products/${slug}/ mentions India packaging`);
    if (/(we manufacture|manufactures premium|our factory|our plant)/i.test(html)) problems.push(`${prefix}/products/${slug}/ manufacturer claim`);
    if (/\+91|GSTIN/.test(html)) problems.push(`${prefix}/products/${slug}/ India contact leakage`);
  }
}

console.log(`pages audited: ${pages}/48`);
for (const [key, value] of Object.entries(counts)) console.log(`${key}: ${value}`);
if (problems.length) {
  console.log(`PROBLEMS: ${problems.length}`);
  problems.slice(0, 30).forEach((p) => console.log(' -', p));
} else {
  console.log('PROBLEMS: 0');
}
