---
title: "Text"
slug: "/wrangle/split/text"
description: "Split a string to multiple columns or a list."
wrangle_key: "split.text"
wrangle_type: "split"
wrangle_subtype: "text"
variant: "stock"
status: "active"
---

# Text

Split a string to multiple columns or a list.

## Metadata

| Field | Value |
| --- | --- |
| ID | e76e43f7-d129-4bf8-87b4-a304a378b130 |
| Wrangle Key | `split.text` |
| Type | split |
| Subtype | text |
| Variant | stock |
| Status | active |
| Tags | Split, split, text |

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
| input | Input | text | Yes | Name of the column to be split |  | "Column A" |
| output | Output | list | No | Name of the output column(s) |  | ["Text Output"] |
| char | Char | text | No | Set the character(s) to split on. |  | "" |
| element | Element | text | No | Select a specific element or range after splitting using slicing syntax. e.g. 0, ":5", "5:", "2:8:2" |  | "" |
| inclusive | Inclusive | boolean | No | If true, include the split character in the output. Default False |  | false |
| pad | Pad | boolean | No | Choose whether to pad to ensure a consistent length. Default true if outputting to columns, false for lists. |  | false |
| skip_empty | Skip Empty | boolean | No | Whether to skip empty values |  | false |

## Defaults

```json
{
  "pad": false,
  "char": "",
  "input": "Column A",
  "output": [
    "Text Output"
  ],
  "element": "",
  "inclusive": false,
  "skip_empty": false
}
```

## Examples

### To a List

#### Recipe

```yaml
wrangles:
  - split.text:
      input: Column1
      output: Column2
      char: ', '
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Split Using Regex

#### Recipe

```yaml
# Split on x, case insensitive.
wrangles:
  - split.text:
      input: Col1
      output: Col2
      char: 'regex:(?i)x'
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Slice the Output

#### Recipe

```yaml
wrangles:
  - split.text:
      input: Column1
      output: Column2
      char: ', '
      element: 0
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Split to Columns (Wildcard)

#### Recipe

```yaml
wrangles:
  - split.text:
      input: Col
      output: Col*              # Optional
      char: ', '
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Split to Columns (Named)

#### Recipe

```yaml
wrangles:
  - split.text:
      input: Col
      output:
      	- Col 1
        - Col 2
        - Col 3
      char: ', '
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/split.md |
| Docs URL | /python/recipes/wrangles/split |
| Legacy Path | docs/python/recipes/wrangles/split.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

