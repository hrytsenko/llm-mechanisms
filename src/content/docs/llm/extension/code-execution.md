---
title: "Code execution"
description: "Code execution lets the model perform deterministic computations."
tier: situational
sidebar:
  order: 3
---

Code execution lets the model perform deterministic computations.

As a server-side tool, it runs in the platform's sandbox, isolated from your own systems. Under the hood, the model writes and runs code, iterating on errors until it succeeds. A sandbox can be reused across requests to keep its files and state, within a limited lifetime.

## Considerations

- Python is the primary language for code execution.
- Sandboxes have no network access by default.

## Specifics

- Anthropic bills execution time per container-hour, on top of tokens.
- OpenAI bills each container session by memory size, on top of tokens.
- Google folds execution into token cost, with no separate sandbox charge.

## References

- [Code execution | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)
- [Code interpreter | OpenAI](https://developers.openai.com/api/docs/guides/tools-code-interpreter)
- [Code execution | Google](https://ai.google.dev/gemini-api/docs/code-execution)
