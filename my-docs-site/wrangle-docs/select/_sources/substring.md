## Substring

Return characters from the middle of text.

### Metadata

| Field | Value |
| --- | --- |
| ID | 8befddf8-602e-4fa9-8f16-4c547210ebec |
| Wrangle Key | `select.substring` |
| Type | select |
| Subtype | substring |
| Variant | stock |
| Status | active |
| Tags | Select, select, substring |

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
| output | Output | list | No | Name of the output column(s) |  | ["Substring Output"] |
| length | Length | number | No | The length of the string to select. If omitted, selects to the end of the string and `start` must be provided. |  | "" |
| start | Start | number | No | The position of the first character to select. If omitted, starts from the beginning and `length` must be provided. |  | "" |
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
  "start": "",
  "length": "",
  "output": [
    "Substring Output"
  ]
}
```

### Examples

#### Selecting a Substring With Start and Length

##### Recipe

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
      length: 3
```

##### Input Sample

| Column |
| --- |
| pudding |

##### Output Sample

| Result |
| --- |
| udd |

_Source: `docs/python/recipes/wrangles/select.md`_

#### Selecting a Substring With Start Only

##### Recipe

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
```

##### Input Sample

| Column |
| --- |
| pudding |

##### Output Sample

| Result |
| --- |
| udding |

_Source: `docs/python/recipes/wrangles/select.md`_

#### Selecting a Substring With Length Only

##### Recipe

```yaml
wrangles:
  - select.substring:
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
