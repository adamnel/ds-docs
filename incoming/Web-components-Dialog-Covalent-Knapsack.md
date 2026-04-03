# Dialog / Web components

A dialog is a modal window that overlays the current page to grab the user’s attention.

[Default](/site/covalent/latest/pattern/dialog?templateId=web-components-S9Ia0KOrya&demoId=yovRt8o986)

[Delete confirmation](/site/covalent/latest/pattern/dialog?templateId=web-components-S9Ia0KOrya&demoId=dQm3yYGqlP)

LightShare

## Default

open\*

hideActions

stacked

heading

scrimClickAction

escapeKeyAction

defaultAction

actionAttribute

initialFocusAttribute

default

Message

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

secondaryAction

Text

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

primaryAction

Text

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-dialog  open  heading="Heading"  scrimClickAction="close"  escapeKeyAction="close"  defaultAction="close"  actionAttribute="dialogAction"  initialFocusAttribute="dialogInitialFocus">  Message  <div slot="secondaryAction">    <cv-button label="Label"> </cv-button>  </div>  <div slot="primaryAction">    <cv-button label="Label"> </cv-button>  </div></cv-dialog>
```

Show More

### How to import

`   import "@covalent/components/dialog";   `

### Methods

Method signature

Description

`forceLayout() => void`

Forces dialog to relayout (animation frame time). May be required if dialog size is incorrect or if stacked layout has not been triggered correctly.

`focus() => void`

Focuses on the initial focus element if defined

`blur() => void`

Blurs the active element.

`show() => void`

Opens the dialog.

`close() => void`

Closes the dialog.

### Listeners

Event name

Target

Description

`click`

root element

Detects if clicked target is a dialog action.

`resize`

window

Performs dialog layout (passive).

`orientationchange`

window

Performs dialog layout (passive).

`keydown`

mwc-dialog

Listens for the enter key to click the default button (passive).

`keydown`

document

Listens for the escape key to close the dialog

### Events

Event name

Target

Detail

Description

`opening`

cv-dialog

`{}`

Fired when the dialog is beginning to open.

`opened`

cv-dialog

`{}`

  
Fired once the dialog is finished opening (after animation).

`closing`

cv-dialog

`{action: string}`

Fired when the dialog is is beginning to close. Detail is the action that closed the dialog.

`closed`

cv-dialog

`{action: string}`

Fired once the dialog is finished closing (after animation). Detail is the action that closed the dialog.

# 

Additional resources

[

See also

MWC dialog



](https://www.npmjs.com/package/@material/mwc-dialog)

[

See also

Storybook



](https://teradata.github.io/covalent/docs/components/?path=/docs/components-dialog--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [How to import](#how-to-import)
*   [Methods](#methods)
*   [Listeners](#listeners)
*   [Events](#events)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In