# SEO Audit and Plan — samratfrptraders.com

**Date:** 2026-09-09 · **Phase:** 1 (read-only) · **Status:** awaiting approval before any implementation

Companion documents: `SEO_BASELINE.md` (measurements), `KEYWORD_INTENT_MAP.md`, `SITE_ARCHITECTURE_PLAN.md`, `COMPETITOR_GAP_ANALYSIS.md`, `INTERNAL_LINK_MAP.md`, `CONTENT_PRODUCTION_QUEUE.md`, `TECHNICAL_SEO_BACKLOG.md`, `ENTITY_AND_AUTHORITY_PLAN.md`, `SEO_MEASUREMENT_PLAN.md`, `SEO_DECISIONS_LOG.md`, `FAVICON_AUDIT_AND_FIX_PLAN.md`.

---

## 1. Headline assessment

The site is **technically well built and editorially over-extended.**

Engineering quality is genuinely good: valid TLS on both hostnames, clean 308 canonicalisation to the apex, permissive robots, an accurate 564-URL sitemap, correct canonical + `hreflang` reciprocity across 279 bilingual pairs, truthful schema, 0 broken internal links out of 34,516, 0 build errors, 0 npm vulnerabilities, 4.9 KB of JavaScript, CLS 0, and a fully correct favicon implementation. There is no crawl blocker and no indexing blocker.

The risk sits elsewhere. **17% of the indexable site (96 URLs) is near-duplicate templated content**, and simultaneously **20 of 31 products have no category landing page**. The site has scaled the content that carries the least commercial value while leaving the highest-value commercial surfaces unbuilt.

Nothing here requires a rebuild. The corrective work is subtractive on one side and additive on the other.

---

## 2. Likely causes of any visibility problem

Ranked by expected contribution. **All are hypotheses** until Search Console data is available — no ranking or traffic data was accessible for this audit.

### 2.1 Scaled near-duplicate content (highest risk)

48 articles (96 bilingual URLs) share **58–60% five-word-shingle overlap** across chemically unrelated products, at ~460 words each. Measured, not estimated.

This is the pattern Google's spam policy calls *scaled content abuse* and the helpful-content system targets: many pages generated from one template, differentiated mainly by a swapped product name, offering little independent value. The pages are honest — they explicitly decline to make unverified claims, which is correct given the trader position — but honesty without substance still leaves nothing for a searcher.

Risk is not limited to those 96 URLs. Site-wide quality signals are evaluated in aggregate; a 17% block of near-duplicate pages can depress the whole domain, including the good comparison articles and the commercial pages.

### 2.2 Missing commercial landing pages

Six of eight product families return 404 at their hub URL. There is no page targeting "gelcoat supplier", "MEKP hardener supplier", "cobalt octoate supplier", "FRP allied products", or "styrene monomer supplier" as a *category*. Individual product pages exist, but a category hub is usually the better match for supplier-intent queries and the natural recipient of internal link equity.

### 2.3 Domain and entity youth

Certificates issued 1 Sep 2026 and a `main` branch history concentrated in recent weeks indicate a recently launched or recently relaunched property. New domains take time to accumulate crawl frequency and trust. Some of the visibility gap is likely just age, and no intervention accelerates that materially.

### 2.4 A probable, now-resolved HTTPS outage

Both certificates were reissued 1 Sep 2026. With HSTS at a two-year max-age, a preceding lapse would have hard-blocked every visitor and every crawler with no bypass. If Googlebot encountered that window, crawling would have been suppressed and recovery lags the fix. Currently healthy; see §4.

### 2.5 Weak and inconsistent off-site entity

The business name is split across sources — *Samrat FRP Traders* (site, Instagram) versus *Samrat FRP Trading* (Facebook, Yandex Maps, customs data) — and a second phone number appears in third-party listings. No Google Business Profile was found. For a local supplier in Biratnagar, inconsistent NAP and a missing GBP are material.

### 2.6 No measurement

Without GSC or GA4, nobody can see which queries the site surfaces for, which pages are indexed, or which enquiries came from organic search. This does not itself harm rankings, but it makes every other decision guesswork.

---

## 3. Favicon: root cause and proposed repair

**There is no favicon defect. No repair is proposed.**

The brief stated the site "appears to lack a recognisable favicon in Google results." The implementation was audited in full against Google's documented requirements and passes every one:

