## From YAML

Convert a YAML representation into an object.

### Metadata

| Field | Value |
| --- | --- |
| ID | b1c20004-5f80-41c2-84d2-2d4601a033b5 |
| Wrangle Key | `convert.from_yaml` |
| Type | convert |
| Subtype | from_yaml |
| Variant | stock |
| Status | active |
| Tags | Convert, convert, from_yaml |

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
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column. If omitted, the input column will be overwritten. |  | ["From Yaml Output"] |
| default | Default | boolean | No | Value to return if the row is empty or fails to be parsed as YAML. |  | false |
| if | If | text | No | Condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "From Yaml Output"
  ],
  "default": false
}
```

### Examples

#### Convert YAML To An Object

##### Recipe

```yaml
wrangles:
  - convert.from_yaml:
      input: column 1
```

##### Input Sample

```yaml
Product Specs:
  length: 6 inch
  voltage: 24V
  weight: 3lb
```

##### Output Sample

```python
{
  'Product Specs': {
    'length': '6 inch',
    'voltage': '24V',
    'weight': '3lb'
  }
}
```

_Source: `docs/python/recipes/wrangles/convert.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/convert.md |
| Docs URL | /python/recipes/wrangles/convert |
| Legacy Path | docs/python/recipes/wrangles/convert.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
