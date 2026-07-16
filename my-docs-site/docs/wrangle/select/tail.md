---
title: "Tail"
slug: "/wrangle/select/tail"
description: "Return the last n rows"
wrangle_key: "select.tail"
wrangle_type: "select"
wrangle_subtype: "tail"
variant: "stock"
status: "active"
---

# Tail

Return the last n rows

## Metadata

| Field | Value |
| --- | --- |
| ID | 60853759-c160-49a4-87eb-036516a9d823 |
| Wrangle Key | `select.tail` |
| Type | select |
| Subtype | tail |
| Variant | stock |
| Status | active |
| Tags | Select, select, tail |

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

### Selecting The Last n Rows

#### Recipe

```yaml
wrangles:
  - select.tail:
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
| Needle Bearing | Acme Bearings |
| Roller Bearing | General Bearing Co. |

_Source: `docs/python/recipes/wrangles/select.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | /python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

