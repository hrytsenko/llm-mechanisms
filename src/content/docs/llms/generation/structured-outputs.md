---
title: "Structured outputs"
description: "Structured outputs constrain a model's response to strictly conform to a supplied schema."
tier: foundational
sidebar:
  order: 2
---

Structured outputs constrain a model's response to strictly conform to a supplied schema.

Under the hood, the platform compiles the schema into a grammar that constrains generation, which adds latency on the first call with a new schema; later calls reuse the cached grammar.

## Considerations

- Structured outputs do not guarantee the data is semantically correct or sensible.
- Large or deeply nested schemas can exceed a platform's limits.

## References

- [Structured outputs | Anthropic](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Structured outputs | OpenAI](https://developers.openai.com/api/docs/guides/structured-outputs)
- [Structured outputs | Google](https://ai.google.dev/gemini-api/docs/structured-output)
