---
title: "Sessions"
description: "Sessions accumulate the history of everything handled by the agent loop — user and model messages, tool and subagent invocations, and their results."
tier: foundational
sidebar:
  order: 1
---

Sessions accumulate the history of everything handled by the agent loop — user and model messages, tool and subagent invocations, and their results.

Harnesses persist sessions so you can reuse them later. The two primary scenarios are continuing (or resuming) a session to keep working with prior context; and forking a session to explore an alternative without losing the original.

Harnesses persist sessions in stores that are either local (disk) or remote (a database).

## Considerations

- A session persists conversation events, not environment changes such as file edits.
- Harnesses use compaction on long sessions to manage context size.

## Specifics

- Anthropic writes sessions to local disk, keyed by working directory — resuming from another host requires mirroring transcripts to a shared store.
- OpenAI relies on pluggable stores with a small interface (get, add, pop, clear), including the ability to undo the last conversation item.
- Google derives session state from the event history — changes flow through committed events rather than in-place updates, so the state is a clean projection of what happened.

## References

- [Sessions | Anthropic](https://code.claude.com/docs/en/agent-sdk/sessions)
- [Sessions | OpenAI](https://openai.github.io/openai-agents-python/sessions/)
- [Conversational Context | Google](https://adk.dev/sessions/)
