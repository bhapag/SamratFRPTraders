# SEO Measurement Plan — samratfrptraders.com

**Date:** 2026-09-09

---

## 1. Current measurement state: none

| Source | Status | Consequence |
|---|---|---|
| Google Search Console | **Not connected** | No impressions, clicks, CTR, position, query data, indexation, or crawl errors |
| GA4 | **Not connected** | No organic sessions, no engagement, no conversion attribution |
| Conversion tracking | **Unknown** | Enquiry / WhatsApp / phone taps not measurably attributed |
| Rank tracking | **None** | No position history |
| Backlink tool | **None** | No link profile, no gains/losses, no toxicity view |
| CrUX / field CWV | **Unavailable** | Only lab CLS 0 measured locally |

**The business is operating blind.** Every diagnosis in this audit — including the duplicate-content finding, which is measured on-page but unmeasured in *performance* terms — is a hypothesis until this is fixed.

**This is why T1-01 is the first item in the backlog and why the highest-impact content decision (the 96 URLs) is deliberately sequenced last.** Acting on the largest change without data would be guesswork on the most consequential item in the plan.

---

## 2. What could not be produced, and why

The brief requested specific comparisons. None can be delivered honestly today:

| Requested | Why not |
|---|---|
| Organic traffic and qualified enquiries | No GA4 |
| Queries, landing pages, clicks, impressions, CTR, position, device split | No GSC |
| Latest 28 days vs previous 28 days | No historical data |
| Latest 3 months vs previous 3 months | No historical data |
| Year-over-year | No historical data; domain appears recent |
| Indexed vs submitted URLs | No GSC |
| Crawl / indexing failures | No GSC |
| 3–6 month ranking and traffic change | No rank tracker, no GSC |
| Branded vs non-branded split | No GSC |
| Query/page cannibalisation (performance-based) | No GSC — *on-page* duplication **was** measured; see below |
| Backlink gains, losses, suspicious patterns | No backlink tool |

**No figures have been estimated, modelled or inferred for any of the above.** Publishing invented metrics would breach the engagement's truth rules and would corrupt every downstream decision.

**One exception:** cannibalisation was measurable *structurally* without external tools, and was measured — 58–60% five-gram overlap across the templated set, 1.7–2.2% across the comparison set. That finding stands on its own evidence.

---

## 3. Setup requirements (T1-01)

### 3.1 Search Console
- Verify as a **domain property** (covers apex, `www`, `http`/`https` in one).
- Confirm the existing sitemap is discoverable via `robots.txt` — it already is.
- **Do not submit the sitemap or request indexing without separate approval**, per engagement terms.
- Allow **at least 28 days** before drawing conclusions. GSC backfills a limited window only; history before verification is unrecoverable.

### 3.2 GA4
- Confirm the property, and that Nepal traffic is not filtered out.
- Verify organic sessions are attributed (not lumped into direct/unassigned).

### 3.3 Conversion events
The site's real conversions are enquiry-shaped, not e-commerce:

| Event | Element |
|---|---|
| `whatsapp_click` | WhatsApp CTA (site-wide floating + in-page) |
| `phone_click` | `tel:` links |
| `email_click` | `mailto:` links |
| `enquiry_submit` | contact / custom-spec form |
| `tds_download` / `sds_download` | document links (strong intent signal) |
| `catalogue_download` | product catalogue PDF |

**`tds_download` deserves particular attention** — a buyer pulling a datasheet is far closer to purchase than one reading an article, and it is the clearest available proxy for qualified intent on a site with no checkout.

---

## 4. Baseline capture (day 0 of measurement)

Once connected, capture and freeze before any implementation batch:

| Metric | Purpose |
|---|---|
| Indexed URL count vs 564 submitted | Establishes the indexation gap |
| Impressions / clicks / CTR / position, 28 days | Performance baseline |
| Branded vs non-branded split | Entity-work baseline (`ENTITY_AND_AUTHORITY_PLAN.md`) |
| **Performance of the 96 templated URLs specifically** | **Directly informs the D1 decision** |
| Performance of the ~157 comparison articles | Validates or refutes "this format works" |
| Performance of the 31 product pages | Commercial baseline |
| Top landing pages | Reveals what actually earns |
| Device split (mobile vs desktop) | Nepal is mobile-heavy; verify |
| NE vs EN split | Tests whether bilingual investment pays |
| CWV field data (once CrUX has samples) | Real-world performance |

> **The 96-URL figure is the decisive one.** If they earn essentially nothing, Option A (consolidate) is clearly right. If they draw meaningful qualified impressions, Option C (rewrite) becomes more defensible. **That decision should be made on this data, not on the on-page duplication measurement alone.**

---

## 5. Ongoing measurement

| Cadence | Review |
|---|---|
| Weekly | Crawl errors, indexation changes, cert expiry alert (T1-02), uptime |
| Monthly | Impressions/clicks by section; conversion events; new vs lost queries; branded vs non-branded |
| Quarterly | Full re-audit: duplication scan, internal-link distribution (V1–V5), CWV field data, competitor re-check with Nepal-local verification (E12) |
| Per batch | Before/after on the specific URLs touched — never site-wide attribution for a scoped change |

---

## 6. Success criteria per workstream

Each is a **directional** criterion. None is a promise.

| Workstream | Criterion |
|---|---|
| T1-01 measurement | GSC + GA4 reporting; ≥1 conversion event firing |
| T1-02 certificate | Renewal confirmed both hosts; alert tested |
| T2-01 category hubs | Each hub indexed within 30 days; impressions for category-level queries where none existed |
| T1-03 consolidation | Redirects resolve 301; no crawl-error spike; retained-page performance ≥ combined pre-consolidation performance |
| Entity work | GBP verified; consistent NAP across ≥4 properties; branded impressions rising |
| T2-02 WebP | Six assets <200 KB; no CLS regression from 0 |

---

## 7. What will not be promised

Per engagement terms and plain honesty:

- **No ranking guarantees.** Positions are Google's to assign.
- **No traffic or lead forecasts.** No baseline exists from which to forecast.
- **No indexing guarantees.** Submission is a request, not an instruction.
- **No timeline for favicon display.** Recrawl and SERP presentation are entirely Google-controlled.
- **No attribution of general improvement to a specific change** without a controlled before/after on the affected URLs.

Where a change cannot be measured, that will be stated rather than credited.

---

## 8. Evidence blocking this plan

| ID | Evidence | Blocks |
|---|---|---|
| **E1** | GSC + GA4 access, or read-only export | **Everything in §4–§6** |
| E10 | Dates of any pre-1-Sep HTTPS outage | Explains any crawl anomaly in the baseline |
| E12 | Nepal-local SERP verification | Validates the competitor read |

**E1 is the single most valuable unblocked action available.** It costs almost nothing, carries no risk, and converts the majority of this audit from hypothesis to fact.
