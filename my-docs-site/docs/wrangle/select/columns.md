---
title: "Columns"
slug: "/wrangle/select/columns"
description: "Select columns from the dataframe"
wrangle_key: "select.columns"
wrangle_type: "select"
wrangle_subtype: "columns"
variant: "stock"
status: "active"
---

# Columns

Select columns from the dataframe

## Metadata

| Field | Value |
| --- | --- |
| ID | bca12c60-3957-4dc5-83f7-5ee460df2a11 |
| Wrangle Key | `select.columns` |
| Type | select |
| Subtype | columns |
| Variant | stock |
| Status | active |
| Tags | Select, select, columns |

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
| input | Input | list | Yes | Name of the column(s) to select |  | ["Column A", "Column B"] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ]
}
```

## Examples

### Selecting Columns

#### Recipe

```yaml
wrangles:
  - select.columns:
      input: Manufacturer
```

#### Input Sample

| Part Number | Manufacturer |
| --- | --- |
| 1234 | SKF |
| 5678 | Timken |

#### Output Sample

| Manufacturer |
| --- |
| SKF |
| Timken |

_Source: `docs/python/recipes/wrangles/select.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | /python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

