---
title: grounded_web — Threat Model (STRIDE)
date: 2026-07-16
status: proposed
executive_summary: >
  Attack surface is small — static delivery plus one cross-origin form POST —
  so the material risks concentrate in DNS/domain configuration, the CI/CD
  supply chain, and accidental disclosure through the private-repo/public-site
  boundary. Nine threats identified; the four rated High have design controls
  that land in Sprint 1.
---

# Threat Model

Scope: the grounded_web repo, its GitHub Pages deployment, DNS for
`getgroundedhealth.com` (apex + `www`), and the browser-side lead form. The
hippo-health endpoint's server side is out of scope here (covered by
`t_807942b3`); its browser-facing contract is in scope.

## Trust boundaries

1. **Internet ↔ GitHub Pages CDN** — anonymous public reads.
2. **Browser ↔ leads endpoint** — the only cross-origin write.
3. **Private repo ↔ published output** — source is private; `out/` is public.
4. **GitHub Actions ↔ Pages deployment** — CI holds the publish capability.
5. **GoDaddy DNS** — owner credentials control where the brand resolves.

## Findings

| ID | STRIDE | Threat | Rating | Control (acceptance gate) |
|---|---|---|---|---|
| T1 | Spoofing | Dangling/unverified custom domain lets another Pages site claim `getgroundedhealth.com` | High | Verify domain at the org level **before** DNS cutover; CI check that `CNAME` file matches the expected domain |
| T2 | Tampering | Compromised npm dependency injects script into built site | High | Lockfile committed; Dependabot enabled; `npm ci` only; no postinstall scripts without review |
| T3 | Tampering | Compromised or mutable GitHub Action exfiltrates token / alters output | High | Pin actions to commit SHAs; workflow `permissions:` limited to `contents: read`, `pages: write`, `id-token: write` |
| T4 | Info disclosure | Private-repo content leaks into public output (drafts, source maps, internal docs, secrets in `NEXT_PUBLIC_*`) | High | `productionBrowserSourceMaps: false`; specs/ never copied to `public/`; secret-scan pre-commit; rule: nothing secret may be needed at build time |
| T5 | Spoofing | Phishing clone of the marketing site | Medium | Out of band: domain monitoring; on-site: canonical URLs + org domain verification |
| T6 | Tampering | Push to `main` bypasses review and auto-deploys | Medium | Branch protection: PR required, no force push; deploy workflow triggers only from `main` |
| T7 | DoS | Pages bandwidth soft limits (100 GB/mo) under traffic spike | Low | Accept; assets optimized (<1 MB pages); revisit CDN if traffic warrants |
| T8 | Info disclosure | Analytics vendor script as third-party code on every page | Low | Load provider script with SRI where supported; privacy-first vendor (no cookies) |
| T9 | Elevation | Lead form abused for spam/injection against endpoint | Medium | Browser side: honeypot field, client validation as UX only; server side (t_807942b3): rate limit, validation, CORS allowlist |

## Identity and auth model

None on this site by design — no sessions, no cookies, no user data stored in
this system. The only PII in motion is the lead form payload, transported over
TLS to the hippo-health endpoint and never persisted client-side.

## Work items

High-rated controls (T1–T4) are Sprint 1 acceptance gates in
`project-plan.md`; T6 is a repo-settings checklist item alongside repo
creation.
