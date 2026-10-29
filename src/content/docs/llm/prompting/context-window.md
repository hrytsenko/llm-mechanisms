---
title: "Context window"
description: "The context window is the total set of tokens the model can reference to generate a response, including the response itself."
tier: foundational
sidebar:
  order: 1
---

The context window is the total set of tokens the model can reference to generate a response, including the response itself.

All models have a maximum context window size (~1M tokens on the frontier). The application assembles the input, including system instructions, prior conversation, and new input; the output, including internal reasoning, fills the rest.

## Considerations

- Keep the context small to avoid context rot and lost-in-the-middle degradation.
- Use compaction to stay within the window in long conversations.

## References

- [Context window | Anthropic](https://platform.claude.com/docs/en/build-with-claude/context-windows)
- [Compaction | Anthropic](https://platform.claude.com/docs/en/build-with-claude/compaction)
- [Conversation state | OpenAI](https://developers.openai.com/api/docs/guides/conversation-state)
- [Compaction | OpenAI](https://developers.openai.com/api/docs/guides/compaction)
- [Context window | Google](https://ai.google.dev/gemini-api/docs/long-context)
