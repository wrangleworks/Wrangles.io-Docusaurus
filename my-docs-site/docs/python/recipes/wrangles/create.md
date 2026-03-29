---
title: "Create"
slug: /python/recipes/wrangles/create
---

Functions to create new columns.

# Bins
Creates a column that segments and sorts data values into bins. Bins can either be an integer or a list. When passing bins as an integer, the input data is split equally into that amount of bins. When passing bins as a list, the input data is split into bins based on the list. See below for an example of both.

## Tabset \{.tabset\}
### Sample

#### Creating Bins With an Integer

```yaml
wrangles:
  - create.bins:
      input: Data
      output: Category
      bins: 3
      labels:
        - Bad
        - Medium
        - Good
```
<table>
<tr><th></th><th></th></tr>
<tr><td>
→ 
</td><td>
  
|   Data | Category   |
|-------:|:-----------|
|      1 | Bad        |
|      7 | Good       |
|      5 | Medium     |
|      4 | Medium     |
|      6 | Good       |
|      3 | Bad        |
  
</td></tr>
</table>

#### Creating Bins With a List

```yaml
wrangles:
  - create.bins:
      input: Grades
      output: Letter Grade
      bins: 
      	- 0
      	- 60
        - 70
        - 80
        - 90
        - 100
      labels:
        - F
        - D
        - C
        - B
        - A
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Grade | Student |
|:-----:|:-------:|
| 64 | Charles |
| 92 | Sabrina |
| 76 | Edward |
| 84 | Wendy |

</td><td>
→ 
</td><td>
  
| Grade | Letter Grade | Student |
|:-----:|:------------:|:-------:|
| 64 | D | Charles |
| 92 | A | Sabrina |
| 76 | C | Edward |
| 84 | B | Wendy |
  
</td></tr>
</table>
</div>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of input column. |
| output | ✓ | str, list | Name of new column |
| bins | ✓ | int, list | Defines the number of equal-width bins in the range |
| labels |  | str, list | Labels for the returned bins. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Column
Create a column with a user defined value. Defaults to None (empty).

> If you'd like to copy a column, see [here](https://wrangles.io/python/recipes/wrangles/standalone#copy).
\{.is-info\}

## Tabset \{.tabset\}
### Sample

#### Creating a New Column

```yaml
wrangles:
  - create.column:
      output: New Column
      value: new value			# Optional, otherwise empty
      where: column > 1
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| 1 |
| 2 |
| 3 |

</td><td>
→ 
</td><td>
  
| column | New Column |
| :-----: | :-----: |
| 1 | |
| 2 | new value |
| 3 | new value |
  
</td></tr>
</table>
</div>

#### Creating Multiple Columns

```yaml
wrangles:
  - create.column:
      output: 
      	- New Column 1: new value 1 # Optional, otherwise empty
        - New Column 2: new value 2
        - New Column 3: new value 1
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| 1 |
| 2 |
| 3 |

</td><td>
→ 
</td><td>
  
| column | New Column 1 | New Column 2 | New Column 3 |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| 1 | new value 1 | new value 2 | new value 1 |
| 2 | new value 1 | new value 2 | new value 1 |
| 3 | new value 1 | new value 2 | new value 1 |
  
</td></tr>
</table>
</div>

#### Creating Columns That Consist of Lists

```yaml
wrangles:
  - create.column:
      output: 
      	- New Column: 
        		- 4
            - 5
        		- 6
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| 1 |
| 2 |
| 3 |

</td><td>
→ 
</td><td>
  
| column | New Column |
| :-----: | :-----: |
| 1 | [4, 5, 6] |
| 2 | [4, 5, 6] |
| 3 | [4, 5, 6] |
  
</td></tr>
</table>
</div>

> Columns of empty lists can also be created by passing through an empty list (empty square brackets: []) to the value of the column.
\{.is-info\}

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| output | ✓ | str, list | Name or list of names of new columns or column_name: value pairs. |
| value |  | str | Value(s) to add in the new column(s). If using a dictionary in output, value can only be a string. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Embeddings
Create an embedding based on text input.

## Tabset \{.tabset\}
### Sample

#### Creating Embeddings

```yaml
wrangles:
  - create.embeddings:
      input: my_column
      api_key: ${my_key}
      output: embeddings
```

<table>
<td>
  
| my_column (input) | embeddings (output)|
|:---------:|:----------:|
| angle grinder | [0.010793785, -0.010007165, 0.0028609, -0.0139...] |
| jig saw | [-0.008975127, 0.009314879, -0.024150735, -0.0...] |
  
