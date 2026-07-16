---
title: "Jinja"
slug: "/wrangle/create/jinja"
description: "Output text using a jinja template"
wrangle_key: "create.jinja"
wrangle_type: "create"
wrangle_subtype: "jinja"
variant: "stock"
status: "active"
---

# Jinja

Output text using a jinja template

## Metadata

| Field | Value |
| --- | --- |
| ID | 10fc6709-16d4-4eab-8f56-6cb5d170ea66 |
| Wrangle Key | `create.jinja` |
| Type | create |
| Subtype | jinja |
| Variant | stock |
| Status | active |
| Tags | Create, create, jinja |

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
| input | Input | text | No | Specify a name of column containing a dictionary of elements to be used in jinja template. |  | "Column A" |
| output | Output | text | Yes | Name of the column to be output to. |  | "Jinja Output" |
| template | Template | json | Yes | A dictionary which defines the template/location as well as the form which the template is input. |  | "{}" |

## Defaults

```json
{
  "input": "Column A",
  "output": "Jinja Output",
  "template": "{}"
}
```

## Examples

### Creating a Jinja Description

#### Recipe

```yaml
wrangles:
  - create.jinja:
      output: Description
      template:
      	string: |
        	This is a {{ Brand }} {{ Item_Type }} that is {{ Size }}
```

#### Input Sample

| Size | Brand | Item Type |
| --- | --- | --- |
| 10mm | SKF | ball bearing |
| 15mm | Timken | bearing seal |

#### Output Sample

| Size | Brand | Item Type | Description |
| --- | --- | --- | --- |
| 10mm | SKF | ball bearing | This is a SKF ball bearing that is 10mm |
| 15mm | Timken | bearing seal | This is a Timken bearing seal that is 15mm |

_Source: `docs/python/recipes/wrangles/create.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

