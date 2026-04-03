# Dialog / Accessibility

A dialog is a modal window that overlays the current page to grab the user’s attention.

# 

Overview

The **Dialog** component ensures inclusivity by supporting seamless navigation for keyboard and assistive technology users. Proper focus management, clear labeling, and adherence to WCAG standards make dialogs perceivable, operable, and user-friendly. This ensures a consistent and equitable experience for all users.

* * *

# 

Keyboard interactions

## 

Focus management

*   Focus is automatically set to the first interactive element when the dialog opens.
    
*   Ensure focus is returned to the triggering element upon closing.
    

  

## 

Tab index

*   Tab navigation cycles through all focusable elements within the dialog.
    
*   Prevent focus from moving outside the dialog while it is open.
    

![cv-dialog_accessibility](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15281-15461.png?Expires=1768218472&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=KwXHH9~7sFdBQZoLL-NyOF-k6QCEAntiDWI4aR7QlxUsF7C5MVPinGqpe72sUBeQ4pfLHZXnpteUC5qv8vyGYQ0T9jmvF8~OyACvt-jxwQCmoBMYfplaTQ47SWLSbeFVyJCADtVqRAWtmvPwI2PWZqVWifaSO9PlLbX09yUnK6OTgEUIjRzWiiqE9owR5bLFTFpEvt1hU9uptqW8isAaRoN8kQoOF~RII00RIf3IS3jA2qwuPHYtKaabaZAKeh2wZTqdU-rUwNXhsRmfnXPYLxfGWmQt7KIj5ykm59xrqkLJw13zzeaRKETaNVZ3ft5Scdp35WDPwblQYGkAoYZEWA__)

## 

ARIA roles

*   Use `role="dialog"` and associate it with a `label` or `aria-labelledby` for screen reader accessibility.
    
*   Provide contextual descriptions with `aria-describedby` for better comprehension.
    

## 

Escape key support

*   Dialogs should be dismissible with the Escape key for intuitive closure.
    

# 

Additional resources

Explore other guidelines and tools to ensure components and patterns meet accessibility standards and provide inclusive user experiences.

[

See also

Web Content Accessibility Guidelines (WCAG) component standards



](https://www.w3.org/TR/WCAG21/)

[

See also

Material accessibility component guidelines



](https://m2.material.io/components/dialogs/web#using-dialogs)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard interactions](#keyboard-interactions)
    *   [Focus management](#focus-management)
    *   [Tab index](#tab-index)
    *   [ARIA roles](#aria-roles)
    *   [Escape key support](#escape-key-support)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In