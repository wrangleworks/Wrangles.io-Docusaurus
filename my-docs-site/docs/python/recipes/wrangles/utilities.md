---
title: "Utilities"
slug: /python/recipes/wrangles/utilities
---

# Accordion
Allows applying a series of wrangles to the elements of a list individually.

## Tabset \{.tabset\}
### Sample

#### Example
This example shows how to use convert.case on a list of strings, where normally it would not work on a list.

```yaml
wrangles:
- accordion:
    input: list_column
    output: modified_lists
    wrangles:
      - convert.case:
          input: list_column
          output: modified_lists
          case: upper
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| list_column |
|:-----------:|
| ["a", "b", "c"] |
| ["e", "f", "g"] |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| list_column | modified_lists |
|:-----------:|:--------------:|
| ["a", "b", "c"] | ["A", "B", "C"] |
| ["e", "f", "g"] | ["E", "F", "G"] |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The column(s) containing the list(s) that the wrangles will be applied to the elements of. **Note:** When accordioning on multiple columns, they must have matching element counts. | 
| output | ✓ | str, list | Output of the wrangles to save back to the dataframe. **Note:** All columns which are created within the accordion will be dropped if they are not listed in the output. |
| wrangles | ✓ | list | List of wrangles to apply. |
| propagate | | str, list | Limit the column(s) that will be available to the wrangles and replicated for each element. If not specified, all columns will be propogated. This may be useful to limit the memory use for large datasets. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Batch
Execute a series of wrangles broken into a series of batches. The batches can optionally be executed in parallel with the threads parameter, and provide an error output to catch errors.

## Tabset \{.tabset\}
### Sample

#### Example
This example shows how to use batch on an Extract AI Wrangle

```yaml
wrangles:
  - batch:
  		batch_size: 2
      threads: 1
      wrangles:
      	- extract.ai:
            api_key: Your OpenAI api key
            input: Product Description
            output:
              Title:
                type: string
                description: Title of the product
          
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Product Description |
|:-------------: |
| Sleep better with our Memory Foam Pillow, designed to contour to your head and neck. |
| Stay comfortable and stylish with our Organic Cotton T-Shirt, made from soft, breathable fabric. |
| Keep drinks hot or cold with our Stainless Steel Water Bottle, featuring durable insulation. |
| Enjoy crisp sound and long battery life with our Wireless Bluetooth Earbuds. |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Product Description | Title |
|:------------------: | :------------: |
| Sleep better with our Memory Foam Pillow, designed to contour to your head and neck. | Memory Foam Pillow |
| Stay comfortable and stylish with our Organic Cotton T-Shirt, made from soft, breathable fabric. | Organic Cotton T-Shirt |
| Keep drinks hot or cold with our Stainless Steel Water Bottle, featuring durable insulation. | Stainless Steel Water Bottle |
| Enjoy crisp sound and long battery life with our Wireless Bluetooth Earbuds. | Wireless Bluetooth Earbuds |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| batch_size | ✓ | int | The amount of rows in each batch | 
| wrangles | ✓ | dict | Wrangles to apply to the data (this can be thought of as a sub recipe). |
| threads | | int | The amount of batches than are run in parallel |
| on_error | | dict | Provides a default output if there is an error within the batch. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Concurrent
The Concurrent Wrangle allows users to run multiple wrangles concurrently rather than sequentially. Wrangles must specify output columns to be used concurrently. When using concurrent, Wrangles may not complete in a predictable order and it is not recommended to update overlapping columns with different wrangles.

