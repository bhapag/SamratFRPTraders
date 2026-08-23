#!/usr/bin/env node
// Single entry point for the local release gate. Run via `npm run
// check:release` (which builds first) or directly with `node
// scripts/release-gate/run.mjs` if dist/ is already fresh.
//
// Exit code: 0 = safe to proceed to deployment prep, non-zero = at least
// one ERROR-level finding needs a human/AI decision before shipping.
// WARNING-level findings are informational and never fail the gate on
// their own — see docs/release-gate.md for the full ERROR/WARNING/INFO
// contract and what each check module covers.

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { DIST, Report } from './lib.mjs';

const reports = [];
let subprocessErrors = 0;

function runNodeScript(label, relPath) {
  const r = new Report(label);
  try {
    const out = execFileSync('node', [relPath], { cwd: process.cwd(), encoding: 'utf8' });
    r.info(out.trim().split('\n').join(' | '));
  } catch (e) {
    // Reused scripts (check-links, the i18n audits) don't all set exit
    // codes on failure (see docs/release-gate.md) — so parse their printed
    // summary rather than trusting the process exit code alone.
    const out = (e.stdout ?? '') + (e.stderr ?? '');
    r.info(out.trim().split('\n').join(' | '));
    if (e.status && e.status !== 0) {
      subprocessErrors++;
      r.error(`${relPath} exited with status ${e.status}`);
    }
  }
  const out2 = r.infos.join(' ');
  if (/broken\b.*[1-9]\d*/i.test(out2) || /STRICT FAILURES:\s*[1-9]/i.test(out2)) {
    subprocessErrors++;
    r.error('reused script reported failures in its own summary (see INFO line above) — parsed as a release-gate failure.');
  }
  reports.push(r);
}

async function main() {
  console.log('SAMRAT FRP TRADERS — LOCAL RELEASE GATE');
  console.log('='.repeat(60));

  if (!existsSync(DIST)) {
    console.error('\nFATAL: dist/ not found. Run `npm run build` first (or use `npm run check:release`, which builds automatically).');
    process.exit(1);
  }

  // ---- Reused existing tools, run as subprocesses ----
  runNodeScript('EXISTING: internal link checker (scripts/check-links.mjs)', 'scripts/check-links.mjs');
  runNodeScript('EXISTING: resource localization audit (scripts/resource-i18n-audit.mjs)', 'scripts/resource-i18n-audit.mjs');
  runNodeScript('EXISTING: application localization audit (scripts/application-i18n-audit.mjs)', 'scripts/application-i18n-audit.mjs');

  // ---- New release-gate check modules (in-process) ----
  const modules = [
    './build-routes.mjs',
    './seo-schema.mjs',
    './indexing-safety.mjs',
    './business-truth.mjs',
    './documents-assets.mjs',
    './redirects.mjs',
    './secrets-scan.mjs',
    './perf-sanity.mjs',
  ];
  for (const mod of modules) {
    const { run } = await import(mod);
    reports.push(await run());
  }

  // ---- npm audit, folded in as its own tiny report ----
  const auditReport = new Report('DEPENDENCY AUDIT (npm audit)');
  try {
    const out = execFileSync('npm', ['audit', '--json'], { cwd: process.cwd(), encoding: 'utf8' });
    const data = JSON.parse(out);
    const vulns = data.metadata?.vulnerabilities ?? {};
    auditReport.info(`critical=${vulns.critical ?? 0} high=${vulns.high ?? 0} moderate=${vulns.moderate ?? 0} low=${vulns.low ?? 0}`);
    if ((vulns.critical ?? 0) > 0 || (vulns.high ?? 0) > 0) {
      auditReport.error(`${vulns.critical ?? 0} critical / ${vulns.high ?? 0} high severity vulnerabilities present.`);
    }
  } catch (e) {
    // npm audit exits non-zero when vulnerabilities exist even though it
    // still printed valid JSON — recover it from stdout before giving up.
    try {
      const data = JSON.parse(e.stdout ?? '{}');
      const vulns = data.metadata?.vulnerabilities ?? {};
      auditReport.info(`critical=${vulns.critical ?? 0} high=${vulns.high ?? 0} moderate=${vulns.moderate ?? 0} low=${vulns.low ?? 0}`);
      if ((vulns.critical ?? 0) > 0 || (vulns.high ?? 0) > 0) {
        auditReport.error(`${vulns.critical ?? 0} critical / ${vulns.high ?? 0} high severity vulnerabilities present.`);
      }
    } catch {
      auditReport.warn('could not parse `npm audit --json` output.');
    }
  }
  reports.push(auditReport);

  // ---- Print everything, then the final verdict ----
  for (const r of reports) r.print();

  const totalErrors = subprocessErrors + reports.reduce((sum, r) => sum + r.errors.length, 0);
  const totalWarnings = reports.reduce((sum, r) => sum + r.warnings.length, 0);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`RELEASE GATE SUMMARY: ${totalErrors} error(s), ${totalWarnings} warning(s) across ${reports.length} check module(s).`);
  if (totalErrors > 0) {
    console.log('RESULT: FAIL — one or more ERROR-level findings must be resolved before deployment.');
    process.exit(1);
  }
  console.log('RESULT: PASS — no ERROR-level findings. Review WARNING-level findings before deployment; they do not block the gate but may need human judgment.');
  process.exit(0);
}

main().catch((e) => {
  console.error('\nFATAL: release gate crashed:', e);
  process.exit(1);
});
