---
title: "Error handling"
description: "Error handling covers the edge cases where the model cannot or won't return the final answer."
tier: foundational
sidebar:
  order: 1
---

Error handling covers the edge cases where the model cannot or won't return the final answer.

Truncation arises when the model cannot fit its output within the token limit set by a request parameter. Refusal arises when the model won't generate output due to safety or content policies. Moderation is an additional safety layer, available on some platforms, that focuses on detecting harmful content.

## Considerations

- Error handling also includes generic client and server errors.
- Refusals and moderation vary significantly across platforms.

## Specifics

- Anthropic's refusals are trained into the model and surface as a refusal stop reason.
- OpenAI provides a separate moderation service.
- Google provides flexible configuration of safety settings.

## References

- [System prompts | Anthropic](https://platform.claude.com/docs/en/release-notes/system-prompts)
- [Moderation | OpenAI](https://developers.openai.com/api/docs/guides/moderation)
- [Safety settings | Google](https://ai.google.dev/gemini-api/docs/safety-settings)
