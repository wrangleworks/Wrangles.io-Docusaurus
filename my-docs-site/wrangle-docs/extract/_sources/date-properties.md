## Date Properties

Extract date properties from a date, such as day, month, year, weekday, or quarter.

### Metadata

| Field | Value |
| --- | --- |
| ID | a346de62-93cd-44ba-8d30-a6305629c6d7 |
| Wrangle Key | `extract.date_properties` |
| Type | extract |
| Subtype | date_properties |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, date_properties |

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
| input | Input | list | Yes | Name of the input column |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output columns |  | ["Date Properties Output"] |
| property | Property | select | Yes | Property to extract from date | day, day_of_year, month, month_name, weekday, week_day_name, week_year, quarter | "day" |
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
    "Date Properties Output"
  ],
  "property": "day"
}
```

### Examples

#### Extracting Month From Date

##### Recipe

```yaml
wrangles:
  - extract.date_properties:
      input: Date
      output: Output
      property: month_name
```

##### Input Sample

_No sample available._

##### Output Sample

| Date | Output |
| --- | --- |
| 1992-08-13 00:00:00 | August |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
