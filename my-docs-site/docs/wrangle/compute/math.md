---
title: "Math"
slug: "/wrangle/compute/math"
description: "Apply a mathematical calculation."
wrangle_key: "math"
wrangle_type: "compute"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Math

Apply a mathematical calculation.

## Metadata

| Field | Value |
| --- | --- |
| ID | 494b11ad-00c1-4748-8b93-6bec982f4fec |
| Wrangle Key | `math` |
| Type | compute |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Compute, math |

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
| input | Input | text | Yes | The mathematical expression using column names. e.g. column1 * column2 |  | "Column A" |
| output | Output | text | Yes | The column to output the results to |  | "Math Output" |

## Defaults

```json
{
  "input": "Column A",
  "output": "Math Output"
}
```

## Examples

### Square Root Example

#### Recipe

```yaml
wrangles:
  - math:
  	  input: sqrt(Values)
      output: Square Root
```

#### Input Sample

| Values |
| --- |
| 4 |
| 9 |
| 16 |

#### Output Sample

| Values | Square Root |
| --- | --- |
| 4 | 2 |
| 9 | 3 |
| 16 | 4 |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

