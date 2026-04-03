# Tab / Web components

A component that organizes content across different screens, data sets, and other interactions

LightShare

## Main

label\*

icon

indicatorIcon

hasImageIcon

isFadingIndicator

minWidth

isMinWidthIndicator

stacked

active

icon

```
<cv-tab label="Tab label"> </cv-tab>
```

### Methods

Method signature

Description

`activate() => void`

Activates the indicator.

`deactivate() => void`

Deactivates the indicator.

`computeDimensions() => MDCTabDimensions`\*

Computes the dimensions of the content.

`computeIndicatorClientRect() => ClientRect`

Computes the dimensions of the indicator.

\*See [Tab types](https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/types.ts#L29) for definition.

  

### Events

Event name

Target

Detail

Description

`interacted`

`cv-tab`

`{tabId: string}`

Emitted when the Tab is interacted with, regardless of its active state. Used by parent components to know which Tab to activate.

#### 

References

[MWC tab](https://www.npmjs.com/package/@material/mwc-tab)

[Covalent design system - Tabs](https://teradata.github.io/covalent/docs/components/?path=/docs/components-tabs--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In