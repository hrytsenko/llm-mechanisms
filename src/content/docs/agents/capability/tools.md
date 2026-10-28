---
title: "Tools"
description: "Tools are the capabilities the harness gives the model so it can act — fetching data, running code, or accessing the filesystem."
tier: foundational
sidebar:
  order: 1
---

Tools are the capabilities the harness gives the model so it can act — fetching data, running code, or accessing the filesystem.

Typical tool categories:

- Hosted tools — shipped by the platform, executed on the platform.
- Built-in tools — shipped with the harness, executed in the agent environment.
- Custom tools — shipped with your application, executed in the agent environment.
- MCP tools — shipped by third parties, executed in the agent or a third-party environment.

Examples of hosted (remote) tools are web search and code execution. Examples of built-in (local) tools are file search (glob, grep), file access (read, edit, write), and shell commands (bash).

Tool output is model input: agent tools return structured, parseable results, which is why a dedicated search tool exists alongside a shell that could run the same command.

## Considerations

- Define a minimum set of tools explicitly — the tool list is the first security boundary.
- Prefer built-in or pre-built tools, which are optimized for agents rather than humans.

## Specifics

- Anthropic ships the most complete set of built-in tools — search, files, shell, and web.
- OpenAI differentiates local and sandbox tools — a computer tool for the local environment, filesystem tools only for the sandbox.
- Google organizes tools into toolsets and provides a large catalog of pre-built tools and integrations.

## References

- [Agent SDK | Anthropic](https://code.claude.com/docs/en/agent-sdk/overview)
- [Custom tools | Anthropic](https://code.claude.com/docs/en/agent-sdk/custom-tools)
- [MCP | Anthropic](https://code.claude.com/docs/en/agent-sdk/mcp)
- [Tools | OpenAI](https://openai.github.io/openai-agents-python/tools/)
- [MCP | OpenAI](https://openai.github.io/openai-agents-python/mcp/)
- [Integrations | Google](https://adk.dev/integrations/)
- [Multi-tool agent | Google](https://adk.dev/tutorials/multi-tool-agent/)