</td>
</table>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The column of text to create the embeddings for. |
| api_key | ✓ | str | Your OpenAI API key. |
| output | | str, list | The output column the embeddings will be saved as, defaults to none (overrides input) |
| batch_size | | int | The number of rows to submit per individual request. |
| threads | | int | The number of requests to submit in parallel. Each request contains the number of rows set as batch_size. |
| output_type | | str | Output the embeddings as a numpy array or a python list. Defaults to python list. |
| model | | str | The OpenAI embedding model to be used, defaults to "text-embedding-3-small" |
| retries | | int | The number of times to retry if the request fails. This will apply exponential backoff to help with rate limiting. |
| url | | str | Override the default url for the AI endpoint. Must use the OpenAI embeddings API. Defaults to "https://api.openai.com/v1/embeddings". |
| precision | | str | The precision of the embeddings. Default is float32. This should be used with output_type numpy array. |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# GUID / UUID
Create a column with a GUID (Globally Unique Identifier)

## Tabset \{.tabset\}
### Sample

#### Creating a New GUID Column

```yaml
wrangles:
  - create.guid:
      output: GUID Column
      
  # OR
  
  - create.uuid:
      output: GUID Column
```
<table>
<tr><th></th><th></th></tr>
<tr><td>
→ 
</td><td>
  
| GUID Column                          |
|:------------------------------------:|
| 9a13b4dd-1993-4bd2-8974-3f9a0f006d86 |
| 1528d918-ecd7-457c-b44d-3d30705696d3 |
  
</td></tr>
</table>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| output | ✓ | str, list | A name or list of names for the new columns. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Hash
Create a hash of a column.

## Tabset \{.tabset\}
### Sample

#### Creating a New Hash Column

```yaml
wrangles:
  - create.hash:
      input: Description
      output: hash
      method: md5
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Description |
|:-----------:|
| The wrench is blue |
| The hammer is yellow |

</td><td>
→ 
</td><td>
  
| New Column |
|:----------:|
| ce114e4501d2f4e2dcea3e17b546f339 |
| a54d88e06612d820bc3be72877c74f257b561b19 |
  
</td></tr>
</table>
</div>


### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The name of input column. |
| output | ✓ | str, list | A name or list of names for the new columns. |
| method |  | str | The method to use to hash the input (Default: md5). Available methods: md5, sha1, sha256, and sha512 |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Index
Create a new incremental index.

## Tabset \{.tabset\}
### Sample

#### Creating a New Index Column

```yaml
wrangles:
  - create.index:
      output: New Index
      start: 1    # optional
      step: 1     # optional
```
<table>
<tr><th></th><th></th></tr>
<tr><td>
→ 
</td><td>
  
| New Index |
|:---------:|
| 1         |
| 2         |
  
</td></tr>
</table>


### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| output | ✓ | str, list | A name or list of names for the new columns. |
| start |  | int | The number to start the index from. Default 1. |
| step |  | int | The step to increment from one row to the next by. Default 1. |
| by | | str, array | Optional. Cluster the created indexes by one or more columns |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Jinja
Makes use of a jinja template to create a description, title, or summary based on your data. 

> **Note:** Jinja templates do not allow for variables (ie column headers) with spaces. To combat this, the wrangle will automatically replace spaces with an underscore. Therefore, it is important to use underscores instead of spaces when implementing variables in your jinja template.
\{.is-info\}

## Tabset \{.tabset\}
### Sample

#### Creating a Jinja Description

```yaml
wrangles:
  - create.jinja:
      output: Description
      template:
      	string: |
        	This is a {{ Brand }} {{ Item_Type }} that is {{ Size }}
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| Brand | Item Type | Size | 
| :-----: | :-----: | :-----: |
| SKF | ball bearing | 10mm |
| Timken | bearing seal | 15mm |

</td><td>
→ 
</td><td>
  
| Brand | Item Type | Size | Description |
| :-----: | :-----: | :-----: | :-----: |
| SKF | ball bearing | 10mm | This is a SKF ball bearing that is 10mm |
| Timken | bearing seal | 15mm | This is a Timken bearing seal that is 15mm|

</td></tr>
</table>
</div>

> Using a "|" character denotes a multi-line string in yaml which preserves line breaks. Use ">" if a multi-line string is used and you do not wish to preserve line breaks. See [jinja documentation](https://jinja.palletsprojects.com/en/3.1.x/templates/) for information on how to write a jinja template.


### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | str | Name of input column containing a dictionary. Defaults to a dictionary of all columns |
| output | ✓ | str, list |  |
| template | ✓ | string/ column/ file | Jinja template to be used. Can be represented as a string within yaml, a column in the data or a seperate file. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>