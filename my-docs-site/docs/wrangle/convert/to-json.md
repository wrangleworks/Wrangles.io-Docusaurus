---
title: "To Json"
slug: "/wrangle/convert/to-json"
description: "Convert an object to a JSON representation."
wrangle_key: "convert.to_json"
wrangle_type: "convert"
wrangle_subtype: "to_json"
variant: "stock"
status: "active"
---

# To Json

Convert an object to a JSON representation.

## Metadata

| Field | Value |
| --- | --- |
| ID | 94e54eb7-2b8c-4047-89d0-fb5d16baf396 |
| Wrangle Key | `convert.to_json` |
| Type | convert |
| Subtype | to_json |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, to_json |

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
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten |  | ["To Json Output"] |
| ensure_ascii | Ensure Ascii | boolean | No | If true, non-ASCII characters will be escaped. Default is false |  | false |
| indent | Indent | text | No | If indent is a non-negative integer or string, then JSON array elements and object members will be pretty-printed  with that indent level. An indent level of 0, negative, or "" will only insert newlines. None (the default) selects the most  compact representation. Using a positive integer indent indents that many spaces per level. If indent is a string (such as '\t'),  that string is used to indent each level. |  | "" |
| sort_keys | Sort Keys | boolean | No | If sort_keys is true (defaults to False), then the output of dictionaries will be sorted by key. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "indent": "",
  "output": [
    "To Json Output"
  ],
  "sort_keys": false,
  "ensure_ascii": false
}
```

## Examples

### Convert Text to JSON

#### Recipe

```yaml
wrangles:
  - convert.to_json:
      input: column
      output: new column
```

#### Input Sample

| column |
| --- |
| ['a', 'python', 'list'] |
| {'python': 'dict'} |

#### Output Sample

| new column |
| --- |
| ["a","python","list"] |
| {"python":"dict"} |

_Source: `docs/python/recipes/wrangles/convert.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

