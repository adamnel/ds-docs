# Text field / Web components

A text field is an input element that allows users to type text into a form. It is used for capturing short text entries, such as names, email addresses, or any other single-line information. Text fields can be single-line or multi-line (text area) for longer inputs.

[Main](/site/covalent/latest/pattern/textfield?templateId=web-components-M4zyalwdNJ&demoId=zYujvGxjlZ)

[AI Chat](/site/covalent/latest/pattern/textfield?templateId=web-components-M4zyalwdNJ&demoId=tU8Ze3Af9p)

LightShare

## Main

value

typetextsearchtelurlemailpassworddatemonthweektimedatetime-localnumbercolor

label

name

placeholder

helper

helperPersistent

outlined

required

disabled

dense

prefix

suffix

pattern

min

max

size

step

icon

iconTrailing

maxLength

charCounter

validity

autoValidate

validationMessage

willValidate

validityTransform

validateOnInitialRender

```
<cv-textfield  placeholder="Placeholder"  helper="helper text"  label="Text field"  icon="person"  outlined  validity="{}"  willValidate="{}"  validityTransform="{}"></cv-textfield>
```

Show More

### Methods

Method signature

Description

`checkValidity() => boolean`

Returns `true` if the textfield passes validity checks. Returns `false` and fires an `invalid` event on the textfield otherwise.

`reportValidity() => boolean`

Runs `checkValidity()` method, and if it returns false, then it reports to the user that the input is invalid.

`setCustomValidity(message:string) => void`

Sets a custom validity message (also overwrites `validationMessage`). If this message is not the empty string, then the element is suffering from a custom validity error and does not validate.

`layout() => Promise<void>`

Re-calculate layout. If a textfield is styled with `display:none` before it is first rendered, and it has a label that is floating, then you must call `layout()` the first time you remove `display:none`, or else the notch surrounding the label will not render correctly.

#### 

References

[MWC textfield](https://www.npmjs.com/package/@material/mwc-textfield)

[Covalent design system - Textfield](https://teradata.github.io/covalent/docs/components/?path=/docs/components-text-field--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In