---
title: "Utilities"
slug: /python/recipes/wrangles/utilities
---

import RecipePlayground from '@site/src/components/RecipePlayground';


# Accordion
Allows applying a series of wrangles to the elements of a list individually.

## Tabset \{.tabset\}
### Sample

#### Example
This example shows how to use convert.case on a list of strings, where normally it would not work on a list.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n- accordion:\n    input: list_column\n    output: modified_lists\n    wrangles:\n      - convert.case:\n          input: list_column\n          output: modified_lists\n          case: upper"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| list_column |\n|:-----------:|\n| [\"a\", \"b\", \"c\"] |\n| [\"e\", \"f\", \"g\"] |\n\n</td><td>\n→ \n</td><td>\n\n| list_column | modified_lists |\n|:-----------:|:--------------:|\n| [\"a\", \"b\", \"c\"] | [\"A\", \"B\", \"C\"] |\n| [\"e\", \"f\", \"g\"] | [\"E\", \"F\", \"G\"] |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The column(s) containing the list(s) that the wrangles will be applied to the elements of. **Note:** When accordioning on multiple columns, they must have matching element counts. | 
| output | ✓ | str, list | Output of the wrangles to save back to the dataframe. **Note:** All columns which are created within the accordion will be dropped if they are not listed in the output. |
| wrangles | ✓ | list | List of wrangles to apply. |
| propagate | | str, list | Limit the column(s) that will be available to the wrangles and replicated for each element. If not specified, all columns will be propogated. This may be useful to limit the memory use for large datasets. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Batch
Execute a series of wrangles broken into a series of batches. The batches can optionally be executed in parallel with the threads parameter, and provide an error output to catch errors.

## Tabset \{.tabset\}
### Sample

#### Example
This example shows how to use batch on an Extract AI Wrangle

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - batch:\n  \t\tbatch_size: 2\n      threads: 1\n      wrangles:\n      \t- extract.ai:\n            api_key: Your OpenAI api key\n            input: Product Description\n            output:\n              Title:\n                type: string\n                description: Title of the product\n          "}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Product Description |\n|:-------------: |\n| Sleep better with our Memory Foam Pillow, designed to contour to your head and neck. |\n| Stay comfortable and stylish with our Organic Cotton T-Shirt, made from soft, breathable fabric. |\n| Keep drinks hot or cold with our Stainless Steel Water Bottle, featuring durable insulation. |\n| Enjoy crisp sound and long battery life with our Wireless Bluetooth Earbuds. |\n\n</td><td>\n→ \n</td><td>\n\n| Product Description | Title |\n|:------------------: | :------------: |\n| Sleep better with our Memory Foam Pillow, designed to contour to your head and neck. | Memory Foam Pillow |\n| Stay comfortable and stylish with our Organic Cotton T-Shirt, made from soft, breathable fabric. | Organic Cotton T-Shirt |\n| Keep drinks hot or cold with our Stainless Steel Water Bottle, featuring durable insulation. | Stainless Steel Water Bottle |\n| Enjoy crisp sound and long battery life with our Wireless Bluetooth Earbuds. | Wireless Bluetooth Earbuds |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| batch_size | ✓ | int | The amount of rows in each batch | 
| wrangles | ✓ | dict | Wrangles to apply to the data (this can be thought of as a sub recipe). |
| threads | | int | The amount of batches than are run in parallel |
| on_error | | dict | Provides a default output if there is an error within the batch. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Concurrent
The Concurrent Wrangle allows users to run multiple wrangles concurrently rather than sequentially. Wrangles must specify output columns to be used concurrently. When using concurrent, Wrangles may not complete in a predictable order and it is not recommended to update overlapping columns with different wrangles.

