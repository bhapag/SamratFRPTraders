# Nepali Override Repair Rules (STRICT audit)

You are repairing Nepali (ne) resource-localization override files so they pass a
STRICT localization audit. Work ONLY on the slugs you were assigned.

## Files
- English originals: `src/data/resources.js` (a JS module: `export const resources = [ ... ]`).
- Overrides you edit: `src/data/resources-ne/<slug>.js` — each default-exports the `ne` object.
- DO NOT modify `resources.js`, any `.astro`, or any other slug's file.

## Find the English original
`grep` for `"slug": "<slug>"` in `resources.js`, then `read` that record (the object
that contains that slug). It is the source of truth for structure and technical values.

## The audit (`scripts/.i18n-strict.tmp.mjs`) checks, per non-draft resource:
1. `ne.title` / `ne.description` present if English has them, and NOT "material English".
2. `ne.seo.title`, `ne.seo.description` (ONLY if English `seo` has `description`),
   `ne.seo.ogTitle`, `ne.seo.ogDescription` present if English has them.
3. `quickFacts`: same key count as English; each ne key label must NOT be "material English"
   (values are EXEMPT — never flagged).
4. `recommendedLinks`: same length as English; each `href` MUST equal English href EXACTLY;
   `label`/`description` must NOT be "material English".
5. `sections`: same count/order as English; heading, body paragraphs, subsection headings/bodies,
   callout title/body/items, visual label/caption/title/alt, photo caption/alt must NOT be
   "material English". Structural keys (table/photo/visuals/visualsAfter/callouts/subsections/diagram)
   must be preserved.
6. `faqs`: same count; q and a localized.

## "material English" exact definition (this is what the audit flags)
A string is flagged material-English iff ALL of:
- non-empty, trimmed length >= 20, AND
- contains NO Devanagari (`[\u0900-\u097F]`), AND
- contains 4+ consecutive lowercase ASCII letters (`/[a-z]{4,}/`).
Technical/identifier strings that are essentially ALL-CAPS (e.g. "FRP", "MEKP", "ISO 9001:2015",
"GP") of <=26 chars are allowed to stay English. Technical VALUES (numbers, units, "450 cPs at
25 °C") are exempt and MUST be copied exactly.

Practical rule: any sentence/label >=20 chars MUST contain Devanagari. Technical terms
(FRP, UPR, MEKP, Gelcoat, TDS, SDS, CSM, viscosity, styrene, GP, ISO, DMC, SMC, PET) may stay
English inside Nepali sentences. Keep every inline HTML tag/link and every `href` EXACTLY as-is.

## Fix recipes (match your assigned failure strings)

### "missing ne.seo.title / ogTitle / ogDescription"
Add a top-level `seo` object to the ne export:
```js
seo: {
  title: "<Nepali SEO title>",
  ogTitle: "<Nepali og title>",
  ogDescription: "<Nepali og description>",
  keywords: [ /* copy EXACTLY from English seo.keywords, verbatim, same order */ ],
},
```
- Localize title/ogTitle/ogDescription into natural Nepali (technical terms may stay English).
- If the English `seo` also has a `description` field, include it localized too.
- If English `seo` has no `keywords`, omit it. Copy the keywords array VERBATIM (English keywords
  are not flagged by the audit, keep them unchanged).

### "ne.title material-English"
Replace `ne.title` with a Nepali title derived from the English `title`. Technical product terms
("ISO Fire Retardant Resin", "GP Quartz", "Bisphenol", "Fiberglass Epoxy", "Procurement
Checklist") may remain as English tokens, but the string overall must be Devanagari.

### "quickFacts key 'X' material-English"
In `ne.quickFacts`, find the key whose label is still English (the audit quotes it) and rename
ONLY that key to a localized Nepali label. Keep the VALUE exactly as-is (values are exempt and
must stay technical/unchanged). Do NOT change key count or values.

### "recommendedLinks[i].label material-English"
In `ne.recommendedLinks[i]`, localize ONLY the `label` to Nepali. Keep `href` EXACTLY equal to the
English href. Leave `description` as-is unless it is ALSO flagged; if you localize it, keep href
untouched.

### "sections[i].heading material-English" / "sections[i].subsections[j].heading material-English"
Localize that heading to Nepali.

### "sections[i].visuals[j].label / caption material-English"
Localize that label/caption to Nepali. Preserve `type`, `items`, and any other fields.

## BUSINESS TRUTH (never violate)
- Samrat FRP Traders = trader/supplier/importer/reseller — NEVER manufacturer/factory.
- Samrat Poly Resins, India = attributed supplier (keep as-is).
- No +91 phone numbers, no GST, no ₹ prices, no India MOQ/packaging/stock/delivery claims.
- No invented technical values; keep published values exactly.
- Keep potable-water / UV / compatibility caveats.

## Validate EACH file after editing
```bash
node --input-type=module -e "import('file:///C:/dev/samrat-frp-nepal-deepseek-test/src/data/resources-ne/<slug>.js').then(m=>console.log(m.default.title?'ok':'MISSING'))"
```
Expect `ok`. If it throws, fix the syntax.

Do NOT run the full audit script — other workers edit files concurrently and a mid-edit file
would crash its import. Validate only your own files individually.

## Report back
List each slug you fixed and a one-line note of what you changed, plus any slug you could not
resolve and the reason.
