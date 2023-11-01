---
sidebar_position: 4
sidebar_label: HCaptcha
---

# HCaptchaTask : hCaptcha solving
The object contains data for hCaptcha solving task. To provide solid universality for solving this type of task we have reproduce every piece of environment used for an automation task you plan to complete. This includes: proxy access, browser's user-agent, cookies (optionally). This approach will eliminate all possible obstacles which might implement in the future.

This type of captcha might be solved a bit longer than usual image captcha, but this issue is compensated by the fact that g-captcha-response value we send to you is valid for the next 60 seconds after we solves your hCaptcha.

:::warning **Attention!**
hCaptcha seems to have limit of solved tasks from one IP, about 3 items per 12 hours. Take this into account when you build solving process through your proxy.
:::

:::warning **Attention!**
Proxies with IP authorization are not yet supported.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**HCaptchaTaskProxyless** or **HCaptchaTask (when using a proxy)**|
|websiteURL|String|yes|Address of a webpage with hCaptcha.|
|websiteKey|String|yes|hCaptcha website key.|
|isInvisible|Bool|no|Use true for invisible version of hCaptcha.|
|data|String|no|<p>Custom data that is used in some implementations of hCaptcha, mostly with isInvisible=true.</p><p>Important: you MUST provide userAgent if you submit captcha with data parameter. The value should match the User-Agent you use when interacting with the target website.</p><p>**Pass only the actual UA from Windows OS. Now this is version 117: “Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36”**</p>|
|proxyType|String|yes (for **HCaptchaTask**)|**http** - regular http/https proxy;<br />**https** - try this option only if "http" does not work (required for some custom proxies);<br />**socks4** - socks4 proxy;<br />**socks5** - socks5 proxy.|
|proxyAddress|String|yes (for **HCaptchaTask**)|<p>IP proxy address IPv4/IPv6. Not allowed:</p><p>- using hostnames;</p><p>- using transparent proxies (where you can see the client’s IP);</p><p>- using proxies on local machines.</p>|
|proxyPort|Integer|yes (for **HCaptchaTask**)|Proxy port.|
|proxyLogin|String|no|Proxy server login.|
|proxyPassword|String|no|Proxy server password.|
|userAgent|String|no|<p>The browser User-Agent used in the emulation. You must use a modern browser signature or Google will return an error asking you to update your browser.</p><p>**Pass only the actual UA from Windows OS. Now this is version 117: “Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36”**</p>|
|cookies|String|no|<p>Additional cookies which we must use during interaction with target page.</p><p>**Format**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|
|fallbackToActualUA|Bool|no|<p>**true** - when specifying this parameter, we ignore the irrelevant User Agent that users send in the request, and return our own (relevant) one with getTaskResult. This will improve the acceptance of tokens.</p><p>**false** - we insert the User Agent that is specified in the request. If the User Agent is invalid, you will receive an error ERROR_WRONG_USERAGENT (USERAGENT IS EXPIRED in the log).</p>|

**Supported Types**<br/>
The supported image types are as follows:

|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.001.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.002.png)|
| :- | :- |
|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.003.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.004.png)|
|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.005.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.006.png)|
|![](25940532.png)|

## **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::
### HCaptchaTask (with a proxy)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"HCaptchaTask",
        "websiteURL":"https://lessons.zennolab.com/captchas/hcaptcha/?level=easy",
        "websiteKey":"472fc7af-86a4-4382-9a49-ca9090474471",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "fallbackToActualUA":true,
        "proxyType":"http",
        "proxyAddress":"8.8.8.8",
        "proxyPort":8080,
        "proxyLogin":"proxyLoginHere",
        "proxyPassword":"proxyPasswordHere"
    }
}
```
### HCaptchaTaskProxyless (without a proxy)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"HCaptchaTaskProxyless",
        "websiteURL":"https://lessons.zennolab.com/captchas/hcaptcha/?level=easy",
        "websiteKey":"472fc7af-86a4-4382-9a49-ca9090474471",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "fallbackToActualUA":true
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
:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to request answer for hCaptcha. You will get response within 10 - 80 secs period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|gRecaptchaResponse|String|Hash which should be inserted into hCaptcha submit form on target website.|
|userAgent|String|During submitting, you should use the same *User Agent* with which hCaptcha was solved.|
|respKey|String|The result of the "window.hcaptcha.getRespKey()" function when available. Some sites use this value for additional verification.|


**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse": "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hKdwYXNza2V5xQb9JvlblBqjTdKpourvlRNpOZLvJb0yJRmsXVFVjyxFWlL1wdYBXaPyFtnxwy2ukbMgwWn62-cjSc98Iw2XIPYWg5MNDKS4_7tBIhjY0PienoKy1...",
    "respKey": "E0_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoidjQ3RjlqZGFYTllFQXlZZFYyRTlaWlBVQUdLaFpPakpRNjBXRTljVW40VnY3NnhuN2V3R0wwVWd1MW1Wai90WEdoYmt5a2NqVGlGdWpsSlpmVjcza...",
    "userAgent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
  }
}
```