See [here](https://wrangles.io/python/connectors/concurrent) for the Concurrent Connector.

## Tabset \{.tabset\}
### Sample
#### Running Wrangles Concurrently
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - concurrent:\n      wrangles:\n        - extract.codes:\n        \t  input: Products\n            output: Part Codes\n            \n        - extract.attributes:\n            input: Products\n            output: Attributes"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Products |\n|:--------:|\n| SKF ball brg 2\" od 6202 |\n| brg seal 1\" id 5493 |\n| 3lb hammer 87102 |\n\n</td><td>\n→ \n</td><td>\n\n| Products | Part Codes | Attributes |\n|:--------:|:----------:|:----------:|\n| ball brg 2\" od 6202 | 6202 | \\{\"length\":[\"2in\"]\\} |\n| brg seal 1\" id 5493 | 5493 | \\{\"length\":[\"1in\"]\\} |\n| 3lb hammer 87102 | 87102 | \\{\"weight\":[\"3lb\"]\\} |\n    \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| wrangles | ✓ | list | The wrangles section of a recipe to execute for each combination of variables | 
| max_concurrency | | int | The maximum number of wrangles to execute in parallel |
</div>




  
# Copy
Create a copy of columns in a dataframe.

## Tabset \{.tabset\}
### Sample

#### Copying a Column With Input and Output
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - copy:\n  \t\tinput: Product Data\n      output: Product Data (copy)"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Product Data |\n|:----------:|\n| SKF ball brg |\n| brg seal |\n\n</td><td>\n→ \n</td><td>\n\n| Product Data | Product Data (copy) |\n|:----------:| :-------------------: |\n| SKF ball bearing | SKF ball bearing |\n| bearing seal | bearing seal |\n    \n</td></tr>\n</table>\n</div>"}
/>

#### Copying a Column Express as a Dictionary
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - copy:\n  \t\tProduct Data: Product Data (copy)"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Product Data |\n|:----------:|\n| SKF ball brg |\n| brg seal |\n\n</td><td>\n→ \n</td><td>\n\n| Product Data | Product Data (copy) |\n|:----------:| :-------------------: |\n| SKF ball bearing | SKF ball bearing |\n| bearing seal | bearing seal |\n    \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The column(s) which to copy. | 
| output | ✓ | str, list | The name of output column(s) |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Drop
Drop columns within a dataframe.

## Tabset \{.tabset\}
### Sample

#### Dropping a Column
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - drop:\n  \t\tcolumns:\n      \t- Material"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Product Data | Material |\n|:------------:| :------: |\n| SKF ball brg | Ceramic |\n| brg seal | Rubber |\n\n</td><td>\n→ \n</td><td>\n\n| Product Data |\n|:----------:|\n| SKF ball bearing |\n| bearing seal |\n    \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| columns | ✓ | str, list | Column(s) to be droppped. | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

> Drop is not compatible with where filtering
\{.is-info\}

# Explode
Explode a column of lists into rows.

## Tabset \{.tabset\}
### Sample

#### Exploding a Column

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - explode:\n      input: Products"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer | Products |\n| :----------: | :-----: |\n| SKF | [Ball Bearing, Bearing Seal] |\n| Milwaukee | [Angle Grinder, Drill, Impact Driver] |\n| Schneider | Solid State Relay |\n\n</td><td>\n→ \n</td><td>\n  \n| Manufacturer | Products |\n| :----------: | :-----: |\n| SKF | Ball Bearing |\n| SKF | Bearing Seal |\n| Milwaukee | Angle Grinder |\n| Milwaukee | Drill |\n| Milwaukee | Impact Driver |\n| Schneider | Solid State Relay |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the column(s) to explode. If multiple columns are included they must contain lists of the same length. |
| reset_index | | bool | Reset the index after exploding. Default False. |
| drop_empty | | bool | Empty lists will not produce a row in the exploded output. Default False. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Filter
Filter the dataframe based on the contents.

## Tabset \{.tabset\}
### Sample

