---
title: "Step 3"
slug: /excel/in-depth-examples/example-1/step-3
---

title: Step 3: Extract Codes
description: 
published: true
date: 2023-07-20T15:31:14.197Z
tags: 
editor: markdown
dateCreated: 2023-07-14T22:16:42.164Z
---

## Step 3: Extract Codes

The next column we need to create is the "Code" column.

To achieve this, follow these steps:

1. Highlight the data in the "Product" column.
2. In the Wrangles Task Pane press the "Codes" wrangle.

![extractcodes.gif](/extractcodes.gif)

The output will look like this:

![code-output.png](/images/code-output.png)

This output is interesting because it includes multiple values in this column, namely "Codes" and "Weight."

As we already have a separate "Weight" column, we must extract and retrieve only the codes from this combined column. Later, when we introduce "Format" wrangles, we will be able to split the values in this column.