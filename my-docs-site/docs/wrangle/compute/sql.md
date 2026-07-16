---
title: "Sql"
slug: "/wrangle/compute/sql"
description: "Apply a SQL command to the current dataframe. Only SELECT statements are supported - the result will be the output."
wrangle_key: "sql"
wrangle_type: "compute"
wrangle_subtype: ""
variant: "stock"
status: "active"
---

# Sql

Apply a SQL command to the current dataframe. Only SELECT statements are supported - the result will be the output.

## Metadata

| Field | Value |
| --- | --- |
| ID | 467a06b1-a697-4d31-8061-7d83a719fd79 |
| Wrangle Key | `sql` |
| Type | compute |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | Compute, sql |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| command | Command | text | Yes | SQL Command. The table is called df. For specific SQL syntax, this uses the SQLite dialect. |  | "" |
| params | Params | json | No | Variables to use in conjunctions with query. |  | "" |

## Defaults

```json
{
  "params": "",
  "command": ""
}
```

## Examples

### Selecting a Subset of Data

#### Recipe

```yaml
wrangles:
  - sql:
      command: |
        SELECT header1, header2
        FROM df
        WHERE header1 >= 2
```

#### Input Sample

| header1 | header2 | header3 |
| --- | --- | --- |
| 1 | a | x |
| 2 | b | y |
| 3 | c | z |

#### Output Sample

| header1 | header2 |
| --- | --- |
| 2 | b |
| 3 | c |

_Source: `docs/python/recipes/wrangles/standalone.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/standalone.md |
| Docs URL | /python/recipes/wrangles/standalone |
| Legacy Path | docs/python/recipes/wrangles/standalone.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

