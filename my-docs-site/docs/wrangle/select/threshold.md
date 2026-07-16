---
title: "Threshold"
slug: "/wrangle/select/threshold"
description: "Select the first option if it exceeds a given threshold, else the second option."
wrangle_key: "select.threshold"
wrangle_type: "select"
wrangle_subtype: "threshold"
variant: "stock"
status: "active"
---

# Threshold

Select the first option if it exceeds a given threshold, else the second option.

## Metadata

| Field | Value |
| --- | --- |
| ID | af2a5dcc-0ec0-48d7-8fb4-f58d9c5391d2 |
| Wrangle Key | `select.threshold` |
| Type | select |
| Subtype | threshold |
| Variant | stock |
| Status | active |
| Tags | Select, select, threshold |

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
| input | Input | list | Yes | List of the input columns to select from |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column |  | "Threshold Output" |
| threshold | Threshold | number | Yes | Threshold above which to choose the first option, otherwise the second |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "Threshold Output",
  "threshold": ""
}
```

## Examples

### Selecting Results Above a Threshold

#### Recipe

```yaml
wrangles:
  - select.threshold:
      input:
        - Col1
        - Col2
      output: Result
      threshold: .77
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

