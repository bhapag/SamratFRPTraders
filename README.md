# Samrat FRP Traders Nepal website

## Project

Local technical foundation for the planned Samrat FRP Traders Nepal website.

## Status

Local-only technical and frontend foundation. The active pages remain provisional,
non-production scaffolds and are marked `noindex`.

## Stack

- Astro 7.0.6
- JavaScript
- npm
- Static generation
- `@astrojs/sitemap`

## Runtime

Node.js `>=22.12.0`.

## Commands

```bash
npm ci             # deterministic install after package-lock.json exists
npm run dev        # local development server
npm run build      # static production build in dist/
npm run preview    # preview the built site
npm run check:links # validate internal links after a build
```

## Project structure

```text
public/             static hosting files, including provisional robots policy
scripts/            build-time verification utilities
src/components/     shared header, footer, status notice, and product-preview shell
src/data/           neutral site settings and explicit placeholder product records
src/layouts/        shared HTML and metadata layout
src/pages/          Home, About, Products, Contact, and 404 scaffolds
src/styles/         shared base styles and curated frontend foundation
```

## Proven base

Selected engineering patterns were adapted from the existing Samrat Poly Resins website: Astro static
generation, sitemap configuration, strict TypeScript settings, responsive navigation principles,
accessibility mechanics, reusable layout structure, visual tokens, page-composition patterns,
static-host headers, and internal-link checking.
This project is not a business-content clone and has fresh Git history.

## Claude Max Handoff

### Current verified baseline

- Astro 7.0.6, JavaScript, npm, Node.js `>=22.12.0`, static generation, and `@astrojs/sitemap`.
- GitHub: `https://github.com/bhapag/SamratFRPTraders.git`; active branch: `main`.
- Local workflow: run `npm ci`, then `npm run dev`.
- Verification workflow: run `npm run build`, then `npm run check:links`; use `npm run preview` for the built site.
- Current architecture: reusable static shell with Home, About, Products, Contact, and custom 404 routes. Product records and the disabled contact form are scaffolds; no live integration or deployment is configured.

### What was inherited from Samrat Poly Resins

Only engineering and design patterns were adapted: static Astro architecture, responsive and accessible shell mechanics, visual tokens, page-composition patterns, passive security headers, and link checking. No business claims, datasets, contact information, or media were inherited.

### Important business restriction

**Samrat FRP Traders is currently treated as a trader/supplier, not as the manufacturer.**

### Intentionally provisional

Current customer-facing content, product previews, titles, and descriptions are development scaffolding rather than final Nepal market or SEO copy.

### Do not assume

Do not assume a Nepal business address, telephone, email, VAT/PAN, registration data, product availability, brands, supplier relationships, delivery areas, prices, stock, certifications, testimonials, manufacturing ownership, or document/media rights. Each requires an approved source.

### Intentionally deferred

Nepal market research; competitor research; final keyword research and information architecture; real product and content population; final SEO, advanced schema, and business copy; contact integration; analytics and Search Console; hosting, DNS, and the `.np` domain; final QA and launch are deferred.

### Important crawl state

Every page is intentionally `noindex, nofollow`, and `robots.txt` disallows all crawling. Claude Max must review both controls before any production launch.
