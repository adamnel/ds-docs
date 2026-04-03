# Dialog / Style

A dialog is a modal window that overlays the current page to grab the user’s attention.

# 

Anatomy

![cv-dialog_anatomy](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15216-40066.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=HCh83nLC1eslra-phx-srFvRc3~5UEAdhGfaq2vojD93B-lRfyPyerVE0XxekpSBWUqA9hG~sCvEfHn7E5xw0vEmN4WlxfEWo6HjboxUrOHyvl9tFgYrqfFAfw4NOPclo5-CblBOPmTVX23qt~NeiR5JxLfnynXFPXdh0dCUngqRm7QxLIIfdjTIx~7KE3ZuoUzHm0bQQRsrewOol9RmLDR4v3xiqfZrAXCV~oD2WLI~SIjWQ2iGn6MDcOX41llMG--pWisaaD3pI8LBMPZraulzdAMNIiqIXInqyI8ubtdGrcO5eue5FZZign9d7fP6GF9PmK0c7CiznNtzA~eONQ__)

1.  Provides details about the request.
    
2.  Provides a brief description of the message or request.
    
3.  Contains the header, body, and buttons.
    
4.  Actions the user can take on the message or request.
    

# 

Typography

Use these text styles for dialog:

1.  body-1
    
2.  headline-6
    
3.  button
    

![cv-dialog_typography](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15942-21075.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=Smc-3HwMiTQ9FM3wsSQU6EQ3J1XAZTY~pKSl-R1yCTNNuImnoNDskSfhpy9KbA9rIbfXxn81-ncotubIzXi4C7kyXvXiu3mDOmJQtPceh4KF2qk6JbQQ7H1tBZSTkmr2V~THhYoJI~ZkEQw8HUkiPC2sjb-jL2JTzK3CxkgJKxgXf82Rphphr6HbZQ--fhB8LF~KTcVAR6S~ikWr-bD2FlZXW-eVzx4789U4lreSy2JDSMcqfPt84WbZ9fxH5GY6Vq7cZjOGxm-rIHQPruyOJmJ~Q~y~9K8tytfbWmg7zGqVG3pU0y0fpEWrArRp064Xt76bgp0lMxqZT7MFSlqJZA__)

# 

Content guidelines

Two scenarios require a modal dialog:

*   Confirming the user's action. Read on to learn how to avoid double negative actions. 
    
*   Communicating a high-severity [error](/site/covalent/latest/pages/error-messages).  
    

## 

Confirming the user's action

If the user initiates a destructive action, display a modal dialog to give the user a chance to review their work before proceeding with the action.

![cv-dialog_do--content_1](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15561-7357.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=PGwySRAUfzOc8yT~jZrO9DrPH-tgg7KfCFjoIL3Kd0Cegr2WtSk-MSGnPJzeqTE9Nfhv8lPTC14byHs0p8RU0ng0Su~EREBuuzwLq11rTd~AWOgsv6WecZiMrs-ifzRMHFlPIftu0Zgsre7OBOJBbc~mEsQjs-v1i9Q1DUOipLcY73ywe-KPSO2cVx3EbUaDdonFxumpXfF54x33DWVJv6QtmB64VByqkZFJTTOI0QMWIVXiZQ7xNg9bonRohIQfseFRamvG8uWi4MYoWtEYR59xFE8vuYy68IRFmdbuTsjC4JdBYmEAvnc6yErYzLOysBH4kSdUGsYbXzaq-ddHxA__)

##### Do

**Heading**

Repeat the user's request with a concise question and a neutral tone, for example, "Delete this file?" 

**Message**

Succinctly communicate additional information such as the result of the primary action.

**Actions**

If the primary action is a negative one such as "Delete," the secondary action must be semantically distinct from the primary action.

"Don't delete / Delete" are a good example of 2 semantically distinct actions. They remove any ambiguity for each of the actions in relation to the user's request.  

##### Don't

**Heading**

Don't say "Are you sure"? It can be perceived as condescending.

**Message**

Don't be wordy. Try keeping the message to one succinct sentence. 

**Actions**

Don't use "Yes" and "No."

A modal dialog is already interruptive to the user's workflow. Don't make them spend more time understanding what action "Yes" and "No" each represents.

