# Menu / Web components

Provide extended features or hide some items for usability.

[Main](/site/covalent/latest/pattern/menu-copy?templateId=web-components-hY3y1MyhrP&demoId=boILoye9Gi)

[Use icons](/site/covalent/latest/pattern/menu-copy?templateId=web-components-hY3y1MyhrP&demoId=gRDfiA2cmG)

[Disabled items](/site/covalent/latest/pattern/menu-copy?templateId=web-components-hY3y1MyhrP&demoId=AynqJBvDNe)

[Multi-select](/site/covalent/latest/pattern/menu-copy?templateId=web-components-hY3y1MyhrP&demoId=tJNSB-88zA)

[Customization](/site/covalent/latest/pattern/menu-copy?templateId=web-components-hY3y1MyhrP&demoId=c58o7pD09p)

LightShare

## Main

open

anchor

cornerTOP\_LEFTTOP\_RIGHTBOTTOM\_LEFTBOTTOM\_RIGHTTOP\_STARTTOP\_ENDBOTTOM\_STARTBOTTOM\_END

menuCornerSTARTEND

x

y

defaultFocusNONELIST\_ROOTFIRST\_ITEMLAST\_ITEM

innerAriaLabel

innerRolemenulistbox

quick

absolute

fixed

forceGroupSelection

fullwidth

stayOpenOnBodyClick

wrapFocus

multi

activatable

default

Main

Main

Main

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-menu open>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="secondary"></div>    <div slot="graphic"></div>    <div slot="meta"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="meta"></div>    <div slot="graphic"></div>    <div slot="secondary"></div>    List item  </cv-list-item>  <cv-list-item tabindex="-1">    <div slot="meta"></div>    <div slot="graphic"></div>    <div slot="secondary"></div>    List item  </cv-list-item></cv-menu>
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

Proxies to `cv-list`'s `items` property.

`index`

`-1`

`MWCListIndex` which is equivalent to `number|Set<number>`

Proxies to `cv-list`'s `index` property.

`selected`

`null`

`ListItemBase|ListItemBase[]|`  
`null`

Proxies to `cv-list`'s `selected` property.

### Methods

Method signature

Description

`show() => void`

Sets `open` to true.

`close() => void`

Sets `open` to false.

`select(index: MWCMenuIndex) => void`

Selects the elements at the given index / indices.

`getFocusedItemIndex() => number`

Returns the index of the currently-focused item. `-1` if none are focused.

`focusItemAtIndex(index) => void`

Focuses the item at the given index and manages tabindex on all other items.

`layout(updateItems = true) => void`

Resets tabindex on all items and will update `items` model if provided true. It may be required to call layout if selectability of an element is dynamically changed. e.g. `noninteractive` is dynamically set on a list item.

  

  

### Events

Event name

Target

Detail

Description

`opened`

`cv-menu-surface`

none

Fired when opened.

`closing`

`cv-menu-surface`

none

Fired when closing but animation may not have completed yet. Use for time-sensitive logic that must be run immediately upon close.

`closed`

`cv-menu-surface`

none

Fired when closed.

`action`

`cv-list`

`ActionDetail *`

Fired when a selection has been made via click or keyboard action.

`selected`

`cv-list`

`SelectedDetail *`

Fired when a selection has been made. `index` is the selected index (will be of type `Set<number>` if multi and `number` if single), and `diff` (of type `IndexDiff`\*\*) represents the diff of added and removed indices from previous selection.

\* See cv-list's Events section for more details

#### 

References

[MWC menu](https://www.npmjs.com/package/@material/mwc-menu)

[Covalent design system - Menu](https://teradata.github.io/covalent/docs/components/?path=/docs/components-menu--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In