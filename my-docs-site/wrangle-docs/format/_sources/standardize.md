## Standardize

Run a standardize wrangle, such as one that expands abbreviations. A standardization wrangle must be trained first.

### Metadata

| Field | Value |
| --- | --- |
| ID | 53cd3fdd-24e2-4411-8655-6014b92a3f3a |
| Wrangle Key | `standardize` |
| Type | format |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Format, standardize |

### Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | Yes |
| Requires subscription | Yes |
| Requires external API key | No |

### Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name or list of input columns. |  | ["Column A", "Column B"] |
| output | Output | list | No | If omitted, overwrites input. |  | ["Standardize Output"] |
| case_sensitive | Case Sensitive | boolean | No | Allows the wrangle to be case sensitive if set to True, default is False. |  | false |
| model_id | Model Id | list | Yes | The ID of the wrangle to use (do not include `find` and `replace`). |  | [] |
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
    "Standardize Output"
  ],
  "model_id": [],
  "case_sensitive": false
}
```

### Examples

#### Replacing Abbreviations

##### Recipe

```yaml
wrangles:
  - standardize:
      input: Abbrev
      output: Abbreviations
      model_id: code_here
```

##### Input Sample

| Abbrev |
| --- |
| ASAP |
| ETA |

##### Output Sample

| Abbreviations |
| --- |
| As Soon As Possible |
| Estimated Time of Arrival |

_Source: `docs/python/recipes/wrangles/standalone.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | https://wrangles.io/en/python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
