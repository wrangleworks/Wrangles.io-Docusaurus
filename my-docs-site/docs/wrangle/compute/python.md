---
title: "Python"
slug: "/wrangle/compute/python"
description: "Apply a simple single-line python command. For more complex python use a custom function."
wrangle_key: "python"
wrangle_type: "compute"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Python

Apply a simple single-line python command. For more complex python use a custom function.

## Metadata

| Field | Value |
| --- | --- |
| ID | c0398a11-7731-4e47-8df0-b07eea0b1d6c |
| Wrangle Key | `python` |
| Type | compute |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Compute, python |

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
| input | Input | list | No | Name or list of input column(s) to filter the data available |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name or list of output column(s). To output multiple columns, |  | ["Python Output"] |
| command | Command | text | Yes | Python command. This must return a value. |  | "" |
| except | Except | boolean | No | Value to return for the row if an exception occurs during the evaluation. |  | false |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "except": false,
  "output": [
    "Python Output"
  ],
  "command": ""
}
```

## Examples

### Python Wrangle

#### Recipe

```yaml
wrangles:
  - python:
      output: result
      command: My_Column.upper()
```

#### Input Sample

_No sample available._

#### Output Sample

| result | My Column |
| --- | --- |
| EXAMPLE TEXT | example text |

_Source: `docs/python/recipes/wrangles/standalone.md`_

### Including Your Own Parameters

#### Recipe

```yaml
wrangles:
  - python:
      output: sliced
      command: input_column[:i]
      i: ${var}
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/standalone.md`_

### Recipe Call Using Name

#### Recipe

```yaml
wrangles:
  - recipe:
      name: recipe1.wrgl.yaml
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/standalone.md`_

### Imbedded Sub-Recipe

#### Recipe

```yaml
wrangles:
	- recipe:
  		output: Description Refined
  		wrangles:
      	- merge.to_list:
        		input: Attributes
            output: Words to Remove
            
        - remove_words:
        		input: Description
            output: Description Refined
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

