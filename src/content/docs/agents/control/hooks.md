---
title: "Hooks"
description: "Hooks are deterministic callbacks on agent actions such as tool calling and subagent spawning."
tier: foundational
sidebar:
  order: 1
---

Hooks are deterministic callbacks on agent actions such as tool calling and subagent spawning.

Hooks come in pairs around each action: a pre-hook runs before it, while the action can still be stopped, and a post-hook runs after it, once the result is known. Because a hook is code that runs on every action the model chooses, it enforces constraints that model instructions can only suggest.

## Considerations

- Guard the effect, not just the tool — a hook on file edits misses the same change made through a shell command.
- When denying an action, return a clear reason — the model sees it and can adapt.
- Keep hooks fast; the loop waits on them.

## Specifics

- Anthropic offers fine-grained configuration — per-event matchers and explicit decisions to allow, deny, or ask that also steer further execution.
- OpenAI hooks have no decision protocol — you can only block by raising — so control lives in separate primitives: guardrails and approvals, which cover only part of the surface.
- Google's pre-hooks either allow the action to proceed or return a result directly, substituting for the call.

## References

- [Hooks | Anthropic](https://code.claude.com/docs/en/agent-sdk/hooks)
- [Hooks | OpenAI](https://openai.github.io/openai-agents-python/agents/#lifecycle-events-hooks)
- [Hooks | Google](https://adk.dev/callbacks/)
