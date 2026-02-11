---
title: "Compare"
slug: /python/recipes/wrangles/compare
---

# Text

Compare two strings and return the intersection or difference, or use overlap to find the matching characters between the two strings.


## Tabset \{.tabset\}
### Sample

#### Comparing the difference between two columns of text

```yaml
wrangles:
  - compare.text:
      input:
        - col1
        - col2
      output: Difference
      method: difference
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Col1 | Col2 |
|:----:|:----:|
| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |
| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |
| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Difference |
|:----------:|
| Pine Black Bottom |
| Maple Orange Steel |
| Normal Blue Plastic |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Comparing the intersection of two columns of text

```yaml
wrangles:
  - compare.text:
      input:
        - col1
        - col2
      output: Intersection
      method: intersection
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Col1 | Col2 |
|:----:|:----:|
| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |
| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |
| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Intersection |
|:----------:|
| Large Wood Marble Bookshelf |
| Medium Wood Top Coffee Table |
| Small Wood Top Console Table |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

#### Comparing the overlap of two columns of text

```yaml
wrangles:
  - compare.text:
      input:
        - Part Code1
        - Part Code2
      output: Overlap
      method: overlap
```
&lt;div style="overflow-x: auto">
&lt;table>
&lt;tr>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;th>&lt;/th>&lt;/tr>
&lt;tr>&lt;td>

| Part Code1 | Part Code2 |
|:----------:|:----------:|
| SKF6202 | TMKN6202 |
| X06-02-000 | X06-81-000 |
| 7100E15-V-230/3 | 7100E15-V-120/1 |

&lt;/td>&lt;td>
→ 
&lt;/td>&lt;td>

| Overlap |
|:-------:|
| ****6202 |
| X06-**-000 |
| 7100E15-V-\**0/\* |
  
&lt;/td>&lt;/tr>
&lt;/table>
&lt;/div>

### Parameters
&lt;div style="overflow-x: auto">
 
| Parameter | Required | Data Type | Notes |
| :-------- | :------: | :-------- | :---- |
| input | ✓ | str, list | The columns to compare. First column is the base column | 
| output | ✓ | str, list | The column to output the results to |
| method | | str | The type of comparison to perform (difference, intersection, overlap), defaults to difference. |
| char | | str | split the strings on. Default is a space (difference and intersection) |
|  non_match_char | | str | Character to use for non-matching characters (overlap) |
| include_ratio | | bool | Include the ratio of matching characters (overlap)  |
| decimal_places | | number | Number of decimal places to round the ratio to (overlap) |
| exact_match | | str| Value to use for exact matches (overlap) |
| empty_a | | str | Value to use for empty input a (overlap) |
| empty_b | | str | Value to use for empty input b (overlap) |
| all_empty | | str | Value to use for both inputs (overlap) |
&lt;/div>