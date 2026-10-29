---
title: "Token counting"
description: "Token counting measures how many input tokens a request will consume before sending it."
tier: situational
sidebar:
  order: 4
---

Token counting measures how many input tokens a request will consume before sending it.

Platforms provide a dedicated operation to count tokens. It accepts the same request body as a generation call — system instructions, tool definitions, user message — and counts both text and multimodal content (images, PDFs).

## Considerations

- Count tokens against a specific model, since tokenization differs between them.
- Use token counting to estimate consumption, but don't expect an exact guarantee.

## Specifics

- OpenAI additionally ships a standalone tokenizer (`tiktoken`) for text estimates only.
- Google reports a per-modality breakdown (text, image, and so on) in the count response.

## References

- [Token counting | Anthropic](https://platform.claude.com/docs/en/build-with-claude/token-counting)
- [Counting tokens | OpenAI](https://developers.openai.com/api/docs/guides/token-counting)
- [Count tokens | Google](https://ai.google.dev/gemini-api/docs/tokens)
