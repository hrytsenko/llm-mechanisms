---
title: "Internal reasoning"
description: "Internal reasoning lets the model spend tokens on an internal chain of thought before producing its visible answer."
tier: situational
sidebar:
  order: 3
---

Internal reasoning lets the model spend tokens on an internal chain of thought before producing its visible answer.

Internal reasoning trades tokens for higher quality on hard, multi-step tasks. Under the hood, the model breaks the problem down, considers alternatives, and self-checks; this internal trace is generated, billed, and counted separately from the final output.

Platforms run a dedicated reasoning phase, separate from the response. They typically return only a summary of it while billing the full trace, so the billed token count won't match what you see.

Platforms are converging on an effort lever to steer reasoning depth and token consumption, replacing the earlier numeric token budgets.

## Considerations

- Reasoning tokens count toward the context window.
- Return reasoning blocks during a tool call to preserve the model's chain of thought.

## Specifics

- Anthropic signs each reasoning block and requires it back during tool use, but otherwise strips reasoning from prior turns automatically.
- OpenAI discards reasoning between turns by default, or returns encrypted reasoning you can pass back when running stateless.
- Google uses thought signatures — encrypted representations of the reasoning state that you must return in later turns.

## References

- [Extended thinking | Anthropic](https://platform.claude.com/docs/en/build-with-claude/extended-thinking)
- [Adaptive thinking | Anthropic](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking)
- [Reasoning models | OpenAI](https://developers.openai.com/api/docs/guides/reasoning)
- [Gemini thinking | Google](https://ai.google.dev/gemini-api/docs/thinking)
