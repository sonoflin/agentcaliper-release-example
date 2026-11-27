# Review an MCP contract change in GitHub Actions

An MCP tool named `search_records` changes from read-only to mutating and starts requiring `workspaceId`. This runnable example shows the findings that reach a pull request before the change ships. All captures are synthetic.

## Run the example

1. Start with the passing workflow on `main`, where the candidate matches the approved contract.
2. Create a branch, copy `captures/proposed-change.json` over `captures/candidate.json`, and open a pull request. The public demo already has a [pull request showing the change](https://github.com/sonoflin/agentcaliper-release-example/pull/1).
3. Open the **AgentCaliper release check** job summary. It should report `review-required`, `Contract fields changed`, and `Privilege escalated`. The job exits `1` until the contract matches the approved baseline or your team separately approves the change.

The workflow runs with read-only repository permissions and uses the [free AgentCaliper CLI](https://agentcaliper.com/downloads/agentcaliper-check.mjs), pinned to the checksum of the GitHub release download. It compares local files in the runner. For a real repository, restrict changes to the approved baseline and the workflow with your normal review and branch protection rules. Only collect captures from tools and environments you’re authorized to test.

## Inspect the signed review record

The [$149 Team Governance Pack](https://agentcaliper.com/team-governance/?ac_source=github-example) produced the [sample review packet](sample/review-packet.md) and its [signed JSON](sample/review-packet.json) from the same changed capture. The packet records a blocked verdict and is signed by a demo key. Its signature authenticates that recorded result. It does not approve the change.

```sh
node verify-sample.mjs
```

The Team Governance Pack adds approval lockfiles, cross-protocol policies, and self-contained HTML, Markdown, and signed JSON review records. Its paid CLI and private signing key are separate from this public example. The [Workspace migration guide](https://agentcaliper.com/guides/google-workspace-mcp-2027-readiness) explains the Google Workspace rollout and how to adapt the check.
