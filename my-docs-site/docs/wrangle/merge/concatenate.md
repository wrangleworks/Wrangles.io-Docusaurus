---
title: "Concatenate"
slug: "/wrangle/merge/concatenate"
description: "Concatenate a list of columns or a list within a single column."
wrangle_key: "merge.concatenate"
wrangle_type: "merge"
wrangle_subtype: "concatenate"
variant: "stock"
status: "active"
---

# Concatenate

Concatenate a list of columns or a list within a single column.

## Metadata

| Field | Value |
| --- | --- |
| ID | 6ff76728-e1f6-4d3d-8946-6aa3b7524b3f |
| Wrangle Key | `merge.concatenate` |
| Type | merge |
| Subtype | concatenate |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, concatenate |

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
| input | Input | list | Yes | Either a single column name or list of columns |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column |  | "Concatenate Output" |
| char | Char | text | Yes | (Optional) Character to add between successive values |  | "" |
| skip_empty | Skip Empty | boolean | No |  |  | false |

## Defaults

```json
{
  "char": "",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "Concatenate Output",
  "skip_empty": false
}
```

## Examples

### Concatenating 3 Columns

#### Recipe

```yaml
# Using concatenate to combine multiple columns
wrangles:
  - merge.concatenate:
      input:
        - Col1
        - Col2
        - Col3
      output: Join Col
      char: ', '
```

#### Input Sample

| Col1 | Col2 | Col3 |
| --- | --- | --- |
| A | B | C |

#### Output Sample

| Join Col |
| --- |
| A, B, C |

_Source: `docs/python/recipes/wrangles/merge.md`_

### Concatenating a Single Column

#### Recipe

```yaml
# Using concatenate to join a column that is a list
wrangles:
  - merge.concatenate:
      input: Col1
      output: Join List
      char: ' '
```

#### Input Sample

| Col1 |
| --- |
| ['A', 'B', 'C'] |

#### Output Sample

| Join List |
| --- |
| A B C |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

