# Select / Web components

A drop-down menu, or select menu, allows the user to choose from a list of options presented in a collapsible format. Drop-downs are ideal when you have many options to present but want to save space on the form.

LightShare

## Main

label

value

validationMessage

helper

icon

required

outlined\*

naturalMenuWidth

fixedMenuPosition

disabled

validateOnInitialRender

default

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-select outlined>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item></cv-select>
```

Show More

### How to import

`   import "@covalent/components/select";   `

### Readonly properties

Prop

Default

Type

Details

`selected`

`null`

`ListItemBase`|`null`

Selected list item element.

`items`

`[]`

`ListItemBase[]`

List of selectable items.

`index`

`-1`

`number`

Index of selected list item.

`validity`

`DefaultValidity *`

`ValidityState (readonly)`

The `ValidityState` of the select.

`validityTransform`

`null`

`ValidityTransform`|`null`

Callback called before each validation check.

\* DefaultValidity is:

`   ts { badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }   `

### Methods

Method signature

Description

`checkValidity() => boolean`

Returns `true` if the select passes validity checks. Returns `false` and fires an `invalid` event on the select otherwise.  
**NOTE:** When accessing any property or function that checks validity at select initial boot up, you may have to await `<cv-select>.updateComplete`.

`reportValidity() => boolean`

Runs `checkValidity()` method, and if it returns false, then it reports to the user that the input is invalid.

`setCustomValidity(message:string) => void`

Sets a custom validity message (also overwrites `validationMessage`). If this message is not the empty string, then the element is suffering from a custom validity error and does not validate.

`select(index: number) => void`

Selects the element at the given index.

`layout(updateItems = true) => Promise<void>`

Resets tabindex on all items and will update `items` model if provided true. It may be required to call layout if selectability of an element is dynamically changed. e.g. `noninteractive` is dynamically set on a list item. Also re-calculates layout. If a select is styled with `display:none` before it is first rendered, and it has a label that is floating, then you must call `layout()` the first time you remove `display:none`, or else the notch surrounding the label will not render correctly.

`layoutOptions() => Promise<void>`

Synchronizes the list of options with the model of the component and updates the selected text. Call this if the selected item is dynamically updated in value or text.

### Events

Event name

Target

Detail

Description

`opened`

`cv-select-surface`

none

Fired when menu opens.

`closed`

`cv-select-surface`

none

Fired when menu closes.

`selected`

`cv-list`

`SelectedDetail *`

Fired when a selection has been made. Property `index` is the selected index (will be of type `number`)

\* See `cv-list`'s Events section for more details.

#### 

References

[MWC select](https://www.npmjs.com/package/@material/mwc-select)

[Covalent design system - Select](https://teradata.github.io/covalent/docs/components/?path=/docs/components-select--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In