| Google requirement | State |
|---|---|
| Icon declared in `<head>` | Yes — 4 declarations |
| URL returns 200 | Yes — all five assets |
| Valid image content type | Yes — `image/png`, `image/vnd.microsoft.icon` |
| Square, ≥48×48 | Yes — explicit 48×48 PNG, plus 180×180 apple-touch |
| Stable URL, no cache-busting | Yes — plain static paths |
| Not blocked by robots | Yes — `Allow: /` |
| Homepage crawlable/indexable | Yes |
| `/favicon.ico` present | Yes — 200, 3,609 B |
| Conflicting declarations | None |

The remaining explanations are outside the repository: Google had not yet recrawled and refreshed the favicon at the time of observation; or the icon was fetched during the probable pre-1-Sep HTTPS outage and cached as unavailable; or the observation predates the current implementation.

**Recommended action is monitoring, not code.** Detail and a contingency path in `FAVICON_AUDIT_AND_FIX_PLAN.md`. Committing a speculative favicon patch would change working code for no diagnosed reason and would reset the very recrawl clock the site is waiting on.

---

## 4. What the site currently lacks

1. Category hub pages for six of eight product families.
2. Search Console, analytics and conversion attribution.
3. A verified, consistent off-site entity (GBP, single legal name, single phone).
4. TDS/SDS for the six allied products (25/31 coverage) — these are also the six with templated articles, so the thinnest content sits on the least-documented products.
5. Substance in the 96 templated URLs.
6. WebP conversion for six ~2 MB product PNGs.
7. A production-appropriate 404 message (currently reads "not part of this development foundation").
8. An EN 404 route that Vercel will actually serve (`/en/404/` is nested; unmatched `/en/*` will likely fall to the Nepali 404).

---

## 5. Actual competitors

Full detail in `COMPETITOR_GAP_ANALYSIS.md`. Summary: for FRP raw-material procurement queries touching Nepal, the visible competition is **not** other specialist supplier websites. It is Indian B2B marketplaces (IndiaMART, TradeIndia), regional directories (Yellowpages Nepal), Facebook business pages, and a small number of Nepali fibreglass fabricators such as Kapilvastu Glassfiber Industry.

The strategic reading: **there is little direct website competition, and marketplace/directory listings plus a strong local profile may deliver more qualified enquiries than content volume.** This materially changes the plan — it argues for entity and commercial-page work over further article production.

*Caveat: discovery ran on US-based search and cannot render true `google.com.np` results. Treat as directional. Nepal-local verification is listed as an evidence requirement.*

---

## 6. Highest-value keyword clusters

Detail in `KEYWORD_INTENT_MAP.md`. Priority order, filtered to what this business can genuinely satisfy as a Nepal trader/supplier/importer:

1. **Category-level supply intent** — gelcoat, hardeners/catalysts (MEKP, cobalt octoate), FRP allied products, industrial/specialty resins, sheet-grade resins, fire-retardant resins. *Six missing hubs map directly onto this.*
2. **Brand and near-brand** — "Samrat FRP Traders", "Samrat FRP Trading", plus supplier-name variants. Currently undermined by the name split.
3. **Local procurement** — FRP materials Biratnagar / Nepal, resin supplier Nepal. Genuine, evidenced, single real location.
4. **Product-level supply intent** — the 31 existing product pages; refine rather than expand.
5. **Application-led selection** — FRP tanks, roofing sheets, lamination, hand lay-up. 37 application pages already exist.
6. **Comparison/explainer content** — already the strongest content on the site (~2% mutual overlap); extend this family, not the templated one.

**Do not target** manufacturer intent, "resin manufacturer", grade-specification queries, or India-geography queries. Samrat FRP Traders is a Nepal trader; those belong to `samratpolyresins.in` or to nobody.

---

## 7. Cross-domain overlap with samratpolyresins.in

The two properties have a clean natural split and should keep it.

| Intent | Owner | Rationale |
|---|---|---|
| Manufacturer intent, proprietary resin grades, formulation/TDS authority | **samratpolyresins.in** | It is the manufacturer entity; it publishes the TDS/SDS this site cites |
| Nepal procurement, trader/supplier/importer/stockist intent, multi-product sourcing, local enquiry | **samratfrptraders.com** | Distinct country, distinct commercial role |
| Grade-level technical specification | **samratpolyresins.in** | Only the manufacturer can assert it |
| Nepal application/selection guidance | **samratfrptraders.com** | Buyer-side, country-specific |

