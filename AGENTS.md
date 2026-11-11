# Agent instructions

See [README.md](README.md) for the content layout and how to build the site.

## Vision

The site compares how Anthropic, OpenAI, and Google offer each mechanism, concisely enough to scan. It is a comparison, not a reference: readers find identifiers, availability, and other details in the vendor documentation.

Each catalog builds on the latest offering of each vendor: the LLMs catalog on the Anthropic Messages API, the OpenAI Responses API, and the Google Interactions API, and the agents catalog on the Claude Agent SDK, the OpenAI Agents SDK, and the Google Agent Development Kit. Other developer guides of these vendors, such as Claude Code or managed hosting guides, are fine too, but superseded offerings, such as OpenAI's Chat Completions, are neither described nor linked, even where they offer more.

## Content

The home page holds only the title, the tagline, the scope checks and tiers, and the catalog cards; no other page explains the scope checks or tiers.

A catalog overview stands on its own, without links or references to the other catalog or the home page. Its Tendencies derive only from the Specifics of its own mechanisms, since a vendor can lean differently in each catalog. They describe each vendor's leanings in general terms, without product names or exact numbers, in paragraphs close in length.

A mechanism page opens with a definition short enough to scan in the mechanism lists and memorize, which only the frontmatter description repeats. One paragraph on how the mechanism works builds on the definition rather than restating it. Considerations give practical advice, and Specifics give the vendor differences that matter, if any: at most three points each, the most important ones, none repeating the paragraph.

References give one link per vendor, in the order Anthropic, OpenAI, Google, skipping a vendor only when it doesn't document the mechanism, and more links only for aspects the page describes. Links go to developer guides, not API references, migration guides, or changelogs: the page dedicated to the mechanism, or a broader guide when none exists. Each link is labeled "Label | Vendor", with the mechanism's title for a dedicated page, a shortened title for a broader page, such as "Messages API", and the aspect for an additional link, such as "Tool search".

The trends page has one section per version, newest first, headed like "As of November 2026 (0.2.0)". A section lists at most five trends that the version's updates reflect, such as vendors adopting or retiring the same mechanism; changes by a single vendor and editorial changes don't count. A trend starts with its mechanism, linked while the mechanism page exists, and names the change without explaining the mechanism.

## Prose

Describe what platforms do in plain prose, without API identifiers such as field, parameter, or operation names. Names of products, libraries, and files, such as `tiktoken` or `AGENTS.md`, are fine. Refer to mechanisms as mechanisms, not as terms or concepts.

Leave out qualifiers that don't inform the reader, such as hedges on platform support ("where supported", "on some platforms"). Describing an aspect means it is worth knowing; when a divergence between vendors matters, point it out in Specifics.
