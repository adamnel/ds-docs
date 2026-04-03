# Action ribbon / Accessibility

Provide a common, dynamic region for user actions and feedback which applies to a subset of the UI.

# 

Overview

The Action Ribbon is an essential component designed to enhance user interaction and feedback by providing a common, dynamic region for action controls. Accessibility in the Action Ribbon ensures that all users, including those with disabilities, can navigate and operate the component effectively, promoting inclusivity and usability.

# 

Keyboard interactions

Action Ribbon should be fully operable via keyboard:

*   **Tab Key**: Moves focus to the Action Ribbon.
    
*   **Spacebar**: Activates the focused action within the ribbon.
    

  

## 

Tab index focus 

*   **tabindex="0"**: Assigned to interactive elements of the Action Ribbon to include them in the sequential keyboard navigation.
    
*   Provide clear visual indicators when elements are focused or selected.
    
*   Ensure that disabled actions are excluded from the tab order to prevent confusion during navigation.
    

![cv-action_ribbon_accessibility](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15942-21679.png?Expires=1768218278&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=gcecLf~OXG0vSbuhJYjJAlbG~Tza1Pvs1m1dxmKB32y5fpQCQJcwBawicjtyqPBVITj98l0jA3L4YHqHSTz7vQCiSn6ZhRvU0jkLjVAvEzpgTEtfWhMz~fkySqTlbGd14fztCrXC1tmk9XMWpYf0zKmAb4sG0YGOQkqs1NB2lfV-Lfdm-kTAtMpBiXiIeHlYWY9pnq6DNr7au3aGtk9woG1e4x8J48jze8e98Zrw-zr4rEm~lsrA8MpaEzoM9cz~pESbf8Z5oJKfV8u-mrNTOwavCfVmYOwpEwnpX1nSDXQfauL0BY-FvHqn5aeS69FpEli8gUA~nNg9XDv1kSsj9w__)

## 

Hit area state 

When focused, the Action Ribbon displays a clear visual indicator, making it easy for users to identify which part of the ribbon is active. This aids users who rely on visual cues to navigate.

# 

Additional resources

Explore other guidelines and tools to ensure components and patterns meet accessibility standards and provide inclusive user experiences.

[

See also

Material Angular



](https://material.angular.io/components/toolbar/overview#accessibility)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard interactions](#keyboard-interactions)
    *   [Tab index focus](#tab-index-focus) 
    *   [Hit area state](#hit-area-state) 
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In