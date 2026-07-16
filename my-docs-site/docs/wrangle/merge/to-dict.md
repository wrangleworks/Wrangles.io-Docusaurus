---
title: "To Dict"
slug: "/wrangle/merge/to-dict"
description: "Take multiple columns and merge them to a dictionary (aka object) using the column headers as keys."
wrangle_key: "merge.to_dict"
wrangle_type: "merge"
wrangle_subtype: "to_dict"
variant: "stock"
status: "active"
---

# To Dict

Take multiple columns and merge them to a dictionary (aka object) using the column headers as keys.

## Metadata

| Field | Value |
| --- | --- |
| ID | 9b869210-0d89-403b-8409-7cecdb5f9c7c |
| Wrangle Key | `merge.to_dict` |
| Type | merge |
| Subtype | to_dict |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, to_dict |

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
| output | Output | text | Yes | Name of the output column |  | "To Dict Output" |
| include_empty | Include Empty | boolean | No | Whether to include empty columns in the created dictionary |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "To Dict Output",
  "include_empty": false
}
```

## Examples

### Merging Two Columns Into a Dictionary

#### Recipe

```yaml
wrangles:
  - merge.to_dict:
      input:
        - Col1
        - Col2
      output: Dict Col
```

#### Input Sample

| Col1 | Col2 |
| --- | --- |
| A | B |

#### Output Sample

| Dict Col |
| --- |
| {'Col1': 'A', 'Col2': 'B'} |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

