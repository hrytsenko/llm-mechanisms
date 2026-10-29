---
title: "Prompt caching"
description: "Prompt caching reduces the latency and cost of requests by reusing a precomputed prompt prefix."
tier: situational
sidebar:
  order: 3
---

Prompt caching reduces the latency and cost of requests by reusing a precomputed prompt prefix.

The cached prefix is the stable head of the prompt — system instructions, tool definitions, large documents — with changing content placed after it; any change within the prefix invalidates the cache from that point on. Cache entries expire after a short idle window by default, refreshed on each hit.

## Considerations

- Prefixes below a model-specific minimum (0.5K–4K tokens) aren't cached.
- Extend cache retention when requests are spaced beyond the idle window.

## Specifics

- Anthropic caches only on request, either for the whole prompt or up to explicit breakpoints.
- OpenAI caches by default, with an optional explicit-only mode.
- Google caches implicitly; in multi-turn loops, it caches the previous request only if the new one adds at least ~2K tokens.

## References

- [Prompt caching | Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Prompt caching | OpenAI](https://developers.openai.com/api/docs/guides/prompt-caching)
- [Context caching | Google](https://ai.google.dev/gemini-api/docs/caching)
