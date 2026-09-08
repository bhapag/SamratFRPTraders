# Site Architecture Plan — samratfrptraders.com

**Date:** 2026-09-09 · **Principle:** a smaller, better-housed site. No section is proposed to make the site larger.

---

## 1. Current architecture

```
/                                   homepage (NE)          /en/
├── /products/                      catalogue index         31 products, client-side category filter
│   ├── /products/polyester-resins/         ✅ 200   (7 products)
│   ├── /products/epoxy-casting-resins/     ✅ 200   (4 products)
│   ├── /products/sheet-grade-resins/       ❌ 404   (2)
│   ├── /products/gelcoat/                  ❌ 404   (1)
│   ├── /products/fire-retardant-resins/    ❌ 404   (2)
│   ├── /products/frp-allied-products/      ❌ 404   (7)
│   ├── /products/industrial-specialty-resins/ ❌ 404 (6)
│   ├── /products/hardeners-catalysts/      ❌ 404   (2)
│   └── /products/{slug}/                   31 product pages
├── /applications/                   37 application pages
├── /resources/                      205 articles  ← 48 templated (D1), ~157 differentiated
├── /about/
├── /contact/
└── /custom-resin-specification-request/
```

Every branch mirrored under `/en/`. Total **564 indexable URLs**.

### Structural diagnosis

**Depth is fine. Distribution is not.**

| Layer | Pages | Share |
|---|---|---|
| Editorial (`/resources/`) | 410 | 73% |
| Commercial (products + hubs) | 68 | 12% |
| Application | 76 | 13% |
| Conversion/company | 8 | 1% |

Nearly three-quarters of the site is editorial, and **17% of the total is near-duplicate** (D1). Meanwhile the commercial layer is missing 6 of its 8 category nodes — so 20 of 31 products have no parent hub, and the catalogue index is the only ancestor between the homepage and a product page.

This inverts the usual e-commerce/supplier shape, where category hubs are the strongest mid-layer and editorial supports them.

---

## 2. Target architecture

```
/
├── /products/                          catalogue index (retain)
│   ├── /products/polyester-resins/            RETAIN (7)
│   ├── /products/epoxy-casting-resins/        RETAIN (4)
│   ├── /products/hardeners-catalysts/         CREATE  (2)  ← Tier 1
│   ├── /products/frp-allied-products/         CREATE  (7)  ← Tier 1
│   ├── /products/industrial-specialty-resins/ CREATE  (6)  ← Tier 1
│   ├── /products/gelcoat/                     CREATE? (1)  ← conditional, see §4
│   ├── /products/sheet-grade-resins/          CREATE  (2)  ← Tier 2
│   ├── /products/fire-retardant-resins/       CREATE  (2)  ← Tier 2
│   └── /products/{slug}/                      31 (retain, improve)
├── /applications/                      37 (retain)
├── /resources/
│   ├── comparison + explainer          ~157 (retain — the model for future content)
│   └── product guides                  48 → 6 (consolidate, pending E2)
├── /about/  /contact/  /custom-resin-specification-request/
```

**Net effect:** 564 → ~480 URLs. Commercial layer grows from 68 to 80; editorial shrinks from 410 to ~326.

---

## 3. Per-URL specification — pages to create

Template for each of the six hubs. All bilingual (NE root + `/en/`).

### `/products/hardeners-catalysts/` — Tier 1

| Field | Value |
|---|---|
| Primary intent | Transactional — sourcing hardeners/catalysts in Nepal |
| Cluster | C1 |
| Audience / funnel | FRP fabricators, workshop buyers; mid-to-late funnel |
| Business value | High — consumables, repeat purchase |
| Genuinely offered? | **Yes** — MEKP Hardener, Cobalt Octoate both stocked |
| Evidence required | E6 (cobalt octoate TDS/SDS) before any technical statement |
| Content type | Category hub |
| Parent | `/products/` |
| Links in | catalogue index, homepage category strip, MEKP + cobalt product pages, `epoxy-hardener-vs-mekp-hardener` |
| Links out | 2 product pages, relevant applications, comparison articles |
| Competing Samrat URLs | own product pages (different intent: category vs item). `samratpolyresins.in` = grade specs, no conflict |
| Conversion | Enquiry form / WhatsApp (+977 9805526904) |
| Index | **index, follow** |
| Decision | **CREATE** |
| Why it deserves to exist | Two stocked consumables with no shared landing page; category intent is currently unserved |

