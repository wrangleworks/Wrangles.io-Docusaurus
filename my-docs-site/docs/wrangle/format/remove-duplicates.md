---
title: "Remove Duplicates"
slug: "/wrangle/format/remove-duplicates"
description: "Remove duplicates from a list. Preserves input order."
wrangle_key: "format.remove_duplicates"
wrangle_type: "format"
wrangle_subtype: "remove_duplicates"
variant: "stock"
status: "active"
---

# Remove Duplicates

Remove duplicates from a list. Preserves input order.

## Metadata

| Field | Value |
| --- | --- |
| ID | 283b9e78-b2b2-43d0-844f-9842c33120aa |
| Wrangle Key | `format.remove_duplicates` |
| Type | format |
| Subtype | remove_duplicates |
| Variant | stock |
| Status | active |
| Tags | Format, format, remove_duplicates |

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
| output | Output | list | No | Name of the output column |  | ["Remove Duplicates Output"] |
| ignore_case | Ignore Case | boolean | No | Ignore case when removing duplicates |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Remove Duplicates Output"
  ],
  "ignore_case": false
}
```

## Examples

### Removing Duplicates From a List

#### Recipe

```yaml
wrangles:
    - format.remove_duplicates:
        input: Attack of the Clones
        output: Commander
        where: Rank = Commander
```

#### Input Sample

| Rank | Attack of the Clones |
| --- | --- |
| Commander | ['Cody', 'Cody', 'Cody'] |
| Captain | ['Rex', 'Rex', 'Rex'] |

#### Output Sample

| Rank | Commander | Attack of the Clones |
| --- | --- | --- |
| Commander | ['Cody'] | ['Cody', 'Cody', 'Cody'] |
| Captain |  | ['Rex', 'Rex', 'Rex'] |

_Source: `docs/python/recipes/wrangles/format.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | /python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

