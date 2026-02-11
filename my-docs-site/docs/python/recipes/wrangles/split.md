---
title: "Split"
slug: /python/recipes/wrangles/split
---

> Click [here](/excel/format#split) to learn how to use Split Wrangles in Excel.
\{.is-success\}

# Dictionary
Split a dictionary into columns. The dictionary keys will be used as the new column headers.

## Tabset \{.tabset\}
### Sample

#### Examples
Below, we'll show you a few different methods of splitting dictionaries using split.dictionary.

##### Splitting an Entire Dictionary

```yaml
wrangles:
  - split.dictionary:
      input: Column
      # Output not required
```

| Column                                    | |   | | Col1   | Col2   | Col3   |
|:-----------------------------------------:|-|:-:|-| :----: |:------:|:------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      | C      |

##### Choosing Specific Keys by Name

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: Col2
```

| Column                                    | |   | | Col2   |
|:-----------------------------------------:|-|:-:|-|:------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | B      |

##### Using a Wildcard Output to Choose Specific Keys

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: Col*
```

| Column                                    | |   | | Col1   | Col2   |
|:-----------------------------------------:|-|:-:|-| :----: |:------:|
| `{'Col1': 'A', 'Col2': 'B', 'Other': 'C'}` | | → | | A     | B     |

##### Using Regular Expressions to Choose Specific Keys

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: "regex: .*3"
```

| Column                                    | |   | | Col3   |
|:-----------------------------------------:|-|:-:|-|:------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | C      |

##### Choosing Specific Keys While Renaming the Output

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: 
      	- Col1: Column 1
      	- Col2: Column 2
```

| Column                                    | |   | | Column 1 | Column 2 |
|:-----------------------------------------:|-|:-:|-|:--------:|:--------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      |

##### Using a Wildcard While Renaming

```yaml
wrangles:
  - split.dictionary:
      input: Column
      output: 
      	- Col*: Column *
```

| Column                                    | |   | | Column 1 | Column 2 | Column 3 |
|:-----------------------------------------:|-|:-:|-|:--------:|:--------:|:--------:|
| `{'Col1': 'A', 'Col2': 'B', 'Col3': 'C'}` | | → | | A      | B      | C      |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | Name or lists of the column(s) containing dictionaries to be split. If providing multiple dictionaries and the dictionaries contain overlapping values, the last value will be returned. |
| output | ✓ | str, list | (Optional) Subset of keys to extract from the dictionary. If not provided, all keys will be returned. |
| default | | object | Provide a set of default headings and values if they are not found within the input. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# List
Split a list to multiple columns.

If only one output is given, split.list will return the same list it was given. For this reason, the wrangle should be given an output of either a list of columns or a column name with a wildcard (\*). 

## Tabset \{.tabset\}
### Sample

#### Using a Wildcard
```yaml
wrangles:
  - split.list:
      input: Column
      output: Column*      
```

| Column             | |   | | Column1   | Column2   | Column3   |
|:------------------:|-|:-:|-|:---------:|:---------:|:---------:|
| ['A', 'B', 'C']    | | → | | A         | B         | C         |
&lt;br/>

#### Named Columns
```yaml
wrangles:
  - split.list:
      input: Column
      output:
      	- Heading A
        - Heading B
        - Heading C
```

| Column             | |   | | Heading A | Heading B | Heading C |
|:------------------:|-|:-:|-|:---------:|:---------:|:---------:|
| ['A', 'B', 'C']    | | → | | A         | B         | C         |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | ✓ | list | Output supports a wildcard to dynamically number the columns e.g. col* -> col1, col2, col3, ... |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

# Text

Split text (strings) on certain characters.

The text can be split into either multiple columns or a list.

## Tabset \{.tabset\}
### Sample

#### To a List
```yaml
wrangles:
  - split.text:
      input: Column1
      output: Column2
      char: ', '
```
| Column1            | |   | | Column2                  |
|:------------------:|-|:-:|-|:------------------------:|
| Hello, Wrangles!   | | → | | ['Hello', 'Wrangles!']   |

&lt;br/>

#### Split Using Regex
```yaml
# Split on x, case insensitive.
wrangles:
  - split.text:
      input: Col1
      output: Col2
      char: 'regex:(?i)x'
```
| Col1                | |   | | Col2                  |
|:-------------------:|-|:-:|-|:----------------------|
| 1x2 | | → | | ['1', '2'] |
| 1X2 | | → | | ['1', '2'] |

&lt;br/>

#### Slice the Output
Choose specific elements to keep after splitting.
Accepts [python slicing syntax](https://www.w3schools.com/python/python_strings_slicing.asp)
```yaml
wrangles:
  - split.text:
      input: Column1
      output: Column2
      char: ', '
      element: 0
```
| Column1            | |   | | Column2                  |
|:------------------:|-|:-:|-|:------------------------:|
| Hello, Wrangles!   | | → | | Hello  |

&lt;br/>

#### Split to Columns (Wildcard)
The output columns will be given an incrementing number in the position of the wildcard (\*)

```yaml
wrangles:
  - split.text:
      input: Col
      output: Col*              # Optional
      char: ', '
```

| Col              | |   | | Col1    | Col2     |
|:----------------:|-|:-:|-|:--------:|:---------:|
| Hello, Wrangles! | | → | | Hello    | Wrangles! |
&lt;br/>

#### Split to Columns (Named)
The output will be placed in the named columns. The number of output columns must be known in advance.

```yaml
wrangles:
  - split.text:
      input: Col
      output:
      	- Col 1
        - Col 2
        - Col 3
      char: ', '
```

| Col                  | |   | | Col 1     | Col 2  | Col 3 |
|:--------------------:|-|:-:|-|:---------:|:------:|:-----:|
| Wrangles, are, Cool! | | → | | Wrangles  | are    | Cool! |

### Parameters
&lt;div style="overflow-x: auto">
 
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
&lt;/div>

# Tokenize
[Tokenize](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) elements in a list or string into individual tokens.

## Tabset \{.tabset\}
### Sample

#### Tokenizing a String

```yaml
wrangles:
  - split.tokenize:
      input: Materials
      output: Tokenized List
```

| Materials                       | |   | | Tokenized List                        |
|:-------------------------------:|-|:-:|-| :-----------------------------------: |
| Stainless Steel Oak Wood        | | → | | ['Stainless', 'Steel', 'Oak', 'Wood'] |

#### Tokenizing a List

```yaml
wrangles:
  - split.tokenize:
      input: Materials
      output: Tokenized List
```

| Materials                       | |   | | Tokenized List                        |
|:-------------------------------:|-|:-:|-| :-----------------------------------: |
| ['Stainless Steel', 'Oak Wood'] | | → | | ['Stainless', 'Steel', 'Oak', 'Wood'] |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If omitted, overwrites input |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| method | | str | Method to split the list. Options: space, boundary, boundary_ignore_space or use a custom function with custom.\&lt;function\> or use a regex pattern with regex:\&lt;pattern\> |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>