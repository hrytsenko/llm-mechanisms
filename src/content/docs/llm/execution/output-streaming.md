---
title: "Output streaming"
description: "Output streaming exposes the model's output incrementally as it's generated."
tier: situational
sidebar:
  order: 2
---

Output streaming exposes the model's output incrementally as it's generated.

Streaming works for all types of content, including generated text, tool arguments, and internal reasoning. Under the hood, platforms hold a long-lived connection and use SSE events to pass deltas of the generated output to the client. These deltas are not meaningful by themselves; they are fragments of the final answer.

Streamed output can still end in a refusal after partial content, and emitting deltas before the full response is complete makes output moderation harder.

## Considerations

- Use deltas to improve responsiveness of interactive clients.
- Don't rely on streamed content until the final answer or refusal arrives.
- Streaming does not change billing.

## Specifics

- Anthropic and OpenAI stream fine-grained typed events.
- Google streams coarser chunks rather than token-level deltas.

## References

- [Streaming messages | Anthropic](https://platform.claude.com/docs/en/build-with-claude/streaming)
- [Streaming responses | OpenAI](https://developers.openai.com/api/docs/guides/streaming-responses)
- [Text generation | Google](https://ai.google.dev/gemini-api/docs/text-generation)
