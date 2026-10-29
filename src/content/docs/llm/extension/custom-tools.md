---
title: "Custom tools"
description: "Custom tools let the model ask the application to execute actions."
tier: situational
sidebar:
  order: 1
---

Custom tools let the model ask the application to execute actions.

The developer declares the available tools in the prompt. From there the model decides when to call one and emits a request with arguments; the application runs the operation and returns the result or an error; and the model folds that into its answer. Tool definitions sit in the cached prefix, and results stay in context on every later turn.

## Considerations

- Keep tool definitions specific, precise, and non-overlapping.
- Use calling mode to control tool calls per turn without editing the tool list.
- Use tool search to reduce context size and improve selection accuracy.

## Specifics

- Anthropic offers two search variants: pattern matching (`regex`) and keyword relevance (`BM25`).
- OpenAI recommends grouping deferred tools into small namespaces.
- Google has no API-level support for tool search.

## References

- [Define tools | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)
- [Tool search | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)
- [Function calling | OpenAI](https://developers.openai.com/api/docs/guides/function-calling)
- [Tool search | OpenAI](https://developers.openai.com/api/docs/guides/tools-tool-search)
- [Function calling | Google](https://ai.google.dev/gemini-api/docs/function-calling)
