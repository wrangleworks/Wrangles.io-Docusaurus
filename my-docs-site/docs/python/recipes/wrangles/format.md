---
title: Format
slug: /python/recipes/wrangles/format
---

import RecipePlayground from '@site/src/components/RecipePlayground';


> Click [here](/excel/format) to learn how to use Format Wrangles in Excel.
\{.is-success\}

# Dates
<!-- wrangle: {"type":"format.dates","model_id":"a3c15135-4f7a-4659-83fd-f657afa603c9"} -->
Format a date into desired pattern

## Tabset \{.tabset\}
### Sample

#### Changing The Format of a Date

```yaml
wrangles:
  - format.dates:
      input: Date
      output: Output Format
      format: '%Y-%m-%d'  # must be wrapped by quotes " or '
```

| Date      | Output Format   |
|:----------|:----------------|
| 6/23/1912 | 1912-06-23      |

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If none given, overwrites input |
| format | ✓ | str | String pattern to format date |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Pad
<!-- wrangle: {"type":"format.pad","model_id":"76c19378-38f4-45aa-85d1-3cdf8f8aae29"} -->
Pad a string to a fixed length

## Tabset \{.tabset\}
### Sample

#### Adding Dashes to Part Numbers

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - format.pad:\n      input: Part Number\n      pad_length: 5\n      side: left\n      char: \"-\""}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Part Number |\n| :-----: |\n| 0458 |\n| 396 |\n| 84 |\n| 98516 |\n\n</td><td>\n→ \n</td><td>\n  \n| Part Number |\n| :-----: |\n| -0458 |\n| --396 |\n| ---84 |\n| 98516 |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If none given, overwrites input |
| pad_length | ✓ | int | Length for the output |
| side | ✓ | left/ right/ both | Side from which to fill resulting string. |
| char | ✓ | str | The character to pad the input with |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Prefix
<!-- wrangle: {"type":"format.prefix","model_id":"c12f99b9-2363-4da7-8405-7c73b87906e5"} -->
Add a prefix to a column.

## Tabset \{.tabset\}
### Sample

#### Adding a Prefix to a String

```yaml
wrangles:
  - format.prefix:
      input: Data
      output: Prefix
      value: anti
```

| Data   | Prefix     |
|:-------|:-----------|
| freeze | antifreeze |
| dote   | antidote   |
| hero   | antihero   |

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If none given, overwrites input |
| value | ✓ | str | Prefix value to add |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Remove Duplicates
<!-- wrangle: {"type":"format.remove_duplicates","model_id":"283b9e78-b2b2-43d0-844f-9842c33120aa"} -->
Removed duplicate values in a list.

## Tabset \{.tabset\}
### Sample

#### Removing Duplicates From a List

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n    - format.remove_duplicates:\n        input: Attack of the Clones\n        output: Commander\n        where: Rank = Commander"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Attack of the Clones     | Rank |\n|:-------------------------|:-----|\n| ['Cody', 'Cody', 'Cody'] | Commander |\n| ['Rex', 'Rex', 'Rex'] | Captain |\n\n</td><td>\n→ \n</td><td>\n  \n| Attack of the Clones     | Rank | Commander|\n|:-------------------------|:-----|:---------|\n| ['Cody', 'Cody', 'Cody'] | Commander | ['Cody'] |\n| ['Rex', 'Rex', 'Rex'] | Captain | |\n  \n</td></tr>\n</table>\n</div>"}
/>


### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If none given, overwrites input |
| ignore_case | | bool | Ignore case when removing duplicates. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Significant Figures
<!-- wrangle: {"type":"format.significant_figures","model_id":"a359f72a-5250-4dd8-84f6-8a8173bee0f6"} -->
Format a value to a specific number of significant figures

## Tabset \{.tabset\}
### Sample

#### Rounding to Significant Figures

```yaml
wrangles:
  - format.significant_figures:
      input: Data
      significant_figures: 2
      output: Data to 2 Figures
```

| Data | Data to 2 Figures |
|:-----|:------------------|
| 1.25 | 1.2 |
| 12.3 | 12 |
| 55.6 | 55 |

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| significant_figures | Number of significant figures to format to. Default is 3. | 
| output | | str, list | Name of the output column. If none given, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Suffix
<!-- wrangle: {"type":"format.suffix","model_id":"8d127060-ba2d-4934-897f-07662e01e40b"} -->
Add a suffix to a column

## Tabset \{.tabset\}
### Sample

#### Adding a Suffix to a String

```yaml
wrangles:
  - format.suffix:
      input: Data
      output: Suffix
      value: ic
```

| Data   | Suffix   |
|:-------|:---------|
| sto    | stoic    |
| hero   | heroic   |
| icon   | iconic   |

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| output | | str, list | If none given, overwrites input |
| value | ✓ | str | Suffix value to add |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Trim
<!-- wrangle: {"type":"format.trim","model_id":"af16b3c1-c230-4868-8ebe-f574904a0c76"} -->
Remove excess whitespace at the start and end of text. Can accept multiple columns.

## Tabset \{.tabset\}
### Sample

#### Trimming a String

```yaml
- format.trim:
    input:
      - col1
    output: col1 trimmed
```
| col1 | col1 trimmed |
|:-------------------------|:---------|
|     Hello World      | Hello World |

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If none given, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>