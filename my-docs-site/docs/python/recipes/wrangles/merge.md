---
title: "Merge"
slug: /python/recipes/wrangles/merge
---

import RecipePlayground from '@site/src/components/RecipePlayground';

Functions to merge data from one or more columns into a single column.

# Dictionaries
Take dictionaries in multiple columns and merge them to a single dictionary. 
**Note:** For duplicate keys, the last key in the list takes precedence as the first entry in the merged dictionary.

## Tabset \{.tabset\}
### Sample

#### Using Named Columns

<RecipePlayground
  editable={true}
  recipe={`wrangles:
  - merge.dictionaries:
      input:
        - Dict 1
        - Dict 2
      output: Merged`}
  inputColumns={['Dict 1', 'Dict 2']}
  inputRows={[
    ["{'First': 'One'}", "{'Second': 'Two'}"],
  ]}
  outputColumns={['Merged']}
  outputRows={[
    ["{'First': 'One', 'Second': 'Two'}"],
  ]}
/>

#### Using a Wildcard (\*)

<RecipePlayground
  editable={true}
  recipe={"# Using a Wildcard (*)\nwrangles:\n  - merge.dictionaries:\n      input: Dict *\n      output: Merged"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Dict 1           | Dict 2            |\n|:-----------------|:------------------|\n| `{'First': 'One'}` | `{'Second': 'Two'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Merged                            |\n|:----------------------------------|\n| `{'First': 'One', 'Second': 'Two'}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Using a Wildcard (\*) With Not Columns

<RecipePlayground
  editable={true}
  recipe={"# Using a Wildcard (*)\nwrangles:\n  - merge.dictionaries:\n      input: \n      \t- Dict *\n        - -Dict 2\n      output: Merged"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Dict 1           | Dict 2            | Dict 3            |\n|:-----------------|:------------------|:------------------|\n| `{'First': 'One'}` | `{'Second': 'Two'}` | `{'Third': 'Three'}` |\n\n</td><td>\n→ \n</td><td>\n\n| Merged                            |\n|:----------------------------------|\n| `{'First': 'One', 'Third': 'Three'}` |\n\n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Coalesce
Take the first non-empty value from a series of columns.

> Click [here](/excel/format#coalesce) to learn how to use Coalesce Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Coalescing 3 Columns

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - merge.coalesce:\n      input:\n        - Col1\n        - Col2\n        - Col3\n      output: Output Col\n      where: Col2 = E"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1   | Col2   | Col3   |\n|:------:|:------:|:------:|\n| A      | B      | C      |\n| D      | E      | F      |\n| G      | H      | I      |\n\n</td><td>\n→ \n</td><td>\n\n  \n| Col1   | Col2   | Col3   | Output Col   |\n|:------:|:------:|:------:|:------------:|\n| A      | B      | C      |              |\n| D      | E      | F      | D            |\n| G      | H      | I      |              |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Concatenate
If the input is a list of columns, concatenate multiple columns into one as a delimited string.

> Click [here](/excel/format#concatenate) to learn how to use Concatenate Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Concatenating 3 Columns

<RecipePlayground
  editable={true}
  recipe={"# Using concatenate to combine multiple columns\nwrangles:\n  - merge.concatenate:\n      input:\n        - Col1\n        - Col2\n        - Col3\n      output: Join Col\n      char: ', '"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1   | Col2   | Col3   |\n|:-------|:-------|:-------|\n| A      | B      | C      |\n\n</td><td>\n→ \n</td><td>\n\n| Join Col   |\n|:------------:|\n| A, B, C      |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Concatenating a Single Column

If the input is a single column, concatenate a list within that column into a delimited string.
<RecipePlayground
  editable={true}
  recipe={"# Using concatenate to join a column that is a list\nwrangles:\n  - merge.concatenate:\n      input: Col1\n      output: Join List\n      char: ' '"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1            |\n|:---------------:|\n| ['A', 'B', 'C'] |\n\n</td><td>\n→ \n</td><td>\n\n| Join List   |\n|:-----------:|\n| A B C       |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str | |
| char | | str | Character to add between successive values |
| skip_empty | | bool | Whether to skip empty values, defaults to false |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Key Value Pairs
Create a dictionary from keys and values in paired columns.

## Tabset \{.tabset\}
### Sample

#### Using Named Columns

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n\t- merge.key_value_pairs:\n  \t\tinput:\n      \tLetter: Number\n      output: Pairs"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Letter   |   Number |\n|:---------|---------:|\n| A        |        1 |\n| B        |        2 |\n| C        |        3 |\n\n</td><td>\n→ \n</td><td>\n\n| Pairs      |\n|:----------:|\n| `{'A': 1}` |\n| `{'B': 2}` |\n| `{'C': 3}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Using a wildcard (\*)

<RecipePlayground
  editable={true}
  recipe={"# Using a Wildcard (*)\nwrangles:\n\t- merge.key_value_pairs:\n  \t\tinput:\n      \tkey*: value*\n      output: Object"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| key 1   | key 2   | value 1   | value 2   |\n|:--------|:--------|:----------|:----------|\n| A       | One     | a         | First     |\n| B       | Two     | b         | Second    |\n| C       | three   | c         | Third     |\n\n</td><td>\n→ \n</td><td>\n\n| Object                         |\n|:------------------------------:|\n| `{'A': 'a', 'One': 'First'}`   |\n| `{'B': 'b', 'Two': 'Second'}`  |\n| `{'C': 'c', 'three': 'Third'}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | dict | Matched pairs of key and value columns | 
| output | ✓ | str | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Lists
Take lists in multiple columns and merge them to a single list.

## Tabset \{.tabset\}
### Sample

##### Merging Two Lists

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - merge.lists:\n      input:\n        - col1\n        - col2\n      output: Combined Col\n      remove_duplicates: false\t\t"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Col1       | Col2       |\n|:-----------|:-----------|\n| ['A', 'B'] | ['D', 'E'] |\n\n</td><td>\n→ \n</td><td>\n\n| Combined Col         |\n|:--------------------:|\n| ['A', 'B', 'D', 'E'] |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| remove_duplicates | | bool | Whether to remove duplicates from the created list, defaults to false |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# To List
Take multiple columns and merge them to a list.

## Tabset \{.tabset\}
### Sample

#### Merging Multiple Columns to a Single List

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  merge.to_list:\n    input:\n      - Col1\n      - Col2\n      - Col3\n    output: List Col"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1   | Col2   | Col3   |\n|:-------|:-------|:-------|\n| A      | B      | C      |\n\n</td><td>\n→ \n</td><td>\n\n| List Col    \t\t|\n|:---------------:|\n| ['A', 'B', 'C'] |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| include_empty | | bool | Whether to include empty columns in the created list, defaults to false. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# To Dict
Take multiple columns and merge them to a dictionary (aka object) using the column headers as keys.

## Tabset \{.tabset\}
### Sample

#### Merging Two Columns Into a Dictionary

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - merge.to_dict:\n      input:\n        - Col1\n        - Col2\n      output: Dict Col"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1   | Col2   |\n|:------:|:------:|\n| A      | B      |\n\n</td><td>\n→ \n</td><td>\n\n| Dict Col                         |\n|:--------------------------------:|\n| `{'Col1': 'A', 'Col2': 'B'}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | | 
| output | ✓ | str | |
| include_empty | | bool | Whether to include empty columns in the created dictionary, defaults to false. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>