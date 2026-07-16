---
title: "List"
slug: "/wrangle/split/list"
description: "Split a list in a single column to multiple columns."
wrangle_key: "split.list"
wrangle_type: "split"
wrangle_subtype: "list"
variant: "stock"
status: "active"
---

# List

Split a list in a single column to multiple columns.

## Metadata

| Field | Value |
| --- | --- |
| ID | 3260b9f7-aae2-499f-8004-d211c2cf643e |
| Wrangle Key | `split.list` |
| Type | split |
| Subtype | list |
| Variant | stock |
| Status | active |
| Tags | Split, split, list |

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
| input | Input | text | Yes | Name of the column to be split |  | "Column A" |
| output | Output | list | Yes | Name of column(s) for the results. If providing a single column, use a wildcard (*) to indicate a incrementing integer |  | ["List Output"] |

## Defaults

```json
{
  "input": "Column A",
  "output": [
    "List Output"
  ]
}
```

## Examples

### Using a Wildcard

#### Recipe

```yaml
wrangles:
  - split.list:
      input: Column
      output: Column*
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Named Columns

#### Recipe

```yaml
wrangles:
  - split.list:
      input: Column
      output:
      	- Heading A
        - Heading B
        - Heading C
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/split.md |
| Docs URL | /python/recipes/wrangles/split |
| Legacy Path | docs/python/recipes/wrangles/split.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

