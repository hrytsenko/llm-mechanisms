---
title: "Context"
description: "The context is the combination of instructions and state that the model receives to decide its next action toward completing the task."
tier: foundational
sidebar:
  order: 3
---

The context is the combination of instructions and state that the model receives to decide its next action toward completing the task.

The key limitation of context is its size: as it grows, the model's ability to make optimal decisions degrades, giving diminishing returns. To manage this, the harness curates the context on each turn, actively managing its content. Curation splits into two parts: assembly, where the harness decides what to include and how, and reduction, where it decides what to exclude and how. Reduction has several main forms — compacting the conversation under various strategies, or trimming content that has lost its importance, stale tool results being the canonical example.

## Consideration

- Load durable facts before defining the agent's task and avoid their reduction where possible.
- Provide guiding instructions for how compaction should summarize, where possible.
- Use progressive disclosure — postpone or avoid loading facts until they are needed.

## Specifics

- Anthropic loads durable facts at the start from the system prompt and injected project context (`CLAUDE.md`); it runs automatic compaction near the window limit and exposes primitives to clear stale context explicitly.
- OpenAI gives programmatic access to the turn's context through input filters and hooks, lets sessions run automatic compaction, and ships a tool-output trimmer that previews oversized results from older turns.
- Google compiles the context over the session's event stream and compacts it either by token threshold (retaining recent events) or over a sliding window with a configurable summarizer.

## References

- [System prompts | Anthropic](https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts)
- [Context management | OpenAI](https://openai.github.io/openai-agents-python/context/)
- [Tool trimmer | OpenAI](https://openai.github.io/openai-agents-python/ref/extensions/tool_output_trimmer/)
- [Context | Google](https://adk.dev/context/)
- [State | Google](https://adk.dev/sessions/state/)
