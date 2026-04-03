# Toolbar / Web components

Provide wayfinding, context and actions for the current page

[Main](/site/covalent/latest/pattern/toolbar?templateId=web-components-A6-16QhSaM&demoId=NXMdeiHjKO)

[Mini](/site/covalent/latest/pattern/toolbar?templateId=web-components-A6-16QhSaM&demoId=jBi2h7tnlI)

LightShare

## Main

dense

centerTitle

prominent

scrollTarget

sticky

title

Page toolbar

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

actionItems

Main

Main

Main

Outlined

Outlined

Outlined

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

navigationIcon

default

```
<cv-toolbar>  <div slot="title">Page toolbar</div>  <div slot="actionItems">    <cv-icon-button icon="filter_list"> </cv-icon-button>    <cv-icon-button icon="search"> </cv-icon-button>    <cv-icon-button icon="add"> </cv-icon-button>    <cv-button label="Label" outlined> </cv-button>    <cv-button label="Label" outlined> </cv-button>    <cv-button label="Label" outlined> </cv-button>  </div></cv-toolbar>
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

[Covalent design system - Toolbar](https://teradata.github.io/covalent/docs/components/?path=/docs/components-toolbar--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In