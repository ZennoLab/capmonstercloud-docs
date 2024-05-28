---
sidebar_position: 16
sidebar_label: AmazonTask
---

# AmazonTask | AWS WAF Captcha and Challenge
Solving CAPTCHA and challenge in AWS WAF
:::warning **Warning!**
This task will be performed using our proxy servers. 
:::
## **Object structure**
|**Parameter**|**Type**|**Mandatory**|**Value**|
| :-: | :-: | :-: | :- | 
|type|String|yes|**AmazonTaskProxyless**|
|websiteURL|String|yes|The address of the main page where captcha is solved.|
|challengeScript|String|yes|Link to challenge.js (see description below the table)|
|captchaScript|String|yes|Link to captcha.js (see description below the table)|
|websiteKey|String|yes|A string that can be retrieved from an html page with a captcha or with javascript by executing the `window.gokuProps.key`|
|context|String|yes|A string that can be retrieved from an html page with a captcha or with javascript by executing the `window.gokuProps.context`|
|iv|String|yes|A string that can be retrieved from an html page with a captcha or with javascript by executing the `window.gokuProps.iv`|
|cookieSolution|Boolean|no|By default **false**. If you need to use cookies "aws-waf-token", specify the value **true**. Otherwise, what you will get in return is "captcha_voucher" and "existing_token".|
### How to get websiteKey, context, iv and challengeScript parameters
When you go to a website, you get a 405 response and an html page with a captcha. It is from this page that you can get all the parameters:
![](aws1.png) 
![](aws2.png) 
## **Request example**
:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "AmazonTaskProxyless",
        "websiteURL": "https://efw47fpad9.execute-api.us-east-1.amazonaws.com/latest",
        "challengeScript": "https://41bcdd4fb3cb.610cd090.us-east-1.token.awswaf.com/41bcdd4fb3cb/0d21de737ccb/cd77baa6c832/challenge.js",
        "captchaScript": "https://41bcdd4fb3cb.610cd090.us-east-1.captcha.awswaf.com/41bcdd4fb3cb/0d21de737ccb/cd77baa6c832/captcha.js",
        "websiteKey": "AQIDA...wZwdADFLWk7XOA==",
        "context": "qoJYgnKsc...aormh/dYYK+Y=",
        "iv": "CgAAXFFFFSAAABVk",
        "cookieSolution": true
    }
}
```
**Answer example**
```json
{
    "errorId":0,
    "taskId":407533072
}
```
## **Obtaining the result**
:::info Method
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the AmazonTask solution.

**Answer example:**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
        "cookies": {
            "aws-waf-token": "10115f5b-ebd8-45c7-851e-cfd4f6a82e3e:EAoAua1QezAhAAAA:dp7sp2rXIRcnJcmpWOC1vIu+yq/A3EbR6b6K7c67P49usNF1f1bt/Af5pNcZ7TKZlW+jIZ7QfNs8zjjqiu8C9XQq50Pmv2DxUlyFtfPZkGwk0d27Ocznk18/IOOa49Rydx+/XkGA7xoGLNaUelzNX34PlyXjoOtL0rzYBxMAQy0D1tn+Q5u97kJBjs5Mytqu9tXPIPCTSn4dfXv5llSkv9pxBEnnhwz6HEdmdJMdfur+YRW1MgCX7i3L2Y0/CNL8kd8CEhTMzwyoXekrzBM="
        },
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    }
}
```