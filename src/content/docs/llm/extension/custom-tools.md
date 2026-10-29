---
title: "Custom tools"
description: "Custom tools let the model ask the application to execute actions."
tier: situational
sidebar:
  order: 1
---

Custom tools let the model ask the application to execute actions.

The developer declares the available tools in the prompt. From there the model decides when to call one and emits a request with arguments; the application runs the operation and returns the result or an error; and the model folds that into its answer. Tool definitions sit in the cached prefix, and results stay in context on every later turn. Tool search defers definitions until the model looks them up, which keeps the context small and improves selection among many tools.

## Considerations

- Keep tool definitions specific, precise, and non-overlapping.
- Use calling mode to control tool calls per turn without editing the tool list.
- Use strict schemas to guarantee valid arguments, or grammars for free-form inputs.

## Specifics

- OpenAI also supports custom tools that take free-form text, optionally constrained by a grammar.
- Google has no API-level support for tool search.

## References

- [Define tools | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)
- [Tool search | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)
- [Function calling | OpenAI](https://developers.openai.com/api/docs/guides/function-calling)
- [Tool search | OpenAI](https://developers.openai.com/api/docs/guides/tools-tool-search)
- [Function calling | Google](https://ai.google.dev/gemini-api/docs/function-calling)
