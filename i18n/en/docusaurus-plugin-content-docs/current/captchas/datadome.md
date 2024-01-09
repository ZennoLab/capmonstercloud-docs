---
sidebar_position: 14
sidebar_label: DataDome
---

# DataDome

This task will be performed using our proxy servers. Use the received cookies in your project to automatically pass the captcha.

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :-: | :-: | :-: | :-: | 
|type|String|yes|**CustomTask**|
|class|String|yes|**DataDome**|
|websiteURL|String|yes|Address of the main page where the captcha is solved|
|metadata|Object|yes|The object that contains additional data about the captcha - captchaUrl: `"captchaUrl": "..."` <br /> You can take the link from the page with the captcha. Often it looks like `https://geo.captcha-delivery.com/captcha/?initialCid=...`|
|userAgent|String|no|Browser User-Agent.<br /> **Pass only the actual UA from Windows OS. Now this is version 120**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`|

## **Request example**

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
        "websiteURL": "site.com",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "metadata": {
		  "captchaUrl": "https://geo.captcha-delivery.com/captcha/?initialCid=12434324"
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
Use the [getTaskResult](../api/methods/get-task-result) method to get the DataDome solution.

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
    },
    "status": "ready"
}
```