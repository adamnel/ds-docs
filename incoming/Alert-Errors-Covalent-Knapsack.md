# Errors / Alert

Error patterns provide users with feedback when something goes wrong. They help users understand the issue, prevent frustration, and guide them toward resolution. Error patterns include inline message, alert, and dialog.

![errors_hero-alert](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15086-6559.png?Expires=1768219428&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=iEEHgeHvAFis9w5PNPpLdD2Nerm7ggG3h8pQTOSIst-JOIaqVf2WovpTSJekFfCyO5pebhR6-cNK~4LYmROGP1q41bYUCI2fK7yAwXy6GVkNTc9r-9CchCM5UsTdaqPQx3~5wzuK0nDyMYh9MrLqSQZADZun59tfo2T5iM1IhTVKkUdH~qzmIo2JyBt0bekrl62emi6q20ohWjHz5yIbLRpqT-COJ-HdjRSHlduze3GncoIIF~B0m3FUbjzgeNQ~rMZiVuvS5xVhj--7P4VyHIWeKVSCbo~DnfETN-W0tr2Uukcm5MRpvFKS8Av5y-qVMZzXPpbafcP5M61G9k17oA__)

## 

**Anatomy**

1.  **Alert\[default\] error symbol:** State icon alert component positioned left of the error message and is vertically-aligned to the top of its container. Color is `cv-theme/on-negative`
    
2.  **Alert component:**
    
    1.  Error message
        
    2.  Secondary CTA (optional)
        
    3.  Close button (optional)
        
3.  **Alert\[inline\] error symbol:** State icon alert component color `cv-theme/on-negative-container`
    

## 

Content guidelines

Alert-style error patterns communicate typically system-wide issues such as network outage or permission denials. The user may need to spend some amount of time or effort to fix an error.

**Accessibility**

Use ARIA attributes like `aria-live="assertive"` to announce critical errors.

**Supportive, neutral tone**

Focus on communicating how the user can fix the error. Avoid using emotionally charging words such as "fail," "oops," "sorry," and "please" in these already-tense situations. Learn more in [Content](/site/covalent/latest/pages/error-messages).

**Brevity**

An alert error is designed to display across a page or a container such as cards and dialogs. Use the header and supporting text to communicate briefly and clearly what happened and how to fix it.   

Learn how to write for brevity in alert-style errors:

![content_errors_alert_do](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14995-6253.png?Expires=1768219428&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=nhCCjDA~rg~GTdfh7sZRwog8Ec6na-ykos-USvR39lIHDjv1SmDKaCiZ1KiP6BFh8Y9vaJ4QHye4kIETrgTp5R96P~zM60Cj9rrYymbL47AiPn-8BB-MtHjASv1fdIa2jwn1u0ITP~ItTcvisNa~CqXWie~zpEgbxLND1Re16h8UDl8cJCOJH41L-Ox-XHgyzmmpXZhrK2UBRW~XAcdTZ-235~eqanHt5URDSOje~ZsdAnj6En9Yg7aKOBjaPJuGzx93QaStjumXvDwR2BWw55t6qF6V8Ier2RYb2ifrlUPiz3B7Gal6277SMg1XmjjJ1QpzRXZSW~LSy6AlpnIMXw__)

![content_errors_alert_don't](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/14958-5931.png?Expires=1768219428&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=m-GaEr9qO8elb932Me1LPxA6NLHpYQyoZIq~VG7iTqKr2A1CMTrpdKTPfuf~U2q-DD-T65McEbU3U5EMGa02GH3nBxE6IzJgjN2jPAA6XhNhYsZslSw92l19dPW3ZbUpOYAThuAyYkU90Hb-cM56q2fNkvLi1W0W3ki~EvoduvG0hhMx8UThvZ8KUcdHhJVDGAUZtT1vsrZFFQhMtZ6vNns5kgjushAVqdV5ouF7BttzxHmfdUKfCrAEyefzKxyWGqRRPkrn8bht4Z44rZ9Gdp7KW64rM9DISkkm-fPLnrsGm-LkdwDv3TKeyfzAmElD7Kji83n~abuAExVyQAxMKA__)

##### Do

Consider communicating **what happened** and **how to fix it** in the header. It allows you to include the most important information on the top and to cover more details in the supporting text if needed. 

##### Don't

Don't be wordy. For example, use a link and succinct text to keep the entire message to 2 lines (including the header). 

See more error message examples in [Content](/site/covalent/latest/pages/error-messages). 

## 

Recommendations

Recommended practices ensure clear guidance, usability, accessibility, appropriate sizing, and user support.

##### Do

*   Avoid overusing page banners to prevent user desensitization.
    
*   Ensure banners are dismissible if the error doesn’t require immediate action.
    
*   Use animations or transitions sparingly to draw attention without being intrusive.
    

## 

Related components

[Alert(Banner)](/site/covalent/latest/pattern/alert)

Reusable component for displaying messages across the top of a page. Page banner errors are presented with bold text and red accents for visibility.

[Button](/site/covalent/latest/pattern/button)

Interactive elements for resolving or dismissing the banner.  
Page banner errors guide users on actions like retrying or closing the message.

_Icon_

Visual symbols used to indicate the nature of the message (example: warning). Page banner errors leverage icons to reinforce the error's importance.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Anatomy](#anatomy)
*   [Content guidelines](#content-guidelines)
*   [Recommendations](#recommendations)
*   [Related components](#related-components)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In