# SEO Decisions Log — samratfrptraders.com

Append-only record of decisions, who made them, and the evidence behind them. Each entry is dated. **No decision here has been implemented** — Phase 1 is read-only and awaits approval.

---

## 2026-09-09 · Phase 1 audit

### D-001 · Target domain corrected to `samratfrptraders.com`
**Decision:** Audit `samratfrptraders.com` (Nepal), not `samratfrptraders.in`.
**Evidence:** `samratfrptraders.in` returns NXDOMAIN from three independent resolvers (ISP, Google `8.8.8.8`, Cloudflare `1.1.1.1`); no NS records; no HTTP response; no repository on GitHub account `bhapag` (which holds exactly two Samrat repos — `SamratFRPTraders` → `.com`, and `SamratPolyResin` → `samratpolyresins.in`).
**Decided by:** Business owner, confirming the `.in` reference was a typo.
**Consequence:** All India-specific framing in the original brief (Indian SERPs, GST, "trader in India", Indian city pages) discarded as out of scope.
**Status:** Settled.

### D-002 · Scope is the Nepal trader entity
**Decision:** Target only verified trader / supplier / distributor / importer and FRP-material procurement intent, for Nepal. Biratnagar for local targeting, Nepal-wide for supply demand.
**Evidence:** Repository business-truth data (M/s SAMRAT F.R.P TRADERS, Ward No. 2 Tinpani Chowk, Biratnagar); release-gate business-truth check enforces non-manufacturer positioning; independent customs data (148 import/export records since 2023-03-10) corroborates the importer role.
**Decided by:** Business owner.
**Status:** Settled.

### D-003 · `samratpolyresins.in` retains manufacturer-led resin intent
**Decision:** Manufacturer intent, proprietary grades and grade-level specification remain with `samratpolyresins.in`. This site cites its TDS/SDS rather than reproducing them.
**Evidence:** Current implementation already links out to `samratpolyresins.in` for TDS/SDS on 25 of 31 products — honest and correct behaviour. Cannibalisation risk assessed as **low** (different countries, different commercial roles).
**Decided by:** Business owner.
**Residual risk:** If the manufacturer domain publishes guides on the same materials, the templated articles here would compete and would likely lose. D-006 removes this as a side effect.
**Status:** Settled.

### D-004 · No second trader property
**Decision:** Do not build or register an additional Samrat trader domain. Consolidate on `.com`.
**Evidence:** A second property would split authority three ways and duplicate the role `.com` already holds.
**Decided by:** Analyst recommendation; owner deferred the related question ("answer after you pick the target"), which D-001 rendered moot.
**Status:** Recommended, not contested.

### D-005 · Favicon workstream stays **open — monitoring**; no patch
**Decision:** Propose no favicon code change. Monitor instead.
**Evidence:** All seven diagnostic criteria pass — four `<head>` declarations, five assets returning 200 with valid MIME types, explicit 48×48 PNG, stable non-hashed URLs, `robots.txt Allow: /`, homepage indexable, no conflicting declarations. Root cause assessed as external: recrawl lag, most likely compounded by the probable pre-1-Sep-2026 HTTPS outage.
**Decided by:** Analyst finding; owner instructed the workstream not be closed.
**Status:** **Open — monitoring.** Re-check after GSC connection + 30 days. Contingency path in `FAVICON_AUDIT_AND_FIX_PLAN.md` §5.
**Note:** Changing a correct implementation would reset the recrawl clock and destroy the stable URL favicon caching depends on.

### D-006 · 96 templated URLs recommended for consolidation — **PENDING OWNER DECISION**
**Decision proposed:** Option A — consolidate 48 articles into 6 substantive guides, 301-redirecting 42 retired slugs.
**Evidence:** `<main>`-only 5-gram Jaccard overlap of **58.2% / 58.2% / 59.8%** between `cobalt-octoate-what-is`, `styrene-monomer-what-is` and `nc-thinner-what-is` — three chemically unrelated products — at 459–463 words each. Control group (comparison articles) measured **1.7–2.2%** overlap at 516–699 words, confirming the site *can* produce differentiated content and that this set does not. Affected: 6 products × 8 article types = 48 articles = **96 bilingual URLs = 17% of the indexable site**.
**Status:** ⚠ **PENDING — requires E2.**
**Conflict declared:** This reverses previously approved production work (the "96 bilingual Knowledge Hub pages"). The recommendation rests on measurement, not preference. **Nothing will be changed without explicit approval.**
**Blocked by:** E1 (performance data — do these URLs earn anything?) **and** E2 (owner decision). Deliberately sequenced last despite Tier 1 status, because it is the highest-risk change in the plan.

