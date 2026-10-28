---
title: "Telemetry"
description: "Telemetry is the operational signal an agent emits — traces, metrics, and logs covering the models and tools used, token counts and cost, and errors."
tier: foundational
sidebar:
  order: 1
---

Telemetry is the operational signal an agent emits — traces, metrics, and logs covering the models and tools used, token counts and cost, and errors.

Telemetry gives a near real-time view of an agent's operational health and expense. It focuses on faults that a correct final answer would otherwise hide such as latency creep, cost spikes, a tool timing out before the agent recovers.

Harnesses support OpenTelemetry, though the exact way signals are emitted varies. They propagate trace context from the host application and across agent boundaries, combining the two into a single timeline.

## Considerations

- Watch operational health, focusing on latency and cost rather than the agent's decisions.
- Strip sensitive data such as prompts from telemetry unless that content is critically needed.
- Track cost per turn, not per call — resent context makes long loops grow superlinearly.

## Specifics

- Anthropic ships OpenTelemetry instrumentation built into the harness, exporting to any OTLP collector once enabled.
- OpenAI has its own first-party tracing system and dashboard, and bridges to OpenTelemetry through a tracing-processor interface and instrumentation packages.
- Google favors the OpenTelemetry GenAI semantic conventions, exporting to Google Cloud Observability or to any OTLP collector.

## References

- [Observability | Anthropic](https://code.claude.com/docs/en/agent-sdk/observability)
- [Tracing | OpenAI](https://openai.github.io/openai-agents-python/tracing/)
- [Traces | Google](https://adk.dev/observability/traces/)
