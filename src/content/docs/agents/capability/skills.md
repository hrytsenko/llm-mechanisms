---
title: "Skills"
description: "A skill is an extension the harness gives the model so it can carry out a domain-specific task well. It consists of metadata with a trigger that tells the model when to invoke it, a body of instructions, and bundled resources."
tier: situational
sidebar:
  order: 2
---

A skill is an extension the harness gives the model so it can carry out a domain-specific task well. It consists of metadata with a trigger that tells the model when to invoke it, a body of instructions, and bundled resources.

The model reaches a skill through progressive disclosure, loading it in layers so it costs almost nothing until needed. At startup the model loads only each skill's metadata; when it decides a skill applies, it loads that skill's instructions; and only when the task requires them does it load the skill's resources. This is what lets a skill carry deep domain knowledge while keeping the context small — the two benefits that make skills worth reaching for.

## Consideration

- Write the description to tell the model when to trigger the skill, not to summarize what it contains.
- Structure the body and resources so progressive disclosure loads as little as possible until it is needed.
- Use bundled scripts for deterministic steps, so the model gets their output without spending context on the code.

## Specifics

- Anthropic discovers skills from user and project skill directories on the filesystem and lets you govern which skills are available.
- OpenAI reads skills from standard filesystem directories and can also pull a skill bundle straight from a Git repository, keeping versioned skills shareable across agents.
- Google loads skills programmatically and combines them into toolsets provided to the model as tools.

## References

- [Agent Skills | Anthropic](https://code.claude.com/docs/en/agent-sdk/skills)
- [Skills | Google](https://adk.dev/skills/)
- [Agent Skills](https://agentskills.io/home)
