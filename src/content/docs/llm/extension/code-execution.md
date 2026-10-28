---
title: "Code execution"
description: "Code execution lets the model perform deterministic computations."
tier: situational
sidebar:
  order: 3
---

Code execution lets the model perform deterministic computations.

As a server-side tool, it runs in the platform's sandbox, isolated from your own systems. How the sandbox is managed varies, from an explicitly created, session-oriented sandbox to completely ephemeral execution. Session-oriented sandboxes are torn down, typically after a short idle interval.

Under the hood, the model writes and runs code, iterating on errors until it succeeds.

## Considerations

- Python is the primary language for code execution.
- Sandboxes have no, or tightly limited, network access.

## Specifics

- Anthropic bills the container by uptime (per-hour), separate from tokens.
- OpenAI bills the container per active minute, on top of tokens.
- Google folds execution into token cost, with no separate sandbox charge.

## References

- [Code execution | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)
- [Code interpreter | OpenAI](https://developers.openai.com/api/docs/guides/tools-code-interpreter)
- [Code execution | Google](https://ai.google.dev/gemini-api/docs/code-execution)
