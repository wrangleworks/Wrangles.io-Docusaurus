## Dates

Format a date into the desired pattern.

### Metadata

| Field | Value |
| --- | --- |
| ID | a3c15135-4f7a-4659-83fd-f657afa603c9 |
| Wrangle Key | `format.dates` |
| Type | format |
| Subtype | dates |
| Variant | stock |
| Status | active |
| Tags | Format, format, dates |

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
| output | Output | list | No | If none given, overwrites input. |  | ["Dates Output"] |
| format | Format | text | Yes | String pattern to format date |  | "" |
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
  "format": "",
  "output": [
    "Dates Output"
  ]
}
```

### Examples

#### Changing The Format of a Date

##### Recipe

```yaml
wrangles:
  - format.dates:
      input: Date
      output: Output Format
      format: '%Y-%m-%d'  # must be wrapped by quotes " or '
```

##### Input Sample

| Date |
| --- |
| 6/23/1912 |

##### Output Sample

| Date | Output Format |
| --- | --- |
| 6/23/1912 | 1912-06-23 |

_Source: `docs/python/recipes/wrangles/format.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/format.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/format |
| Legacy Path | docs/python/recipes/wrangles/format.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
