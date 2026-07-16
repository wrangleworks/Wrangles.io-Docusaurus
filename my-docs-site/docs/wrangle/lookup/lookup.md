---
title: "Lookup"
slug: "/wrangle/lookup/lookup"
description: "Lookup values from a saved lookup wrangle"
wrangle_key: "lookup"
wrangle_type: "lookup"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Lookup

Lookup values from a saved lookup wrangle

## Metadata

| Field | Value |
| --- | --- |
| ID | b3339193-d1cc-4c89-8ed6-901efa6d81be |
| Wrangle Key | `lookup` |
| Type | lookup |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Lookup, lookup |

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
| input | Input | text | Yes | Name of the column(s) to lookup. |  | "Column A" |
| output | Output | list | No | Name of the output column(s) |  | ["Lookup Output"] |
| model_id | Model Id | text | Yes | The model_id to use lookup against |  | "" |
| lookup_mode | Lookup Mode | select | No | How to perform lookups. 'by_row' (default): lookup each row individually. 'by_dataframe': lookup unique values once, copy results to all rows. 'by_matrix': lookup once per matrix permutation. | by_row, by_matrix, by_dataframe | "" |

## Defaults

```json
{
  "input": "Column A",
  "output": [
    "Lookup Output"
  ],
  "model_id": "",
  "lookup_mode": ""
}
```

## Examples

### State Example

#### Recipe

```yaml
wrangles:
  - lookup:
      input: State
      output:
        - Abbreviation
      model_id: 55555555-5555-5555
```

#### Input Sample

| State |
| --- |
| Texas |
| New York |
| Virginia |

#### Output Sample

| Abbreviation |
| --- |
| TX |
| NY |
| VA |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

