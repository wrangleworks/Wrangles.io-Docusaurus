---
title: "Standalone"
slug: /python/recipes/wrangles/standalone
---

# Classify
Run a custom classification wrangle on the specified column or columns. A classification wrangle must be trained first.

> Click [here](/excel/classify) to learn how to use Classify Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Food Type Example

```yaml
wrangles:
  - classify:
      input: Products
      output: Category
      model_id: ${model_id}
      where: Products = Milk
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Products |
|:--------:|
| Rice     |
| Milk     |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Products | Category |
|:--------:|:--------:|
| Rice     | 	  |
| Milk     | Dairy    |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| model_id | ✓ | str | ID of the classification model to be used |
| include_confidence | | bool | Also return the confidence for models that support it. Will be returned as `{"Confidence":0.5,"Label":"Category"}` |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Date Calculator
Add or Subtract time from a date

## Tabset \{.tabset\}
### Sample

#### Calculating a Future Date

```yaml
wrangles:
   - date_calculator:
      input: Date
      output: New Date
      operation: subtract  # Optional default is addition
      time_unit: days
      time_value: 1
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Date        |
|:-------------: |
| 2022-12-26   |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| New Date      |
|:------------:|
| 2022-12-25 |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, pandas timestamp | | 
| output | | str, pandas timestamp | |
| operation | | str | Date operation, defaults to add. |
| time_unit | | str | Time unit for operation, defaults to none. See below for options |
| time_value | | float | Time unit value for operation, defaults to none. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

List of time units
- years
- months
- weeks
- days
- hours
- minutes
- seconds
- milliseconds

# Lookup
Look up data from a saved Lookup Wrangle. Data is output as a dictionary if an output is not specified or the output does not match any columns in the lookup. If specific lookup columns are named in the output, they will be output as individual columns.

> Click [here](/excel/Lookup) to learn how to use Lookup Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### State Example
```yaml
wrangles:
  - lookup:
      input: State
      output:
        - Abbreviation
      model_id: 55555555-5555-5555
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| State |
|:----------:|
| Texas |
| New York |
| Virginia |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Abbreviation |
|:----------:|
| TX |
| NY |
| VA |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | The input column that contains the keys to be looked up in the Lookup Wrangle | 
| output | | str, list | Output columns from Lookup Wrangle. If not present a dictionary with output values will be returned. |
| model_id | ✓ | str | ID of the classification model to be used |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Math
> Added **v0.5**
\{.is-info\}

Apply mathematical calculations to columns. Also called as maths

> **Note:** Spaces within column headers are replaced with an underscore automatically. In order for this wrangle to function properly, this must be taken into account in the input.
\{.is-info\}

## Tabset \{.tabset\}
### Sample

#### Square Root Example

```yaml
wrangles:
  - math:
  	  input: sqrt(Values)
      output: Square Root
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

|   Values |
|---------:|
|        4 |
|        9 |
|       16 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Values |   Square Root |
|---------:|---------:|:---|
| 4 | 2 |
| 9 |       3 |
| 16 |       4 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

Math supports the set of operators listed below:

- Logical operators: `&, |, ~`
- Comparison operators: `<, <=, ==, !=, >=, >`
- Unary arithmetic operators: `-`
- Binary arithmetic operators: `+, -, *, /, **, %, <<, >>`

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | The mathematical expression using column names. e.g. column1 * column2 + column3 | 
| output | ✓ | str | The column to output the results to |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Python

> Added **v1.6**
\{.is-info\}

