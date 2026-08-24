// vercel.json routing config validation. This can only verify the CONFIG
// is syntactically sound and internally consistent with the local build —
// it cannot prove Vercel will actually apply it in production. That gap is
// called out explicitly in the report rather than papered over.
//
// The project currently expresses redirects, filesystem handling, and the
// locale-aware custom-404 rules as a single `routes` array (see vercel.json
// and the commit history around the /en/* 404 fix) rather than the separate
// top-level `redirects` key. Vercel's own docs state `routes` can coexist
// with `redirects`, but that did not hold in live testing on this project —
// mixing the two silently dropped the `redirects` array in production — so
// `routes` is the sole mechanism now. This module understands both: the
// current `routes`-based config (primary path) and the legacy standalone
// `redirects` array (kept for backward compatibility if the project ever
// reverts).

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Report, ROOT, fileExists } from './lib.mjs';

const REDIRECT_STATUSES = [301, 302, 303, 307, 308];

// Normalizes a legacy top-level `redirects` array entry to the shape the
// rest of this module works with.
function fromLegacyRedirects(redirects) {
  return redirects.map((rule, i) => ({
    index: i,
    source: rule.source,
    destination: rule.destination,
    statusCode: rule.statusCode,
    raw: rule,
  }));
}

// Extracts the redirect-shaped entries from a `routes` array: a route with
// a 3xx `status` and a `headers.Location` is functionally a redirect, using
// the same `src`/`status`/`headers.Location` pattern Vercel's own docs show
// as the `routes` equivalent of `redirects`.
function fromRoutesArray(routes) {
  return routes
    .map((rule, i) => ({ rule, i }))
    .filter(({ rule }) => REDIRECT_STATUSES.includes(rule.status) && rule.headers?.Location)
    .map(({ rule, i }) => ({
      index: i,
      source: rule.src,
      destination: rule.headers.Location,
      statusCode: rule.status,
      raw: rule,
    }));
}

