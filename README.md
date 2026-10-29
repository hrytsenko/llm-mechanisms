# LLM Mechanisms

Fundamental mechanisms for building with LLMs and agents, compared across Anthropic, OpenAI, and Google.

Published at [Hrytsenko - LLM Mechanisms](https://hrytsenko.github.io/llm-mechanisms/).

## Content

```text
src/content/docs/
  index.mdx                  # landing page
  <guide>/                   # llm or agents
    index.mdx                # guide overview
    <group>/<mechanism>.md   # mechanism explanation
    ...
```

Each mechanism is one Markdown file in its group directory:

```md
---
title: "Mechanism"
description: "One-sentence definition."
tier: foundational        # foundational or situational
sidebar:
  order: 1                # position within the group
---

One-sentence definition.

Additional notes, in one paragraph.

## Considerations

- What to pay attention to.

## Specifics

- How vendors differ (optional).

## References

- [Page title | Vendor](https://...)
```

Note that `description` repeats the definition; it appears in the guide's mechanism list and in link previews.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/llm-mechanisms/
npm run build    # output in dist/
```

Pushing to `main` deploys the site via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
