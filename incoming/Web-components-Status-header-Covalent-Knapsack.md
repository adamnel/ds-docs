# Status header / Web components

Header section indicating the status or context of the content.

LightShare

## Main

titleText

statusText

statusHelper

stateactivepositivecautionerrorneutral

status-header-actions

close icon

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

status-header-icon

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

status-header-text

default

```
<cv-status-header  titleText="Active item details"  statusText="In progress"  statusHelper="the helper text for the status"  state="active">  <div slot="status-header-text"></div>  <div slot="status-header-actions">    <cv-icon-button icon="close"> </cv-icon-button>  </div>  <div slot="status-header-icon">    <cv-circular-progress indeterminate progress="0" density="0">    </cv-circular-progress>  </div></cv-status-header>
```

Show More

#### 

References

[Covalent design system - Status Header](https://teradata.github.io/covalent/docs/components/?path=/docs/components-status-header--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In