---
title: "Guardrails"
description: "Guardrails validate the content the model consumes and produces."
tier: situational
sidebar:
  order: 3
---

Guardrails validate the content the model consumes and produces.

Guardrails cover three boundaries: on user input, they catch malformed or off-topic requests, prompt injection, and jailbreak attempts before an expensive model runs; on user-facing output, they catch unacceptable responses; and on tool calls, they keep sensitive data out of a tool's arguments and unsafe results out of the model's context. At any boundary, a failed check trips a tripwire that halts execution immediately rather than returning a result.

## Considerations

- Make the guardrail cheaper than what it guards — a fast model or a plain rule, not a second expensive model.
- Guard output on its own terms — an inappropriate response can harm business operations regardless of how benign the input looked.

## Specifics

- Anthropic has no dedicated guardrail primitive; you build guardrails from hooks and screens with a lightweight model.
- OpenAI makes guardrails first-class, with distinct input, output, and tool guardrails; in a multi-agent setup the input guardrail runs only on the first agent and the output guardrail only on the one that produces the final result.
- Google implements guardrails through callbacks and plugins around model and tool calling, and offers a "model as a judge" pattern using a lightweight model to screen for injection and unsafe content.

## References

- [Mitigate jailbreaks | Anthropic](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
- [Guardrails | OpenAI](https://openai.github.io/openai-agents-python/guardrails/)
- [Guardrails | Google](https://adk.dev/safety/#guardrails-to-screen-inputs-and-outputs)
