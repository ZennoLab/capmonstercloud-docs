---
sidebar_position: 0
---

# Getting Start

There are 2 captcha recognition methods in CapMonster Cloud service:

1. Token method.
1. Click method.

The first method (**token**) – this is initial basic recognition method, where you need to manually search for parameters and functions in the code of web pages, and then construct requests using these parameters or a script and execute autosubmit to send a token and signal to the site that the captcha is solved and it is necessary to check the correctness of the input.

The second method (**click**) also allows you to recognize complex captchas the way a real person does, making real clicks. This proves to the site that the captcha is recognized by a person manually, and not by a bot.

Another important advantage of this recognition method is that you don’t need to search for parameters to send to the service and execute autosubmit. It’s no secret that at this step you can face a rather serious and time-consuming task (especially for beginners in programming) of searching for parameters and functions in scripts and data in requests, html layout of sites and the structure of scripts through which *submit* is usually implemented.

This problem is often complicated by the fact that websites can use non-standard ways of implementing parameter setting and implementing the *submit* function. For example, if multiple parameters are used in requests or if these parameters are encrypted. The click method of recognition in most cases allows you to bypass such difficulties without additional complex research and experiments.

There is a great opportunity to apply the click method in ZennoPoster. To do this, just install our **CapMonster Cloud extension** in a project with the Chromium engine, enter the API key and use the extension when working with the project in the same way as in the Chrome browser.