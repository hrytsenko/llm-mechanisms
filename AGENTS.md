# Agent instructions

See [README.md](README.md) for the content layout, the page template, and how to build the site.

## Decisions

### The landing page explains the approach

The landing page ([src/content/docs/index.mdx](src/content/docs/index.mdx)) stays concise: it has only the title, the tagline, a short explanation of the scope checks and tiers, and the guide cards. The scope checks and tiers are written only there; guide overviews link to the landing page instead of repeating them.

### Pages describe mechanisms

Each page describes one mechanism — something you use to build with LLMs or agents, such as prompt caching or subagents. Call them "mechanisms" in all prose: the tagline, the landing page, guide overviews, mechanism pages, and the README. Don't call them "terms" or "concepts".

Code identifiers such as `TermList` predate this decision and keep their names.

### Mechanism pages stay concise

A mechanism page opens with a one-sentence definition, followed by one paragraph of additional detail. If the detail doesn't fit, keep what explains how the mechanism works, move practical advice to Considerations, and move vendor differences to Specifics.

### Statements don't hedge on platform support

Not every platform offers every mechanism, or every aspect of one. Don't qualify statements with "where supported", "on some platforms", or similar. Describing an aspect means it is worth knowing; readers check the vendor documentation for availability. When a divergence between platforms matters, point it out in Specifics.

### References point to each platform's mechanism page

Give one link per platform, in the order Anthropic, OpenAI, Google. Skip a platform only if it doesn't document the mechanism. Prefer the page dedicated to the mechanism; fall back to a broader guide or an API reference only when no such page exists.

Add another link for a platform only when it covers an aspect the page describes. For example, the system instructions page also links Anthropic's mid-conversation system messages, because the page recommends them.
