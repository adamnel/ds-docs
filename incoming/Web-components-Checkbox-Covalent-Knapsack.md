# Checkbox / Web components

A checkbox allows the user to select one or more options from a set of choices. Unlike radio buttons, checkboxes allow for multiple selections, meaning the user can choose more than one option at a time.

[Unchecked](/site/covalent/latest/pattern/checkbox?templateId=web-components-29FbeDQWhM&demoId=ee2EneFvzS)

[Checked](/site/covalent/latest/pattern/checkbox?templateId=web-components-29FbeDQWhM&demoId=WqDTVze47k)

LightShare

## Unchecked

Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.

checked

indeterminate

disabled

reducedTouchTarget

value

```
<cv-checkbox value=""> </cv-checkbox>
```

### How to Import

`   import "@covalent/components/checkbox";   `

### Events

Event Name

Target

Detail

Description

change

cv-checkbox

{}

Fired when the user modifies the checkbox `checked` or `indeterminate` states from an input device interaction. Note that, like [native](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) `<input>`, the `change` event is _not_ fired when the `checked` or `indeterminate` properties are set from JavaScript.

#### 

References

[MWC Checkbox](https://www.npmjs.com/package/@material/mwc-checkbox)

[Covalent Design System - Checkbox](https://teradata.github.io/covalent/docs/components/?path=/docs/components-checkbox--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In