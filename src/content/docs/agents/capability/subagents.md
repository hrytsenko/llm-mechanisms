---
title: "Subagents"
description: "Subagents are separate agents that a parent agent spawns to handle a focused subtask."
tier: situational
sidebar:
  order: 3
---

Subagents are separate agents that a parent agent spawns to handle a focused subtask.

A subagent runs with its own context (instructions, task, tools), separate from the parent's — the delegation prompt is the only channel between them. The subagent does its work and returns only the final result.

Subagents improve scalability by keeping intermediate work out of the parent's context, efficiency by using instructions and tools fitted to the task, and security by granting only the tools and permissions the task requires.

Cost depends on the ratio between what a subagent consumes internally and what it returns. A subagent that reads widely and returns a short summary keeps the parent's context small and every later turn cheaper; one that does trivial work and returns a verbose report is pure overhead.

## Considerations

- Define all necessary subagent input in the delegation prompt.
- Specify the output contract the parent needs.
- Choose the model by task: a lower tier for exploration, a higher tier for decision-making.
- Scope tools by task: read-only for exploration, read-write for modification.

## Specifics

- Anthropic provides built-in subagents (such as Explore and Plan) tuned for common tasks.
- OpenAI supports two delegation models: agent-as-tool for intermediate results, and handoff to transfer ownership of the final result.
- Google makes agent composition explicit, with parallel, sequential, and loop agents.

## References

- [Subagents | Anthropic](https://code.claude.com/docs/en/agent-sdk/subagents)
- [Agent orchestration | OpenAI](https://openai.github.io/openai-agents-python/multi_agent/)
- [Workflows | Google](https://adk.dev/workflows/)
