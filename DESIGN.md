---
version: alpha
name: Samrat-FRP-Traders-design-system
description: "A premium industrial B2B system for a Nepal-based FRP/resin chemicals trader — near-black charcoal canvas (#0d0f12) with a navy-tinted ambient wash and a single restrained gold accent (#d4af37) reserved for primary actions, active states, and the eyebrow/label voice. Oswald Condensed carries display type (mechanical, engineered), Inter carries body copy, JetBrains Mono carries every eyebrow, label, button, and stat. The system inherits its discipline from Carbon (IBM) — one accent color, flat/restrained surfaces, dense technical-information hierarchy — and from HashiCorp — mandatory eyebrow labels above every section, a controlled per-category identity system, tight-display/relaxed-body typographic contrast. Neither reference's branding, colors, or dark-canvas totality is copied; both are used only for their structural discipline, layered onto Samrat's own existing navy/gold identity."

colors:
  canvas: "#0d0f12"
  canvas-2: "#14181e"
  canvas-3: "#1b2129"
  wash-navy-top: "#0c1530"
  wash-navy-mid: "#0d1428"
  line: "#2b323b"
  line-2: "#3b4551"
  ink: "#f4f2ee"
  ink-dim: "#adb4bf"
  ink-faint: "#858d99"
  accent-gold: "#d4af37"
  accent-gold-light: "#efd37e"
  accent-gold-dark: "#9c741e"
  focus: "#8ec5ff"
  whatsapp: "#25d366"

typography:
  font-display: "Oswald, Arial Narrow, Impact, Roboto Condensed, Helvetica Neue, Segoe UI, sans-serif"
  font-body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  font-mono: "JetBrains Mono, Cascadia Mono, SFMono-Regular, Consolas, Liberation Mono, monospace"

spacing:
  xxs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
  xxxl: "4.5rem"
  section: "clamp(4.8rem, 10vw, 8rem)"
---

## Overview

Samrat FRP Traders is a B2B chemicals trader, not a manufacturer, not a SaaS product, and not a consumer brand. Every design decision serves one of three jobs: help a buyer find the right product fast, prove the business is real and reachable, or get the buyer to WhatsApp/call/email. Nothing on the site should exist purely for decoration.

The existing identity — near-black charcoal canvas, navy ambient wash, gold accent, Oswald Condensed display type — is correct for this brand and is **preserved, not replaced**. This document formalizes it, tightens its discipline, and removes the handful of places where decoration had started to outweigh function (perpetual looping animations, stacked atmospheric gradients, heavier glass-blur than the content needs).

