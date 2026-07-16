---
title: "Standardize"
slug: "/wrangle/format/standardize"
description: "Standardize data using a DIY or bespoke standardization wrangle. Requires WrangleWorks Account and Subscription."
wrangle_key: "standardize"
wrangle_type: "format"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Standardize

Standardize data using a DIY or bespoke standardization wrangle. Requires WrangleWorks Account and Subscription.

## Metadata

| Field | Value |
| --- | --- |
| ID | 53cd3fdd-24e2-4411-8655-6014b92a3f3a |
| Wrangle Key | `standardize` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, standardize |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | Yes |
| Requires subscription | Yes |
| Requires external API key | No |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name or list of input columns. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns |  | ["Standardize Output"] |
| case_sensitive | Case Sensitive | boolean | No | Allows the wrangle to be case sensitive if set to True, default is False. |  | false |
| model_id | Model Id | list | No | The ID of the wrangle to use (do not include 'find' and 'replace') |  | [] |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Standardize Output"
  ],
  "model_id": [],
  "case_sensitive": false
}
```

## Examples

### Replacing Abbreviations

#### Recipe

```yaml
wrangles:
  - standardize:
      input: Abbrev
      output: Abbreviations
      model_id: code_here
```

#### Input Sample

| Abbrev |
| --- |
| ASAP |
| ETA |

#### Output Sample

| Abbreviations |
| --- |
| As Soon As Possible |
| Estimated Time of Arrival |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

