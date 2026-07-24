## Left

Select characters from the left of the input. Using a negative length reverses the side of selection, selecting from the right.

### Metadata

| Field | Value |
| --- | --- |
| ID | 5cdd9857-0c77-43bf-80d7-d0a8cb6f980b |
| Wrangle Key | `select.left` |
| Type | select |
| Subtype | left |
| Variant | stock |
| Status | active |
| Tags | Select, select, left |

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
| input | Input | list | Yes | Name of the column(s) to edit |  | ["Column A", "Column B"] |
| output | Output | list | No | If omitted, overwrites input. |  | ["Left Output"] |
| length | Length | number | Yes | Number of characters to include. |  | "" |
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
  "length": "",
  "output": [
    "Left Output"
  ]
}
```

### Examples

#### Selecting Three Leftmost Elements

##### Recipe

```yaml
wrangles:
  - select.left:
      input: Column
      output: Result
      length: 3
```

##### Input Sample

| Column |
| --- |
| pudding |

##### Output Sample

| Result |
| --- |
| pud |

_Source: `docs/python/recipes/wrangles/select.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
