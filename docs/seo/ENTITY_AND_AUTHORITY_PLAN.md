# Entity and Authority Plan — samratfrptraders.com

**Date:** 2026-09-09 · **Entity:** M/s SAMRAT F.R.P TRADERS, Biratnagar, Nepal

**Nothing in this plan fabricates a signal.** Every action either consolidates something that already exists or requests evidence from the owner. Where evidence is absent, the item stays blocked.

---

## 1. Verified entity facts

| Attribute | Value | Source |
|---|---|---|
| Trading name (site) | Samrat FRP Traders | website, Instagram |
| Legal name | M/s SAMRAT F.R.P TRADERS | site schema |
| Commercial role | trader / supplier / importer / reseller — **not** a manufacturer | site copy; enforced by release-gate business-truth check |
| Address | Ward No. 2, Tinpani Chowk, Main Road, Biratnagar, Nepal | site; Facebook cites "Biratnagar-2" |
| Primary phone | +977 9805526904 | site; matches Facebook post |
| Email | samratfrptraders@gmail.com | site |
| Import activity | **148 customs import/export records, first recorded 2023-03-10** | NBD Trade Data (independent third party) |
| Schema | Organization + LocalBusiness on all 566 pages | built output |

**The customs record is the strongest trust asset the business has and it is currently unused on-site.** An independent database corroborating 148 import/export entries since 2023 substantiates the "importer" positioning far better than any self-description. Subject to E11, it is worth referencing.

---

## 2. Known off-site presence

| Property | Name used | Status |
|---|---|---|
| Website | Samrat FRP **Traders** | live |
| Instagram `@samratfrptraders` | Samrat FRP **Traders** \| Nepal | active |
| Facebook page | Samrat FRP **Trading** | active — posts products, phone 9805526904, "Biratnagar-2" |
| Yandex Maps | samrat_frp_**trading** | listed |
| NBD Trade Data | SAMRAT FRP **TRADING** | 148 records |
| **Google Business Profile** | — | **not found in discovery** |

---

## 3. Problem 1 — the name is split

**"Samrat FRP Traders" (website, Instagram) vs "Samrat FRP Trading" (Facebook, Yandex, customs data).**

Search engines consolidate entities on consistent name + address + phone. A two-way name split across five properties weakens that consolidation, and it is the most likely reason brand-adjacent signals are not accruing to the website.

**Action:**
1. **E3** — owner confirms which is the legal/registered name and which is a trading style.
2. Align every property to a single primary name. If the legal name is "Trading" while the site brands as "Traders", express that explicitly rather than pretending one doesn't exist — e.g. legal name in schema `legalName`, brand in `name`. This is honest and machine-readable.
3. Do not change the site's user-facing brand without the owner's instruction; this is a business decision, not an SEO one.

---

## 4. Problem 2 — a second phone number

Third-party listings show **9807317791** against this business; the site and Facebook use **9805526904**.

Possible readings: an old number, a second line, a different staff contact, or a data error in the third-party source. **It cannot be resolved from here.**

**Action:** **E4** — owner confirms the canonical enquiry number. If both are live, designate one as primary for NAP and use it consistently everywhere. Conflicting phone numbers across listings directly suppress local entity confidence.

> Do **not** change the site's contact architecture on this finding. The current +977 9805526904 routing is approved production work and matches the Facebook presence. This is a *listings* consolidation task, not a site change.

---

## 5. Problem 3 — no Google Business Profile found

None surfaced during discovery. A Yandex Maps listing exists instead — unusual, and Yandex is not a meaningful discovery channel for Nepali buyers.

**Caveat:** discovery ran on US-based search, which does not reliably surface a Nepal GBP. **Absence of evidence is not evidence of absence** — this must be confirmed by the owner (E5), not assumed.

**Action:**
1. **E5** — does a profile exist? Is it claimed and verified? Who holds access?
2. If none: create and verify one. For a physical supplier in Biratnagar with genuine local trade, this is likely **the single highest-return action in the entire engagement** — the competitive review found local intent in Nepal is served largely by map results, directories and Facebook rather than by supplier websites.
3. Populate with verified data only: name (per E3), address (Biratnagar-2), phone (per E4), hours, category, real photography (E8).
4. Link the profile to the website; link the website to the profile.

