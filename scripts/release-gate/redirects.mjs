// vercel.json redirect config validation. This can only verify the CONFIG
// is syntactically sound and internally consistent with the local build —
// it cannot prove Vercel will actually apply it in production. That gap is
// called out explicitly in the report rather than papered over.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Report, ROOT, fileExists } from './lib.mjs';

export async function run() {
  const r = new Report('REDIRECT CONFIG (local static analysis — CONFIG VERIFIED, not LIVE VERCEL VERIFIED)');

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

  const redirects = config.redirects ?? [];
  r.info(`vercel.json declares ${redirects.length} redirect(s).`);

  const sources = new Set();
  for (const [i, rule] of redirects.entries()) {
    const label = `redirects[${i}]`;
    if (!rule.source) r.error(`${label}: missing "source"`);
    if (!rule.destination) r.error(`${label}: missing "destination"`);
    if (typeof rule.statusCode !== 'number') r.error(`${label}: missing/invalid numeric "statusCode"`);
    else if (![301, 302, 307, 308].includes(rule.statusCode)) r.warn(`${label}: unusual statusCode ${rule.statusCode}`);

    if (rule.source === rule.destination) r.error(`${label}: source and destination are identical ("${rule.source}") — this is a self-redirect loop.`);
    if (sources.has(rule.source)) r.error(`${label}: duplicate "source" ("${rule.source}") already declared by an earlier rule.`);
    sources.add(rule.source);
  }

  // A -> B where B is itself a redirect source elsewhere is a chained
  // redirect (not necessarily broken, but worth surfacing).
  for (const rule of redirects) {
    if (rule.destination && sources.has(rule.destination)) {
      r.warn(`redirect chain: "${rule.source}" -> "${rule.destination}" -> (destination is itself another rule's source) — verify this isn't an accidental multi-hop chain.`);
    }
  }

  // Static (non-wildcard) destinations should resolve to a real page in the
  // current build — a redirect to a route that no longer exists is a
  // silent dead end.
  for (const rule of redirects) {
    if (!rule.destination || rule.destination.includes(':')) continue; // skip wildcard/param destinations
    const asDistPath = rule.destination.replace(/^\//, '');
    const candidate = asDistPath.endsWith('/') || asDistPath === '' ? `${asDistPath}index.html` : asDistPath;
    if (!fileExists(candidate) && !fileExists(`${candidate}/index.html`)) {
      r.error(`redirect destination "${rule.destination}" (from source "${rule.source}") does not resolve to a page in the current build.`);
    }
  }

  // The retired UPR route must redirect, not exist as a live competing page.
  const retiredUprRule = redirects.find((rule) => rule.source?.includes('unsaturated-polyester-resin'));
  if (!retiredUprRule) {
    r.warn('no redirect rule found for the retired /products/unsaturated-polyester-resin/ route — verify this is intentional.');
  } else if (fileExists('products/unsaturated-polyester-resin/index.html')) {
    r.error('retired route /products/unsaturated-polyester-resin/ has a redirect rule AND still exists as a live built page — these compete; the redirect source must not also be a real route.');
  } else {
    r.info('retired UPR route redirects correctly and does not exist as a competing live page.');
  }

  // The /ne and /ne/:path* rules should not have a live /ne/ counterpart in dist.
  const neRule = redirects.some((rule) => rule.source === '/ne' || rule.source === '/ne/:path*');
  if (neRule) r.info('/ne legacy-prefix redirect rules present (cross-checked against dist/ne/ absence in build-routes.mjs).');

  r.warn('This check only proves the config is syntactically sound and internally consistent with the local build. It CANNOT prove Vercel applies these redirects correctly in production — that requires live verification once the project is deployed (see the Vercel-deployment blocker noted separately).');

  return r;
}
