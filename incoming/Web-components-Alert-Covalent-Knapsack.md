# Alert / Web components

Notification informing users about important information or events.

[Full-page alert](/site/covalent/latest/pattern/alert?templateId=web-components-4qjJYWsUZi&demoId=mlX5f0Op2T)

[Inline alert](/site/covalent/latest/pattern/alert?templateId=web-components-4qjJYWsUZi&demoId=s8Ci4Cd08W)

LightShare

## Full-page alert

For page-wide messaging.

icon

stateneutralactivenegativepositivecaution

inline

titleText

iconAriaLabel

descriptionText

action-items

Text

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-alert  icon="info"  state="neutral"  titleText="Alert title"  iconAriaLabel="aria-label for the icon"  descriptionText="Alert description">  <div slot="action-items">    <cv-button label="Label"> </cv-button>  </div></cv-alert>
```

Show More

### How to Import

`   import '@covalent/components/alert';   `

### Methods

Method Signature

Description

`show() => void`

Opens the alert.

`close(reason: CloseReason) => void`

Closes the alert, with the specified action indicating why it was closed.

#### 

References

[MDC banner](https://www.npmjs.com/package/@material/banner/v/11.0.0-canary.dc9c84023.0?activeTab=readme)

[Covalent design system - Alert](https://teradata.github.io/covalent/docs/components/?path=/docs/components-alert--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In