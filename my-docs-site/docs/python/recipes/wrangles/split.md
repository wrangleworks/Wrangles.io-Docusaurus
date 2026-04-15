---
title: "Split"
slug: /python/recipes/wrangles/split
---

import RecipePlayground from '@site/src/components/RecipePlayground';


> Click [here](/excel/format#split) to learn how to use Split Wrangles in Excel.
\{.is-success\}

# Dictionary
Split a dictionary into columns. The dictionary keys will be used as the new column headers.

## Tabset \{.tabset\}
### Sample

#### Examples
Below, we'll show you a few different methods of splitting dictionaries using split.dictionary.

##### Splitting an Entire Dictionary

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      # Output not required"}
  exampleSource={"| Column                                    | |   | | Col1   | Col2   | Col3   |\n|:-----------------------------------------:|-|:-:|-| :----: |:------:|:------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      | C      |"}
/>

##### Choosing Specific Keys by Name

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      output: Col2"}
  exampleSource={"| Column                                    | |   | | Col2   |\n|:-----------------------------------------:|-|:-:|-|:------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | B      |"}
/>

##### Using a Wildcard Output to Choose Specific Keys

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      output: Col*"}
  exampleSource={"| Column                                    | |   | | Col1   | Col2   |\n|:-----------------------------------------:|-|:-:|-| :----: |:------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Other': 'C'}` | | → | | A     | B     |"}
/>

##### Using Regular Expressions to Choose Specific Keys

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      output: \"regex: .*3\""}
  exampleSource={"| Column                                    | |   | | Col3   |\n|:-----------------------------------------:|-|:-:|-|:------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | C      |"}
/>

##### Choosing Specific Keys While Renaming the Output

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      output: \n      \t- Col1: Column 1\n      \t- Col2: Column 2"}
  exampleSource={"| Column                                    | |   | | Column 1 | Column 2 |\n|:-----------------------------------------:|-|:-:|-|:--------:|:--------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      |"}
/>

