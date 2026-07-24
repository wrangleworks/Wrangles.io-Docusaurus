## Length

Calculate the lengths of data in a column. The length depends on the data type e.g. text will be the length of the text, lists will be the number of elements in the list.

### Metadata

| Field | Value |
| --- | --- |
| ID | 4d7a5f66-0a4a-40e0-8298-d5c55754423d |
| Wrangle Key | `select.length` |
| Type | select |
| Subtype | length |
| Variant | stock |
| Status | active |
| Tags | Select, select, length |

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
| input | Input | list | Yes | Name of the input column(s). |  | ["Column A", "Column B"] |
| output | Output | list | No | If omitted, overwrites input. |  | ["Length Output"] |
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
    "Length Output"
  ]
}
```

### Examples

#### Selecting the Length of Data Within a Column

##### Recipe

```yaml
wrangles:
  - select.length:
      input: Part Code
      output: Part Code Length
```

##### Input Sample

| Part Code |
| --- |
| 6202 |

##### Output Sample

| Part Code Length |
| --- |
| 4 |

_Source: `docs/python/recipes/wrangles/select.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
