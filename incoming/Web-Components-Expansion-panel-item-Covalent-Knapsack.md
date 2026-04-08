# Expansion panel item / Web Components

Individual item within an expansion panel.

[Main](/site/covalent/latest/pattern/expansion-panel-item?templateId=web-components-vBLifAApG&demoId=w0H1gm2jvp)

[With content and footer](/site/covalent/latest/pattern/expansion-panel-item?templateId=web-components-vBLifAApG&demoId=6tUMrwwjoe)

LightShare

## Main

title

contentPreview

index

open

isTopPanel

isBottomPanel

isInnerPanel

isSinglePanel

belowOpenInnerPanel

aboveOpenInnerPanel

separateSinglePanel

showFooter

noSurface

content

footer

```
<cv-expansion-panel-item  title="Title"  index="0"  contentPreview="content preview">  <div slot="content"></div></cv-expansion-panel-item>
```

### Events

Event name

Target

Detail

Description

cv-expansionPanel-togglePanel

window

`{`

  `message: string,     bubbles: boolean,`

  `composed: boolean,`

  `open: boolean,`

  `index: number`

`}`

Fired when the expansion panel item is toggled open or closed.

* * *

#### 

References

[Covalent design system - Expansion panel](https://teradata.github.io/covalent/docs/components/?path=/docs/components-expansion-panel--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In