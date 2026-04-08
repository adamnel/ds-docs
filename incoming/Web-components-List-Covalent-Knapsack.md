# List / Web components

Collection of items displayed vertically or horizontally.

[Main](/site/covalent/latest/pattern/list?templateId=web-components-fObxCsu2i8&demoId=R-bXJMtJi)

[Check list](/site/covalent/latest/pattern/list?templateId=web-components-fObxCsu2i8&demoId=kyAJAxMx7u)

[Radio list](/site/covalent/latest/pattern/list?templateId=web-components-fObxCsu2i8&demoId=kaReFY5Pwj)

[Navigation list](/site/covalent/latest/pattern/list?templateId=web-components-fObxCsu2i8&demoId=hjXCY4fSqY)

[Sub navigation](/site/covalent/latest/pattern/list?templateId=web-components-fObxCsu2i8&demoId=SIyOkmonoE)

LightShare

## Main

activatible

rootTabbable

multi

wrapFocus

noninteractive

itemRoles

innerAriaLabel

innerRole

default

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-list activatible items="{}" selected="{}" index="{}">  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item></cv-list>
```

Show More

### Readonly properties

Prop

Default

Type

Details

`items`

`[]`

`ListItemBase[]`

ll list items that are available for selection. Eligible items have the `[mwc-list-item]` attribute which `ListItemBase` applies automatically.

`index`

`-1`

`MWCListIndex` which is equivalent to `number|Set<number>`

Index / indices of selected item(s). When `multi` is `true`, `index` is of type `number` and when `false`, `index` is of type `Set<number>`. Unset indicies are `-1` and empty `Set<number>` for single and multi selection respectively.

`selected`

`null`

`SelectedType` which is equivalent to`ListItemBase|ListItemBase[]|`  
`null`

Currently-selected list item(s). When `multi` is `true`, `selected` is of type `ListItemBase[]` and when `false`, `selected` is of type `ListItemBase`. `selected` is `null` when no item is selected.

### Methods

Method signature

Description

`select(index: MWCListIndex) => void`

Selects the elements at the given index / indices.

`toggle(index: number, force?: boolean) => void`

Toggles the selected index, and forcibly selects or deselects the value of `force` if attribute is provided.

`getFocusedItemIndex() => number`

Returns the index of the currently-focused item. `-1` if none are focused.

`focusItemAtIndex(index) => void`

Focuses the item at the given index and manages tabindex on all other items.

`layout(updateItems = true) => void`

Resets tabindex on all items and will update items model if provided true. It may be required to call layout if selectability of an element is dynamically changed. e.g. `[mwc-list-item]` attribute is removed from a list item or `noninteractive` is dynamically set on a list item.

### Events

Event name

Target

Detail

Description

`action`

`cv-list`

`ActionDetail *`

Fired when a selection has been made via click or keyboard action.

`selected`

`cv-list`

`SelectedDetail **`

Fired when a selection has been made. `index` is the selected index (will be of type `Set<number>` if multi and `number` if single), and `diff` (of type `IndexDiff`\*\*) represents the diff of added and removed indices from previous selection.

\* `ActionDetail` is an interface of the following type:

`   interface ActionDetail {   index: number; }   `

\*\* `SelectedDetail` is an interface of the following type:

`   interface SelectedDetail<T extends MWCListIndex = MWCListIndex> {   index: T;   diff: T extends Set<number> ? IndexDiff: undefined; }   `

\*\* `IndexDiff` is an interface of the following type:

`   interface IndexDiff {   added: number[];   removed: number[]; }   `

#### 

References

[MWC list](https://www.npmjs.com/package/@material/mwc-list?activeTab=readme)

[Covalent design system - List](https://teradata.github.io/covalent/docs/components/?path=/docs/components-list--overview)

  

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In