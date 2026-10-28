# Agent instructions

See [README.md](README.md) for the content layout, the page template, and how to build the site.

## Decisions

### The glossary describes mechanisms

Each page describes one mechanism — something you use to build with LLMs or agents, such as prompt caching or subagents. Call them "mechanisms" in all prose: the tagline, the landing page, guide overviews, mechanism pages, and the README. Don't call them "terms" or "concepts".

Code identifiers such as `TermList` predate this decision and keep their names.

### The landing page stays concise

The landing page ([src/content/docs/index.mdx](src/content/docs/index.mdx)) has only the title, the tagline, a short explanation of the scope checks and tiers, and the guide cards. It has no section headings and no vendor table — the tagline already names the vendors.

The scope checks and tiers are written only there. Guide overviews link to the landing page instead of repeating them.
