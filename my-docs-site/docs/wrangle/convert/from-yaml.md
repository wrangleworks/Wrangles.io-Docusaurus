---
title: "From Yaml"
slug: "/wrangle/convert/from-yaml"
description: "Convert a YAML representation into an object"
wrangle_key: "convert.from_yaml"
wrangle_type: "convert"
wrangle_subtype: "from_yaml"
variant: "stock"
status: "active"
---

# From Yaml

Convert a YAML representation into an object

## Metadata

| Field | Value |
| --- | --- |
| ID | b1c20004-5f80-41c2-84d2-2d4601a033b5 |
| Wrangle Key | `convert.from_yaml` |
| Type | convert |
| Subtype | from_yaml |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, from_yaml |

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
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten |  | ["From Yaml Output"] |
| default | Default | boolean | No | Value to return if the row is empty or fails to be parsed as JSON |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "From Yaml Output"
  ],
  "default": false
}
```

## Examples

### Convert YAML To An Object

#### Recipe

```yaml
wrangles:
  - convert.from_yaml:
      input: column 1
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/convert.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

