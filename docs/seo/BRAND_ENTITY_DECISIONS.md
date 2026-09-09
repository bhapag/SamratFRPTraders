# Brand & entity decisions — Samrat FRP Traders

**Date:** 2026-09-09 · **Scope:** branded discovery for `samratfrptraders.com`
**Rule applied throughout:** state only what the repository can evidence.

---

## 1. The entity

| Field | Value | Source |
|---|---|---|
| Visible business name | **Samrat FRP Traders** | `src/data/site.js` → `site.name` |
| Registered name | M/s SAMRAT F.R.P TRADERS | `site.legalName` |
| Address | Ward No. 2, Tinpani Chowk, Main Road, Biratnagar, Nepal | `site.business` |
| Phone (Nepal) | +977 9805526904 | `site.business.contactNumbers[0]` |
| Phone (India) | +91 7463881005, +91 7463881652 | `site.business.contactNumbers` |
| Email | samratfrptraders@gmail.com | `site.business.email` |
| PAN / VAT | 623071827 | `site.business` |
| EXIM code | 6230718270114NP | `site.business` |
| Role | Trader · Supplier · Importer · Reseller — **not a manufacturer** | Release-gate business-truth check |

**Name consistency verified, not assumed.** A source scan found **612 occurrences of
"Samrat FRP Traders" and zero occurrences of any other business-name variant** in
`src/`. Nothing needed renaming.

### "Samrat FRP Trading" — deliberately not used

Third-party listings (a Facebook page, Yandex Maps, a customs-data broker) carry
"Samrat FRP **Trading**". The repository holds **no evidence that this is the same
legal entity**, so it is not asserted anywhere on the site — not as `alternateName`,
not in schema, not in copy. Recorded in `COMPETITOR_GAP_ANALYSIS.md` and
`ENTITY_AND_AUTHORITY_PLAN.md` as an external observation only.

**Blocked on:** owner confirmation that the two names are one registered business.
Until then this stays out of published content.

### Samrat Poly Resins, India

Mentioned only where factually load-bearing: as the issuer of specific TDS/SDS
documents, and as the documented origin of specific resin grades. It is never
presented as this site's operator, and no manufacturer positioning or branding is
borrowed from it.

---

## 2. Branded intents targeted, and the page that owns each

One page per intent. No page was created for a close keyword variation.

| Branded intent | Owning page | How it is served |
|---|---|---|
| Samrat FRP Traders | Homepage | Title, footer, Organization schema |
| Samrat FRP Traders Nepal | Homepage | Title: "FRP Materials Supplier & Importer in Nepal" |
| Samrat FRP Traders Biratnagar | `/about/`, `/en/about/` | **H1 now "Samrat FRP Traders, Biratnagar."** + registered details block |
| Samrat FRP Traders contact | `/contact/`, `/en/contact/` | **H1 now "Contact Samrat FRP Traders."** + full NAP |
| Samrat FRP Traders catalogue | `/products/`, `/en/products/` | **H1 now "Samrat FRP Traders catalogue."** |
| Samrat FRP Traders FRP materials | `/en/products/` + hubs | Catalogue title and lead |
| Samrat FRP Traders polyester resin | `/en/products/polyester-resins/` | Hub title + comparison matrix |
| Samrat FRP Traders epoxy resin | `/en/products/epoxy-casting-resins/` | Hub title + comparison matrix |
| Samrat FRP Traders GP Clear Resin | `/en/products/gp-clear-resin/` | Product-first title; meta rebalanced to lead with the trader |
| Samrat FRP Traders TDS / SDS | `/documents/`, `/en/documents/` | **H1 now "Samrat FRP Traders TDS & SDS library."** |

**Explicitly not created:** meaning-of-Samrat pages, brand-repetition pages, separate
pages per branded variation, India-targeted pages, city-swapped pages, generic AI
resources, new external profiles, directories, reviews or citations.

The bare word "Samrat" is **not** targeted — it is broad and unrelated to this
business (a casino, a restaurant and a tour operator share it in Biratnagar alone).

---

## 3. Pages changed

| Page | Change |
|---|---|
| `/about/` · `/en/about/` | H1 now carries the entity + Biratnagar |
| `/contact/` · `/en/contact/` | H1 now carries contact intent + entity; lead states supply role and base |
| `/products/` · `/en/products/` | H1 now carries the entity + catalogue |
| `/documents/` · `/en/documents/` | H1 now carries entity + TDS/SDS; issuer column collapsed; lead and coverage copy name the trader |
| `src/data/products.js` | GP Clear Resin meta description reordered: product first, Samrat FRP Traders as Nepal supplier, manufacturer credited as document issuer rather than lead entity |
| `src/components/BrandEntity.astro` | New — `WebSite` schema node |
| `src/data/documents.js` | New `distinctIssuers()` helper |

