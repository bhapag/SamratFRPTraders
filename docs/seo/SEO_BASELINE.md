# SEO Baseline — samratfrptraders.com

**Date of measurement:** 2026-09-09
**Domain audited:** https://samratfrptraders.com (Nepal operation)
**Method:** Read-only. Live HTTP/TLS inspection, sitemap parsing, rendered-HTML sampling, repository inspection. No production change made.

---

## 0. Scope correction (recorded for the file)

The engagement brief named `samratfrptraders.in`. That domain **does not exist**:

| Check | Result |
|---|---|
| `nslookup` via ISP resolver | NXDOMAIN |
| `nslookup` via Google `8.8.8.8` | NXDOMAIN |
| `nslookup` via Cloudflare `1.1.1.1` | NXDOMAIN |
| NS records | none |
| HTTP/HTTPS | no response |
| Repository on GitHub account `bhapag` | none |

Confirmed by the business owner as a typo. **The real target is `samratfrptraders.com`, the Nepal operation.** All India-specific framing in the original brief (Indian SERPs, GST, "trader in India", Indian city pages) is therefore out of scope and has been discarded. `samratpolyresins.in` remains a *separate* manufacturer-led domain and is treated here only as the upstream supplier whose TDS/SDS documents this site links to.

---

## 1. What this baseline can and cannot state

**Available (measured directly):** DNS, TLS, HTTP status, redirects, robots, sitemap inventory, rendered HTML, on-page metadata, structured data, internal duplication, asset weight, repository state.

**NOT available — no access granted:**

| Missing source | Consequence |
|---|---|
| Google Search Console | No impressions, clicks, CTR, average position, query data, indexed-vs-submitted, or crawl-error data |
| GA4 | No organic sessions, no enquiry/conversion attribution |
| Rank tracker / backlink tool | No ranking history, no backlink profile, no competitor share |
| Google Business Profile access | Cannot confirm whether a profile exists or is verified |

**Consequently, this baseline contains no traffic, ranking, or indexation figures.** The brief's requested 28-day, 3-month and year-over-year comparisons cannot be produced. They are listed as evidence requirements in `SEO_MEASUREMENT_PLAN.md`. No such numbers have been estimated or inferred — inventing them would breach the engagement's truth rules.

A further limitation: the available web search is **US-based**. It cannot render genuine `google.com.np` results. Competitor findings in `COMPETITOR_GAP_ANALYSIS.md` are therefore *indicative discovery*, not verified Nepal SERPs.

---

## 2. Platform and delivery

| Attribute | Value |
|---|---|
| Framework | Astro (static output) |
| Host | Vercel (`Server: Vercel`, edge `bom1` / Mumbai) |
| Repository | `github.com/bhapag/SamratFRPTraders`, branch `main` |
| Apex IP | 216.198.79.1 |
| `www` | CNAME → apex |
| Rendering | Static HTML; content and links present in source (no JS-rendering dependency for primary content) |

## 3. HTTPS / TLS state

| Check | Apex | www |
|---|---|---|
| Certificate CN | `samratfrptraders.com` | `www.samratfrptraders.com` |
| Issuer | Let's Encrypt YR2 | Let's Encrypt YR2 |
| Valid from | 2026-09-01 09:58 UTC | 2026-09-01 10:03 UTC |
| Valid to | 2026-11-30 | 2026-11-30 |
| SAN coverage | apex only | www only (separate cert) |
| Chain | complete (leaf → YR2 → ISRG Root YR) | complete |
| `Verify return code` | 0 (ok) | 0 (ok) |
| Protocol | TLS 1.3 | TLS 1.3 |

**HSTS is enabled: `Strict-Transport-Security: max-age=63072000` (2 years).**

**Status: healthy at time of measurement.** Both hostnames serve valid, independently-issued certificates over all four entry points (`http`/`https` × apex/`www`), each returning `ssl_verify=0`.

**On the reported HTTPS failure:** both certificates were **issued 2026-09-01, eight days before this audit**. That is consistent with a renewal or repair event. Because HSTS is active with a two-year max-age, any certificate lapse before that date would have produced a *hard, unbypassable* browser block — no "proceed anyway" option — which is exactly how a "HTTPS connection failing" incident presents to a user. The most probable reading is a real incident that has since been resolved by the 1 Sep reissue. This cannot be proven retrospectively without host-side certificate history. See `TECHNICAL_SEO_BACKLOG.md` T1-02.

### Redirect behaviour

| From | To | Code |
|---|---|---|
| `http://samratfrptraders.com/` | `https://samratfrptraders.com/` | 308 |
| `https://www.samratfrptraders.com/` | `https://samratfrptraders.com/` | 308 |
| `http://www.samratfrptraders.com/` | `https://www.samratfrptraders.com/` → apex | 308, **two hops** |

