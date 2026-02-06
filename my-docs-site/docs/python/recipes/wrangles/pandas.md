---
title: "Pandas"
slug: /python/recipes/wrangles/pandas
---

> Pandas functions within Wrangles are currently under development and therefore do not possess all the functionality of pandas or other Wrangles. See below for details.
\{.is-warning\}

Pandas functions within recipes allow users to employ the powerful [pandas](https://pandas.pydata.org/) Python package seamlessly into their recipe without using any custom code or writing any Python script. Pandas is a very powerful data tool with a wide range of functions, but there are some restrictions as to which pandas functions work in a recipe. Of course, any pandas functions which do not work in a recipe will still work within a [custom function](https://wrangles.io//en/python/recipes/custom-functions).

**Note:** These are just a very small handful of examples for pandas functions, many of which have a native Wrangles counterpart which will be noted below each example where applicable.

# pandas.drop_duplicates

## Removing Duplicate Rows

```yaml
wrangles:
  - pandas.drop_duplicates: {}
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Part Number | Item |
|:--------|:--------|
| 123456 | ball bearing |
| 789123 | angle grinder |
| 456789 | screwdriver |
| 123456 | ball bearing |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Part Number | Item |
|:--------|:--------|
| 123456 | ball bearing |
| 789123 | angle grinder |
| 456789 | screwdriver |
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>



> This example does not use any parameters, see [pandas.drop_duplicates](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html) for function parameters.
\{.is-note\}

See [format.remove_duplicates](https://wrangles.io/en/python/recipes/wrangles/format#remove-duplicates) for the native Wrangle equivalent.

# pandas.groupby
## Tabset \{.tabset\}
### Sample

#### Group DataFrame using a mapper or by a Series of columns.

```yaml
wrangles:
  - pandas.groupby:
      parameters:
        by: Product Type
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Product Type | Description |
|:--------|:--------|
| bearings | 14mm skf radial ball bearing |
| hardware | 1/4-20x3" machine screw |
| bearings | 3"odx2.5"id thrust bearing |
| hardware | m6x35mm stainless steel bolt |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Product Type | Description |
|:--------|:--------|
| bearings | 14mm skf radial ball bearing |
| bearings | 3"odx2.5"id thrust bearing |
| hardware | 1/4-20x3" machine screw |
| hardware | m6x35mm stainless steel bolt |
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| parameters | ✓ | dictionary | The "parameters" parameter is a dictionary of all the parameters needed for the function | 
| by | ✓ | str, list | mapping, function, str, or iterable to be used for grouping |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


> More parameters for this function can be found in the [pandas.groupby](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html) documentation.
\{.is-note\}

See [select.group_by](https://wrangles.io/python/recipes/wrangles/select#group-by) for the native Wrangles equivalent.

# pandas.sample

## Tabset \{.tabset\}
### Sample

#### Selects a random sample from the dataframe

```yaml
wrangles:
  - pandas.sample:
      parameters:
      	n: 2
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>
  
| Voltage | Current | Resistance |
|:--------|:--------|:-----------|
| 12v | 6a | 2ohm |
| 18v | 6a | 3ohm |
| 24v | 12a | 2ohm |
| 36v | 12a | 3ohm |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>
  
| Voltage | Current | Resistance |
|:--------|:--------|:-----------|
| 12v | 6a | 2ohm |
| 24v | 12a | 2ohm |
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| n | | integer | The number of rows to be selected, defaults to 1. |
| where | | str | Filter the data to only apply the wrangle to certain rows using an equivalent to a SQL where criteria, such as column1 = 123 OR column2 = 'abc' |
| where_params | | str | Variables to use in conjunctions with where. This allows the query to be parameterized. This uses sqlite syntax (? or :name) |
| if | | str | A condition that will determine whether the action runs or not as a whole. |
&lt;/div>


> See [pandas.sample](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sample.html) for more parameters and information on this function.
\{.is-note\}

See [select.sample](https://wrangles.io/python/recipes/wrangles/select#sample) for the native Wrangles equivalent.


# Restrictions

Pandas functions within recipes are restricted to those that return a dataframe, or a column of the same length as the input dataframe. Functions which return return a series or an object will have to have [custom functions](https://wrangles.io/python/recipes/custom-functions) written in order to work.

Some functions may work on the dataframe as a whole but not on individual columns. If this occurs, try running the function on the entire dataframe and verify that the results are what was intended.