# Covalent / Notebook content guidelines

These guidelines empower notebook authors to deliver clear, consistent, and user-focused content in Teradata notebooks. By following these principles, writers create a seamless experience that guides users efficiently through tasks, ensuring every notebook is easy to navigate, understand, and apply.

## 

**Principles for writing notebooks**

### 

Voice and tone

The notebook voice reflects Teradata’s role as a trusted guide: confident, professional, and focused on user success. Notebook writers should help users accomplish their goals efficiently with clear direction and minimal friction.

*   Be concise: eliminate filler and redundancies
    
*   Use **active voice** and **imperative verbs** ("Run," "Connect," "Select")
    
*   Do not use rhetorical phrasing ("Let's try...," "You might wonder...")
    
*   Use sentence case and parallel structure for readability
    
*   Reserve emphasis (bold, italics notes) for instructional value
    

See [voice and tone](/site/covalent/latest/pages/voice-and-tone).

* * *

### 

Markdown first philosophy

**Use Markdown as the default and primary formatting language for all notebook content.** Markdown ensures compatibility with Teradata’s native notebook features and with external tools where users may export and reuse notebooks (for example, JupyterLab or VS Code).

Markdown supports:

*   Automatic Table of Contents (TOC) rendering in the sidebar
    
*   Intra-notebook linking between headers and sections
    
*   Consistent styling and accessibility across platforms
    

Using inline HTML breaks these features. For example:

*   <h2> headers won’t register in the TOC or link targets
    
*   <ol> lists won’t generate proper anchor links
    
*   Custom HTML blocks may render inconsistently or not at all in other environments
    

## 

**Main title and header**

### 

When to use

Use the main title to clearly state the notebook’s primary goal or task. The title should help users immediately understand what they will accomplish, reflecting an action-oriented, user-first approach. Every notebook must include one H1 (main title) in sentence case, focused on the job to be done. Titles are **required** on **all** notebooks.

### 

How to create (Markdown)

Use Markdown `#` syntax for the main title.

`# [ Title here ]` 

### 

  

##### Do

`# Classify resumes using Vantage in-DB functions`

`# Analyze customer complaints with Vantage and Azure OpenAI`

`# Build text-to-SQL agents with LangChain`

*   Use sentence case (capitalize only the first word and proper nouns)
    
*   Use active voice
    
*   Be direct and instructional by clearly stating what the notebook helps the user accomplish
    
*   Keep titles concise and specific
    

##### Don't

`# Building A Recommendation Engine`

`<h1> Getting Started With Data Warehousing </h1>`

`<h1> Time Series Forecasting With Python </h1>`

`# Fraud Detection With AI`

*   Use noun-based titles that don't guide action
    
*   Use inconsistent or title case capitalization
    
*   Use rhetorical or passive phrasing
    
*   Use HTML headers
    

## 

**Section headers**

### 

When to use

Use headers to define notebook sections and create a logical reading path. Headers structure the content and enable navigation through intra-notebook links. _Every_ notebook must include at least one H1 (main title) and H2 for major sections.

### 

How to create (Markdown)

Use Markdown `#`, `##`, and `###` syntax. Each header automatically becomes a link target (e.g., `#connect-to-your-data`).

### 

  

##### Do

`# Train your model on sample data`

*   Action-oriented titles
    
*   Sentence case
    

##### Don't

`<h1> Model Training Section </h1>`

*   Noun-based titles that don't guide action
    
*   Inconsistent capitalization
    
*   Do not use HTML headers
    

## 

**Introduction section**

### 

When to use

Use the introduction section to orient users to the notebook’s **purpose, goals, and expected outcomes**. Include it at the top of every notebook, before any setup or code. This section is **required** in all notebooks.

### 

How to create (Markdown)

`   ## Introduction  Estimated Runtime: [Estimated runtime in minutes]   [Summary of the notebook purpose and the expected outcome]   `

  

##### Do

`## Introduction`

`Last Edited: November 2025` 

`Estimated Runtime: 30 minutes` 

`This notebook guides you through connecting to Teradata Vantage, loading data, and training a basic machine learning model.` 

`You’ll learn how to configure your environment, run model training, and interpret results.`

*   Clear purpose and scope
    

##### Don't

`## Introduction`

`Edited on: September 2025`

`This notebook covers Vantage modeling stuff and other topics.`

*   Noun-based titles that don't guide action
    
*   Inconsistent capitalization
    
*   Do not use HTML headers
    

## 

**Prerequisite section**

### 

When to use

Use this section to outline what users need before running the notebook, such as software, libraries, credentials, or background knowledge. Include it as a subsection within the introduction. This section is required for **all notebooks** that depend on external tools or data sources.

### 

How to create (Markdown)

`   ## Prerequisites - **Software**: [List required software] - **Libraries**: [List required libraries] - **Access**: [List required permissions] - **Knowledge**: [List requisite knowledge ex. Python, SQL]   `

  

