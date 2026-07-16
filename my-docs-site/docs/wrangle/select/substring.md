---
title: "Substring"
slug: "/wrangle/select/substring"
description: "Return characters from the middle of text."
wrangle_key: "select.substring"
wrangle_type: "select"
wrangle_subtype: "substring"
variant: "stock"
status: "active"
---

# Substring

Return characters from the middle of text.

## Metadata

| Field | Value |
| --- | --- |
| ID | 8befddf8-602e-4fa9-8f16-4c547210ebec |
| Wrangle Key | `select.substring` |
| Type | select |
| Subtype | substring |
| Variant | stock |
| Status | active |
| Tags | Select, select, substring |

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
| output | Output | list | No | Name of the output column(s) |  | ["Substring Output"] |
| length | Length | number | Yes | The length of the string to select. If ommited |  | "" |
| start | Start | number | Yes | The position of the first character to select. |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "start": "",
  "length": "",
  "output": [
    "Substring Output"
  ]
}
```

## Examples

### Selecting a Substring With Start and Length

#### Recipe

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
      length: 3
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting a Substring With Start Only

#### Recipe

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting a Substring With Length Only

#### Recipe

```yaml
wrangles:
  - select.substring:
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

