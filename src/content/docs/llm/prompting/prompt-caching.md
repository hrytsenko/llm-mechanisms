---
title: "Prompt caching"
description: "Prompt caching reduces the latency and cost of conversations by reusing a precomputed prompt prefix."
tier: situational
sidebar:
  order: 3
---

Prompt caching reduces the latency and cost of conversations by reusing a precomputed prompt prefix.

The cached prefix is typically the stable head of the prompt — system instructions, tool definitions, large documents — with changing content placed after it.

The minimum cacheable prefix is ~1K tokens, though it can be higher on larger models. Cache entries expire after a short idle window by default, refreshed on each hit; some platforms let you extend retention.

## Considerations

- Keep a stable prefix across requests to enable caching.
- Use the cached-token count in the response to measure hit rate.

## Specifics

- Anthropic supports explicit cache breakpoints; cache writes carry a premium that reads recoup.
- OpenAI lets you steer same-prefix traffic to the same machine, where the cache is local.

## References

- [Prompt caching | Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Prompt caching | OpenAI](https://developers.openai.com/api/docs/guides/prompt-caching)
- [Context caching | Google](https://ai.google.dev/gemini-api/docs/caching)
