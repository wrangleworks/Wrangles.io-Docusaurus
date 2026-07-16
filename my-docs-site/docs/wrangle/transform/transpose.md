---
title: "Transpose"
slug: "/wrangle/transform/transpose"
description: "Transpose the DataFrame (swap columns to rows)"
wrangle_key: "transpose"
wrangle_type: "transform"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Transpose

Transpose the DataFrame (swap columns to rows)

## Metadata

| Field | Value |
| --- | --- |
| ID | 8716347f-f286-49b2-8a0b-cb73292e7475 |
| Wrangle Key | `transpose` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, transpose |

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
| header_column | Header Column | text | No | Name or position of the column that will be used as the column headings for the transposed DataFrame. Default 0 (first column). Use header_column = null to not use any column as header. |  | "" |

## Defaults

```json
{
  "header_column": ""
}
```

## Examples

### Transposing a Dataframe

#### Recipe

```yaml
wrangles:
  - transpose: {}
```

#### Input Sample

| Material | Product Data |
| --- | --- |
| Ceramic | SKF ball brg |
| Rubber | brg seal |

#### Output Sample

|  |
| --- |
| bearing seal |
| Rubber |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Using Try in a Recipe

#### Recipe

```yaml
wrangles:
  - try:
      wrangles:
        - risky_wrangle:
            input: column
      except:
        - backup_wrangle:
            input: column
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

