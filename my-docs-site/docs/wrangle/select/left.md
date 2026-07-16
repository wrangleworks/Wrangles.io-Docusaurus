---
title: "Left"
slug: "/wrangle/select/left"
description: "Return characters from the left of text. Strings shorter than the length defined will be unaffected."
wrangle_key: "select.left"
wrangle_type: "select"
wrangle_subtype: "left"
variant: "stock"
status: "active"
---

# Left

Return characters from the left of text. Strings shorter than the length defined will be unaffected.

## Metadata

| Field | Value |
| --- | --- |
| ID | 5cdd9857-0c77-43bf-80d7-d0a8cb6f980b |
| Wrangle Key | `select.left` |
| Type | select |
| Subtype | left |
| Variant | stock |
| Status | active |
| Tags | Select, select, left |

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
| input | Input | list | Yes | Name of the column(s) to edit |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column(s) |  | ["Left Output"] |
| length | Length | number | Yes | Number of characters to include from the left. If negative, this will remove the specified number of characters from the left. May not equal 0. |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "length": "",
  "output": [
    "Left Output"
  ]
}
```

## Examples

### Selecting Three Leftmost Elements

#### Recipe

```yaml
wrangles:
  - select.left:
      input: Column
      output: Result
      length: 3
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/select.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | /python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