**Current cannibalisation risk: low.** The two sites serve different countries and different commercial roles, and this site already links out to `samratpolyresins.in` for TDS/SDS rather than reproducing specifications — which is both honest and the correct SEO behaviour.

**One risk to monitor.** The templated articles discuss product classes generically ("cobalt accelerator/promoter for suitable polyester cure systems"). If the manufacturer domain publishes its own guides on the same materials, the two could compete on identical informational queries. Because this site's versions are the weaker asset, they would likely lose — and deservedly. Consolidating them (§8) removes this risk as a side effect.

**Recommendation: do not build a second trader property, and do not mirror manufacturer content here.**

---

## 8. Pages to create, improve, consolidate or retain

### Consolidate / rewrite — 96 URLs

The six-product × eight-article Knowledge Hub set. Three options, in order of preference:

**Option A — consolidate to one substantive page per product (recommended).**
Fold each product's eight thin articles into a single genuinely useful guide, 301-redirecting the seven retired slugs to it. Reduces 48 articles → 6, and 96 URLs → 12. Each survivor must carry real buyer value: what it is, where it fits, what to ask a supplier, handling and storage constraints, and a link to the actual product page.

**Option B — noindex and retain.** Keep as navigational depth, remove from the index and the sitemap. Lower effort, lower reward; leaves an oddity for users.

**Option C — rewrite all 48 to unique substance.** Highest cost, and only justified if the six allied products carry commercial weight proportionate to the effort. Given they are also the six lacking TDS/SDS, this is hard to justify now.

**A decision is required from the owner** — these pages were previously approved production work, and this recommendation reverses that. It is made on measured evidence (58–60% mutual overlap), not preference. Nothing will be changed without explicit approval.

### Create — 6 category hubs (12 URLs bilingual)

`sheet-grade-resins`, `gelcoat`, `fire-retardant-resins`, `frp-allied-products`, `industrial-specialty-resins`, `hardeners-catalysts`. Two working hubs already exist as templates, so this is low-risk, mostly-mechanical work with the clearest commercial upside on the site.

### Improve

- **Product pages (31):** ensure each states supply position, packaging/enquiry route, and links to TDS/SDS where it exists.
- **Contact/About:** strengthen verifiable entity detail (registration, real photography) subject to owner-supplied evidence.
- **Comparison articles:** the best asset on the site. Extend this family.

### Retain unchanged

Applications (37), the ~157 non-templated resource articles, homepage, bilingual architecture, canonical/hreflang, sitemap, existing schema, all routes, contact-number architecture, BrandFilm section.

### Must NOT be created

- Any page claiming manufacturing, ISO certification, "authorised distributor", factory-direct supply, or guaranteed stock.
- City-swapped location pages. **One real location exists: Biratnagar-2.** No Kathmandu/Pokhara/Birgunj pages without an evidenced facility.
- India-geography pages.
- Grade-level specification pages duplicating manufacturer TDS.
- Any further templated article family.
- Price or availability pages, absent verified data.

---

## 9. Technical fixes

Full backlog with acceptance criteria in `TECHNICAL_SEO_BACKLOG.md`. Ranked:

| ID | Item | Tier |
|---|---|---|
| T1-01 | Connect Search Console + GA4 | 1 |
| T1-02 | Confirm cert auto-renewal and add expiry monitoring (HSTS makes lapses catastrophic) | 1 |
| T1-03 | Resolve the 96-URL duplicate-content decision | 1 |
| T2-01 | Build 6 missing category hubs | 2 |
| T2-02 | Convert 6 product PNGs (~2 MB each) to WebP | 2 |
| T2-03 | Fix EN 404 routing (`/en/*` → `/en/404/`) | 2 |
| T3-01 | Replace "development foundation" 404 copy | 3 |
| T3-02 | Complete TDS/SDS for 6 allied products (needs supplier documents) | 3 |
| T4-01 | Single-hop `http://www` redirect | 4 |

---

## 10. Evidence required from the business owner

No page will be written and no claim published without these. Missing evidence is never grounds to invent.

