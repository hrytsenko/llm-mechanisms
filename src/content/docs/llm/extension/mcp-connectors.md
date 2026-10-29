---
title: "MCP connectors"
description: "MCP connectors let the model use tools from remote MCP servers."
tier: situational
sidebar:
  order: 2
---

MCP connectors let the model use tools from remote MCP servers.

You register a remote MCP server by its URL; the platform then lists the server's tools and calls them when appropriate. Configuration lets you restrict which of a server's tools are exposed and defer tools for tool search.

## Considerations

- Expose only necessary tools from servers to avoid context bloat.
- Keep server access tokens in a secrets manager to avoid leaks.
- Use a secure tunnel to reach private servers.

## Specifics

- Anthropic splits the wiring between connection and usage configurations.
- OpenAI defaults to requiring approval before each MCP tool call.
- Google supports only the modern streamable HTTP transport for servers.

## References

- [MCP connector | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector)
- [MCP tunnels | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview)
- [MCP connectors | OpenAI](https://developers.openai.com/api/docs/guides/tools-connectors-mcp)
- [MCP tunnels | OpenAI](https://developers.openai.com/api/docs/guides/secure-mcp-tunnels)
- [Remote MCP | Google](https://ai.google.dev/gemini-api/docs/function-calling#mcp)