#### Filtering a Column

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  # Select only red fruits\n  - filter:\n  \t\tinput: Color\n      equal:\n      \t- red"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Fruit      | Color   |\n|:-----------|:--------|\n| Apple      | red     |\n| Apple      | green   |\n| Orange     | orange  |\n| Strawberry | red     |\n\n</td><td>\n→ \n</td><td>\n\n| Fruit      | Color   |\n|:-----------|:--------|\n| Apple      | red     |\n| Strawberry | red     |\n  \n</td></tr>\n</table>\n</div>"}
/>

> If **input** is not provided, **where** must be used. See [Using Filters and Where](/excel/Let's-Get-Ready-To-Wrangle/filtering) for more information.
\{.is-info\}

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | list | Name of the column to filter on. If multiple are provided, all must match the criteria. **Where parameter must be used if not provided**. Defaults to an empty list.| 
| equal | | str, list | Select rows where the values equal a given value. Defaults to none. |
| not_equal | | str, list | Select rows where the values do not equal a given value. Defaults to none. |
| is_in | | str, list | Select rows where the values are in a given list. Defaults to none. |
| not_in | | str, list | Select rows where the values are not in a given list. Defaults to none. |
| greater_than | | int, float | Select rows where the values are greater than a specified value. Does include the value itself. Defaults to none. |
| greater_than_equal_to | | int, float | Select rows where the values are greater than a specified value. Does include the value itself. Defaults to none. |
| less_than | | int, float | Select rows where the values are less than a specified value. Does not include the value itself. Defaults to none. |
| less_than_equal_to | | int, float | Select rows where the values are less than a specified value. Does include the value itself. Defaults to none. |
| between | | list | Value or list of values to filter that are in between two parameter values. Defaults to none. |
| contains | | str | Select rows where the input contains the value. Allows regular expressions. Defaults to none. |
| not_contains | | str | Select rows where the input does not contain the value. Allows regular expressions. Defaults to none. |
| is_null | | bool | If true, select all rows where the value is NULL. If false, where is not NULL. Defaults to none. |
| where | | str | Use a SQL WHERE clause to filter the data. **Input parameter must be used if where is not provided.** It is suggested to use where independently of all other parameters except where_params. Defaults to none. |
| where_params | list, obj | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name). |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

