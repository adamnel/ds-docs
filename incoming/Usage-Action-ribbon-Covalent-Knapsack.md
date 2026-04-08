# Action ribbon / Usage

Provide a common, dynamic region for user actions and feedback which applies to a subset of the UI.

![cv-action-ribbon_hero](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14353-2456.png?Expires=1768218232&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=xgRWsrtVvNzUls~g6MxiQ4rUpx~nSnR7Hi4sDRUE-Zyh30r9wVJhzA5BJZSFzNcWlbWEt6432nJINmjvxxfFj5CqCOhGSsf4PZUdlLI4jCNgHHGf6Tpja5SdHmfbspmcQ-ZqncuaUtRJYPlKO-19WHIdNOxFjPRdU5wIdEBdCRFEqjrWr7AKBW4GVTjJUaBHDCrgORMKKwE86aK3XFaBU0pqADsSmtXl~L035aXoJbMah2dmS2JYh0uzG~qN6jQLhUjjQtwrKzCzNvxt4YkNH2t8MgrTzdx2rJLzEOGC5gy-aDJhlLKkHs8onONoc1ZUDPHR~lndULnLblVF4NreOQ__)

# 

When to use

Action Ribbon should be used to streamline user actions such as save, edit, delete, or configure, making them easily accessible in a consistent location. It's best applied in contexts like forms or data management interfaces where quick access to actions is beneficial.

Variants

Purpose

[Default](/site/covalent/latest/pattern/action-ribbon?templateId=web-components-v3gk7O39kO)

To enhance user efficiency by grouping related actions in a visible, easily accessible manner, ideal for complex tasks in data-rich environments.

## 

Bulk selection

Provide feedback and – if warranted – different actions for multi-selection. This allows the same actions area to provide general actions when nothing is selected, and specific bulk actions when relevant in the same space.

### 

Default / inactive

No items have been selected

![cv-action-ribbon_bulk-selection--default](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/13667-711.png?Expires=1768218232&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=f4IgUtWfwjsjdjrIPXOXvgfguzctyUttrVEpvOTFWHOju1x2eM~yH66gdc6Qf3Eo~LBxDZ6g59Ncmo7la-kG6-LoBqMnGaqf89TcjBXYhQm-7sSYf1-HDYPstJSJhawgM6U-Ht5WCaarpuhDYWkUgvMBtKNdtvVgYMXMIpCfjC513~X7hNvLBC41fuAbhS7wN1Hp9a2FLtAGmRHEYcifQs3VF4kADE7RW-Xq310rc-y7-UjWHr-NEXN9I417jph878iAvg~FE2Sf0vxSnyV0b7OXsy6St-m9pV4dEgCXIKAVxjJwzC5mcauYabZlZ7x4at4t4CQGby7xa7Aag7dK0w__)

### 

Items selected

Items have been selected.

Replace actions with those that are relevant when applied to the selected items.

Sometimes actions apply in both cases.

![cv-action-ribbon_bulk-selection--selected](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/13667-1496.png?Expires=1768218232&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=y5msJK7GlldnTDXg6s96GKI8ysUlsyN149xYOz4aNxKIN1216iVQC50dFiS8jRwdy1Tec5QGoGtb-tsZo9KS1F6C3YvwzE~H8k58C6Nc~NaojLt2VNh4zt3QkjB3JWflTqMfVcBkqvDWxyAC7KPC1GOmH9ODMMF47xgPmCVaL2CEitwnYEXU9uWMamO13NYHsRlqP48ZnWXEbPoF1FWrbUCrvvCR522gd5qo5d2hD1CvySpUaj4k-3IigGCpLFtDfxOee-MJqFLDPPum9Szis-YcpnCh5dU9zI3S1MAWU75ilk08nJ~LOpK~cwnmvVbIIJHXCqViiYSVPSMQqXasjg__)

## 

Mini-toolbar vs. action ribbon

These two components are very similar looking, but function differently. In some cases they are used together.

### 

Mini-toolbar

*   Contains a title
    
*   Contains a close button
    
*   Does not provide user feedback messages
    

![cv-action-ribbon_ribbon-vs-toolbar--toolbar](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15339-6902.png?Expires=1768218232&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=FnuD1JQTz1ilkeDtZP1EtWfFqhSVbHeiaSimLgGTERtvD7ix2Fgg7gR~ZdcZ5L84bfm2gMoYyedgp8lHpvyAu~Ly9dLxiQ4drSmU21WnHxEqo92XoeTwgwa6W~bRP0Qh71UPifF2rqia~pmcpfEBOWaewmgXGblgL-0soZcf1RPIOZ~v1MN51mnomrtcqiAALNTLNyJXdqLxVwhF~GsbL~SUqoUwJoGYWd-lw8FGMy6~NNwQ5abHxDR6lFuSqgz86-Ye3D88zMJq3hj2MrweVuRwuvMeX4vmA9hPj2-~sL~4WidUsk3hNoIHD2ajokkwCC77Ni0SnAdqqAIoEScGJw__)

### 

Action ribbon

*   Does not contain a title
    
*   Does not contain a close button
    
*   Provides user feedback messages
    

![cv-action-ribbon_ribbon-vs-toolbar--action-ribbon](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15346-7039.png?Expires=1768218232&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=Q6~YiRRhiuPRNjSudkv~ilctWJo6~GsyMEi64Mx31xttH2acoq~Z2TvMARsaWmOfFD3VNKNY3X3TMp3lGYMs2uhah178dAV5dJzV3HzGRoN9rfW0IP6OIVBS0vXgGwUAHTMe9dknUqZ0iIbzG3AJK9fciCbMrh63SEkTi85e0zr1FagWRfBroPSv3Xr6KsvEeWBUl2OVXJst9Gk7q55SSv676a~3WTaqld~pZ5nlvVtjRIeHXEEjz2vJXkaI2FE79QM0fw0HuzoBbMRsjvK0nWNky0B~zslG6zgbFC7-ldFfH3TKaW6pYXj-pUOT45T6fvbs0gfhPLMKp1IVD8svsw__)

# 

Recommendations

Recommended practices ensure clear guidance, usability, accessibility, appropriate sizing, and user support.

##### Do

*   **Do use in contexts like forms or data management interfaces** where quick access to actions is beneficial.
    
*   **Do use the action ribbon for grouping actions** that are relevant to the current page or context to keep user workflows streamlined and intuitive.
    
*   **Do prioritize actions** based on their importance and frequency of use, placing the most common actions within easy reach.
    
*   **Do maintain consistency** in action placement and labeling across different parts of the application to reduce learning curves and enhance user experience.
    

##### Don't

*   **Don't** use the action ribbon in simple interfaces where fewer actions are needed.
    
*   **Don't overload the action ribbon** with too many actions, which can overwhelm users and dilute the importance of primary actions.
    
*   **Don't mix action types** that aren't related, as this can confuse users about the expected outcomes of their interactions.
    

# 

Additional resources

Can't find what you're looking for? We provide full documentation transparency. Here are additional resources to provide further clarity.

[

See also

Toolbars



](/site/covalent/latest/pattern/toolbar)

[

Color

Color



](/site/covalent/latest/pages/color)

[

See also

Material Angular



](https://material.angular.io/components/toolbar/overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [When to use](#when-to-use)
    *   [Bulk selection](#bulk-selection)
    *   [Mini-toolbar vs. action ribbon](#mini-toolbar-vs-action-ribbon)
*   [Recommendations](#recommendations)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In