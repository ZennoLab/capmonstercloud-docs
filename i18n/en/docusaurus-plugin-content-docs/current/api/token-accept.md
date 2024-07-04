---
sidebar_position: 7
draft: true
---
# Token acceptance issues

## What to do if the site only accepts some of the tokens from CapMonster Cloud?

## **Description**

You receive a token from CapMonster Cloud, send it to the site, but the site rejects it. Moreover, sometimes the site can accept a token, for example, in one case out of 10 (the percentage of success in your case may be different).

In this case, the `nocache` parameter can help you.

---

## **How to pass a parameter?**

### **Via API key**

:::caution
Will be applied to all sent captchas.
:::

In the settings of the used software, add the nocache parameter, with a double underscore, at the very end of the API key:

`dce6bcbb1a728ea8d871de6d169a2057__nocache`

### **When requesting createTask**

:::tip
Notice the *nocache* property of the *task* object
:::

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",

  "task": 
  {
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### **When creating a task using the RuCaptcha API (via URL parameters)**

Add `nocache=1` to the URL.

:::tip
In the example below, the parameter is added to the very end.
:::

`http://api.capmonster.cloud/in.php?key=dce6bcbb1a728ea8d871de6d169a2057&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---