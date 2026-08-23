// Repository secret/credential scan. Reports FILE + TYPE + line number
// only — never the matched value itself, even in this tool's own output.

import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { Report, ROOT } from './lib.mjs';

const SECRET_PATTERNS = [
  { name: 'AWS access key ID', re: /AKIA[0-9A-Z]{16}/ },
  { name: 'Google API key', re: /AIza[0-9A-Za-z_-]{35}/ },
  { name: 'GitHub personal access token', re: /gh[pousr]_[A-Za-z0-9]{20,}/ },
  { name: 'Vercel-style token (generic vc_/vercel_)', re: /\b(vc|vercel)_[A-Za-z0-9]{20,}\b/i },
  { name: 'Slack token', re: /xox[baprs]-[A-Za-z0-9-]{10,}/ },
  { name: 'Stripe secret key', re: /sk_live_[A-Za-z0-9]{16,}/ },
  { name: 'generic private key block', re: /-----BEGIN (RSA |EC |OPENSSH |)PRIVATE KEY-----/ },
  { name: 'JWT-shaped token', re: /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/ },
  { name: 'hardcoded password assignment', re: /\bpassword\s*[:=]\s*['"][^'"\s]{6,}['"]/i },
  { name: 'generic api key assignment', re: /\bapi[_-]?key\s*[:=]\s*['"][^'"\s]{12,}['"]/i },
];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

export async function run() {
  const r = new Report('SECRET / CREDENTIAL SCAN');

  // .env-family files should not exist at all in a static site with no
  // server-side config.
  const envCandidates = ['.env', '.env.local', '.env.production', '.env.development'];
  const foundEnv = envCandidates.filter((f) => existsSync(join(ROOT, f)));
  if (foundEnv.length) r.error(`.env-family file(s) present in repo root: ${foundEnv.join(', ')} — verify these are gitignored and contain no committed secrets.`);
  else r.info('no .env-family files present.');

  let trackedFiles;
  try {
    trackedFiles = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
      .filter((f) => !SKIP_DIRS.has(f.split('/')[0]));
  } catch (e) {
    r.error(`could not list git-tracked files: ${e.message}`);
    return r;
  }

  r.info(`scanning ${trackedFiles.length} git-tracked file(s) for credential patterns.`);

  let hits = 0;
  for (const relPath of trackedFiles) {
    const full = join(ROOT, relPath);
    let content;
    try {
      content = readFileSync(full, 'utf8');
    } catch {
      continue; // binary or unreadable — not a text-secret risk in the way we're scanning for
    }
    const lines = content.split('\n');
    for (const { name, re } of SECRET_PATTERNS) {
      for (let i = 0; i < lines.length; i++) {
        if (re.test(lines[i])) {
          hits++;
          r.error(`${relPath}:${i + 1} — possible ${name} (value withheld; remediation: rotate the credential if real, then remove from history and use an environment variable / secret manager instead).`);
        }
      }
    }
  }

  if (hits === 0) r.info('no credential-shaped patterns found in tracked source.');

  return r;
}
