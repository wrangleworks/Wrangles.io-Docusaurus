---
title: "Lists"
slug: "/wrangle/merge/lists"
description: "Take lists in multiple columns and merge them to a single list."
wrangle_key: "merge.lists"
wrangle_type: "merge"
wrangle_subtype: "lists"
variant: "stock"
status: "active"
---

# Lists

Take lists in multiple columns and merge them to a single list.

## Metadata

| Field | Value |
| --- | --- |
| ID | d9978f00-b3d4-4583-884e-a53b98a43e9a |
| Wrangle Key | `merge.lists` |
| Type | merge |
| Subtype | lists |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, lists |

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
| output | Output | text | Yes | Name of the output column |  | "Lists Output" |
| ignore_case | Ignore Case | boolean | No | Ignore case when removing duplicates |  | false |
| include_empty | Include Empty | boolean | No | Whether to include empty values in the created list |  | false |
| remove_duplicates | Remove Duplicates | boolean | No | Whether to remove duplicates from the created list |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "Lists Output",
  "ignore_case": false,
  "include_empty": false,
  "remove_duplicates": false
}
```

## Examples

### Merging Two Lists

#### Recipe

```yaml
wrangles:
  - merge.lists:
      input:
        - col1
        - col2
      output: Combined Col
      remove_duplicates: false
```

#### Input Sample

| Col1 | Col2 |
| --- | --- |
| ['A', 'B'] | ['D', 'E'] |

#### Output Sample

| Combined Col |
| --- |
| ['A', 'B', 'D', 'E'] |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

