---
title: "Read"
slug: /python/recipes/read
---

- [Connectors *Learn about the available connectors*](/python/connectors)
\{.links-list\}

Data can be imported from one or more sources. Data is imported using connectors, which can read data from places such as files or databases.

# Basic (Single Source) 
Import data from one source.
```yaml
read:
  - file:
      name: file.xlsx
      sheet_name: my sheet
```

# Union
Combine data from multiple sources, stacked vertically, equivalent to a union in SQL.

Where headers differ, columns will be matched by name.

```yaml
read:
  - union:
      sources:
    	  - file:
      	  	name: file1.xlsx
        - file:
      	  	name: file2.xlsx
```

&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| column |
| :-----: |
| a |

&lt;/td>&lt;td>
  
\+ 
  
&lt;/td>&lt;td>

| column |
| :-----: |
| b |

&lt;/td>&lt;td>

→ 
&lt;/td>&lt;td>
  
| column |
| :-----: |
| a |
| b |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>


> Union is the default aggregation for multiple reads. 
\{.is-info\}

# Concatenate
Combine data from multiple sources, stacked horizontally.

```yaml
read:
  - concatenate:
      sources:
    	  - file:
      	  	name: file1.xlsx
        - file:
      	  	name: file2.xlsx
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| column |
| :-----: |
| a |

&lt;/td>&lt;td>
  
\+ 
  
&lt;/td>&lt;td>

| column |
| :-----: |
| b |

&lt;/td>&lt;td>

→ 
&lt;/td>&lt;td>
  
| column | column |
| :-----: | :---: |
| a | b |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

# Join

> Joins can be done using data from any connector, or even custom functions.

> Want to join a csv to data from a database? Go for it!
\{.is-info\}

Import data from two sources and merge the data, equivalent to a join in SQL.

This can be used recursively to join more than two tables.

```yaml
read:
  - join:
    	how: inner
      left_on: column
      right_on: column
      sources:
    	  - file:
      	  	name: file1.xlsx
        - file:
      	  	name: file2.xlsx
```