# Focused page / Web components

LightShare

## Main

helpResizable

helpOpen

hideTopBorder

default

Main

Main

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

help

Main

Body 1

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-focused-page>  <div style="display: flex; width: 100%; flex-flow: column; gap: 100px">    <cv-toolbar>      <div slot="title">Focused page demo</div>      <div slot="actionItems">        <cv-textfield icon="forum" placeholder="Message Ask.ai" dense>        </cv-textfield>        <cv-icon-button icon="help"> </cv-icon-button>        <cv-icon-button icon="notifications"> </cv-icon-button>        <cv-icon-button icon="person"> </cv-icon-button>      </div>    </cv-toolbar>    <cv-empty-state      headline="You don't have access to this area"      subtitle="You don't have permission to view this application. Please contact your system administrator for further details."      icon="lock"    >      <div slot="button">        <cv-button label="test"> </cv-button>        <cv-button label="test"> </cv-button>      </div>      <div slot="buttons">        <cv-button label="test"> </cv-button>        <cv-button label="test"> </cv-button>      </div>    </cv-empty-state>  </div>  <div slot="help">    <cv-toolbar>      <div slot="title">Help</div>      <div slot="actionItems">        <cv-icon-button icon="fullscreen"> </cv-icon-button>      </div>    </cv-toolbar>    <cv-typography scale="body1">      <div style="padding-left: 12px; padding-right: 12px">        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint        occaecat cupidatat non proident, sunt in culpa qui officia deserunt        mollit anim id est laborum.      </div>    </cv-typography>  </div></cv-focused-page>
```

Show More

### 

References

[Covalent design system - Focused page](http://localhost:50187/?path=/story/components-focused-page--basic)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In