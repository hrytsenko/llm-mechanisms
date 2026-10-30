---
title: "Subagents"
description: "Subagents are separate agents that a parent agent spawns to handle a focused subtask."
tier: situational
sidebar:
  order: 3
---

Subagents are separate agents that a parent agent spawns to handle a focused subtask.

A subagent runs with its own context (instructions, task, tools), separate from the parent's — the delegation prompt is the only channel in, and only the final result comes back. This keeps intermediate work out of the parent's context, fits instructions and tools to the task, and grants only the permissions the task requires. Cost depends on the ratio between what a subagent consumes internally and what it returns: one that reads widely and returns a short summary keeps every later parent turn cheap.

## Considerations

- Define all input the subagent needs and the output contract the parent expects in the delegation prompt.
- Choose the model by task: a lower tier for exploration, a higher tier for decision-making.
- Scope tools by task: read-only for exploration, read-write for modification.

## Specifics

- Anthropic provides built-in subagents (such as Explore and Plan) tuned for common tasks.
- OpenAI supports two delegation models: agent-as-tool for intermediate results, and handoff to transfer ownership of the final result.
- Google makes agent composition explicit, with graph workflows that route between agents and deterministic nodes.

## References

- [Subagents | Anthropic](https://code.claude.com/docs/en/agent-sdk/subagents)
- [Subagents | OpenAI](https://openai.github.io/openai-agents-python/multi_agent/)
- [Subagents | Google](https://adk.dev/workflows/collaboration/)
- [Graph workflows | Google](https://adk.dev/graphs/)
