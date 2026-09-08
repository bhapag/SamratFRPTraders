# Redirect Map — Knowledge Hub consolidation

**Implemented:** commit `413f25f` (deployed) · **Recorded:** 2026-09-09
**Config:** `vercel.json` → `routes[]`, placed before `{ "handle": "filesystem" }`
**Scope:** 96 retired bilingual URLs → 12 retained canonical guides

---

## Why

`src/data/new-product-resources.js` previously generated 48 articles from a single
body template with the product name substituted in — six products × eight article
formats. Measured `<main>`-only five-gram overlap between pages about chemically
unrelated products (a cobalt accelerator, a reactive diluent, a lacquer thinner)
was **58.2% / 58.2% / 59.8%**, at 459–463 words each.

The comparison/explainer articles in the same library measured **1.7–2.2%** overlap
at 516–699 words, which is what a genuinely differentiated set looks like. Those
were **retained untouched**.

The generator was replaced with six hand-written, product-specific guides. Measured
overlap across the six retained guides is now **4.2–6.7% (mean 5.3%)**, at 816–957
words.

> A similarity percentage is not proof of a Google penalty, and none is claimed here.
> The justification is that a template with a swapped noun did not give a buyer a
> reason to read eight separate pages.

---

## Mapping

Every retired URL maps to **its own product's** guide — never to a generic category
or the homepage. Single hop, permanent (301), same language.

Retired suffixes, per product:
`-what-is` · `-applications` · `-buyer-guide` · `-selection` · `-handling` ·
`-troubleshooting` · `-comparison` · `-faq`

| Product | Language | Retired pattern | Destination |
|---|---|---|---|
| Cobalt Octoate | NE | `/resources/cobalt-octoate-{suffix}/` | `/resources/cobalt-octoate-guide/` |
| Cobalt Octoate | EN | `/en/resources/cobalt-octoate-{suffix}/` | `/en/resources/cobalt-octoate-guide/` |
| Styrene Monomer | NE | `/resources/styrene-monomer-{suffix}/` | `/resources/styrene-monomer-guide/` |
| Styrene Monomer | EN | `/en/resources/styrene-monomer-{suffix}/` | `/en/resources/styrene-monomer-guide/` |
| NC Thinner | NE | `/resources/nc-thinner-{suffix}/` | `/resources/nc-thinner-guide/` |
| NC Thinner | EN | `/en/resources/nc-thinner-{suffix}/` | `/en/resources/nc-thinner-guide/` |
| Paint Brushes | NE | `/resources/paint-brushes-{suffix}/` | `/resources/paint-brushes-guide/` |
| Paint Brushes | EN | `/en/resources/paint-brushes-{suffix}/` | `/en/resources/paint-brushes-guide/` |
| Soap Stone Powder | NE | `/resources/soap-stone-powder-{suffix}/` | `/resources/soap-stone-powder-guide/` |
| Soap Stone Powder | EN | `/en/resources/soap-stone-powder-{suffix}/` | `/en/resources/soap-stone-powder-guide/` |
| Wax Polish (Mould Release) | NE | `/resources/wax-polish-{suffix}/` | `/resources/wax-polish-guide/` |
| Wax Polish (Mould Release) | EN | `/en/resources/wax-polish-{suffix}/` | `/en/resources/wax-polish-guide/` |

**12 regex rules covering 96 retired URLs.** The alternation lists the eight suffixes
explicitly, so `-guide` can never match its own rule — no loop is possible.

---

## Integrity properties

| Property | State |
|---|---|
| Hops | Single. Destination returns 200 directly |
| Status | 301 permanent |
| Language | Preserved — NE stays NE, EN stays EN |
| Loops | Impossible; `-guide` excluded from the alternation |
| Sitemap | Retired URLs absent; only the 12 canonical guides listed |
| Internal links | Rewritten to destinations; no internal link relies on a redirect |
| Cross-references | Verified zero other resources referenced the retired slugs |
| Canonical/hreflang | Retained guides carry reciprocal `ne-NP` / `en-NP` / `x-default` |

Verified live after deployment (samples across all six products, both languages) —
each retired URL returns `301` to its own product's guide, and each destination
returns `200`.

---

## Retained, deliberately untouched

The differentiated comparison/explainer articles (e.g.
`epoxy-hardener-vs-mekp-hardener`, `pet-resin-vs-gp-resin`,
`vinyl-ester-resin-vs-epoxy-resin`) and the one-off suffix pages that were **not**
part of the templated family (e.g. `gp-white-resin-buyer-guide`, 495 words, 2.2%
overlap) were left exactly as they were. They serve distinct intents and were not
consolidated.

---

## Rollback

The consolidation is two reversible pieces:

1. **Redirects** — delete the 12 rules from `vercel.json` `routes[]`. Everything
   before `{ "handle": "filesystem" }` and the two legacy `/ne/` rules must remain.
2. **Content** — `git revert 413f25f` restores the previous
   `src/data/new-product-resources.js` generator and the 48 generated articles.

Reverting content without removing the redirects would leave the 48 restored URLs
redirecting away from themselves. Remove the redirects first, or revert both together.
