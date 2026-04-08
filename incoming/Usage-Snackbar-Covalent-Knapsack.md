# Snackbar / Usage

Temporary notification displayed at the bottom of the screen.

![cv-snackbar_hero](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/16883-15652.png?Expires=1768218709&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=pf6cW-8axF8ojSf5uI2MbqVipQrG7Y3Zw0xzRLgsnPCEDV-7mqeFQK4BUD3H2GLF30mpPHbefEGcyUPTEi8-YP5gob96q-tx0-vGIzRTWtYH8BFQCqv8ni9UdJBdEcwYzWEij0xmSV52JgQ6YZBsVHbrdiMZLo-Fzt9jPUhP4Xcz2YsgdZbOlYBnXmQ3BgfIJBmW495Lsk9gftPLgaN~HX3SYNi1j-7KlgWp~3PFDH8jtXL89p5gXD3XdV3JrQPNwAZ4AUg6hDgCjA1tFb5j9gPLv0gCQMAou1zN9HZQsrW3YAxLgbjoWztNwDqlYhs5H-raBgw2V7JWTL9~31fCtQ__)

# 

When to use

For providing unobtrusive feedback to user actions. These are valuable as confirmations to provide reassurance when a request has been received, or when a longer-longer running process reaches a conclusion.

Need to display a long-term state or app-wide notice? Use an [Alert](/site/covalent/M2hm1RnCDV/pattern/alert) or [Empty state](/site/covalent/M2hm1RnCDV/pattern/empty-state) instead of a snackbar.

Variant

Purpose

Action not available

No further input needed

Action optional

Longer duration before auto-hide to allow user action

Action required

Keep visible until user acts or dismisses manually

## 

Action not available

Because these disappear automatically, do not add a dismiss or cancel action.

Auto-hides after 4 seconds.

![cv-snackbar_action--none](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/16885-14293.png?Expires=1768218709&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=XumfVGWVNTN9rDLhdCnXAI9CqrfyWN9z9V9IHWEZ34N1e5UpiNFPHskXGI03Pc6gVPs-15QSjAdgPAOPYYJ-nUl22YxfgGXHPE1sy7SQWyMNR6uP2fGu8T6cCMr0ziK~TAUco1fy7I1NopIuPJoppVkf74BSodgmtIMfcVCrSzASwhGoRPx7JLLzoQ8jlpE7InGwucAV0mjzXZIdAyY2UD3nxPDsaKlkSVXcN31CPsPU4WObFTwp-StVGYy3-2HNZcgBM8w42k39WMjjoE9qZoHbuezHaKK3NKhtWhFaiOWt2Y6j7B1JKgPBQLWVRlRVbwLPCrBDHA9GpW4Pw5Piow__)

## 

Action optional

Longer duration before auto-hide to allow user action.

Auto-hides after 10 seconds.

![cv-snackbar_action--optional](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/17140-46799.png?Expires=1768218709&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=I2VC4SFHTkqU-op01D-yXAB0RD7gwUm3EQtCsTKY7CXgaPkiNBr8U1YrE9YFAUPn~0cJ6DPypZwOI9fsH2BkUJuvAXxI5QtnpIWu5aoW5Ltpm86u0lWMaTS3ZGT4Tm2WGqcqnOAj~XlT15u3k5VgNKFoAsUSS3WNhdX~mUHAMLSxxGt1sc3VLZ3l3WY-J0QWujMrQxAaybgenVOqfp3GC5NLDwkzS5~aNrnxZXE29cLcICtlgillirrU5HG2NeQuR3-krYAVCxgpMY6qhuVVwVJZyOgg6Pp0T6gHkOicyCrjQwQyMdS2f1T-Wwne~fhv4JFsWN~v36Z3eZvw6zROgg__)

## 

Action required

Keep visible until user acts or dismisses manually.

Always includes a close icon. May also include an action button.

![cv-snackbar_action--required](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/16885-14203.png?Expires=1768218709&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=PMr8G5qu~bmWd2W4kLFxmBJNfkLlSM7w5uyp7MI9~dQFObczxGzAk~6iFbluWfKASlxpIQgTduNRrBUvK14W04bAVquHxGEvSueEKfeJYdvys-mWiLU4toMvJswRh3Y01KWPP3s4pLIsfM~dJYZMLDkVphDYf3ll~67DaB7scluO1GQ1wg2Y-Gh89W4RtCyPPYB7CB4oXkkTBu3tQyfxu8rxwgITkl5QKSHfn3EB9SqNmF-rlAisddY~v-KOTQx-rjIvfv2mTwl2zi-GeqZxTeU4K8TJOXGiP0KcPy41dORU615u1nTQKSclYedn5eqJwj~RAgQN7UCdxOZZQsZsig__)

# 

Recommendations

Recommended practices ensure clear guidance, usability, accessibility, appropriate sizing, and user support.

##### Do

*   **Do** use for non-interrupting feedback.
    

##### Don't

*   **Don't** use for long-term state or app-wide notices. Use an [Alert](/site/covalent/latest/pattern/alert) or [Empty state](/site/covalent/latest/pattern/empty-state) for that.
    
*   **Don't** overuse the manual dismissal type. For most cases, a self-hiding snackbar is preferable.
    

# 

Additional resources

Can't find what you're looking for? We provide full documentation transparency. Here are additional resources to provide further clarity 

[

Current design

Snackbar



](https://www.figma.com/design/KvXVAmYdCVAS7hzkOa73Em/Covalent-Principles?node-id=7979-30618)

[

Material Design

Snackbars



](https://m2.material.io/components/snackbars)

[

Angular Material

Snackbar



](https://material.angular.io/components/snack-bar/overview)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [When to use](#when-to-use)
*   [Recommendations](#recommendations)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In