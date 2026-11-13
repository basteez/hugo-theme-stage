---
title: "The Markdown Kitchen Sink"
date: 2026-08-14T10:00:00+02:00
description: "Headings, lists, quotes, tables, footnotes, keyboard keys and code: every Markdown element in the reading column."
categories: [Guides]
tags: [markdown, typography]
---

This post exists to show every Markdown element on the reading paper. Switch your system between light and dark mode to see both papers.

## Paragraphs and inline text

Body text is set in Literata at a generous size. You can use **bold**, *italic*, ***both***, ~~strikethrough~~, `inline code`, <kbd>Ctrl</kbd> + <kbd>C</kbd> keys, and links, both [internal](/post/stage-directions) and [external](https://gohugo.io/). External links open in a new tab and say so to screen readers.

## Lists

1. Ordered items use the mono face for their numbers.
2. Markers are red.
   - Nested lists are indented.
   - Like this one.
3. Back to the top level.

- An unordered list
- with three
- short items

## Quotes

> Write the simplest thing that could possibly work, then make it sturdy.
>
> Nobody famous, as far as we know.

## A table

| Element      | Font            | Where              |
|--------------|-----------------|--------------------|
| Display      | Dela Gothic One | headings, menus    |
| Body         | Literata        | the reading column |
| Mono         | Fira Code       | code, metadata     |
| Collage      | four faces      | ransom-note titles |

Wide tables scroll sideways inside the column instead of widening the page.

## Code

```go {hl_lines=[6]}
package main

import "fmt"

func main() {
	fmt.Println("Take the stage")
}
```

```diff
- motion: everywhere
+ motion: in the frame, never in the reading column
```

### A deeper heading

Headings down to level four appear in the table of contents.

#### Level four

Footnotes work too.[^1]

---

[^1]: And they come back here, at the end of the post.
