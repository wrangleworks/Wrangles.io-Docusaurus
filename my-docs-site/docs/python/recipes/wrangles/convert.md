---
title: "Convert"
slug: /python/recipes/wrangles/convert
---

import RecipePlayground from '@site/src/components/RecipePlayground';


# Case
Change the case of the input.

## Tabset \{.tabset\}
### Sample

#### Capitalize Input Column

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.case:\n      input: column\n      output: new column\n      case: upper\n      where: column = 'more text'"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| some text |\n| more text |\n| some more text |\n\n</td><td>\n→ \n</td><td>\n  \n| column | new column |\n| :-----: | :-----: |\n| some text | |\n| more text | MORE TEXT |\n| some more text | |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, the input column will be overwritten. |
| case | ✓ | lower / upper / title / sentence | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Data Type
Change the data type of the input.

## Tabset \{.tabset\}
### Sample

#### Change a Float to an Integer

<RecipePlayground
  editable={true}
  recipe={"    wrangles:\n      - convert.data_type:\n          input: column\n          output: new column\n          data_type: int"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| 3.14159 |\n\n</td><td>\n→ \n</td><td>\n  \n| column | new column |\n| :-----: | :-----: |\n| 3.14159 | 3 |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters

<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, the input column will be overwritten. |
| data_type | ✓ | str / float / int | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# Fraction to Decimal
Convert fractions to decimals

## Tabset \{.tabset\}
### Sample

#### Converting a Column of Fractions to Decimals

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.fraction_to_decimal:\n      input: fractions\n      output: decimals\n      decimals: 3"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| fractions |\n| :-----: |\n| 3/32 |\n| 25/64 |\n\n</td><td>\n→ \n</td><td>\n  \n| decimals |\n| :-----: |\n| 0.094 |\n| 0.391 |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If omitted, the input column will be overwritten. |
| decimals | | int | Number of decimals places to show the converted fraction to. Defaults to 4 |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# To JSON
Convert an object to a JSON representation.

## Tabset \{.tabset\}
### Sample

#### Convert Text to JSON

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.to_json:\n      input: column\n      output: new column"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| `['a', 'python', 'list']` |\n| `{'python': 'dict'}` |\n\n</td><td>\n→ \n</td><td>\n  \n| new column |\n| :-----: |\n| `[\"a\",\"python\",\"list\"]` |\n| `{\"python\":\"dict\"}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, the input column will be overwritten. |
| indent | | str, integer | If indent is a non-negative integer or string, then JSON array elements and object members will be pretty-printed with that indent level. An indent level of 0, negative, or "" will only insert newlines. None (the default) selects the most compact representation. Using a positive integer indent indents that many spaces per level. If indent is a string (such as '\t'), that string is used to indent each level. |
| sort_keys | | bool | If sort_keys is true (default: False), then the output of dictionaries will be sorted by the key. |
| ensure_ascii | | bool | If true, non-ASCII characters will be escaped. Default is false |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# From JSON
Convert a JSON string into an object

## Tabset \{.tabset\}
### Sample

#### Convert JSON to Object

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.from_json:\n      input: column\n      output: new column"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column |\n| :-----: |\n| `[\"a\",\"python\",\"list\"]` |\n| `{\"python\":\"dict\"}` |\n\n</td><td>\n→ \n</td><td>\n  \n| new column |\n| :-----: |\n| `['a', 'python', 'list']` |\n| `{'python': 'dict'}` |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | If omitted, the input column will be overwritten. |
| default | | any | Value to return if the row is empty or fails to be parsed as JSON |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# To YAML
Convert an object to a YAML representation.

## Tabset \{.tabset\}
### Sample

#### Convert a Dictionary to YAML
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.to_yaml:\n      input: column 1\n      indent: 2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n<table>\n  <tr>\n    <th>column 1</th>\n  </tr>\n  <tr>\n    <td>\n      \n     \n```python\n   {'Product Specs': [\n   \t\t{\n   \t\t\t'length': 6 inch,\n  \t\t'voltage': 24V,\n   \t\t\t'weight': 3lb\n       }\n     ]\n   }\n```\n   \n</td>\n</tr>\n</table>\n\n</td><td>\n→ \n</td><td>\n\n<table>\n  <tr>\n    <th>column 1</th>\n  </tr>\n  <tr>\n    <td>\n      \n```yaml\n    Product Specs:\n      length: 6 inch\n      voltage: 24V\n      weight: 3lb\n```\n      \n</td>\n  </tr>\n</table>\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters

<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column. | 
| output | | str, list | Name of the output column. If omitted, the input column will be overwritten |
| indent | | int | Specify the number of spaces for indentation to specify nested elements |
| sort_keys | | bool | If sort_keys is true (default: True), then the output of dictionaries will be sorted by key. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>

# From YAML
Convert a YAML representation into an object

## Tabset \{.tabset\}
### Sample

#### Convert YAML To An Object
<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - convert.from_yaml:\n      input: column 1"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n  \n<table>\n  <tr>\n    <th>column 1</th>\n  </tr>\n  <tr>\n    <td>\n\n```yaml\n    Product Specs:\n      length: 6 inch\n      voltage: 24V\n      weight: 3lb\n```\n\n</td>\n</tr>\n</table>\n\n</td><td>\n→ \n</td><td>\n\n<table>\n  <tr>\n    <th>column 1</th>\n  </tr>\n  <tr>\n    <td>\n      \n```python\n   {'Product Specs': [\n   \t\t{\n   \t\t\t'length': 6 inch,\n  \t\t'voltage': 24V,\n   \t\t\t'weight': 3lb\n       }\n     ]\n   }\n```\n      \n</td>\n  </tr>\n</table>\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters

<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column. | 
| output | | str, list | Name of the output column. If omitted, the input column will be overwritten |
| default | | any | Value to return if the row is empty or fails to be parsed as JSON |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>