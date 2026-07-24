## Tokenize

Tokenize elements in a list or string into individual tokens.

### Metadata

| Field | Value |
| --- | --- |
| ID | 6cc88418-ae0c-43f6-84ee-31e0d5f838c3 |
| Wrangle Key | `split.tokenize` |
| Type | split |
| Subtype | tokenize |
| Variant | stock |
| Status | active |
| Tags | Split, split, tokenize |

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
| input | Input | list | Yes | Column(s) to split into tokens. |  | ["Column A", "Column B"] |
| output | Output | list | No | If omitted, overwrites input. |  | ["Tokenize Output"] |
| method | Method | select | No | Method to split the list. Options include `space`, `boundary`, `boundary_ignore_space`, custom functions as `custom.<function>`, or regex patterns as `regex:<pattern>`. | space, boundary, boundary_ignore_space | "" |
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
  "method": "",
  "output": [
    "Tokenize Output"
  ]
}
```

### Examples

#### Tokenizing a String

##### Recipe

```yaml
wrangles:
  - split.tokenize:
      input: Materials
      output: Tokenized List
```

##### Input Sample

| Materials |
| --- |
| Stainless Steel Oak Wood |

##### Output Sample

| Tokenized List |
| --- |
| ['Stainless', 'Steel', 'Oak', 'Wood'] |

_Source: `docs/python/recipes/wrangles/split.md`_


#### Tokenizing a List

##### Recipe

```yaml
wrangles:
  - split.tokenize:
      input: Materials
      output: Tokenized List
```

##### Input Sample

| Materials |
| --- |
| ['Stainless Steel', 'Oak Wood'] |

##### Output Sample

| Tokenized List |
| --- |
| ['Stainless', 'Steel', 'Oak', 'Wood'] |

_Source: `docs/python/recipes/wrangles/split.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/split.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/split |
| Legacy Path | docs/python/recipes/wrangles/split.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
