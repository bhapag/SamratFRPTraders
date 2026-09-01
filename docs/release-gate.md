# Local release gate

One command answers "is this build safe to deploy":

```sh
npm run check:release
```

(`npm run release:gate` is an alias for the same thing.) This builds the
site, then runs every check below against the real `dist/` output. No
Vercel, DNS, Search Console, GA4, or other external/credentialed service is
required — everything here runs fully offline.

If you already have a fresh `dist/` and just want to re-run the checks
without rebuilding: `node scripts/release-gate/run.mjs`.

## What a failure means

Every check module reports at one of three levels:

- **ERROR** — a real, objectively-provable defect. Any ERROR makes the gate
  exit non-zero (`RESULT: FAIL`). Fix it or get a project-lead decision
  before deploying.
- **WARNING** — worth a human look, but not a proven defect on its own
  (ambiguous business-truth matches, "config verified but not live-Vercel
  verified" caveats, orphaned assets, etc.). Never blocks the gate by
  itself.
- **INFO** — context/counts, no action implied.

## What's checked, and where

| Module | Covers |
| --- | --- |
| `scripts/check-links.mjs` (existing, reused) | Internal href/src resolution across the whole build |
| `scripts/resource-i18n-audit.mjs` (existing, reused) | Strict Nepali/English narrative parity for every published resource article |
| `scripts/application-i18n-audit.mjs` (existing, reused) | Same, for application guides |
| `release-gate/build-routes.mjs` | Build integrity (no zero-byte HTML, data-derived page-count floor), required system routes, product/application/resource/category bilingual route pairs, retired `/ne/` prefix absence, `<html lang>` sanity |
| `release-gate/seo-schema.mjs` | Title/description/canonical/robots/OG/Twitter tags per page, hreflang reciprocity (ne-NP/en-NP/x-default) across every bilingual pair, sitemap host/legacy-URL safety, JSON-LD parses + the `Product.manufacturer` business-truth guard |
| `release-gate/indexing-safety.mjs` | Production crawl/indexing safety: public pages must be indexable; only 404 pages remain noindex |
| `release-gate/business-truth.mjs` | Hard-fail scan for unsupported manufacturer/pricing/India-contact claims, an "ambiguous — human review" bucket for context-sensitive wording, business-identity presence, and contact-data drift (tel/mailto/wa.me vs. `site.js`) |
| `release-gate/documents-assets.mjs` | Customer catalogue CTA vs. supplier technical-source PDF (kept explicitly distinct), per-product TDS/SDS local-mirror integrity (derived from each product's own `documents[].url`, not guessed from its slug), every referenced image/video/pdf/font resolves, local-machine/localhost/Vercel-preview path-leak scan, orphaned `public/` asset candidates |
| `release-gate/redirects.mjs` | `vercel.json` syntax/self-consistency (loops, duplicate sources, dead-end destinations, the retired UPR route not competing with a live page) — explicitly labeled CONFIG VERIFIED, not LIVE VERCEL VERIFIED |
| `release-gate/secrets-scan.mjs` | Git-tracked source scanned for credential-shaped strings (never prints the matched value, only file/line/type) |
| `release-gate/perf-sanity.mjs` | dist size profile, largest media assets, byte-identical large-asset duplicates |
| `npm audit` (wrapped in `run.mjs`) | Dependency vulnerabilities |

## Production indexing safety

`release-gate/indexing-safety.mjs` asserts the production state: public
pages declare `index, follow`, `robots.txt` permits crawling, and only the
non-canonical 404 pages retain `noindex, nofollow`.

## Browser/production-simulation QA

The deterministic checks above are everything `npm run check:release`
covers. Real-browser QA (long-article visibility, product search/filter,
FAQ single-open behavior, language-switch context, contact form, mobile
responsive, console/network errors) is **not** wired into an automated
`npm` script — this machine's bundled Playwright Chromium doesn't run on
macOS 13 ARM64, and adding Playwright as a project dependency just to work
around that would go against this repo's "no unnecessary dependencies"
convention for what is otherwise a zero-runtime-dependency static site.

Run it manually against a production build instead:

```sh
npm run build
npm run preview          # serves dist/ at http://localhost:4321 (or similar)
playwright-cli open http://localhost:<port>/ --browser=chrome --headed
```

Always pass `--browser=chrome` — never try to install/use the bundled
Chromium on this machine.

## Design notes for whoever touches this next

- Every check reads `dist/` and `src/data/*.js`, never anything hardcoded
  like a fixed page count — counts are derived from the live data files so
  the gate doesn't need updating every time a product/application/resource
  is added.
- The three reused existing scripts (`check-links.mjs`, the two
  `*-i18n-audit.mjs` scripts) don't reliably set a process exit code on
  failure — `run.mjs` parses their printed summary line instead of trusting
  the exit code alone. If you touch those scripts, keep their summary
  wording ("No broken internal links found." / "STRICT FAILURES: N")
  stable, or update the parser in `run.mjs` alongside it.
- `scripts/product-audit.cjs` is a pre-existing, now-superseded ad hoc
  script (hardcoded Windows path, hardcoded slug list) — left in place as
  history, not wired into the gate. `release-gate/documents-assets.mjs` and
  `release-gate/business-truth.mjs` cover the same ground properly.
