// ============================================================
// TEMPORARY PRE-LAUNCH ASSERTION — READ THIS BEFORE TOUCHING
// ============================================================
// The site is deliberately not yet open to search engines: robots.txt
// disallows everything, and every page ships <meta name="robots"
// content="noindex, nofollow">. This module asserts that state STAYS true
// so nobody accidentally flips indexing on before the production domain
// and live QA are verified.
//
// When the team is actually ready to open indexing (after: custom domain
// connected, HTTPS verified, live-domain QA complete), this module is the
// ONE place that needs to flip — invert the two assertions below (expect
// robots.txt to allow crawling, expect pages to NOT carry noindex) and
// update the header comment. Do not do that today; do not do it without
// an explicit human decision to launch indexing.
// ============================================================

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Report, DIST, collectHtmlFiles, toRoute, robotsMeta } from './lib.mjs';

const PRELAUNCH = true; // <-- flip this (and the assertions it drives) to open indexing, deliberately, later.

export async function run() {
  const r = new Report(`PRE-LAUNCH INDEXING SAFETY (mode: ${PRELAUNCH ? 'CLOSED (expected now)' : 'OPEN'})`);

  let robotsTxt;
  try {
    robotsTxt = readFileSync(join(DIST, 'robots.txt'), 'utf8');
  } catch {
    r.error('dist/robots.txt not found.');
    return r;
  }

  const disallowsAll = /Disallow:\s*\/\s*$/m.test(robotsTxt);
  if (PRELAUNCH) {
    if (!disallowsAll) r.error('robots.txt no longer disallows all crawling — indexing appears to have been opened. If this was intentional, flip PRELAUNCH in this file and update the header comment; do not leave the assertion silently mismatched.');
    else r.info('robots.txt still disallows all crawling (expected pre-launch state).');
  } else if (disallowsAll) {
    r.error('PRELAUNCH is set to false (indexing meant to be open) but robots.txt still disallows everything.');
  }

  const htmlFiles = collectHtmlFiles();
  let noindexCount = 0;
  const missingNoindex = [];
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const robots = robotsMeta(html);
    if (robots && /noindex/i.test(robots)) noindexCount++;
    else missingNoindex.push(toRoute(file));
  }

  if (PRELAUNCH) {
    if (missingNoindex.length) {
      const sample = missingNoindex.slice(0, 10);
      r.error(`${missingNoindex.length} page(s) are missing "noindex" while the site is in pre-launch mode: ${sample.join(', ')}${missingNoindex.length > sample.length ? ', ...' : ''}`);
    } else {
      r.info(`all ${noindexCount} generated pages carry noindex (expected pre-launch state).`);
    }
  } else if (noindexCount > 0) {
    r.error(`PRELAUNCH is set to false but ${noindexCount} page(s) still carry noindex.`);
  }

  return r;
}
