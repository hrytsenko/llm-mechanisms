---
title: "File input"
description: "File input lets the model process file content or use it as grounding during generation."
tier: situational
sidebar:
  order: 1
---

File input lets the model process file content or use it as grounding during generation.

For small, one-off files, platforms support inline delivery (`base64`); for large or reused files, a Files API lets you upload once and reference it many times; and a URL lets the model fetch the file directly.

## Considerations

- Put large files before dynamic input so the prefix stays cacheable.
- The URL channel requires publicly reachable URLs.
- Uploaded files are subject to file-size and total-storage limits.

## Specifics

- Anthropic retains files until you delete them or they reach an expiration set on upload.
- OpenAI requires each uploaded file to declare its intended use, which governs how it may be used.
- Google auto-deletes uploaded files after 48 hours.

## References

- [File input | Anthropic](https://platform.claude.com/docs/en/build-with-claude/files)
- [File input | OpenAI](https://developers.openai.com/api/docs/guides/file-inputs)
- [File input | Google](https://ai.google.dev/gemini-api/docs/file-input-methods)
