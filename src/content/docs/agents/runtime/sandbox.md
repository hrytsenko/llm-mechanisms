---
title: "Sandbox"
description: "A sandbox lets the agent execute model-generated commands and code safely, setting the inner boundary on what that execution can touch on the filesystem and network."
tier: situational
sidebar:
  order: 2
---

A sandbox lets the agent execute model-generated commands and code safely, setting the inner boundary on what that execution can touch on the filesystem and network.

Executing model-generated code and shell commands is the agent's most dangerous capability, because it runs with real privileges, and a single prompt injection can turn it toward leaking credentials or exfiltrating data. To contain this, platforms typically wrap the shell inside the host process or move execution to a separate container.

A sandbox guards two primary boundaries: filesystem and network. Filesystem isolation confines read and write operations to the working directory only. Network isolation confines outbound traffic to allowed endpoints only. The two are interdependent — either alone is defeated by the other's absence.

## Considerations

- Keep credentials out of the execution sandbox — separate the secrets from the code that could leak them.
- Start restrictive and widen by exception — a narrow allowance you loosen beats a broad one you forgot to tighten.

## Specifics

- Anthropic wraps the shell in-host with OS primitives, enforcing filesystem and network limits on the shell tool and its children as a layer complementary to permissions; the boundary is the process, not a separate container.
- OpenAI provisions the sandbox as a separate execution environment, deliberately splitting the harness's control plane from the sandbox's execution and isolating credentials from it.
- Google delivers the sandbox through a dedicated code executor rather than the general tool path, with hermetic no-network environments recommended and executors that do not inherit the agent's cloud permissions.

## References

- [Sandboxing | Anthropic](https://code.claude.com/docs/en/sandboxing)
- [Sandbox agents | OpenAI](https://openai.github.io/openai-agents-python/sandbox_agents/)
- [Code execution | Google](https://adk.dev/integrations/code-execution/)
