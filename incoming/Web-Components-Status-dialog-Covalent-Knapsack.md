# Status dialog / Web Components

Modal window displaying messages indicating the status, along with optional details.

[Main](/site/covalent/latest/pattern/status-dialog?templateId=web-components-klayJh8gA&demoId=ugxYH4hy3)

[With details](/site/covalent/latest/pattern/status-dialog?templateId=web-components-klayJh8gA&demoId=zKTIBgFUtF)

LightShare

## Main

stateerrorpositivewarning

Heading

open

hideActions

stacked

scrimClickAction

escapeKeyAction

defaultAction

actionAttribute

initialFocusAttribute

default

Error message / content to be displayed.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

details

primaryAction

secondaryAction

```
<cv-status-dialog  state="error"  heading="Title for the dialog"  open  scrimClickAction="close"  escapeKeyAction="close"  defaultAction="close"  actionAttribute="dialogAction"  initialFocusAttribute="dialogInitialFocus">  <div slot="primaryAction"></div>  Error message / content to be displayed.</cv-status-dialog>
```

Show More

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

cv-status-dialog

Listens for the enter key to click the default button (passive).

`keydown`

document

Listens for the escape key to close the dialog.

Event name

Target

Detail

Description

`opening`

cv-status-dialog

`{}`

Fired when the dialog is beginning to open.

`opened`

cv-status-dialog

`{}`

  
Fired once the dialog is finished opening (after animation).

`closing`

cv-status-dialog

`{action: string}`

Fired when the dialog is is beginning to close. Detail is the action that closed the dialog.

`closed`

cv-status-dialog

`{action: string}`

Fired once the dialog is finished closing (after animation). Detail is the action that closed the dialog.

#### 

References

[MWC dialog](https://www.npmjs.com/package/@material/mwc-dialog)

[Covalent design system - Status Dialog](https://teradata.github.io/covalent/docs/components/?path=/docs/components-status-dialog--overview)

  

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In