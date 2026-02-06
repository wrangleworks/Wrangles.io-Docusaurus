---
title: "Extract2"
slug: /python/recipes/wrangles/extract2
---

Functions to extract information from unstructured text.


> Click [here](/excel/extract) to learn how to use Extract Wrangles in Excel.
\{.is-success\}

# Address<br />
Extract geographical information from unstructured text such as streets, cities or countries.<br />

## Tabset \{.tabset\}
### Sample

#### Extracting Street Name

```yaml
wrangles:
  - extract.address:
      input: Location
      output: Street
      dataType: streets
      where: SUBSTRING(Location, 1, 3) = '221'
```

| Location                                         | Street             |
|:-------------------------------------------------|:--------------------|
| 221 B Baker St., London, England, United Kingdom | ['221 B Baker St.'] |
| London SW1A 1AA, London, England, United Kingdom | |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| dataType | ✓ | streets / cities / regions / countries | Specific part of the address to extract |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# AI
Use the power of AI (OpenAI's chatGPT in particular) to extract meaningful data. There are two ways to use extract.ai: recipe based and model based.

## Tabset \{.tabset\}
### Sample

#### Recipe Based
With a recipe based extract.ai, the output parameters are listed in the recipe itself. With a recipe based extract.ai, all items listed in the output are returned as individual columns.

This method can be used by just simply passing through a description or by providing a full list of the output parameters.

##### Making Use of Output Parameters
```yaml
wrangles:
  - extract.ai:
  		api_key: Your OpenAI api key
      input: Product Specs # optional
      output:
      	Blade Diameter:
        	type: number
          description: The diameter of the blade used, reported in inches.
          default: N/A
          examples:
            - 4.5"
            - 8 inch
        Max. RPM:
        	type: number
          description: The maximum rotations per minute (rpm).
          default: 3600
          examples:
            - 3600 max. rpm
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Product Specs                    |
|:---------------------------------|
| 18V Cordless 4.5in angle grinder |
| 120V 12in chop saw 3600 max. rpm |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Blade Diameter | Max. RPM |
|:--------------:|:--------:|
| 4.5 inches |  |
| 12 inches | 3600 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

##### Description Only
```yaml
wrangles:
  - extract.ai:
  		api_key: Your OpenAI api key
      input: Product Specs # optional
      output:
      	Blade Diameter: The diameter of the blade used, reported in inches.
        Max. RPM: The maximum rotations per minute (rpm).
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Product Specs                    |
|:---------------------------------|
| 18V Cordless 4.5in angle grinder |
| 120V 12in chop saw 3600 max. rpm |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Blade Diameter | Max. RPM |
|:--------------:|:--------:|
| 4.5 inches |  |
| 12 inches | 3600 |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Model Based
Model based extract.ai's use a model id to call a previously trained extract.ai. Like a Lookup Wrangle, data is output as a dictionary if a single output is passed where the name does not match one of the extract values name in the model. Outputs that do match the extracted values name from the model will be returned as individual columns. If no input or output is specified, results are returned as individual columns. Also, if the model only has a single value to extract, that will be output as it's own column instead of a dictionary.


> **Note**: This is the preferred method of calling an extract.ai model versus using extract.custom.
\{.is-info\}

The table below represents a sample extract.ai model which will serve as our model in the following examples.

| Find | Description | Type | Default | Examples | Enum | Notes |
|:----:|:-----------:|:----:|:-------:|:--------:|:----:|:-----:|
| Colors | Find the colors in the text | array | | | | |
| Shapes | Find the shapes in the text | string | | | | |
| Sizes | Find the sizes in the text | string | | | | |

##### Dictionary Output
```yaml
wrangles:
  - extract.ai:
  		api_key: Your OpenAI api key
      model_id: xxxx-xxxx-xxxxxxxx
      output: Attributes
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Items |
|:-----:|
| Large yellow square |
| Medium orange triangle |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Attributes |
|:----------:|
| \{Colors: [yellow], Shapes: square, Sizes: Large\} |
| \{Colors: [orange], Shapes: triangle, Sizes: Medium\} |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

##### Column Output by Name
```yaml
wrangles:
  - extract.ai:
  		api_key: Your OpenAI api key
      model_id: xxxx-xxxx-xxxxxxxx
      output:
       - Colors
       - Sizes
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Items |
|:-----:|
| Large yellow square |
| Medium orange triangle |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Colors | Sizes |
|:------:|:-----:|
| [yellow] | Large |
| [orange] | Medium |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

##### Column Output Without Input or Output
```yaml
wrangles:
  - extract.ai:
  		api_key: Your OpenAI api key
      model_id: xxxx-xxxx-xxxxxxxx
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Items |
|:-----:|
| Large yellow square |
| Medium orange triangle |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Colors | Shapes | Sizes |
|:------:|:------:|:-----:|
| [yellow] | square | Large |
| [orange] | triangle | Medium |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | | list | Name or list of input columns, defaults to entire dataframe. | 
| output | ✓ | list | List and description of the output you want. |
| api_key | ✓ | str | Your OpenAI api key for the model. |
| model | | str | The name of the model (ie "gpt-4o-mini" which is the default) |
| threads | | int | The number of requests to send in parallel. |
| timeout | | int | The number of seconds to wait for a response before timing out | 
| retries | | int | The number of times to retry if the request fails. This will apply exponential backoff to help with rate limiting. |
| messages | | str, list | Optional. Provide additional overall instructions for the AI. |
| url | | str | Override the default url for the AI endpoint. Must use the OpenAI chat completions API. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

### Output Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| type | | str | JSON schema data type (string, number, integer, object, array, boolean or null). **Note** any outputs of type array without a child type defined should be strings. | 
| description | | str | List and description of the output you want. |
| default | | str, num, int, bool, "null", object, array | A default value to return. |
| examples | | array | Provide examples of typical values to return. |
| enum | | array | List of possible values for the output. | 
&lt;/div>

# Attributes<br />
Extract numeric attributes from unstructured text such as lengths or voltages.

## Tabset \{.tabset\}
### Sample

#### Extracting All Attributes

```yaml
wrangles:
  - extract.attributes:
      input: tools
      output: attributes
      responseContent: span
```

| Tools            | Attributes (Span)                     |
|:-----------------|:--------------------------------------|
| hammer 5kg, 0.5m | `{'length': ['0.5m'], 'mass': ['5kg']}` |


| Tools            | Attributes (Object)                                                                                 |
|:-----------------|:--------------------------------------------------------------------------------------------|
| hammer 5kg, 0.5m | \{'length': [\{'unit': 'metre', 'value': 0.5\}], 'mass': [\{'unit': 'kilogram', 'value': 5.0\}]\} |

#### Extracting Specific Attributes

```yaml
wrangles:
  - extract.attributes:
      input: Tools
      output: attributes
      responseContent: span
      attribute_type: mass			# Specific attributes
```


### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| responseContent | | span / object | If omited defaults to span (text found). Object returns an object with the value and unit. |
| attribute_type | | See list of options below | Specify which attributes to return, if omitted defaults to all |
| desired_unit | | str | Convert the extracted unit to the desired unit |
| bound | | min/ mid/ max | When returning an object, if the input is a range (e.g. 10-20mm) set the value to return. min, mid or max. Default mid. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
  
List of Attributes:

  - angle

  - area

  - capacitance

  - charge

  - current

  - data transfer rate

  - electric potential

  - electrical conductance

  - electrical resistance

  - energy

  - force

  - frequency

  - inductance

  - instance frequency

  - length

  - luminous flux

  - mass

  - power

  - pressure

  - speed

  - temperature

  - time

  - volume

  - volumetric flow
&lt;/div>

# Brackets<br />
Extract text properties in brackets from the input

## Tabset \{.tabset\}
### Sample

#### Extracting Data Within Brackets

```yaml
wrangles:
  - extract.brackets:
      input: Data
      output: Output
```

| Data       | Output   |
|:-----------|:---------|
| *\{Hello\}*    | Hello    |
| [Wrangles] | Wrangles |
| (!)        | !        |
| &lt;!>        | !        |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| find | | str, list | The type of brackets to find (round '()', square '[]', curly '\{\}', angled '\&lt;\>'). Default is all brackets. | 
| include_brackets | | bool | Include the brackets in the output |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

# Codes<br />
Extract alphanumeric codes from unstructured text. Can be performed on one column or multiple columns.<br />

## Tabset \{.tabset\}
### Sample

#### Extracting Codes From Single Column
  
```yaml
# One column input
wrangles:
  - extract.codes:
      input: Secret
      output: Code Extract
```

| Secret                      | Code Extract   |
|:----------------------------|:---------------|
| to gain access use Z1ON0101 | ['Z1ON0101']   |

#### Extracting Codes From Multiple Columns

```yaml
# Multi column input
wrangles:
  - extract.codes:
      input:
      	- code1
        - code2
      output: Codes
```
  
| code1           | code2           | Codes                        |
|:----------------|:----------------|:-----------------------------|
| code CH465517080-1 | code CH465517080-2 | ['CH465517080-1', 'CH465517080-2'] |

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>

# Custom<br />
Extract data from the input using a DIY or bespoke extraction wrangle. Can be performed on one column or multiple columns.

It is important to note that (non-regex) pattern matching extracts match whole words that are separated by word boundaries. Word boundaries include anything that is not a letter, number or an underscore.
<br />

## Tabset \{.tabset\}
### Sample

#### Extracting Wood Types From Single Column

```yaml
# One column input
wrangles:
  - extract.custom:
      input: Product
      output: Wood Types
      model_id: model_id_here
```
<br />

| Product                           | Wood Types             |
|:----------------------------------|:-----------------------|
| Dining Oakwood Chair              | Oakwood                |
| Living Room Teakwood Frame Mirror | Teakwood               |

#### Extracting Wood Types From Multiple Columns

```yaml
# Multi column input
wrangles:
  - extract.custom:
      input:
      	- Part 1 of 2
        - Part 2 of 2
      output: Wood Types
      model_id: model_id_here
```
<br />

| Part 1 of 2             | Part 2 of 2                 | Wood Types   |
|:------------------------|:----------------------------|:--------------|
| Dining Acacia Wood Table | Imitation Wood Table Chairs | ['Acacia Wood', 'Imitation Wood']|

#### Using Multiple Extract Models

```yaml
# Multiple Models
wrangles:
	- extract.custom:
  		input:
      	- Product
        - Product
      output:
      	- Wood Types
        - Item Type
      model_id:
      	- wood_Type_model_id
        - item_type_model_id
```
<br />

| Product                           | Wood Types             | Item Type
|:----------------------------------|:-----------------------|:-----------------------|
| Dining Oakwood Chair              | Oakwood                | Chair |
| Living Room Teakwood Frame Mirror | Teakwood               | Mirror |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| model_id | ✓ | str, list | Model id of the custom Extract Wrangle being used. |
| use_labels | | bool | Adds labels (if given) to the extracted data, defaults to false. See [here](https://wrangles.io/en/excel/Let's-Get-Ready-To-Wrangle/Use-Labels) for more information.|
| first_element | | bool | If true, returns only the first element of matched values. |
| case_sensitive | | bool | Allows the wrangle to be case sensitive if set to True, default is False. |
| use_spellcheck | | bool | Use spellcheck to correct spelling mistakes in the input. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>


> **Note**: When using an AI based extract, the output will be returned as a dictionary.
\{.is-info\}


# Date Properties<br />
Extract date properties from a date (day, month, year, etc...)

## Tabset \{.tabset\}
### Sample

#### Extracting Month From Date

```yaml
wrangles:
  - extract.date_properties:
      input: Date
      output: Output
      property: month_name
```

| Date                | Output   |
|:--------------------|:---------|
| 1992-08-13 00:00:00 | August   |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | | 
| output | | str | If not given, overwrites input |
| property | ✓ | day / day_of_year / month / month_name / weekday / week_day_name / week_year / quarter | Property to extract from date |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

# Date Range<br />
Extract date range from two dates

## Tabset \{.tabset\}
### Sample

#### Extracting Number of Months From Range

```yaml
wrangles:
  - extract.date_range:
      start_time: Start
      end_time: End
      output: Output
      range: months
```

| Start               | End                 |   Output |
|:--------------------|:--------------------|---------:|
| 1992-08-13 00:00:00 | 2023-08-13 00:00:00 |      371 |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| start_time | ✓ | str | Name of the start date column |
| end_time | ✓ | str | Name of the end date column |
| output | ✓ | str | Name of the output column |
| range | | See below for options | Type of frequency to count, defaults to day |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
  
Range options:

  - business days

  - days

  - weeks

  - months

  - semi months

  - business month ends

  - month starts

  - semi month starts

  - business month starts

  - quarters

  - quarter starts

  - years

  - business hours

  - hours

  - minutes

  - seconds

  - milliseconds

&lt;/div>

# HTML
Extract Text and Links from HTML Elements

## Tabset \{.tabset\}
### Sample

#### Extracting Text From HTML

```yaml
wrangles:
  - extract.html:
      input: HTML
      output: Text
      data_type: text
```

| HTML                                                       | Text           |
|:-----------------------------------------------------------|:---------------|
| `<a href="https://www.wrangleworks.com/">Wrangle Works!</a>` | Wrangle Works! |

#### Extracting Links From HTML

```yaml
wrangles:
  - extract.html:
      input: HTML
      output: Links
      data_type: links
```

| HTML                                                       | Links                              |
|:-----------------------------------------------------------|:----------------------------------|
| `<a href="https://www.wrangleworks.com/">Wrangle Works!</a>` | ['https://www.wrangleworks.com/'] |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | | str, list | |
| data_type | ✓ | text / links | The type of data to extract |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

# Properties<br />
Extract categorical properties from unstructured text such as colours or materials.

## Tabset \{.tabset\}
### Sample

#### Extracting All Properties

```yaml
wrangles:
  - extract.properties:
      input: water bottles
      output: properties
```

| Products                    | Product Properties                                      |
|:----------------------------|:--------------------------------------------------------|
| Stainless Steel Blue Bottle | `{'Colours': ['Blue'], 'Materials': ['Stainless Steel']}` |
| Plastic Yellow Bottle       | `{'Colours': ['Yellow'], 'Materials': ['Plastic']}`       |

#### Extracting Colour

```yaml
wrangles:
  - extract.properties:
      input: water bottles
      output: properties
      property_type: colours # Optional
```

| Products                    | Product Colours   |
|:----------------------------|:------------------|
| Stainless Steel Blue Bottle | ['Blue']          |
| Plastic Yellow Bottle       | ['Yellow']        |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | | 
| output | ✓ | str, list | |
| property_type | | str | The specific type of properties to extract (Colours, Materials, Shapes, Standards). Defaults to None, which will return all properties. |
| return_data_type | | str | The format to return the data (list or string), defaults to list |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |

&lt;/div>

# Regex<br />
Extract single values using regex

## Tabset \{.tabset\}
### Sample

#### Extracting Number of Months From Range

```yaml
wrangles:
  - extract.regex:
  		input: Product
      output: GPM
      find: \d\.?\d? ?gpm
```

| Product               | GPM                 |
|:--------------------|:--------------------|
| 3.4 gpm water pump | 3.4 gpm |
| 2gpm water pump | 2gpm |
  
#### Implementing output_pattern
The output_pattern parameter can be used to specify regex capture groups to output

```yaml
wrangles:
  - extract.regex:
  		input: Product
      output: GPM
      find: (\d\.?\d?) ?gpm
  		output_pattern: \1 Gallons Per Minute
```

| Product | GPM |
|:-------:|:---:|
| 3.4 gpm water pump for 5.5 gallon tank | 3.4 Gallons Per Minute |
| 2gpm water pump for 2 gal tank | 2 Gallons Per Minute |

### Parameters
&lt;div style="overflow-x: auto">

| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str | |
| output | ✓ | str | |
| find | ✓ | str | Pattern to find using regex |
| output_pattern | | str | Specifies the format to output matches and specific capture groups using backreferences (e.g., `\1`, `\2`). Default is to return entire matches. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
  
&lt;/div>