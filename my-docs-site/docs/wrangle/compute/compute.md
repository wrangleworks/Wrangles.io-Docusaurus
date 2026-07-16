---
title: "Compute Wrangles"
slug: /wrangle/compute
description: "Compute wrangles calculate values using SQL, Python, math, search scoring, or conditional logic."
wrangle_type: "compute"
wrangle_count: 5
---

# Compute Wrangles

Compute wrangles calculate values using SQL, Python, math, search scoring, or conditional logic.

## Metadata

| Field | Value |
| --- | --- |
| Type | compute |
| Wrangle Count | 5 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Case When

Assign values to a column based on conditional logic

- Wrangle key: `compute.case_when`
- Parameters: `3`
- Examples: `0`
- Page: [Case When](./case-when)

## Math

Apply a mathematical calculation.

- Wrangle key: `math`
- Parameters: `2`
- Examples: `1`
- Page: [Math](./math)

## Python

Apply a simple single-line python command. For more complex python use a custom function.

- Wrangle key: `python`
- Parameters: `4`
- Examples: `4`
- Page: [Python](./python)

## Score Search Results

Scores and filters search results based on progressive partial/exact matching. Can return dictionaries or a parallel list of formatted strings.

- Wrangle key: `compute.score_search_results`
- Parameters: `16`
- Examples: `0`
- Page: [Score Search Results](./score-search-results)

## Sql

Apply a SQL command to the current dataframe. Only SELECT statements are supported - the result will be the output.

- Wrangle key: `sql`
- Parameters: `2`
- Examples: `1`
- Page: [Sql](./sql)
