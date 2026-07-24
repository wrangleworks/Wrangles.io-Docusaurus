## Date Range

Extract date range frequency from two dates.

### Metadata

| Field | Value |
| --- | --- |
| ID | 9cebfa6f-a524-4aec-84a7-02d77b792843 |
| Wrangle Key | `extract.date_range` |
| Type | extract |
| Subtype | date_range |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, date_range |

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
| output | Output | text | Yes | Name of the output column |  | "Date Range Output" |
| end_time | End Time | text | Yes | Name of the end date column |  | "" |
| range | Range | select | No | Type of frequency to count. Defaults to day. | business days, days, weeks, months, semi months, business month ends, month starts, semi month starts, business month starts, quarters, quarter starts, years, business hours, hours, minutes, seconds, milliseconds | "business days" |
| start_time | Start Time | text | Yes | Name of the start date column |  | "" |
| where | Where | text | No | Filter rows before applying the wrangle using SQL-like criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` for parameterized criteria. Uses SQLite syntax such as `?` or `:name`. |  |  |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |


### Defaults

```json
{
  "range": "business days",
  "output": "Date Range Output",
  "end_time": "",
  "start_time": ""
}
```

### Range Options

- `business days`
- `days`
- `weeks`
- `months`
- `semi months`
- `business month ends`
- `month starts`
- `semi month starts`
- `business month starts`
- `quarters`
- `quarter starts`
- `years`
- `business hours`
- `hours`
- `minutes`
- `seconds`
- `milliseconds`

### Examples

#### Extracting Number of Months From Range

##### Recipe

```yaml
wrangles:
  - extract.date_range:
      start_time: Start
      end_time: End
      output: Output
      range: months
```

##### Input Sample

_No sample available._

##### Output Sample

| End | Start | Output |
| --- | --- | --- |
| 2023-08-13 00:00:00 | 1992-08-13 00:00:00 | 371 |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
