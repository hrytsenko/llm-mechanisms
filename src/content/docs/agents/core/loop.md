---
title: "Loop"
description: "The agent loop repeats model decisions and their actions until the task is done."
tier: foundational
sidebar:
  order: 2
---

The agent loop repeats model decisions and their actions until the task is done.

The default framing is Thought → Action → Observation (ReAct): the model reasons, requests an action, and observes the result the harness returns as new context. Under the hood it's a plain while loop, which ends when the agent completes the task or reaches the turn limit.

## Considerations

- Check how the run ended before consuming the result — stopping at the turn limit or on an error is not completion.
- Cap the maximum number of turns — without a cap, a model that cannot complete the task may loop indefinitely.
- Give the agent tools to verify its work — self-checking inside the same context is weak, since the model tends to rationalize rather than evaluate.

## Specifics

- Anthropic runs the agent loop outside your process and favors configuration-first control of a complete harness with built-in tools and context management.
- OpenAI runs the loop inside your process with code-first control: turn caps and guardrails are explicit, and a run can pause for approval and resume from serialized state.
- Google runs the loop inside your process with a yield-and-resume contract: the agent pauses at each event, and the runtime commits state and forwards it before the agent continues.

## References

- [Loop | Anthropic](https://code.claude.com/docs/en/agent-sdk/agent-loop)
- [Loop | OpenAI](https://openai.github.io/openai-agents-python/running_agents/)
- [Loop | Google](https://adk.dev/runtime/event-loop/)
