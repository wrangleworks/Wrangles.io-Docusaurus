## Hash

Create a hash of a column.

### Metadata

| Field | Value |
| --- | --- |
| ID | 11e8fc13-00d2-4779-8d87-6288b07de7e7 |
| Wrangle Key | `create.hash` |
| Type | create |
| Subtype | hash |
| Variant | stock |
| Status | active |
| Tags | Create, create, hash |

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
| input | Input | list | Yes | Name of input column. |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Name or list of names for the new columns. |  | ["Hash Output"] |
| method | Method | select | No | Method to use to hash the input. Defaults to `md5`. | md5, sha1, sha256, sha512 | "" |
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
  "method": "",
  "output": [
    "Hash Output"
  ]
}
```

### Examples

#### Creating a New Hash Column

##### Recipe

```yaml
wrangles:
  - create.hash:
      input: Description
      output: hash
      method: md5
```

##### Input Sample

| Description |
| --- |
| The wrench is blue |
| The hammer is yellow |

##### Output Sample

| New Column |
| --- |
| ce114e4501d2f4e2dcea3e17b546f339 |
| a54d88e06612d820bc3be72877c74f257b561b19 |

_Source: `docs/python/recipes/wrangles/create.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
