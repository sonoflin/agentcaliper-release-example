# AgentCaliper Governance Review Packet

- **Project:** Synthetic Workspace MCP release
- **Generated:** `2026-11-27T20:52:49.670Z`
- **Verdict:** `review-required` (1 blocked of 1 checks)
- **Reviewer:** AgentCaliper demo signer
- **Ticket / Reference:** DEMO-1
- **Ed25519 Signature:** key `6e5c8b87f490d3ef…` · SHA-256 `3dbca4b092e70b54…`

| Check | Protocol | Verdict | Compact Tokens | Drift Count | Blocking Failures |
| --- | --- | --- | --- | --- | --- |
| `workspace-search-contract` | `mcp` | **REVIEW REQUIRED** | 82 (+11) | 2 | 2 |

## workspace-search-contract (`mcp`) — REVIEW REQUIRED

- **Candidate SHA-256:** `02c2c402ebcf4d1f3cbd0ba95318d64e5e8ca14e2522a906178e5e5b0cba08e0`
- **Governance posture:** 0 read-only · 1 mutative (0 destructive) · 0 unannotated · 0 task-required

### Observed Changes

- **Contract fields changed:** `search_records`
- **Privilege escalated:** `search_records`

### Blocking Policy Findings

- Contract fields changed · search_records
- Privilege escalated · search_records

## Offline Cryptographic Verification

```sh
node agentcaliper-govern.mjs verify review-packet.json --public-key public.jwk
```

---

**Scope & Disclaimer:** Offline deterministic measurement of supplied captures and optional public registry observations. Informational engineering record only; not legal advice, security certification, or runtime prompt-injection guarantee.
