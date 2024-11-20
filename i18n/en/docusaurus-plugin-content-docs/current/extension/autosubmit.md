---
sidebar_position: 3
sidebar_label: Autosubmit in the Extension
---

# Autosubmit in the Extension
There is often a need to perform a specific target action (such as pressing a button) after solving a CAPTCHA.
The CapMonster Cloud extension allows you to select an element for automatic clicking after the CAPTCHA is solved.

## Instructions for Selecting an Element for Autosubmit
1. Go to the site with the CAPTCHA.
2. Right-click on the button (or other element) that should be clicked after solving the CAPTCHA.
3. In the menu that appears, select "CapMonster Cloud - automated captcha solver" -> "Select element for submit".   
![](./images/autosubmit/submit1.png) 

4. After that, an informational message will appear on the form saying "Element for auto submit" along with a "Remove" button, which allows you to remove the element for autosubmit.       
![](./images/autosubmit/submit2.png) 

5. For subsequent CAPTCHA solutions on this page, after the CAPTCHA is successfully solved, the selected submission element will be automatically clicked by the extension.
![](./images/autosubmit/submit3.gif)

## Availability of Autosubmit
Currently, autosubmit can only be used in the **Google Chrome** extension when solving with a **token**.
Autosubmit is available for the following CAPTCHA types:
- ReCaptcha,
- GeeTest,
- Turnstile.
