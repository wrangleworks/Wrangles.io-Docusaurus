---
title: "Lists"
slug: "/wrangle/compare/lists"
description: "Compare multiple lists and return the intersection, difference, or union"
wrangle_key: "compare.lists"
wrangle_type: "compare"
wrangle_subtype: "lists"
variant: "stock"
status: "active"
---

# Lists

Compare multiple lists and return the intersection, difference, or union

## Metadata

| Field | Value |
| --- | --- |
| ID | a393225e-7ccf-4708-83f8-d5abd6ba9b1e |
| Wrangle Key | `compare.lists` |
| Type | compare |
| Subtype | lists |
| Variant | stock |
| Status | active |
| Tags | Compare, compare, lists |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | List of input columns containing lists to compare |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column |  | "Lists Output" |
| method | Method | select | Yes | Type of comparison to perform | intersection, difference, union | "intersection" |
| ignore_case | Ignore Case | boolean | No | Ignore case when comparing string items |  | false |
| remove_duplicates | Remove Duplicates | boolean | No | Remove duplicates from the result |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "method": "intersection",
  "output": "Lists Output",
  "ignore_case": false,
  "remove_duplicates": false
}
```

## Examples

_No examples are currently available._

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/compare.md |
| Docs URL | /python/recipes/wrangles/compare |
| Legacy Path | docs/python/recipes/wrangles/compare.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

