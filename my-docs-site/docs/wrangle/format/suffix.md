---
title: "Suffix"
slug: "/wrangle/format/suffix"
description: "Add a suffix to a column"
wrangle_key: "format.suffix"
wrangle_type: "format"
wrangle_subtype: "suffix"
variant: "stock"
status: "active"
---

# Suffix

Add a suffix to a column

## Metadata

| Field | Value |
| --- | --- |
| ID | 8d127060-ba2d-4934-897f-07662e01e40b |
| Wrangle Key | `format.suffix` |
| Type | format |
| Subtype | suffix |
| Variant | stock |
| Status | active |
| Tags | Format, format, suffix |

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
| output | Output | list | No | (Optional) Name of the output column |  | ["Suffix Output"] |
| value | Value | text | Yes | Suffix value to add |  | "" |
| skip_empty | Skip Empty | boolean | No | Whether to skip empty values |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "value": "",
  "output": [
    "Suffix Output"
  ],
  "skip_empty": false
}
```

## Examples

### Adding a Suffix to a String

#### Recipe

```yaml
wrangles:
  - format.suffix:
      input: Data
      output: Suffix
      value: ic
```

#### Input Sample

_No sample available._

#### Output Sample

| Data | Suffix |
| --- | --- |
| sto | stoic |
| hero | heroic |
| icon | iconic |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

