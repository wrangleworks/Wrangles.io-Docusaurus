## Fraction to Decimal

Convert fractions to decimals.

### Metadata

| Field | Value |
| --- | --- |
| ID | 7c55752e-70ab-4809-8298-c59436127457 |
| Wrangle Key | `convert.fraction_to_decimal` |
| Type | convert |
| Subtype | fraction_to_decimal |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, fraction_to_decimal |

### Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

### Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten. |  | ["Fraction To Decimal Output"] |
| decimals | Decimals | number | No | Number of decimal places to show after conversion. Defaults to 4. |  | "" |
| where | Where | text | No | Filter rows before applying the wrangle using SQL-like criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` for parameterized criteria. Uses SQLite syntax such as `?` or `:name`. |  |  |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Fraction To Decimal Output"
  ],
  "decimals": ""
}
```

### Examples

#### Converting a Column of Fractions to Decimals

##### Recipe

```yaml
wrangles:
  - convert.fraction_to_decimal:
      input: fractions
      output: decimals
      decimals: 3
```

##### Input Sample

| fractions |
| --- |
| 3/32 |
| 25/64 |

##### Output Sample

| decimals |
| --- |
| 0.094 |
| 0.391 |

_Source: `docs/python/recipes/wrangles/convert.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
