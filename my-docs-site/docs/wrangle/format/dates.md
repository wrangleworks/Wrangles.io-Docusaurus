---
title: "Dates"
slug: "/wrangle/format/dates"
description: "Format a date"
wrangle_key: "format.dates"
wrangle_type: "format"
wrangle_subtype: "dates"
variant: "stock"
status: "active"
---

# Dates

Format a date

## Metadata

| Field | Value |
| --- | --- |
| ID | a3c15135-4f7a-4659-83fd-f657afa603c9 |
| Wrangle Key | `format.dates` |
| Type | format |
| Subtype | dates |
| Variant | stock |
| Status | active |
| Tags | Format, format, dates |

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
| output | Output | list | No | Name of the output column |  | ["Dates Output"] |
| format | Format | text | Yes | String pattern to format date |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "format": "",
  "output": [
    "Dates Output"
  ]
}
```

## Examples

### Changing The Format of a Date

#### Recipe

```yaml
wrangles:
  - format.dates:
      input: Date
      output: Output Format
      format: '%Y-%m-%d'  # must be wrapped by quotes " or '
```

#### Input Sample

_No sample available._

#### Output Sample

| Date | Output Format |
| --- | --- |
| 6/23/1912 | 1912-06-23 |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

