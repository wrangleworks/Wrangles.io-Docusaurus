---
title: "Pad"
slug: "/wrangle/format/pad"
description: "Pad a string to a fixed length"
wrangle_key: "format.pad"
wrangle_type: "format"
wrangle_subtype: "pad"
variant: "stock"
status: "active"
---

# Pad

Pad a string to a fixed length

## Metadata

| Field | Value |
| --- | --- |
| ID | 76c19378-38f4-45aa-85d1-3cdf8f8aae29 |
| Wrangle Key | `format.pad` |
| Type | format |
| Subtype | pad |
| Variant | stock |
| Status | active |
| Tags | Format, format, pad |

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
| output | Output | list | No | Name of the output column |  | ["Pad Output"] |
| char | Char | text | Yes | The character to pad the input with |  | "" |
| pad_length | Pad Length | number | Yes | Length for the output |  | "" |
| side | Side | text | Yes | Side from which to fill resulting string |  | "" |
| skip_empty | Skip Empty | boolean | No | If true, skip padding for empty or whitespace-only values |  | false |

## Defaults

```json
{
  "char": "",
  "side": "",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Pad Output"
  ],
  "pad_length": "",
  "skip_empty": false
}
```

## Examples

### Adding Dashes to Part Numbers

#### Recipe

```yaml
wrangles:
  - format.pad:
      input: Part Number
      pad_length: 5
      side: left
      char: "-"
```

#### Input Sample

| Part Number |
| --- |
| 0458 |
| 396 |
| 84 |
| 98516 |

#### Output Sample

| Part Number |
| --- |
| -0458 |
| --396 |
| ---84 |
| 98516 |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

