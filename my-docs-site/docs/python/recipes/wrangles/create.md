---
title: "Create"
slug: /python/recipes/wrangles/create
---

import RecipePlayground from '@site/src/components/RecipePlayground';


Functions to create new columns.

# Bins
Creates a column that segments and sorts data values into bins. Bins can either be an integer or a list. When passing bins as an integer, the input data is split equally into that amount of bins. When passing bins as a list, the input data is split into bins based on the list. See below for an example of both.

## Tabset \{.tabset\}
### Sample

#### Creating Bins With an Integer

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.bins:\n      input: Data\n      output: Category\n      bins: 3\n      labels:\n        - Bad\n        - Medium\n        - Good"}
  exampleSource={"<table>\n<tr><th></th><th></th></tr>\n<tr><td>\n→ \n</td><td>\n  \n|   Data | Category   |\n|-------:|:-----------|\n|      1 | Bad        |\n|      7 | Good       |\n|      5 | Medium     |\n|      4 | Medium     |\n|      6 | Good       |\n|      3 | Bad        |\n  \n</td></tr>\n</table>"}
/>

#### Creating Bins With a List

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.bins:\n      input: Grades\n      output: Letter Grade\n      bins: \n      \t- 0\n      \t- 60\n        - 70\n        - 80\n        - 90\n        - 100\n      labels:\n        - F\n        - D\n        - C\n        - B\n        - A"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Grade | Student |\n|:-----:|:-------:|\n| 64 | Charles |\n| 92 | Sabrina |\n| 76 | Edward |\n| 84 | Wendy |\n\n</td><td>\n→ \n</td><td>\n  \n| Grade | Letter Grade | Student |\n|:-----:|:------------:|:-------:|\n| 64 | D | Charles |\n| 92 | A | Sabrina |\n| 76 | C | Edward |\n| 84 | B | Wendy |\n  \n</td></tr>\n</table>\n</div>"}
/>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.column:\n      output: New Column\n      value: new value\t\t\t# Optional, otherwise empty\n      where: column > 1"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| 1 |\n| 2 |\n| 3 |\n\n</td><td>\n→ \n</td><td>\n  \n| column | New Column |\n| :-----: | :-----: |\n| 1 | |\n| 2 | new value |\n| 3 | new value |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Creating Multiple Columns

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.column:\n      output: \n      \t- New Column 1: new value 1 # Optional, otherwise empty\n        - New Column 2: new value 2\n        - New Column 3: new value 1"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| 1 |\n| 2 |\n| 3 |\n\n</td><td>\n→ \n</td><td>\n  \n| column | New Column 1 | New Column 2 | New Column 3 |\n| :-----: | :-----: | :-----: | :-----: | :-----: |\n| 1 | new value 1 | new value 2 | new value 1 |\n| 2 | new value 1 | new value 2 | new value 1 |\n| 3 | new value 1 | new value 2 | new value 1 |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Creating Columns That Consist of Lists

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.column:\n      output: \n      \t- New Column: \n        \t\t- 4\n            - 5\n        \t\t- 6"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| 1 |\n| 2 |\n| 3 |\n\n</td><td>\n→ \n</td><td>\n  \n| column | New Column |\n| :-----: | :-----: |\n| 1 | [4, 5, 6] |\n| 2 | [4, 5, 6] |\n| 3 | [4, 5, 6] |\n  \n</td></tr>\n</table>\n</div>"}
/>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.embeddings:\n      input: my_column\n      api_key: ${my_key}\n      output: embeddings"}
  exampleSource={"<table>\n<td>\n  \n| my_column (input) | embeddings (output)|\n|:---------:|:----------:|\n| angle grinder | [0.010793785, -0.010007165, 0.0028609, -0.0139...] |\n| jig saw | [-0.008975127, 0.009314879, -0.024150735, -0.0...] |\n  \n</td>\n</table>"}
/>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.guid:\n      output: GUID Column\n      \n  # OR\n  \n  - create.uuid:\n      output: GUID Column"}
  exampleSource={"<table>\n<tr><th></th><th></th></tr>\n<tr><td>\n→ \n</td><td>\n  \n| GUID Column                          |\n|:------------------------------------:|\n| 9a13b4dd-1993-4bd2-8974-3f9a0f006d86 |\n| 1528d918-ecd7-457c-b44d-3d30705696d3 |\n  \n</td></tr>\n</table>"}
/>

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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.hash:\n      input: Description\n      output: hash\n      method: md5"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Description |\n|:-----------:|\n| The wrench is blue |\n| The hammer is yellow |\n\n</td><td>\n→ \n</td><td>\n  \n| New Column |\n|:----------:|\n| ce114e4501d2f4e2dcea3e17b546f339 |\n| a54d88e06612d820bc3be72877c74f257b561b19 |\n  \n</td></tr>\n</table>\n</div>"}
/>


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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.index:\n      output: New Index\n      start: 1    # optional\n      step: 1     # optional"}
  exampleSource={"<table>\n<tr><th></th><th></th></tr>\n<tr><td>\n→ \n</td><td>\n  \n| New Index |\n|:---------:|\n| 1         |\n| 2         |\n  \n</td></tr>\n</table>"}
/>


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

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - create.jinja:\n      output: Description\n      template:\n      \tstring: |\n        \tThis is a {{ Brand }} {{ Item_Type }} that is {{ Size }}"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Brand | Item Type | Size | \n| :-----: | :-----: | :-----: |\n| SKF | ball bearing | 10mm |\n| Timken | bearing seal | 15mm |\n\n</td><td>\n→ \n</td><td>\n  \n| Brand | Item Type | Size | Description |\n| :-----: | :-----: | :-----: | :-----: |\n| SKF | ball bearing | 10mm | This is a SKF ball bearing that is 10mm |\n| Timken | bearing seal | 15mm | This is a Timken bearing seal that is 15mm|\n\n</td></tr>\n</table>\n</div>"}
/>

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