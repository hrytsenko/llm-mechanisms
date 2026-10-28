---
title: "Sampling controls"
description: "Sampling controls shape how the model samples the final answer from its output distribution."
tier: situational
sidebar:
  order: 4
---

Sampling controls shape how the model samples the final answer from its output distribution.

Randomness is set by `temperature` (lower for deterministic, higher for creative output) and nucleus sampling (`top-p`), which restricts sampling to the most probable tokens up to a cumulative probability. Repetition is set by a presence penalty (penalizes tokens that have already appeared, encouraging new topics) and a frequency penalty (penalizes tokens in proportion to how often they appear, reducing repetition). Determinism is influenced by a `seed`, which requests reproducible output for identical inputs on a best-effort basis.

## Considerations

- Frontier and reasoning models prefer prompting and effort levers over sampling controls.
- Determinism isn't guaranteed even with a fixed seed or zero temperature.

## Specifics

- Anthropic keeps these minimal; its newest models reject non-default controls.
- OpenAI and Google expose the full set of sampling controls.

## References

- [Create messages | Anthropic](https://platform.claude.com/docs/en/api/java/messages/create)
- [Create responses | OpenAI](https://developers.openai.com/api/reference/resources/responses/methods/create)
- [Generating content | Google](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig)
