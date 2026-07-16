---
title: "Date Calculator"
slug: "/wrangle/date/date-calculator"
description: "Add or Subtract time from a date"
wrangle_key: "date_calculator"
wrangle_type: "date"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Date Calculator

Add or Subtract time from a date

## Metadata

| Field | Value |
| --- | --- |
| ID | 19cfeb4f-02af-4ab2-895c-0ff2bb5cce19 |
| Wrangle Key | `date_calculator` |
| Type | date |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Date, date_calculator |

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
| input | Input | text | Yes | Name of the dates column |  | "Column A" |
| output | Output | text | No | Name of the output column of dates |  | "Date Calculator Output" |
| operation | Operation | select | No | Date operation | add, subtract | "" |
| time_unit | Time Unit | select | No | time unit for operation | years, months, weeks, days, hours, minutes, seconds, milliseconds | "" |
| time_value | Time Value | number | No | time unit value for operation |  | "" |

## Defaults

```json
{
  "input": "Column A",
  "output": "Date Calculator Output",
  "operation": "",
  "time_unit": "",
  "time_value": ""
}
```

## Examples

### Calculating a Future Date

#### Recipe

```yaml
wrangles:
   - date_calculator:
      input: Date
      output: New Date
      operation: subtract  # Optional default is addition
      time_unit: days
      time_value: 1
```

#### Input Sample

| Date |
| --- |
| 2022-12-26 |

#### Output Sample

| New Date |
| --- |
| 2022-12-25 |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

