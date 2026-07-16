---
title: "Dictionary Element"
slug: "/wrangle/select/dictionary-element"
description: "Select one or more element of a dictionary."
wrangle_key: "select.dictionary_element"
wrangle_type: "select"
wrangle_subtype: "dictionary_element"
variant: "stock"
status: "active"
---

# Dictionary Element

Select one or more element of a dictionary.

## Metadata

| Field | Value |
| --- | --- |
| ID | 5adaeada-6da8-464f-84cb-9fb5ecc17e48 |
| Wrangle Key | `select.dictionary_element` |
| Type | select |
| Subtype | dictionary_element |
| Variant | stock |
| Status | active |
| Tags | Select, select, dictionary_element |

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
| output | Output | list | No | Name of the output column. If omitted, the input column will be replaced. |  | ["Dictionary Element Output"] |
| element | Element | list | Yes | The key or keys from the dictionary to select. |  | [] |
| default | Default | boolean | No | Set the default value to return if the specified element doesn't exist. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Dictionary Element Output"
  ],
  "default": false,
  "element": []
}
```

## Examples

### Selecting Dictionary Element Using Where

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Shapes
      element: shapes
      default: square
      where: Part Number = 1234
```

#### Input Sample

| Properties | Part Number |
| --- | --- |
| {'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'} | 1234 |
| {'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'} | 5678 |

#### Output Sample

| Shapes |
| --- |
| round |
|  |

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting Multiple Dictionary Elements

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      element: 
      	- shapes
        - materials
```

#### Input Sample

| Properties |
| --- |
| {'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'} |
| {'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'} |

#### Output Sample

| Properties |
| --- |
| {'shapes': 'round', 'materials': 'tungsten'} |
| {'shapes': 'square', 'materials': 'tungsten'} |

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting Multiple Dictionary Elements Using a Wildcard

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col*
```

#### Input Sample

| Column |
| --- |
| {'Col1': 'A', 'Col2': 'B', 'Other3': 'C'} |

#### Output Sample

| Column | Output Dict |
| --- | --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} | {'Col1': 'A', 'Col2': 'B'} |

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting Multiple Dictionary Elements Using Regex

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- "regex: .*2"
```

#### Input Sample

| Column |
| --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} |

#### Output Sample

| Column | Output Dict |
| --- | --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} | {'Col2': 'B'} |

_Source: `docs/python/recipes/wrangles/select.md`_

### Selecting Elements While Renaming

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col1: Column 1
        - Col2: Column 2
```

#### Input Sample

| Column |
| --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} |

#### Output Sample

| Column | Output Dict |
| --- | --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} | {'Column 1': 'A', 'Column 2': 'B'} |

_Source: `docs/python/recipes/wrangles/select.md`_

### Using Default to Fill Missing Elements

#### Recipe

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col1
        - Col3
      default:
      	Col1: Z
        Col3: Y
```

#### Input Sample

| Column |
| --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} |
| {'Col1': 'D', 'Col2': 'E'} |

#### Output Sample

| Column | Output Dict |
| --- | --- |
| {'Col1': 'A', 'Col2': 'B', 'Col3': 'C'} | {'Col1': 'A', 'Col3': 'C'} |
| {'Col1': 'D', 'Col2': 'E'} | {'Col1': 'D', 'Col3': 'Y'} |

_Source: `docs/python/recipes/wrangles/select.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | /python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

