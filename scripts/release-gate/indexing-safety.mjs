// Production indexing guard: public pages must remain indexable, while only
// the two intentionally non-canonical 404 pages remain noindex.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Report, DIST, collectHtmlFiles, toRoute, robotsMeta } from './lib.mjs';

const NOINDEX_ROUTES = new Set(['/404.html', '/en/404/']);

export async function run() {
  const r = new Report('PRODUCTION INDEXING SAFETY (mode: OPEN)');

  let robotsTxt;
  try {
    robotsTxt = readFileSync(join(DIST, 'robots.txt'), 'utf8');
  } catch {
    r.error('dist/robots.txt not found.');
    return r;
  }

  const disallowsAll = /Disallow:\s*\/\s*$/m.test(robotsTxt);
  if (disallowsAll) r.error('robots.txt still disallows all crawling while production indexing is open.');
  else r.info('robots.txt allows public crawling (expected production state).');

  const htmlFiles = collectHtmlFiles();
  let publicPageCount = 0;
  let noindexCount = 0;
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const robots = robotsMeta(html);
    const route = toRoute(file);
    const isNoindex = robots && /noindex/i.test(robots);
    if (NOINDEX_ROUTES.has(route)) {
      if (!isNoindex) r.error(`${route}: intentionally non-canonical 404 page must remain noindex.`);
      else noindexCount++;
    } else if (isNoindex) {
      r.error(`${route}: public page must not carry noindex.`);
    } else if (!robots || !/index/i.test(robots) || !/follow/i.test(robots)) {
      r.error(`${route}: public page must declare "index, follow" robots metadata.`);
    } else {
      publicPageCount++;
    }
  }

  r.info(`${publicPageCount} public generated page(s) declare index, follow.`);
  r.info(`${noindexCount} intentionally non-indexable 404 page(s) retain noindex.`);

  return r;
}
