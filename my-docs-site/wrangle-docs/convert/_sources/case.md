## Case

Change the case of the input.

:::info
Non-string values are passed through unaltered.
:::

### Metadata

| Field | Value |
| --- | --- |
| ID | 12ff4120-3613-4801-8653-99c793477fbc |
| Wrangle Key | `convert.case` |
| Type | convert |
| Subtype | case |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, case |

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
| output | Output | list | No | Name or list of output columns. If omitted, the input column will be overwritten. |  | ["Case Output"] |
| case | Case | select | Yes | Case to convert to. | lower, upper, title, sentence | "lower" |
| where | Where | text | No | Filter rows before applying the wrangle using SQL-like criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` for parameterized criteria. Uses SQLite syntax such as `?` or `:name`. |  |  |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "case": "lower",
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Case Output"
  ]
}
```

### Examples

#### Capitalize Input Column

##### Recipe

```yaml
wrangles:
  - convert.case:
      input: column
      output: new column
      case: upper
      where: column = 'more text'
```

##### Input Sample

| column |
| --- |
| some text |
| more text |
| some more text |

##### Output Sample

| column | new column |
| --- | --- |
| some text |  |
| more text | MORE TEXT |
| some more text |  |

_Source: `docs/python/recipes/wrangles/convert.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
