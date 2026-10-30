---
title: "Tools"
description: "Tools are the capabilities the harness gives the model so it can act."
tier: foundational
sidebar:
  order: 1
---

Tools are the capabilities the harness gives the model so it can act.

Tools fall into four categories by who ships them and where they run: hosted tools ship with the platform and run on it, such as web search and code execution; built-in tools ship with the harness and run in the agent environment, such as file search, file access, and shell commands; custom tools ship with your application and run in the agent environment; and MCP tools ship from third parties and run in the agent's or a third-party environment. Tool output is model input: agent tools return structured, parseable results, which is why a dedicated search tool exists alongside a shell that could run the same command.

## Considerations

- Define a minimum set of tools explicitly — the tool list is the first security boundary.
- Prefer hosted or built-in tools over custom equivalents.

## Specifics

- Anthropic ships the most complete set of built-in tools — search, files, shell, and web.
- OpenAI defines the interfaces of local tools and leaves their implementation to you.
- Google organizes tools into toolsets and provides a large catalog of pre-built tools and integrations.

## References

- [Tools | Anthropic](https://code.claude.com/docs/en/tools-reference)
- [Custom tools | Anthropic](https://code.claude.com/docs/en/agent-sdk/custom-tools)
- [Tools | OpenAI](https://openai.github.io/openai-agents-python/tools/)
- [MCP | OpenAI](https://openai.github.io/openai-agents-python/mcp/)
- [Tools | Google](https://adk.dev/tools-custom/)
- [Integrations | Google](https://adk.dev/integrations/)
