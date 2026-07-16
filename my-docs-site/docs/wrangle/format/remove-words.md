---
title: "Remove Words"
slug: "/wrangle/format/remove-words"
description: "Remove all the elements that occur in one list from another."
wrangle_key: "remove_words"
wrangle_type: "format"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Remove Words

Remove all the elements that occur in one list from another.

## Metadata

| Field | Value |
| --- | --- |
| ID | 543b96c3-f354-48be-8046-bf0cb9fbaf56 |
| Wrangle Key | `remove_words` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, remove_words |

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
| input | Input | list | Yes | Name of column to remove words from |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of the output columns |  | ["Remove Words Output"] |
| to_remove | To Remove | list | Yes | Column or list of columns with a list of words to be removed |  | [] |
| ignore_case | Ignore Case | boolean | No | Ignore input and to_remove case |  | false |
| tokenize_to_remove | Tokenize To Remove | boolean | No | Tokenize all to_remove inputs |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Remove Words Output"
  ],
  "to_remove": [],
  "ignore_case": false,
  "tokenize_to_remove": false
}
```

## Examples

### Removing Words From a Column

#### Recipe

```yaml
wrangles:
   - remove_words:
        input: Description
        to_remove:			# To Remove columns must be list
          - Materials
          - Colours
        output: Product
        tokenize_to_remove: True
        ignore_case: False
```

#### Input Sample

| Colours | Materials | Description |
| --- | --- | --- |
| ['Blue'] | ['Steel'] | Steel Blue Bottle |
| ['Blue'] | ['Steel'] | ['Steel', 'Blue', 'Bottle'] |

#### Output Sample

| Product |
| --- |
| Bottle |
| Bottle |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

