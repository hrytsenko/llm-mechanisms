---
title: "System instructions"
description: "System instructions are a high-authority channel for steering the model's reasoning."
tier: foundational
sidebar:
  order: 1
---

System instructions are a high-authority channel for steering the model's reasoning.

LLM APIs expose system instructions as a separate top-level parameter. The model favors them over conflicting user messages, and because they sit at the front of the prompt and rarely change, they're a primary target for prompt caching.

## Considerations

- Focus instructions on the model's role and goal first, then on rules and constraints.
- Use mid-conversation system instructions to steer the model while keeping the prefix cacheable.
- Don't put any untrusted or external content into system instructions.

## References

- [Messages API | Anthropic](https://platform.claude.com/docs/en/build-with-claude/working-with-messages)
- [System messages | Anthropic](https://platform.claude.com/docs/en/build-with-claude/mid-conversation-system-messages)
- [Prompt engineering | OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering)
- [Chain of command | OpenAI](https://model-spec.openai.com/2025-12-18.html#chain_of_command)
- [Text generation | Google](https://ai.google.dev/gemini-api/docs/text-generation)
