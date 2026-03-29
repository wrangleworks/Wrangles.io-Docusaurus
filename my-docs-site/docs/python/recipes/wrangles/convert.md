---
title: "Convert"
slug: /python/recipes/wrangles/convert
---

# Case
Change the case of the input.

## Tabset \{.tabset\}
### Sample

#### Capitalize Input Column

```yaml
wrangles:
  - convert.case:
      input: column
      output: new column
      case: upper
      where: column = 'more text'
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| some text |
| more text |
| some more text |

</td><td>
→ 
</td><td>
  
| column | new column |
| :-----: | :-----: |
| some text | |
| more text | MORE TEXT |
| some more text | |
  
</td></tr>
</table>
</div>

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

```yaml
    wrangles:
      - convert.data_type:
          input: column
          output: new column
          data_type: int
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| 3.14159 |

</td><td>
→ 
</td><td>
  
| column | new column |
| :-----: | :-----: |
| 3.14159 | 3 |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - convert.fraction_to_decimal:
      input: fractions
      output: decimals
      decimals: 3
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| fractions |
| :-----: |
| 3/32 |
| 25/64 |

</td><td>
→ 
</td><td>
  
| decimals |
| :-----: |
| 0.094 |
| 0.391 |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - convert.to_json:
      input: column
      output: new column
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| `['a', 'python', 'list']` |
| `{'python': 'dict'}` |

</td><td>
→ 
</td><td>
  
| new column |
| :-----: |
| `["a","python","list"]` |
| `{"python":"dict"}` |
  
</td></tr>
</table>
</div>

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

```yaml
wrangles:
  - convert.from_json:
      input: column
      output: new column
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>

| column |
| :-----: |
| `["a","python","list"]` |
| `{"python":"dict"}` |

</td><td>
→ 
</td><td>
  
| new column |
| :-----: |
| `['a', 'python', 'list']` |
| `{'python': 'dict'}` |
  
</td></tr>
</table>
</div>

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
```yaml
wrangles:
  - convert.to_yaml:
      input: column 1
      indent: 2
```

<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>
  
<table>
  <tr>
    <th>column 1</th>
  </tr>
  <tr>
    <td>
      
     
```python
   {'Product Specs': [
   		{
   			'length': 6 inch,
  		'voltage': 24V,
   			'weight': 3lb
       }
     ]
   }
```
   
</td>
</tr>
</table>

</td><td>
→ 
</td><td>

<table>
  <tr>
    <th>column 1</th>
  </tr>
  <tr>
    <td>
      
```yaml
    Product Specs:
      length: 6 inch
      voltage: 24V
      weight: 3lb
```
      
</td>
  </tr>
</table>
  
</td></tr>
</table>
</div>

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
```yaml
wrangles:
  - convert.from_yaml:
      input: column 1
```
<div className="table-scroll">
<table>
<tr><th></th><th></th><th></th></tr>
<tr><td>
  
<table>
  <tr>
    <th>column 1</th>
  </tr>
  <tr>
    <td>

```yaml
    Product Specs:
      length: 6 inch
      voltage: 24V
      weight: 3lb
```

</td>
</tr>
</table>

</td><td>
→ 
</td><td>

<table>
  <tr>
    <th>column 1</th>
  </tr>
  <tr>
    <td>
      
```python
   {'Product Specs': [
   		{
   			'length': 6 inch,
  		'voltage': 24V,
   			'weight': 3lb
       }
     ]
   }
```
      
</td>
  </tr>
</table>
  
</td></tr>
</table>
</div>

### Parameters

<div className="table-scroll">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | Name of the input column. | 
| output | | str, list | Name of the output column. If omitted, the input column will be overwritten |
| default | | any | Value to return if the row is empty or fails to be parsed as JSON |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
</div>