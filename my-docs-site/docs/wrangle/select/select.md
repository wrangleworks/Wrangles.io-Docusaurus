---
title: "Select Wrangles"
slug: /wrangle/select
description: "Select wrangles choose rows, columns, elements, substrings, or values from existing data."
wrangle_type: "select"
wrangle_count: 17
---

# Select Wrangles

Select wrangles choose rows, columns, elements, substrings, or values from existing data.

## Metadata

| Field | Value |
| --- | --- |
| Type | select |
| Wrangle Count | 17 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Columns

Select columns from the dataframe

- Wrangle key: `select.columns`
- Parameters: `1`
- Examples: `1`
- Page: [Columns](./columns)

## Dictionary Element

Select one or more element of a dictionary.

- Wrangle key: `select.dictionary_element`
- Parameters: `4`
- Examples: `6`
- Page: [Dictionary Element](./dictionary-element)

## Drop

Drop (Delete) selected column(s)

- Wrangle key: `drop`
- Parameters: `1`
- Examples: `1`
- Page: [Drop](./drop)

## Element

Select elements of lists or dicts using python syntax like col[0]['key']

- Wrangle key: `select.element`
- Parameters: `3`
- Examples: `1`
- Page: [Element](./element)

## Filter

Filter the dataframe based on the contents.

- Wrangle key: `filter`
- Parameters: `13`
- Examples: `1`
- Page: [Filter](./filter)

## Group By

Group and aggregate the data

- Wrangle key: `select.group_by`
- Parameters: `17`
- Examples: `2`
- Page: [Group By](./group-by)

## Head

Return the first n rows

- Wrangle key: `select.head`
- Parameters: `1`
- Examples: `1`
- Page: [Head](./head)

## Highest Confidence

Select the option with the highest confidence from multiple columns. Inputs are expected to be of the form [<<value>>, <<confidence_score>>].

- Wrangle key: `select.highest_confidence`
- Parameters: `2`
- Examples: `2`
- Page: [Highest Confidence](./highest-confidence)

## Left

Return characters from the left of text. Strings shorter than the length defined will be unaffected.

- Wrangle key: `select.left`
- Parameters: `3`
- Examples: `1`
- Page: [Left](./left)

## Length

Calculate the lengths of data in a column. The length depends on the data type e.g. text will be the length of the text, lists will be the number of elements in the list.

- Wrangle key: `select.length`
- Parameters: `2`
- Examples: `1`
- Page: [Length](./length)

## List Element

Select a numbered element of a list (zero indexed).

- Wrangle key: `select.list_element`
- Parameters: `4`
- Examples: `1`
- Page: [List Element](./list-element)

## Right

Return characters from the right of text. Strings shorter than the length defined will be unaffected.

- Wrangle key: `select.right`
- Parameters: `3`
- Examples: `1`
- Page: [Right](./right)

## Sample

Return a random sample of the rows

- Wrangle key: `select.sample`
- Parameters: `1`
- Examples: `2`
- Page: [Sample](./sample)

## Sort

Sort the data

- Wrangle key: `sort`
- Parameters: `2`
- Examples: `1`
- Page: [Sort](./sort)

## Substring

Return characters from the middle of text.

- Wrangle key: `select.substring`
- Parameters: `4`
- Examples: `3`
- Page: [Substring](./substring)

## Tail

Return the last n rows

- Wrangle key: `select.tail`
- Parameters: `1`
- Examples: `1`
- Page: [Tail](./tail)

## Threshold

Select the first option if it exceeds a given threshold, else the second option.

- Wrangle key: `select.threshold`
- Parameters: `3`
- Examples: `1`
- Page: [Threshold](./threshold)
