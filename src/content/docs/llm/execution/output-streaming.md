---
title: "Output streaming"
description: "Output streaming exposes the model's output incrementally as it's generated."
tier: situational
sidebar:
  order: 2
---

Output streaming exposes the model's output incrementally as it's generated.

Streaming works for all types of content, including generated text, tool arguments, and internal reasoning. Under the hood, platforms hold a long-lived connection and use server-sent events (SSE) to pass deltas of the generated output to the client. These deltas are not meaningful by themselves; they are fragments of the final answer.

## Considerations

- Use deltas to improve responsiveness of interactive clients.
- Don't rely on streamed content until the response completes, since it can still end in a refusal.
- Streaming makes output moderation harder, since users see content before the response is complete.

## References

- [Streaming messages | Anthropic](https://platform.claude.com/docs/en/build-with-claude/streaming)
- [Streaming responses | OpenAI](https://developers.openai.com/api/docs/guides/streaming-responses)
- [Streaming interactions | Google](https://ai.google.dev/gemini-api/docs/streaming)
