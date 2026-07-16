---
title: "Key Value Pairs"
slug: "/wrangle/merge/key-value-pairs"
description: "Create a dictionary from keys and values in paired columns e.g. COLUMN_NAME_1, COLUMN_VALUE_1, COLUMN_NAME_2, COLUMN_VALUE_2 ..."
wrangle_key: "merge.key_value_pairs"
wrangle_type: "merge"
wrangle_subtype: "key_value_pairs"
variant: "stock"
status: "active"
---

# Key Value Pairs

Create a dictionary from keys and values in paired columns e.g. COLUMN_NAME_1, COLUMN_VALUE_1, COLUMN_NAME_2, COLUMN_VALUE_2 ...

## Metadata

| Field | Value |
| --- | --- |
| ID | 8a2cd37c-8ef7-4b05-8264-36512f5dd837 |
| Wrangle Key | `merge.key_value_pairs` |
| Type | merge |
| Subtype | key_value_pairs |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, key_value_pairs |

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
| input | Input | text | Yes | Matched pairs of key and value columns |  | "Column A" |
| output | Output | text | Yes | Name of the output column |  | "Key Value Pairs Output" |
| skip_empty | Skip Empty | boolean | No | Whether to skip empty keys or values when creating the dictionary |  | false |

## Defaults

```json
{
  "input": "Column A",
  "output": "Key Value Pairs Output",
  "skip_empty": false
}
```

## Examples

### Using Named Columns

#### Recipe

```yaml
wrangles:
	- merge.key_value_pairs:
  		input:
      	Letter: Number
      output: Pairs
```

#### Input Sample

| Letter | Number |
| --- | --- |
| A | 1 |
| B | 2 |
| C | 3 |

#### Output Sample

| Pairs |
| --- |
| {'A': 1} |
| {'B': 2} |
| {'C': 3} |

_Source: `docs/python/recipes/wrangles/merge.md`_

### Using a wildcard (*)

#### Recipe

```yaml
# Using a Wildcard (*)
wrangles:
	- merge.key_value_pairs:
  		input:
      	key*: value*
      output: Object
```

#### Input Sample

| key 1 | key 2 | value 1 | value 2 |
| --- | --- | --- | --- |
| A | One | a | First |
| B | Two | b | Second |
| C | three | c | Third |

#### Output Sample

| Object |
| --- |
| {'A': 'a', 'One': 'First'} |
| {'B': 'b', 'Two': 'Second'} |
| {'C': 'c', 'three': 'Third'} |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

