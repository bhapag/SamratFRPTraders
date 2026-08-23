// Shared utilities for the release-gate suite. Every check module imports
// from here rather than re-implementing dist traversal/HTML parsing —
// keeps the individual checks short and their output consistent.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

export const ROOT = process.cwd();
export const DIST = join(ROOT, 'dist');
export const PROD_ORIGIN = 'https://samratfrptraders.np';

export function requireDist() {
  if (!existsSync(DIST)) {
    throw new Error('dist/ not found — run `npm run build` before the release gate.');
  }
}

export function collectFiles(dir, { ext = null } = {}, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, { ext }, out);
    else if (!ext || extname(entry.name) === ext) out.push(full);
  }
  return out;
}

export function collectHtmlFiles(dir = DIST) {
  return collectFiles(dir, { ext: '.html' });
}

// Converts an absolute dist file path to its site-relative URL path, e.g.
// dist/products/gp-clear-resin/index.html -> /products/gp-clear-resin/
export function toRoute(distFile) {
  let route = `/${distFile.slice(DIST.length + 1).replace(/\\/g, '/')}`;
  route = route.replace(/index\.html$/, '');
  if (route === '') route = '/';
  return route;
}

export function readRoute(route) {
  const clean = route.endsWith('/') || route === '' ? `${route}index.html` : route;
  const file = join(DIST, clean.replace(/^\//, ''));
  return existsSync(file) ? readFileSync(file, 'utf8') : null;
}

export function fileExists(distRelativePath) {
  const file = join(DIST, distRelativePath.replace(/^\//, ''));
  return existsSync(file) && statSync(file).isFile();
}

export function fileSize(distRelativePath) {
  const file = join(DIST, distRelativePath.replace(/^\//, ''));
  return existsSync(file) ? statSync(file).size : -1;
}

// ---- Minimal HTML fragment extraction (regex-based — the dist output is
// our own build's fully-controlled markup, not third-party HTML, so a full
// parser is not warranted here). ----

export function extractTag(html, tagRegex) {
  const m = html.match(tagRegex);
  return m ? m[1] : null;
}

export function htmlLang(html) {
  return extractTag(html, /<html[^>]*\blang="([^"]*)"/i);
}

export function title(html) {
  return extractTag(html, /<title>([^<]*)<\/title>/i);
}

export function metaContent(html, name) {
  const re = new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, 'i');
  return extractTag(html, re);
}

export function metaProperty(html, property) {
  const re = new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]*)"`, 'i');
  return extractTag(html, re);
}

export function canonical(html) {
  return extractTag(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
}

export function hreflangs(html) {
  const out = [];
  const re = /<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"/gi;
  let m;
  while ((m = re.exec(html))) out.push({ hreflang: m[1], href: m[2] });
  return out;
}

export function robotsMeta(html) {
  return metaContent(html, 'robots');
}

export function jsonLdBlocks(html) {
  const out = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

export function hrefs(html) {
  const out = [];
  // href/src cover ordinary links/images/scripts; data-src and poster cover
  // lazy-loaded and video-poster patterns used on this site (e.g.
  // SupplyVideo.astro); og:image/twitter:image meta `content` is a real
  // asset reference too, just not an href/src attribute.
  const re = /\s(?:href|src|data-src|poster)="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  const metaRe = /<meta\s+property="(?:og|twitter):image"\s+content="([^"]*)"/gi;
  while ((m = metaRe.exec(html))) out.push(m[1]);
  return out;
}

// ---- Severity-bucketed reporter shared by every check module ----

export class Report {
  constructor(name) {
    this.name = name;
    this.errors = [];
    this.warnings = [];
    this.infos = [];
  }

  error(msg) {
    this.errors.push(msg);
  }

  warn(msg) {
    this.warnings.push(msg);
  }

  info(msg) {
    this.infos.push(msg);
  }

  get ok() {
    return this.errors.length === 0;
  }

  print() {
    const head = `\n== ${this.name} ==`;
    console.log(head);
    for (const i of this.infos) console.log(`  INFO  ${i}`);
    for (const w of this.warnings) console.log(`  WARN  ${w}`);
    for (const e of this.errors) console.log(`  FAIL  ${e}`);
    if (this.errors.length === 0) console.log('  PASS');
  }
}
