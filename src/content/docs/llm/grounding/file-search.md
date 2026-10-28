---
title: "File search"
description: "File search lets the model run retrieval over a body of documents, grounding the answer with citations to them."
tier: situational
sidebar:
  order: 4
---

File search lets the model run retrieval over a body of documents, grounding the answer with citations to them.

Under the hood, file search requires machinery for document chunking, embedding, and indexing — platforms either provide a hosted solution or let you plug in an external provider.

File search fetches only the relevant chunks at query time, so the corpus can far exceed the context window.

## Considerations

- Hosted stores price indexing and storage; with your own retrieval, the cost is your infrastructure.
- Retention for stored documents and embeddings may differ between platforms.

## Specifics

- Anthropic offers no hosted store; you supply retrieval and pass results back.
- OpenAI returns file citations by default, but not the retrieved chunk text unless you request it.
- Google limits combining search tools with non-search tools in one request.

## References

- [Search results | Anthropic](https://platform.claude.com/docs/en/build-with-claude/search-results)
- [File search | OpenAI](https://developers.openai.com/api/docs/guides/tools-file-search)
- [Retrieval | OpenAI](https://developers.openai.com/api/docs/guides/retrieval)
- [File search | Google](https://ai.google.dev/gemini-api/docs/file-search)
