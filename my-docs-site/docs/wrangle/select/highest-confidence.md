---
title: "Highest Confidence"
slug: "/wrangle/select/highest-confidence"
description: "Select the option with the highest confidence from multiple columns. Inputs are expected to be of the form [<<value>>, <<confidence_score>>]."
wrangle_key: "select.highest_confidence"
wrangle_type: "select"
wrangle_subtype: "highest_confidence"
variant: "stock"
status: "active"
---

# Highest Confidence

Select the option with the highest confidence from multiple columns. Inputs are expected to be of the form [<<value>>, <<confidence_score>>].

## Metadata

| Field | Value |
| --- | --- |
| ID | 00aad85d-8cc8-42e5-86f3-e4ff916e8ac2 |
| Wrangle Key | `select.highest_confidence` |
| Type | select |
| Subtype | highest_confidence |
| Variant | stock |
| Status | active |
| Tags | Select, select, highest_confidence |

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
| output | Output | list | Yes | If two columns; the result and confidence. If one column; [result, confidence] |  | ["Highest Confidence Output"] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Highest Confidence Output"
  ]
}
```

## Examples

### Selecting Highest Confidence Single Output

#### Recipe

```yaml
wrangles:
  - select.highest_confidence:
      input:
        - Col1
        - Col2
        - Col3
      output: Highest Confidence
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting Highest Confidence Two Outputs

#### Recipe

```yaml
wrangles:
  - select.highest_confidence:
      input:
        - Col1
        - Col2
        - Col3
      output:
      	- Item
      	- Confidence
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

