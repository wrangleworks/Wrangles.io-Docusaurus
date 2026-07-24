## To JSON

Convert an object to a JSON representation.

### Metadata

| Field | Value |
| --- | --- |
| ID | 94e54eb7-2b8c-4047-89d0-fb5d16baf396 |
| Wrangle Key | `convert.to_json` |
| Type | convert |
| Subtype | to_json |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, to_json |

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
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten. |  | ["To Json Output"] |
| indent | Indent | text | No | If `indent` is a non-negative integer or string, JSON arrays and objects are pretty-printed with that indentation. `None` uses the most compact representation. |  | "" |
| sort_keys | Sort Keys | boolean | No | If true, dictionary keys are sorted in the output. |  | false |
| ensure_ascii | Ensure Ascii | boolean | No | If true, non-ASCII characters are escaped. Defaults to false. |  | false |
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
  "indent": "",
  "output": [
    "To Json Output"
  ],
  "sort_keys": false,
  "ensure_ascii": false
}
```

### Examples

#### Convert Text to JSON

##### Recipe

```yaml
wrangles:
  - convert.to_json:
      input: column
      output: new column
```

##### Input Sample

| column |
| --- |
| `['a', 'python', 'list']` |
| `{'python': 'dict'}` |

##### Output Sample

| new column |
| --- |
| `["a","python","list"]` |
| `{"python":"dict"}` |

_Source: `docs/python/recipes/wrangles/convert.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
