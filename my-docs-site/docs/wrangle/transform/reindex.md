---
title: "Reindex"
slug: "/wrangle/transform/reindex"
description: "Changes the row labels and column labels of a DataFrame."
wrangle_key: "reindex"
wrangle_type: "transform"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Reindex

Changes the row labels and column labels of a DataFrame.

## Metadata

| Field | Value |
| --- | --- |
| ID | def87df8-72da-4e34-83c1-1fde25126257 |
| Wrangle Key | `reindex` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, reindex |

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
| columns | Columns | list | No | New labels for the columns. Preferably an Index object to avoid duplicating data. |  | ["Column A", "Column B"] |
| axis | Axis | text | No | Axis to target. Can be either the axis name (‘index’, ‘columns’) or number (0, 1). |  | "" |
| index | Index | list | No | New labels for the index. Preferably an Index object to avoid duplicating data. |  | [] |
| labels | Labels | list | No | New labels / index to conform the axis specified by ‘axis’ to. |  | [] |

## Defaults

```json
{
  "axis": "",
  "index": [],
  "labels": [],
  "columns": [
    "Column A",
    "Column B"
  ]
}
```

## Examples

### Reindexing a Dataframe

#### Recipe

```yaml
wrangles:
  - reindex:
  		index: 
      	- 5
        - 4
        - 3
        - 2
        - 1
```

#### Input Sample

|  | Material | Product Data |
| --- | --- | --- |
| 1 | Ceramic | SKF ball brg |
| 2 | Rubber | brg seal |
| 3 | Brass | Ball valve |
| 4 | Ceramic | Ceramic cartridge |
| 5 | Stainless Steel | Needle Bearing |

#### Output Sample

|  | Material | Product Data |
| --- | --- | --- |
| 5 | Stainless Steel | Needle Bearing |
| 4 | Ceramic | Ceramic cartridge |
| 3 | Brass | Ball valve |
| 2 | Rubber | brg seal |
| 1 | Ceramic | SKF ball brg |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

