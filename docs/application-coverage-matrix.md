# Application coverage matrix

What this records: for each of the 33 products, whether a buyer standing on that
product page can reach a job-led guide, and where they cannot, why that is the
right answer rather than an outstanding gap.

The audit behind this file reads the **rendered English product pages**, not the
data files. An article existing somewhere in the repository has never counted as
coverage here; the question is what the product page actually links to.

Two different things are easy to confuse, and the distinction is the point.

- **`/applications/` pages are job-led.** Written for someone who makes a thing
  and wants to know how it is made: "cultured marble manufacturing", "FRP
  effluent and process tanks". They carry a process, the characteristics the job
  demands, and what to settle before ordering.
- **Application Guide resources in `/resources/` are product-led.** They set out
  the contexts a product's own Technical Data Sheet lists. They answer "what is
  this grade documented for", not "how is this thing made".

A product without a `/applications/` page is not uncovered if the job it belongs
to is already covered, or if there is no distinct job to write about.

## Subject versus material

Every application declares the product it is **about** in `primaryProductSlugs`.
Other products it needs sit in `relatedProductSlugs`. Product pages surface the
guides they are the subject of; where a product is never a subject, they fall
back to the jobs it is used in. This is why no gelcoat or GP Yellow guide appears
on GP Clear Resin, and the audit asserts that: it reports any application
surfaced on a product page that is neither subject nor declared material, and
that list is currently empty.

Guides a product is the subject of are now shown in full rather than capped at
six. The cap had hidden five of GP Clear Resin's eleven and one of GP Yellow's
seven behind no route at all.

## Products with a job-led guide of their own

| Product | Subject of |
| --- | --- |
| GP Clear Resin | the eleven `resin-for-*` guides |
| GP Yellow Resin | the seven `gp-yellow-resin-for-*` guides |
| Lamination Resin | the six lamination guides |
| GP Gelcoat Resin | the five `gelcoat-for-*` guides |
| Vinyl Ester Resin | four guides: chemical tanks, pipelines and scrubbers, filament winding, pultrusion |
| Clear Casting Resin | three epoxy casting guides |
| Marble Resin | Cultured Marble and Artificial Stone Manufacturing |
| DMC/SMC Resin | DMC and SMC Compression Moulding |
| Button Grade Resin | Polyester Button Manufacturing |
| Fire Retardant Resin | Fire-Retardant FRP Panels, Cladding and Enclosures |
| ISO Fire Retardant Resin | FRP for Corrosive Service With a Fire Requirement |
| Roof Light Resin | Roof Light Sheet Resin for FRP Roofing and Skylight Sheets |
| ISO Polyester Resin | FRP Effluent and Process Tanks |
| ISO Gelcoat | Gelcoat for Swimming Pools and Water Slides |
| UV Stabilized Sheet Grade Yellow Resin | Coloured FRP Sheet and Cladding Manufacturing |
| Polyester Putty Resin | Manufacturing Polyester Putty and Filler Products |
| Fiberglass Epoxy Resin | FRP Repair and Reinforcement with Epoxy |
| GP Quartz Resin | Engineered Quartz and Cast Stone Surface Manufacturing |

## Products reached as a declared material

These are correctly described as supporting materials on real fabrication pages
rather than given a page of their own. That is a deliberate decision per product,
recorded here.

| Product | Appears in | Why not a page of its own |
| --- | --- | --- |
| MEKP Hardener | 39 jobs | An initiator, never the subject of a job. Its own buyer guide covers the material. |
| Cobalt Octoate | 17 jobs | An accelerator. The separation rule that matters is in its own guide, not in a job page. |
| Glass Fiber Mat | 28 jobs | Reinforcement. Its selection belongs inside each laminating job. |
| FRP Polyester Pigment | 15 jobs | Colour. Nothing is manufactured *from* pigment. |
| Epoxy Hardener | 4 jobs | A curing agent whose pairing is the question, and pairing is covered where it arises. |
| Sheet Grade Yellow Resin | 4 jobs | Shares its jobs with the roofing and cladding guides; a parallel page would repeat them. |
| Paint Brushes | 4 jobs | A tool. Correctly listed where hand lay-up and gelcoat work actually happens. |
| Soap Stone Powder | 3 jobs | A filler, listed in the compounding, putty and quartz jobs that use it. |
| Epoxy Art Resin | 1 job | Present in the epoxy casting process guide; its distinct work is covered by the casting pages. |
| Wax Polish | 1 job | A mould release. Its failure modes are a troubleshooting subject, not a manufacturing job. |
| Styrene Monomer | 1 job | A reactive diluent and a component of every polyester resin supplied. Not something anything is made from. |
| NC Thinner | 1 job | A lacquer solvent and tool-cleaning material. Listed on the repair job where it is genuinely used. |

## Justified exceptions

Three products surface no application at all, and each has a reason.

**Unsaturated Polyester Resin.** Not a separate product. It is the generic
commercial description under which the GP Clear grade is also sold, and the
supplier documentation confirms the two are the same formulation. GP Clear is
already the subject of eleven job-led guides; a second set under the generic name
would split identical content across two URLs. Covered by
`what-is-gp-polyester-resin` and `how-to-select-polyester-resin-for-frp-manufacturing`,
both of which link it.

**GP White Resin.** A pigmented member of the general-purpose family. The jobs it
is used for are the jobs the clear grade is the subject of, and what differs is
appearance rather than process, so a parallel set of pages would repeat the clear
grade's content with one adjective changed. Covered by eleven resources including
`applications-of-gp-white-resin` and a direct comparison against GP Clear.

**Bisphenol Resin.** A speciality corrosion grade whose selection is driven by the
chemical, its concentration and its temperature rather than by the shape of the
part. The job-led territory that question belongs to is already covered by the
vinyl ester pages above it and the ISO Polyester effluent and process tank page
below it. Covered by six resources including `bisphenol-resin-applications` and a
technical data and document check.

## Evidence boundaries

Three grades have no supplier Technical Data Sheet or Safety Data Sheet on file:
ISO Polyester Resin, ISO Gelcoat and UV Stabilized Sheet Grade Yellow Resin.
Their pages carry no figures and say so on the page.

The product posters published in commit 4441104 print viscosity, gel time,
styrene and pack-size values, and the same three values appear on two different
chemistries. Those figures are **not** repeated in article text as verified
specifications. Artwork is not a data sheet, and each affected page states that
explicitly rather than leaving the omission unexplained.

Where a grade does have documents on file, published values are quoted with
Samrat Poly Resins, India named as the issuer. Samrat FRP Traders is the Nepal
supplier, importer and reseller throughout, never the manufacturer.

## Keeping this honest

If a product moves out of an exception — a supplier document arrives describing a
distinct process, or a buyer asks for a job this range does not cover — it belongs
in the first table with a page written from the job. The exceptions here are
judgements about present evidence, not permanent decisions.

No entry depends on photography. The twelve newest pages carry no images, and
both the applications index tile and the guide hero fall back to a text-first
treatment rather than requesting a file that does not exist.
