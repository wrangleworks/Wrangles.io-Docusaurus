---
title: "Drop"
slug: "/wrangle/select/drop"
description: "Drop (Delete) selected column(s)"
wrangle_key: "drop"
wrangle_type: "select"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Drop

Drop (Delete) selected column(s)

## Metadata

| Field | Value |
| --- | --- |
| ID | 363bffbf-397e-4975-8382-e9efa5e9eed6 |
| Wrangle Key | `drop` |
| Type | select |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Select, drop |

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
| columns | Columns | list | Yes | Name of the column(s) to drop |  | ["Column A", "Column B"] |

## Defaults

```json
{
  "columns": [
    "Column A",
    "Column B"
  ]
}
```

## Examples

### Dropping a Column

#### Recipe

```yaml
wrangles:
  - drop:
  		columns:
      	- Material
```

#### Input Sample

| Material | Product Data |
| --- | --- |
| Ceramic | SKF ball brg |
| Rubber | brg seal |

#### Output Sample

| Product Data |
| --- |
| SKF ball bearing |
| bearing seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

