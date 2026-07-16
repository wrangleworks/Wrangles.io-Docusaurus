---
title: "Column"
slug: "/wrangle/create/column"
description: "Create column(s) with a user defined value. Defaults to None (empty)."
wrangle_key: "create.column"
wrangle_type: "create"
wrangle_subtype: "column"
variant: "stock"
status: "active"
---

# Column

Create column(s) with a user defined value. Defaults to None (empty).

## Metadata

| Field | Value |
| --- | --- |
| ID | 5a18e2c8-ec7c-45f5-88fd-bb5c358a8b40 |
| Wrangle Key | `create.column` |
| Type | create |
| Subtype | column |
| Variant | stock |
| Status | active |
| Tags | Create, create, column |

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
| output | Output | list | Yes | Name or list of names of new columns or column_name: value pairs. |  | ["Column Output"] |
| value | Value | boolean | No | (Optional) Value(s) to add in the new column(s). If using a dictionary in output, value can only be a string. |  | false |

## Defaults

```json
{
  "value": false,
  "output": [
    "Column Output"
  ]
}
```

## Examples

### Creating a New Column

#### Recipe

```yaml
wrangles:
  - create.column:
      output: New Column
      value: new value			# Optional, otherwise empty
      where: column > 1
```

#### Input Sample

| column |
| --- |
| 1 |
| 2 |
| 3 |

#### Output Sample

| column | New Column |
| --- | --- |
| 1 |  |
| 2 | new value |
| 3 | new value |

_Source: `docs/python/recipes/wrangles/create.md`_

### Creating Multiple Columns

#### Recipe

```yaml
wrangles:
  - create.column:
      output: 
      	- New Column 1: new value 1 # Optional, otherwise empty
        - New Column 2: new value 2
        - New Column 3: new value 1
```

#### Input Sample

| column |
| --- |
| 1 |
| 2 |
| 3 |

#### Output Sample

| column | New Column 1 | New Column 2 | New Column 3 |
| --- | --- | --- | --- |
| 1 | new value 1 | new value 2 | new value 1 |
| 2 | new value 1 | new value 2 | new value 1 |
| 3 | new value 1 | new value 2 | new value 1 |

_Source: `docs/python/recipes/wrangles/create.md`_

### Creating Columns That Consist of Lists

#### Recipe

```yaml
wrangles:
  - create.column:
      output: 
      	- New Column: 
        		- 4
            - 5
        		- 6
```

#### Input Sample

| column |
| --- |
| 1 |
| 2 |
| 3 |

#### Output Sample

| column | New Column |
| --- | --- |
| 1 | [4, 5, 6] |
| 2 | [4, 5, 6] |
| 3 | [4, 5, 6] |

_Source: `docs/python/recipes/wrangles/create.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

