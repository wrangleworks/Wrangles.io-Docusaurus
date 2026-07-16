---
title: "List Element"
slug: "/wrangle/select/list-element"
description: "Select a numbered element of a list (zero indexed)."
wrangle_key: "select.list_element"
wrangle_type: "select"
wrangle_subtype: "list_element"
variant: "stock"
status: "active"
---

# List Element

Select a numbered element of a list (zero indexed).

## Metadata

| Field | Value |
| --- | --- |
| ID | ec40495d-d29a-4f62-86dd-eafa43cf388a |
| Wrangle Key | `select.list_element` |
| Type | select |
| Subtype | list_element |
| Variant | stock |
| Status | active |
| Tags | Select, select, list_element |

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
| output | Output | list | No | Name of the output column |  | ["List Element Output"] |
| element | Element | number | Yes | The numbered element of the list to select. |  | "" |
| default | Default | boolean | No | Set the default value to return if the specified element doesn't exist. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "List Element Output"
  ],
  "default": false,
  "element": ""
}
```

## Examples

### Selecting the Second Element in a List

#### Recipe

```yaml
wrangles:
  - select.list_element:
      input: Col1
      output: Second Element
      element: 2			# Zero Indexed
      default: F
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

