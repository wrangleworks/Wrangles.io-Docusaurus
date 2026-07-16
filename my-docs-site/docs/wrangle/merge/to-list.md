---
title: "To List"
slug: "/wrangle/merge/to-list"
description: "Take multiple columns and merge them to a list."
wrangle_key: "merge.to_list"
wrangle_type: "merge"
wrangle_subtype: "to_list"
variant: "stock"
status: "active"
---

# To List

Take multiple columns and merge them to a list.

## Metadata

| Field | Value |
| --- | --- |
| ID | d5300fe7-c8a4-4a41-8f12-f2c1698678cc |
| Wrangle Key | `merge.to_list` |
| Type | merge |
| Subtype | to_list |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, to_list |

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
| input | Input | list | Yes | List of input columns |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column |  | "To List Output" |
| include_empty | Include Empty | boolean | No | Whether to include empty columns in the created list |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "To List Output",
  "include_empty": false
}
```

## Examples

### Merging Multiple Columns to a Single List

#### Recipe

```yaml
wrangles:
  merge.to_list:
    input:
      - Col1
      - Col2
      - Col3
    output: List Col
```

#### Input Sample

| Col1 | Col2 | Col3 |
| --- | --- | --- |
| A | B | C |

#### Output Sample

| List Col |
| --- |
| ['A', 'B', 'C'] |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

