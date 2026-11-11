# LLM Mechanisms

Fundamental mechanisms for building with LLMs and agents, compared across Anthropic, OpenAI, and Google.

Published at [LLM Mechanisms](https://hrytsenko.github.io/llm-mechanisms/).

## Content

```text
src/content/docs/
  index.mdx             # home
  <catalog>/
    index.mdx           # catalog overview
    <group>/
      <mechanism>.md    # mechanism page
  trends.mdx            # trends
```

- **Catalog:** Groups of mechanisms for building either LLM applications or agentic systems.
- **Mechanism:** A concise description of one mechanism and how vendors offer it.
- **Trends:** Industry trends that bring vendors closer together, listed by version.

## Develop

```sh
npm install
npm run dev      # run at http://localhost:4321/llm-mechanisms/
lychee .         # check links
vale .           # check prose
```
