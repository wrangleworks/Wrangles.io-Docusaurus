---
title: "Wrangles"
slug: /python/recipes/wrangles
---

import RecipePlayground from '@site/src/components/RecipePlayground';


> Some Wrangles require authentication to the WrangleWorks servers. See [the installation instructions](/python/install#authentication)
\{.is-warning\}

# Available Wrangle Types

- [Compare *Compare data from different columns*](/python/recipes/wrangles/compare)
- [Convert *Convert data formats and representation*](/python/recipes/wrangles/convert)
- [Create *Create new columns*](/python/recipes/wrangles/create)
- [Extract *Extract information from unstructured text*](/python/recipes/wrangles/extract)
- [Format *Format information*](/python/recipes/wrangles/format)
- [Merge *Merge data from one or more columns into a single column*](/python/recipes/wrangles/merge)
- [Pandas *Pandas functions that can be used in recipes*](/python/recipes/wrangles/pandas)
- [Select *Select data from within columns*](/python/recipes/wrangles/select)
- [Split *Split a single column to multiple columns*](/python/recipes/wrangles/split)
- [Standalone *Wrangles that don't belong to a specific category*](/python/recipes/wrangles/standalone)
- [Utilities *Wrangles that alter the data as a whole, leave data unchanged, or actions are seen externally*](/python/recipes/wrangles/utilities)
\{.links-list\}

# Using Wrangles

Once data is read from a source, Wrangles can be used to transform the data. Some Wrangles apply simple transformations, while others use sophisticated machine learning models to infer information from the data.

Wrangles are applied sequentially, starting from the base state of the source. Each Wrangle is applied to the whole table.

Each Wrangle typically has an input and an output. An input can be the name of one column, or a list of multiple columns. If no output is provided, the input column will be overwritten, otherwise a new column will be created.

## Example
<RecipePlayground
  editable={true}
  recipe={"read:\n  # Generate some example data\n  - test:\n      rows: 3\n      values:\n        column1: an example sentence\n\nwrangles:\n  # If output is omitted, the input will be overwritten\n  - convert.case:\n      input: column1\n      case: upper\n  \n  # If output is specified, a new column will be created\n  - split.tokenize:\n      input: column1\n      output: column2"}
  exampleSource={"<div className=\"table-scroll\">\n<table>\n<tr><th></th><th></th><th></th><th></th><th></th></tr>\n<tr><td>\n\n| column1 |\n| :-----: |\n| an example sentence |\n| an example sentence |\n| an example sentence |\n\n</td><td> \n→\n</td><td>\n\n| column1 |\n| :-----: |\n| AN EXAMPLE SENTENCE |\n| AN EXAMPLE SENTENCE |\n| AN EXAMPLE SENTENCE |\n\n</td><td>\n→\n</td><td>\n  \n| column1 | column2 |\n| :-----: | :-----: |\n| AN EXAMPLE SENTENCE | [AN, EXAMPLE, SENTENCE] |\n| AN EXAMPLE SENTENCE | [AN, EXAMPLE, SENTENCE] |\n| AN EXAMPLE SENTENCE | [AN, EXAMPLE, SENTENCE] |\n  \n</td></tr>\n</table>\n</div>"}
/>

# Advanced Topics

- [Custom Functions *Incorporate custom python code into a recipe.*](/python/recipes/custom-functions)
- [Variables *Use environment or python variables in recipes. Pass secrets or enable recipes to be reusable.*](/python/recipes/variables)
\{.links-list\}