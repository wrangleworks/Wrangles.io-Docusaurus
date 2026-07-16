---
title: "Copy"
slug: "/wrangle/transform/copy"
description: "Make a copy of a column or a list of columns"
wrangle_key: "copy"
wrangle_type: "transform"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Copy

Make a copy of a column or a list of columns

## Metadata

| Field | Value |
| --- | --- |
| ID | b002fbdc-92c0-4347-889d-0f4bfeec99fa |
| Wrangle Key | `copy` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, copy |

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
| input | Input | list | Yes | Name of the input columns or columns |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of the output columns or columns |  | ["Copy Output"] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Copy Output"
  ]
}
```

## Examples

### Copying a Column With Input and Output

#### Recipe

```yaml
wrangles:
  - copy:
  		input: Product Data
      output: Product Data (copy)
```

#### Input Sample

| Product Data |
| --- |
| SKF ball brg |
| brg seal |

#### Output Sample

| Product Data | Product Data (copy) |
| --- | --- |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Copying a Column Express as a Dictionary

#### Recipe

```yaml
wrangles:
  - copy:
  		Product Data: Product Data (copy)
```

#### Input Sample

| Product Data |
| --- |
| SKF ball brg |
| brg seal |

#### Output Sample

| Product Data | Product Data (copy) |
| --- | --- |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

