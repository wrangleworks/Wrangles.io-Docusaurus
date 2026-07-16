---
title: "Address"
slug: "/wrangle/extract/address"
description: "Extract parts of addresses. Requires WrangleWorks Account."
wrangle_key: "extract.address"
wrangle_type: "extract"
wrangle_subtype: "address"
variant: "stock"
status: "active"
---

# Address

Extract parts of addresses. Requires WrangleWorks Account.

## Metadata

| Field | Value |
| --- | --- |
| ID | 44153f95-4581-4cee-898e-b3b4714045fd |
| Wrangle Key | `extract.address` |
| Type | extract |
| Subtype | address |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, address |

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
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name of the output column. |  | ["Address Output"] |
| dataType | DataType | select | No | Specific part of the address to extract | streets, cities, regions, countries | "" |

## Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Address Output"
  ],
  "dataType": ""
}
```

## Examples

### Extracting Street Name

#### Recipe

```yaml
wrangles:
  - extract.address:
      input: Location
      output: Street
      dataType: streets
      where: SUBSTRING(Location, 1, 3) = '221'
```

#### Input Sample

_No sample available._

#### Output Sample

| Street | Location |
| --- | --- |
| ['221 B Baker St.'] | 221 B Baker St., London, England, United Kingdom |
|  | London SW1A 1AA, London, England, United Kingdom |

_Source: `docs/python/recipes/wrangles/extract.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | /python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

