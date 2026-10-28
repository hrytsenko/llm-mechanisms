---
title: "Guardrails"
description: "Guardrails validate the content the model consumes and produces. When a check fails it signals with a tripwire that raises rather than returns, halting execution immediately."
tier: situational
sidebar:
  order: 3
---

Guardrails validate the content the model consumes and produces. When a check fails it signals with a tripwire that raises rather than returns, halting execution immediately.

Guardrails cover three boundaries. On user-sourced input, they catch not just malformed or off-topic requests but prompt injection and jailbreak attempts before an expensive model runs. On user-facing output, they catch unacceptable responses the model produced for any reason, regardless of the input that led there. On tool calling, the concern shifts: the input guardrail prevents sensitive data from being disclosed in a tool's arguments, and the output guardrail prevents toxic or unsafe results from flowing back into the model's context.

## Considerations

- Make the guardrail cheaper than what it guards — a fast model or a plain rule, not a second expensive model.
- Guard output on its own terms — an inappropriate response can harm business operations regardless of how benign the input looked.

## Specifics

- Anthropic has no dedicated guardrail primitive, relying on model refusals and custom tools.
- OpenAI makes guardrails first-class, with distinct input, output, and tool guardrails; in a multi-agent setup the input guardrail runs only on the first agent and the output guardrail only on the one that produces the final result.
- Google implements guardrails through callbacks and plugins around model and tool calling, and offers a "model as a judge" pattern using a cheap, fast model to screen for injection and unsafe content.

## References

- [Guardrails | OpenAI](https://openai.github.io/openai-agents-python/guardrails/)
- [Tool guardrails | OpenAI](https://openai.github.io/openai-agents-python/ref/tool_guardrails/)
- [Safety and Security | Google](https://adk.dev/safety/)
