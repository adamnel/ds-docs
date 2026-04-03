# Covalent / Accessibility

Accessibility at Teradata means creating systems that adapt to diverse needs while enhancing usability for everyone. By prioritizing foundational accessibility in every component, we ensure our solutions scale effectively and inclusively, fostering seamless, intuitive user experiences.

![Accessibility hero image](https://knapsack.imgix.net/site/covalent/foundationsaccessibilityhero--TT2cKd6LV.png "Accessibility hero image")

## 

Principles

At Teradata, our accessibility principles guide the creation of inclusive, high-quality digital experiences. We adhere to [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/#wcag-2-layers-of-guidance) standards to ensure compliance and usability. These principles emphasize:

*   Embedding accessibility into the product lifecycle from design to deployment.
    
*   Focusing on semantic structure, visual clarity, and assistive technology compatibility.
    
*   Regularly auditing and refining for continuous improvement.
    

## 

Accessibility practices

### 

Color and Contrast

Prioritizing color contrast in all designs ensures readability for users with visual impairments, enabling clarity and usability for all.

**To make visual content accessible:**

*   All text meets or exceeds a contrast ratio of 4.5:1. See [Color Standards](/site/covalent/latest/pages/color)
    
*   Color is never used as the sole method of conveying information.
    
*   High-contrast modes are tested and supported for users with low vision or color blindness.
    
*   Tools like Figma contrast plugins and browser-based analyzers are integrated into our workflows to validate compliance.
    

  

**Implementation Tips:**

*   Use contrast analyzers to test and adjust early in your design process, ensuring compliance without retroactive fixes. Try tools like the [Color contrast analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)
    
*   Include high-contrast themes as a default option for better user adaptability.
    
*   Check contrast ratios not just for text but also for icons and interactive elements to ensure universal clarity.
    
*   Review [additional documentation for color and contrast](https://m2.material.io/design/usability/accessibility.html#color-and-contrast) on Material 2
    

![foundations_accessibility_contrast-ratio](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15677-8146.png?Expires=1768218173&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=II0l0EVzKkvqTEFyA1TEagP4zzAz96KJJBNtf5yDTQ1hQZUkyuBAPTlU~plwy~o8Ha7lo4ZeKcQMBVQwU0y8dhsbjH8OBFGj6QPGrdbJbARxTOqQNJSaheUgkObk2XKUALiUYIibfWuz6usIaAKhxlKS2RCXpaz6i-VnABKpH58HW7e2xcgnDrwa7pkJiZdUY1Fum9oKchh4sw1o~CnUN7IrSTpjzeptyn2NeFWMBa8b74ZBlKh6vOCHWrL8S8YfP7md3hgYyWKxg80AVM0wl-mTQIjvv7amszUFo7fSlZC03Os~Mb0y2dCkSuATfWCNFx~Dx0jyZKDGYoFg75YCgQ__)

### 

Screen reader accessibility

Seamless interaction for screen reader users ensures inclusive experiences. We prioritize logical content structure and compatibility with assistive tools.

**We ensure:**

*   Proper semantic HTML is used, making content logical and navigable.
    
*   ARIA (Accessible Rich Internet Applications) roles and properties are implemented to provide additional context when necessary.
    
*   Clear, concise, and descriptive alt text for images and multimedia elements.
    
*   Logical focus order and meaningful headings to guide navigation effectively.
    

  

**Implementation tips:**

*   Test prototypes with screen readers like NVDA or VoiceOver to identify areas needing adjustment. Learn more about [NVDA](https://www.nvaccess.org/download/)
    
*   For macOS users, enable VoiceOver and practice navigation to ensure flow is logical. Get started with [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac)
    
*   For Windows users, use Narrator to test basic accessibility and compatibility. Learn more about [Narrator](https://support.microsoft.com/en-us/windows/hear-text-read-aloud-with-narrator-c9c2037b-5f64-4b94-b5e6-7a0c91bcee43)
    
*   Avoid dynamic content updates without providing clear screen reader notifications.
    
*   Use "skip to content" links at the beginning of pages to improve navigation efficiency for assistive technology users.
    
*   Review [assisted technology documentation](https://m2.material.io/design/usability/accessibility.html#assistive-technology) in Material 2 
    

![foundations_accessibility_screenreader](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/15684-8270.png?Expires=1768218173&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=bqrs6HQ4Oxo7bkaPxIIVcL-r9ek59m8JpBxPJab2sBcXOeACczQ88qVpIpi~UuQJG9Eq44RqVLuK2IAksvgYzG-kPDoeqLteij6wP33OFHuh~f-uh~8akeeMcBzPkQBuVBI8vVzqtk2L6FN10lKUUPHVs-Yu8cem0~k9vJhJX6r7aMYkwPUJtmqAFn6BDQ01u-t~kIz1PfZ~e6onOCK7Kr5ZzKVRE-bq73RsQ7EU7VM-v454FYQMoDNqjzSeKqvZj7Y39-eH7tGTIiDHK~S9j9RwyKmDxK7TAMfOxKy8zhxuoqspOlNHljvMG74TbAXWaCXoY04vWP1v4~hFpcXUPg__)

### 

Inclusive content

Clear and inclusive content reduces barriers, fostering confidence and ease of use for all users.

**Content clarity is vital:**

*   Instructions avoid directional language (e.g., “above” or “below”) and instead focus on actionable steps. See Content Guidelines
    
*   Form inputs include clear labels and assistive error messages.
    
*   Language is simple, straightforward, and free of jargon.
    

  

**Implementation tips:**

*   A helpful tool for this is the Hemingway Editor. Check it out [Hemingway Editor](http://www.hemingwayapp.com/)
    
*   Ensure all abbreviations and acronyms are expanded upon their first use.
    
*   Provide contextual help directly adjacent to input fields for greater clarity.
    

![content_voice-and-tone_thumbnail](https://design-src.knapsack.cloud/figma/covalent/KvXVAmYdCVAS7hzkOa73Em/2261921067357318529/images/13702-1105.png?Expires=1768218173&Key-Pair-Id=K3CKBA7ZQV44SC&Signature=xffI2dNFOZJf8ZiTBqqaPhvdtemX9QPQxYH2rwaTApXm~7ztYI03VTSDOSqhg5ZnQ~9CvB-sLndKYwVXtHooDraUZN~bVwSku76r~6H7jmPd6PP-wtmZgq0ZXlDxLj0QR15Z9ikUM8maHXtnLOeeUntDKblGyEpIhehuKy2khjQq1cY-~q-m~07XB7Dbz-ledq3j-tixvmZwkQXMc0bZnfpKWfN0~0J2XOSwTEh3h51mpAncLrI7sxAEAd49pdyKc2hybZ7UnVETDSftP7abA-x2ROSjxyneayktifp7QM4nhShVnmEp2J-5biaG3~YAgTiZcJ9EU3VAmmVLkmrAQg__)

### 

Keyboard navigation

Keyboard accessibility ensures users with mobility impairments can navigate effectively, supporting universal usability.

**We follow best practices:**

*   Interactive elements such as buttons, links, and forms are easily accessible using standard key commands.
    
*   Focus indicators are highly visible and consistent.
    
*   Logical tabbing order prevents disorientation and maintains task flow.
    
*   Avoidance of keyboard traps ensures users can exit modal windows or dropdowns effortlessly.
    

  

**Helpful tips:**

*   Conduct keyboard-only usability tests to verify functionality across all interactive components. Refer to [Keyboard accessibility guidelines](https://webaim.org/techniques/keyboard/)
    
*   Ensure interactive elements, such as carousels, allow full keyboard operability including start, stop, and navigation controls.
    
*   Provide visible focus states that adapt to high-contrast themes.
    

![](https://knapsack.imgix.net/site/covalent/foundationsaccessibilitykeyboard--jiC1Kxo5MW.png)

  

### 

Responsive and scalable text

Scalable text enhances accessibility for users with visual challenges, ensuring readability across devices and preferences.

**To ensure accessibility:**

*   Text remains legible and functional when browser font size is increased by up to 200%.
    
*   Scalable typography is implemented to ensure a consistent experience across devices and resolutions. See Typography Standards
    
*   Flexible layouts ensure content remains clear and uncluttered at all zoom levels.
    

  

**Helpful tips:**

*   Test text scalability using browser zoom features to simulate real user scenarios. Check out the [WAVE accessibility tool](https://wave.webaim.org/)**.**
    
*   Use relative units like em or rem for font sizes to ensure scalability in responsive designs.
    
*   Pair scalable typography with sufficient line height and spacing for better legibility.
    

![](https://knapsack.imgix.net/site/covalent/foundationsaccessibilityresponsiveness--RaD6KTDdXg.png)

  

## 

Testing and iteration

Continuous feedback and testing evolve our accessibility measures to meet diverse needs and foster inclusive design.

**We actively**

*   Conduct regular audits using tools such as WAVE, Axe, and Lighthouse.
    
*   Involve users with diverse abilities in usability testing to gather actionable insights.
    
*   Train teams on the latest accessibility standards and best practices.
    
*   Collaborate with third-party providers to meet accessibility requirements.
    

  

**Helpful tip**

Integrate accessibility checks into your design and development pipelines to identify issues early. Explore [Accessibility insights](https://accessibilityinsights.io/)

* * *

# 

Additional resources

Can't find what you're looking for? We provide full documentation transparency. Here are additional resources to provide further clarity.

[

See Also

Teradata web accessibility guidelines



](https://teradata.sharepoint.com/:w:/r/teams/Experience1/_layouts/15/Doc.aspx?sourcedoc=%7BFD1EDB66-B95E-454F-9141-7416EF5BEBC0%7D&file=Web%20Accessibility%20Guidelines.docx&action=default&mobileredirect=true&DefaultItemOpen=1%3Fweb%3D1)

[

See also

Teradata accessibility best practices and resources



](https://teradata.sharepoint.com/:w:/r/teams/Experience1/_layouts/15/Doc.aspx?sourcedoc=%7B04BF4D16-C165-4ABD-92CD-ADEEA95A235D%7D&file=Teradata%20Accessibility%20Best%20Practices%20and%20Considerations.docx&action=default&mobileredirect=true&DefaultItemOpen=1%3Fweb%3D1)

[

See also

Material accessibility



](https://m2.material.io/design/usability/accessibility.html#understanding-accessibility)

[

See also

Material text legibility standards



](https://m2.material.io/design/color/text-legibility.html)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Principles](#principles)
*   [Accessibility practices](#accessibility-practices)
*   [Testing and iteration](#testing-and-iteration)
*   [Additional resources](#additional-resources)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In