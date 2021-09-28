# Post markdown

## Requirements

1. A post **title**, **tags** and **date** must be included in the front matter for correct behavior

2. All posts need a category tag of **design** or **compsci** in order to be displayed as cards

3. All posts need a thumbnail located in the **assets/images/thumbnails** directory

## Front Matter

All front matter variables not included in the requirements are optional, however a custom **meta_desc** should be included for SEO.

The full supported front matter looks like the following:

```txt
---
title: post title
tags: descriptive tags
date: YYYY-MM-DD
category: compsci / design
meta_desc: custom meta decription
tech: technologies used
team: team size
role: role in the team
---
```
