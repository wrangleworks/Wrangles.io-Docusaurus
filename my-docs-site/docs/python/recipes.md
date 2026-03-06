---
title: "Recipes"
slug: /python/recipes
---

Recipes allow a series of Wrangles to be defined and run as an automated sequence.

# The Four Rs

Recipes are written with [YAML](https://en.wikipedia.org/wiki/YAML) and follow a typical [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) format. Recipes are divided into four main sections:

- [:book: Read *Import data from different sources*](/python/recipes/read)
- [:cowboy_hat_face: Wrangles *Manipulate the structure and content of the data*](/python/recipes/wrangles)
- [:pen: Write *Export data to different targets*](/python/recipes/write)
- [:runner: Run *Run a recipe or connector at the start, on success or on failure of a recipe.*](/python/recipes/run)
\{.links-list\}

# Example
> Autocompletion and validation can be added in many code editors.
> [Set up Recipe Validation](/python/recipes/schema)
\{.is-info\}

## Tabset \{.tabset\}
### Sample

#### Example Run Command

```python
wrangles.recipe.run(recipe = 'my_recipe.wrgl.yml', variables = my_variables, dataframe = my_data, functions = [my_function], timeout = 30)
```
> **Recipes execute code. Be careful running recipes from remote sources. Only run recipes from sources you trust.**
\{.is-warning\}

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| recipe | ✓ | str | YAML recipe, **filepath** to a YAML file containing the recipe, **url** to a YAML file containing the recipe or a **model id** to the recipe. | 
| variables | | dict | (Optional) A dictionary of custom variables to override placeholders in the recipe. Variables can be indicated as $\{MY_VARIABLE\}. Variables can also be overwritten by Environment Variables. |
| dataframe | | Pandas Dataframe | (Optional) Pass in a pandas dataframe, instead of defining a read section within the YAML |
| functions | | list, dict | (Optional) A function or list of functions that can be called as part of the recipe. Functions can be referenced as custom.function_name |
| timeout | | str | (Optional) Set a timeout for the recipe in seconds. If not provided, the time is unlimited. |
&lt;/div>

> **Recipes execute code. Be careful running recipes from remote sources. Only run recipes from sources you trust.**
\{.is-warning\}

## Example Recipe
```yaml
# file: recipe.wrgl.yml
# ---
# Convert a CSV file to an Excel file
# and change the case of a column.
read:
  - file:
      name: file.csv
    
wrangles:
  - convert.case:
      input: column
      case: upper

write:
  - file:
      name: file.xlsx
```

> To run a recipe from a recipe, see the [recipe connector](/python/connectors/recipe)
\{.is-info\}

## Dynamic Column Selections

For *input* for wrangles, and *columns* for read and write, a variety of tools can be used to dynamically select which columns to use.

### Wildcards
A (*) can be used as a wildcard character to match any characters.

```yaml
# Using concatenate to combine multiple columns.
wrangles:
  - merge.concatenate:
      input:
        - Col* # This will match any column beginning 'Col'
      output: Join Col
      char: ', '
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Col1   | Col2   | Col3   |
|:-------|:-------|:-------|
| A      | B      | C      |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Join Col   |
|:------------:|
| A, B, C      |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Optional Columns
Wrangles will generally fail if applied to a column that doesn't exist. A question mark (?) can be added to the end of a column name to make it optional. This disables the validation, but may still fail if the column is essential to the functioning of the wrangle.

```yml
wrangles:
  # Merge the contents of column1 and column2
  # to a list. Also merge column3 if it exists,
  # but do not fail if it does not exist
  - merge.to_list:
      input:
        - Col1
        - Col2
        - Col3? # this will include Col3 if it exists
      output: output_column
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Col1   | Col2   |
|:-------|:-------|
| A      | B      |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| output_column   |
|:------------:|
| ['A', 'B']      |

&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Exclude Columns
A dash (-) attached to the front of the column name will not include that column. Typically, this can be combined with a wildcard to find all columns matching a pattern except certain ones.

```yaml
# Concatenate all columns beginning Col, except Col2
wrangles:
  - merge.concatenate:
      input:
        - Col*
        - -Col2
      output: Join Col
      char: ', '
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Col1   | Col2   | Col3   |
|:-------|:-------|:-------|
| A      | B      | C      |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Join Col   |
|:------------:|
| A, C      |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

# Advanced Topics

- [Custom Functions *Incorporate custom python code into a recipe.*](/python/recipes/custom-functions)
- [Conditions *Use if or where to execute wrangles and connectors only in some circumstances or on subsets of the data*](/python/recipes/conditions)
- [Variables *Use environment or python variables in recipes. Pass secrets or enable recipes to be reusable.*](/python/recipes/variables)
\{.links-list\}