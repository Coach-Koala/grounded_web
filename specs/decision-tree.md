---
title: grounded_web — Decision Tree
date: 2026-07-16
status: confirmed
executive_summary: >
  Dependency-ordered view of the Phase 0 decisions: hosting and domain
  constraints flow down into stack, capture, and content decisions. All
  branches resolved; deferred leaves carry forge task IDs.
---

# Decision Tree

```mermaid
flowchart TD
    A[Private repo, Coach-Koala org<br/>D1] --> B[GitHub Pages hosting<br/>static only, public output]
    B --> C[Domain map D2<br/>apex+www marketing / demo app / analytics 5500]
    B --> D[Stack D3: Next.js static export<br/>no server features]
    D --> E[Lead capture D5<br/>POST to hippo-health /api/leads<br/>fail-loud + mailto fallback]
    E --> F[Deferred: endpoint t_807942b3<br/>parent: demo move t_380cdb9e]
    C --> G[Deferred: analytics move t_3006aef4]
    D --> H[v1 scope D4: landing + form +<br/>employer/advisor pages + blog scaffold]
    H --> I[Audience D6: employer-first hero]
    H --> J[Copy D8: offering brief<br/>scorecard → x-ray → monitoring]
    J --> K[Pricing D10: tiers only, no numbers<br/>t_18b035a6]
    H --> L[Brand D9: guide tokens,<br/>PNG mark set]
    L --> M[Deferred: SVG mark t_431579cd]
    H --> N[Analytics D7: Plausible/Fathom]
```

## Resolution order

1. **Hosting constraints first** (D1, D2): private repo + Pages fixes the
   deployment model (static, public output) and forces the domain split.
2. **Stack under those constraints** (D3): static export is the binding
   restriction; Next.js chosen for the later SSR path.
3. **Capture under the static constraint** (D5, D12): no backend on Pages →
   external endpoint; owner chose first-party (hippo-health) over third-party.
4. **Content decisions** (D4, D6, D8, D10): offering brief overrides the older
   deck framing; employer-first; outcome-led.
5. **Brand and instrumentation leaves** (D9, D7): fully specified by the
   existing brand guide; no open questions.

## Deferred decisions (tracked)

| Item                               | Task         | Blocks                             |
| ---------------------------------- | ------------ | ---------------------------------- |
| hippo-health `/api/leads` endpoint | `t_807942b3` | live form submissions (not launch) |
| App → `demo.` subdomain            | `t_380cdb9e` | endpoint URL stability             |
| 5500 → `analytics.` subdomain      | `t_3006aef4` | nothing in grounded_web            |
| SVG hippo mark                     | `t_431579cd` | nothing (PNG set suffices)         |
| Final pricing copy                 | `t_18b035a6` | pricing numbers on site            |