The Python Wrangle allows executing simple Python commands inline within a recipe. Row values are referenced by the column name and commands are evaluated once per row. Spaces within column names are replaced by underscores (_). Additionally, all columns are available as a dict named kwargs. For more complex Python, use [Custom Functions](https://wrangles.io/python/recipes/custom-functions).

> Note, this evaluates the python command - be especially cautious including variables from untrusted sources within the command string.
\{.is-warning\}

## Tabset \{.tabset\}
### Sample

#### Python Wrangle

```yaml
wrangles:
  - python:
      output: result
      command: My_Column.upper()
```

| My Column | result |
|:--------:|:--------:|
| example text | EXAMPLE TEXT |

> Note: The python wrangle replaces spaces in column headers with an underscore so it is important to keep this in mind when writing your commands.
\{.is-info\}

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | str, list | Name or list of input column(s) to filter the data available to the command. Useful in conjunction with kwargs to target a variable range of columns. | 
| output | ✓ | str, list | Name or list of output column(s). To output multiple columns, return a list of the corresponding length. |
| command | ✓ | str | Python command. This must return a value. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
| except | | any | Value to return for the row if an exception occurs during the evaluation. If not provided, an exception will be raised as normal. If multiple output columns are specified, this must match the length. |
&lt;/div>

## Including Your Own Parameters
The python wrangle supports including parameters which allows you to parameterize a variable of unknown origin safely. For example, if you wanted to slice a string or a list like shown below:

```yaml
wrangles:
  - python:
      output: sliced
      command: input_column[:i]
      i: ${var}
```

In the above code, i is a variable who's value will be dictated by the user.

# Recipe

> Added **v0.5**
\{.is-info\}

Run a recipe as a wrangle. Click [here](https://wrangles.io/en/python/connectors/recipe) for the connector equivalent of this wrangle.

## Tabset \{.tabset\}
### Sample

#### Recipe Call Using Name

```yaml
wrangles:
  - recipe:
      name: recipe1.wrgl.yaml

```
The output columns of the Wrangle-Recipe will be added to the dataframe.

#### Imbedded Sub-Recipe

```yaml
wrangles:
	- recipe:
  		output: Description Refined
  		wrangles:
      	- merge.to_list:
        		input: Attributes
            output: Words to Remove
            
        - remove_words:
        		input: Description
            output: Description Refined
```
            

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| name | | str | File name/path of the recipe or the model id. Cannot be used in conjunction with wrangles. |
| wrangles | | list | The wrangles to run. Cannot be used in conjunction with name. |
| input | | str, list | Columns to only apply the recipe to. | 
| output | | str, list | Columns to output from the recipe. |
| variables | | dict | A dictionary of variables to pass to the recipe, defaults to pass all variables through. |
| output_columns | | str, list | Columns to output from the recipe, defaults to none. |
| functions | | str, list | A list of functions used in the recipe |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Remove Words
Remove all the elements that occur in one list from another.

## Tabset \{.tabset\}
### Sample

#### Removing Words From a Column

```yaml
wrangles:
   - remove_words:
        input: Description
        to_remove:			# To Remove columns must be list
          - Materials
          - Colours
        output: Product
        tokenize_to_remove: True
        ignore_case: False	
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Description       | Materials   | Colours   |
|:------------------|:------------|:----------|
| Steel Blue Bottle | ['Steel']   | ['Blue']  |
| ['Steel', 'Blue', 'Bottle'] | ['Steel']   | ['Blue']  |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Product   |
|:---------:|
| Bottle    |
| Bottle    |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| to_remove | ✓ | str, list | Column or list of columns with a list of words to be removed |
| tokenize_to_remove | | bool | Tokenize all to_remove inputs, defaults to false |
| ignore_case | | bool | Ignore input and to_remove case, defaults to true |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Replace
Quick find and replace for simple values. Can use regex in the find field.

> Click [here](/excel/standardize#replace) to learn how to use Replace Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Replacing an Abbreviation
```yaml
wrangles:
  - replace:
  		input: Product Data
      find: brg
      replace: bearing
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Product Data |
|:----------:|
| SKF ball brg |
| brg seal |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Product Data |
|:----------:|
| SKF ball bearing |
| bearing seal |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | Overwrites input if none given |
| find | ✓ | str | String or regex pattern to find |
| replace | ✓ | str | Value to replace the string or regex pattern |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Round
Round numbers in a column to the nearest decimal point of your choosing.

> Click [here](/excel/standardize#round) to learn how to use Round Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Rounding a Column
```yaml
wrangles:
  - round:
  		input: Cost Per Unit
      output: Cost Rounded
      decimals: 2
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Cost Per Unit |
|:-------------:|
| 3.14159 |
| 2.71828 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Cost Per Unit | Cost Rounded |
|:-------------:| :----------: |
| 3.14159 | 3.14 |
| 2.71828 | 2.72 |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column | 
| output | | str, list | Overwrites input if none given |
| decimals | | int | Number of decimal places to round to, default is zero |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Similarity
Calculate the similarity of two **vectors**. 

> Note: Similarity only works on vectors. In order to produce vectors for a column of strings, use [create.embeddings](/python/recipes/wrangles/create#embeddings).
\{.is-info\}

## Tabset \{.tabset\}
### Sample

#### Rounding a Column
```yaml
wrangles:
  - create.embeddings:
      input: col1
      api_key: ${my_key}
      output: col1 embeddings
      
  - create.embeddings:
      input: col2
      api_key: ${my_key}
      output: col2 embeddings

  - similarity:
  		input: 
        - col1 embeddings
        - col2 embeddings
      output: similarity
      method: adjusted cosine
```
| col1 | col2 | col1 embeddings | col2 embeddings | similarity |
|:----:|:----:|:---------------:|:---------------:|:----------:|
| SKF | Timken | [1, 2, 3, 4] | [4, 3, 2, 1] | 0.158931 |
| Ball Bearing | Roller Bearing | [5, 6, 7, 8] | [5, 6, 7, 9] | 0.942437 |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | list | Two columns of vectors to compare the similarity of. | 
| output | ✓ | str | Name of the output column. |
| method | | str | The type of similarity to calculate (cosine or euclidean), defaults to cosine. Adjusted cosine adjusts the default cosine calculation to cover a range of 0-1 for typical comparisons. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

List of methods:
- cosine
- adjusted cosine
- euclidean

# Standardize
Run a standardize wrangle. *e.g. A wrangle that expands abbreviations.* A standardization wrangle must be trained first.

> Click [here](/excel/standardize) to learn how to use Standardize Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Replacing Abbreviations

```yaml
wrangles:
  - standardize:
      input: Abbrev
      output: Abbreviations
      model_id: code_here
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Abbrev   |
|:--------:|
| ASAP     |
| ETA      |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Abbreviations             |
|:-------------------------:|
| As Soon As Possible       |
| Estimated Time of Arrival |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, overwrites input |
| model_id | ✓ | str, list | The ID of the wrangle to use (do not include 'find' and 'replace') |
| case_sensitive | | boolean | Allows the wrangle to be case sensitive if set to True, default is False. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# SQL
> This does not currently work with objects. If your table contains objects, [convert.to_json](/python/recipes/wrangles/convert#to-json) prior to using SQL.
\{.is-warning\}

Apply a SQL command to the current dataframe.

Only SELECT statements are supported - the result will be the output. The current table is called df.

## Tabset \{.tabset\}
### Sample

#### Selecting a Subset of Data

```yaml
wrangles:
  - sql:
      command: |
        SELECT header1, header2
        FROM df
        WHERE header1 >= 2
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| header1 | header2 | header3 |
| :-----: | :-----: | :-----: |
| 1 | a | x |
| 2 | b | y |
| 3 | c | z |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| header1 | header2 |
| :-----: | :-----: |
| 2 | b |
| 3 | c |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| command | ✓ | str | SQL Command. The table is called df. For specific SQL syntax, this uses the SQLite dialect. | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

> Sql is not compatible with where filtering
\{.is-info\}

# Translate
Translate the input column to another language. Powered by [DeepL](https://www.deepl.com/translator). A list of language codes can be found [here](https://www.deepl.com/docs-api/translating-text/).

> Click [here](/excel/translate) to learn how to use Translate Wrangles in Excel.
\{.is-success\}

## Tabset \{.tabset\}
### Sample

#### Translating Spanish to English

```yaml
wrangles:
  - translate:
      input: Español
      output: English
      source_language: Spanish
      target_language: English (British)
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Español        |
|:-------------: |
| ¡Hola Mundo!   |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| English      |
|:------------:|
| Hello World! |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| target_language | ✓ | str | Code of the language to translate to |
| source_language | | str | Code of the language to translate from. If omitted, automatically detects the input language |
| case | | lower/ upper/ title/ sentence | Allow changing the case of the input prior to translation. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>