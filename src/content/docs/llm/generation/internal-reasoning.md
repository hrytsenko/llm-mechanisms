---
title: "Internal reasoning"
description: "Internal reasoning lets the model spend tokens on an internal chain of thought before producing its visible answer."
tier: situational
sidebar:
  order: 3
---

Internal reasoning lets the model spend tokens on an internal chain of thought before producing its visible answer.

Internal reasoning trades tokens for higher quality on hard, multi-step tasks. Under the hood, the model reasons in a dedicated phase before the response: it breaks the problem down, considers alternatives, and self-checks. Platforms return at most a summary of the reasoning but bill for all of it, so the billed token count won't match what you see.

## Considerations

- Reasoning tokens count toward the context window.
- Use effort levers to steer reasoning depth and token consumption.
- Return reasoning blocks during a tool call to preserve the model's chain of thought.

## Specifics

- Anthropic signs each reasoning block and keeps reasoning from all prior turns in context, billed as input.
- OpenAI lets you choose whether reasoning from earlier turns stays in context.
- Google carries reasoning across turns as encrypted thought signatures, which the server keeps for you.

## References

- [Internal reasoning | Anthropic](https://platform.claude.com/docs/en/build-with-claude/thinking)
- [Internal reasoning | OpenAI](https://developers.openai.com/api/docs/guides/reasoning)
- [Internal reasoning | Google](https://ai.google.dev/gemini-api/docs/thinking)
