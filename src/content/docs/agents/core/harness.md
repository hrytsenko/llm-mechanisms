---
title: "Harness"
description: "The harness is everything around the model that isn't the model — it ties together tools, context, and memory to turn a model that answers questions into an agent that completes tasks."
tier: foundational
sidebar:
  order: 1
---

The harness is everything around the model that isn't the model — it ties together tools, context, and memory to turn a model that answers questions into an agent that completes tasks.

The harness manages conversation and context, preserves sessions and memory, invokes tools and spawns subagents, and imposes controls and guardrails. Each of these is covered in its own concept; the harness is what owns them.

The central design question is harness thickness: how much logic lives in the harness versus the model. Every harness component encodes an assumption about what the model cannot do on its own — so as models improve, some scaffolding should be removed rather than extended.

Providers ship harnesses as development kits, typically called agent SDKs, and align them with their own models to exploit strengths and cover weaknesses.

## Considerations

- Prefer the harness's built-in capabilities and conventions — models are often trained against them.
- Revisit custom capabilities as models and harnesses improve — replace your own scaffolding with theirs where you can.

## Specifics

- Anthropic ships a complete harness you configure with code or specifications.
- OpenAI ships a model-native harness composed from primitives, with code-first configuration.
- Google ships a framework with prescribed structure and a mature ecosystem.

## References

- [Agent SDK | Anthropic](https://code.claude.com/docs/en/agent-sdk/overview)
- [Agents SDK | OpenAI](https://openai.github.io/openai-agents-python/)
- [Agent Development Kit | Google](https://adk.dev/)
