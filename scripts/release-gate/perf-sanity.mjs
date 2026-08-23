// Practical local asset/build size profile. Not a Lighthouse-score chase —
// just enough to catch obvious bloat (a multi-MB accidental asset, a
// duplicated large file) before it ships.

import { readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { extname, join, relative } from 'node:path';
import { Report, ROOT, DIST, collectFiles } from './lib.mjs';

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export async function run() {
  const r = new Report('PERFORMANCE SANITY (local asset/build profile)');

  const allDistFiles = collectFiles(DIST);
  const totalBytes = allDistFiles.reduce((sum, f) => sum + statSync(f).size, 0);
  r.info(`total dist/ size: ${humanSize(totalBytes)} across ${allDistFiles.length} files`);

  const byExt = {};
  for (const f of allDistFiles) {
    const ext = extname(f).toLowerCase() || '(none)';
    const size = statSync(f).size;
    byExt[ext] ??= { count: 0, bytes: 0 };
    byExt[ext].count++;
    byExt[ext].bytes += size;
  }
  const cssBytes = byExt['.css']?.bytes ?? 0;
  const jsBytes = byExt['.js']?.bytes ?? 0;
  r.info(`CSS total: ${humanSize(cssBytes)} (${byExt['.css']?.count ?? 0} file(s))`);
  r.info(`JS total: ${humanSize(jsBytes)} (${byExt['.js']?.count ?? 0} file(s))`);
  r.info(`HTML total: ${humanSize(byExt['.html']?.bytes ?? 0)} (${byExt['.html']?.count ?? 0} file(s))`);

  const mediaExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg', '.mp4', '.webm', '.pdf']);
  const mediaFiles = allDistFiles
    .filter((f) => mediaExts.has(extname(f).toLowerCase()))
    .map((f) => ({ path: `/${relative(DIST, f).replace(/\\/g, '/')}`, size: statSync(f).size, ext: extname(f).toLowerCase() }))
    .sort((a, b) => b.size - a.size);

  const LARGE_THRESHOLD = 1.5 * 1024 * 1024; // 1.5MB — a marketing-site asset above this deserves a look
  const largest = mediaFiles.slice(0, 10);
  r.info(`largest media assets:${largest.length ? '' : ' (none found)'}`);
  for (const m of largest) {
    const line = `  ${m.path} — ${humanSize(m.size)}`;
    if (m.size > LARGE_THRESHOLD) r.warn(`large asset (${humanSize(m.size)}, over ${humanSize(LARGE_THRESHOLD)} guideline): ${m.path}`);
    else r.info(line);
  }

  // Duplicate detection among media/document assets only (HTML duplication
  // across 400+ near-identical pages is expected and not a bloat signal).
  const hashToFiles = new Map();
  for (const m of mediaFiles) {
    if (m.size === 0 || m.size > 20 * 1024 * 1024) continue; // skip empty and absurdly large (already flagged elsewhere)
    const full = join(DIST, m.path.replace(/^\//, ''));
    const hash = createHash('sha1').update(readFileSync(full)).digest('hex');
    if (!hashToFiles.has(hash)) hashToFiles.set(hash, []);
    hashToFiles.get(hash).push(m);
  }
  const dupGroups = [...hashToFiles.values()].filter((group) => group.length > 1 && group[0].size > 100 * 1024);
  if (dupGroups.length) {
    r.warn(`${dupGroups.length} group(s) of byte-identical large assets (>100KB) found across different paths — likely redundant copies:`);
    for (const group of dupGroups.slice(0, 10)) {
      r.warn(`  ${humanSize(group[0].size)} x${group.length}: ${group.map((g) => g.path).join(', ')}`);
    }
  } else {
    r.info('no obviously redundant duplicated large assets found.');
  }

  return r;
}
