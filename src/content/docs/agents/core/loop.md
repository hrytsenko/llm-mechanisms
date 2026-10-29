---
title: "Loop"
description: "The agent loop is the execution cycle where the model receives instructions and task, decides on an action, consumes the result as new context, and repeats until the task is done or the turn limit is reached."
tier: foundational
sidebar:
  order: 2
---

The agent loop is the execution cycle where the model receives instructions and task, decides on an action, consumes the result as new context, and repeats until the task is done or the turn limit is reached.

The default framing is Thought → Action → Observation (ReAct): the model reasons, requests an action, and observes the result the harness returns. The observation either drives the next iteration or completes the task. Observation becomes verification when you give the model tools and instructions to check its own work. Under the hood it's a regular while loop that lets the model interact with a harness to move toward task completion.

## Considerations

- Check the termination reason before consuming the result.
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
