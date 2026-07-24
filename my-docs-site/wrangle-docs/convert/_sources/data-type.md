## Data Type

Change the data type of the input.

### Metadata

| Field | Value |
| --- | --- |
| ID | 52384f01-7164-404f-8615-063e7677a588 |
| Wrangle Key | `convert.data_type` |
| Type | convert |
| Subtype | data_type |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, data_type |

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
| input | Input | list | Yes | Name or list of input columns. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name or list of output columns. If omitted, the input column will be overwritten. |  | ["Data Type Output"] |
| data_type | Data Type | select | Yes | Data type to convert to. | str, float, int, bool, datetime | "str" |
| default | Default | boolean | No | Default output if the data cannot be converted. If omitted, invalid conversions are passed through unchanged. |  | false |
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
    "Data Type Output"
  ],
  "default": false,
  "data_type": "str"
}
```

### Examples

#### Change a Float to an Integer

##### Recipe

```yaml
wrangles:
  - convert.data_type:
      input: column
      output: new column
      data_type: int
```

##### Input Sample

| column |
| --- |
| 3.14159 |

##### Output Sample

| column | new column |
| --- | --- |
| 3.14159 | 3 |

_Source: `docs/python/recipes/wrangles/convert.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
