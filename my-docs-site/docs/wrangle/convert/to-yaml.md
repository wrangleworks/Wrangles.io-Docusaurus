---
title: "To Yaml"
slug: "/wrangle/convert/to-yaml"
description: "Convert an object to a YAML representation."
wrangle_key: "convert.to_yaml"
wrangle_type: "convert"
wrangle_subtype: "to_yaml"
variant: "stock"
status: "active"
---

# To Yaml

Convert an object to a YAML representation.

## Metadata

| Field | Value |
| --- | --- |
| ID | 4cd6252f-ce47-4a9d-8272-3d87e875b72a |
| Wrangle Key | `convert.to_yaml` |
| Type | convert |
| Subtype | to_yaml |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, to_yaml |

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
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten |  | ["To Yaml Output"] |
| indent | Indent | number | No | Specify the number of spaces for indentation to  specify nested elements |  | "" |
| sort_keys | Sort Keys | boolean | No | If sort_keys is true (default: False), then the output of dictionaries will be sorted by key. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "indent": "",
  "output": [
    "To Yaml Output"
  ],
  "sort_keys": false
}
```

## Examples

### Convert a Dictionary to YAML

#### Recipe

```yaml
wrangles:
  - convert.to_yaml:
      input: column 1
      indent: 2
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

