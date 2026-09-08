# Technical SEO Backlog — samratfrptraders.com

**Date:** 2026-09-09 · **Status:** none of these have been implemented. Read-only audit.

Tiers: **1** blockers / highest-value · **2** commercial · **3** supporting · **4** low-confidence or cosmetic.

---

## Tier 1

### T1-01 · Connect Search Console and GA4
**Problem:** No GSC, no GA4, no rank or backlink tooling. Every hypothesis in this audit is unvalidated, and no one can see which of the 564 URLs are indexed or what they earn.
**Action:** Verify GSC (domain property, covering apex + www). Connect GA4. Confirm enquiry/WhatsApp/phone events are tracked.
**Acceptance:** GSC verified and reporting; GA4 receiving organic sessions; at least one conversion event firing.
**Risk:** None. Read-only instrumentation.
**Blocks:** T1-03, and validation of everything else. **Evidence:** E1.
**Note:** Sitemap submission and indexing requests are **excluded** — the engagement reserves those for separate approval.

### T1-02 · Certificate renewal monitoring
**Problem:** Both certificates were reissued **2026-09-01**, consistent with a repair after a lapse. **HSTS `max-age=63072000` (2 years) is active**, so any future lapse hard-blocks every visitor and crawler with no bypass. Current certs expire **2026-11-30**.
**Action:** Confirm Vercel auto-renewal is active for **both** apex and `www` (they are separate certificates with separate SANs). Add external expiry monitoring with alerting ≥14 days before expiry.
**Acceptance:** Renewal confirmed for both hosts; alert tested.
**Risk:** None — monitoring only.
**Evidence:** E10 (were outage dates observed?).
**Why Tier 1:** Under HSTS this is the one failure mode that takes the entire site offline for everyone at once.

### T1-03 · Resolve the 96-URL near-duplicate set
**Problem:** 48 articles (96 bilingual URLs, **17% of the indexable site**) share **58–60%** five-gram overlap across chemically unrelated products, ~460 words each. Measured, not estimated. Aggregate quality risk extends beyond these URLs.
**Action:** Owner decides Option A (consolidate 48→6 with 301s — recommended), B (noindex, retain), or C (rewrite all 48).
**Acceptance:** Decision logged; if A — hubs exist first, redirects verified 301 (not 302/404), internal links rewritten to targets, sitemap regenerated clean, both languages treated identically.
**Risk:** **Medium — highest-risk item in this plan.** Careless removal discards equity and creates crawl errors. Batch it, verify each batch, keep rollback.
**Blocked by:** T1-01 (need performance data) **and** E2 (owner decision). **Do not start without both.**

---

## Tier 2

### T2-01 · Build 6 missing category hubs
**Problem:** 8 families defined; only `polyester-resins` and `epoxy-casting-resins` return 200. Six 404. **20 of 31 products have no category landing page.** Not broken links — the index filters client-side — simply absent.
**Action:** Create `hardeners-catalysts`, `frp-allied-products`, `industrial-specialty-resins`, `sheet-grade-resins`, `fire-retardant-resins` (+ conditional `gelcoat`), bilingual, patterned on the two working hubs.
**Acceptance:** 200 in NE + EN; correct canonical + hreflang pair; `BreadcrumbList`; real `<a>` links from catalogue index; products link up; release gate 0 errors; parity preserved (282→288 per language).
**Risk:** Low — two working templates exist.
**Evidence:** E6 for allied products. **Constraint:** no fire-performance claim on `fire-retardant-resins` unless quoted from supplier TDS with attribution.

### T2-02 · Convert 6 product PNGs to WebP
**Problem:** `wax-polish` 2.25 MB, `paint-brushes` 2.24 MB, `styrene-monomer` 2.19 MB, `cobalt-octoate` 2.13 MB, `soap-stone-powder` 2.08 MB, `nc-thinner` 2.05 MB — **~12.9 MB total**. Every other catalogue image is WebP at ~60 KB. These six are the only unconverted assets.
**Action:** Convert to WebP at existing 1254×1254; update `products.js` `src` and dimensions; keep originals until verified.
**Acceptance:** Each <200 KB; visually unchanged at catalogue and detail size; release-gate large-asset warnings clear for these six; no CLS regression (currently 0).
**Risk:** Low. **Note:** these are also the six products in D1 — sequence with T1-03 to avoid double-touching.

