---
title: "Sandbox"
description: "A sandbox is the inner boundary around the code and commands the agent executes."
tier: situational
sidebar:
  order: 2
---

A sandbox is the inner boundary around the code and commands the agent executes.

Executing model-generated code and shell commands is the agent's most dangerous capability: it runs with real privileges, and a single prompt injection can turn it toward leaking credentials or exfiltrating data. A sandbox contains it either inside the host process, by wrapping the shell, or in a separate container, and guards two boundaries: filesystem isolation confines reads and writes to the working directory, and network isolation confines outbound traffic to allowed endpoints. The two are interdependent — either alone is defeated by the other's absence.

## Considerations

- Keep credentials out of the execution sandbox — separate the secrets from the code that could leak them.
- Start restrictive and widen by exception — a narrow allowance you loosen beats a broad one you forgot to tighten.

## Specifics

- Anthropic wraps the shell in-host with OS primitives, enforcing filesystem and network limits on the shell tool and its children as a layer complementary to permissions; the boundary is the process, not a separate container.
- OpenAI provisions the sandbox as a separate execution environment, deliberately splitting it from the harness, which keeps approvals, tracing, and run state outside.
- Google delivers the sandbox through dedicated code executors rather than the general tool path, and recommends hermetic environments without network access.

## References

- [Sandbox | Anthropic](https://code.claude.com/docs/en/sandboxing)
- [Sandbox | OpenAI](https://openai.github.io/openai-agents-python/sandbox/guide/)
- [Sandbox | Google](https://adk.dev/safety/#sandboxed-code-execution)
