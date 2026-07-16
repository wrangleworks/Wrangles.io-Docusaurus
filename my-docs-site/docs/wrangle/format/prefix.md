---
title: "Prefix"
slug: "/wrangle/format/prefix"
description: "Add a prefix to a column"
wrangle_key: "format.prefix"
wrangle_type: "format"
wrangle_subtype: "prefix"
variant: "stock"
status: "active"
---

# Prefix

Add a prefix to a column

## Metadata

| Field | Value |
| --- | --- |
| ID | c12f99b9-2363-4da7-8405-7c73b87906e5 |
| Wrangle Key | `format.prefix` |
| Type | format |
| Subtype | prefix |
| Variant | stock |
| Status | active |
| Tags | Format, format, prefix |

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
| output | Output | list | No | (Optional) Name of the output column |  | ["Prefix Output"] |
| value | Value | text | Yes | Prefix value to add |  | "" |
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
    "Prefix Output"
  ],
  "skip_empty": false
}
```

## Examples

### Adding a Prefix to a String

#### Recipe

```yaml
wrangles:
  - format.prefix:
      input: Data
      output: Prefix
      value: anti
```

#### Input Sample

_No sample available._

#### Output Sample

| Data | Prefix |
| --- | --- |
| freeze | antifreeze |
| dote | antidote |
| hero | antihero |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

