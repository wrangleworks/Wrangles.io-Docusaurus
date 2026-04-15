---
title: "Select 2"
slug: /python/recipes/wrangles/select-2
---

import RecipePlayground from '@site/src/components/RecipePlayground';


&lt;!-- @wrangles.io: \{"property": "item_start"\} -->
&lt;!-- @wrangles.io: \{"property": "wrangle_name"\} -->
# Columns
&lt;!-- @wrangles.io: \{"property": "wrangle_description"\} -->
Select columns from the dataframe

## Tabset \{.tabset\}
### Sample

#### Selecting Columns
&lt;!-- @wrangles.io: \{"property": "wrangle_schema_yaml"\} -->
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.columns:\n      input: Manufacturer"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Part Number |\n|:----------:|:-----------:|\n| SKF | 1234 |\n| Timken | 5678 |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer |\n|:----------:|\n| SKF |\n| Timken |\n\n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the column(s) to select | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>
&lt;!-- @wrangles.io: \{"property": "item_end"\} -->

# Dictionary Element
Select a named element of a dictionary.

## Tabset \{.tabset\}
### Examples

#### Selecting Dictionary Element Using Where

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      output: Shapes\n      element: shapes\n      default: square\n      where: Part Number = 1234"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Properties | Part Number |\n|:----------:|:-----------:|\n| `{'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'}` | 1234 |\n| `{'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'}` | 5678 |\n\n</td><td>\n→ \n</td><td>\n\n| Shapes |\n|:------:|\n| round |\n| |\n\n</td></tr>\n</table>\n</div>"}
/>

#### Selecting Multiple Dictionary Elements
When passing element as a list, the output will remane a dictionary even if it is only a list of one. In the example below, we have overwritten the input column by not providing an output.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      element: \n      \t- shapes\n        - materials"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Properties |\n|:----------:|\n| `{'colours': ['red', 'white', 'blue'], 'shapes': 'round', 'materials': 'tungsten'}` |\n| `{'colours': ['green', 'yellow', 'orange'], 'shapes': 'square', 'materials': 'tungsten'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Properties |\n|:----------:|\n| `{'shapes': 'round', 'materials': 'tungsten'}` |\n| `{'shapes': 'square', 'materials': 'tungsten'}` |\n\n</td></tr>\n</table>\n</div>"}
/>

#### Selecting Multiple Dictionary Elements Using a Wildcard
Wildcards can be used to select dictionary elements. As before, when passing element as a list, the output remanes a dictionary. **Note**: When using a wildcard or regex, element must be passed as a list and therefore the output will remain a dictionary.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      output: Output Dict\n      element: \n      \t- Col*"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Column                                    |\n|:-----------------------------------------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Other3': 'C'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Column                                    | Output Dict |\n|:-----------------------------------------:|:-----------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col1': 'A', 'Col2': 'B'}` |\n\n</td></tr>\n</table>\n</div>"}
/>

#### Selecting Multiple Dictionary Elements Using Regex
Regex patterns can be used to select dictionary elements. As before, when passing element as a list, the output remanes a dictionary. **Note**: When using a wildcard or regex, element must be passed as a list and therefore the output will remain a dictionary.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      output: Output Dict\n      element: \n      \t- \"regex: .*2\""}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Column                                    |\n|:-----------------------------------------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Column                                    | Output Dict |\n|:-----------------------------------------:|:-----------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col2': 'B'}` |\n\n</td></tr>\n</table>\n</div>"}
/>

#### Selecting Elements While Renaming 
Selected dictionary elements can also be renamed in the output by following the example below.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      output: Output Dict\n      element: \n      \t- Col1: Column 1\n        - Col2: Column 2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Column                                    |\n|:-----------------------------------------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Column                                    | Output Dict |\n|:-----------------------------------------:|:-----------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Column 1': 'A', 'Column 2': 'B'}` |\n\n</td></tr>\n</table>\n</div>"}
/>

#### Using Default to Fill Missing Elements
By adding a default, missing dictionary elements are filled in upon output. Without the use of a default, the wrangle will throw an error when it encounters a missing element.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.dictionary_element:\n      input: Properties\n      output: Output Dict\n      element: \n      \t- Col1\n        - Col3\n      default:\n      \tCol1: Z\n        Col3: Y"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Column                                    |\n|:-----------------------------------------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` |\n| `{'Col1': 'D', 'Col2': 'E'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Column                                    | Output Dict |\n|:-----------------------------------------:|:-----------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | `{'Col1': 'A', 'Col3': 'C'}` |\n| `{'Col1': 'D', 'Col2': 'E'}` | `{'Col1': 'D', 'Col3': 'Y'}` |\n\n</td></tr>\n</table>\n</div>"}
/>


### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| output | | str, list | If omitted, the input column will be overwritten. |
| element | ✓ | str, list | Key(s) to select from the dictionary. |
| default | | str | Set the default value to return if the specified element doesn't exist. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>


# Element
Select elements of lists or dicts using python syntax like col[1:3]['key']. 

## Tabset \{.tabset\}
### Sample

#### Selecting The First Element

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.element:\n      input: Column 1[0]\n      output: First Element"}
  exampleSource={"| Column 1 |   | | Column 1 | First Element |\n|:--------:|:-:|-|:--------:|:-------------:|\n| ['A', 0.6] |  → | | ['A', 0.6] | 'A' |"}
/>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.group_by:\n      by: \n        - Product Type\n      sum: Quanitity\n      mean: Price ($)"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Product | Product Type | Quantity | Price ($) |\n| :------ | :----------- | :------- | :-------- |\n| Hammer | Hand Tools | 3 | 12.99 |\n| Ratchet Wrench | Hand Tools | 12 | 6.99 | \n| Cordless Drill | Power Tools | 2 | 49.99 |\n| Reciprocating Saw | Power Tools | 7 | 29.99 |\n\n</td><td>\n→ \n</td><td>\n\n  \n| Product Type | Quantity.sum | Price ($).mean |\n| :----------- | :----------- | :------------- |\n| Hand Tools | 15 | 9.99 |\n| Power Tools | 9 | 39.99 |\n  \n</td></tr>\n</table>\n</div>"}
/>

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

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Category | Quantity |
|:--------:|:--------:|
| Hand Tools | 3 |
| Hand Tools | 1 |
| Hand Tools | 2 |
| Power Tools | 4 |

</td><td>
→ 
</td><td>

  
| Category | Quantity.sum_times_two |
|:--------:|:----------------------:|
| Hand Tools | 12 |
| Power Tools | 4 |
  
</td></tr>
</table>
</div>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.head:\n      n: 2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Timken | Bearing Race |\n| Acme Bearings | Needle Bearing |\n| General Bearing Co. | Roller Bearing |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Timken | Bearing Race |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| n | ✓ | integer | Number of rows to return | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Highest Confidence
Select the option with the highest confidence from multiple columns.
Inputs are expected to be of the form [value, confidence_score]

## Tabset \{.tabset\}
### Sample

#### Selecting Highest Confidence Single Output

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.highest_confidence:\n      input:\n        - Col1\n        - Col2\n        - Col3\n      output: Highest Confidence"}
  exampleSource={"| Col1        | Col2        | Col3        | |   | | Highest Confidence   |\n|:-----------:|:-----------:|:-----------:|-|:-:|-|:--------------------:|\n| ['A', 0.79] | ['B', 0.77] | ['C', 0.99] | | → | | ['C', 0.99]          |"}
/>


