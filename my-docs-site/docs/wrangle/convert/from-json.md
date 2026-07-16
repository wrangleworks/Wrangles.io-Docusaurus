---
title: "From Json"
slug: "/wrangle/convert/from-json"
description: "Convert a JSON representation into an object"
wrangle_key: "convert.from_json"
wrangle_type: "convert"
wrangle_subtype: "from_json"
variant: "stock"
status: "active"
---

# From Json

Convert a JSON representation into an object

## Metadata

| Field | Value |
| --- | --- |
| ID | e370dfcf-b0fe-4c48-8a52-6f34c47e7978 |
| Wrangle Key | `convert.from_json` |
| Type | convert |
| Subtype | from_json |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, from_json |

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
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten |  | ["From Json Output"] |
| default | Default | boolean | No | Value to return if the row is empty or fails to be parsed as JSON |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "From Json Output"
  ],
  "default": false
}
```

## Examples

### Convert JSON to Object

#### Recipe

```yaml
wrangles:
  - convert.from_json:
      input: column
      output: new column
```

#### Input Sample

| column |
| --- |
| ["a","python","list"] |
| {"python":"dict"} |

#### Output Sample

| new column |
| --- |
| ['a', 'python', 'list'] |
| {'python': 'dict'} |

_Source: `docs/python/recipes/wrangles/convert.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

