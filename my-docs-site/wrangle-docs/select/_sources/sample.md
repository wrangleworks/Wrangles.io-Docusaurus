## Sample

Return a random sample of the rows

### Metadata

| Field | Value |
| --- | --- |
| ID | 95a84ab6-a66e-450f-8a4a-7a87e3a77932 |
| Wrangle Key | `select.sample` |
| Type | select |
| Subtype | sample |
| Variant | stock |
| Status | active |
| Tags | Select, select, sample |

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
| rows | Rows | number | Yes | If a whole number, will select that number of rows. |  | "" |
| if | If | text | No | A condition that determines whether the action runs as a whole. |  |  |

### Defaults

```json
{
  "rows": ""
}
```

### Examples

#### Selecting 2 Random Rows

##### Recipe

```yaml
wrangles:
  - select.sample:
      rows: 2
```

##### Input Sample

| Product | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Bearing Race | Timken |
| Needle Bearing | Acme Bearings |
| Roller Bearing | General Bearing Co. |

##### Output Sample

| Product | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Needle Bearing | Acme Bearings |

_Source: `docs/python/recipes/wrangles/select.md`_

#### Selecting a Random 25% of All Rows

##### Recipe

```yaml
wrangles:
  - select.sample:
      rows: .25
```

##### Input Sample

| Product | Manufacturer |
| --- | --- |
| Ball Bearing | SKF |
| Bearing Race | Timken |
| Needle Bearing | Acme Bearings |
| Roller Bearing | General Bearing Co. |

##### Output Sample

| Product | Manufacturer |
| --- | --- |
| Needle Bearing | Acme Bearings |

_Source: `docs/python/recipes/wrangles/select.md`_

### Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/select.md |
| Docs URL | https://wrangles.io/python/recipes/wrangles/select |
| Legacy Path | docs/python/recipes/wrangles/select.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
