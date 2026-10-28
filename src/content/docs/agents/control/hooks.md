---
title: "Hooks"
description: "Hooks are deterministic callbacks on model actions such as tool calling (pre-tool and post-tool) and subagent spawning (pre-agent and post-agent)."
tier: foundational
sidebar:
  order: 1
---

Hooks are deterministic callbacks on model actions such as tool calling (pre-tool and post-tool) and subagent spawning (pre-agent and post-agent).

A hook complements model behavior with code that runs for every action the model chooses, enforcing constraints the model cannot be relied on to respect. They cover the gap that model instructions are suggestions, not enforcement — no matter how closely the model follows them.

## Considerations

- Block in pre-hooks; post-hooks cannot undo an action that already ran.
- Use pre-hooks to control actions and post-hooks to audit results.
- When denying an action, return a clear reason — the model sees it and can adapt.
- Keep hooks fast; the loop waits on them.

## Specifics

- Anthropic offers fine-grained configuration — per-event matchers and explicit allow/deny/ask decisions that also steer further execution.
- OpenAI hooks have no decision protocol — you can only block by raising — so control lives in separate primitives: guardrails and approvals, which cover only part of the surface.
- Google's pre-hooks either allow the action to proceed or return a result directly, substituting for the call.

## References

- [Hooks | Anthropic](https://code.claude.com/docs/en/agent-sdk/hooks)
- [Lifecycle | OpenAI](https://openai.github.io/openai-agents-python/ref/lifecycle/)
- [Callbacks | Google](https://adk.dev/callbacks/)
