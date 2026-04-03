# Radio icon / Accessibility

Radio button styled with an icon as its visual representation.

# 

Overview

Radio buttons enable mutually exclusive choices and must have clear labels and grouped accessibility support to ensure users can make informed decisions.

# 

Keyboard interactions

Radios should be fully operable via keyboard:

*   **Tab key**: Moves focus to the radio icon group.
    
*   **Spacebar**: Selects the currently focused radio icon.
    
*   **Arrow keys**: Move focus between options and select one.
    

![cv-radio-icon_accessibility1](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/19481-34803.png?Expires=1768218662&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=H6nKkc34GcNBGyh~dz4~ym-XYPSuA0Mr8fr6Ssb1aKGIUurdbLA1JB-1IxOeMye92rNtVEt3c1lxHKFlgM-FhxazcsxFu8Qum~uoDeIFIslQJksYArgF2CzxJDcF2Orvz4bvE84lh127B7zWv5PfqStUBfF3c902X539BFI3PKN4MmcLiPUFl9eztBx1QGjeS8fBSfvAC8mcfM46IrQiYHz~x68YqnYKfTwelDz1N9mkHj79JV-CCJ5Qo30s9pAhBbIco1SFoAFCnHFPtqxeNkpeFXMt35QvPmTSdZyI8gqRbAfYA~0GjVf6Tf1tX5Aph53tJ0uA8V2SOZ80tTgXMw__)

## 

Tab index focus

*   Group the radio icons logically with a single **tabindex="0"** for the group.
    
*   Focus states must indicate the selected item clearly.
    
*   Exclude disabled options from the tab order.
    

![cv-radio-icon_accessibility2](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/19481-35177.png?Expires=1768218662&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=qoSz-IyPdeKYyVdm78RCSrMbFHCNLQBfxZ1TzDxMnQ9OLky20zT316tEVd7NYRHphGEMn1jVdvaQj6grhnLs35qcyjn2BTsdkgr4rgJLk14-6yVv96lewo8fJoO65lAGnW9ohRnZ5CPidX8hSkRkSrtxT~UpEk2uJFRZTK~Ub0apVzsWllVsuhK7cWL-sN-0OOAeKatsDyK9ZAh4oX~11fBj1TVOzFNHoaQQ-WjLt3TMzxF~MUxEV2B6HTKL0yB1dDVP5gCZN-vsvoIDUjK-4wnAOXDNdjqa9hIK2VRYiC~~T0RVZnLclhKSBsSD5jI3JrS7KuFI97l1IHwnG9WNig__)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard interactions](#keyboard-interactions)
    *   [Tab index focus](#tab-index-focus)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In