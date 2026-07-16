---
title: "Round"
slug: "/wrangle/format/round"
description: "Round column(s) to the specified decimals"
wrangle_key: "round"
wrangle_type: "format"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Round

Round column(s) to the specified decimals

## Metadata

| Field | Value |
| --- | --- |
| ID | 12f3111b-8511-4e42-8d3f-b5302dc3b4e4 |
| Wrangle Key | `round` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, round |

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
| input | Input | list | Yes | Name of the input column(s) |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column(s) |  | ["Round Output"] |
| decimals | Decimals | number | No | Number of decimal places to round column |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Round Output"
  ],
  "decimals": ""
}
```

## Examples

### Rounding a Column

#### Recipe

```yaml
wrangles:
  - round:
  		input: Cost Per Unit
      output: Cost Rounded
      decimals: 2
```

#### Input Sample

| Cost Per Unit |
| --- |
| 3.14159 |
| 2.71828 |

#### Output Sample

| Cost Rounded | Cost Per Unit |
| --- | --- |
| 3.14 | 3.14159 |
| 2.72 | 2.71828 |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