##### Using a Wildcard While Renaming

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.dictionary:\n      input: Column\n      output: \n      \t- Col*: Column *"}
  exampleSource={"| Column                                    | |   | | Column 1 | Column 2 | Column 3 |\n|:-----------------------------------------:|-|:-:|-|:--------:|:--------:|:--------:|\n| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      | C      |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | Name or lists of the column(s) containing dictionaries to be split. If providing multiple dictionaries and the dictionaries contain overlapping values, the last value will be returned. |
| output | ✓ | str, list | (Optional) Subset of keys to extract from the dictionary. If not provided, all keys will be returned. |
| default | | object | Provide a set of default headings and values if they are not found within the input. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# List
Split a list to multiple columns.

If only one output is given, split.list will return the same list it was given. For this reason, the wrangle should be given an output of either a list of columns or a column name with a wildcard (\*). 

## Tabset \{.tabset\}
### Sample

#### Using a Wildcard
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.list:\n      input: Column\n      output: Column*      "}
  exampleSource={"| Column             | |   | | Column1   | Column2   | Column3   |\n|:------------------:|-|:-:|-|:---------:|:---------:|:---------:|\n| ['A', 'B', 'C']    | | → | | A         | B         | C         |"}
/>


#### Named Columns
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.list:\n      input: Column\n      output:\n      \t- Heading A\n        - Heading B\n        - Heading C"}
  exampleSource={"| Column             | |   | | Heading A | Heading B | Heading C |\n|:------------------:|-|:-:|-|:---------:|:---------:|:---------:|\n| ['A', 'B', 'C']    | | → | | A         | B         | C         |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | ✓ | list | Output supports a wildcard to dynamically number the columns e.g. col* -> col1, col2, col3, ... |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

</div>

# Text

Split text (strings) on certain characters.

The text can be split into either multiple columns or a list.

## Tabset \{.tabset\}
### Sample

#### To a List
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.text:\n      input: Column1\n      output: Column2\n      char: ', '"}
  exampleSource={"| Column1            | |   | | Column2                  |\n|:------------------:|-|:-:|-|:------------------------:|\n| Hello, Wrangles!   | | → | | ['Hello', 'Wrangles!']   |"}
/>



#### Split Using Regex
<RecipePlayground
  editable={true}
  recipe={"# Split on x, case insensitive.\nwrangles:\n  - split.text:\n      input: Col1\n      output: Col2\n      char: 'regex:(?i)x'"}
  exampleSource={"| Col1                | |   | | Col2                  |\n|:-------------------:|-|:-:|-|:----------------------|\n| 1x2 | | → | | ['1', '2'] |\n| 1X2 | | → | | ['1', '2'] |"}
/>



#### Slice the Output
Choose specific elements to keep after splitting.
Accepts [python slicing syntax](https://www.w3schools.com/python/python_strings_slicing.asp)
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.text:\n      input: Column1\n      output: Column2\n      char: ', '\n      element: 0"}
  exampleSource={"| Column1            | |   | | Column2                  |\n|:------------------:|-|:-:|-|:------------------------:|\n| Hello, Wrangles!   | | → | | Hello  |"}
/>



#### Split to Columns (Wildcard)
The output columns will be given an incrementing number in the position of the wildcard (\*)

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.text:\n      input: Col\n      output: Col*              # Optional\n      char: ', '"}
  exampleSource={"| Col              | |   | | Col1    | Col2     |\n|:----------------:|-|:-:|-|:--------:|:---------:|\n| Hello, Wrangles! | | → | | Hello    | Wrangles! |"}
/>


#### Split to Columns (Named)
The output will be placed in the named columns. The number of output columns must be known in advance.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.text:\n      input: Col\n      output:\n      \t- Col 1\n        - Col 2\n        - Col 3\n      char: ', '"}
  exampleSource={"| Col                  | |   | | Col 1     | Col 2  | Col 3 |\n|:--------------------:|-|:-:|-|:---------:|:------:|:-----:|\n| Wrangles, are, Cool! | | → | | Wrangles  | are    | Cool! |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | Name of the column to be split | 
| output | | str, list | Name of the output column(s). If a single column is provided, the results will be returned as a list. If multiple columns are listed, the results will be separated into the columns. If omitted, will overwrite the input. Allows a wildcard (*) to name the output columns using an incrementing number e.g. `example*`. |
| char | | str | Set the character(s) to split on. Default comma (,). Can also prefix with "regex:" to split on a pattern. |
| pad | | bool | Choose whether to pad to ensure a consistent length. Default true if outputting to columns, false for lists. |
| element | | str, list | Select specific elements or ranges after splitting. Accepts [python slicing syntax](https://www.w3schools.com/python/python_strings_slicing.asp) |
| inclusive | | bool | If true, include the split character in the output. Default False |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Tokenize
[Tokenize](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) elements in a list or string into individual tokens.

## Tabset \{.tabset\}
### Sample

#### Tokenizing a String

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.tokenize:\n      input: Materials\n      output: Tokenized List"}
  exampleSource={"| Materials                       | |   | | Tokenized List                        |\n|:-------------------------------:|-|:-:|-| :-----------------------------------: |\n| Stainless Steel Oak Wood        | | → | | ['Stainless', 'Steel', 'Oak', 'Wood'] |"}
/>

#### Tokenizing a List

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - split.tokenize:\n      input: Materials\n      output: Tokenized List"}
  exampleSource={"| Materials                       | |   | | Tokenized List                        |\n|:-------------------------------:|-|:-:|-| :-----------------------------------: |\n| ['Stainless Steel', 'Oak Wood'] | | → | | ['Stainless', 'Steel', 'Oak', 'Wood'] |"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If omitted, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| method | | str | Method to split the list. Options: space, boundary, boundary_ignore_space or use a custom function with custom.\&lt;function\> or use a regex pattern with regex:\&lt;pattern\> |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>