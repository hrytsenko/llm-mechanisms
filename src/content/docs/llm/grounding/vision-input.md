---
title: "Vision input"
description: "Vision input lets the model reason over visual content such as images and PDFs."
tier: situational
sidebar:
  order: 2
---

Vision input lets the model reason over visual content such as images and PDFs.

Under the hood, models use native vision on images (common formats include JPEG, PNG, and WebP). PDFs are typically handled by dual extraction: the model pulls the embedded text and also renders each page as an image, tokenizing the two independently.

A request can contain multiple images (up to a per-platform cap), enabling cross-image reasoning. To control cost, most platforms expose a resolution lever that trades tokens for fidelity; PDFs also carry page-count and size limits.

## Considerations

- Cost of visual input scales with image size and resolution.
- PDF is the only document format with visual understanding; other formats fall back to text.

## Specifics

- Anthropic gives no explicit quality-vs-cost lever; images and PDF pages are resized automatically.
- Google also surfaces object detection and segmentation masks on images.

## References

- [Vision | Anthropic](https://platform.claude.com/docs/en/build-with-claude/vision)
- [PDF support | Anthropic](https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- [Images | OpenAI](https://developers.openai.com/api/docs/guides/images-vision)
- [Images | Google](https://ai.google.dev/gemini-api/docs/image-understanding)
