---
sidebar_position: 17
sidebar_label: BasiliskTask
---

import UserAgent from '@site/src/components/UserAgent';


# Basilisk - FaucetPay Captcha
:::warning **Warning!**
This task will be performed using our proxy servers.
:::
## **Object’s structure**
|**Parameter**|**Type**|**Required**|**Value**|
| :-: | :-: | :-: | :- | 
|type|String|yes|**CustomTask**|
|class|String|yes|**Basilisk**|
|websiteURL|String|yes|The address of the main page where the captcha is solved.|
|websiteKey|String|yes|Can be found in the html code in the attribute **data-sitekey** of the captcha container or in the payload of a POST request to the `https://basiliskcaptcha.com/challenge/check-site` in the field **site_key**|
|userAgent|String|no|User-Agent browser. **Pass only the current UA from the Windows operating system. Now this is**: userAgentPlaceholder |
## **Example request**
**Address:** 
```http
https://api.capmonster.cloud/createTask
```
```json
{
   "clientKey": "API_KEY",
   "task": {
       "type": "CustomTask",
       "class": "Basilisk",
       "websiteURL": "https://domain.io/account/register",
       "websiteKey": "b7890hre5cf2544b2759c19fb2600897",
       "userAgent": "userAgentPlaceholder"
   }
}
```
**Example response**
```json
{
   "errorId":0,
   "taskId":407533072
}
```
## **Getting the result**
Use the method [getTaskResult](../api/methods/get-task-result.md), to get the Basilisk solution.
**Example response:**
```json
{
   "errorId":0,
   "status":"ready",
   "solution": {
      "data": {
           "captcha_response": "5620301f30daf284b829fba66fa9b3d0"
       },
       "headers": {
           "User-Agent": "userAgentPlaceholder"
       }
   }
}
```
