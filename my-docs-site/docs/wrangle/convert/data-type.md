---
title: "Data Type"
slug: "/wrangle/convert/data-type"
description: "Change the data type of the input."
wrangle_key: "convert.data_type"
wrangle_type: "convert"
wrangle_subtype: "data_type"
variant: "stock"
status: "active"
---

# Data Type

Change the data type of the input.

## Metadata

| Field | Value |
| --- | --- |
| ID | 52384f01-7164-404f-8615-063e7677a588 |
| Wrangle Key | `convert.data_type` |
| Type | convert |
| Subtype | data_type |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, data_type |

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
| input | Input | list | Yes | Name or list of input columns |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns |  | ["Data Type Output"] |
| data_type | Data Type | select | Yes | The new data type | str, float, int, bool, datetime | "str" |
| default | Default | boolean | No | Set the default value to return if the input data |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Data Type Output"
  ],
  "default": false,
  "data_type": "str"
}
```

## Examples

### Change a Float to an Integer

#### Recipe

```yaml
wrangles:
      - convert.data_type:
          input: column
          output: new column
          data_type: int
```

#### Input Sample

| column |
| --- |
| 3.14159 |

#### Output Sample

| column | new column |
| --- | --- |
| 3.14159 | 3 |

_Source: `docs/python/recipes/wrangles/convert.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

