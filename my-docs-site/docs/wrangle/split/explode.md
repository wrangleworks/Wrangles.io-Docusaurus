---
title: "Explode"
slug: "/wrangle/split/explode"
description: "Explode a column of lists into rows"
wrangle_key: "explode"
wrangle_type: "split"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Explode

Explode a column of lists into rows

## Metadata

| Field | Value |
| --- | --- |
| ID | 4e4b13ac-8d50-4b2c-85c8-2c31de1e817d |
| Wrangle Key | `explode` |
| Type | split |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Split, explode |

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
| input | Input | list | Yes | Name of the column(s) to explode. If multiple columns are included they must contain lists of the same length |  | ["Column A", "Column B"] |
| drop_empty | Drop Empty | boolean | No | If true, any rows that contain an empty list will be dropped. |  | false |
| reset_index | Reset Index | boolean | No | Reset the index after exploding. Default True. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "drop_empty": false,
  "reset_index": false
}
```

## Examples

### Exploding a Column

#### Recipe

```yaml
wrangles:
  - explode:
      input: Products
```

#### Input Sample

| Products | Manufacturer |
| --- | --- |
| [Ball Bearing, Bearing Seal] | SKF |
| [Angle Grinder, Drill, Impact Driver] | Milwaukee |
| Solid State Relay | Schneider |

#### Output Sample

| Products | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Bearing Seal | SKF |
| Angle Grinder | Milwaukee |
| Drill | Milwaukee |
| Impact Driver | Milwaukee |
| Solid State Relay | Schneider |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

