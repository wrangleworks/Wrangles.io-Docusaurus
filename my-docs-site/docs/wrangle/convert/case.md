---
title: "Case"
slug: "/wrangle/convert/case"
description: "Change the case of the input."
wrangle_key: "convert.case"
wrangle_type: "convert"
wrangle_subtype: "case"
variant: "stock"
status: "active"
---

# Case

Change the case of the input.

## Metadata

| Field | Value |
| --- | --- |
| ID | 12ff4120-3613-4801-8653-99c793477fbc |
| Wrangle Key | `convert.case` |
| Type | convert |
| Subtype | case |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, case |

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
| input | Input | list | Yes | Name or list of input columns |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns |  | ["Case Output"] |
| case | Case | select | Yes | The case to convert to. lower, upper, title or sentence | lower, upper, title, sentence | "lower" |

## Defaults

```json
{
  "case": "lower",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Case Output"
  ]
}
```

## Examples

### Capitalize Input Column

#### Recipe

```yaml
wrangles:
  - convert.case:
      input: column
      output: new column
      case: upper
      where: column = 'more text'
```

#### Input Sample

| column |
| --- |
| some text |
| more text |
| some more text |

#### Output Sample

| column | new column |
| --- | --- |
| some text |  |
| more text | MORE TEXT |
| some more text |  |

_Source: `docs/python/recipes/wrangles/convert.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

