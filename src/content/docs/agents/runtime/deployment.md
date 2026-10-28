---
title: "Deployment"
description: "Deployment is where the agent process runs — the outer boundary around the whole agent, concerned with its isolation and scaling rather than with isolating what it executes."
tier: foundational
sidebar:
  order: 1
---

Deployment is where the agent process runs — the outer boundary around the whole agent, concerned with its isolation and scaling rather than with isolating what it executes.

Platforms support two variants for deploying agents: self-hosted, where your infrastructure runs the agent instances, and managed, where the platform runs them for you. The self-hosted approach ranges from a lighter container-based variant to a heavier VM-based one, balancing isolation against complexity.

## Considerations

- Containerize the agent from the start — this simplifies self-hosted deployment and eases later migration to managed platforms.
- Persist state outside the serving process — self-hosted deployments must arrange this themselves, while managed ones handle it for you.

## Specifics

- Anthropic offers Managed Agents, an API-first hosted runtime; migrating to it from a self-hosted deployment requires rebuilding the agent rather than porting it as-is.
- OpenAI offers a clear path to evolve the agent from local run to self-hosted to hosted backend, using the same agent definition, portable across execution backends.
- Google spans the spectrum with several runtimes — Kubernetes Engine for self-managed containers, Cloud Run for serverless containers, and Agent Engine as the fully managed runtime.

## References

- [Self-hosting | Anthropic](https://code.claude.com/docs/en/agent-sdk/hosting)
- [Managed Agents | Anthropic](https://platform.claude.com/docs/en/managed-agents/overview)
- [Sandbox agents | OpenAI](https://openai.github.io/openai-agents-python/sandbox_agents/)
- [Deployments | Google](https://adk.dev/deploy/)
