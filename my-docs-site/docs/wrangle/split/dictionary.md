---
title: "Dictionary"
slug: "/wrangle/split/dictionary"
description: "Split one or more dictionaries into columns."
wrangle_key: "split.dictionary"
wrangle_type: "split"
wrangle_subtype: "dictionary"
variant: "stock"
status: "active"
---

# Dictionary

Split one or more dictionaries into columns.

## Metadata

| Field | Value |
| --- | --- |
| ID | 06ca98e4-d026-43f7-84eb-af246d401ba9 |
| Wrangle Key | `split.dictionary` |
| Type | split |
| Subtype | dictionary |
| Variant | stock |
| Status | active |
| Tags | Split, split, dictionary |

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
| input | Input | list | Yes | Name or lists of the column(s) containing dictionaries to be split. |  | ["Column A", "Column B"] |
| output | Output | list | No | (Optional) Subset of keys to extract from the dictionary. |  | ["Dictionary Output"] |
| default | Default | json | No | Provide a set of default headings and values if they are not found within the input |  | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Dictionary Output"
  ],
  "default": ""
}
```

## Examples

### Splitting an Entire Dictionary

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      # Output not required
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Choosing Specific Keys by Name

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: Col2
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Using a Wildcard Output to Choose Specific Keys

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: Col*
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Using Regular Expressions to Choose Specific Keys

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: "regex: .*3"
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Choosing Specific Keys While Renaming the Output

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: 
      	- Col1: Column 1
      	- Col2: Column 2
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/split.md`_

### Using a Wildcard While Renaming

#### Recipe

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: 
      	- Col*: Column *
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

