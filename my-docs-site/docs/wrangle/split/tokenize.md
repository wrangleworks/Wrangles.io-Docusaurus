---
title: "Tokenize"
slug: "/wrangle/split/tokenize"
description: "Split text into tokens. A variety of methods are available. The default method is to split on spaces."
wrangle_key: "split.tokenize"
wrangle_type: "split"
wrangle_subtype: "tokenize"
variant: "stock"
status: "active"
---

# Tokenize

Split text into tokens. A variety of methods are available. The default method is to split on spaces.

## Metadata

| Field | Value |
| --- | --- |
| ID | 6cc88418-ae0c-43f6-84ee-31e0d5f838c3 |
| Wrangle Key | `split.tokenize` |
| Type | split |
| Subtype | tokenize |
| Variant | stock |
| Status | active |
| Tags | Split, split, tokenize |

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
| input | Input | list | Yes | Column(s) to be split into tokens |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column |  | ["Tokenize Output"] |
| method | Method | select | No |  | space, boundary, boundary_ignore_space | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "method": "",
  "output": [
    "Tokenize Output"
  ]
}
```

## Examples

### Tokenizing a String

#### Recipe

```yaml
wrangles:
  - split.tokenize:
      input: Materials
      output: Tokenized List
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

