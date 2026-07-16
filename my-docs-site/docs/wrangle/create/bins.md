---
title: "Bins"
slug: "/wrangle/create/bins"
description: "Create a column that groups data into bins"
wrangle_key: "create.bins"
wrangle_type: "create"
wrangle_subtype: "bins"
variant: "stock"
status: "active"
---

# Bins

Create a column that groups data into bins

## Metadata

| Field | Value |
| --- | --- |
| ID | 232e3ba0-4735-4934-88aa-0163181abb3f |
| Wrangle Key | `create.bins` |
| Type | create |
| Subtype | bins |
| Variant | stock |
| Status | active |
| Tags | Create, create, bins |

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
| input | Input | list | Yes | Name of input column |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of new column |  | ["Bins Output"] |
| bins | Bins | list | Yes | Defines the number of equal-width bins in the range |  | [] |
| labels | Labels | list | No | Labels for the returned bins |  | [] |

## Defaults

```json
{
  "bins": [],
  "input": [
    "Column A",
    "Column B"
  ],
  "labels": [],
  "output": [
    "Bins Output"
  ]
}
```

## Examples

### Creating Bins With an Integer

#### Recipe

```yaml
wrangles:
  - create.bins:
      input: Data
      output: Category
      bins: 3
      labels:
        - Bad
        - Medium
        - Good
```

#### Input Sample

_No sample available._

#### Output Sample

| Data | Category |
| --- | --- |
| 1 | Bad |
| 7 | Good |
| 5 | Medium |
| 4 | Medium |
| 6 | Good |
| 3 | Bad |

_Source: `docs/python/recipes/wrangles/create.md`_

### Creating Bins With a List

#### Recipe

```yaml
wrangles:
  - create.bins:
      input: Grades
      output: Letter Grade
      bins: 
      	- 0
      	- 60
        - 70
        - 80
        - 90
        - 100
      labels:
        - F
        - D
        - C
        - B
        - A
```

#### Input Sample

| Grade | Student |
| --- | --- |
| 64 | Charles |
| 92 | Sabrina |
| 76 | Edward |
| 84 | Wendy |

#### Output Sample

| Grade | Student | Letter Grade |
| --- | --- | --- |
| 64 | Charles | D |
| 92 | Sabrina | A |
| 76 | Edward | C |
| 84 | Wendy | B |

_Source: `docs/python/recipes/wrangles/create.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

