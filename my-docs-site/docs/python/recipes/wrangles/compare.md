---
title: "Compare"
slug: /python/recipes/wrangles/compare
---

import RecipePlayground from '@site/src/components/RecipePlayground';


# Text

Compare two strings and return the intersection or difference, or use overlap to find the matching characters between the two strings.


## Tabset \{.tabset\}
### Sample

#### Comparing the difference between two columns of text

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - compare.text:\n      input:\n        - col1\n        - col2\n      output: Difference\n      method: difference"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1 | Col2 |\n|:----:|:----:|\n| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |\n| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |\n| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |\n\n</td><td>\n→ \n</td><td>\n\n| Difference |\n|:----------:|\n| Pine Black Bottom |\n| Maple Orange Steel |\n| Normal Blue Plastic |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Comparing the intersection of two columns of text

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - compare.text:\n      input:\n        - col1\n        - col2\n      output: Intersection\n      method: intersection"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Col1 | Col2 |\n|:----:|:----:|\n| Large Oak Wood White Marble Top Bookshelf | Large Pine Wood Black Marble Bottom Bookshelf |\n| Medium Oak Wood White Marble Top Coffee Table | Medium Maple Wood Orange Steel Top Coffee Table |\n| Small Oak Wood White Marble Top Console Table | Small Normal Wood Blue Plastic Top Console Table |\n\n</td><td>\n→ \n</td><td>\n\n| Intersection |\n|:----------:|\n| Large Wood Marble Bookshelf |\n| Medium Wood Top Coffee Table |\n| Small Wood Top Console Table |\n  \n</td></tr>\n</table>\n</div>"}
/>

#### Comparing the overlap of two columns of text

<RecipePlayground
  editable={true}
  recipe={"wrangles:\n  - compare.text:\n      input:\n        - Part Code1\n        - Part Code2\n      output: Overlap\n      method: overlap"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th></tr>\n<tr><td>\n\n| Part Code1 | Part Code2 |\n|:----------:|:----------:|\n| SKF6202 | TMKN6202 |\n| X06-02-000 | X06-81-000 |\n| 7100E15-V-230/3 | 7100E15-V-120/1 |\n\n</td><td>\n→ \n</td><td>\n\n| Overlap |\n|:-------:|\n| ****6202 |\n| X06-**-000 |\n| 7100E15-V-\\**0/\\* |\n  \n</td></tr>\n</table>\n</div>"}
/>

### Parameters
<div className="table-scroll">
 
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
</div>