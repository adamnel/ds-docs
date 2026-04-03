# Errors / Dialog

Error patterns provide users with feedback when something goes wrong. They help users understand the issue, prevent frustration, and guide them toward resolution. Error patterns include inline message, alert, and dialog.

![errors_hero-dialog](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15084-6028.png?Expires=1768219436&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=dtRxnry~KBfigL1XjRRBDdUOhATPidBtgcOjO8E9WebeLB~LgSV9OWhAnFt4aPdhvqpa7UDtby3QqRVkLL8829FLA~0nKY9L-IrBKp3ma2dMggw35OntH1Pl2fV78j1hPzcoYApwgLiMDJnbYYUQ1-QuEjzEWEGobh3-5SylNRAC4w1wrpbsv3ZxEWXIz29wx4eJor0NqxmiNAZSUxEdGu9tlyD4JuCH5O1qtA~w2Jv5QUp-bPB6Y1nABPhqi3P5Ksv38pk8-29vKKLfq9bJuauKjQJnNnm2EFkR3mOwtZoVgP2kGxsCO9Vr0Asrk3vDOhXKLGFjxGVGODOlvmmoHQ__)

## 

Anatomy

1.  **Alert\[default\] error symbol:** State icon alert component positioned left of the error message and is vertically-aligned to the top of its container. Color is `cv-theme/negative`
    
2.  **Dialog component:**
    
    1.  Close button (optional)
        
    2.  Dialog body content
        
    3.  CTA(required) + secondary button(optional)
        

## 

Content guidelines

Dialog-style error patterns communicate critical issues that require the user’s immediate attention. Before they can move on, the user needs to spend a considerable amount of time or effort to resolve the error. In these high-severity situations, we find it necessary to catch the user’s attention, hence the need to display a modal dialog that interrupts the user workflows. 

**Accessibility**

Support Escape key dismissal, logical Tab order, and ARIA roles (`role="dialog"`)

**Supportive, neutral tone**

Focus on communicating how the user can fix the error. Avoid using emotionally charging words such as "fail," "oops," "sorry," and "please" in these already-tense situations. Learn more in [Content](/site/covalent/OWOrjRQqam/pages/error-messages).

**Elaborate and structured** 

Error messages often don’t provide enough right details to help the user get unstuck. We aim to be honest and easy to understand. Take advantage of the space in this pattern to identify the most helpful information and communicate it clearly and simply.

Learn how to write for dialog-style errors:

![content_errors_status-dialog_do](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14922-6178.png?Expires=1768219436&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=WFOqr3f6z7AjOHUoTYatppVSX3m3KbLHOdJttqt8ELi2gNvuiYmvTG25sMj8Iz4PejLvQJ6OX4BNh-OqhVELXmqVJpUAGXJb8ZVCnndnUBykeoKhn~qsMEv5dKDRq-3wQeJ~COGsmv1CXgtPc0ltDWHCbb0Ph27hWXjMnxBnyvKdbA7uTenqcprFZzZQVrv73kWGuTLP8SMLCG2pji5r~iszigZXyq7GWrIByqHUqA1uFcUWiB2bchz7FHu~XVEuyMzBx24SyN7Fq8ld49bkDV6vOofKEehkjeIQ92MaVGP7eUN2LpVPn~oRvOlVOChI0s975~vo6NpYqVU7Ar1gIw__)

![content_errors_status-dialog_don't](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14922-6323.png?Expires=1768219436&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=Ngxi4syP4XxRhkzLuZrkPJAh4YdflaNkrgJEwpkovpUq~pfn8LEnOu0Jp-KoC8AV097PwsT1EUDSbyFRQAlCnFiIB~aBFhmjPCdhwBcW4DeRsTj3mhK-R-EvYtz~-jFsYl~HmwEhb-dn5LXqaIfgf-RTNHUHyqd17F1aWShWvl6OelaQ4vb8dftcwJSMzAd~aohiKhhvoJ4ItY227BHDJMDrftDQcHZWjp2P~KkP5TNp3et4wL1XwofuqLj0x8pmI9lRm2gN7ZzdSsNU06R0zsiesw~-MYHYA7OtP3PprkUFP7xp1OMgBSJkg0ymiVeMGUD9RfvKtMFXKW3PlidwkQ__)

##### Do

1.  Structure details of the message by: 
    
    *   Primary information:
        
        *   **What happened** (header)
            
        *   **Underlying issue** if known and helpful to include (first paragraph)
            
        *   **How to fix it** (second paragraph)
            
    *   Secondary information: Work with your engineering partner to provide **error details** that users can provide when they contact Support.
        
2.  Speak of the solution clearly and simply in the "how to fix" portion of the message.
    
3.  Provide a simple and actionable CTA in response to the recommended fix. 
    

##### Don't

Don't say:

*   "Unable." Instead use "Couldn't." Which is inclusive without the "able-" language and accurate as it means someone tried doing something but couldn't. 
    
*   "There's a problem." Sweat the details to get the most helpful information.
    
*   "Done." Instead use a verb-led phrase to provide an actionable path forward. 
    

## 

Recommendations

Recommended practices ensure clear guidance, usability, accessibility, appropriate sizing, and user support.

##### Do

*   Use modals only when the user's greatly inconvenienced in a high-severity situation.
    
*   Make modals accessible for keyboard and screen reader users.
    
*   Ensure the modal is centered, with focus trapped within it until resolved.
    

* * *

  

## 

Related components

[Button](/site/covalent/nxPDJsClXo/pattern/button)

Raised, outline, and text buttons for user actions in dialogs.  
Modal errors guide users through appropriate steps with clear CTAs.

_Dialog_

Focused container used to present critical information or errors.  
Modal errors are central to the dialog, providing clear instructions for resolution

_Full-Screen Dialog_

A large dialog that spans the entire screen, used for comprehensive issues. Modal errors are prominently displayed to ensure visibility and focus.

_Icon_

Symbols within the dialog to signal the type of error.  
Modal errors use icons to visually convey urgency or severity.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Anatomy](#anatomy)
*   [Content guidelines](#content-guidelines)
*   [Recommendations](#recommendations)
*   [Related components](#related-components)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In