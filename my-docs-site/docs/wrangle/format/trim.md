---
title: "Trim"
slug: "/wrangle/format/trim"
description: "Remove excess whitespace at the start and end of text."
wrangle_key: "format.trim"
wrangle_type: "format"
wrangle_subtype: "trim"
variant: "stock"
status: "active"
---

# Trim

Remove excess whitespace at the start and end of text.

## Metadata

| Field | Value |
| --- | --- |
| ID | af16b3c1-c230-4868-8ebe-f574904a0c76 |
| Wrangle Key | `format.trim` |
| Type | format |
| Subtype | trim |
| Variant | stock |
| Status | active |
| Tags | Format, format, trim |

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
| input | Input | list | Yes | Name of the input column |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column |  | ["Trim Output"] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Trim Output"
  ]
}
```

## Examples

### Trimming a String

#### Recipe

```yaml
wrangles:
  - format.trim:
      input:
        - col1
      output: col1 trimmed
```

#### Input Sample

_No sample available._

#### Output Sample

| col1 | col1 trimmed |
| --- | --- |
| Hello World | Hello World |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

