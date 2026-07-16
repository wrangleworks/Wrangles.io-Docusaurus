---
title: "Head"
slug: "/wrangle/select/head"
description: "Return the first n rows"
wrangle_key: "select.head"
wrangle_type: "select"
wrangle_subtype: "head"
variant: "stock"
status: "active"
---

# Head

Return the first n rows

## Metadata

| Field | Value |
| --- | --- |
| ID | 237af1ec-db7d-415a-88b7-70586a2191fb |
| Wrangle Key | `select.head` |
| Type | select |
| Subtype | head |
| Variant | stock |
| Status | active |
| Tags | Select, select, head |

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
| n | N | number | Yes | Number of rows to return |  | "" |

## Defaults

```json
{
  "n": ""
}
```

## Examples

### Selecting The First n Rows

#### Recipe

```yaml
wrangles:
  - select.head:
      n: 2
```

#### Input Sample

| Product | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Bearing Race | Timken |
| Needle Bearing | Acme Bearings |
| Roller Bearing | General Bearing Co. |

#### Output Sample

| Product | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Bearing Race | Timken |

_Source: `docs/python/recipes/wrangles/select.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | /python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

