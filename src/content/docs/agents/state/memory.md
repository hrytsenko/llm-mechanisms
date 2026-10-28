---
title: "Memory"
description: "Memory lets an agent carry knowledge between sessions, so it improves over time instead of starting fresh each run."
tier: situational
sidebar:
  order: 2
---

Memory lets an agent carry knowledge between sessions, so it improves over time instead of starting fresh each run.

There are two recognizable types: reference memory (read-only, authored by you) and learned memory (read-write, accumulated by the agent or platform). Reference memory typically just files the agent reads at session start; learned memory requires a heavier harness.

The agent loads learned memory at the start of a run through a platform tool. Platforms may use progressive disclosure — the agent loads a summary first and pulls in additional memories on demand. Writing is a separate flow: new memories are captured during or after the run, then consolidated once the session completes.

## Considerations

- Curate what gets written — a bad memory persists and poisons every later run.
- Instruct the platform how to consolidate memory where that's configurable.
- Treat learned memory as sensitive, persistent data; filter before writing.

## Specifics

- Anthropic provides first-class reference memory from user and project folders, and a memory tool the agent uses to read and update learned memory.
- OpenAI provides a memory tool for sandboxed agents to read learned memory from files in the sandbox workspace, and a two-phase pipeline that distills and consolidates those files after the session, with recency-based forgetting.
- Google provides a memory tool the agent uses to read learned memory by semantic search, and a memory service where an LLM extracts and consolidates memories from a completed session.

## References

- [Instructions and memories | Anthropic](https://code.claude.com/docs/en/memory)
- [Memory tool | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)
- [Agent memory | OpenAI](https://openai.github.io/openai-agents-python/sandbox/memory/)
- [Memory | Google](https://adk.dev/sessions/memory/)