Canonical host is the apex. The `http://www` path takes two hops; single-hop would be marginally cleaner but this is a low-priority nicety, not a defect.

## 4. Crawlability and indexability

| Item | State |
|---|---|
| `robots.txt` | `User-agent: * / Allow: /` + sitemap declaration |
| Sitemap | `https://samratfrptraders.com/sitemap-index.xml` → `sitemap-0.xml` |
| URLs in sitemap | **564** |
| Blocked resources | none observed |
| Sitemap URLs returning 404 | **none found** in sampling |
| Indexable pages declaring `index, follow` | 564 (per release gate) |
| Intentionally `noindex` | 2 (the 404 pages) |

## 5. URL inventory

Perfect bilingual parity — Nepali at root, English under `/en/`.

| Section | NE URLs | EN URLs |
|---|---|---|
| Resources (205 articles + index) | 206 | 206 |
| Applications (37 + index) | 38 | 38 |
| Products (31 products + 2 category hubs + index) | 34 | 34 |
| Homepage | 1 | 1 |
| About | 1 | 1 |
| Contact | 1 | 1 |
| Custom resin specification request | 1 | 1 |
| **Total** | **282** | **282** |

**Content-to-commerce ratio: 205 resource articles against 31 products (6.6 : 1).**

## 6. Structured data (built output, per release gate)

| Type | Count |
|---|---|
| Organization | 566 |
| LocalBusiness | 566 |
| BreadcrumbList | 546 |
| FAQPage | 546 |
| Article | 410 |
| Product | 62 |
| VideoObject | 2 |

Canonical and hreflang reciprocity verified across **279 bilingual pairs** (`en-NP`, `ne-NP`, `x-default`). Sitemap contains only production-host URLs; no legacy `/ne/` paths.

## 7. Favicon baseline

Declared in the rendered homepage `<head>`:

