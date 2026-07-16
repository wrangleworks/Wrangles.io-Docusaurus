---
title: "Case When"
slug: "/wrangle/compute/case-when"
description: "Assign values to a column based on conditional logic"
wrangle_key: "compute.case_when"
wrangle_type: "compute"
wrangle_subtype: "case_when"
variant: "stock"
status: "active"
---

# Case When

Assign values to a column based on conditional logic

## Metadata

| Field | Value |
| --- | --- |
| ID | 9a9662e4-53d1-4932-8adf-bc3e7aa364ad |
| Wrangle Key | `compute.case_when` |
| Type | compute |
| Subtype | case_when |
| Variant | stock |
| Status | active |
| Tags | Compute, compute, case_when |

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
| output | Output | text | Yes | Name of the output column |  | "Case When Output" |
| cases | Cases | list | Yes | List of conditions and corresponding values |  | [] |
| default | Default | boolean | No | Value to assign if no conditions are met. Default None. |  | false |

## Defaults

```json
{
  "cases": [],
  "output": "Case When Output",
  "default": false
}
```

## Examples

_No examples are currently available._

## Source

| Field | Value |
| --- | --- |
| Docs Path |  |
| Docs URL |  |
| Legacy Path |  |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

