---
title: "Conversation state"
description: "Conversation state is the message history that gives the model context from prior turns."
tier: foundational
sidebar:
  order: 2
---

Conversation state is the message history that gives the model context from prior turns.

Models are stateless by nature, so they expect the full conversation state on each request. The conversation state is managed either by client or server. Client-side management means the application builds and resends the state on each request. Server-side management means the platform stores the state and returns a reference that the application passes back with the next request.

## Considerations

- Server-side state does not reduce input tokens — prior turns still count on each request.
- For zero data retention, rely on client-side management.

## Specifics

- Anthropic manages state client-side only.
- OpenAI and Google default to server-side state, with a client-side fallback.

## References

- [Messages API | Anthropic](https://platform.claude.com/docs/en/build-with-claude/working-with-messages)
- [Conversation state | OpenAI](https://developers.openai.com/api/docs/guides/conversation-state)
- [Interactions API | Google](https://ai.google.dev/gemini-api/docs/interactions-overview)
