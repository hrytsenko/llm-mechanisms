# Agent instructions

See [README.md](README.md) for the content layout, the page template, and how to build the site.

## Decisions

### The landing page explains the approach

The landing page ([src/content/docs/index.mdx](src/content/docs/index.mdx)) stays concise: it has only the title, the tagline, a short explanation of the scope checks and tiers, and the guide cards. The scope checks and tiers are written only there; guide overviews link to the landing page instead of repeating them.

### Pages describe mechanisms

Each page describes one mechanism — something you use to build with LLMs or agents, such as prompt caching or subagents. Call them "mechanisms" in all prose: the tagline, the landing page, guide overviews, mechanism pages, and the README. Don't call them "terms" or "concepts".

### Mechanism pages stay concise

A mechanism page opens with a one-sentence definition, followed by one paragraph of additional detail. If the detail doesn't fit, keep what explains how the mechanism works, move practical advice to Considerations, and move vendor differences to Specifics.

Considerations and Specifics each keep at most three points, the most important ones.

### Prose avoids API identifiers

Describe what a platform does in plain prose, without exact field, parameter, or operation names, such as a file's `purpose` or `previous_response_id`. Readers find the identifiers in the vendor documentation. Names of products, libraries, and files, such as `tiktoken` or `CLAUDE.md`, are fine.

### Statements don't hedge on platform support

Not every platform offers every mechanism, or every aspect of one. Don't qualify statements with "where supported", "on some platforms", or similar. Describing an aspect means it is worth knowing; readers check the vendor documentation for availability. When a divergence between platforms matters, point it out in Specifics.

### References point to each platform's mechanism page

Give one link per platform, in the order Anthropic, OpenAI, Google. Skip a platform only if it doesn't document the mechanism. Prefer the page dedicated to the mechanism; fall back to a broader guide or an API reference only when no such page exists.

Add another link for a platform only when it covers an aspect the page describes. For example, the system instructions page also links Anthropic's mid-conversation system messages, because the page recommends them.

Label each link "Label | Vendor" with a couple of words rather than the page's exact title, so readers can scan and compare the references. For the main link to a page dedicated to the mechanism, use the mechanism's title, so the labels line up across platforms. For a broader page, shorten its own title, such as "Messages API". For an additional link, name the aspect it covers, such as "Tool search".

### The LLM guide covers the latest API per platform

The LLM guide relies only on each platform's latest API family: the Anthropic Messages API, the OpenAI Responses API, and the Google Interactions API. Don't describe or link older API families, such as OpenAI's Chat Completions, even where they offer more.
