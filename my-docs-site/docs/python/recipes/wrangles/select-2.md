---
title: "Select 2"
slug: /python/recipes/wrangles/select-2
---

&lt;!-- @wrangles.io: \{"property": "item_start"\} -->
&lt;!-- @wrangles.io: \{"property": "wrangle_name"\} -->
# Columns
&lt;!-- @wrangles.io: \{"property": "wrangle_description"\} -->
Select columns from the dataframe

## Tabset \{.tabset\}
### Sample

#### Selecting Columns
&lt;!-- @wrangles.io: \{"property": "wrangle_schema_yaml"\} -->
```yaml
wrangles:
  - select.columns:
      input: Manufacturer
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Part Number |
|:----------:|:-----------:|
| SKF | 1234 |
| Timken | 5678 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer |
|:----------:|
| SKF |
| Timken |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the column(s) to select | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>
&lt;!-- @wrangles.io: \{"property": "item_end"\} -->

# Dictionary Element
Select a named element of a dictionary.

## Tabset \{.tabset\}
### Examples

#### Selecting Dictionary Element Using Where

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Shapes
      element: shapes
      default: square
      where: Part Number = 1234
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Properties | Part Number |
|:----------:|:-----------:|
| `{'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'}` | 1234 |
| `{'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'}` | 5678 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Shapes |
|:------:|
| round |
| |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Selecting Multiple Dictionary Elements
When passing element as a list, the output will remane a dictionary even if it is only a list of one. In the example below, we have overwritten the input column by not providing an output.

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      element: 
      	- shapes
        - materials
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Properties |
|:----------:|
| `{'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'}` |
| `{'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'}` |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Properties |
|:----------:|
| `{'shapes': 'round', 'materials': 'tungsten'}` |
| `{'shapes': 'square', 'materials': 'tungsten'}` |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Selecting Multiple Dictionary Elements Using a Wildcard
Wildcards can be used to select dictionary elements. As before, when passing element as a list, the output remanes a dictionary. **Note**: When using a wildcard or regex, element must be passed as a list and therefore the output will remain a dictionary.

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col*
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Column                                    |
|:-----------------------------------------:|
| `{'Col1': 'A', 'Col2': 'B', 'Other3': 'C'}` |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Column                                    | Output Dict |
|:-----------------------------------------:|:-----------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col1': 'A', 'Col2': 'B'}` |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Selecting Multiple Dictionary Elements Using Regex
Regex patterns can be used to select dictionary elements. As before, when passing element as a list, the output remanes a dictionary. **Note**: When using a wildcard or regex, element must be passed as a list and therefore the output will remain a dictionary.

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- "regex: .*2"
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Column                                    |
|:-----------------------------------------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Column                                    | Output Dict |
|:-----------------------------------------:|:-----------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col2': 'B'}` |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Selecting Elements While Renaming 
Selected dictionary elements can also be renamed in the output by following the example below.

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col1: Column 1
        - Col2: Column 2
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Column                                    |
|:-----------------------------------------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Column                                    | Output Dict |
|:-----------------------------------------:|:-----------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Column 1': 'A', 'Column 2': 'B'}` |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Using Default to Fill Missing Elements
By adding a default, missing dictionary elements are filled in upon output. Without the use of a default, the wrangle will throw an error when it encounters a missing element.

```yaml
wrangles:
  - select.dictionary_element:
      input: Properties
      output: Output Dict
      element: 
      	- Col1
        - Col3
      default:
      	Col1: Z
        Col3: Y
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Column                                    |
|:-----------------------------------------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |
| `{'Col1': 'D', 'Col2': 'E'}` |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Column                                    | Output Dict |
|:-----------------------------------------:|:-----------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col1': 'A', 'Col3': 'C'}` |
| `{'Col1': 'D', 'Col2': 'E'}` | `{'Col1': 'D', 'Col3': 'Y'}` |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| output | | str, list | If omitted, the input column will be overwritten. |
| element | ✓ | str, list | Key(s) to select from the dictionary. |
| default | | str | Set the default value to return if the specified element doesn't exist. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


# Element
Select elements of lists or dicts using python syntax like col[1:3]['key']. 

## Tabset \{.tabset\}
### Sample

#### Selecting The First Element

```yaml
wrangles:
  - select.element:
      input: Column 1[0]
      output: First Element
```

| Column 1 |   | | Column 1 | First Element |
|:--------:|:-:|-|:--------:|:-------------:|
| ['A', 0.6] |  → | | ['A', 0.6] | 'A' |