If the user is not aware of an action that's been initiated, for example, they accidentally select the Back button on their browser while editing a form, display a modal dialog to communicate what happened and the actions they can take. 

![cv-dialog_do--content_2](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15561-7434.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=BPSbpgn07FG9twHffE6sJBUk6VEGPt4H~wJQjcvD1wSkt4Am-FUzt84OpMTnBON7yhMP1ovaYTZuCm9A8rcPbtxRp0Rf~ecY3afatnQ48XOSEHqdqOwm-LEO1LS6842H~apY6WJtTV53trBHwsS7wqUi4EfZkdezGGkRyaQT82-dEbbDyHl2FEt5j0TppIdsseE42iT-iRKzgkcboyLiOqhyQ4kuAQw3MrJcYz-pZ8nSZnx7s7g6G0nNMFKFz3RWRLzQ28rzN8wA7U-nqq08yH35KkgudjvkWyolNghcMiLCBb~5kY6t5BEZSWapHh9kI1PQ39YB9ZcpXficUaIMAA__)

##### Do

**Heading**

Succinctly communicate what happened.

**Message**

Remember you're having a conversation with a human. Lean into our empathetic and transparent voice when the user needs to decide what to do next. 

**Actions**

If the primary action is a negative one such as "Discard," the secondary action must be semantically distinct from the primary action. 

"Keep editing / Discard" are a good example of two semantically distinct actions. They give clear guidance for each of the actions in relation to the user's context. 

##### Don't

**Heading**

Don't assume they know what happened. Asking a question is more suitable if the user initiate the action themselves.  

**Message**

Don't say "Are you sure?" especially when they may not be aware of what happened.  

Don't repeat the heading. 

**Actions**

Don't use "Cancel."

Because "Cancel / Discard" are semantically similar, the user may interpret "Cancel" as "canceling the unsaved changes." This can create confusion. 

### 

Communicating a high-severity error

Not all errors call for displaying a modal dialog. When critical issues require the user’s immediate attention, use a modal dialog. For complete details on designing content for high-severity errors, see [Errors](/site/covalent/latest/pages/error-messages) in Content.

  

# 

Variants

Action buttons can be **horizontally** aligned or **vertically** stacked.

![cv-dialog_anatomy_variants](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15281-15389.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=2gYQY-1oRBtknMuGCM9WlAhvyrUAi8H2l5wDnQQQDi0KvHp0jM9uRVixolcXWUVNdVcM1qijEN9ooA8ANElmrLiogK1QFj7tfJMUF4hHNcMaedM8pWoiN04fdgb8fGZNSmztvVju69LZSMwUvKsTNvEz~OizriXBjYrv2YWDF6G~0PCih627PC3lxlc8QFII5AMfxWFsLVhyRtXB5w7lG9U2NFQEs0mp88sKQsjXI13-P1FPFRFeW7IUvKIQFOOMgeNAuaZ6dL7nZe1jJyhmvLuL4l6JGL~gG20TD2R2zDSywaWY6nBYDbkwQ3M1jMt-YrVGjDIQu7jKJHx5gbmy2g__)

![cv-dialog_anatomy](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15216-40066.png?Expires=1768218449&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=HCh83nLC1eslra-phx-srFvRc3~5UEAdhGfaq2vojD93B-lRfyPyerVE0XxekpSBWUqA9hG~sCvEfHn7E5xw0vEmN4WlxfEWo6HjboxUrOHyvl9tFgYrqfFAfw4NOPclo5-CblBOPmTVX23qt~NeiR5JxLfnynXFPXdh0dCUngqRm7QxLIIfdjTIx~7KE3ZuoUzHm0bQQRsrewOol9RmLDR4v3xiqfZrAXCV~oD2WLI~SIjWQ2iGn6MDcOX41llMG--pWisaaD3pI8LBMPZraulzdAMNIiqIXInqyI8ubtdGrcO5eue5FZZign9d7fP6GF9PmK0c7CiznNtzA~eONQ__)

**Anatomy**

**Color token**

1

on-surface-variant

2

on-surface

3

surface-container

4

primary

  

  

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Anatomy](#anatomy)
*   [Typography](#typography)
*   [Content guidelines](#content-guidelines)
    *   [Confirming the user's action](#confirming-the-users-action)
        *   [Communicating a high-severity error](#communicating-a-high-severity-error)
*   [Variants](#variants)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In