---
title: "Create Wrangles"
slug: /wrangle/create
description: "Create wrangles add new data such as generated IDs, bins, indexes, hashes, embeddings, or templated text."
wrangle_type: "create"
wrangle_count: 8
---

# Create Wrangles

Create wrangles add new data such as generated IDs, bins, indexes, hashes, embeddings, or templated text.

## Metadata

| Field | Value |
| --- | --- |
| Type | create |
| Wrangle Count | 8 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Bins

Create a column that groups data into bins

- Wrangle key: `create.bins`
- Parameters: `4`
- Examples: `2`
- Page: [Bins](./bins)

## Column

Create column(s) with a user defined value. Defaults to None (empty).

- Wrangle key: `create.column`
- Parameters: `2`
- Examples: `3`
- Page: [Column](./column)

## Embeddings

Create an embedding based on text input.

- Wrangle key: `create.embeddings`
- Parameters: `10`
- Examples: `1`
- Page: [Embeddings](./embeddings)

## Guid

Create column(s) with a GUID.

- Wrangle key: `create.guid`
- Parameters: `1`
- Examples: `0`
- Page: [Guid](./guid)

## Hash

Create a hash of a column

- Wrangle key: `create.hash`
- Parameters: `3`
- Examples: `1`
- Page: [Hash](./hash)

## Index

Create column(s) with an incremental index. e.g. 1,2,3...

- Wrangle key: `create.index`
- Parameters: `4`
- Examples: `1`
- Page: [Index](./index)

## Jinja

Output text using a jinja template

- Wrangle key: `create.jinja`
- Parameters: `3`
- Examples: `1`
- Page: [Jinja](./jinja)

## Uuid

Create column(s) with a UUID.

- Wrangle key: `create.uuid`
- Parameters: `1`
- Examples: `1`
- Page: [Uuid](./uuid)
