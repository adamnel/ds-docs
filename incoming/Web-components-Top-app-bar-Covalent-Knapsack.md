# Top app bar / Web components

Horizontal bar at the top of an application containing navigation and other controls.

LightShare

## Main

centerTitle

prominent

dense

scrollTarget

navigationIcon

title

App Bar Title

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

actionItems

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

default

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-top-app-bar>  <div slot="navigationIcon"></div>  <div slot="title">App Bar Title</div>  <div slot="actionItems">    <cv-icon-button icon="houseboat"> </cv-icon-button>  </div>  <cv-empty-state    headline="You don't have access to this area"    subtitle="You don't have permission to view this application. Please contact your system administrator for further details."    icon="lock"  >    <div slot="button"></div>    <div slot="buttons"></div>  </cv-empty-state></cv-top-app-bar>
```

Show More

### Events

Event name

Detail

Description

`nav`

`{}`

Fired when the `navigationIcon` is clicked.

#### 

References

[MWC top app bar](https://www.npmjs.com/package/@material/mwc-top-app-bar)

[Covalent design system - Top app bar](https://teradata.github.io/covalent/docs/components/?path=/docs/components-tooltip--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In