## Brackets

Extract text in brackets from the input.

### Metadata

| Field | Value |
| --- | --- |
| ID | 9b4c15fa-2aaa-40c8-8834-6e835760bee5 |
| Wrangle Key | `extract.brackets` |
| Type | extract |
| Subtype | brackets |
| Variant | stock |
| Status | active |
| Tags | Extract, extract, brackets |

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
| output | Output | list | Yes | Name of the output columns |  | ["Brackets Output"] |
| find | Find | list | No | (Optional) The type of brackets to find (round '()', square '[]', curly '\{\}', angled '&lt;&gt;'). Default is all brackets. |  | [] |
| first_element | First Element | boolean | No | Get the first element from results. Defaults to false. |  |  |
| include_brackets | Include Brackets | boolean | No | Include the brackets in the output. |  | false |
| where | Where | text | No | Filter rows before applying the wrangle using SQL-like criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` for parameterized criteria. Uses SQLite syntax such as `?` or `:name`. |  |  |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |


### Defaults

```json
{
  "find": [],
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Brackets Output"
  ],
  "include_brackets": false
}
```

### Examples

#### Extracting Data Within Brackets

##### Recipe

```yaml
wrangles:
  - extract.brackets:
      input: Data
      output: Output
```

##### Input Sample

_No sample available._

##### Output Sample

| Data | Output |
| --- | --- |
| `{Hello}` | Hello |
| `[Wrangles]` | Wrangles |
| `(!)` | ! |
| `<!>` | ! |

_Source: `docs/python/recipes/wrangles/extract.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/extract.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/extract |
| Legacy Path | docs/python/recipes/wrangles/extract.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
