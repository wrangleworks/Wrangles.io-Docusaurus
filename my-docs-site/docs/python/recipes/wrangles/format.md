---
title: "Format"
slug: /python/recipes/wrangles/format
---

> Click [here](/excel/format) to learn how to use Format Wrangles in Excel.
\{.is-success\}

# Dates&lt;br>
Format a date into desired pattern&lt;br>

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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If none given, overwrites input |
| format | ✓ | str | String pattern to format date |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Pad&lt;br>
Pad a string to a fixed length&lt;br>

## Tabset \{.tabset\}
### Sample

#### Adding Dashes to Part Numbers

```yaml
wrangles:
  - format.pad:
      input: Part Number
      pad_length: 5
      side: left
      char: "-"
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Part Number |
| :-----: |
| 0458 |
| 396 |
| 84 |
| 98516 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Part Number |
| :-----: |
| -0458 |
| --396 |
| ---84 |
| 98516 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
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
&lt;/div>

# Prefix&lt;br>
Add a prefix to a column.&lt;br>

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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If none given, overwrites input |
| value | ✓ | str | Prefix value to add |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Remove Duplicates&lt;br>
Removed duplicate values in a list.&lt;br>

## Tabset \{.tabset\}
### Sample

#### Removing Duplicates From a List

```yaml
wrangles:
    - format.remove_duplicates:
        input: Attack of the Clones
        output: Commander
        where: Rank = Commander
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Attack of the Clones     | Rank |
|:-------------------------|:-----|
| ['Cody', 'Cody', 'Cody'] | Commander |
| ['Rex', 'Rex', 'Rex'] | Captain |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Attack of the Clones     | Rank | Commander|
|:-------------------------|:-----|:---------|
| ['Cody', 'Cody', 'Cody'] | Commander | ['Cody'] |
| ['Rex', 'Rex', 'Rex'] | Captain | |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If none given, overwrites input |
| ignore_case | | bool | Ignore case when removing duplicates. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Significant Figures
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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| significant_figures | Number of significant figures to format to. Default is 3. | 
| output | | str, list | Name of the output column. If none given, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Suffix&lt;br>
Add a suffix to a column&lt;br>

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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| output | | str, list | If none given, overwrites input |
| value | ✓ | str | Suffix value to add |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Trim&lt;br>
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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If none given, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>