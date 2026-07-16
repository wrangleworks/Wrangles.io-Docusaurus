---
title: "Format Wrangles"
slug: /wrangle/format
description: "Format wrangles clean, standardize, translate, pad, trim, or otherwise reformat existing values."
wrangle_type: "format"
wrangle_count: 13
---

# Format Wrangles

Format wrangles clean, standardize, translate, pad, trim, or otherwise reformat existing values.

## Metadata

| Field | Value |
| --- | --- |
| Type | format |
| Wrangle Count | 13 |
| Generated Source | `public.wranglesio_content` |

## Wrangles

## Clean Whitespaces

Condense multiple spaces to a single space and convert special space characters to a standard space.

- Wrangle key: `clean_whitespaces`
- Parameters: `4`
- Examples: `0`
- Page: [Clean Whitespaces](./clean-whitespaces)

## Dates

Format a date

- Wrangle key: `format.dates`
- Parameters: `3`
- Examples: `1`
- Page: [Dates](./dates)

## Pad

Pad a string to a fixed length

- Wrangle key: `format.pad`
- Parameters: `6`
- Examples: `1`
- Page: [Pad](./pad)

## Prefix

Add a prefix to a column

- Wrangle key: `format.prefix`
- Parameters: `4`
- Examples: `1`
- Page: [Prefix](./prefix)

## Remove Duplicates

Remove duplicates from a list. Preserves input order.

- Wrangle key: `format.remove_duplicates`
- Parameters: `3`
- Examples: `1`
- Page: [Remove Duplicates](./remove-duplicates)

## Remove Words

Remove all the elements that occur in one list from another.

- Wrangle key: `remove_words`
- Parameters: `5`
- Examples: `1`
- Page: [Remove Words](./remove-words)

## Replace

Quick find and replace for simple values. Can use regex if 'input' in params and isinstance(params['input'], list):in the find field.

- Wrangle key: `replace`
- Parameters: `4`
- Examples: `1`
- Page: [Replace](./replace)

## Round

Round column(s) to the specified decimals

- Wrangle key: `round`
- Parameters: `3`
- Examples: `1`
- Page: [Round](./round)

## Significant Figures

Format a value to a specific number of significant figures

- Wrangle key: `format.significant_figures`
- Parameters: `3`
- Examples: `1`
- Page: [Significant Figures](./significant-figures)

## Standardize

Standardize data using a DIY or bespoke standardization wrangle. Requires WrangleWorks Account and Subscription.

- Wrangle key: `standardize`
- Parameters: `4`
- Examples: `1`
- Page: [Standardize](./standardize)

## Suffix

Add a suffix to a column

- Wrangle key: `format.suffix`
- Parameters: `4`
- Examples: `1`
- Page: [Suffix](./suffix)

## Translate

Translate the input to a different language. Requires WrangleWorks Account and DeepL API Key (A free account for up to 500,000 characters per month is available).

- Wrangle key: `translate`
- Parameters: `4`
- Examples: `1`
- Page: [Translate](./translate)

## Trim

Remove excess whitespace at the start and end of text.

- Wrangle key: `format.trim`
- Parameters: `2`
- Examples: `1`
- Page: [Trim](./trim)
