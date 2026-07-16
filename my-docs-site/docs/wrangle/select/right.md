---
title: "Right"
slug: "/wrangle/select/right"
description: "Return characters from the right of text. Strings shorter than the length defined will be unaffected."
wrangle_key: "select.right"
wrangle_type: "select"
wrangle_subtype: "right"
variant: "stock"
status: "active"
---

# Right

Return characters from the right of text. Strings shorter than the length defined will be unaffected.

## Metadata

| Field | Value |
| --- | --- |
| ID | 89ee82ec-3bc5-4bfa-899b-7a1260ef9bdb |
| Wrangle Key | `select.right` |
| Type | select |
| Subtype | right |
| Variant | stock |
| Status | active |
| Tags | Select, select, right |

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
| output | Output | list | No | Name of the output column(s) |  | ["Right Output"] |
| length | Length | number | Yes | Number of characters to include from the right. If negative, this will remove the specified number of characters from the right. May not equal 0. |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "length": "",
  "output": [
    "Right Output"
  ]
}
```

## Examples

### Selecting the Three Rightmost Elements

#### Recipe

```yaml
wrangles:
  - select.right:
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