### Parameters

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column and sub elements. This permits by index for lists or dict and by key for dicts e.g. col[0]['key'] // [\{"key":"val"\}] -> "val" | 
| output | | str, list | Name of the output column(s) |
| default | | any | Set the default value to return if the specified element doesn't exist. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |


# Group By

Group and aggregate data based on certain criteria.

## Tabset \{.tabset\}
### Sample

#### Grouping By One Column

```yaml
wrangles:
  - select.group_by:
      by: 
        - Product Type
      sum: Quanitity
      mean: Price ($)
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Product | Product Type | Quantity | Price ($) |
| :------ | :----------- | :------- | :-------- |
| Hammer | Hand Tools | 3 | 12.99 |
| Ratchet Wrench | Hand Tools | 12 | 6.99 | 
| Cordless Drill | Power Tools | 2 | 49.99 |
| Reciprocating Saw | Power Tools | 7 | 29.99 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

  
| Product Type | Quantity.sum | Price ($).mean |
| :----------- | :----------- | :------------- |
| Hand Tools | 15 | 9.99 |
| Power Tools | 9 | 39.99 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Grouping With Custom Function Aggregation 

```yaml
wrangles:
  - select.group_by:
      by: Category
      custom.sum_times_two: Quantity
```

```python
def sum_times_two(x):
    return sum(x) * 2
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Category | Quantity |
|:--------:|:--------:|
| Hand Tools | 3 |
| Hand Tools | 1 |
| Hand Tools | 2 |
| Power Tools | 4 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

  
| Category | Quantity.sum_times_two |
|:--------:|:----------------------:|
| Hand Tools | 12 |
| Power Tools | 4 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

> Note: Recipes using select.group_by **must** be output to a new sheet because they change the shape of the dataframe.
\{.is-info\}

### Parameters

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| by | | list | List of the input columns to group on, defaults to none |
| first | | str, list | The first value for these column(s) |
| last | | str, list | The last value for these column(s) |
| list | | str, list | Group and return all values for these column(s) as a list |
| min | | str, list | The minimum value for these column(s) |
| max | | str, list | The maximum value for these column(s) |
| mean | | str, list | The mean (average) value for these column(s) |
| median | | str, list | The median value for these column(s) |
| nunique | | str, list | The count of unique values for these column(s) |
| count | | str, list | The count of values for these column(s) |
| std | | str, list | The standard deviation of values for these column(s) |
| sum | | str, list | The total of values for these column(s) |
| any | | str, list | Return true if any of the values for these column(s) are true |
| all | | str, list | Return true if all of the values for these column(s) are true |
| p75 | | str, list | Get a percentile. Note, you can use any integer here for the corresponding percentile. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
| custom.placeholder | | str, list | Placeholder for custom functions. Replace 'placeholder' with the name of the function. | 

# Head

Return the first n rows

## Tabset \{.tabset\}
### Sample

#### Selecting The First n Rows

```yaml
wrangles:
  - select.head:
      n: 2
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Timken | Bearing Race |
| Acme Bearings | Needle Bearing |
| General Bearing Co. | Roller Bearing |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Timken | Bearing Race |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| n | ✓ | integer | Number of rows to return | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Highest Confidence
Select the option with the highest confidence from multiple columns.
Inputs are expected to be of the form [value, confidence_score]

## Tabset \{.tabset\}
### Sample

#### Selecting Highest Confidence Single Output

```yaml
wrangles:
  - select.highest_confidence:
      input:
        - Col1
        - Col2
        - Col3
      output: Highest Confidence
```

| Col1        | Col2        | Col3        | |   | | Highest Confidence   |
|:-----------:|:-----------:|:-----------:|-|:-:|-|:--------------------:|
| ['A', 0.79] | ['B', 0.77] | ['C', 0.99] | | → | | ['C', 0.99]          |
&lt;br/>

#### Selecting Highest Confidence Two Outputs
When a list of two outputs is given, the item and it's confidence are split into different columns

```yaml
wrangles:
  - select.highest_confidence:
      input:
        - Col1
        - Col2
        - Col3
      output:
      	- Item
      	- Confidence
```

| Col1 | Col2 | Col3 |     |     | | Item | Confidence |
| :--: | :--: | :--: | :-: | :-: |-| :--: | :--------: |
| ['A', 0.79] | ['B', 0.77] | ['C', 0.99] | | → | | C    | .99 |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | The name of the input column | 
| output | ✓ | str, list | If a list of two, seperates the element and it's confidence |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


# Left
Select characters from the left of the input. Using a negative length will reverse the side of select, ie select right.

## Tabset \{.tabset\}
### Sample

#### Selecting Three Leftmost Elements

```yaml
wrangles:
  - select.left:
      input: Column
      output: Result
      length: 3
