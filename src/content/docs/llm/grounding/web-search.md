---
title: "Web search"
description: "Web search lets the model retrieve live information from the internet, grounding the answer with this information."
tier: situational
sidebar:
  order: 3
---

Web search lets the model retrieve live information from the internet, grounding the answer with this information.

Platforms provide a server-side web search tool that returns results with source citations. This lets models overcome the knowledge cutoff and reduce hallucination by grounding answers in real sources.

Some platforms have the related capability of directly reading a specific URL rather than discovering sources through search.

## Considerations

- Cap searches (or limit search context) to control cost.
- Restrict accessible domains and set user location to scope and localize results.

## Specifics

- Anthropic provides a web fetch tool, but it can only retrieve URLs that already appear in the conversation context.
- OpenAI separates what it cited (inline citations) from what it consulted (an opt-in list of every URL looked at).
- Google grounding requires rendering its widget from returned HTML in production, which can rule out grounding on non-HTML surfaces.

## References

- [Web search | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)
- [Web fetch | Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)
- [Web search | OpenAI](https://developers.openai.com/api/docs/guides/tools-web-search)
- [Google search | Google](https://ai.google.dev/gemini-api/docs/google-search)
- [URL context | Google](https://ai.google.dev/gemini-api/docs/url-context)
