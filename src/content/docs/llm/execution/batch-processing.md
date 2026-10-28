---
title: "Batch processing"
description: "Batch processing runs a large set of requests asynchronously."
tier: situational
sidebar:
  order: 3
---

Batch processing runs a large set of requests asynchronously.

Batch processing trades real-time processing for a discount on input and output token costs (typically around 50%).

Platforms let you submit batches via a request-based or file-based API. They limit batch size and per-batch request count, and impose account-wide cross-batch limits. They also define a guaranteed maximum period to process a batch (typically around 24h).

## Considerations

- Poll for status — batches often complete well before the guaranteed window.
- Reconcile results and handle partial failures of individual requests.
- The batch discount stacks with prompt caching for compounding savings.

## Specifics

- Anthropic submits requests inline through the API, with no file upload.
- OpenAI and Google are file-based, exchanging JSONL files for input and results.

## References

- [Batch processing | Anthropic](https://platform.claude.com/docs/en/build-with-claude/batch-processing)
- [Batch API | OpenAI](https://developers.openai.com/api/docs/guides/batch)
- [Batch API | Google](https://ai.google.dev/gemini-api/docs/batch-api)
