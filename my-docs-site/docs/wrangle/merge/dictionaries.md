---
title: "Dictionaries"
slug: "/wrangle/merge/dictionaries"
description: "Take dictionaries in multiple columns and merge them to a single dictionary."
wrangle_key: "merge.dictionaries"
wrangle_type: "merge"
wrangle_subtype: "dictionaries"
variant: "stock"
status: "active"
---

# Dictionaries

Take dictionaries in multiple columns and merge them to a single dictionary.

## Metadata

| Field | Value |
| --- | --- |
| ID | 93e27737-e966-4ba9-8777-4e96724ebfc4 |
| Wrangle Key | `merge.dictionaries` |
| Type | merge |
| Subtype | dictionaries |
| Variant | stock |
| Status | active |
| Tags | Merge, merge, dictionaries |

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
| input | Input | list | Yes | list of input columns |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column |  | "Dictionaries Output" |
| skip_empty | Skip Empty | boolean | No | Whether to skip empty dictionaries when merging |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": "Dictionaries Output",
  "skip_empty": false
}
```

## Examples

### Using Named Columns

#### Recipe

```yaml
wrangles:
  - merge.dictionaries:
      input:
        - Dict 1
        - Dict 2
      output: Merged
```

#### Input Sample

| Dict 1 | Dict 2 |
| --- | --- |
| {'First': 'One'} | {'Second': 'Two'} |

#### Output Sample

| Merged |
| --- |
| {'First': 'One', 'Second': 'Two'} |

_Source: `docs/python/recipes/wrangles/merge.md`_

### Using a Wildcard (*)

#### Recipe

```yaml
# Using a Wildcard (*)
wrangles:
  - merge.dictionaries:
      input: Dict *
      output: Merged
```

#### Input Sample

| Dict 1 | Dict 2 |
| --- | --- |
| {'First': 'One'} | {'Second': 'Two'} |

#### Output Sample

| Merged |
| --- |
| {'First': 'One', 'Second': 'Two'} |

_Source: `docs/python/recipes/wrangles/merge.md`_

### Using a Wildcard (*) With Not Columns

#### Recipe

```yaml
# Using a Wildcard (*)
wrangles:
  - merge.dictionaries:
      input: 
      	- Dict *
        - -Dict 2
      output: Merged
```

#### Input Sample

| Dict 1 | Dict 2 | Dict 3 |
| --- | --- | --- |
| {'First': 'One'} | {'Second': 'Two'} | {'Third': 'Three'} |

#### Output Sample

| Merged |
| --- |
| {'First': 'One', 'Third': 'Three'} |

_Source: `docs/python/recipes/wrangles/merge.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/merge.md |
| Docs URL | /python/recipes/wrangles/merge |
| Legacy Path | docs/python/recipes/wrangles/merge.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

