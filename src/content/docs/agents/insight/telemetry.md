---
title: "Telemetry"
description: "Telemetry is the operational signal an agent emits as traces, metrics, and logs."
tier: foundational
sidebar:
  order: 1
---

Telemetry is the operational signal an agent emits as traces, metrics, and logs.

Telemetry gives a near real-time view of an agent's operational health and expense, surfacing faults that a correct final answer would otherwise hide, such as latency creep, cost spikes, or a tool timing out before the agent recovers. Harnesses propagate trace context from the host application and across agent boundaries, combining both into a single timeline.

## Considerations

- Strip sensitive data such as prompts from telemetry unless that content is critically needed.
- Track cost per turn, not per call — resent context makes long loops grow superlinearly.

## Specifics

- Anthropic ships OpenTelemetry instrumentation built into the harness, exporting to any OTLP collector once enabled.
- OpenAI has its own first-party tracing system and dashboard, and reaches other backends through custom trace processors and third-party integrations.
- Google implements the OpenTelemetry GenAI semantic conventions, exporting to Cloud Trace or to any OTLP collector.

## References

- [Telemetry | Anthropic](https://code.claude.com/docs/en/agent-sdk/observability)
- [Telemetry | OpenAI](https://openai.github.io/openai-agents-python/tracing/)
- [Telemetry | Google](https://adk.dev/observability/)
- [Traces | Google](https://adk.dev/observability/traces/)
