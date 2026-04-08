# Tab bar / Web components

Navigation element allowing users to switch between different sections or views.

LightShare

## Main

activeIndex

default

Main

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-tab-bar activeIndex="0">  <cv-tab label="Tab label"> </cv-tab>  <cv-tab label="Tab label"> </cv-tab>  <cv-tab label="Tab label"> </cv-tab></cv-tab-bar>
```

### Methods

Method signature

Description

`scrollIndexIntoView(index:number) => void`

For long, scrollable cv-tab-bars, scrolls the tab at the given index into view.

### Events

Event name

Target

Detail

Description

`MDCTabBar:activated`

`cv-tab-bar`

`{index: number}`

Emitted when a tab selection has been made.

#### 

References

[MWC tab bar](https://www.npmjs.com/package/@material/mwc-tab-bar)

[Covalent design system - Tabs](https://teradata.github.io/covalent/docs/components/?path=/docs/components-tabs--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In