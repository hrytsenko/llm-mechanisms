---
title: "Vision input"
description: "Vision input lets the model reason over visual content such as images and PDFs."
tier: situational
sidebar:
  order: 2
---

Vision input lets the model reason over visual content such as images and PDFs.

Under the hood, models use native vision on images (common formats include JPEG, PNG, and WebP), and a request can contain multiple images for cross-image reasoning. PDFs are handled by dual extraction: the model pulls the embedded text and also renders each page as an image, tokenizing the two independently.

## Considerations

- Use the resolution lever to trade tokens for fidelity.
- Requests are subject to image-count limits, and PDFs to page-count and size limits.
- PDF is the only document format with visual understanding; other formats fall back to text.

## Specifics

- Anthropic gives no explicit quality-vs-cost lever; images and PDF pages are resized automatically.

## References

- [Vision input | Anthropic](https://platform.claude.com/docs/en/build-with-claude/vision)
- [PDF support | Anthropic](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- [Vision input | OpenAI](https://developers.openai.com/api/docs/guides/images-vision)
- [Vision input | Google](https://ai.google.dev/gemini-api/docs/image-understanding)
