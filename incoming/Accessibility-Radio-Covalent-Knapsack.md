# Radio / Accessibility

A radio button allows the user to select a single option from a set of mutually exclusive choices. It is typically used when only one option can be selected from a predefined set.

# 

Overview

Radio buttons enable mutually exclusive choices and must have clear labels and grouped accessibility support to ensure users can make informed decisions.

# 

Keyboard interactions

Radios should be fully operable via keyboard:

*   **Tab key**: Moves focus to the radio group.
    
*   **Spacebar**: Selects the currently focused radio option.
    
*   **Arrow keys**: Move focus between options and select one.
    

![cv-radio_accessibility1](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15344-41019.png?Expires=1768218624&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=M0gYXH59lx7f~0WEzhHzMOY3Wi46~WyLYpgvuP8kn0LHuxtgTOt3wu3TiNI~3aPav4boRBhLVlT7DXc~nstJ3rYfiW~xovkw3AoQdc81lAUxowWcb1OwvQKtZFk9k9ZQsAxyUPpMXyEnpqfwfv0eVxOLZVySP5lfliHfIuatTtGUl6JeafshgIQylBet~U1V19hYjRzg10x69g9PE-2cs~Oki9aZ6rWC0sBUaHnvlc1kzHlnklVGIIEd4FmlPGKO6Jp2EoxKgE7MIdaltTaqweFQTsMmn7eObRZKp8F7bx2eTTxn91-74S5HOUOCbF7qD44oCMlm00hCUzRJa8AWdw__)

## 

Tab index focus

*   Group the radio buttons logically with a single **tabindex="0"** for the group.
    
*   Focus states must indicate the selected button clearly.
    
*   Exclude disabled options from the tab order.
    

![cv-radio_accessibility2](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14727-7426.png?Expires=1768218624&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=JorRGj47unQrzzlOCzMkCd6~l9wUqEoyPu2Awh-49F7Fr8S9V2eJTs1F5eGAuyJgQ52t4F4Qy~vGi16fchVG4wqpSaX2mfrivf0QEM9xd-geXxpVHgSvfUN6eOInsi6ZCevkn6N81u3VhrweTFthLxW5X-EQgASpGm9D-dQQMXesHVrK0z~sJnQsEWSUdz3bHZlfdKxuPZqf3h1RVcjzpAVIfjq-JeeGrZEE2yHMUDhm5nI7~6UtDWsYpbUu8XQGc7Iuvp-l~JuA7Y3~vAsAo1ra9VUb~YS-NsSPGt57Bo5Yx~dj6fZqnnp~1g4wuNEw4Uz8HKqHTNifttAAY9AoyQ__)

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



](https://m2.material.io/components/radio-buttons/web#using-radio-buttons)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Overview](#overview)
*   [Keyboard interactions](#keyboard-interactions)
    *   [Tab index focus](#tab-index-focus)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In