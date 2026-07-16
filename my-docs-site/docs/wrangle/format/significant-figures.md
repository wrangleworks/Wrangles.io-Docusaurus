---
title: "Significant Figures"
slug: "/wrangle/format/significant-figures"
description: "Format a value to a specific number of significant figures"
wrangle_key: "format.significant_figures"
wrangle_type: "format"
wrangle_subtype: "significant_figures"
variant: "stock"
status: "active"
---

# Significant Figures

Format a value to a specific number of significant figures

## Metadata

| Field | Value |
| --- | --- |
| ID | a359f72a-5250-4dd8-84f6-8a8173bee0f6 |
| Wrangle Key | `format.significant_figures` |
| Type | format |
| Subtype | significant_figures |
| Variant | stock |
| Status | active |
| Tags | Format, format, significant_figures |

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
| input | Input | list | Yes | Name of the input column |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column |  | ["Significant Figures Output"] |
| significant_figures | Significant Figures | number | No | Number of significant figures to format to. Default is 3. |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Significant Figures Output"
  ],
  "significant_figures": ""
}
```

## Examples

### Rounding to Significant Figures

#### Recipe

```yaml
wrangles:
  - format.significant_figures:
      input: Data
      significant_figures: 2
      output: Data to 2 Figures
```

#### Input Sample

_No sample available._

#### Output Sample

| Data | Data to 2 Figures |
| --- | --- |
| 1.25 | 1.2 |
| 12.3 | 12 |
| 55.6 | 55 |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

