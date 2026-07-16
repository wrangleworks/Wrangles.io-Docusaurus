---
title: "Embeddings"
slug: "/wrangle/create/embeddings"
description: "Create an embedding based on text input."
wrangle_key: "create.embeddings"
wrangle_type: "create"
wrangle_subtype: "embeddings"
variant: "stock"
status: "active"
---

# Embeddings

Create an embedding based on text input.

## Metadata

| Field | Value |
| --- | --- |
| ID | e3518afd-a819-40ec-8b49-eb25690220c1 |
| Wrangle Key | `create.embeddings` |
| Type | create |
| Subtype | embeddings |
| Variant | stock |
| Status | active |
| Tags | Create, create, embeddings |

## Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | Yes |

## Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | The column of text to create the embeddings for. |  | ["Column A", "Column B"] |
| output | Output | list | No | The output column the embeddings will be saved as. |  | ["Embeddings Output"] |
| api_key | Api Key | text | Yes | The API key. |  | "" |
| batch_size | Batch Size | number | No | The number of rows to submit per individual request. |  | "" |
| model | Model | text | No | The specific model to use to generate the embeddings. |  | "" |
| output_type | Output Type | select | No | Output the embeddings as a numpy array or a python list Default - python list. | numpy array, python list | "" |
| precision | Precision | select | No | The precision of the embeddings. Default is float32. This should be used with output_type numpy array. | float16, float32 | "" |
| retries | Retries | number | No | The number of times to retry if the request fails. This will apply exponential backoff to help with rate limiting. |  | "" |
| threads | Threads | number | No | The number of requests to submit in parallel. Each request contains the number of rows set as batch_size. |  | "" |
| url | Url | text | No | Override the default url for the AI endpoint. |  | "" |

## Defaults

```json
{
  "url": "",
  "input": [
    "Column A",
    "Column B"
  ],
  "model": "",
  "output": [
    "Embeddings Output"
  ],
  "api_key": "",
  "retries": "",
  "threads": "",
  "precision": "",
  "batch_size": "",
  "output_type": ""
}
```

## Examples

### Creating Embeddings

#### Recipe

```yaml
wrangles:
  - create.embeddings:
      input: my_column
      api_key: ${my_key}
      output: embeddings
```

#### Input Sample

_No sample available._

#### Output Sample

| my_column (input) | embeddings (output) |
| --- | --- |
| angle grinder | [0.010793785, -0.010007165, 0.0028609, -0.0139...] |
| jig saw | [-0.008975127, 0.009314879, -0.024150735, -0.0...] |

_Source: `docs/python/recipes/wrangles/create.md`_

## Source

| Field | Value |
| --- | --- |
| Docs Path | docs/python/recipes/wrangles/create.md |
| Docs URL | /python/recipes/wrangles/create |
| Legacy Path | docs/python/recipes/wrangles/create.md |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |

