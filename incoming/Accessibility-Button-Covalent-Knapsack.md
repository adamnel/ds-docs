# Button / Accessibility

Buttons are interactive components that guide and inform a user’s interaction through an experience. They signal actions and provide clear visual cues to help users accomplish their goals with confidence and efficiency.

# 

Overview

Buttons must be accessible to all users, ensuring equal interaction regardless of ability. They should have clear, descriptive labels, proper color contrast, and visible focus states to support usability and accessibility.

# 

Keyboard interactions

Buttons should be fully operable via keyboard:

*   **Enter/Return key**: Activates the button’s action.
    
*   **Spacebar**: Activates the button’s action, consistent with standard keyboard behavior.
    
*   Provide clear feedback, such as visual states (e.g., hover, focus, active), to indicate when the button is ready to be interacted with.
    

![cv-button_accessibility](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15942-21888.png?Expires=1768218359&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=f2ozd5SWm4y8z46eQP-sjtLRALAzpxSSjsxbUxrAKdH0mrKamlaSI7tBZJYPg~UW9VysKQevI29En6aIybUqmjgugBAIl0ZBiqqm6zmpv077UpTuTounzZhb~XH2ao4DXG7NdZ~Ob89clKAdjXBYTiUWq87b5uMdqGfTk7acITqPbT4fir~QB~CYXlGqHLd3ELJ38Rj1fdvZ5UDtK3V~MR639C1lLqpd9wnVu6i0GLV6pgfoGlqjjIpbpoepZ6Lx0-cB8tgYJ4NjYu2SDBXFv39Mi4oTHsMzF38eUCtRXELGyGKb7ZXHJgKFgE2s9-QscJstgrVXGj4qHiZNSr81~A__)

## 

Tab index focus

 Buttons must follow a logical tab order to maintain smooth navigation:

*   Use a **tabindex="0"** for buttons to include them in the natural tab order.
    
*   Focus states should be clearly visible and distinct, meeting [WCAG 2.1 guidelines for contrast](#).
    
*   Avoid removing buttons from the tab order unless they are intentionally disabled, ensuring accessibility for keyboard and assistive technology users.
    

# 

Additional resources

Explore other guidelines and tools to ensure components and patterns meet accessibility standards and provide inclusive user experiences.

[

See also

Web Content Accessibility Guidelines (WCAG) component standards



](https://www.w3.org/TR/WCAG21/)

[

See Also

Material accessibility component guidelines



](https://m2.material.io/components/buttons/web#using-buttons)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard interactions](#keyboard-interactions)
    *   [Tab index focus](#tab-index-focus)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In