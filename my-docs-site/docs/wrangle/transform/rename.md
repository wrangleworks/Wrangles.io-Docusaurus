---
title: "Rename"
slug: "/wrangle/transform/rename"
description: "Rename a column or list of columns."
wrangle_key: "rename"
wrangle_type: "transform"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Rename

Rename a column or list of columns.

## Metadata

| Field | Value |
| --- | --- |
| ID | ab06898f-faf7-42e7-8275-5e3034a4d727 |
| Wrangle Key | `rename` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, rename |

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
| input | Input | list | No | Name or list of input columns. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns. |  | ["Rename Output"] |
| wrangles | Wrangles | list | No | Use wrangles to transform the column names. |  | [] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Rename Output"
  ],
  "wrangles": []
}
```

## Examples

### Renaming Columns With Input and Output

#### Recipe

```yaml
wrangles:
  - rename:
      input:
      	- Manufacturer Name
      	- Manufacturer Part Number
      output:
      	- Manufacturer
       	- MPN
```

#### Input Sample

| Manufacturer Name | Manufacturer Part Number |
| --- | --- |
| SKF | 302-2 |
| Timken | PF48 |

#### Output Sample

| MPN | Manufacturer |
| --- | --- |
| 302-2 | SKF |
| PF48 | Timken |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Renaming Columns Without Using Input and Output

#### Recipe

```yaml
wrangles:
  - rename:
      Manufacturer Name: Manufacturer
      Manufacturer Part Number: MPN
```

#### Input Sample

| Manufacturer Name | Manufacturer Part Number |
| --- | --- |
| SKF | 302-2 |
| Timken | PF48 |

#### Output Sample

| MPN | Manufacturer |
| --- | --- |
| 302-2 | SKF |
| PF48 | Timken |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Using Wrangles in Rename

#### Recipe

```yaml
- rename:
      wrangles:
        - convert.case:
            input: columns
            case: upper
```

#### Input Sample

| Manufacturer Name | Manufacturer Part Number |
| --- | --- |
| SKF | 302-2 |
| Timken | PF48 |

#### Output Sample

| MANUFACTURER NAME | MANUFACTURER PART NUMBER |
| --- | --- |
| SKF | 302-2 |
| Timken | PF48 |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

