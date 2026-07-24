## Element

Select elements of lists or dictionaries using Python syntax like `col[1:3]['key']`.

### Metadata

| Field | Value |
| --- | --- |
| ID | 223d2f4e-3247-4189-8b6c-e73fe44c4266 |
| Wrangle Key | `select.element` |
| Type | select |
| Subtype | element |
| Variant | stock |
| Status | active |
| Tags | Select, select, element |

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
| input | Input | list | Yes | Name of the input column and sub elements This permits by index for lists or dict and by key for dicts e.g. col[0]['key'] // [\{"key":"val"\}] -&gt; "val" |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column(s) |  | ["Element Output"] |
| default | Default | json | No | Set the default value to return if the specified element does not exist. |  | "" |
| if | If | text | No | A condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Element Output"
  ],
  "default": ""
}
```

### Examples

#### Selecting The First Element

##### Recipe

```yaml
wrangles:
  - select.element:
      input: Column A[0]
      output: First Element
```

##### Input Sample

| Column A |
| --- |
| [A, 0.9] |
| [B, 0.8] |

##### Output Sample

| Column A | First Element |
| --- | --- |
| [A, 0.9] | A |
| [B, 0.8] | B |

_Source: `docs/python/recipes/wrangles/select.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
