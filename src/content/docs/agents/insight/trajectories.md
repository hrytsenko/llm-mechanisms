---
title: "Trajectories"
description: "A trajectory is the recorded sequence of everything the agent did on a run, capturing the path it took to produce its output."
tier: situational
sidebar:
  order: 2
---

A trajectory is the recorded sequence of everything the agent did on a run, capturing the path it took to produce its output.

It holds the messages, tool calls, tool results, reasoning, and handoffs, in order. Trajectories answer how predictably and efficiently the agent reached its result. On predictability, an agent may arrive at the right output through an unexpected path — for instance, consistently recovering from invalid tool calls rather than calling them correctly the first time. On efficiency, it may reach the same result at higher cost — for instance, escalating to a stronger model on tasks that didn't need it. The final output alone hides both; the trajectory is what exposes them.

## Considerations

- Keep trajectories from real runs — they become the reference cases for evaluations.
- Filter sensitive information out of captured messages, tool arguments, and delegation prompts.

## Specifics

- Anthropic captures the trajectory as the session transcript, written to disk in the structured form of a per-session JSONL file.
- OpenAI produces traces composed of spans for programmatic capture: each run is wrapped in an agent span, with generation, function, and handoff spans nested under it, linkable across runs by a shared group identifier.
- Google stores trajectories in eval cases, one per session, each listing its turns — the user input, the tool calls in order, and the final response — alongside the session's initial state.

## References

- [Sessions | Anthropic](https://code.claude.com/docs/en/agent-sdk/sessions)
- [Tracing | OpenAI](https://openai.github.io/openai-agents-python/tracing/)
- [Evaluate agents | Google](https://adk.dev/evaluate/)
