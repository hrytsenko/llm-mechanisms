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
- Add moderation as the application opens up to a wider audience — refusals cover only what the model itself declines.

## Specifics

- Anthropic's safety classifiers signal refusals with a dedicated stop reason.
- OpenAI provides a separate moderation service.
- Google provides flexible configuration of safety settings.

## References

- [Stop reasons | Anthropic](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons)
- [Refusals | Anthropic](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback)
- [Moderation | OpenAI](https://developers.openai.com/api/docs/guides/moderation)
- [Blocked codes | Google](https://ai.google.dev/gemini-api/docs/api-errors#generation-blocked-codes)
- [Safety settings | Google](https://ai.google.dev/gemini-api/docs/safety-settings)
