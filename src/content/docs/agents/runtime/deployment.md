---
title: "Deployment"
description: "Deployment is the outer boundary around the whole agent, where its process runs."
tier: foundational
sidebar:
  order: 1
---

Deployment is the outer boundary around the whole agent, where its process runs.

Platforms support two variants for deploying agents: self-hosted, where your infrastructure runs the agent instances, and managed, where the platform runs them for you. The self-hosted approach ranges from a lighter container-based variant to a heavier VM-based one, balancing isolation against complexity.

## Considerations

- Containerize the agent from the start — this simplifies self-hosted deployment and eases later migration to managed platforms.
- Persist state outside the serving process — self-hosted deployments must arrange this themselves, while managed ones handle it for you.

## Specifics

- Anthropic offers Managed Agents, an API-first hosted runtime; migrating to it from a self-hosted deployment requires rebuilding the agent rather than porting it as-is.
- OpenAI keeps the same agent definition as execution moves from a local run to Docker to a hosted sandbox provider — only the sandbox client changes.
- Google spans the spectrum with several runtimes — Kubernetes Engine for self-managed containers, Cloud Run for serverless containers, and Agent Runtime as the fully managed runtime.

## References

- [Self-hosting | Anthropic](https://code.claude.com/docs/en/agent-sdk/hosting)
- [Managed Agents | Anthropic](https://platform.claude.com/docs/en/managed-agents/overview)
- [Sandbox clients | OpenAI](https://openai.github.io/openai-agents-python/sandbox/clients/)
- [Deployment | Google](https://adk.dev/deploy/)