### T2-03 · Fix EN 404 routing
**Problem:** Release gate warns the EN 404 exists only at `/en/404/` (nested). Vercel by default serves a single root `/404.html` for unmatched routes, so an unmatched `/en/*` URL will likely render the **Nepali** 404 to an English visitor.
**Action:** Add a `vercel.json` route so unmatched `/en/*` serves `/en/404/index.html`. Config already declares a rule at position 3 — verify it actually applies in production.
**Acceptance:** A deliberately invalid `/en/does-not-exist/` returns HTTP 404 **and** English content, verified on the deployed domain.
**Risk:** Low–Medium — routing changes can affect valid URLs. Verify a sample of real `/en/` pages still resolve after deploy.

---

## Tier 3

### T3-01 · Replace development-flavoured 404 copy
**Problem:** Production 404 reads *"404 Page not found. The requested page is not part of this development foundation."* — scaffolding language on a live commercial site.
**Action:** Replace with brief, helpful copy and links to `/products/`, `/applications/`, `/contact/`. Both languages.
**Acceptance:** No "development foundation" string in built output; both 404s keep `noindex`.
**Risk:** None.

### T3-02 · Complete TDS/SDS for the 6 allied products
**Problem:** Coverage is 25/31. The six gaps are exactly the six D1 products — thinnest content on the least-documented items.
**Action:** Obtain documents from supplier; add to `documents[]`.
**Acceptance:** Coverage 31/31; release-gate TDS/SDS warnings cleared.
**Risk:** None technically. **Blocked by E6 — entirely owner/supplier dependent.**
**Constraint:** No technical, safety, handling or storage claim for these products may be published until the documents exist. Absence of documentation is not licence to generalise.

### T3-03 · Verify internal-link distribution (V1–V5)
**Problem:** `INTERNAL_LINK_MAP.md` §4 lists five unmeasured questions — orphans, resource→product link volume, templated-family self-linking, anchor distribution.
**Action:** Crawl rendered HTML; produce the counts.
**Acceptance:** V1–V5 answered with figures.
**Risk:** None — analysis only. **Should precede T1-03.**

---

## Tier 4

### T4-01 · Single-hop `http://www` redirect
`http://www.samratfrptraders.com/` currently takes two hops (→ `https://www` → `https://` apex). One hop is marginally cleaner.
**Risk:** Low, but it touches the redirect chain of a live site for negligible gain. **Only bundle with other routing work; not worth a standalone deploy.**

### T4-02 · Review advertised reading times
Templated articles claim "5 min read" for ~460 words (≈2 min). Minor accuracy issue.
**Note:** resolved automatically if T1-03 Option A proceeds. Do not fix separately first.

---

## Explicitly NOT recommended

| Item | Why |
|---|---|
| Favicon changes | **No defect found.** All assets 200, valid types, 48×48 present, stable paths, robots-allowed. Changing it would reset the recrawl clock for no reason. See `FAVICON_AUDIT_AND_FIX_PLAN.md` |
| `robots.txt` changes | `Allow: /` + sitemap is correct |
| Canonical / hreflang changes | Verified reciprocal across 279 pairs. **Do not touch** |
| Sitemap restructuring | Accurate; 564 URLs, no legacy paths, no 404s found |
| Schema expansion | Already truthful and comprehensive. Do not add ratings, reviews, offers, prices, availability or certifications — none are verified |
| JS framework change | 4.9 KB total. Nothing to fix |
| Hero/ambient video removal | 4.12 MB is heavy, but it is approved design work outside SEO scope. Flag only |
| Sitemap submission / indexing requests | Requires separate approval per engagement terms |

---

## Sequencing

| Order | Items | Gate |
|---|---|---|
| 1 | T1-01, T1-02 | none — start immediately on approval |
| 2 | T2-01 (one hub first), T2-02, T3-01 | approval |
| 3 | T3-03, remaining T2-01 hubs | step 2 reviewed |
| 4 | T2-03 | approval; verify carefully |
| 5 | **T1-03** | **T1-01 data + E2 + hubs live** |
| 6 | T3-02, T4-01, T4-02 | evidence arrival |

**T1-03 is deliberately last despite being Tier 1.** It is the highest-impact and highest-risk change, and it should not be executed blind — it needs performance data from T1-01 and hubs from T2-01 to redirect into.

---

## Pre-implementation note

The production worktree currently holds **another agent's uncommitted work**: modified `BrandFilm.astro`, `Base.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, plus untracked `HomeExperience.astro` and `home-experiment.css`. `main` is at `94296b3`.

**Resolve or stash that work before starting any batch here**, so SEO changes are not entangled with unrelated design work in the same commits.
