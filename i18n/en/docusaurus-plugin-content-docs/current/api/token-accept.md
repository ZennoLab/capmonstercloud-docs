﻿---
sidebar_position: 7
sidebar_label: Token acceptance issues
title: "Token Accept method - check tokens for captchas via API"
description: "If you have problems accepting the token, please contact our support team. If you are having problems accepting the token, please contact our support team. We will promptly take the necessary steps to resolve the issue."
---

# Token acceptance issues

If you encounter issues with token acceptance, please contact our support team. We will promptly take the necessary actions to resolve the issue.

## What to do if a site is only accepting a portion of tokens from CapMonster Cloud?

## Description

Sometimes a website may reject tokens obtained from CapMonster Cloud. This can happen in different ways: the site may accept only some of the tokens or accept them inconsistently. In such cases, using the `nocache` parameter can help, as it prevents the reuse of old tokens and increases the likelihood that the tokens will be successfully accepted by the site.

---

## How to pass a parameter?

### Via API key

:::caution
Will be applied to all sent captchas.
:::

You can apply `nocache` to all submitted captchas by appending it to the end of your API key using a double underscore:

`API_KEY__nocache`

### When requesting createTask

:::tip
Notice the *nocache* property of the *task* object
:::

```json
{
  "clientKey":"API_KEY",

  "task": 
  {
    "type":"RecaptchaV2Task",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### When creating a task via the API (using URL parameters)

Add `nocache=1` directly to the API request URL:

:::tip
The `nocache` parameter should be added at the very end of the URL.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## What types of captcha does this parameter apply to?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
<!-- - HCaptcha --> 