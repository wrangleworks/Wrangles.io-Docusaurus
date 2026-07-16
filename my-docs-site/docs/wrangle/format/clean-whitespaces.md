---
title: "Clean Whitespaces"
slug: "/wrangle/format/clean-whitespaces"
description: "Condense multiple spaces to a single space and convert special space characters to a standard space."
wrangle_key: "clean_whitespaces"
wrangle_type: "format"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Clean Whitespaces

Condense multiple spaces to a single space and convert special space characters to a standard space.

## Metadata

| Field | Value |
| --- | --- |
| ID | e36e15c4-f0ad-43f8-8555-ef683a8ab892 |
| Wrangle Key | `clean_whitespaces` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, clean_whitespaces |

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
| input | Input | list | Yes | Name or list of input columns. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns. |  | ["Clean Whitespaces Output"] |
| remove_literals | Remove Literals | boolean | No | Whether to remove special space characters such as new lines etc. Default True. |  | false |
| trim | Trim | boolean | No | Whether to trim leading and trailing spaces. Default True. |  | false |

## Defaults

```json
{
  "trim": false,
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Clean Whitespaces Output"
  ],
  "remove_literals": false
}
```

## Examples

_No examples are currently available._

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/excel/standardize.md |
| Docs URL | /python/recipes/wrangles/standardize |
| Legacy Path | docs/excel/standardize.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

