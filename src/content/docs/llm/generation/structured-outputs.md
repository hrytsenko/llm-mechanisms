---
title: "Structured outputs"
description: "Structured outputs constrain a model's response to strictly conform to a supplied schema."
tier: foundational
sidebar:
  order: 2
---

Structured outputs constrain a model's response to strictly conform to a supplied schema.

Structured outputs guarantee that model output is syntactically valid and parseable. This supersedes the older JSON mode, which requested JSON without enforcing a schema.

Under the hood, structured outputs compile the schema into a grammar, which adds latency on the first call with a new schema (cached and cheaper thereafter).

## Considerations

- Structured outputs do not guarantee the data is semantically correct or sensible.
- Large or deeply nested schemas can exceed a platform's limits.

## References

- [Structured outputs | Anthropic](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Structured outputs | OpenAI](https://developers.openai.com/api/docs/guides/structured-outputs)
- [Structured outputs | Google](https://ai.google.dev/gemini-api/docs/structured-output)
