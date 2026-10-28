# AI Glossary

Fundamental terms for building with LLMs and agents, compared across Anthropic, OpenAI, and Google.

Published at [Hrytsenko - AI Glossary](https://hrytsenko.github.io/ai-glossary/).

## Content

```text
src/content/docs/
  index.mdx                  # landing page
  llm/                       # LLM Fundamentals
    index.mdx                # overview: purpose, tendencies, terms by group
    <group>/<term>.md
    ...
  agents/                    # Agent Fundamentals
    index.mdx                # overview: purpose, terms by group
    <group>/<term>.md
    ...
```

Each term is one Markdown file in its group directory:

```md
---
title: "Term"
description: "One-sentence definition."
tier: foundational        # foundational or situational
sidebar:
  order: 1                # position within the group
---

One-sentence definition.

Details, in one or more paragraphs.

## Considerations

- What to pay attention to.

## Specifics

- How vendors differ (optional).

## References

- [Page title | Vendor](https://...)
```

Note that `description` repeats the term's definition; it appears in the guide's term list and in link previews.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/ai-glossary/
npm run build    # output in dist/
```

Pushing to `main` deploys the site via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