> If **input** is not provided, **where** must be used. See [Using Filters and Where](/excel/Let's-Get-Ready-To-Wrangle/filtering) for more information.
\{.is-info\}

# Log
Print the current status of the dataframe. Only a sample of rows will be logged.

## Tabset \{.tabset\}
### Sample

#### Logging All Columns to Terminal

```yaml

wrangles:
  - log: {}
```

#### Logging Specific Columns to Terminal

```yaml

wrangles:
  - log:
  		columns:
      	- column1
        - column2
```

#### Logging to a File

```yaml

wrangles:
  - log:
  		write:
      	- file:
        		name: output/filepath
            columns:
            	- column 1
              - column 2
```


### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| columns | | list | List of specific columns to log. Defaults to all columns. |
| write | | list | Allows for an intermediate output to a file/dataframe/database etc. |
| error | | str | Log an error to the console. |
| warning | | str | Log a warning to the console. |
| info | | str | Log info to the console. |
| log_data | | bool | Whether to log a sample of the contents of the dataframe. Default True. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Matrix
Apply a matrix of wrangles to the dataframe. This will run the wrangles for each combination of the variables. Click [here](https://wrangles.io/en/python/connectors/matrix) for the connector equivalent of this wrangle.

## Tabset \{.tabset\}
### Sample
#### Using Hardcoded Variables
Run a simple custom function with a variable that is a list of values

```yaml
wrangles:
  - matrix:
      variables:
        var: [A,B,C]
      wrangles:
        - custom.test_fn:
            input: Col1
            output: Part Code ${var}
            value: ${var}
```

```python
def test_fn(Col1, value):
    return Col1 + value
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Part Code | 
|:---------:|
| 6202      |
| br549     |
| 554-114   |
| 554-112   |

</td><td>
→ 
</td><td>

| Part Code | Part Code A | Part Code B | Part Code C |
|:---------:|:-----------:|:-----------:|:-----------:|
| 6202      | 6202A       | 6202B       | 6202C       |
| br549     | br549A      | br549B      | br549C      |
| 554-114   | 554-114A    | 554-114B    | 554-114C    |
| 554-112   | 554-112A    | 554-112B    | 554-112C    |
  
</td></tr>
</table>
</div>

#### Using Unique Variables Per Row
Unique variables for each row can be utlized by following the example below where a different model id is used for each row.

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - matrix:\n      variables:\n        model_id: set(Model ID)\n      wrangles:\n        - extract.custom:\n            input: Description\n            output: Extracted Values\n            model_id: ${model_id}\n            where: \"[Model ID] = ?\"\n            where_params:\n               - ${model_id}"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Description | Model ID |\n|:-----------:|:--------:|\n| The SKF 6202 bearing is the best bearing in the world | xxxxxxxx-xxxx-xxxx |\n| The Timken 6102 bearing is indestructible | yyyyyyyy-yyyy-yyyy |\n| The Milwaukee impact has 1200lft-lbs of torque | zzzzzzzz-zzzz-zzzz |\n\n</td><td>\n→ \n</td><td>\n\n| Description | Model ID | Extracted Values |\n|:-----------:|:--------:|:----------------:|\n| The SKF 6202 bearing is the best bearing in the world | xxxxxxxx-xxxx-xxxx | 6202 |\n| The Timken 6102 bearing is indestructible | yyyyyyyy-yyyy-yyyy | indestructible |\n| The Milwaukee impact has 1200lft-lbs of torque | zzzzzzzz-zzzz-zzzz | 1200ft-lbs |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| variables | ✓ | dict | A dictionary of variables to pass to the wrangle. The key is the variable name and the value is a list of values. |
| wrangles | ✓ | list | The wrangles to apply to the dataframe. Each wrangle will be run for each combination of the variables. |
| functions | | function, list  | Any user defined custom functions. |
| strategy | | str | Determines how to combine variables when there are multiple. loop (default) iterates over each set of variables, repeating shorter lists until the longest is completed. permutations uses the combination of all variables against all other variables. |
</div>


# Reindex
Conform DataFrame to new index with optional filling logic.

## Tabset \{.tabset\}
### Sample

#### Reindexing a Dataframe
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - reindex:\n  \t\tindex: \n      \t- 5\n        - 4\n        - 3\n        - 2\n        - 1"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n|      | Product Data | Material |\n| :--: | :----------: | :------: |\n| 1 | SKF ball brg | Ceramic |\n| 2 | brg seal | Rubber |\n| 3 | Ball valve | Brass |\n| 4 | Ceramic cartridge | Ceramic |\n| 5 | Needle Bearing | Stainless Steel |\n\n</td><td>\n→ \n</td><td>\n\n\n|      | Product Data | Material |\n| :--: | :----------: | :------: |\n| 5 | Needle Bearing | Stainless Steel |\n| 4 | Ceramic cartridge | Ceramic |\n| 3 | Ball valve | Brass |\n| 2 | brg seal | Rubber |\n| 1 | SKF ball brg | Ceramic |\n    \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| axis | | str, int | Axis to target. Can be either the axis name (‘index’, ‘columns’) or number (0, 1). |
| columns | | str, list | New labels for the columns. Preferably an Index object to avoid duplicating data. |
| index |  | str, list | New labels for the index. Preferably an Index object to avoid duplicating data. |
| labels |  | str, list | New labels / index to conform the axis specified by ‘axis’ to. | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

> Note: Cannot specify both 'axis' and any of 'index' or 'columns'
\{.is-info\}

> Reindex is not compatible with where filtering
\{.is-info\}

# Rename
Rename a column or list of columns.

## Tabset \{.tabset\}
### Sample

#### Renaming Columns With Input and Output

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - rename:\n      input:\n      \t- Manufacturer Name\n      \t- Manufacturer Part Number\n      output:\n      \t- Manufacturer\n       \t- MPN"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer Name | Manufacturer Part Number |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | MPN |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Renaming Columns Without Using Input and Output
Rename is a unique Wrangle that can be used without naming input and output. Simply list the columns to be renamed with their new names seperated by a colon
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - rename:\n      Manufacturer Name: Manufacturer\n      Manufacturer Part Number: MPN"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer Name | Manufacturer Part Number |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n\n</td><td>\n→ \n</td><td>\n\n| Manufacturer | MPN |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Using Wrangles in Rename
Wrangles can be used to rename columns, but they must be used instead of using the standard rename. Simply add wrangles as a parameter, then add the wrangles you wish to use. **Note:** *if using wrangles to rename, a column named 'columns' must be returned.*

<RecipePlayground
  editable={true}
  recipe={"  - rename:\n      wrangles:\n        - convert.case:\n            input: columns\n            case: upper"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Manufacturer Name | Manufacturer Part Number |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n\n</td><td>\n→ \n</td><td>\n\n| MANUFACTURER NAME | MANUFACTURER PART NUMBER |\n|:--------:|:--------:| \n| SKF | 302-2 |\n| Timken | PF48 |\n  \n</td></tr>\n</table>\n</div>"}
/>


### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | str, list | | 
| output | | str, list | |
| wrangles | | array | Use wrangles to transform the column names. The input is named 'columns' and the final result must also include the column named 'columns'. **This can only be used instead of the standard rename.** |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

> Rename is not compatible with where filtering
\{.is-info\}

# Sort
Allows users to sort their data.

## Tabset \{.tabset\}
### Sample

#### Replacing Abbreviations

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - sort:\n      by: Price\n      ascending: true"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Item | Price |\n|:----:|:-----:|\n| Hammer | 11.99 |\n| Chisel | 4.99 |\n| Drill | 29.99 |\n| Wrench | 6.99 |\n| Saw | 13.99 |\n\n</td><td>\n→ \n</td><td>\n  \n| Item | Price |\n|:----:|:-----:|\n| Chisel | 4.99 |\n| Wrench | 6.99 |\n| Hammer | 11.99 |\n| Saw | 13.99 |\n| Drill | 29.99 |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| by | ✓ | str, list | Name or list of the column(s) to sort by. | 
| ascending | | bool | Sort ascending vs. descending. Specify a list to sort multiple columns in different orders. If this is a list of bools then it must match the length of the by. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Transpose
Transpose a dataframe.

#### Transposing a Dataframe
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - transpose: {}"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n| Product Data | Material |\n|:------------:| :------: |\n| SKF ball brg | Ceramic |\n| brg seal | Rubber |\n\n</td><td>\n→ \n</td><td>\n\n| | | |\n| -- | -- | -- |\n| Product Data | SKF ball bearing | bearing seal |\n| Material | Ceramic | Rubber |\n    \n</td></tr>\n</table>\n</div>"}
/>

> Transpose is not compatible with where filtering
\{.is-info\}

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Try
Try a list of wrangles and catch any errors that occur

## Tabset \{.tabset\}
### Sample
#### Using Try in a Recipe
```yaml
wrangles:
  - try:
      wrangles:
        - risky_wrangle:
            input: column
      except:
        - backup_wrangle:
            input: column
```

### Parameters
<div className="table-scroll">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| df | ✓ | DataFrame |  |
| wrangles | ✓ | list | List of wrangles to apply |
| except | | list | An action to take if the wrangles encounter an error. This can contain a list of wrangles or a dictionary of column names and values. If except is not provided, the error will be logged and the recipe will continue. |
| functions | | function, list, dict | User provided custom functions to be used in the Try. |
| variables | | dict | Variables to be used in the Try. |
| retries | | int | Number of times to retry the wrangles if an error occurs. Default 0. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>