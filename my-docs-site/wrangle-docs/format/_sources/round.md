## Round

Round numbers in a column to the nearest decimal point of your choosing.

### Metadata

| Field | Value |
| --- | --- |
| ID | 12f3111b-8511-4e42-8d3f-b5302dc3b4e4 |
| Wrangle Key | `round` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, round |

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
| output | Output | list | No | Overwrites input if none given. |  | ["Round Output"] |
| decimals | Decimals | number | No | Number of decimal places to round to, default is zero. |  | "" |
| where | Where | text | No | Filter the data to only apply the wrangle to certain rows using SQL-style criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` so the query can be parameterized. Uses SQLite syntax (`?` or `:name`). |  |  |
| if | If | text | No | A condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Round Output"
  ],
  "decimals": ""
}
```

### Examples

#### Rounding a Column

##### Recipe

```yaml
wrangles:
  - round:
      input: Cost Per Unit
      output: Cost Rounded
      decimals: 2
```

##### Input Sample

| Cost Per Unit |
| --- |
| 3.14159 |
| 2.71828 |

##### Output Sample

| Cost Per Unit | Cost Rounded |
| --- | --- |
| 3.14159 | 3.14 |
| 2.71828 | 2.72 |

_Source: `docs/python/recipes/wrangles/standalone.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | https://wrangles.io/en/python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
