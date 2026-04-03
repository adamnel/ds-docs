# Notebook cell / Web components

[Main](/site/covalent/latest/pattern/notebook-cell?templateId=web-components-dlfSUMV1v&demoId=tMM8dM4L3g)

[Output](/site/covalent/latest/pattern/notebook-cell?templateId=web-components-dlfSUMV1v&demoId=H-H7-TnR4K)

LightShare

## Main

code

editorTheme

hideCount

hideEditor

index

language

loading

selected

timesExecuted

context-menu

drag-handle

drag indicator

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

error

output

```
<cv-notebook-cell  code="Select * from DBC.UserInfo;"  language="sql"  editorTheme="cv-light"  selected  timesExecuted="2">  <div slot="drag-handle">    <cv-icon-button icon="drag_indicator"> </cv-icon-button>  </div></cv-notebook-cell>
```

Show More

## 

Events

Event Name

Target

Detail

Description

`code-change`

cv-notebook-cell

`{ code: string }`

Event emitted when the code in the editor is changed.

## 

References

[Covalent design system - Notebook cell](https://teradata.github.io/covalent/docs/components/?path=/docs/components-notebook-cell--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Events](#events)
*   [References](#references)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In