| # | Evidence | Blocks |
|---|---|---|
| E1 | GSC + GA4 access (or read-only export) | All measurement; validation of every hypothesis in §2 |
| E2 | Decision on the 96 templated URLs (A/B/C) | Tier 1 remediation |
| E3 | Canonical legal/trading name: "Traders" or "Trading"? | Entity consolidation, schema |
| E4 | Canonical phone: is 9807317791 current, old, or unrelated? | NAP consistency |
| E5 | Does a Google Business Profile exist? Owner access? | Local visibility |
| E6 | TDS/SDS for the 6 allied products | Product pages, any technical claim |
| E7 | Confirmation there is exactly one location (Biratnagar-2) | Prevents unfounded location pages |
| E8 | Any real warehouse/team/stock photography | Trust signals; replaces stock-free placeholders |
| E9 | Company registration / VAT-PAN details, if publishable | Entity trust |
| E10 | Whether an HTTPS outage was observed before 1 Sep, and its dates | Confirms §2.4 |
| E11 | Which supplier relationships may be named publicly | Supplier-authority signals |

---

## 11. Expected impact, difficulty, risk

| Action | Impact | Difficulty | Risk |
|---|---|---|---|
| Connect GSC/GA4 | Enabling — unlocks everything | Low | None |
| Resolve 96 duplicate URLs | High (site-wide quality) | Medium | Medium — reverses approved work; needs redirects done correctly |
| Build 6 category hubs | High (direct commercial) | Low–Medium | Low — two working templates exist |
| Entity/NAP consolidation + GBP | High for local intent | Low, but owner-dependent | Low |
| Cert monitoring | High if it recurs | Low | None |
| WebP conversion | Low–Medium (mobile perf) | Low | Low |
| EN 404 routing | Low | Low | Low |

**The largest risk in this plan is doing the consolidation carelessly** — removing 96 URLs without correct 301s would discard whatever equity they hold and create crawl errors. It must be executed in small, reversible batches with redirect verification.

---

## 12. First implementation batch (proposed)

Deliberately small, fully reversible, no content deletion:

1. Connect GSC + GA4; submit the existing sitemap **only if approved** (the brief reserves indexing submissions for separate approval).
2. Add certificate-expiry monitoring.
3. Build **one** category hub — `hardeners-catalysts` (2 products, contains the commercially strong MEKP and cobalt octoate) — as a pattern check for the remaining five.
4. Convert the 6 product PNGs to WebP.
5. Replace the 404 copy.

No duplicate-content action in batch 1. That waits for GSC data showing how those 96 URLs actually perform, plus an explicit owner decision. Acting before both would be guesswork on the most consequential change in the plan.

---

## 13. Operating plan

### 0–30 days
Connect measurement and let it accumulate. Cert monitoring. Entity consolidation: settle name and phone, claim/verify GBP, align Facebook/Instagram/Yandex. Build 1–2 category hubs. WebP conversion. 404 copy. **Gather E1–E11.**

### 30–60 days
First real GSC read: which pages are indexed, what the 96 templated URLs actually earn, what queries surface. Decide and execute the duplicate-content path with verified redirects, in batches. Complete remaining category hubs. Begin one or two new comparison articles — the format that already works.

### 60–90 days
Measure post-consolidation crawl and index response. Strengthen product pages with TDS/SDS as documents arrive. Application-led selection content where GSC shows genuine demand. Review whether Nepal-local SERPs confirm or contradict the US-based competitor read.

### 3–6 months
Assess whether organic enquiries are attributable and growing. Consider marketplace/directory presence if entity work outperforms content work — the competitive picture suggests it might. Re-audit duplication site-wide. Revisit further content only where evidence justifies it.

**Explicitly not promised:** rankings, traffic volumes, lead counts, or indexing outcomes. Google controls crawl scheduling and result display.

---

## 14. Stop point

This concludes the Phase 1 read-only audit. **No production code, content, configuration, DNS, redirect, sitemap submission or external account has been modified.** The only files created are the twelve documents in `docs/seo/`.

Note for the record: the production worktree currently carries **another agent's uncommitted work** (`BrandFilm.astro`, `Base.astro`, both homepages, plus untracked `HomeExperience.astro` and `home-experiment.css`), and `main` has advanced to `94296b3`. None of it was touched. It should be resolved before any implementation batch begins, to avoid entangling unrelated changes.

**Awaiting approval.**
