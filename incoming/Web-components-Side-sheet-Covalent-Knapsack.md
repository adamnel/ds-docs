# Side sheet / Web components

Panel displayed on the side of the screen, often used for navigation or additional content.

LightShare

## Main

heading

open\*

pushed

noPadding

default

Here lies the side sheet content

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-side-sheet open heading="Sample side sheet">  Here lies the side sheet content</cv-side-sheet>
```

### Methods

Method signature

Description

`forceLayout() => void`

Forces side sheet to relayout (animation frame time).

`focus() => void`

Focuses on the initial focus element if defined.

`blur() => void`

Blurs the active element.

`show() => void`

Opens the side sheet.

`close() => void`

Closes the side sheet.

### Listeners

Event name

Target

Description

`click`

`root element`

Detects if clicked target is a side sheet action.

`resize`

`window`

Performs side sheet layout (passive).

`orientationchange`

`window`

Performs side sheet layout (passive).

`keydown`

`cv-side-sheet`

Listens for the enter key to click the default button (passive).

`keydown`

`document`

Listens for the escape key to close the side sheet

### Events

Event name

Target

Detail

Description

`opening`

`cv-side-sheet`

`{}`

Fired when the side sheet is beginning to open.

`opened`

`cv-side-sheet`

`{}`

  
Fired once the side sheet is finished opening (after animation).

`closing`

`cv-side-sheet`

`{action: string}`

Fired when the side sheet is is beginning to close. Detail is the action that closed the dialog.

`closed`

`cv-side-sheet`

`{action: string}`

Fired once the side sheet is finished closing (after animation). Detail is the action that closed the side sheet.

#### 

References

[MWC dialog](https://www.npmjs.com/package/@material/mwc-dialog)

[Covalent design system - Side sheet](https://teradata.github.io/covalent/docs/components/?path=/docs/components-side-sheet--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In