Brand name added **once per page**, in the H1 only, on four identity pages. No page
repeats it for ranking purposes.

---

## 4. Supplier-vs-brand dominance — measured, then fixed where real

The brief requires that Samrat Poly Resins not dominate Samrat FRP Traders pages.
Measured on rendered `<main>` content:

| Page | Before | After |
|---|---|---|
| `/documents/`, `/en/documents/` | SFT 4 · **SPR 55** | SFT 6 · SPR 12 |

**Cause:** every one of the 50 document rows carried an identical "Issued by:
Samrat Poly Resins, India" cell. A column with one repeated value informs nobody and
made the supplier the dominant name on the page.

**Fix:** `distinctIssuers()` drives the table. With a single issuer across the
library the column is dropped and the issuer is stated once per family, plus the
page-level statement that already existed. **If a second issuer is ever added, the
per-row column returns automatically** — no follow-up edit needed.

### Product pages — deliberately left alone

Eight product pages still mention the supplier slightly more often than the trader
(largest gap: `unsaturated-polyester-resin`, SPR 17 vs SFT 9). Each mention was read
in context: document issuance, the provenance of a specific grade, the source of
published technical values, and the evidence that GP Clear Resin and UPR are one
formulation. **None is gratuitous repetition.** Stripping accurate provenance to
improve a name ratio would trade a real accuracy asset for a cosmetic one, so it was
not done.

---

## 5. Structured data

**Reviewed and found already correct.** The site-wide Organization + LocalBusiness
node in `src/layouts/Base.astro` carries exact name, legal name, canonical URL,
approved logo, verified Biratnagar address, verified telephone, and three sales
contact points with email and languages. No fake `sameAs`, ratings, reviews, prices,
availability or certifications exist. Nothing needed correcting.

**Added:** `src/components/BrandEntity.astro` emits a `WebSite` node — the documented
signal Google reads for the site name in results — with `name`, `url`, `inLanguage`
and a minimal `publisher` reference. It deliberately does **not** restate the
Organization node; two competing Organization descriptions on one page is worse than
one good one. Verified: exactly **one** Organization node per page after the change.

Included on `/about/`, `/contact/`, `/documents/`, `/products/` in both languages.

### Blocked by another worker's in-flight work

`src/layouts/Base.astro`, `src/pages/index.astro` and `src/pages/en/index.astro` hold
uncommitted changes by another worker (a homepage refactor, −1,264 lines). They were
**not touched**. Consequently:

- The `WebSite` node is **not on the homepage**, which is where Google most wants it.
- The Organization node could not gain a stable `@id`, nor these truthful fields
  already verified in `site.js`: `email`, `vatID`, `taxID`, `identifier` (EXIM),
  `areaServed` (Nepal), `knowsLanguage` (ne, en), `description`.
- The homepage H1 still carries no entity name
  ("Polyester, Epoxy & Composite Materials / Supplier Across Nepal").

**Next action when those files are free:** add `BrandEntity` to both homepages, give
the Organization node `@id: https://samratfrptraders.com/#organization`, point
`publisher` at it, and add the seven verified fields above.

---

## 6. Favicon

**Unchanged, deliberately.** Declarations remain `/favicon-48x48.png` (48×48 PNG),
`/favicon.ico` and `/apple-touch-icon.png` (180×180); all return 200, plus
`/site.webmanifest`. Per D-005 these paths are technically correct and stable;
replacing them would reset the recrawl clock and destroy the URL stability favicon
caching depends on. Google not yet showing the icon is a recrawl-lag issue, not a
markup defect. **No favicon asset or path was modified.**

---

## 7. Blocked by missing business proof

| Item | Blocked on |
|---|---|
| "Samrat FRP Trading" as a verified alternate name | Owner confirmation of same legal entity |
| `sameAs` profile links | No verified official profiles in the repository |
| Google Business Profile | Owner account access (highest-ROI entity action outstanding) |
| Opening hours, founding date, geo coordinates | Not verified anywhere in the repository |
| Ratings, reviews, certifications, prices, availability | None exist; must never be invented |
| GA4 branded-conversion tracking | No GA4 property, stream or measurement ID exists |
