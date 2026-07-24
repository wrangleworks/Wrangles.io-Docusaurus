## Copy

Create a copy of columns in a dataframe.

### Metadata

| Field | Value |
| --- | --- |
| ID | b002fbdc-92c0-4347-889d-0f4bfeec99fa |
| Wrangle Key | `copy` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, copy |

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
| input | Input | list | Yes | The column(s) to copy. |  | ["Column A", "Column B"] |
| output | Output | list | Yes | The name of the output column(s). |  | ["Copy Output"] |
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
    "Copy Output"
  ]
}
```

### Examples

#### Copying a Column With Input and Output

##### Recipe

```yaml
wrangles:
  - copy:
      input: Product Data
      output: Product Data (copy)
```

##### Input Sample

| Product Data |
| --- |
| SKF ball brg |
| brg seal |

##### Output Sample

| Product Data | Product Data (copy) |
| --- | --- |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

#### Copying a Column Express as a Dictionary

##### Recipe

```yaml
wrangles:
  - copy:
      Product Data: Product Data (copy)
```

##### Input Sample

| Product Data |
| --- |
| SKF ball brg |
| brg seal |

##### Output Sample

| Product Data | Product Data (copy) |
| --- | --- |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
