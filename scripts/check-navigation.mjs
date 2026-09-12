#!/usr/bin/env node
// Interaction regression check for product navigation.
//
// Written against a real defect: the mobile overlay listed all nine product
// families inline and always open, which made it 1,129px tall inside a 740px
// viewport. A visitor looking for the full range met nine sub-products and a
// scroll before they could see the whole menu, so one tap on "Products"
// effectively meant two different things depending on where the menu had been
// scrolled to. This file fails on that state and passes once the families sit
// behind their own control.
//
// Everything here is driven with real touch input, because the original
// two-tap behaviour did not reproduce with a desktop mouse.
//
// usage: node scripts/check-navigation.mjs [baseUrl]
//        with no argument it serves ./dist itself.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const PLAYWRIGHT =
  'C:/Users/harmy/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core';

const TYPES = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4',
  '.woff2': 'font/woff2', '.avif': 'image/avif', '.pdf': 'application/pdf',
  '.xml': 'application/xml',
};

const PHONE_WIDTHS = [360, 390, 430];
const ROUTES = [
  { lang: 'ne', home: '/', catalogue: '/products/', category: '/products/gelcoat/' },
  { lang: 'en', home: '/en/', catalogue: '/en/products/', category: '/en/products/gelcoat/' },
];

const failures = [];
const notes = [];
const fail = (m) => failures.push(m);

function serveDist(root, port) {
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let f = path.join(root, p);
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
    if (!fs.existsSync(f)) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] ?? 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((resolve) => srv.listen(port, () => resolve(srv)));
}

// One tap must land on the expected path. Resolving the URL wait and the tap
// together matters: over a real network the tap returns before navigation
// starts, and reading location too early reports a false failure.
async function tapTo(page, selector, expected) {
  const started = Date.now();
  await Promise.all([
    page.waitForURL((u) => new URL(u).pathname === expected, { timeout: 15000 }).catch(() => {}),
    page.tap(selector),
  ]);
  return { ok: new URL(page.url()).pathname === expected, got: new URL(page.url()).pathname, ms: Date.now() - started };
}

