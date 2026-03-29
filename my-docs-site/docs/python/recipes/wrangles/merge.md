---
title: "Merge"
slug: /python/recipes/wrangles/merge
---

Functions to merge data from one or more columns into a single column.

# Dictionaries
Take dictionaries in multiple columns and merge them to a single dictionary. 
**Note:** For duplicate keys, the last key in the list takes precedence as the first entry in the merged dictionary.

## Tabset \{.tabset\}
### Sample

#### Using Named Columns

```yaml
wrangles:
  - merge.dictionaries:
      input:
        - Dict 1
        - Dict 2
      output: Merged
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Dict 1           | Dict 2            |
|:-----------------|:------------------|
| `{'First': 'One'}` | `{'Second': 'Two'}` |

</td><td>
→ 
</td><td>

| Merged                            |
|:----------------------------------|
| `{'First': 'One', 'Second': 'Two'}` |
  
</td></tr>
</table>
</div>

#### Using a Wildcard (\*)

```yaml
# Using a Wildcard (*)
wrangles:
  - merge.dictionaries:
      input: Dict *
      output: Merged
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Dict 1           | Dict 2            |
|:-----------------|:------------------|
| `{'First': 'One'}` | `{'Second': 'Two'}` |

</td><td>
→ 
</td><td>

| Merged                            |
|:----------------------------------|
| `{'First': 'One', 'Second': 'Two'}` |
  
</td></tr>
</table>
</div>

#### Using a Wildcard (\*) With Not Columns

```yaml
# Using a Wildcard (*)
wrangles:
  - merge.dictionaries:
      input: 
      	- Dict *
        - -Dict 2
      output: Merged
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Dict 1           | Dict 2            | Dict 3            |
|:-----------------|:------------------|:------------------|
| `{'First': 'One'}` | `{'Second': 'Two'}` | `{'Third': 'Three'}` |

</td><td>
→ 
</td><td>

| Merged                            |
|:----------------------------------|
| `{'First': 'One', 'Third': 'Three'}` |

</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - merge.coalesce:
      input:
        - Col1
        - Col2
        - Col3
      output: Output Col
      where: Col2 = E
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Col1   | Col2   | Col3   |
|:------:|:------:|:------:|
| A      | B      | C      |
| D      | E      | F      |
| G      | H      | I      |

</td><td>
→ 
</td><td>

  
| Col1   | Col2   | Col3   | Output Col   |
|:------:|:------:|:------:|:------------:|
| A      | B      | C      |              |
| D      | E      | F      | D            |
| G      | H      | I      |              |
  
</td></tr>
</table>
</div>

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

```yaml
# Using concatenate to combine multiple columns
wrangles:
  - merge.concatenate:
      input:
        - Col1
        - Col2
        - Col3
      output: Join Col
      char: ', '
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Col1   | Col2   | Col3   |
|:-------|:-------|:-------|
| A      | B      | C      |

</td><td>
→ 
</td><td>

| Join Col   |
|:------------:|
| A, B, C      |
  
</td></tr>
</table>
</div>

#### Concatenating a Single Column

If the input is a single column, concatenate a list within that column into a delimited string.
```yaml
# Using concatenate to join a column that is a list
wrangles:
  - merge.concatenate:
      input: Col1
      output: Join List
      char: ' '
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Col1            |
|:---------------:|
| ['A', 'B', 'C'] |

</td><td>
→ 
</td><td>

| Join List   |
|:-----------:|
| A B C       |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
	- merge.key_value_pairs:
  		input:
      	Letter: Number
      output: Pairs
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Letter   |   Number |
|:---------|---------:|
| A        |        1 |
| B        |        2 |
| C        |        3 |

</td><td>
→ 
</td><td>

| Pairs      |
|:----------:|
| `{'A': 1}` |
| `{'B': 2}` |
| `{'C': 3}` |
  
</td></tr>
</table>
</div>

#### Using a wildcard (\*)

```yaml
# Using a Wildcard (*)
wrangles:
	- merge.key_value_pairs:
  		input:
      	key*: value*
      output: Object
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| key 1   | key 2   | value 1   | value 2   |
|:--------|:--------|:----------|:----------|
| A       | One     | a         | First     |
| B       | Two     | b         | Second    |
| C       | three   | c         | Third     |

</td><td>
→ 
</td><td>

| Object                         |
|:------------------------------:|
| `{'A': 'a', 'One': 'First'}`   |
| `{'B': 'b', 'Two': 'Second'}`  |
| `{'C': 'c', 'three': 'Third'}` |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - merge.lists:
      input:
        - col1
        - col2
      output: Combined Col
      remove_duplicates: false		
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>
  
| Col1       | Col2       |
|:-----------|:-----------|
| ['A', 'B'] | ['D', 'E'] |

</td><td>
→ 
</td><td>

| Combined Col         |
|:--------------------:|
| ['A', 'B', 'D', 'E'] |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  merge.to_list:
    input:
      - Col1
      - Col2
      - Col3
    output: List Col
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Col1   | Col2   | Col3   |
|:-------|:-------|:-------|
| A      | B      | C      |

</td><td>
→ 
</td><td>

| List Col    		|
|:---------------:|
| ['A', 'B', 'C'] |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - merge.to_dict:
      input:
        - Col1
        - Col2
      output: Dict Col
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Col1   | Col2   |
|:------:|:------:|
| A      | B      |

</td><td>
→ 
</td><td>

| Dict Col                         |
|:--------------------------------:|
| `{'Col1': 'A', 'Col2': 'B'}` |
  
</td></tr>
</table>
</div>

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