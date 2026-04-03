# Snackbar / Web components

Temporary notification displayed at the bottom of the screen.

[Action not available](/site/covalent/latest/pattern/snackbar?templateId=web-components-3ERE1Ai9lo&demoId=5aKkBtql-E)

[Action optional](/site/covalent/latest/pattern/snackbar?templateId=web-components-3ERE1Ai9lo&demoId=skLYgeusTs)

[Action required](/site/covalent/latest/pattern/snackbar?templateId=web-components-3ERE1Ai9lo&demoId=N-JOY8DOHe)

LightShare

## Action not available

open\*

leading

stacked

closeOnEscape

timeoutMs

labelText

action

dismiss

```
<cv-snackbar  open  labelText="Settings saved"  leading  timeoutMs="4000"  closeOnEscape>  <div slot="action"></div>  <div slot="dismiss"></div></cv-snackbar>
```

Show More

### Methods

Method signature

Description

`show() => void`

Opens the snackbar.

`close(reason: string = '') => void`

Closes the snackbar, optionally with the specified reason indicating why it was closed.

### Events

Event name

Detail

Description

`opening`

`{}`

Indicates when the snackbar begins its opening animation.

`opened`

`{}`

Indicates when the snackbar finishes its opening animation.

`closing`

`{reason?: string}`

Indicates when the snackbar begins its closing animation. `reason` contains the reason why the snackbar closed (`'dismiss'`, `'action'`, or a custom `string` via the `close` method).

`closed`

`{reason?: string}`

Indicates when the snackbar finishes its closing animation. `reason` contains the reason why the snackbar closed (`'dismiss'`, `'action'`, or a custom `string` via the `close` method).

#### 

References

[MWC snackbar](https://www.npmjs.com/package/@material/mwc-snackbar)

[Covalent design system - Snackbar](https://www.npmjs.com/package/@material/mwc-snackbar)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In