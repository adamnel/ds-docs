# Text area / Web components

Input field allowing users to enter multiple lines of text.

LightShare

## Main

rows

cols

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

icon

iconTrailing

maxLength

charCounter

validationMessage

validityState

willValidate

validityTransform

validateOnInitialRender

```
<cv-textarea  label="Text area label"  outlined  validityState="{}"  willValidate="{}"  validityTransform="{}"  charCounter  maxLength="80"></cv-textarea>
```

Show More

### Methods

Method signature

Description

`checkValidity() => boolean`

Returns `true` if the textarea passes validity checks. Returns `false` and fires an `invalid` event on the textarea otherwise.

`reportValidity() => boolean`

Runs `checkValidity()` method, and if it returns false, then it reports to the user that the input is invalid.

`setCustomValidity(message:string) => void`

Sets a custom validity message (also overwrites `validationMessage`). If this message is not the empty string, then the element is suffering from a custom validity error and does not validate.

`layout() => Promise<void>`

Re-calculate layout. If a textarea is styled with `display:none` before it is first rendered, and it has a label that is floating, then you must call `layout()` the first time you remove `display:none`, or else the notch surrounding the label will not render correctly.

#### 

References

[MWC textarea](https://www.npmjs.com/package/@material/mwc-textarea)

[Covalent design system - Textarea](https://teradata.github.io/covalent/docs/components/?path=/docs/components-text-area--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In