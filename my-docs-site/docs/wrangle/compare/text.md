---
title: "Text"
slug: "/wrangle/compare/text"
description: "Compare two strings and return the intersection or difference, or use overlap to find the matching characters between the two strings."
wrangle_key: "compare.text"
wrangle_type: "compare"
wrangle_subtype: "text"
variant: "stock"
status: "active"
---

# Text

Compare two strings and return the intersection or difference, or use overlap to find the matching characters between the two strings.

## Metadata

| Field | Value |
| --- | --- |
| ID | 31905b74-ce58-45cd-8add-821cc04ab946 |
| Wrangle Key | `compare.text` |
| Type | compare |
| Subtype | text |
| Variant | stock |
| Status | active |
| Tags | Compare, compare, text |

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
| input | Input | list | Yes | the columns to compare. First column is the base column |  | ["Column A", "Column B"] |
| output | Output | text | Yes | The column to output the results to |  | "Text Output" |
| method | Method | select | Yes | The type of comparison to perform (difference, intersection, overlap) | difference, intersection, overlap | "difference" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "method": "difference",
  "output": "Text Output"
}
```

## Examples

### Comparing the difference between two columns of text

#### Recipe

```yaml
wrangles:
  - compare.text:
      input:
        - col1
        - col2
      output: Difference
      method: difference
```

#### Input Sample

| Col1 | Col2 |
| --- | --- |
| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |
| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |
| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |

#### Output Sample

| Difference |
| --- |
| Pine Black Bottom |
| Maple Orange Steel |
| Normal Blue Plastic |

_Source: `docs/python/recipes/wrangles/compare.md`_

### Comparing the intersection of two columns of text

#### Recipe

```yaml
wrangles:
  - compare.text:
      input:
        - col1
        - col2
      output: Intersection
      method: intersection
```

#### Input Sample

| Col1 | Col2 |
| --- | --- |
| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |
| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |
| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |

#### Output Sample

| Intersection |
| --- |
| Large Wood Marble Bookshelf |
| Medium Wood Top Coffee Table |
| Small Wood Top Console Table |

_Source: `docs/python/recipes/wrangles/compare.md`_

### Comparing the overlap of two columns of text

#### Recipe

```yaml
wrangles:
  - compare.text:
      input:
        - Part Code1
        - Part Code2
      output: Overlap
      method: overlap
```

#### Input Sample

| Part Code1 | Part Code2 |
| --- | --- |
| SKF6202 | TMKN6202 |
| X06-02-000 | X06-81-000 |
| 7100E15-V-230/3 | 7100E15-V-120/1 |

#### Output Sample

| Overlap |
| --- |
| ****6202 |
| X06-**-000 |
| 7100E15-V-\**0/\* |

_Source: `docs/python/recipes/wrangles/compare.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/compare.md |
| Docs URL | /python/recipes/wrangles/compare |
| Legacy Path | docs/python/recipes/wrangles/compare.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

