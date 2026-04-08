# Code snippet / Web components

Portion of code displayed within an interface, often for demonstration or explanation.

LightShare

## Main

label

language

inline

hideHeader

maxHeight

default

SELECT \* FROM load\_to\_teradata ( ON ( SELECT "class" AS class\_col, "variable" AS variable\_col, "type" AS type\_col, category, cnt, "sum" AS sum\_col, "sumSq", "totalCnt" FROM aster\_nb\_modelSC ) tdpid ('sdt12432.labs.teradata.com') username ('sample\_user') password ('sample\_user') target\_table ('td\_nb\_modelSC') );

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

actionItems

Outlined

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

```
<cv-code-snippet label="Example.sql" language="sql">  SELECT * FROM load_to_teradata ( ON ( SELECT "class" AS class_col, "variable"  AS variable_col, "type" AS type_col, category, cnt, "sum" AS sum_col, "sumSq",  "totalCnt" FROM aster_nb_modelSC ) tdpid ('sdt12432.labs.teradata.com')  username ('sample_user') password ('sample_user') target_table  ('td_nb_modelSC') );  <div slot="action-items">    <cv-button label="Retry" outlined> </cv-button>  </div>  <div slot="actionItems">    <cv-button label="Retry" outlined> </cv-button>  </div></cv-code-snippet>
```

Show More

#### 

References

[Covalent design system - Code snippet](https://teradata.github.io/covalent/docs/components/?path=/docs/components-code-snippet--overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In