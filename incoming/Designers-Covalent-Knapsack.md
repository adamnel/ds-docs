# Covalent / Designers

Learn how to set up your workspace, access design files, and apply system components efficiently.

# 

We build on top of Material Design

Depending on the product, we build on top of versions 1 or 2 of the Material Design spec.

Older products were built on Material Design 1 standards and we still support those. All new products are starting from a Material Design 2 base, and these are what you'll find documentation for here.

## 

Why Material Design?

It gives us proven components, patterns, and standards for color, typography, and spacing. It lets us focus our design efforts on customer-specific value rather than reinventing basic elements.

These docs cover our additions and any modifications we made to Material Design. It also covers our specific implementation details. For standard Material components, refer to Google's comprehensive documentation. Most component pages will have links in the additional resources section to the upstream Material Design spec for easy reference.

[

See also

Material Design 2 documentation



](https://m2.material.io)

# 

Figma

Our design tool of choice is Figma.

## 

Initial setup

### 

1\. Log in to Figma

Visit [figma.com](https://figma.com) and log in using your Teradata account.

![foundations_get-started--designers_login-figma](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15804-12937.png?Expires=1768218117&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=epVShd-~yGuO7-LJ8J8rQXQ0b6WBg4WbR1JbGf~sPoXWbJuysZotCc0I~7PuNyv3rg9SGNDAZeEe7YiQ-5hg46QZA6dqsBJhe~1uDdZDvd2onVA~nhCe7pfd3myzuD5bBvRy6wJZb3-YNoh5zL0z-ZjHAHYnD8Xkeif~qEguAvRn3XJ1cL5bwJGw0jBPp3ewPEOyZvaMdUhcYV1EVzJMBeDmEBoznGJFDfXVuXRXpAc8IXodwg~eqfqons~7BAKTz9g9n4Ap3Uaem6ugpXvXuJZTPjaX0G-HHzAc-f4WrBTzfhsN235GweO57AI3Nna9xQOe1aqmj~nvKpQC1wruuQ__)

### 

2\. Join the team

In the Figma app, join the Teradata UX team.

![foundations_get-started--designers_join-team](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15800-12888.png?Expires=1768218117&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=rLcuhWBMTiia8fvLtf7ZEU-lEIqIz0JM~wmoqX2CngJakWuzWgsvdO9YJLAeWsEVsETrJfM1cpajAFQ4S9U4WlLafuBIQl4J9MeUX1GM4YOG~ld-9cJ3mfnBubCZSZFZbluLJ1Wh8yKNHHYP4GWeyldf15trgpFydIZaUW9NnsaTurWdcDoohHvU9KWgSAjjv3iDR1DXcVjHu09UYztb9QLozEHa9FL1LoqAwfuDDwRo0q5kyiUYHW4Q-THcbYh-NN8IeEfEjdXE4zOmVrA8X7w8yVTGGOkGBpfazcVD-TFTf6xx0k3Sl3-tCTEM5em7ewvIezjrSXdJgh882IH3KA__)

### 

3\. Bookmark these projects

Project name

Details

[🫥 Design system 2.0](https://www.figma.com/files/project/83122400)

Our most current design system resources, including our Covalent Figma library, symbols (icons) library, and new project starter template.

[💟 Features](https://www.figma.com/files/project/20368833)

This is where we store the detailed design files. Each has a thumbnail that conveys its status. Inside are detailed designs for a given work stream, including not just the approved screens but also ideation, older work, and other relevant material.  
  
Tip: sort alphabetically. This will group things by status - they’re named such that this will put the most timely items at the top.

### 

4\. Favorite these files

[

Covalent Principles

All our foundational Figma components can be found in this library.



](https://www.figma.com/design/KvXVAmYdCVAS7hzkOa73Em/Covalent-Principles)

[

Material Symbols

All the iconography we use throughout our products can be found here.



](https://www.figma.com/design/5y0VXufoAsspMzd8G0bl0i/Material-Symbols?m=auto)

### 

5\. If you're working on older products

...then you should also bookmark these projects. They're from a previous generation of the design system, but contain years worth of valuable examples to peruse.

Dig around in the various files inside these projects. They're mostly structured with documentation on the first page and then a bunch of component designs and examples on later pages.

They're worth familiarizing yourself with, but be aware that they are visually out of date.

Project name

Details

[🌎 System - Guides](https://www.figma.com/files/project/6555237)

How tos and tutorials.

[🌎 System - Basics](https://www.figma.com/files/project/6555237)

What we call Foundations today - it includes items and concepts that everything else makes use of, including colors, spacing and typography.

[🌎 System - Components](https://www.figma.com/files/project/7868776)

Buttons, checkboxes, text fields, etc.

[🌎 System - Features](https://www.figma.com/files/project/7868782)

We refer to these as Patterns nowadays. These are explanations for standard approaches to solving existing problems. For example, a whole end-to-end file upload sequence, which can have multiple stages, states, and variants depending on on your specific circumstance.

[🌎 System - Templates](https://www.figma.com/files/project/7868702)

Standardized starter page designs.

[🌎 System -](https://www.figma.com/files/project/9615501) [Utilities](https://www.figma.com/files/project/9615501)

Helpers and resources to assist in the design process. Things like wireframe kits, cursor and arrow symbols for annotating designs, and process documents.

# 

Some basic tips

## 

Use base 8 measurements

All of our sizing follows an base 8 or base 4 measurement standard. This is better for UI design because it allows pixel perfect doubling of numbers, starting with the smallest: 1x1 pixel. Double it once, and you have 2x2 pixels, then 4x4, 8x8, etc.

This prevents us from getting into situations where anti aliasing happens on small icons, thin lines, and elsewhere.

Tweak Figma to make this easier in your daily life. Open the Figma menu > Preferences > Nudge amount and set the "Big nudge" value to 8.

[

See also

Material Design spacing methods



](https://m2.material.io/design/layout/spacing-methods.html#baseline-grid)

[

See also

The Comprehensive 8pt Grid Guide



](https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179)

# 

Design file setup

We've created starter templates and naming schemes to help organize your work and coordinate with other team members. See the Figma organization doc for more details.

[

See also

Design file setup



](/site/covalent/latest/pages/figma-organization)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [We build on top of Material Design](#we-build-on-top-of-material-design)
    *   [Why Material Design?](#why-material-design)
*   [Figma](#figma)
    *   [Initial setup](#initial-setup)
*   [Some basic tips](#some-basic-tips)
    *   [Use base 8 measurements](#use-base-8-measurements)
*   [Design file setup](#design-file-setup)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In