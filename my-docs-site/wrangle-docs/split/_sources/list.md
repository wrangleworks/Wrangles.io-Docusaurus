## List

Split a list into multiple columns. If only one output is given, `split.list` returns the same list it was given, so output should be a list of columns or a column name with a wildcard (`*`).

### Metadata

| Field | Value |
| --- | --- |
| ID | 3260b9f7-aae2-499f-8004-d211c2cf643e |
| Wrangle Key | `split.list` |
| Type | split |
| Subtype | list |
| Variant | stock |
| Status | active |
| Tags | Split, split, list |

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
| input | Input | text | Yes | Name of the column to split. |  | "Column A" |
| output | Output | list | Yes | Output supports a wildcard to dynamically number the columns, such as `col*` -> `col1`, `col2`, `col3`. |  | ["List Output"] |
| if | If | text | No | A condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "input": "Column A",
  "output": [
    "List Output"
  ]
}
```

### Examples

#### Using a Wildcard

##### Recipe

```yaml
wrangles:
  - split.list:
      input: Column
      output: Column*
```

##### Input Sample

| Column |
| --- |
| ['A', 'B', 'C'] |

##### Output Sample

| Column1 | Column2 | Column3 |
| --- | --- | --- |
| A | B | C |

_Source: `docs/python/recipes/wrangles/split.md`_

#### Named Columns

##### Recipe

```yaml
wrangles:
  - split.list:
      input: Column
      output:
        - Heading A
        - Heading B
        - Heading C
```

##### Input Sample

| Column |
| --- |
| ['A', 'B', 'C'] |

##### Output Sample

| Heading A | Heading B | Heading C |
| --- | --- | --- |
| A | B | C |

_Source: `docs/python/recipes/wrangles/split.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/split.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/split |
| Legacy Path | docs/python/recipes/wrangles/split.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
