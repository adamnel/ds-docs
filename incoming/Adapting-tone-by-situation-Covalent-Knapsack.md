# Covalent / Adapting tone by situation

Our voice is stable because it’s our identity. Our tone adapts to what a user needs in a specific situation.

# 

Meeting users in the moment

We converse with different types of users at different stages of their journey, from onboarding to business as usual to new-feature adoption, and points in between. We strive to understand a user’s needs in a situation, and we guide them using a tone that helps them then and there.

Naturally, along their journey users have different feelings. We’re mindful of that, without being presumptuous, when we choose our tone. But we can never truly know a user’s emotional state. That’s why we don’t imply that we know it in attempts to engage them.

Moment to moment, we use tone to engage users by meeting their needs while staying credible and authentic.

# 

Things to consider

*   What is the user context?
    
*   What did they do before, and what will they do after?
    
*   What does the user need now? How might they be feeling?
    
*   What do you want, and not want, to convey?
    
*   How do you know when you've gone too far?
    

# 

Tone spectrum

The tone spectrum is a mental model for you as you choose the right tone according to your user's situation in their product experience. The sliding gradient represents all possible situations throughout the user journey. We can't describe them all, because so many factors are at play.

We call out 3 example points on the spectrum, and each aligns with a situation and tone guideline. The three points are not absolute. **The right tone could come from a combination of them or points in between.**

Use the guidelines to help you apply the right tone to common situations users encounter, and adapt them to other situations along the spectrum. Ultimately, use what you know about the user in the specific situation, and be ready to make a judgement call with the many factors at play.

![tone spectrum b.png](https://knapsack.imgix.net/site/covalent/tone-spectrum-b-ahvrjqvcrrpng)

## 

Straightforward and brief

Situation: A user encounters a Help article (in the product) on how to complete a task.

**This**

**Not this**

**Add an identity provider**

  

An identity provider stores, secures, and authenticates the digital identities of users. Examples include Azure Active Directory, Okta, and Ping.

  

VantageCloud Lake supports these provider types:

*   OpenID Connect
    
*   SAML
    

1.  Sign in to the VantageCloud Lake Console.
    
2.  In **Manage access**, select **Identity providers**.
    
3.  Select **Add identity provider**, then the **Provider type**.
    
4.  Complete the information, then select **Add provider**.
    

**Add an identity provider**

  

An identity provider stores, secures, and authenticates the digital identities of users, devices, or applications. Examples include Azure Active Directory, Okta, Ping, Google, Facebook, and Twitter.

  

An authentication protocol is a set of rules and procedures that determine how entities prove their identities to each other. VantageCloud Lake supports these authentication protocols:

*   OpenID Connect
    
*   SAML
    

1.  Sign in to the VantageCloud Lake Console with your username and password.
    
2.  In **Manage access**, select **Identity providers**.
    
3.  Select **Add identity provider** and the **Provider type**.
    
4.  Complete the information, then map the required claim mappings (for OpenID Connect) or attribute values (for SAML).
    
5.  Select **Add provider**.
    

  

We don’t want users to feel they have a lot to read. To help them complete tasks efficiently and feel good about it, write only what they need.

Let's look at the example more closely.

##### Do

An identity provider stores, secures, and authenticates the digital identities of users.

##### Don't

An identity provider stores, secures, and authenticates the digital identities of users, devices, or applications.

The job to be done that this task supports is setting up single sign-on. Users are relevant, but devices and applications are not.

##### Do

Examples include Azure Active Directory, Okta, and Ping.

##### Don't

Examples include Azure Active Directory, Okta, Ping, Google, Facebook, and Twitter.

* * *

Our customers are not likely to use social identity providers. Including only identity providers they are likely to use keeps the sentence brief.

##### Do

VantageCloud Lake supports these provider types:

*   OpenID Connect
    
*   SAML
    

##### Don't

An authentication protocol is a set of rules and procedures that determine how entities prove their identities to each other. VantageCloud Lake supports these authentication protocols:

*   OpenID Connect
    
*   SAML
    

Maybe the user who completes this task already understands what an authentication protocol is. But either way, for this job to be done, the most straightforward approach is to abstract that as the _provider type_ and avoid the jargon.

##### Do

Sign in to the VantageCloud Lake Console.

##### Don't

Sign in to the VantageCloud Lake Console with your username and password.

The user, an organization admin who already set up their VantageCloud Lake account, expects to use a username and password. Besides, that's conventional.

##### Do

Complete the information, then select **Add provider**.

##### Don't

Complete the information, then map the required claims (for OpenID Connect) or attribute values (for SAML).

Select **Add provider**.

The UI makes clear what the user needs to do before they select **Add provider**. 

## 

Empowering and real

Situation: A user sees this sentence at the beginning of a product's getting started guide.

**This**

**Not this**

You can explore and analyze large datasets in a Jupyter notebook using  ClearScape Analytics™ functions—on a self-service, on-demand basis.

You can explore and analyze large datasets to achieve limitless innovation.

During onboarding, inspire users and increase their confidence by being real. Empower them by telling them what they can do. Don’t overpromise or use hyperbole. That’s not real. And that’s about the product, not the user.

Situation: A user sees this information in a new feature announcement.

**This**

**Not this**

You can now share datasets between users in the same environment. No data movement or duplication is required.

You can now easily share datasets between users of the same environment.

Don’t say it’s easy. Show it. Empower users with facts that support a feature’s ease of use. That makes it real. Sounding like you’re trying to convince them that it’s easy might backfire.

## 

Transparent and neutral

Situation: While using a product, a user encounters an error.

**This**

**Not this**

Couldn’t create an environment

Failed to create an environment

Your role doesn’t have access to this.

There was a problem.

The system timed out. Please try again.

We’re sorry, but the system timed out.

In error messages, be transparent. Stay neutral to avoid escalating an already tense or unsatisfactory experience. Focus on communicating helpful information and avoid expressing feelings. For instance, avoid using words or phrases such as “we’re sorry.” See [Errors](/site/covalent/latest/pages/error-messages) for more error message guidelines.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

Contents

*   [Meeting users in the moment](#meeting-users-in-the-moment)
*   [Things to consider](#things-to-consider)
*   [Tone spectrum](#tone-spectrum)
    *   [Straightforward and brief](#straightforward-and-brief)
    *   [Empowering and real](#empowering-and-real)
    *   [Transparent and neutral](#transparent-and-neutral)

*   [Workspace Repo](https://github.com/Teradata/covalent)

[Powered by Knapsack](https://knapsack.cloud)Sign In