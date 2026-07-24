## Transpose

Transpose a dataframe.

### Metadata

| Field | Value |
| --- | --- |
| ID | 8716347f-f286-49b2-8a0b-cb73292e7475 |
| Wrangle Key | `transpose` |
| Type | transform |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Transform, transpose |

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
| header_column | Header Column | text | No | Name or position of the column that will be used as the column headings for the transposed DataFrame. Default 0 (first column). Use `header_column = null` to not use any column as header. |  | "" |
| if | If | text | No | A condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "header_column": ""
}
```

### Examples

:::note
Transpose is not compatible with `where` filtering.
:::

#### Transposing a Dataframe

##### Recipe

```yaml
wrangles:
  - transpose:
      header_column: Material
```

##### Input Sample

| Material | Product Data |
| --- | --- |
| Ceramic | SKF ball brg |
| Rubber | brg seal |

##### Output Sample

| Material | Ceramic | Rubber |
| --- | --- | --- |
| Product Data | SKF ball brg | brg seal |

_Source: `docs/python/recipes/wrangles/utilities.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/utilities.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/utilities |
| Legacy Path | docs/python/recipes/wrangles/utilities.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
