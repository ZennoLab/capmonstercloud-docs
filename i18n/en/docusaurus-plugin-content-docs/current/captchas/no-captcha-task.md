---
sidebar_position: 0
sidebar_label: RecaptchaV2
---

# NoCaptchaTask : solving Google captcha
The object contains data for Google ReCaptcha2 solving task. To ensure the universality of the solution to this type of captcha, you need to use all the data used when automating the filling of the form on the target site, including proxies, browser user-agent and cookies. This will help to avoid any problems when Google changes the code of its captcha.

This type of captcha might be solved a bit longer than usual image captcha, but this issue is compensated by the fact that g-captcha-response value we send to you is valid for the next 60 seconds after we solves your ReCaptcha2.

:::warning **Attention!**
If the proxy is authorized by IP, then be sure to add **116.203.55.208** to the white list.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**NoCaptchaTaskProxyless** or **NoCaptchaTask (When using a proxy)**.|
|websiteURL|String|yes|Address of a webpage with captcha.|
|websiteKey|String|yes|Recaptcha website key.<br />`<div class="g-recaptcha" data-sitekey="THIS_ONE"></div>`|
|recaptchaDataSValue|String|no|Some custom implementations may contain additional "data-s" parameter in ReCaptcha2 div, which is in fact a one-time token and must be grabbed every time you want to solve a ReCaptcha2.<br />`<div class="g-recaptcha" data-sitekey="some sitekey" data-s="THIS_ONE"></div>`|
|proxyType|String|yes (for **NoCaptchaTask**)|**http** - regular http/https proxy;<br />**https** - try this only if "http" doesn't work (required by some custom proxy servers);<br />**socks4** - socks4 proxy;<br />**socks5** - socks5 proxy.|
|proxyAddress|String|yes (for **NoCaptchaTask**)|<p>Proxy IP address IPv4/IPv6. Not allowed:</p><p> - using host names;</p><p> - using transparent proxies (where client IP is visible);</p><p>- using proxies from local networks.</p>|
|proxyPort|Integer|yes (for **NoCaptchaTask**)|Proxy port.|
|proxyLogin|String|no|Proxy login.|
|proxyPassword|String|no|Proxy password.|
|userAgent|String|no|Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".|
|cookies|String|no|<p>Additional cookies which we must use during interaction with target page or Google.</p><p>**Format**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Request example**

**Address**: <https://api.capmonster.cloud/createTask>

### NoCaptchaTask
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"NoCaptchaTask",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36"
  }
}
```

### NoCaptchaTaskProxyless
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  }
}
```


**Response example**

```json
{
  "errorId":0,
  "taskId":407533072
}
```

## **Getting result**
Use the [getTaskResult](../api/methods/get-task-result) method to request answer for ReCaptcha2. You will get response within 10 - 80 secs period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|gRecaptchaResponse|String|Hash which should be inserted into Recaptcha2 submit form in `<textarea id="g-recaptcha-response" ..></textarea>` . It has a length of 500 to 2190 bytes.

**Example:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```