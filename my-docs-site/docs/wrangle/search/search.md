---
title: "Search Wrangles"
slug: /wrangle/search
description: "Search wrangles find links and retrieve targeted content from external web pages."
wrangle_type: "search"
wrangle_count: 2
---

# Search Wrangles

Search wrangles find links and retrieve targeted content from external web pages.

## Metadata

| Field | Value |
| --- | --- |
| Type | search |
| Wrangle Count | 2 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Find Links

Perform web searches to find links. Returns structured search results with titles, links, snippets, and optional pricing.

- Wrangle key: `search.find_links`
- Parameters: `11`
- Examples: `0`
- Page: [Find Links](./find-links)

## Retrieve Link Content

Retrieves targeted content from web pages using LLM URL extraction. Can optionally output a second column containing a clean, human-readable text summary of the retrieved data.

- Wrangle key: `search.retrieve_link_content`
- Parameters: `8`
- Examples: `0`
- Page: [Retrieve Link Content](./retrieve-link-content)
