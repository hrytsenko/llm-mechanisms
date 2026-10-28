---
title: "File input"
description: "File input lets the model process file content or use it as grounding during generation."
tier: situational
sidebar:
  order: 1
---

File input lets the model process file content or use it as grounding during generation.

For small, one-off files, platforms support inline delivery (`base64`); for large or reused files, a Files API lets you upload once and reference it many times; and some platforms accept a public URL the model fetches directly.

Files uploaded via the Files API are retained, but retention policies, file-size caps, and total storage differ per platform.

## Considerations

- Put large files before dynamic input so the prefix stays cacheable.
- The URL channel requires publicly reachable URLs.

## Specifics

- Anthropic retains files until you delete them.
- OpenAI requires a `purpose` on each file that governs how it may be used.
- Google auto-deletes uploaded files after 48 hours.

## References

- [Files API | Anthropic](https://platform.claude.com/docs/en/build-with-claude/files)
- [File inputs | OpenAI](https://developers.openai.com/api/docs/guides/file-inputs)
- [Files API | Google](https://ai.google.dev/gemini-api/docs/files)
