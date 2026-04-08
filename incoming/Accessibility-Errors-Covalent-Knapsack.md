# Errors / Accessibility

Error patterns provide users with feedback when something goes wrong. They help users understand the issue, prevent frustration, and guide them toward resolution. Error patterns include inline message, alert, and dialog.

## 

Overview

Accessibility is critical to ensuring error messaging is inclusive and usable for all users, including those with disabilities. Error components, including Inline, Page Banner, and Modal patterns, must meet WCAG 2.1 AA standards for accessibility. This involves designing with clear, perceivable, operable, and understandable principles to support assistive technologies, keyboard navigation, and visual clarity.

**Accessible error messaging ensures users can:**

*   Identify issues quickly.
    
*   Navigate to errors using assistive technologies or keyboard navigation.
    
*   Resolve problems without unnecessary confusion or frustration.
    

## 

Keyboard Interactions

**General Guidelines (Applies to All Components):**

*   **Focus Management**: Ensure focus is placed on the error message or its actionable element when triggered.
    
*   **Keyboard Navigation**: Users must be able to interact with all error components using the Tab key, Arrow keys, and Enter/Space as necessary.
    
*   **ARIA Attributes**: Use ARIA roles (`aria-live`, `aria-describedby`, `role="alert"`) to announce errors to assistive technologies.
    

**Inline errors**:

*   **Tab Index**: Automatically set focus to the input field with an error when the user submits invalid data.
    
*   **Error Description State**: Link the error message to the input field using `aria-describedby` to ensure assistive technology users can navigate and understand the context.
    

**Page banner errors**:

*   **Tab index**: Ensure the banner is the first element in the Tab order when displayed.
    
*   **Hit Area State**: Allow dismiss or action buttons to have an adequate hit area (minimum 44x44px) for both mouse and keyboard users.
    
*   **ARIA Announcements**: Use `aria-live="assertive"` for high-priority banners to inform users immediately.
    

**Modal errors**:

*   **Focus**: Ensure focus stays within the modal while it is open, with the ability to return focus to the triggering element when closed.
    
*   **Escape Key**: Allow users to dismiss the modal using the Escape key.
    
*   **Tab Index**: Provide a logical Tab order within the modal, cycling back to the top once the end is reached.
    

## 

Additional resources

Explore other guidelines and tools to ensure components and patterns meet accessibility standards and provide inclusive user experiences.

[

See also

Web Content Accessibility Guidelines(WCAG) component standards



](https://www.w3.org/WAI/standards-guidelines/wcag/)

[

See also

Web Components Accessibility Guide



](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard Interactions](#keyboard-interactions)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In