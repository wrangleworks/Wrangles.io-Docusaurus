---
title: "Replace"
slug: "/wrangle/format/replace"
description: "Quick find and replace for simple values. Can use regex if 'input' in params and isinstance(params['input'], list):in the find field."
wrangle_key: "replace"
wrangle_type: "format"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Replace

Quick find and replace for simple values. Can use regex if 'input' in params and isinstance(params['input'], list):in the find field.

## Metadata

| Field | Value |
| --- | --- |
| ID | f0ab715e-9e0e-4614-83e4-5cd8ea08a09f |
| Wrangle Key | `replace` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, replace |

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
| input | Input | list | Yes | Name or list of input column |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output column |  | ["Replace Output"] |
| find | Find | text | Yes | Pattern to find using regex |  | "" |
| replace | Replace | text | Yes | Value to replace the pattern found |  | "" |

## Defaults

```json
{
  "find": "",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Replace Output"
  ],
  "replace": ""
}
```

## Examples

### Replacing an Abbreviation

#### Recipe

```yaml
wrangles:
  - replace:
  		input: Product Data
      find: brg
      replace: bearing
```

#### Input Sample

| Product Data |
| --- |
| SKF ball brg |
| brg seal |

#### Output Sample

| Product Data |
| --- |
| SKF ball bearing |
| bearing seal |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