See [here](https://wrangles.io/python/connectors/concurrent) for the Concurrent Connector.

## Tabset \{.tabset\}
### Sample
#### Running Wrangles Concurrently
```yaml
wrangles:
  - concurrent:
      wrangles:
        - extract.codes:
        	  input: Products
            output: Part Codes
            
        - extract.attributes:
            input: Products
            output: Attributes
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Products |
|:--------:|
| SKF ball brg 2" od 6202 |
| brg seal 1" id 5493 |
| 3lb hammer 87102 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Products | Part Codes | Attributes |
|:--------:|:----------:|:----------:|
| ball brg 2" od 6202 | 6202 | \{"length":["2in"]\} |
| brg seal 1" id 5493 | 5493 | \{"length":["1in"]\} |
| 3lb hammer 87102 | 87102 | \{"weight":["3lb"]\} |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| wrangles | ✓ | list | The wrangles section of a recipe to execute for each combination of variables | 
| max_concurrency | | int | The maximum number of wrangles to execute in parallel |
&lt;/div>




  
# Copy
Create a copy of columns in a dataframe.

## Tabset \{.tabset\}
### Sample

#### Copying a Column With Input and Output
```yaml
wrangles:
  - copy:
  		input: Product Data
      output: Product Data (copy)
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

| Product Data | Product Data (copy) |
|:----------:| :-------------------: |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Copying a Column Express as a Dictionary
```yaml
wrangles:
  - copy:
  		Product Data: Product Data (copy)
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

| Product Data | Product Data (copy) |
|:----------:| :-------------------: |
| SKF ball bearing | SKF ball bearing |
| bearing seal | bearing seal |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The column(s) which to copy. | 
| output | ✓ | str, list | The name of output column(s) |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Drop
Drop columns within a dataframe.

## Tabset \{.tabset\}
### Sample

#### Dropping a Column
```yaml
wrangles:
  - drop:
  		columns:
      	- Material
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Product Data | Material |
|:------------:| :------: |
| SKF ball brg | Ceramic |
| brg seal | Rubber |

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
| columns | ✓ | str, list | Column(s) to be droppped. | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


> Drop is not compatible with where filtering
\{.is-info\}

# Explode
Explode a column of lists into rows.

## Tabset \{.tabset\}
### Sample

#### Exploding a Column

```yaml
wrangles:
  - explode:
      input: Products
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer | Products |
| :----------: | :-----: |
| SKF | [Ball Bearing, Bearing Seal] |
| Milwaukee | [Angle Grinder, Drill, Impact Driver] |
| Schneider | Solid State Relay |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Manufacturer | Products |
| :----------: | :-----: |
| SKF | Ball Bearing |
| SKF | Bearing Seal |
| Milwaukee | Angle Grinder |
| Milwaukee | Drill |
| Milwaukee | Impact Driver |
| Schneider | Solid State Relay |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the column(s) to explode. If multiple columns are included they must contain lists of the same length. |
| reset_index | | bool | Reset the index after exploding. Default False. |
| drop_empty | | bool | Empty lists will not produce a row in the exploded output. Default False. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Filter
Filter the dataframe based on the contents.

## Tabset \{.tabset\}
### Sample

#### Filtering a Column

```yaml
wrangles:
  # Select only red fruits
  - filter:
  		input: Color
      equal:
      	- red
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Fruit      | Color   |
|:-----------|:--------|
| Apple      | red     |
| Apple      | green   |
| Orange     | orange  |
| Strawberry | red     |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Fruit      | Color   |
|:-----------|:--------|
| Apple      | red     |
| Strawberry | red     |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


> If **input** is not provided, **where** must be used. See [Using Filters and Where](/excel/Let's-Get-Ready-To-Wrangle/filtering) for more information.
\{.is-info\}

### Parameters
&lt;div style="overflow-x: auto">
 
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
&lt;/div>


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
&lt;div style="overflow-x: auto">
 
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
&lt;/div>

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

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Part Code | 
|:---------:|
| 6202      |
| br549     |
| 554-114   |
| 554-112   |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Part Code | Part Code A | Part Code B | Part Code C |
|:---------:|:-----------:|:-----------:|:-----------:|
| 6202      | 6202A       | 6202B       | 6202C       |
| br549     | br549A      | br549B      | br549C      |
| 554-114   | 554-114A    | 554-114B    | 554-114C    |
| 554-112   | 554-112A    | 554-112B    | 554-112C    |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Using Unique Variables Per Row
Unique variables for each row can be utlized by following the example below where a different model id is used for each row.

```yaml
wrangles:
  - matrix:
      variables:
        model_id: set(Model ID)
      wrangles:
        - extract.custom:
            input: Description
            output: Extracted Values
            model_id: ${model_id}
            where: "[Model ID] = ?"
            where_params:
               - ${model_id}
```


&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Description | Model ID |
|:-----------:|:--------:|
| The SKF 6202 bearing is the best bearing in the world | xxxxxxxx-xxxx-xxxx |
| The Timken 6102 bearing is indestructible | yyyyyyyy-yyyy-yyyy |
| The Milwaukee impact has 1200lft-lbs of torque | zzzzzzzz-zzzz-zzzz |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Description | Model ID | Extracted Values |
|:-----------:|:--------:|:----------------:|
| The SKF 6202 bearing is the best bearing in the world | xxxxxxxx-xxxx-xxxx | 6202 |
| The Timken 6102 bearing is indestructible | yyyyyyyy-yyyy-yyyy | indestructible |
| The Milwaukee impact has 1200lft-lbs of torque | zzzzzzzz-zzzz-zzzz | 1200ft-lbs |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| variables | ✓ | dict | A dictionary of variables to pass to the wrangle. The key is the variable name and the value is a list of values. |
| wrangles | ✓ | list | The wrangles to apply to the dataframe. Each wrangle will be run for each combination of the variables. |
| functions | | function, list  | Any user defined custom functions. |
| strategy | | str | Determines how to combine variables when there are multiple. loop (default) iterates over each set of variables, repeating shorter lists until the longest is completed. permutations uses the combination of all variables against all other variables. |
&lt;/div>


# Reindex
Conform DataFrame to new index with optional filling logic.

## Tabset \{.tabset\}
### Sample

#### Reindexing a Dataframe
```yaml
wrangles:
  - reindex:
  		index: 
      	- 5
        - 4
        - 3
        - 2
        - 1
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
|      | Product Data | Material |
| :--: | :----------: | :------: |
| 1 | SKF ball brg | Ceramic |
| 2 | brg seal | Rubber |
| 3 | Ball valve | Brass |
| 4 | Ceramic cartridge | Ceramic |
| 5 | Needle Bearing | Stainless Steel |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>


|      | Product Data | Material |
| :--: | :----------: | :------: |
| 5 | Needle Bearing | Stainless Steel |
| 4 | Ceramic cartridge | Ceramic |
| 3 | Ball valve | Brass |
| 2 | brg seal | Rubber |
| 1 | SKF ball brg | Ceramic |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| axis | | str, int | Axis to target. Can be either the axis name (‘index’, ‘columns’) or number (0, 1). |
| columns | | str, list | New labels for the columns. Preferably an Index object to avoid duplicating data. |
| index |  | str, list | New labels for the index. Preferably an Index object to avoid duplicating data. |
| labels |  | str, list | New labels / index to conform the axis specified by ‘axis’ to. | 
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


> Note: Cannot specify both 'axis' and any of 'index' or 'columns'
\{.is-info\}


> Reindex is not compatible with where filtering
\{.is-info\}

# Rename
Rename a column or list of columns.

## Tabset \{.tabset\}
### Sample

#### Renaming Columns With Input and Output

```yaml
wrangles:
  - rename:
      input:
      	- Manufacturer Name
      	- Manufacturer Part Number
      output:
      	- Manufacturer
       	- MPN
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer Name | Manufacturer Part Number |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | MPN |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Renaming Columns Without Using Input and Output
Rename is a unique Wrangle that can be used without naming input and output. Simply list the columns to be renamed with their new names seperated by a colon
```yaml
wrangles:
  - rename:
      Manufacturer Name: Manufacturer
      Manufacturer Part Number: MPN
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer Name | Manufacturer Part Number |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Manufacturer | MPN |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Using Wrangles in Rename
Wrangles can be used to rename columns, but they must be used instead of using the standard rename. Simply add wrangles as a parameter, then add the wrangles you wish to use. **Note:** *if using wrangles to rename, a column named 'columns' must be returned.*

```yaml
  - rename:
      wrangles:
        - convert.case:
            input: columns
            case: upper
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Manufacturer Name | Manufacturer Part Number |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| MANUFACTURER NAME | MANUFACTURER PART NUMBER |
|:--------:|:--------:| 
| SKF | 302-2 |
| Timken | PF48 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | str, list | | 
| output | | str, list | |
| wrangles | | array | Use wrangles to transform the column names. The input is named 'columns' and the final result must also include the column named 'columns'. **This can only be used instead of the standard rename.** |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


> Rename is not compatible with where filtering
\{.is-info\}

# Sort
Allows users to sort their data.

## Tabset \{.tabset\}
### Sample

#### Replacing Abbreviations

```yaml
wrangles:
  - sort:
      by: Price
      ascending: true
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Item | Price |
|:----:|:-----:|
| Hammer | 11.99 |
| Chisel | 4.99 |
| Drill | 29.99 |
| Wrench | 6.99 |
| Saw | 13.99 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Item | Price |
|:----:|:-----:|
| Chisel | 4.99 |
| Wrench | 6.99 |
| Hammer | 11.99 |
| Saw | 13.99 |
| Drill | 29.99 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| by | ✓ | str, list | Name or list of the column(s) to sort by. | 
| ascending | | bool | Sort ascending vs. descending. Specify a list to sort multiple columns in different orders. If this is a list of bools then it must match the length of the by. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Transpose
Transpose a dataframe.

#### Transposing a Dataframe
```yaml
wrangles:
  - transpose: {}
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Product Data | Material |
|:------------:| :------: |
| SKF ball brg | Ceramic |
| brg seal | Rubber |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| | | |
| -- | -- | -- |
| Product Data | SKF ball bearing | bearing seal |
| Material | Ceramic | Rubber |
    
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


> Transpose is not compatible with where filtering
\{.is-info\}

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

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
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| df | ✓ | DataFrame |  |
| wrangles | ✓ | list | List of wrangles to apply |
| except | | list | An action to take if the wrangles encounter an error. This can contain a list of wrangles or a dictionary of column names and values. If except is not provided, the error will be logged and the recipe will continue. |
| functions | | function, list, dict | User provided custom functions to be used in the Try. |
| variables | | dict | Variables to be used in the Try. |
| retries | | int | Number of times to retry the wrangles if an error occurs. Default 0. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>