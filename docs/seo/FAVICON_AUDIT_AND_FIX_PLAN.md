# Favicon Audit and Fix Plan — samratfrptraders.com

**Date:** 2026-09-09 · **Verdict: no defect found. No code change proposed.**

---

## 1. Brief vs finding

The brief stated the site "currently appears to lack a recognisable favicon in Google results" and asked for a root cause and the smallest safe patch.

**The favicon implementation was audited against all seven diagnostic criteria and Google's documented requirements. It passes every one.** There is no repository defect to fix, so proposing a patch would mean changing correct, working code for no diagnosed reason.

---

## 2. Diagnostic results

### 2.1 Declared in the rendered `<head>`? — **Yes**

Fetched from the live homepage:

```html
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

Present in the **static HTML source** — Astro static output, no JS rendering required. Googlebot sees these on first fetch.

### 2.2 Do the URLs return 200 with valid image types? — **Yes**

| Asset | Status | Content-Type | Size |
|---|---|---|---|
| `/favicon-48x48.png` | 200 | `image/png` | 3,587 B |
| `/favicon.ico` | 200 | `image/vnd.microsoft.icon` | 3,609 B |
| `/apple-touch-icon.png` | 200 | `image/png` | 19,514 B |
| `/site.webmanifest` | 200 | `application/manifest+json` | 360 B |
| `/favicon.png` | 200 | `image/png` | 5,153 B |

No authentication, no redirect chains, publicly reachable.

### 2.3 Square, ≥48×48? — **Yes**

An explicit `48x48` PNG is declared — exactly Google's stated minimum — plus a 180×180 apple-touch icon and a multi-resolution `.ico`. The declared asset is the brand mark used site-wide.

### 2.4 Stable URL, no cache-busting? — **Yes**

All plain static paths. No content hashes, no query strings, no build-dependent filenames. The URLs will not change between deploys, which is precisely what Google requires — a favicon URL that changes on every build never accumulates a stable cache entry.

### 2.5 Homepage crawlable and indexable? — **Yes**

`robots.txt` is `User-agent: * / Allow: /` with a sitemap declaration. Homepage returns 200, declares `index, follow`, and is present in the sitemap.

### 2.6 `/favicon.ico` works on desktop and mobile? — **Yes**

Root-level `/favicon.ico` returns 200 with a correct icon MIME type. This is the fallback Google fetches when no `<link>` is honoured; it is present and valid.

### 2.7 Conflicting or inconsistent declarations? — **No**

Four declarations, each with a distinct role (`icon`, `shortcut icon`, `apple-touch-icon`, `manifest`). No duplicates, no competing `rel="icon"` entries at different sizes, no contradictions.

> One incidental finding: `/favicon.svg` returns 404. **It is not referenced anywhere**, so it is irrelevant — nothing requests it. No action.

---

## 3. Root cause

**The cause is not in the repository.** Ranked by likelihood:

**1. Google had not yet recrawled and refreshed the favicon.** Favicon fetching and SERP icon display run on Google's own schedule, independent of page crawling, and can lag by days or weeks on newer or low-crawl-frequency domains. No site-side action accelerates this.

**2. The probable HTTPS outage before 2026-09-01.** Both TLS certificates were reissued on 1 Sep 2026, consistent with a repair. With HSTS at `max-age=63072000` (2 years), a preceding lapse would have hard-blocked all clients including Googlebot — with no bypass. **If Google attempted a favicon fetch during that window, it would have recorded the asset as unreachable and will retry only on its own schedule.** This is the most probable specific cause, and it fits the reported symptom exactly.

**3. The observation may predate the current implementation.** The audit reflects the site as of 2026-09-09.

**4. Query- or device-dependent SERP presentation.** Google does not show favicons in every result type or surface.

---

## 4. Recommended action: monitor, do not patch

| Action | Recommendation |
|---|---|
| Change favicon assets | **No** |
| Change `<head>` declarations | **No** |
| Add more icon sizes | **No** — sufficient already |
| Rename to bust cache | **No** — actively harmful; destroys the stable URL Google requires |
| Replace with Samrat Poly Resins logo | **No** — different entity, different domain. Would require explicit owner confirmation, and the brief's own default is the Samrat FRP Traders mark |
| Connect Search Console | **Yes** — the only way to observe crawl behaviour |
| Confirm cert renewal + monitoring | **Yes** — prevents recurrence of cause #2 |
| Re-check in 30 days | **Yes** |

**Changing a correct implementation would reset the very recrawl clock the site is waiting on**, and would remove the stable URL that favicon caching depends on. The correct engineering response to "working code, external symptom" is to instrument and wait.

---

## 5. Contingency — only if the symptom persists

If, **after** GSC is connected, certificate stability is confirmed, and **30+ days** have passed with fresh crawl activity on the homepage, the icon still does not appear:

**Step 1 — Confirm the symptom precisely.** Which query, which device, which result type? Favicons do not appear on all surfaces. Rule out a misread before acting.

**Step 2 — Check GSC crawl stats** for failed fetches of `/favicon.ico` or `/favicon-48x48.png`, and confirm the homepage is indexed (an unindexed homepage shows no favicon regardless of asset validity).

**Step 3 — Only then**, and only with approval, consider the minimum viable adjustment: verify the 48×48 PNG renders legibly at 16×16 (some detailed marks become mud at favicon scale — a *design* issue, not a technical one). If and only if legibility is the problem, produce a simplified mark, keeping **the same filenames and paths** so the URLs stay stable.

**Do not** proceed past Step 1 without confirming the symptom still exists. Most favicon "problems" resolve themselves on Google's schedule.

---

## 6. Branding note

The brief's default — use an approved **Samrat FRP Traders** favicon, not the Samrat Poly Resins logo unless the owner confirms a shared mark — is already satisfied. The current icon is the Samrat FRP Traders mark used consistently across the site header and brand assets. **No branding decision is outstanding.**

---

## 7. What cannot be promised

Google controls recrawl scheduling and SERP presentation. **No timeline for favicon appearance can be given**, and no action taken in this repository can compel it. Any claim to the contrary would be false.

---

## 8. Summary

| Question | Answer |
|---|---|
| Is there a favicon defect? | **No** |
| Declared in rendered head? | Yes — 4 declarations |
| Assets reachable, valid, correctly typed? | Yes — all five, 200 |
| ≥48×48 square brand mark? | Yes |
| Stable, non-hashed URLs? | Yes |
| Crawlable, not robots-blocked? | Yes |
| Conflicting declarations? | No |
| Root cause | External — recrawl lag, most likely compounded by the pre-1-Sep HTTPS outage |
| Patch proposed | **None** |
| Recommended | Connect GSC, confirm cert renewal, re-check in 30 days |
| Workstream status | **Open — monitoring**, per owner instruction. Not closed |
