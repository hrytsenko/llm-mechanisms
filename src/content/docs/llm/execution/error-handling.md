---
title: "Error handling"
description: "Error handling covers the edge cases where the model cannot or won't return the final answer."
tier: foundational
sidebar:
  order: 1
---

Error handling covers the edge cases where the model cannot or won't return the final answer.

Truncation arises when the model cannot fit its output within the token limit set by a request parameter. Refusal arises when the model won't generate output due to safety or content policies. Moderation is an additional safety layer that focuses on detecting harmful content.

## Considerations

- Check every response for edge cases, since platforms return them as successful responses.
- Retry transient errors, such as rate limits and overloads, with backoff.

## Specifics

- Anthropic's safety classifiers signal refusals with a dedicated stop reason.
- OpenAI provides a separate moderation service.
- Google provides flexible configuration of safety settings.

## References

- [Stop reasons | Anthropic](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)
- [Moderation | OpenAI](https://developers.openai.com/api/docs/guides/moderation)
- [Troubleshooting | Google](https://ai.google.dev/gemini-api/docs/troubleshooting)
- [Safety settings | Google](https://ai.google.dev/gemini-api/docs/safety-settings)