### `/products/frp-allied-products/` — Tier 1

Same shape. 7 products (paint brushes, soap stone powder, wax polish, NC thinner, styrene monomer, cobalt octoate, + allied). **Largest unhoused family.** Evidence: E6 for all six lacking TDS/SDS. **Interacts with D1** — if the 48 templated articles are consolidated, this hub becomes the natural destination for their redirects, so sequence the hub *before* the consolidation.

### `/products/industrial-specialty-resins/` — Tier 1

6 products (vinyl ester, bisphenol, marble, DMC/SMC, fiberglass epoxy, PET/polyester putty). Higher unit value. Strong existing comparison articles already discuss these materials and should link in.

### `/products/sheet-grade-resins/` · `/products/fire-retardant-resins/` — Tier 2

2 products each. For fire-retardant: **no fire-performance claim may appear** unless it comes verbatim from supplier TDS with attribution. Fire ratings are a safety-critical claim and this business performs no testing.

### `/products/gelcoat/` — conditional

Only 1 product. **Do not ship a hub that restates the product page.** Either give it distinct scope (selection, surface-finish context, ordering questions) or skip it and strengthen `gp-gelcoat-resin` instead. Decide at implementation; skipping is an acceptable outcome.

---

## 4. Sections deliberately NOT created

| Proposed in brief | Verdict | Reason |
|---|---|---|
| Location / city pages | **No** | One real location (Biratnagar-2). City-swapped pages are doorways |
| "Pan-Nepal stock" / warehouse network pages | **No** | No evidence of multiple facilities (E7) |
| TDS/SDS document library as a standalone hub | **Defer** | Only 25/31 have documents; a library that is 80% empty is a poor page. Revisit after E6 |
| Supplier/brand-partner pages | **Defer** | Requires E11 — which relationships may be named publicly |
| Price / rate pages | **No** | No verified pricing |
| Further templated article families | **No** | The existing one is the site's main liability |
| A second trader domain | **No** | Splits authority; `.com` already holds this role |

---

## 5. Bilingual architecture

**Retain exactly as-is.** Nepali at root, English at `/en/`, `hreflang` `ne-NP` / `en-NP` / `x-default` with verified reciprocity across 279 pairs. This is correctly implemented and must not be disturbed.

Every created hub ships in **both** languages simultaneously. Every consolidation redirect is applied to **both** trees. Parity is currently perfect (282/282) and is enforced by the release gate — do not break it.

---

## 6. Sequencing

| Order | Action | Depends on |
|---|---|---|
| 1 | Connect GSC/GA4 | E1 |
| 2 | Build `hardeners-catalysts` as pattern check | — |
| 3 | Review pattern, then build `frp-allied-products`, `industrial-specialty-resins` | step 2 |
| 4 | Build `sheet-grade-resins`, `fire-retardant-resins`; decide on `gelcoat` | step 3 |
| 5 | **Then** consolidate D1, redirecting into the now-existing hubs | E1 + E2 + step 3 |

**Hubs before consolidation.** Redirect targets must exist before redirects are created, otherwise 42 slugs point at 404s.

---

## 7. Canonical ownership rule

One page owns each substantially identical intent:

| Intent | Sole owner |
|---|---|
| "cobalt octoate supplier" | `/products/cobalt-octoate/` |
| "hardeners and catalysts supply" | `/products/hardeners-catalysts/` |
| "what is cobalt octoate" | one consolidated guide (post-D1) |
| "cobalt octoate grade specification" | **`samratpolyresins.in`** — cite, never reproduce |
| "MEKP vs epoxy hardener" | `/resources/epoxy-hardener-vs-mekp-hardener/` |

No close-variant splitting ("lamination resin supplier" vs "laminating resin supplier"). No page may be created that competes with an existing page for the same primary intent without a decision recorded in `SEO_DECISIONS_LOG.md`.
