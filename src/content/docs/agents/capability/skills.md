---
title: "Skills"
description: "A skill is a package of on-demand instructions for the agent to carry out a domain-specific task."
tier: situational
sidebar:
  order: 2
---

A skill is a package of on-demand instructions for the agent to carry out a domain-specific task.

A skill has three layers, loaded through progressive disclosure: metadata with a trigger that tells the model when to invoke it, loaded at startup; a body of instructions, loaded when the model decides the skill applies; and bundled resources, loaded only when the task requires them. Until it is needed, a skill costs almost nothing, which lets it carry deep domain knowledge while keeping the context small.

## Considerations

- Write the description to tell the model when to trigger the skill, not to summarize what it contains.
- Structure the body and resources so progressive disclosure loads as little as possible until it is needed.
- Use bundled scripts for deterministic steps, so the model gets their output without spending context on the code.

## Specifics

- Anthropic discovers skills from user and project skill directories on the filesystem and lets you govern which skills are available.
- OpenAI materializes skills into the agent's sandbox from a local directory or a Git repository.
- Google loads skills programmatically and combines them into toolsets provided to the model as tools.

## References

- [Skills | Anthropic](https://code.claude.com/docs/en/agent-sdk/skills)
- [Sandbox concepts | OpenAI](https://openai.github.io/openai-agents-python/sandbox/guide/#capabilities)
- [Skills | Google](https://adk.dev/skills/)
