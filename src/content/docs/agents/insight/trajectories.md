---
title: "Trajectories"
description: "A trajectory is the recorded sequence of everything the agent did on a run — the messages, tool calls, tool results, reasoning, and handoffs, in order — capturing the path the agent took to produce its output."
tier: situational
sidebar:
  order: 2
---

A trajectory is the recorded sequence of everything the agent did on a run — the messages, tool calls, tool results, reasoning, and handoffs, in order — capturing the path the agent took to produce its output.

Trajectories answer how predictably and efficiently the agent reached its result. On predictability, an agent may arrive at the right output through an unexpected path — for instance, consistently recovering from invalid tool calls rather than calling them correctly the first time. On efficiency, it may reach the same result at higher cost — for instance, escalating to a stronger model on tasks that didn't need it. The final output alone hides both; the trajectory is what exposes them.

## Considerations

- An agent can reach the right result through the wrong path — capture the path so that failure mode is visible.
- Filter sensitive information out of captured messages, tool arguments, and delegation prompts.

## Specifics

- Anthropic captures the trajectory as the session transcript, written to disk in the structured form of a per-session JSONL file.
- OpenAI produces traces composed of spans for programmatic capture: each run is wrapped in an agent span, with generation, function, and handoff spans nested under it, linkable across runs by a shared group identifier.
- Google captures the trajectory as an ordered list of the steps the agent took, stored in a dataset (`eval_set`) of cases (`eval_case`) for distinct sessions; each case describes all its turns alongside the session input and the final result.

## References

- [Sessions | Anthropic](https://code.claude.com/docs/en/agent-sdk/sessions)
- [Tracing | OpenAI](https://openai.github.io/openai-agents-python/tracing/)
- [Evaluate agents | Google](https://adk.dev/evaluate/)
