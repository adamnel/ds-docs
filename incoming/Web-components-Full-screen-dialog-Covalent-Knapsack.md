# Full-screen dialog / Web components

LightShare

## Main

open

escapeKeyAction

helpResizable

helpOpen

default

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

help

Main

Body 1

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-full-screen-dialog escapeKeyAction="close" open>  <div style="display: flex; width: 100%; flex-flow: column; gap: 100px">    <cv-toolbar>      <div slot="title">Full-screen dialog demo</div>      <div slot="actionItems">        <cv-textfield icon="forum" placeholder="Message Ask.ai" dense>        </cv-textfield>        <cv-icon-button icon="help"> </cv-icon-button>        <cv-icon-button icon="notifications"> </cv-icon-button>        <cv-icon-button icon="person"> </cv-icon-button>      </div>    </cv-toolbar>    <cv-empty-state      headline="You don't have access to this area"      subtitle="You don't have permission to view this application. Please contact your system administrator for further details."      icon="lock"    >      <div slot="button">        <cv-button label="test"> </cv-button>        <cv-button label="test"> </cv-button>      </div>      <div slot="buttons">        <cv-button label="test"> </cv-button>        <cv-button label="test"> </cv-button>      </div>    </cv-empty-state>  </div>  <div slot="help">    <cv-toolbar>      <div slot="title">Help</div>      <div slot="actionItems">        <cv-icon-button icon="fullscreen"> </cv-icon-button>      </div>    </cv-toolbar>    <cv-typography scale="body1">      <div style="padding-left: 12px; padding-right: 12px">        Lorem Ipsum is simply dummy text of the printing and typesetting        industry. Lorem Ipsum has been the industry's standard dummy text ever        since the 1500s, when an unknown printer took a galley of type and        scrambled it to make a type specimen book. It has survived not only five        centuries, but also the leap into electronic typesetting, remaining        essentially unchanged. It was popularised in the 1960s with the release        of Letraset sheets containing Lorem Ipsum passages, and more recently        with desktop publishing software like Aldus PageMaker including versions        of Lorem Ipsum.      </div>    </cv-typography>  </div></cv-full-screen-dialog>
```

Show More

### 

Methods, listeners & events

This component extends `cv-dialog`. Refer to [dialog documentation](/site/covalent/latest/pattern/dialog?templateId=web-components-S9Ia0KOrya) for a complete list of available methods, listeners and events.

### 

References

[MWC dialog](https://www.npmjs.com/package/@material/mwc-dialog)

[Covalent design system - Full-screen dialog](http://localhost:50187/?path=/story/components-full-screen-dialog--basic)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In