### D-007 · Build 6 missing category hubs
**Decision proposed:** Create `hardeners-catalysts`, `frp-allied-products`, `industrial-specialty-resins`, `sheet-grade-resins`, `fire-retardant-resins`, and conditionally `gelcoat`.
**Evidence:** 8 families defined in `src/data/products.js`; only `polyester-resins` and `epoxy-casting-resins` return 200. Six return **404**, leaving **20 of 31 products with no category landing page**. Not a broken-link defect — the catalogue index filters client-side (0 broken links across 34,516).
**Status:** Recommended, awaiting approval. Highest-value unblocked work.
**Condition on `gelcoat`:** only one product in family — build only with genuinely distinct scope, else skip and strengthen the product page. Either outcome acceptable; record which.

### D-008 · No location pages beyond the single real address
**Decision:** No Kathmandu / Pokhara / Birgunj / "near me" city pages.
**Evidence:** One evidenced location — Ward No. 2, Tinpani Chowk, Biratnagar. Corroborated by the business's own Facebook ("Biratnagar-2"). City-swapped pages would be doorway pages.
**Status:** Settled unless E7 proves additional facilities exist.

### D-009 · No fabricated trust signals
**Decision:** No ratings, reviews, offers, prices, availability, certifications, client counts, staff counts, warehouse capacity or delivery guarantees in content or schema.
**Evidence:** None verified. Existing schema (Organization, LocalBusiness, BreadcrumbList, FAQPage, Article, Product, VideoObject) is already truthful; it must stay that way.
**Status:** Standing constraint.

### D-010 · Measurement precedes the largest changes
**Decision:** Connect GSC + GA4 (T1-01) before executing D-006.
**Evidence:** No GSC, GA4, rank tracker or backlink tool available. All performance-based findings in this audit are hypotheses. The brief's requested 28-day / 3-month / YoY comparisons could not be produced and **no figures were invented**.
**Status:** Recommended, awaiting approval.
**Excluded from this decision:** sitemap submission and indexing requests, which the engagement reserves for separate approval.

### D-011 · Entity consolidation prioritised over content production
**Decision:** Treat GBP + NAP consolidation as the highest-ROI workstream, above further content.
**Evidence:** Competitive discovery found Nepal FRP supply intent is served largely by marketplaces (IndiaMART, TradeIndia), directories (Yellowpages Nepal), Facebook pages and downstream fabricators — **not** by specialist supplier websites. Meanwhile the entity is fragmented: "Samrat FRP **Traders**" (site, Instagram) vs "Samrat FRP **Trading**" (Facebook, Yandex Maps, customs data), a second phone (9807317791) appearing against the site's 9805526904, and no GBP found.
**Status:** Recommended. Blocked by E3, E4, E5, E7, E8, E11.
**Caveat recorded:** competitor discovery ran on **US-based search**, which cannot render `google.com.np`. Directional only; E12 required to verify.

