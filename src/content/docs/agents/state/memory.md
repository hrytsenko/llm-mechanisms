---
title: "Memory"
description: "Memory lets an agent carry knowledge between sessions, so it improves over time instead of starting fresh each run."
tier: situational
sidebar:
  order: 2
---

Memory lets an agent carry knowledge between sessions, so it improves over time instead of starting fresh each run.

There are two recognizable types: reference memory (read-only, authored by you) and learned memory (read-write, accumulated by the agent or platform). Reference memory is typically just files the agent reads at session start; learned memory loads through progressive disclosure — a summary or index at the start of a run, with details pulled in on demand. Writing is a separate flow: the agent records memories during the run, or the platform extracts and consolidates them after the session completes.

## Considerations

- Curate what gets written — a bad memory persists and poisons every later run.
- Instruct the platform what to keep when it consolidates memory.
- Treat learned memory as sensitive, persistent data; filter before writing.

## Specifics

- Anthropic loads reference memory from user and project folders, and lets the agent write learned memory as notes during the session, loading their index at startup.
- OpenAI injects a memory summary into a sandboxed agent's prompt, leaving details in workspace files, and distills and consolidates memory in two phases after the session, with recency-based forgetting.
- Google provides a memory tool the agent uses to read learned memory by semantic search, and a memory service where an LLM extracts and consolidates memories from a completed session.

## References

- [Memory | Anthropic](https://code.claude.com/docs/en/memory)
- [Memory | OpenAI](https://openai.github.io/openai-agents-python/sandbox/memory/)
- [Memory | Google](https://adk.dev/sessions/memory/)
