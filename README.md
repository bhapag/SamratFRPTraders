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

## Temporary and provisional areas

- Final Nepal business information is pending.
- Final product data and supporting documents are pending.
- Final SEO strategy and page architecture are pending.
- Contact details and form integration are pending.
- Analytics and search-platform integration are pending.
- Production hosting, deployment, and launch configuration are pending.
- `robots.txt` currently blocks all crawling and every page is marked `noindex`.

## Deferred to the Nepal specialist and Claude Max

Research, SEO, final content, architecture refinement, advanced technical SEO, conversion optimization,
full QA, production hardening, and deployment/launch verification are intentionally deferred.
