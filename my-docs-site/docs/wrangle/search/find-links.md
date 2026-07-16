---
title: "Find Links"
slug: "/wrangle/search/find-links"
description: "Perform web searches to find links. Returns structured search results with titles, links, snippets, and optional pricing."
wrangle_key: "search.find_links"
wrangle_type: "search"
wrangle_subtype: "find_links"
variant: "stock"
status: "active"
---

# Find Links

Perform web searches to find links. Returns structured search results with titles, links, snippets, and optional pricing.

## Metadata

| Field | Value |
| --- | --- |
| ID | ec1f661b-2cbc-4a47-88e3-646179104376 |
| Wrangle Key | `search.find_links` |
| Type | search |
| Subtype | find_links |
| Variant | stock |
| Status | active |
| Tags | Search, search, find_links |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | Yes |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| output | Output | list | Yes | Output column for the dictionaries. If a list of 2 is provided, outputs [dicts_column, pretty_strings_column]. |  | ["Find Links Output"] |
| id | Id | text | Yes | Name of the column containing the row ID to append to each search result. |  | "" |
| queries | Queries | list | Yes | Name or list of input columns containing search queries. |  | [] |
| api_key | Api Key | text | No | API key for the search client. Can also be set as an environment variable (e.g., SERPAPI_API_KEY). |  | "" |
| client | Client | select | No | The search provider to use. | serpapi | "serpapi" |
| country | Country | text | No | Country code for search results (default 'us'). Alias: gl. |  | "us" |
| device | Device | select | No | Device type for search results. | desktop, mobile, tablet | "" |
| language | Language | text | No | Language code for search results (default 'en'). Alias: hl. |  | "en" |
| location | Location | text | No | Location for search results (e.g., 'Austin, Texas'). |  | "" |
| n_results | N Results | number | No | Number of search results to return per query (default 10, max 100). |  | 10 |
| threads | Threads | number | No | Number of concurrent threads for parallel processing (default 10). |  | 10 |

## Defaults

```json
{
  "id": "",
  "client": "serpapi",
  "device": "",
  "output": [
    "Find Links Output"
  ],
  "api_key": "",
  "country": "us",
  "queries": [],
  "threads": 10,
  "language": "en",
  "location": "",
  "n_results": 10
}
```

## Examples

_No examples are currently available._

## Source

| Field | Value |
| --- | --- |
| Docs Path |  |
| Docs URL |  |
| Legacy Path |  |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

