---
title: "Similarity"
slug: "/wrangle/compare/similarity"
description: "Calculate the cosine similarity of two vectors"
wrangle_key: "similarity"
wrangle_type: "compare"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Similarity

Calculate the cosine similarity of two vectors

## Metadata

| Field | Value |
| --- | --- |
| ID | 7c733344-4cce-4938-8013-53742fb46a90 |
| Wrangle Key | `similarity` |
| Type | compare |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Compare, similarity |

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
| input | Input | list | Yes | Two columns of vectors to compare the similarity of. |  | ["Column A", "Column B"] |
| output | Output | text | Yes | Name of the output column. |  | "Similarity Output" |
| method | Method | select | No | The type of similarity to calculate (cosine or euclidean). Adjusted cosine adjusts the default cosine calculation to cover a range of 0-1 for typical comparisons. | cosine, adjusted cosine, euclidean | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "method": "",
  "output": "Similarity Output"
}
```

## Examples

### Rounding a Column

#### Recipe

```yaml
wrangles:
  - create.embeddings:
      input: col1
      api_key: ${my_key}
      output: col1 embeddings
      
  - create.embeddings:
      input: col2
      api_key: ${my_key}
      output: col2 embeddings

  - similarity:
  		input: 
        - col1 embeddings
        - col2 embeddings
      output: similarity
      method: adjusted cosine
```

#### Input Sample

_No sample available._

#### Output Sample

| col1 | col2 | similarity | col1 embeddings | col2 embeddings |
| --- | --- | --- | --- | --- |
| SKF | Timken | 0.158931 | [1, 2, 3, 4] | [4, 3, 2, 1] |
| Ball Bearing | Roller Bearing | 0.942437 | [5, 6, 7, 8] | [5, 6, 7, 9] |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