### D-012 · Production worktree contamination flagged, not touched
**Decision:** Take no action on another agent's in-flight work.
**Evidence:** Worktree at `C:\Users\harmy\Documents\Codex\samrat-frp-recovery-audit-20260830` has uncommitted modifications to `BrandFilm.astro`, `Base.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, plus untracked `HomeExperience.astro` and `src/styles/home-experiment.css`. `main` at `94296b3`.
**Status:** Flagged. Should be resolved before any SEO implementation batch, to avoid entangling unrelated changes in the same commits.

### D-013 · Audit error recorded
**Decision:** Record a mistake made during the audit, for traceability.
**What happened:** A sitemap URL was reported as returning 404 (`/resources/uv-resin-applications/`). On verification, that slug was **never in the sitemap** — it was constructed by guessing rather than taken from the extracted list. The real slug is `uv-resin-buyer-guide`. **No sitemap 404 exists.**
**Correction:** The site's 404 handling is correct. The one-off template-suffix pages were then verified as healthy (`gp-white-resin-buyer-guide`: 495 words, 2.2% overlap), confirming remediation scope is exactly the 96 URLs and no broader.
**Status:** Corrected before delivery. Logged because an audit that hides its own errors is not trustworthy.

---

## Pending decisions requiring the owner

| ID | Decision | Evidence | Blocks |
|---|---|---|---|
| **D-006** | Consolidate / noindex / rewrite the 96 URLs | E1, E2 | Largest single change in the plan |
| D-007 | Approve 6 category hubs; decide `gelcoat` build-or-skip | — | Highest-value unblocked work |
| D-010 | Approve GSC/GA4 connection | — | Everything measurable |
| D-011 | Confirm name (E3), phone (E4), GBP (E5), location (E7) | E3, E4, E5, E7 | All entity work |
| — | Approve first implementation batch | — | Implementation start |

---

## Log conventions

- Append only. Never rewrite or delete an entry.
- Every entry: decision, evidence, decider, status.
- Mark reversals explicitly and link the superseded entry.
- Record conflicts with previously approved work openly (see D-006).
- Record analyst errors (see D-013).

---

## 2026-09-09 · Overnight execution batch

### D-014 · Gelcoat category hub not created (confirmed)
**Decision:** No `/products/gelcoat/` hub. The route intentionally returns 404.
**Evidence:** The Gelcoat family contains exactly one product, GP Gelcoat Resin,
which has its own product page with supplier TDS/SDS. A hub over a single product
would restate that page — the same thin-duplicate pattern this engagement removed
from the Knowledge Hub. The family remains reachable: it is listed on the catalogue
index, filterable by its category chip, and linked from the header mega-menu to its
catalogue anchor.
**Side effect (deliberate):** keeping Gelcoat non-indexable leaves exactly one entry
in the layout's "Also in our range" column, so that column stays populated rather
than rendering an empty heading.
**Revisit if:** more gelcoat grades are stocked, at which point a hub has something
to differentiate.
**Status:** Settled.

### D-015 · Floating WhatsApp made product-specific without touching the layout
**Decision:** Upgrade the site-wide floating WhatsApp button on product pages from
`ProductPage.astro` at runtime, rather than editing `src/layouts/Base.astro`.
**Evidence:** The button is rendered by the layout with the generic message, so on a
product page it carried no product context. `Base.astro` has uncommitted in-progress
changes by another worker; editing it would risk their work and would block a clean
merge. The enhancement is additive, runs after `DOMContentLoaded`, and degrades to
the existing generic behaviour if the button is absent or its markup changes.
**Verified:** English and Nepali product pages now produce the product-specific
message and an aria-label naming the product; non-product pages keep the generic
message; the approved number 9779805526904 is unchanged.
**Status:** Implemented.

### D-016 · Product → application links still not fabricated
**Decision:** 21 of 31 product pages link to no application. Left as-is.
**Evidence:** `applicationsFor()` is a reverse lookup through each application's
`relatedProductSlugs`. No supplier-documented application data exists in the project
to ground new links: GP Clear Resin has TDS-derived `technicalHighlights` but no
application field, and Cobalt Octoate has zero technical highlights, consistent with
having no TDS/SDS on file.
**Why not filled:** creating these links would assert material suitability from
inference. Blocked on E6 (supplier TDS/SDS).
**Status:** Open, blocked on evidence.

### D-017 · "DP clear resin" and bisphenol categorisation left out of indexable content
**Decision:** Neither term is used in any published copy.
**Evidence:** "DP clear resin" appears nowhere in the repository — not a known grade.
Bisphenol Resin's supplier spec reads "Bisphenol A & epichlorohydrin based", which is
epoxy chemistry, but bisphenol-A also appears in vinyl ester and bisphenol-A fumarate
polyester resins. Partial spec data is not authority to re-file a chemical product.
**Status:** Both left unchanged pending owner/supplier confirmation.

---

## 2026-09-09 · Document library + hub batch

### D-018 · Bilingual TDS/SDS document library built at `/documents/` + `/en/documents/`
**Decision:** Collect every supplier-issued document into one bilingual procurement/QA
resource, derived from `products.js` rather than hand-listed.
**Evidence:** 25 of 31 products carry documents — 50 entries, 48 unique files. All 48
were verified before build (HTTP 200, `application/pdf`, non-zero body) and all 48
again after deployment from the live page. Documents are served from the existing
local mirrors under `/tds/` and `/sds/`, with the supplier URL as fallback.
**Honesty properties:** the 6 undocumented products (Cobalt Octoate, Styrene Monomer,
NC Thinner, Paint Brushes, Soap Stone Powder, Wax Polish) are named in their own
section; `reference`/`revision`/`date` render as "Not published" where the supplier
published none; GP Clear Resin and Unsaturated Polyester Resin are shown as sharing
one document set rather than as two documents.
**Status:** Implemented, deployed, indexed by Google the same day.

### D-019 · Category hubs strengthened rather than multiplied
**Decision:** Improve the 7 existing hubs; create no new category page. Gelcoat still
has no hub (D-014 unchanged).
**Evidence:** The hubs were the thinnest pages on the site (146–263 words) while
carrying 247 inbound internal links each — more than any product page. They are now
347–635 words (EN) with a grade-comparison matrix built only from published
`technicalHighlights`, gated so a property appears only when ≥2 grades in the family
publish it. Families that cannot support an honest comparison render no table.
**Not done:** no application-suitability claims, no invented FAQs, no shared
paragraphs between hubs.
**Status:** Implemented and deployed.

### D-020 · Two false documentation claims corrected
**Decision:** Remove the "for every product" documentation claim wherever it appeared.
**Evidence:** About stated supply "with supplier-issued TDS and SDS documentation for
every product" and "Direct access to the Technical Data Sheet and Safety Data Sheet
for every product"; both catalogue indexes stated "Every product page carries ...
links to the supplier's technical data sheets and safety data sheets". 6 of 31
products have no supplier document, so all three statements were false. Replaced with
build-time counts that cannot go stale.
**Status:** Corrected in both languages.

### D-021 · Mobile clipping defect found by measurement, not by looking
**Decision:** Record a defect that shipped and was fixed within the same session.
**What happened:** `.doc-family` is a grid, so `.doc-product` inherited
`min-width: auto` and the nowrap document table stretched each card to 548px inside a
343px container. `.doc-table-scroll` therefore never scrolled, and `main`'s
`overflow-x: hidden` clipped roughly 204px — the entire "Open PDF" column — on a
375px viewport. The page showed no horizontal scrollbar, and screenshots looked
correct; only DOM geometry exposed it.
**Fix:** `min-width: 0` on the grid item, plus `max-width: 100%` on the scroller.
Verified live: 25/25 tables scroll, download column reachable.
**Cross-check:** the hub tables do not share the fault — `.hub-compare` is
block-level and its scroller already scrolled correctly.
**Status:** Fixed and verified in production.

### D-022 · The non-indexed 200 is a crawl problem, not a redirect artefact
**Decision:** Record the actual Search Console reason breakdown, correcting an
earlier analyst hypothesis.
**Hypothesis that was wrong:** that most of the ~200 non-indexed URLs would be
"Page with redirect" left by the 96-URL consolidation.
**Actual breakdown (Search Console, 2026-09-09):** Page with redirect **3**;
Discovered – currently not indexed **169**; Crawled – currently not indexed **28**.
**What this means:** Google knows about 169 URLs it has chosen not to crawl at all.
That is a crawl-budget/authority signal, not a redirect artefact and not a
consolidation side effect. It strengthens, on different evidence, the standing
recommendation not to add pages: new URLs would join the discovered-not-crawled
queue. Entity consolidation and external signals (D-011) remain the binding
constraint.
**Status:** Recorded. Supersedes the earlier redirect hypothesis.

### D-023 · No analytics exists on this site
**Decision:** Record that GA4 validation could not be performed, and why.
**Evidence:** No `gtag`, `dataLayer`, GTM container, measurement ID or any
third-party tag exists anywhere in the repository or in the live HTML — verified by
repo grep and by fetching the production page. There is no `enquiry_form_submit`
event because there is no analytics implementation at all.
**Consequence:** no key event could be verified, and no personal data can be leaking
into analytics events because no events are sent. Setting up GA4 requires owner
account access and was not invented.
**Status:** Open, blocked on owner-provided GA4 property and measurement ID.
