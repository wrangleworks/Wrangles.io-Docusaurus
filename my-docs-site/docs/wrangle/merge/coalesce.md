---
title: "Coalesce"
slug: "/wrangle/merge/coalesce"
description: "Take the first non-empty value from a series of columns or lists."
wrangle_key: "merge.coalesce"
wrangle_type: "merge"
wrangle_subtype: "coalesce"
variant: "stock"
status: "active"
---

# Coalesce

Take the first non-empty value from a series of columns or lists.

## Metadata

| Field | Value |
| --- | --- |
| ID | 25c1a60d-fa48-4b9a-8c03-0921d5b31049 |
| Wrangle Key | `merge.coalesce` |
| Type | merge |
| Subtype | coalesce |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, coalesce |

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
| input | Input | list | Yes | List of input columns or a single column containing lists |  | ["Column A", "Column B"] |
| output | Output | text | No | Name of the output columns. This is required if multiple input columns are provided. |  | "Coalesce Output" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "Coalesce Output"
}
```

## Examples

### Coalescing 3 Columns

#### Recipe

```yaml
wrangles:
  - merge.coalesce:
      input:
        - Col1
        - Col2
        - Col3
      output: Output Col
      where: Col2 = E
```

#### Input Sample

| Col1 | Col2 | Col3 |
| --- | --- | --- |
| A | B | C |
| D | E | F |
| G | H | I |

#### Output Sample

| Col1 | Col2 | Col3 | Output Col |
| --- | --- | --- | --- |
| A | B | C |  |
| D | E | F | D |
| G | H | I |  |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

