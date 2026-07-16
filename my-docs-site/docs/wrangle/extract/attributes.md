---
title: "Attributes"
slug: "/wrangle/extract/attributes"
description: "Extract numeric attributes from the input such as weights or lengths. Requires WrangleWorks Account."
wrangle_key: "extract.attributes"
wrangle_type: "extract"
wrangle_subtype: "attributes"
variant: "stock"
status: "active"
---

# Attributes

Extract numeric attributes from the input such as weights or lengths. Requires WrangleWorks Account.

## Metadata

| Field | Value |
| --- | --- |
| ID | 03ccedef-c938-41f1-8980-280f1a91542e |
| Wrangle Key | `extract.attributes` |
| Type | extract |
| Subtype | attributes |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, attributes |

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
| output | Output | list | Yes | Name of the output column. |  | ["Attributes Output"] |
| attribute_type | Attribute Type | select | No | Request only a specific type of attribute | angle, area, capacitance, charge, current, data transfer rate, electrical conductance, electrical resistance, energy, force, frequency, inductance, instance frequency, length, luminous flux, weight, power, pressure, speed, velocity, temperature, time, voltage, volume, volumetric flow | "" |
| bound | Bound | select | No | When returning an object, if the input is a range (e.g. 10-20mm) set the value to return. min, mid or max. Default mid. | min, mid, max | "" |
| desired_unit | Desired Unit | text | No | Convert the extracted unit to the desired unit |  | "" |
| first_element | First Element | boolean | No | Get the first element from results |  | false |
| responseContent | ResponseContent | select | No | span - returns the text found. object - returns an object with the value and unit | span, object | "" |

## Defaults

```json
{
  "bound": "",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Attributes Output"
  ],
  "desired_unit": "",
  "first_element": false,
  "attribute_type": "",
  "responseContent": ""
}
```

## Examples

### Extracting All Attributes

#### Recipe

```yaml
wrangles:
  - extract.attributes:
      input: tools
      output: attributes
      responseContent: span
```

#### Input Sample

_No sample available._

#### Output Sample

| Tools (input) | Attributes (span )(output) |
| --- | --- |
| hammer 5kg, 0.5m | {'length': ['0.5m'], 'mass': ['5kg']} |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Extracting All Attributes

#### Recipe

```yaml
wrangles:
  - extract.attributes:
      input: tools
      output: attributes
      responseContent: object
```

#### Input Sample

_No sample available._

#### Output Sample

| Tools (input) | Attributes (Object) (output) |
| --- | --- |
| hammer 5kg, 0.5m | {'length': [{'unit': 'metre', 'value': 0.5}], 'mass': [{'unit': 'kilogram', 'value': 5.0}]} |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Extracting Specific Attributes

#### Recipe

```yaml
wrangles:
  - extract.attributes:
      input: Tools
      output: attributes
      responseContent: span
      attribute_type: mass			# Specific attributes
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/extract.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | /python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

