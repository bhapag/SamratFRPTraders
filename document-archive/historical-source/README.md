# Historical source documents (not published)

Files here are kept byte-for-byte as they were published or received. They are
outside `public/`, so the build never copies them to the website.

## tds/

| File | SHA-256 | Why it is here |
| --- | --- | --- |
| `gp-quartz-resin-tds.original-with-covered-gp-clear-layer.pdf` | `00b9896f830292e745b70c8a4b672ba11544977902899cb7284f8c0678289dc2` | Published at `/tds/gp-quartz-resin-tds.pdf` until September 2026. The page draws GP Clear Resin's complete sheet (SPR-TDS-GCR) and then paints the GP Quartz sheet (SPR-TDS-GQR) over it, so the covered GP Clear text stayed in the text layer. |
| `iso-fire-retardant-resin-tds.original-with-covered-gp-clear-layer.pdf` | `3537e4111adfc4e46391483db84c968ea9dd5e1c40682f31cd4e9fcc41a9f7c9` | Same construction for ISO Fire Retardant Resin (SPR-TDS-IFR) over GP Clear Resin. |

The public replacements keep every visible page element, the document
reference, revision, date, page size and all specification values. Only text
drawn under later opaque paint was removed:

- `/tds/gp-quartz-resin-tds.pdf` — SHA-256 `f465319da89028aaf3920194ed4fbf5b20f72f16382967aed82274cc8cfbf7c6`
- `/tds/iso-fire-retardant-resin-tds.pdf` — SHA-256 `782578a5c415f6b03ab613d986fdf72cf5db2bfd6a2864da6135acef572f0205`

Method: each text block, then each remaining text operator, was blanked with
spaces of equal length (so byte offsets, the xref table and stream lengths are
unchanged) and kept blanked only if a pdf.js render of the page stayed
pixel-identical at 144 and 300 dpi. One operator per file — the last line of
GP Clear's description — showed 6 px of its glyphs below the covering
rectangle at 300 dpi; that residue was removed deliberately. File size is
unchanged and no revision was created.

## sds/

| File | SHA-256 | Why it is here |
| --- | --- | --- |
| `pet-resin-sds.pdf` | `fb66e061bf16caace2cd5d34148e72d33ddf9278735cf4c65f2efb17f8087d2d` | SPR-SDS-PET, issued for PET Resin, a sheet-grade resin. It was linked as the Safety Data Sheet for Polyester Putty Resin, but its applicability to that putty-and-polish grade is not established, so it was withdrawn from `/sds/pet-resin-sds.pdf` in September 2026. Unchanged. |

Document history, not an open task: the supplier SDS files state flash point as
"not independently tested" while the matching TDS files give 32 °C. No SDS has
been edited.