##### Do

`## Prerequisites`

`- **Software**: Teradata Vantage`

`- **Libraries**: pandas, teradataml`

`- **Access**: Database login credentials`

`- **Knowledge**: Familiarity with data analysis`

*   Clear categories and consistent formatting
    
*   Use bold category labels for ease of use and accessibility
    
*   Keep text minimal and practical
    

##### Don't

See the example above.

See the diagram in the section above.

*   Informal or vague instructions
    
*   Missing structure or emphasis, making it difficult to scan for key requirements
    

## 

**Table of contents**

### 

When to use

Include a table of contents as a subsection within the introduction, immediately after prerequisites. The table of contents helps users navigate the notebook efficiently by providing quick links to each major section. This component is required in all notebooks to support a streamlined user experience.

### 

How to create (Markdown)

Use Markdown lists with link syntax that references section headers:

`   ## Table of Contents  1. [Introduction](#introduction) 2. [Set up your environment](#set-up-your-environment) 3. [Connect to data](#connect-to-data) 4. [Train your model](#train-your-model) 5. [Visualize results](#visualize-results)   `

  

  

##### Do

See preceding example.

*   Mirror section titles exactly
    
*   Use consistent numbering
    
*   Ensure links are valid and functional
    

##### Don't

*   Noun-based titles that don't guide action
    
*   Inconsistent capitalization
    
*   Do not use HTML headers
    

## 

**Environment setup and data connection section**

### 

When to use

Include this section immediately after the **introduction** in any notebook that runs code or connects to external systems. Use it to guide users through:

*   Configuring the environment
    
*   Installing required dependencies
    
*   Verifying versions
    
*   Establishing a connection to data sources
    

### 

How to create (Markdown)

This section will often require several cells. Use Markdown numbered lists in combination with runnable code cells. **The code included below is for illustrative purposes, your specific instantiation will differ.**

Set up your environment:

`## Set up your environment   1. **Install required libraries**      ```python    # Example: Install Teradata and common analytics libraries    !pip install teradataml pandas matplotlib`

`   2. **Import libraries**   `

`   # Example: Import core packages import pandas as pd from teradataml import DataFrame, create_context, get_context   `

`   3. Verify environment version   `

`   # Example: Check Python version import sys print(sys.version)   `

  

Connect to your data:

`## Connect to your data`

`   1. Create a connection context   `

`   # Example: Connect to Teradata Vantage create_context(host="your-host", username="your-username", password="your-password")   `

`2. Validate the connection`

`   # Confirm active context# query to verify access df = DataFrame("DBC.DBCInfo") print(df.head()) context = get_context() print("Connection active:", context.is_connected())   `

##### Do

See preceding example.

*   Use Markdown
    
*   Explanatory markdown cells must precede runnable code cells 
    

##### Don't

*   Use HTML headers and lists instead of Markdown
    
*   Inconsistent capitalization
    
*   Do not use HTML headers
    

## 

**Code Cells**

### 

When to use

There are two main ways to display code in notebooks:

1.  **Runnable code cells**
    
    1.  Use when a user needs to **run code** as part of the workflow. These cells run in the notebook environment
        
2.  **Fenced code blocks**
    
    1.  Use when showing examples or syntax references that are _not_ meant to be run. Ideal for documentation, command-line instructions, or static code snippets
        

### 

How to create (Markdown)

**Runnable code cells**

``   ## Connect to Teradata Vantage Use `create_context()` to establish a connection to your Vantage environment.   ``

`   # Import required libraries import numpy as np import pandas as pd import zipfile from teradataml import *   `

  

**Fenced code blocks**

`   This is an illustrative example of how to format your Teradata connection string.  ``` teradata://username:password@hostname:port/database ```   `

  

##### Do

*   Precede code cells with a Markdown explanation of the purpose of the code
    
*   Use inline comments in runnable code cells for clarity
    
*   Break large scripts into smaller, modular cells for readability and troubleshooting.
    

##### Don't

*   Skip Markdown context before code
    
*   Leave out comments for complex steps
    

##### Caution

If you are using `try/except` blocks or other error-handling patterns in your notebook, see [**Errors**](/site/covalent/latest/pattern/errors) for guidance.

## 

**Changes**

### 

When to use

Add a “Changes” alert whenever a notebook has been updated after its initial release. This helps users quickly identify what’s new and why.

### 

How to create (Markdown)

Use a Markdown alert block (or blockquote) at the top of the notebook, or if it was a localized change, immediately before the section that was updated. Keep it short, clear, and follow [voice and tone guidelines](/site/covalent/latest/pages/voice-and-tone).

`   > **⚠️ Changes** > - **Date:** [Date] > - **Summary:** [Summary] > - **Reason:** [Reason]   `

  

## 

**Images**

### 

When to use

