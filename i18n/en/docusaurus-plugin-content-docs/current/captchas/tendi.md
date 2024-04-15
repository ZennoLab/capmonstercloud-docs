---
sidebar_position: 15
sidebar_label: TenDI
---

# TenDI - Tencent captcha
:::warning **Attention!**
This task will be performed using our proxy servers.
:::
## **Object structure**
|**Parameter**|**Type**|**Required**|**Value**|
| :-: | :-: | :-: | :- | 
|type|String|yes|**CustomTask**|
|class|String|yes|**TenDI**|
|websiteURL|String|yes|Address of the main page where the captcha is solved.|
|websiteKey|String|yes|captchaAppId. For example `"websiteKey": "189123456"` - is a unique parameter for your site. You can take it from an html page with a captcha or from traffic (see description below).|
|userAgent|String|no|Browser User-Agent. **Pass only the actual UA from Windows OS. Now this is version 123**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36`|
### How to get websiteKey(captchaAppId)
Turn on the developer tools, go to the Network tab, activate the captcha and look at the requests. Some of them will contain the parameter value you need. In this case `websiteKey=aid`
![](tendi-devtools.png) 
## **Request example**
**Address:** 
```http
https://api.capmonster.cloud/createTask
```
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "CustomTask",
        "class": "TenDI",
        "websiteURL": "https://domain.com",
        "websiteKey": "189123456",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
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
Use the [getTaskResult](../api/methods/get-task-result) method to get the TenDI solution.
**Response example:**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
       "data": {
            "randstr": "@EcL",
            "ticket": "tr03lHUhdnuW3neJZu.....7LrIbs*"
        },
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        }
    }
}
```
## **Pricing**
|**Name** |**Cost per 1000 recognitions, $**|
| :-: | :-: |
|TenDI|1,6|