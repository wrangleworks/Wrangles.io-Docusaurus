## GUID

Create a column with a GUID (Globally Unique Identifier).

### Metadata

| Field | Value |
| --- | --- |
| ID | cf3aaab2-3d5b-4c9b-826e-7af7510521c9 |
| Wrangle Key | `create.guid` |
| Type | create |
| Subtype | guid |
| Variant | stock |
| Status | active |
| Tags | Create, create, guid |

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
| output | Output | list | Yes | Name or list of names for the new columns. |  | ["Guid Output"] |
| where | Where | text | No | Filter rows before applying the wrangle using SQL-like criteria, such as `column1 = 123 OR column2 = 'abc'`. |  |  |
| where_params | Where Params | json | No | Variables to use with `where` for parameterized criteria. Uses SQLite syntax such as `?` or `:name`. |  |  |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "output": [
    "Guid Output"
  ]
}
```

### Examples

#### Creating a New GUID Column

##### Recipe

```yaml
wrangles:
  - create.guid:
      output: GUID Column

  # OR

  - create.uuid:
      output: GUID Column
```

##### Input Sample

_No sample available._

##### Output Sample

| GUID Column |
| --- |
| 9a13b4dd-1993-4bd2-8974-3f9a0f006d86 |
| 1528d918-ecd7-457c-b44d-3d30705696d3 |

_Source: `docs/python/recipes/wrangles/create.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