**What "premium industrial" means here, concretely:**
- One accent color (gold), used sparingly and consistently — never a second brand hue, never a rainbow of category colors.
- Flat, bordered surfaces over glassmorphism. A little translucency at the sticky header is fine (it's functional — it keeps content legible as it scrolls under). Backdrop-blur "glass panels" as pure decoration are not.
- Motion earns its place once, on entry (staggered fade-up), not forever. A hero image that drifts for the entire time a visitor reads the page is spending GPU and battery on nothing.
- Dense, confident information — TDS/SDS counts, product counts, category counts — presented as real numbers from real data, never invented.
- Every claim about the business stays exactly what it already truthfully is: trader, supplier, importer, reseller of Samrat Poly Resins, India's materials. Never manufacturer.

**Borrowed discipline (not branding):**
- From IBM/Carbon: one accent color rule; flat/restrained surface hierarchy (surface-lift and 1px hairlines over drop shadows); dense, legible technical-information layout; consistent 4px-multiple spacing rhythm.
- From HashiCorp: a mandatory eyebrow label above every section (already present here, now applied consistently); tight line-height on display type paired with relaxed line-height on body type as the deliberate "voice" of the brand; a controlled, presentation-only per-category color identity for the 8 product categories (implemented as a small CSS-only accent cycle, not stored in product data — product facts stay untouched).

## Colors

### Surface
- **Canvas** (`{colors.canvas}` #0d0f12): page background.
- **Canvas 2 / 3** (`{colors.canvas-2}` #14181e / `{colors.canvas-3}` #1b2129): card and panel surfaces, one and two steps up from canvas.
- **Navy wash** (`{colors.wash-navy-top}` / `{colors.wash-navy-mid}`): the single ambient gradient behind the body — this is the one atmospheric touch the system keeps; it is not duplicated as a second gradient inside every section.
- **Hairline** (`{colors.line}` / `{colors.line-2}`): 1px borders on cards, dividers, inputs.

### Text
- **Ink** (`{colors.ink}`): headlines, primary body.
- **Ink Dim** (`{colors.ink-dim}`): secondary body, leads.
- **Ink Faint** (`{colors.ink-faint}`): captions, meta, footer.

### Accent (single, scarce)
- **Gold** (`{colors.accent-gold}` #d4af37): the only chromatic accent. Reserved for: primary CTA fill, active nav-link underline, eyebrow text, focus/hover accents on interactive elements, and the one gold gradient text treatment (`.metal-text` / `.hl`) used at most once per page.
- **Gold Light** (`{colors.accent-gold-light}`): hover state of gold text/links.
- **Gold Dark** (`{colors.accent-gold-dark}`): pressed/deep variant, used in gradients only.
- **WhatsApp Green** (`{colors.whatsapp}`): reserved exclusively for WhatsApp affordances (nav link, floating button) — it is a recognizable utility color, not a brand accent, and must not spread beyond WhatsApp entry points.

### Do not
- Introduce a second chromatic brand accent anywhere.
- Give the 8 product categories saturated, distinct rainbow colors. The category-identity system (below) uses one accent hue at varying restrained opacity/position, not eight different colors.

## Typography

- **Display** (`{typography.font-display}`, Oswald Condensed): h1–h3, hero title, brand name. Uppercase, tight line-height (~1.03–1.1), positive-but-small letter-spacing. Condensed width is deliberate — it reads as engineered/technical, not editorial.
- **Body** (`{typography.font-body}`, Inter): all paragraph copy, card body text. Relaxed line-height (1.6–1.7) — the tight-display/relaxed-body contrast is the brand's typographic voice, same principle as HashiCorp's, executed with Samrat's own faces.
- **Mono** (`{typography.font-mono}`, JetBrains Mono): eyebrows, nav links, buttons, stat labels, footer legal text, form labels. Uppercase, wide tracking (0.06–0.18em). This is what gives the brand its "spec sheet" credibility register — keep it consistent, don't let body-weight sans creep into label positions.

### Principles
- Every meaningful section gets an eyebrow (`.eyebrow`, mono, gold, uppercase, tracked) above its heading. No section should start cold with a heading and no label — this is the HashiCorp-inspired discipline formalized as a rule here, not just a pattern that happens to recur.
- Headlines stay condensed-uppercase-tight; body stays sans-relaxed. Don't blend the two roles.
- Numbers that are real counts (product count, TDS/SDS count, category count) render in mono, not proportional sans — mono numerals read as data, not marketing copy.

## Layout & Spacing

- Base rhythm: 4px-multiple scale (`{spacing.xxs}` 4px through `{spacing.xxxl}` 72px), section padding `{spacing.section}` (clamps 4.8rem–8rem). This was already the site's implicit rhythm; it's now named as explicit tokens so new work stays on-grid instead of picking ad-hoc rem values.
- Max content width stays at the existing `--max-width` (73.75rem / ~1180px) — appropriate for a lean 6-page-type site, not a wide enterprise dashboard grid.
- Card grids use `auto-fill`/`auto-fit` with a `minmax` floor (already the pattern in `CatalogCard`, `WhyChoose`, applications gallery) — keep this; it's the correct, non-generic choice for content of varying count that must still look intentional at any viewport.

## Motion

- **Keep:** the one-time staggered entrance (`hero-fade-up`, `enter-up`) on hero/page-hero content, and the scroll-reveal system (`data-reveal` + IntersectionObserver) for below-the-fold sections. Both already correctly no-op under `prefers-reduced-motion: reduce`.
- **Cut:** animations that loop forever with no interaction trigger and no informational purpose — the 26s hero-image drift, the 50s hero-grid-line drift, and the 8s looping gold "shine sweep" on `.hl` text. These run for the entire time a visitor is on the page, cost GPU/battery continuously, and don't communicate anything the static state doesn't. A single one-time sheen (like the existing `.laminate::after` figure-sheen, which plays once on load and stops) is the right amount of "premium" motion — repeat that pattern, don't loop it.
- Transitions on hover/focus (200–300ms, `--ease-premium`) stay as-is — that's the "interface feels alive" layer the redesign checklist calls for, and it's already correctly implemented.

## Components

### Buttons
Unchanged shape/behavior (square corners, mono uppercase label, gold-fill primary, transparent-bordered secondary, sheen-on-hover). This is a good, already-restrained pattern — square corners read as engineered, matching the IBM/Carbon "don't round CTAs" principle independently arrived at here.

### Cards (CatalogCard, WhyChoose, app-card, resource-card)
Bordered `{colors.canvas-3}` surface, 1px hairline, hover lift + gold-tinted border brighten. This is the system's one card pattern — keep it singular across the site rather than introducing new card treatments per section.

### Category identity (new)
Each of the 8 product categories gets a small, consistent visual marker — not a new color per category, but a **restrained position/weight cycle of the single gold accent** (e.g., a left-edge accent bar whose opacity/position varies slightly by category index) plus the category's own mono eyebrow label already in use. This gives a buyer a sense of "which family am I looking at" without introducing chromatic noise. Implemented as a CSS `nth-of-type` cycle scoped to the homepage/category-index card grids — no new field is added to `products.js`.

### Trust badges (hero-trust-item)
Simplify from heavy backdrop-blur glass to a flat bordered surface (`{colors.canvas-3}` + 1px gold-tinted hairline). The blur was decorative rather than functional (nothing behind these badges needs obscuring) — dropping it removes a GPU cost and a "trying too hard" glass-morphism tell without losing the premium feel, which comes from the border/typography/spacing instead.

## Do's and Don'ts

### Do
- Keep one gold accent, used scarcely and consistently.
- Keep the canvas dark — this is correct for the brand and was already true before this document existed.
- Put an eyebrow above every section.
- Let real data (24 products, 48 TDS/SDS docs, 37 application guides, 8 categories) speak through mono numerals — never invent a stat.
- Use transform/opacity for any motion; keep it one-time on entry, not looping.
- State the business truthfully everywhere: trader/supplier/importer/reseller, Samrat Poly Resins India as the documented supplier.

### Don't
- Don't add a second brand color or a rainbow of category colors.
- Don't push the canvas toward flat pure-black (#000) — the navy-tinted warmth is part of the identity.
- Don't stack more than one atmospheric gradient per surface.
- Don't use glassmorphism as decoration where nothing needs obscuring.
- Don't let any animation loop indefinitely without a reason.
- Don't use unattributed supplier/factory photography as decorative wallpaper — if a photo needs the "this is Samrat Poly Resins, India's facility, not ours" caption to be honest, it needs that caption to be visible, not hidden behind `aria-hidden`/`alt=""`. Prefer non-photographic material/texture treatment for purely decorative surfaces.
- Don't invent certifications, testimonials, factories, or facts not already in the codebase's data files.

## Responsive Behavior

- Existing breakpoints stay: 820px (nav collapse to hamburger), 860px/56rem (hero/footer grid collapse), 48rem/40rem/32rem (progressive single-column collapse). These are already sensible and tested — no framework or breakpoint-scale change in this wave.
- Touch targets: 44px minimum already enforced on nav links (2.75rem) and category filter chips (verified in a prior QA pass) — any new interactive element in this wave holds the same floor.

## Known Gaps / Wave Boundary

- This document covers Wave 1 scope only: header, footer, homepage, and the shared button/section/card foundations. Product-detail pages, resource articles, and application pages are visually unchanged in this wave and will inherit this system in a later pass.
- The per-category accent cycle is presentation-only (CSS), deliberately not persisted to `products.js` — if the owner later wants true per-category brand colors backed by data, that's a separate, explicit decision.