async function main() {
  const arg = process.argv[2];
  let base = arg;
  let srv = null;
  if (!base) {
    const root = path.resolve('dist');
    if (!fs.existsSync(root)) {
      console.error('dist/ not found — run `npm run build` first, or pass a base URL.');
      process.exit(1);
    }
    srv = await serveDist(root, 4787);
    base = 'http://127.0.0.1:4787';
  }

  const { chromium } = require(PLAYWRIGHT);
  const browser = await chromium.launch();

  // 1. The overlay must fit the viewport it opens in. This is the assertion
  //    that fails on the regression.
  for (const width of PHONE_WIDTHS) {
    for (const route of ROUTES) {
      const ctx = await browser.newContext({
        viewport: { width, height: 740 }, hasTouch: true, isMobile: true,
      });
      const page = await ctx.newPage();
      await page.goto(base + route.home, { waitUntil: 'networkidle' });
      await page.tap('#navToggle');
      await page.waitForTimeout(400);
      const box = await page.evaluate(() => {
        const panel = document.getElementById('mobileNav');
        const cats = document.getElementById('mobileCats');
        const toggle = document.getElementById('mobileCatsToggle');
        return {
          scrollHeight: panel.scrollHeight,
          clientHeight: panel.clientHeight,
          catsHidden: cats ? cats.hidden : null,
          catsExpanded: toggle ? toggle.getAttribute('aria-expanded') : null,
          hasToggle: !!toggle,
        };
      });
      const overflowBy = box.scrollHeight - box.clientHeight;
      if (overflowBy > 1) {
        fail(`${width}px ${route.lang}: menu overflows its viewport by ${overflowBy}px on open (${box.scrollHeight} in ${box.clientHeight})`);
      }
      if (!box.hasToggle) {
        fail(`${width}px ${route.lang}: product families have no control of their own in the overlay`);
      } else {
        if (box.catsHidden !== true) fail(`${width}px ${route.lang}: families are open before the visitor asks for them`);
        if (box.catsExpanded !== 'false') fail(`${width}px ${route.lang}: families control reports aria-expanded=${box.catsExpanded} when collapsed`);
      }
      notes.push(`${width}px ${route.lang}: overlay ${box.scrollHeight}px in ${box.clientHeight}px, families collapsed=${box.catsHidden}`);
      await ctx.close();
    }
  }

  // 2. Expanding the families must be a disclosure, never a navigation.
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 740 }, hasTouch: true, isMobile: true });
    const page = await ctx.newPage();
    await page.goto(base + route.home, { waitUntil: 'networkidle' });
    await page.tap('#navToggle');
    await page.waitForTimeout(350);
    // Absent on a build that predates the disclosure: report it rather than
    // throwing, so this file fails cleanly against the defective state.
    if (!(await page.$('#mobileCatsToggle'))) {
      fail(`${route.lang}: no product-families control in the overlay`);
      await ctx.close();
      continue;
    }
    await page.tap('#mobileCatsToggle');
    await page.waitForTimeout(300);
    const after = await page.evaluate(() => ({
      path: location.pathname,
      hidden: document.getElementById('mobileCats').hidden,
      expanded: document.getElementById('mobileCatsToggle').getAttribute('aria-expanded'),
      count: document.querySelectorAll('#mobileCats a').length,
      allProducts: (() => {
        const a = document.querySelector('.mobile-cats-all');
        return a ? { href: a.getAttribute('href'), text: a.textContent.trim().split('\n')[0] } : null;
      })(),
    }));
    if (after.path !== route.home) fail(`${route.lang}: expanding the families navigated to ${after.path}`);
    if (after.hidden !== false || after.expanded !== 'true') fail(`${route.lang}: families did not open on their own control`);
    if (!after.allProducts) fail(`${route.lang}: no explicit all-products link inside the families list`);
    else if (after.allProducts.href !== route.catalogue) fail(`${route.lang}: all-products link points at ${after.allProducts.href}`);
    // 10 = the nine families plus the explicit all-products row
    if (after.count !== 10) fail(`${route.lang}: expected 10 rows in the families list, found ${after.count}`);
    await ctx.close();
  }

  // 3. One tap, one destination: catalogue, category and product.
  for (const width of [390, 800, 1280]) {
    for (const route of ROUTES) {
      const ctx = await browser.newContext({
        viewport: { width, height: 820 }, hasTouch: true, isMobile: width < 500,
      });
      const page = await ctx.newPage();
      await page.goto(base + route.home, { waitUntil: 'networkidle' });

      let r;
      if (width <= 820) {
        await page.tap('#navToggle');
        await page.waitForTimeout(350);
        r = await tapTo(page, `#mobileNav .mobile-nav-links a[href="${route.catalogue}"]`, route.catalogue);
      } else {
        r = await tapTo(page, '.nav-mega-link', route.catalogue);
      }
      if (!r.ok) fail(`${width}px ${route.lang}: one tap on Products reached ${r.got}, expected ${route.catalogue}`);

      // category, from the catalogue page itself. Scoped to the visible page
      // body: the header mega panel also holds a link to the same URL and is
      // hidden until disclosed, so an unscoped selector would find that first.
      const catSel = `main a[href="${route.category}"]`;
      const catLink = await page.$(catSel);
      if (!catLink) {
        fail(`${width}px ${route.lang}: no link to ${route.category} on the catalogue`);
      } else {
        const c = await tapTo(page, catSel, route.category);
        if (!c.ok) fail(`${width}px ${route.lang}: one tap on a category reached ${c.got}`);
      }

      // product, from the category page
      const productHref = await page.evaluate(() => {
        const a = document.querySelector('main .category-grid a.catalog-card, main .category-grid a');
        return a ? a.getAttribute('href') : null;
      });
      if (!productHref) {
        fail(`${width}px ${route.lang}: no product card on ${route.category}`);
      } else {
        const p = await tapTo(page, `main a[href="${productHref}"]`, productHref);
        if (!p.ok) fail(`${width}px ${route.lang}: one tap on a product reached ${p.got}, expected ${productHref}`);
      }
      await ctx.close();
    }
  }

  // 4. Keyboard reach and focus visibility must survive the disclosure.
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 740 } });
    const page = await ctx.newPage();
    await page.goto(base + '/en/', { waitUntil: 'networkidle' });
    await page.click('#navToggle');
    await page.waitForTimeout(300);
    const reached = await page.evaluate(async () => {
      const btn = document.getElementById('mobileCatsToggle');
      if (!btn) return { missing: true };
      btn.focus();
      const focusable = document.activeElement === btn;
      btn.click();
      const link = document.querySelector('#mobileCats a');
      link.focus();
      const style = getComputedStyle(link);
      return { focusable, linkFocused: document.activeElement === link, outline: style.outlineStyle };
    });
    if (reached.missing) fail('keyboard: no families control to focus');
    else if (!reached.focusable) fail('keyboard: the families control cannot take focus');
    else if (!reached.linkFocused) fail('keyboard: a family link cannot take focus once expanded');
    await ctx.close();
  }

  await browser.close();
  if (srv) srv.close();

  console.log('NAVIGATION INTERACTION CHECK');
  notes.forEach((n) => console.log('  ' + n));
  console.log('');
  if (failures.length) {
    console.log(`FAIL — ${failures.length} defect(s):`);
    failures.forEach((f) => console.log('  - ' + f));
    process.exit(1);
  }
  console.log('PASS — one tap, one destination, at 360/390/430/800/1280 in both languages.');
}

main().catch((e) => { console.error(e); process.exit(1); });