Include images in notebooks to enhance clarity, illustrate complex concepts, or provide visual references that support the workflow. Use them when a graphic, diagram, screenshot will help users better understand instructions, processes, or outputs that would be difficult to convey through text alone.

Avoid using images and media where they do not add meaningful value, are redundant with existing textual explanations, or could distract from the core content. Ensure all visuals are relevant, appropriately captioned, and comply with copyright policies.

### 

How to create (Markdown)

`   [Alt text](URL_or_path_to_image "Optional Title")   `

*   `Alt text`: A short description of the image for accessibility. Writers are **required** to include alt-text descriptions for accessibility reasons.
    
*   `URL_or_path_to_image`:  The web address or file path to the image
    
*   `Optional Title:` (Optional) Text shown when hovering over the image
    

##### Do

`![Teradata Logo](teradata-logo.svg "Teradata Logo")`

*   Use .svg format whenever possible, especially for images containing text, diagrams, or logos (SVG preserves clarity and scales without losing quality)
    
*   Provide _descriptive_ alt text
    
*   Keep file names clear and consistent
    

##### Don't

`<img src=“img29381.png”>`

*   Skip alt-text or use generic descriptions like "graph" or "image
    
*   Embed overly small or large files
    
*   Include images with distorted text 
    

## 

**Alerts**

### 

When to use

Use alerts to highlight important guidance, warnings, or exceptions that users should not overlook. Place them in line with instructional content, especially before critical steps or common failure points. This section is required whenever a notebook includes non-obvious risks or special instructions

### 

How to create (Markdown)

Use Markdown blockquotes (`>` )to format alerts. Keep them short and direct. Begin with a keyword like **Note, Warning,** or **Tip** to signal the type of message

`   > **Note:** This notebook assumes you’ve already configured your Vantage environment. > **Warning:** Running this cell will overwrite your existing dataset. > **Tip:** If your notebook uses large datasets or multiple connections, consider adding a quick check for available memory prior to loading data. This helps prevent kernel crashes.   `

  

##### Do

*   See preceding example.
    
*   Begin with a clear alert type (Note, Warning, Tip)
    
*   Use Markdown blockquote syntax
    

##### Don't

*   Use html or in-line css styling instead of Markdown
    
*   Exclude a clear alert type
    
*   Use informal and vague phrasing 
    

## 

**Equations**

### 

When to use

Include equations in your notebook when you need to explain a product feature, algorithm, or data science concept that relies on mathematical notation. Use equations to clarify complex ideas, demonstrate calculations, or provide formal definitions that directly support the user’s understanding and workflow.

### 

How to create (Markdown)

Use LaTeX syntax within Markdown cells to display equations. For inline equations, wrap your LaTeX code in single dollar signs: `$ ... $` . For block equations, wrap your LaTeX code in double dollar signs on seperate lines: `$$ ... $$` . Always provide a 

Inline equation:

`   The mean is calculated as $ \mu = \frac{1}{n} \sum_{i=1}^n x_i $.   `

  

Block equation:

`   Formula to calculate the mean:  $$ \mu = \frac{1}{n} \sum_{i=1}^n x_i $$   `

  

##### Do

*   Provide a brief explanation before the equation to clarify its purpose
    
*   Ensure equations are readable and relevant to the notebook's content
    

##### Don't

*   Do not use screenshots or images of equations
    
*   Do not place equations in code cells unless they are part of code output 
    
*   Do not use equations that are unrelated to the notebook's purpose
    

## 

**Footer and copyright byline**

### 

When to use

Use the footer to provide authorship, version control, last updated date, and copyright information at the end of every notebook. This section is required for all published or shared notebooks to ensure traceability and compliance with Teradata’s copyright policy.

### 

How to create

Include the footer as the **final section** in the notebook. Use simple Markdown text, not code blocks or images.

`   **Author**: [Author Name]  **Version**: [Version] **Last Updated**: [Date] **© [Year of meaningful update]** Teradata. All rights reserved.   `

  

*   Always include the first year of publication
    
*   If the notebook has been updated in a meaningful way, list either each update year or a range (for example, © 2023, 2025 or © 2023–2025)
    

[Click here for more details on the copyright policy.](https://teradata.sharepoint.com/teams/policy/Shared%20Documents/Corporate/CMP/Law%20Department%20\(900%20series\)/cmp0906.pdf )

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Principles for writing notebooks](#principles-for-writing-notebooks)
*   [Main title and header](#main-title-and-header)
*   [Section headers](#section-headers)
*   [Introduction section](#introduction-section)
*   [Prerequisite section](#prerequisite-section)
*   [Table of contents](#table-of-contents)
*   [Environment setup and data connection section](#environment-setup-and-data-connection-section)
*   [Code Cells](#code-cells)
*   [Changes](#changes)
*   [Images](#images)
*   [Alerts](#alerts)
*   [Equations](#equations)
*   [Footer and copyright byline](#footer-and-copyright-byline)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In