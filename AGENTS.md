# Agent instructions

See [README.md](README.md) for the content layout, the page template, and how to build the site. The decisions below keep the pages concise and comparable across vendors.

## Structure

### Landing page

The landing page ([src/content/docs/index.mdx](src/content/docs/index.mdx)) holds only the title, the tagline, the scope checks and tiers, and the guide cards. The scope checks and tiers are explained only there.

### Guide overviews

A guide overview, such as [src/content/docs/llms/index.mdx](src/content/docs/llms/index.mdx), opens with one sentence on what the guide covers. It stands on its own, without links or references to the other guide or the landing page. A Tendencies section follows, then one section per group with a one-line summary and the group's mechanisms.

Tendencies summarize how each vendor leans across the guide: one sentence contrasting the three vendors, then one paragraph per vendor. Derive them only from the Specifics of the guide's own mechanisms, since a vendor can lean differently in each guide. Describe the leanings in general terms, without product names or exact numbers, and keep the vendor paragraphs close in length.

### Mechanism pages

Each mechanism page describes one mechanism — something you use to build with LLMs or agents, such as prompt caching or subagents. Call them mechanisms in all prose, not terms or concepts.

A mechanism page opens with a one-sentence definition and one paragraph on how the mechanism works. Keep the definition short, so readers can scan the mechanism lists and memorize it. Practical advice goes to Considerations and vendor differences to Specifics, each with at most three points, the most important ones.

Each part of the page carries different content: the paragraph builds on the definition instead of restating it, and Considerations and Specifics don't repeat the paragraph. Only the frontmatter description repeats the definition, as the page template in the README shows.

## Writing

### Explain in prose

Describe what a platform does in plain prose, without API identifiers such as field, parameter, or operation names; readers find those in the vendor documentation. Names of products, libraries, and files, such as `tiktoken` or `CLAUDE.md`, are fine.

### Reduce noise

Leave out qualifiers that don't inform the reader, such as hedges on platform support ("where supported", "on some platforms"). Describing an aspect means it is worth knowing; readers check availability in the vendor documentation. When a divergence between platforms matters, point it out in Specifics.

### Build references

Give one link per platform, in the order Anthropic, OpenAI, Google, and skip a platform only when it doesn't document the mechanism. Link to the developer guides rather than API references, migration guides, or changelogs: prefer the page dedicated to the mechanism, and fall back to a broader guide when none exists. Add more links for a platform only for aspects the page describes.

Label each link "Label | Vendor" so readers can scan and compare: the mechanism's title for a dedicated page, a shortened title for a broader page, such as "Messages API", and the aspect for an additional link, such as "Tool search".

### Use the latest APIs and SDKs

Each guide builds on the latest offering of each platform. The LLM guide covers the latest API families: the Anthropic Messages API, the OpenAI Responses API, and the Google Interactions API. The agents guide covers the agent SDKs: the Claude Agent SDK, the OpenAI Agents SDK, and the Google Agent Development Kit. Other developer guides of the vendor, such as Claude Code or managed hosting guides, are fine too, but don't describe or link superseded offerings, such as OpenAI's Chat Completions, even where they offer more.
