---
sidebar_position: 14
sidebar_label: DataDome
---

# DataDome

This type of captcha basically requires the user to solve a puzzle by moving a slider to confirm. 

![](datadome.png)

:::warning **Attention!**
This task will be performed using our proxy servers. Use the received cookies in your project to automatically pass the captcha.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :-: | :-: | :-: | :- | 
|type|String|yes|**CustomTask**|
|class|String|yes|**DataDome**|
|websiteURL|String|yes|Address of the main page where the captcha is solved.|
|metadata.htmlPageBase64|String|yes (if metadata.captchaUrl is not filled)|Object that contains additional data about the captcha: `"htmlPageBase64": "..."` - a base64 encoded html page that comes with a 403 code and a Set-Cookie: datadome="..." header in response to a get request to the target site.|
|metadata.captchaUrl|String|yes (if metadata.htmlPageBase64 is not filled)|`"captchaUrl"` - link to the captcha. Usually it looks like this: `"https://geo.captcha-delivery.com/captcha/?initialCid=..."`.|
|metadata.datadomeCookie|String|yes|Your cookies from datadome. You can get it on the page using "document.cookie" or in the Set-Cookie request header: "datadome=..." (see example request /createTask)|
|userAgent|String|no|Browser User-Agent.<br /> **Pass only the actual UA from Windows OS. Now this is**: userAgentPlaceholder|

## **Request example on a real website**

**Address:** 
```http
https://api.capmonster.cloud/createTask
```

```json
{
    "clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
    "task": {
        "type": "CustomTask",
        "class": "DataDome",
        "websiteURL": "https://www.leboncoin.fr/",
        "userAgent": "MuserAgentPlaceholder",
        "metadata": {
            "htmlPageBase64": "PGh0bWw+PGhlYWQ+PHRpdGxlPmJs...PC9odG1sPg==",
            "datadomeCookie": "datadome=VYUWrgJ9ap4zmXq8Mgbp...64emvUPeON45z"
        }
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
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the DataDome solution.

**Response example:**

```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
        "domains": {
            "site.com": {
                "cookies": {
                    "datadome": "t355hfeuUFbsWpoMzXyIWL_ewfwgre25345323rwgregeFEkG5iju9esKVfWMzuLAjcfCIJUIHU7332At1l~HY78g782hidwfeO4K2ZP_CFHYUFEgygfiYGfGYEUfgyefWrXG6_3sy; Max-Age=31536000; Domain=.site.com; Path=/; Secure; SameSite=Lax"
                }
            }
        }
    }
}
```
