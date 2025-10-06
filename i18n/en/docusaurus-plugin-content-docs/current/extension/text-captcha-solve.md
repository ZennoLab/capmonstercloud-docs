﻿---
sidebar_position: 2
---

# Solving text captchas
## Description
We've added the ability to recognize text captchas in our browser extension.

![](./images/text-captcha-solve/captcha-solving.png) 

## How it works

### Actions in the browser
1\. Right-click on the captcha and select **Mark image as captcha** from the pop-up menu.

![](./images/text-captcha-solve/mark-as-captcha.png)

2\. Right-click on the field for entering the answer and select **Select an input for the captcha result** in the menu that opens..

![](./images/text-captcha-solve/select-input.png)

3\. The result is automatically written in the field for entering the answer.

![](./images/text-captcha-solve/Aspose.Words.f6d390ba-8e92-4611-b5a2-167a5168d8f1.004.png)
 
### Recognition automation using software
To automate the process of recognizing text captchas in the browser (e.g., using *Developer Tool* or *Selenium*)  you need:
1. Assign the `cm-image-to-text-source=**id**` attribute to the element with the image:

![](./images/text-captcha-solve/exapmle1.png) 

2. Assign the `cm-image-to-text-input-result=**id**` attribute to the element with the input:

![](./images/text-captcha-solve/exapmle2.png) 

Where **id** is the captcha identifier (arbitrary value).
:::info 
At the same time captchas and inputs corresponding to each other should have the same id.

You can solve several captchas on the page in parallel, the main thing is that the id within one set is unique and the id of the captcha and input match each other.
:::
