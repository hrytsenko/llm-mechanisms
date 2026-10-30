---
title: "Context"
description: "The context is the instructions and state the model receives to decide its next action."
tier: foundational
sidebar:
  order: 3
---

The context is the instructions and state the model receives to decide its next action.

The key limitation of context is its size: as it grows, the model's ability to make optimal decisions degrades, giving diminishing returns. To manage this, the harness curates the context on each turn. Curation splits into two parts: assembly, where the harness decides what to include and how, and reduction, where it decides what to exclude and how. Reduction takes two main forms: compacting older history into a summary, and trimming content that has lost its relevance, stale tool results being the canonical example.

## Considerations

- Load durable facts ahead of the task, in instructions that survive reduction.
- Tell the compactor what to preserve when it summarizes.
- Use progressive disclosure — postpone or avoid loading facts until they are needed.

## Specifics

- Anthropic re-injects durable facts from `CLAUDE.md` into every request, so they survive the compaction that runs automatically near the window limit.
- OpenAI lets you rewrite the model input before each call, ships a trimmer that previews oversized tool outputs from older turns, and compacts through a dedicated session type.
- Google compiles the context over the session's event stream and compacts it either by token threshold (retaining recent events) or over a sliding window with a configurable summarizer.

## References

- [Context | Anthropic](https://code.claude.com/docs/en/agent-sdk/agent-loop#the-context-window)
- [Context | OpenAI](https://openai.github.io/openai-agents-python/context/)
- [Compaction | OpenAI](https://openai.github.io/openai-agents-python/sessions/#openai-responses-compaction-sessions)
- [Context | Google](https://adk.dev/context/)
- [Compaction | Google](https://adk.dev/context/compaction/)
