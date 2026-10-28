---
title: "System instructions"
description: "System instructions are a high-authority channel for steering the model's reasoning."
tier: foundational
sidebar:
  order: 1
---

System instructions are a high-authority channel for steering the model's reasoning.

LLM APIs expose system instructions as a separate top-level parameter. This parameter carries the highest authority and, because it sits at the front of the prompt and rarely changes, is a primary target for prompt caching.

Some platforms also allow system instructions inside the message array via a dedicated role. These mid-conversation instructions let you steer the model further while keeping the prefix cacheable.

Highest authority means the model prefers system instructions over user and assistant messages when they conflict; among system instructions, later ones override earlier ones.

## Considerations

- Focus instructions on the model's role and goal first, then on rules and constraints.
- Don't put any untrusted or external content into system instructions.

## References

- [Messages API | Anthropic](https://platform.claude.com/docs/en/build-with-claude/working-with-messages)
- [System messages | Anthropic](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages)
- [Prompt engineering | OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering)
- [Chain of command | OpenAI](https://model-spec.openai.com/2025-12-18.html#chain_of_command)
- [Text generation | Google](https://ai.google.dev/gemini-api/docs/text-generation)
