---
title: "Element"
slug: "/wrangle/select/element"
description: "Select elements of lists or dicts using python syntax like col[0]['key']"
wrangle_key: "select.element"
wrangle_type: "select"
wrangle_subtype: "element"
variant: "stock"
status: "active"
---

# Element

Select elements of lists or dicts using python syntax like col[0]['key']

## Metadata

| Field | Value |
| --- | --- |
| ID | 223d2f4e-3247-4189-8b6c-e73fe44c4266 |
| Wrangle Key | `select.element` |
| Type | select |
| Subtype | element |
| Variant | stock |
| Status | active |
| Tags | Select, select, element |

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
| input | Input | list | Yes | Name of the input column and sub elements This permits by index for lists or dict and by key for dicts e.g. col[0]['key'] // [{"key":"val"}] -> "val" |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column(s) |  | ["Element Output"] |
| default | Default | boolean | No | Set the default value to return if the specified element doesn't exist. |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Element Output"
  ],
  "default": ""
}
```

## Examples

### Selecting The First Element

#### Recipe

```yaml
wrangles:
  - select.element:
      input: Column 1[0]
      output: First Element
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

