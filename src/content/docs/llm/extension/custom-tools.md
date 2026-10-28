---
title: "Custom tools"
description: "Custom tools let the model ask the application to execute actions."
tier: situational
sidebar:
  order: 1
---

Custom tools let the model ask the application to execute actions.

The developer declares the available tools in the prompt. From there the model decides when to call one and emits a request with arguments; the application runs the operation and returns the result; and the model folds that result into its answer.

Tool definitions live in the cached prefix, so where a platform lets you restrict the callable set without editing the tools array, prefer that — it steers the model without invalidating the cache. Tool outputs are strings in a format you choose; signal errors explicitly so the model can react, and keep outputs lean, since results stay in context and count against the window on every later turn.

## Considerations

- Use calling mode to force, require, or disable tool calls for specific turns.
- Keep tool definitions specific, precise, and non-overlapping, and the up-front set small.
- Use tool search to reduce context size and improve selection accuracy.

## Specifics

- Anthropic offers two search variants: pattern matching (`regex`) and keyword relevance (`BM25`).
- OpenAI groups tools into namespaces and supports hosted and client-executed search.
- Google has no API-level support for tool search.

## References

- [Define tools | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)
- [Tool search | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)
- [Function calling | OpenAI](https://developers.openai.com/api/docs/guides/function-calling)
- [Tool search | OpenAI](https://developers.openai.com/api/docs/guides/tools-tool-search)
- [Function calling | Google](https://ai.google.dev/gemini-api/docs/function-calling)
