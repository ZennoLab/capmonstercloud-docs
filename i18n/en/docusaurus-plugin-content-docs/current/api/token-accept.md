---
sidebar_position: 7
---
# Token acceptance issues

If you encounter issues with token acceptance, please contact our support team. We will promptly take the necessary actions to resolve the issue.

## What to do if a site is only accepting a portion of tokens from CapMonster Cloud?

## Description

You receive a token from CapMonster Cloud and send it to a site, but the site rejects it. And sometimes the site can accept the token, for example, in one case out of 10 (the success rate in your case may be different). Blocking or rejection of tokens can happen because of frequent requests from one IP address, or because of poor captcha quality (noise on the image), also some sites may use dynamic captcha updates or add additional checks without notification. In this case, the `nocache` parameter can help you.

---

## How to pass a parameter?

### Via API key

:::caution
Will be applied to all sent captchas.
:::

In the settings of the used software, add the nocache parameter, with a double underscore, at the very end of the API key:

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
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### When creating a task using the RuCaptcha API (via URL parameters)

Add `nocache=1` to the URL.

:::tip
In the example below, the parameter is added to the very end.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## What types of captcha does this parameter apply to?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
- [HCaptcha](../captchas/hcaptcha-task.mdx)