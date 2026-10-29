---
title: "Batch processing"
description: "Batch processing runs a large set of requests asynchronously."
tier: situational
sidebar:
  order: 3
---

Batch processing runs a large set of requests asynchronously.

Batch processing trades real-time responses for a discount on input and output token costs (around 50%). The platform processes each batch within a completion window (around 24h), often much sooner, and expires requests it can't finish in time.

## Considerations

- Split large jobs across batches to stay within size and request-count limits.
- Handle failed and expired requests individually; the rest of the batch still completes.
- The batch discount stacks with prompt caching.

## Specifics

- Anthropic takes requests inline, with no file upload.
- OpenAI takes requests as an uploaded JSONL file.
- Google takes either: inline for small batches, a JSONL file for large ones.

## References

- [Batch processing | Anthropic](https://platform.claude.com/docs/en/build-with-claude/batch-processing)
- [Batch API | OpenAI](https://developers.openai.com/api/docs/guides/batch)
- [Batch API | Google](https://ai.google.dev/gemini-api/docs/batch-api)
