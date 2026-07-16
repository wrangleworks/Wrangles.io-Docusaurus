---
title: "Classify"
slug: "/wrangle/ai/classify"
description: "Run classify wrangles on the specified columns."
wrangle_key: "classify"
wrangle_type: "ai"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Classify

Run classify wrangles on the specified columns.

## Metadata

| Field | Value |
| --- | --- |
| ID | 06669ef8-cdd1-42f7-8078-98e0b7a42c30 |
| Wrangle Key | `classify` |
| Type | ai |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | AI, classify |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | Yes |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of the output column. |  | ["Classify Output"] |
| model_id | Model Id | text | Yes | ID of the classification model to be used |  | "" |
| include_confidence | Include Confidence | boolean | No | For models that support it, include the confidence level in the output |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Classify Output"
  ],
  "model_id": "",
  "include_confidence": false
}
```

## Examples

### Food Type Example

#### Recipe

```yaml
wrangles:
  - classify:
      input: Products
      output: Category
      model_id: ${model_id}
      where: Products = Milk
```

#### Input Sample

| Products |
| --- |
| Rice |
| Milk |

#### Output Sample

| Category | Products |
| --- | --- |
|  | Rice |
| Dairy | Milk |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

