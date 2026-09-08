# Internal Link Map — samratfrptraders.com

**Date:** 2026-09-09 · **Measured:** 34,516 internal links, **0 broken** (link checker, build 566 pages)

---

## 1. Current state

Link *hygiene* is excellent — nothing broken across 34,516 links, breadcrumbs present (`BreadcrumbList` on 546 pages). The problem is link *distribution*.

```
homepage
 ├── /products/ ──────────► 31 product pages   (index filters client-side)
 │      └── 2 of 8 category hubs exist; the other 6 are absent, not broken
 ├── /applications/ ──────► 37 application pages
 ├── /resources/ ─────────► 205 articles  ← 73% of the site's pages
 ├── /about/  /contact/  /custom-resin-specification-request/
 └── BrandFilm CTAs ──────► /products/ , /applications/ , WhatsApp
```

### Structural issues

**1. Missing mid-layer.** With 6 of 8 category hubs absent, 20 of 31 products have only the catalogue index as an ancestor. Link equity flows homepage → index → product with no topical intermediary, and category-level intent has no recipient.

**2. Editorial mass with weak commercial return.** 410 resource URLs are 73% of the site. If those pages don't link decisively into products, the site's largest internal-link asset is spent on itself. **This needs verification against rendered HTML before Tier 1 work (see §4).**

**3. The 96 templated URLs (D1) dilute distribution.** They interlink within their own family, concentrating crawl attention on the weakest content on the site.

**4. Category filtering is client-side.** The catalogue index filters by family in the browser rather than linking to hub URLs. Good UX; contributes nothing to crawl or equity distribution. The six new hubs must be **real anchor links**, not filter states.

---

## 2. Target link architecture

```
homepage
 ├─► /products/  (index)
 │    ├─► /products/polyester-resins/            ─┐
 │    ├─► /products/epoxy-casting-resins/         │
 │    ├─► /products/hardeners-catalysts/      NEW │──► product pages
 │    ├─► /products/frp-allied-products/      NEW │
 │    ├─► /products/industrial-specialty-resins/ NEW
 │    ├─► /products/sheet-grade-resins/       NEW │
 │    └─► /products/fire-retardant-resins/    NEW ─┘
 ├─► /applications/ ──► application pages ──► relevant products
 └─► /resources/ ─────► comparison articles ──► relevant products + hubs
```

### Rules

| Rule | Detail |
|---|---|
| **R1** | Every product page links **up** to its category hub (breadcrumb + body). Currently impossible for 20 products |
| **R2** | Every category hub links **down** to all its products, and **across** to genuinely relevant applications |
| **R3** | Application pages link to the specific materials they require — resin, mat, hardener, gelcoat |
| **R4** | Comparison articles link to product pages **only where commercially relevant**. An article comparing two materials Samrat doesn't stock links to neither |
| **R5** | Breadcrumbs mirror the real hierarchy: Home → Products → Category → Product |
| **R6** | **No automated link block may emit irrelevant links.** Prefer 3 hand-picked contextual links over 12 generated ones |
| **R7** | No two pages compete for one primary intent without a logged decision |
| **R8** | Every rule applies identically in NE and EN. Links never cross languages |

---

## 3. Link changes by action

### When the 6 hubs are created

| Link | From | To |
|---|---|---|
| Category strip | `/products/` index | each of 6 new hubs (**real `<a href>`**, not filter) |
| Breadcrumb | 20 product pages | their new parent hub |
| Body cross-link | product page | sibling products via hub |
| Contextual | relevant applications | matching hub |
| Contextual | relevant comparison articles | matching hub |

### When D1 is consolidated (pending E2)

| Link | Action |
|---|---|
| 42 retired slugs | **301** → surviving consolidated guide (or product page where clearly better) |
| Internal links pointing at retired slugs | **Rewrite to the target.** Do not leave internal links relying on redirects |
| 6 surviving guides | link to their product page **and** to `/products/frp-allied-products/` |
| `/resources/` index | remove retired entries |
| Sitemap | regenerate — must contain no retired slug |

> **Sequencing constraint:** hubs must exist before redirects are written, or 42 slugs point at 404s. See `SITE_ARCHITECTURE_PLAN.md` §6.

---

## 4. Verification required before implementation

Not yet measured — must be checked against rendered HTML in the first implementation batch:

| # | Question | Why |
|---|---|---|
| V1 | How many outbound links does a typical resource article send to product pages? | Determines whether 73% of the site assists commercially |
| V2 | Are there orphan pages — indexed but not internally linked? | Sitemap presence ≠ internal linking |
| V3 | Do the 48 templated articles link mainly to each other? | Confirms crawl concentration on weakest content |
| V4 | Do product pages currently link to applications, or only outward to TDS/SDS? | R3 compliance |
| V5 | Anchor-text distribution — over-optimised or natural? | Manipulation risk |

**V1 and V3 should be answered before the D1 decision**, since they establish what the 96 URLs contribute structurally, not just editorially.

---

## 5. External linking

| Link type | Current | Assessment |
|---|---|---|
| TDS/SDS → `samratpolyresins.in` | 25 products | **Correct.** Citing the manufacturer rather than reproducing specs is honest and avoids cross-domain duplication. Retain |
| Social profiles | to verify | Should point to the consolidated entity — see `ENTITY_AND_AUTHORITY_PLAN.md` |
| Outbound editorial | minimal | Acceptable. Add only where a source genuinely supports a statement |

**Do not** add reciprocal-link schemes, paid links, or directory link-drops for ranking purposes. Directory listings recommended in the entity plan are for **genuine business discovery**, not link acquisition.
