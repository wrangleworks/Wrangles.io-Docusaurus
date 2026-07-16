---
title: "Properties"
slug: "/wrangle/extract/properties"
description: "Extract text properties from the input. Requires WrangleWorks Account."
wrangle_key: "extract.properties"
wrangle_type: "extract"
wrangle_subtype: "properties"
variant: "stock"
status: "active"
---

# Properties

Extract text properties from the input. Requires WrangleWorks Account.

## Metadata

| Field | Value |
| --- | --- |
| ID | 23bbdb86-fd13-4b78-8fff-a7a76769ab63 |
| Wrangle Key | `extract.properties` |
| Type | extract |
| Subtype | properties |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, properties |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | Yes |
| Requires subscription | No |
| Requires external API key | No |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name of the input column |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of the output columns |  | ["Properties Output"] |
| first_element | First Element | boolean | No | Get the first element from results |  | false |
| property_type | Property Type | select | No | The specific type of properties to extract | Colours, Materials, Shapes, Standards | "" |
| return_data_type | Return Data Type | select | No | The format to return the data, as a list or as a string | list, string | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Properties Output"
  ],
  "first_element": false,
  "property_type": "",
  "return_data_type": ""
}
```

## Examples

### Extracting All Properties

#### Recipe

```yaml
wrangles:
  - extract.properties:
      input: water bottles
      output: properties
```

#### Input Sample

_No sample available._

#### Output Sample

| Products | Product Properties |
| --- | --- |
| Stainless Steel Blue Bottle | {'Colours': ['Blue'], 'Materials': ['Stainless Steel']} |
| Plastic Yellow Bottle | {'Colours': ['Yellow'], 'Materials': ['Plastic']} |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Extracting Colour

#### Recipe

```yaml
wrangles:
  - extract.properties:
      input: water bottles
      output: properties
      property_type: colours # Optional
```

#### Input Sample

_No sample available._

#### Output Sample

| Products | Product Colours |
| --- | --- |
| Stainless Steel Blue Bottle | ['Blue'] |
| Plastic Yellow Bottle | ['Yellow'] |

_Source: `docs/python/recipes/wrangles/extract.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | /python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