#### Selecting Highest Confidence Two Outputs
When a list of two outputs is given, the item and it's confidence are split into different columns

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.highest_confidence:\n      input:\n        - Col1\n        - Col2\n        - Col3\n      output:\n      \t- Item\n      \t- Confidence"}
  exampleSource={"| Col1 | Col2 | Col3 |     |     | | Item | Confidence |\n| :--: | :--: | :--: | :-: | :-: |-| :--: | :--------: |\n| ['A', 0.79] | ['B', 0.77] | ['C', 0.99] | | → | | C    | .99 |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | The name of the input column | 
| output | ✓ | str, list | If a list of two, seperates the element and it's confidence |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>


# Left
Select characters from the left of the input. Using a negative length will reverse the side of select, ie select right.

## Tabset \{.tabset\}
### Sample

#### Selecting Three Leftmost Elements

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.left:\n      input: Column\n      output: Result\n      length: 3"}
  exampleSource={"| Column  | |   | | Result |\n|:-------:|-|:-:|-|:------:|\n| pudding | | → | | pud    |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| length | ✓ | int | Number of characters to include |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Length
Calculate the lengths of data in a column. The length depends on the data type e.g. text will be the length of the text, lists will be the number of elements in the list.

## Tabset \{.tabset\}
### Sample

#### Selecting the Length of Data Within a Column

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.length:\n      input: Part Code\n      output: Part Code Length"}
  exampleSource={"| Part Code  | |   | | Part Code Length |\n|:-------:|-|:-:|-|:------:|\n| 6202 | | → | | 4 |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column(s) | 
| output | | str, list | If omitted, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# List Element
Select a numbered element of a list (zero indexed)

## Tabset \{.tabset\}
### Sample

#### Selecting the Second Element in a List

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.list_element:\n      input: Col1\n      output: Second Element\n      element: 2\t\t\t# Zero Indexed\n      default: F"}
  exampleSource={"| Col1            | |   | | Third Element   |\n|:---------------:|-|:-:|-|:----------------:|\n| ['A', 'B', 'C'] | | → | | C                |\n| ['D', 'E'] | | → | | F |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| element | | int | The numbered element of the list to select. Starts from zero. If omitted, defaults to 0 |
| default | | str | Set the default value to return if the specified element doesn't exist. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>


# Right
Select characters from the right of the input. Using a negative length will reverse the side of select, ie select left.

## Tabset \{.tabset\}
### Sample

#### Selecting the Three Rightmost Elements

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.right:\n      input: Column\n      output: Result\n      length: 3"}
  exampleSource={"| Column  | |   | | Result |\n|:-------:|-|:-:|-|:------:|\n| pudding | | → | | ing    |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| length | ✓ | int | Number of characters to include |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>


# Sample
Select a random sample of rows.

## Tabset \{.tabset\}
### Sample

#### Selecting 2 Random Rows

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.sample:\n      rows: 2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Timken | Bearing Race |\n| Acme Bearings | Needle Bearing |\n| General Bearing Co. | Roller Bearing |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Acme Bearings | Needle Bearing |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Selecting a Random 25% of All Rows

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.sample:\n      rows: .25"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Timken | Bearing Race |\n| Acme Bearings | Needle Bearing |\n| General Bearing Co. | Roller Bearing |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| Acme Bearings | Needle Bearing |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| rows | ✓ | int, number, str | If a whole number, will select that number of rows. If a decimal between 0 and 1 will select that fraction of the rows e.g. 0.1 => 10% of rows will be returned. Can only be a string if it is a valid number e.g. "two". |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>


# Substring
Select characters from the middle of the input.

## Tabset \{.tabset\}
### Sample

#### Selecting a Substring With Start and Length

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.substring:\n      input: Column\n      output: Result\n      start: 2\n      length: 3"}
  exampleSource={"| Column  | |   | | Result |\n|:-------:|-|:-:|-|:------:|\n| pudding | | → | | udd    |"}
/>

#### Selecting a Substring With Start Only

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.substring:\n      input: Column\n      output: Result\n      start: 2"}
  exampleSource={"| Column  | |   | | Result |\n|:-------:|-|:-:|-|:------:|\n| pudding | | → | | udding |"}
/>

#### Selecting a Substring With Length Only

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.substring:\n      input: Column\n      output: Result\n      length: 3"}
  exampleSource={"| Column  | |   | | Result |\n|:-------:|-|:-:|-|:------:|\n| pudding | | → | | pud    |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| start | | int | The position of the first character to select. **If ommited will start from the beginning and length must be provided.** |
| length | | int | The length of the string to select. **If ommited will select to the end of the string and start must be provided.** |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Tail 
Return the last n rows

## Tabset \{.tabset\}
### Sample

#### Selecting The Last n Rows

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.tail:\n      n: 2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| SKF | Ball Bearing |\n| Timken | Bearing Race |\n| Acme Bearings | Needle Bearing |\n| General Bearing Co. | Roller Bearing |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | Product |\n|:------------:|:-------:|\n| Acme Bearings | Needle Bearing |\n| General Bearing Co. | Roller Bearing |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| n | ✓ | integer | Number of rows to return | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Threshold
Select the first option if it exceeds a given threshold, else the second option.

## Tabset \{.tabset\}
### Sample

#### Selecting Results Above a Threshold

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - select.threshold:\n      input:\n        - Col1\n        - Col2\n      output: Result\n      threshold: .77"}
  exampleSource={"| Col1       | Col2        | |   | | Result   |\n|:----------:|:-----------:|-|:-:|-|:-----------:|\n| ['A', 0.6] | ['B', 0.79] | | → | | B           |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| threshold | ✓ | float | Threshold above which to choose the first option, otherwise the second |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>