```

| Column  | |   | | Result |
|:-------:|-|:-:|-|:------:|
| pudding | | → | | pud    |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| length | ✓ | int | Number of characters to include |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Length
Calculate the lengths of data in a column. The length depends on the data type e.g. text will be the length of the text, lists will be the number of elements in the list.

## Tabset \{.tabset\}
### Sample

#### Selecting the Length of Data Within a Column

```yaml
wrangles:
  - select.length:
      input: Part Code
      output: Part Code Length
```

| Part Code  | |   | | Part Code Length |
|:-------:|-|:-:|-|:------:|
| 6202 | | → | | 4 |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column(s) | 
| output | | str, list | If omitted, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# List Element
Select a numbered element of a list (zero indexed)

## Tabset \{.tabset\}
### Sample

#### Selecting the Second Element in a List

```yaml
wrangles:
  - select.list_element:
      input: Col1
      output: Second Element
      element: 2			# Zero Indexed
      default: F
```

| Col1            | |   | | Third Element   |
|:---------------:|-|:-:|-|:----------------:|
| ['A', 'B', 'C'] | | → | | C                |
| ['D', 'E'] | | → | | F |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| element | | int | The numbered element of the list to select. Starts from zero. If omitted, defaults to 0 |
| default | | str | Set the default value to return if the specified element doesn't exist. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


# Right
Select characters from the right of the input. Using a negative length will reverse the side of select, ie select left.

## Tabset \{.tabset\}
### Sample

#### Selecting the Three Rightmost Elements

```yaml
wrangles:
  - select.right:
      input: Column
      output: Result
      length: 3
```

| Column  | |   | | Result |
|:-------:|-|:-:|-|:------:|
| pudding | | → | | ing    |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| length | ✓ | int | Number of characters to include |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


# Sample
Select a random sample of rows.

## Tabset \{.tabset\}
### Sample

#### Selecting 2 Random Rows

```yaml
wrangles:
  - select.sample:
      rows: 2
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Timken | Bearing Race |
| Acme Bearings | Needle Bearing |
| General Bearing Co. | Roller Bearing |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Acme Bearings | Needle Bearing |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Selecting a Random 25% of All Rows

```yaml
wrangles:
  - select.sample:
      rows: .25
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Timken | Bearing Race |
| Acme Bearings | Needle Bearing |
| General Bearing Co. | Roller Bearing |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| Acme Bearings | Needle Bearing |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| rows | ✓ | int, number, str | If a whole number, will select that number of rows. If a decimal between 0 and 1 will select that fraction of the rows e.g. 0.1 => 10% of rows will be returned. Can only be a string if it is a valid number e.g. "two". |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


# Substring
Select characters from the middle of the input.

## Tabset \{.tabset\}
### Sample

#### Selecting a Substring With Start and Length

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
      length: 3
```

| Column  | |   | | Result |
|:-------:|-|:-:|-|:------:|
| pudding | | → | | udd    |

#### Selecting a Substring With Start Only

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      start: 2
```

| Column  | |   | | Result |
|:-------:|-|:-:|-|:------:|
| pudding | | → | | udding |

#### Selecting a Substring With Length Only

```yaml
wrangles:
  - select.substring:
      input: Column
      output: Result
      length: 3
```

| Column  | |   | | Result |
|:-------:|-|:-:|-|:------:|
| pudding | | → | | pud    |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| start | | int | The position of the first character to select. **If ommited will start from the beginning and length must be provided.** |
| length | | int | The length of the string to select. **If ommited will select to the end of the string and start must be provided.** |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Tail 
Return the last n rows

## Tabset \{.tabset\}
### Sample

#### Selecting The Last n Rows

```yaml
wrangles:
  - select.tail:
      n: 2
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| SKF | Ball Bearing |
| Timken | Bearing Race |
| Acme Bearings | Needle Bearing |
| General Bearing Co. | Roller Bearing |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | Product |
|:------------:|:-------:|
| Acme Bearings | Needle Bearing |
| General Bearing Co. | Roller Bearing |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| n | ✓ | integer | Number of rows to return | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Threshold
Select the first option if it exceeds a given threshold, else the second option.

## Tabset \{.tabset\}
### Sample

#### Selecting Results Above a Threshold

```yaml
wrangles:
  - select.threshold:
      input:
        - Col1
        - Col2
      output: Result
      threshold: .77
```

| Col1       | Col2        | |   | | Result   |
|:----------:|:-----------:|-|:-:|-|:-----------:|
| ['A', 0.6] | ['B', 0.79] | | → | | B           |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| threshold | ✓ | float | Threshold above which to choose the first option, otherwise the second |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>