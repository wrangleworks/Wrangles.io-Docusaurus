---
title: "Merge Wrangles"
slug: /wrangle/merge
description: "Merge wrangles combine multiple columns, lists, dictionaries, or values into a single output."
wrangle_type: "merge"
wrangle_count: 7
---

# Merge Wrangles

Merge wrangles combine multiple columns, lists, dictionaries, or values into a single output.

## Metadata

| Field | Value |
| --- | --- |
| Type | merge |
| Wrangle Count | 7 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Coalesce

Take the first non-empty value from a series of columns or lists.

- Wrangle key: `merge.coalesce`
- Parameters: `2`
- Examples: `1`
- Page: [Coalesce](./coalesce)

## Concatenate

Concatenate a list of columns or a list within a single column.

- Wrangle key: `merge.concatenate`
- Parameters: `4`
- Examples: `2`
- Page: [Concatenate](./concatenate)

## Dictionaries

Take dictionaries in multiple columns and merge them to a single dictionary.

- Wrangle key: `merge.dictionaries`
- Parameters: `3`
- Examples: `3`
- Page: [Dictionaries](./dictionaries)

## Key Value Pairs

Create a dictionary from keys and values in paired columns e.g. COLUMN_NAME_1, COLUMN_VALUE_1, COLUMN_NAME_2, COLUMN_VALUE_2 ...

- Wrangle key: `merge.key_value_pairs`
- Parameters: `3`
- Examples: `2`
- Page: [Key Value Pairs](./key-value-pairs)

## Lists

Take lists in multiple columns and merge them to a single list.

- Wrangle key: `merge.lists`
- Parameters: `5`
- Examples: `1`
- Page: [Lists](./lists)

## To Dict

Take multiple columns and merge them to a dictionary (aka object) using the column headers as keys.

- Wrangle key: `merge.to_dict`
- Parameters: `3`
- Examples: `1`
- Page: [To Dict](./to-dict)

## To List

Take multiple columns and merge them to a list.

- Wrangle key: `merge.to_list`
- Parameters: `3`
- Examples: `1`
- Page: [To List](./to-list)