```html
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

| Asset | Status | Content-Type | Size |
|---|---|---|---|
| `/favicon-48x48.png` | 200 | image/png | 3,587 B |
| `/favicon.ico` | 200 | image/vnd.microsoft.icon | 3,609 B |
| `/apple-touch-icon.png` | 200 | image/png | 19,514 B |
| `/site.webmanifest` | 200 | application/manifest+json | 360 B |
| `/favicon.png` | 200 | image/png | 5,153 B |

All stable paths, no cache-busting query strings or content hashes, meets Google's 48×48 minimum, homepage crawlable, `robots.txt` permits access. **No implementation defect found.** Full analysis in `FAVICON_AUDIT_AND_FIX_PLAN.md`.

## 8. Content quality baseline — principal finding

Sampling of the 205-article resource library shows it splits into **two populations with very different quality**.

Method: `<main>` extracted (chrome stripped), 5-word-shingle Jaccard overlap computed between pages.

| Population | Sample | Words | Cross-page overlap |
|---|---|---|---|
| **Templated product guides** | `cobalt-octoate-what-is`, `styrene-monomer-what-is`, `nc-thinner-what-is` | 461 / 463 / 459 | **58.2%, 58.2%, 59.8%** |
| **Comparison / explainer** | `epoxy-hardener-vs-mekp-hardener`, `pet-resin-vs-gp-resin`, `vinyl-ester-resin-vs-epoxy-resin` | 516 / 684 / 699 | **2.0%, 2.2%, 1.7%** |

A ~59% five-consecutive-word overlap between pages about a **cobalt accelerator**, a **reactive diluent** and a **nitrocellulose lacquer thinner** — three chemically unrelated products — is body-copy duplication, not shared navigation.

**Scope of the affected set:** exactly six products × eight article types:

`cobalt-octoate`, `styrene-monomer`, `nc-thinner`, `paint-brushes`, `soap-stone-powder`, `wax-polish`
× `-what-is`, `-applications`, `-buyer-guide`, `-selection`, `-handling`, `-troubleshooting`, `-comparison`, `-faq`

= **48 articles = 96 bilingual URLs**, i.e. **17% of the indexable site**.

This is the set previously described as the "96 bilingual Knowledge Hub pages." The remaining ~157 articles sampled as genuinely differentiated and are an asset, not a liability.

Two secondary observations on the templated set: reading time is advertised as "5 min read" for ~460 words (roughly 2 minutes), and the copy is hedged to the point of saying very little ("This guide explains the product class rather than claiming a formulation, performance value or approval for the supplied item"). The hedging is commendably honest about the trader position, but it leaves the page without a reason to exist.

## 9. Commercial architecture gap

Eight product families are defined in `src/data/products.js`. **Only two have a category hub page.**

| Family | Products | Hub URL status |
|---|---|---|
| Polyester Resins | 7 | **200** |
| Epoxy & Casting Resins | 4 | **200** |
| FRP Allied Products | 7 | **404** |
| Industrial & Specialty Resins | 6 | **404** |
| Sheet Grade Resins | 2 | **404** |
| Fire Retardant Resins | 2 | **404** |
| Hardeners & Catalysts | 2 | **404** |
| Gelcoat | 1 | **404** |

**20 of 31 products sit in a family with no indexable landing page.** These are not broken links — the catalogue index filters client-side and does not link to the missing hubs (the link checker reports 0 broken internal links across 34,516). They are simply absent, so there is no page positioned for "gelcoat supplier", "MEKP hardener supplier", "FRP allied products" and similar commercial queries.

## 10. Asset weight

| Asset | Size |
|---|---|
| `/videos/hero-background.mp4` | 4.12 MB |
| `/videos/brand-showcase.mp4` | 2.60 MB |
| `/videos/applications-video.mp4` | 1.56 MB |
| 6 × product PNG (`wax-polish`, `paint-brushes`, `styrene-monomer`, `cobalt-octoate`, `soap-stone-powder`, `nc-thinner`) | 2.05–2.25 MB each |
| Total `dist/` | 65.41 MB / 745 files |
| CSS | 141.8 KB (16 files) |
| JS | 4.9 KB (1 file) |

JS payload is genuinely light. The six product PNGs are the clearest optimisation target: they are the only catalogue images not converted to WebP, and each is ~2 MB where its WebP siblings are ~60 KB.

Core Web Vitals **field** data is unavailable without CrUX/GSC access. Local measurement showed **CLS 0** on the homepage and catalogue page, and no console errors.

## 11. Documentation and supporting facts

| Item | State |
|---|---|
| Product TDS coverage | 25 / 31 |
| Product SDS coverage | 25 / 31 |
| Missing TDS **and** SDS | the same 6 allied products as §8 |
| Build | 566 pages, 0 errors |
| Internal link check | 34,516 links, 0 broken |
| Release gate | 0 errors, 32 warnings |
| `npm audit` | 0 vulnerabilities |

## 12. Verified business facts (from repository, corroborated externally)

| Fact | Value | Corroboration |
|---|---|---|
| Trading name (site) | Samrat FRP Traders | site, Instagram |
| Legal name | M/s SAMRAT F.R.P TRADERS | site schema |
| Position | trader / supplier / importer / reseller — **not** a manufacturer | site copy, release-gate business-truth check |
| Address | Ward No. 2, Tinpani Chowk, Main Road, Biratnagar, Nepal | site; Facebook post cites "Biratnagar-2" |
| Primary phone | +977 9805526904 | site; matches Facebook post |
| Email | samratfrptraders@gmail.com | site |
| Import activity | 148 customs records, first recorded 2023-03-10 | NBD Trade Data (third party) |

**Third-party evidence supports the importer claim** — an independent customs database records 148 import/export entries. That is a genuine, defensible trust signal.

**Two entity inconsistencies require owner confirmation** (see `ENTITY_AND_AUTHORITY_PLAN.md`):
1. **"Samrat FRP Traders" vs "Samrat FRP Trading"** — Facebook, Yandex Maps and the customs database use *Trading*; the website and Instagram use *Traders*.
2. **A second phone number, 9807317791**, appears in third-party listings against this business. The site uses 9805526904. Which is canonical must be confirmed; conflicting NAP data suppresses local entity confidence.

No Google Business Profile surfaced during discovery. A Yandex Maps listing exists. GBP presence must be confirmed by the owner (US-based search cannot reliably surface a Nepal GBP).

---

## 13. Baseline summary

**Technically, this site is in good order.** Valid TLS, clean redirects, permissive robots, a complete and accurate sitemap, correct canonical/hreflang reciprocity across 279 bilingual pairs, truthful schema, zero broken internal links, zero build errors, zero npm vulnerabilities, CLS 0, and a correctly implemented favicon. The engineering standard here is above average for a business of this size.

**The problems are editorial and architectural, not technical:**

1. 96 URLs (17% of the site) are near-duplicate templated content averaging 59% mutual overlap.
2. Six of eight product families have no category landing page, leaving 20 of 31 products commercially unhoused.
3. The site is operating without Search Console or analytics, so nothing above can be correlated with actual search performance.

Priorities and sequencing are set out in `SEO_AUDIT_AND_PLAN.md`.