**Not permitted:** fake reviews, review solicitation with incentives, a second profile for a non-existent location, or a service-area that isn't genuinely served.

---

## 6. Consolidation sequence

Order matters — settle the facts before propagating them.

| Step | Action | Gate |
|---|---|---|
| 1 | Settle canonical name | E3 |
| 2 | Settle canonical phone | E4 |
| 3 | Confirm single location | E7 |
| 4 | Audit GBP; create/claim if absent | E5 |
| 5 | Align Facebook, Instagram, Yandex to the settled NAP | steps 1–3 |
| 6 | Update site schema `name` / `legalName` / `telephone` if steps 1–2 change anything | steps 1–2 |
| 7 | Submit/correct Yellowpages Nepal and comparable genuine directories | steps 1–3 |
| 8 | Add real photography across site + profiles | E8 |

**Step 6 is deliberately late.** The site is currently self-consistent and correct; it should be updated only if the owner's answers require it, and never merely to match an unverified third-party listing.

---

## 7. Directory and listing presence

The competitive review found Nepali directories and Facebook carry real weight for local supply intent.

**Legitimate — genuine business discovery:**
- Yellowpages Nepal (fibreglass/chemicals categories)
- Nepali business/trade directories with real editorial standards
- Relevant trade association listings, **if the business is genuinely a member**

**Not permitted:** paid link schemes, mass directory submission for links, listings in irrelevant categories or countries, or any listing claiming a presence the business does not have.

The distinction is intent: listings are for buyers to find the business, not for passing PageRank. Any listing that would be embarrassing to justify to a customer should not be created.

---

## 8. Trust signals — present, missing, unusable

| Signal | Status | Action |
|---|---|---|
| Legal identity | Present in schema | Verify against registration (E9) |
| Physical address | Present, corroborated | Confirm single location (E7) |
| Phone | Present, **but conflicting third-party data** | E4 |
| Verifiable import history | **148 customs records — strong, unused** | Publish subject to E11 |
| Honest non-manufacturer positioning | **Present and consistently enforced** | Retain — a durable advantage |
| TDS/SDS transparency | 25/31, citing manufacturer rather than reproducing | Retain; close gap via E6 |
| Real photography | Unknown | E8 |
| GBP | Not found | E5 |
| Registration / VAT-PAN | Not published | E9 — publish only if owner approves |
| Reviews | None found | **Never fabricate.** Genuine review generation only |
| Supplier relationships | Cited via TDS links | E11 before naming any relationship |
| Industry memberships | Unknown | Only if genuinely held |

---

## 9. Schema implications

Current schema is truthful and comprehensive: Organization + LocalBusiness on 566 pages, BreadcrumbList 546, FAQPage 546, Article 410, Product 62, VideoObject 2.

**Permitted refinements after E3/E4/E5:**
- `legalName` vs `name` to express the Traders/Trading distinction accurately
- `telephone` aligned to the canonical number
- `sameAs` linking verified profiles (Instagram, Facebook, GBP) — **only profiles confirmed to belong to this business**

**Never add:** `aggregateRating`, `review`, `offers`, `price`, `availability`, `hasCredential`, certification properties, or additional `location` entries. None are verified, and fabricated review or rating markup is both a manual-action risk and a straightforward misrepresentation.

---

## 10. Priority

| Priority | Action | Effort | Expected value |
|---|---|---|---|
| **1** | GBP audit → create/verify (E5) | Low, owner-dependent | **Highest** — where Nepal local intent is actually served |
| **2** | Settle name + phone (E3, E4) | Low | High — unblocks all listing work |
| **3** | Align existing profiles to settled NAP | Low | High |
| **4** | Genuine directory presence | Low–Medium | Medium–High |
| **5** | Real photography (E8) | Owner-dependent | Medium |
| **6** | Publish verifiable trading history (E11) | Low | Medium |
| **7** | Schema refinement | Low | Low–Medium |

**This plan is cheaper and likely higher-yield than any content work in the engagement.** It is also almost entirely owner-dependent — nine of the twelve evidence items gate it. The main constraint is not engineering effort but getting answers to E3, E4, E5, E7, E8 and E11.
