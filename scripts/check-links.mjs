#!/usr/bin/env node
// Check internal href/src targets in an existing static Astro build.
// Run `npm run build` before this script.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, isAbsolute, join, relative, resolve } from 'node:path';

const distDirectory = join(process.cwd(), 'dist');

if (!existsSync(distDirectory)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

function collectHtmlFiles(directory, files = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(fullPath, files);
    else if (extname(entry.name) === '.html') files.push(fullPath);
  }
  return files;
}

function resolves(urlPath) {
  const cleanPath = urlPath.split('#')[0].split('?')[0];
  if (cleanPath === '' || cleanPath === '/') {
    return existsSync(join(distDirectory, 'index.html'));
  }

  const relativePath = cleanPath.replace(/^\//, '');
  const directPath = resolve(distDirectory, relativePath);
  const fromDist = relative(distDirectory, directPath);
  if (fromDist.startsWith('..') || isAbsolute(fromDist)) return false;
  if (existsSync(directPath) && statSync(directPath).isFile()) return true;

  return existsSync(join(distDirectory, relativePath, 'index.html'));
}

function isInternal(url) {
  if (!url || url.startsWith('#')) return false;
  if (/^(https?:)?\/\//.test(url)) return false;
  if (/^(mailto|tel|javascript|data):/i.test(url)) return false;
  return url.startsWith('/');
}

const htmlFiles = collectHtmlFiles(distDirectory);
if (htmlFiles.length === 0) {
  console.error('No HTML files found in dist/.');
  process.exit(1);
}

const attributePattern = /\s(?:href|src)="([^"]*)"/g;
const brokenLinks = [];
let checkedLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const page = `/${file.slice(distDirectory.length + 1).replace(/\\/g, '/')}`;
  let match;

  while ((match = attributePattern.exec(html))) {
    const url = match[1];
    if (!isInternal(url)) continue;
    checkedLinks += 1;
    if (!resolves(url)) brokenLinks.push({ page, url });
  }
}

console.log(`Checked ${checkedLinks} internal link(s).`);

if (brokenLinks.length === 0) {
  console.log('No broken internal links found.');
  process.exit(0);
}

for (const { page, url } of brokenLinks) {
  console.error(`${page} -> ${url}`);
}
process.exit(1);
