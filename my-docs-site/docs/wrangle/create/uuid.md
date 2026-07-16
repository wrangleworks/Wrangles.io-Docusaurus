---
title: "Uuid"
slug: "/wrangle/create/uuid"
description: "Create column(s) with a UUID."
wrangle_key: "create.uuid"
wrangle_type: "create"
wrangle_subtype: "uuid"
variant: "stock"
status: "active"
---

# Uuid

Create column(s) with a UUID.

## Metadata

| Field | Value |
| --- | --- |
| ID | c376f3ff-2283-4c4c-8d7f-70db6f53ed19 |
| Wrangle Key | `create.uuid` |
| Type | create |
| Subtype | uuid |
| Variant | stock |
| Status | active |
| Tags | Create, create, uuid |

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
| output | Output | list | Yes | Name or list of names of new columns |  | ["Uuid Output"] |

## Defaults

```json
{
  "output": [
    "Uuid Output"
  ]
}
```

## Examples

### Creating a New GUID Column

#### Recipe

```yaml
wrangles:
  - create.guid:
      output: GUID Column
      
  # OR
  
  - create.uuid:
      output: GUID Column
```

#### Input Sample

_No sample available._

#### Output Sample

| GUID Column |
| --- |
| 9a13b4dd-1993-4bd2-8974-3f9a0f006d86 |
| 1528d918-ecd7-457c-b44d-3d30705696d3 |

_Source: `docs/python/recipes/wrangles/create.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

