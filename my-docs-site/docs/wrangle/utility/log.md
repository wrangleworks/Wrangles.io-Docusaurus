---
title: "Log"
slug: "/wrangle/utility/log"
description: "Log the current status of the dataframe."
wrangle_key: "log"
wrangle_type: "utility"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Log

Log the current status of the dataframe.

## Metadata

| Field | Value |
| --- | --- |
| ID | 6177808e-aa2d-4d0b-8385-858b16948a5d |
| Wrangle Key | `log` |
| Type | utility |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Utility, log |

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
| columns | Columns | list | No | (Optional, default all columns) List of specific columns to log. |  | ["Column A", "Column B"] |
| error | Error | text | No | Log an error to the console |  | "" |
| info | Info | text | No | Log info to the console |  | "" |
| log_data | Log Data | boolean | No | Whether to log a sample of the contents of the dataframe. Default True if not logging to a write, error, warning or info. Default False otherwise. |  | false |
| warning | Warning | text | No | Log a warning to the console |  | "" |
| write | Write | list | No | (Optional) Allows for an intermediate output to a file/dataframe/database etc. |  | [] |

## Defaults

```json
{
  "info": "",
  "error": "",
  "write": [],
  "columns": [
    "Column A",
    "Column B"
  ],
  "warning": "",
  "log_data": false
}
```

## Examples

### Logging All Columns to Terminal

#### Recipe

```yaml
wrangles:
  - log: {}
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Logging Specific Columns to Terminal

#### Recipe

```yaml
wrangles:
  - log:
  		columns:
      	- column1
        - column2
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Logging to a File

#### Recipe

```yaml
wrangles:
  - log:
  		write:
      	- file:
        		name: output/filepath
            columns:
            	- column 1
              - column 2
```

#### Input Sample

_No sample available._

#### Output Sample

_No sample available._

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Using Hardcoded Variables

#### Recipe

```yaml
wrangles:
  - matrix:
      variables:
        var: [A,B,C]
      wrangles:
        - custom.test_fn:
            input: Col1
            output: Part Code ${var}
            value: ${var}
```

#### Input Sample

| Part Code |
| --- |
| 6202 |
| br549 |
| 554-114 |
| 554-112 |

#### Output Sample

| Part Code | Part Code A | Part Code B | Part Code C |
| --- | --- | --- | --- |
| 6202 | 6202A | 6202B | 6202C |
| br549 | br549A | br549B | br549C |
| 554-114 | 554-114A | 554-114B | 554-114C |
| 554-112 | 554-112A | 554-112B | 554-112C |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Using Unique Variables Per Row

#### Recipe

```yaml
wrangles:
  - matrix:
      variables:
        model_id: set(Model ID)
      wrangles:
        - extract.custom:
            input: Description
            output: Extracted Values
            model_id: ${model_id}
            where: "[Model ID] = ?"
            where_params:
               - ${model_id}
```

#### Input Sample

| Model ID | Description |
| --- | --- |
| xxxxxxxx-xxxx-xxxx | The SKF 6202 bearing is the best bearing in the world |
| yyyyyyyy-yyyy-yyyy | The Timken 6102 bearing is indestructible |
| zzzzzzzz-zzzz-zzzz | The Milwaukee impact has 1200lft-lbs of torque |

#### Output Sample

| Model ID | Description | Extracted Values |
| --- | --- | --- |
| xxxxxxxx-xxxx-xxxx | The SKF 6202 bearing is the best bearing in the world | 6202 |
| yyyyyyyy-yyyy-yyyy | The Timken 6102 bearing is indestructible | indestructible |
| zzzzzzzz-zzzz-zzzz | The Milwaukee impact has 1200lft-lbs of torque | 1200ft-lbs |

_Source: `docs/python/recipes/wrangles/utilities.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | /python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