function validateRedirectRules(r, rules) {
  const sources = new Set();
  for (const rule of rules) {
    const label = `routing rule #${rule.index}`;
    if (!rule.source) r.error(`${label}: missing redirect source pattern`);
    if (!rule.destination) r.error(`${label}: missing redirect destination`);
    if (typeof rule.statusCode !== 'number') r.error(`${label}: missing/invalid numeric redirect status`);
    else if (!REDIRECT_STATUSES.includes(rule.statusCode)) r.warn(`${label}: unusual redirect status ${rule.statusCode}`);

    if (rule.source === rule.destination) r.error(`${label}: source and destination are identical ("${rule.source}") — this is a self-redirect loop.`);
    if (sources.has(rule.source)) r.error(`${label}: duplicate redirect source ("${rule.source}") already declared by an earlier rule.`);
    sources.add(rule.source);
  }

  // A -> B where B is itself a redirect source elsewhere is a chained
  // redirect (not necessarily broken, but worth surfacing).
  for (const rule of rules) {
    if (rule.destination && sources.has(rule.destination)) {
      r.warn(`redirect chain: "${rule.source}" -> "${rule.destination}" -> (destination is itself another rule's source) — verify this isn't an accidental multi-hop chain.`);
    }
  }

  // Static (non-wildcard/non-capture-group) destinations should resolve to
  // a real page in the current build — a redirect to a route that no
  // longer exists is a silent dead end. `:param`-style tokens (legacy
  // redirects) and `$1`-style capture-group backreferences (routes) both
  // mean the destination is dynamic, so those are skipped.
  for (const rule of rules) {
    if (!rule.destination || rule.destination.includes(':') || rule.destination.includes('$')) continue;
    const asDistPath = rule.destination.replace(/^\//, '');
    const candidate = asDistPath.endsWith('/') || asDistPath === '' ? `${asDistPath}index.html` : asDistPath;
    if (!fileExists(candidate) && !fileExists(`${candidate}/index.html`)) {
      r.error(`redirect destination "${rule.destination}" (from source "${rule.source}") does not resolve to a page in the current build.`);
    }
  }
}

export async function run() {
  const r = new Report('REDIRECT + 404 ROUTING CONFIG (local static analysis — CONFIG VERIFIED, not LIVE VERCEL VERIFIED)');

  let raw;
  try {
    raw = readFileSync(join(ROOT, 'vercel.json'), 'utf8');
  } catch {
    r.error('vercel.json not found.');
    return r;
  }

  let config;
  try {
    config = JSON.parse(raw);
  } catch (e) {
    r.error(`vercel.json is not valid JSON: ${e.message}`);
    return r;
  }

  const hasRoutes = Array.isArray(config.routes);
  const hasLegacyRedirects = Array.isArray(config.redirects);

  if (!hasRoutes && !hasLegacyRedirects) {
    r.error('vercel.json declares neither a `routes` array nor a legacy `redirects` array — no redirect/404 routing config found.');
    return r;
  }

  const rules = hasRoutes ? fromRoutesArray(config.routes) : fromLegacyRedirects(config.redirects);
  r.info(`vercel.json declares ${rules.length} redirect rule(s) via ${hasRoutes ? 'the unified `routes` array' : 'the legacy `redirects` array'}.`);

  validateRedirectRules(r, rules);

  // The retired UPR route must redirect, not exist as a live competing page.
  const retiredUprRule = rules.find((rule) => rule.source?.includes('unsaturated-polyester-resin'));
  if (!retiredUprRule) {
    r.warn('no redirect rule found for the retired /products/unsaturated-polyester-resin/ route — verify this is intentional.');
  } else if (fileExists('products/unsaturated-polyester-resin/index.html')) {
    r.error('retired route /products/unsaturated-polyester-resin/ has a redirect rule AND still exists as a live built page — these compete; the redirect source must not also be a real route.');
  } else {
    r.info('retired UPR route redirects correctly and does not exist as a competing live page.');
  }

  // The /ne and /ne/:path* (or routes-equivalent /ne PCRE) rules should not
  // have a live /ne/ counterpart in dist. Both the legacy redirect sources
  // ("/ne", "/ne/:path*") and the routes-style PCRE sources ("^/ne/?$",
  // "^/ne/(.*)$") contain the literal substring "/ne", so a plain substring
  // check is simpler and just as reliable as trying to pattern-match a
  // regex string with another regex.
  const neRules = rules.filter((rule) => rule.source?.includes('/ne'));
  if (neRules.length) {
    r.info(`/ne legacy-prefix redirect rules present (${neRules.length}; cross-checked against dist/ne/ absence in build-routes.mjs).`);
  } else {
    r.warn('no /ne legacy-prefix redirect rules found — verify this is intentional.');
  }

  // ---- routes-specific structural checks: filesystem handling + the
  // locale-aware custom-404 rules. Only meaningful when the unified
  // `routes` array is in use. ----
  if (hasRoutes) {
    const routes = config.routes;
    const fsIndex = routes.findIndex((rule) => rule.handle === 'filesystem');
    const notFoundRules = routes
      .map((rule, i) => ({ rule, i }))
      .filter(({ rule }) => rule.status === 404 && typeof rule.dest === 'string');
    const en404 = notFoundRules.find(({ rule }) => /\/en\//.test(rule.src ?? '') || /\/en\//.test(rule.dest ?? ''));
    const root404 = notFoundRules.find(({ i }) => !en404 || i !== en404.i);

    if (fsIndex === -1) {
      r.error('routes: no `{ "handle": "filesystem" }` entry found — without it, real static pages are not guaranteed priority over the catch-all routing rules below them.');
    } else {
      r.info(`routes: filesystem handler present at position ${fsIndex}.`);
      const misplacedRedirect = rules.find((rule) => rule.index > fsIndex);
      if (misplacedRedirect) {
        r.error(`routes: redirect rule #${misplacedRedirect.index} ("${misplacedRedirect.source}") is positioned AFTER the filesystem handler (position ${fsIndex}) — redirects must come first so they fire regardless of any static file at that path.`);
      }
    }

    if (!en404) {
      r.error('routes: no /en/* custom-404 rule found (expected a `status: 404` route matching an /en/ path and pointing `dest` at the built /en/404/ page).');
    } else {
      const distPath = en404.rule.dest.replace(/^\//, '');
      if (!fileExists(distPath)) {
        r.error(`routes: /en/* custom-404 rule points to "${en404.rule.dest}", which does not exist in the current build.`);
      } else {
        r.info(`routes: /en/* custom-404 rule present at position ${en404.i}, targets "${en404.rule.dest}" (exists in build).`);
      }
      if (fsIndex !== -1 && en404.i < fsIndex) {
        r.error(`routes: /en/* custom-404 rule (position ${en404.i}) is positioned BEFORE the filesystem handler (position ${fsIndex}) — it would shadow real /en/ pages instead of only catching unmatched ones.`);
      }
    }

    if (!root404) {
      r.error('routes: no default/root custom-404 rule found (expected a `status: 404` route distinct from the /en/* rule, pointing `dest` at the built root 404 page).');
    } else {
      const distPath = root404.rule.dest.replace(/^\//, '');
      if (!fileExists(distPath)) {
        r.error(`routes: default/root custom-404 rule points to "${root404.rule.dest}", which does not exist in the current build.`);
      } else {
        r.info(`routes: default/root custom-404 rule present at position ${root404.i}, targets "${root404.rule.dest}" (exists in build).`);
      }
      if (fsIndex !== -1 && root404.i < fsIndex) {
        r.error(`routes: default/root custom-404 rule (position ${root404.i}) is positioned BEFORE the filesystem handler (position ${fsIndex}) — it would shadow real pages instead of only catching unmatched ones.`);
      }
      if (en404 && root404.i < en404.i) {
        r.error(`routes: default/root custom-404 rule (position ${root404.i}) is positioned BEFORE the /en/* custom-404 rule (position ${en404.i}) — the general catch-all would shadow the /en/-specific one, so unmatched /en/* paths would never reach their English 404.`);
      }
    }
  }

  r.warn('This check only proves the config is syntactically sound and internally consistent with the local build. It CANNOT prove Vercel applies these rules correctly in production — that requires live verification once the project is deployed (see the Vercel-deployment blocker noted separately).');

  return r;
}
