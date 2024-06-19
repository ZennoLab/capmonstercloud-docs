---
sidebar_position: 13
sidebar_label: YandexSmartCaptchaTask
draft: true
---

# YandexSmartCaptchaTask

:::info
Please note that this captcha is divided into two types: 

1. Yandex services

2. External websites

Methods for solving these types are **different**.
:::

## SmartCaptcha on Yandex services

This type of captcha opens on a separate page (for example, https://ya.ru/showcaptcha?…).

<details>
    <summary>Example</summary>

![](appearance.png)
</details>

To create a request for solving this type of captcha, you’ll need the following data:

|**Parameter**|**Type**|**Required**|**Meaning**|
| :- | :- | :- | :- | 
|type|String|yes|**YandexSmartCaptchaTaskProxyless**|
|websiteURL|String|yes|The address of the page, where the captcha is solved. For example, https://ya.ru/showcaptcha?…|
|websiteKey|String|yes|**yandex**|
|htmlPageBase64|String|yes|Base64 emcoded html page with captcha.|
|userAgent|String|yes|UA from Chromium browser.|

In response, you will receive the following object:

|**Parameter**|**Type**|**Description**|
| :- | :- | :- | 
|cookies|Object|This property contains an object with cookies that you need to set in your browser or in request headers. At the moment, these are only “spravka” cookies.|
|redirectedUrl|String|The URL you will need to go to with the set cookies. Use it. It usually contains the page you initially requested.|
|referrer|String|Referrer, that **MUST** be used when going to redirected URL.|

## SmartCaptcha on external websites

It looks like many other types of captchas. Simple vidget with checkbox:

<details>
    <summary>Example</summary>

![](appearance-ext-web.png)
</details>

This type of captcha is perfectly solved via token. The request to solve such a captcha looks quite ordinary:

|**Parameter**|**Type**|**Required**|**Meaning**|
| :- | :- | :- | :- |
|type|String|yes|YandexSmartCaptchaTaskProxyless|
|websiteURL|String|yes|The address of the page where the captcha is solved.|
|websiteKey|String|yes|Sitekey with which the captcha is rendered. In most cases, it is taken from the page code.|

Response:

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|token|String|Insert the value of the token into the smart-token field on the captcha page.|

## Request examples

### Yandex services

**Create a request:**

:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::

```json
{
   "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
   "task":{
      "type":"YandexSmartCaptchaTaskProxyless",
      "websiteURL":"https://ya.ru/showcaptcha?cc=1&mt=C934C537A3644...",
      "websiteKey":"yandex",
      "userAgent":"userAgentPlaceholder",
      "htmlPageBase64":"PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db...0L2phdmFzY3JpcHQiPjwvc2NyaXB0PjwvYm9keT4="
   }
}
```

Response:

```json
{
    "errorId":0,
    "taskId":407533072
}
```

**Result**

Use the [getTaskResult](../api/methods/get-task-result.md) method to get the solution.

```json
{
	"clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
	"taskId": 407533072
}
```

Response:

```json
{
	"errorId": 0,
	"errorCode": null,
	"errorDescription": null,
	"solution": {
		"cookies": {
			"spravka": "dD0xNjkzMjI1MTE0OTZF...0ZDJlNDhiYjcxNTBjZWYzYzg2ODdhOQ=="
		},
		"redirectedUrl": "https://ya.ru/?nr=1&redirect_ts=169...87.00000",
		"referrer": "https://ya.ru/checkcaptcha?key=c57865...",
	},
	"status": "ready",
}
```

### External websites

**Create a request:**

:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::

```json
{
   "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
   "task":{
      "type":"YandexSmartCaptchaTaskProxyless",
      "websiteURL":"https://example.com/captcha",
      "websitekey":"FEXfAbHQsToo9...1DgdxjtNB9"
   }
}
```

Response:

```json
{
    "errorId":0,
    "taskId":407533072
}
```

**Result**

Use the [getTaskResult](../api/methods/get-task-result.md) method to get the solution.

```json
{
	"clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
	"taskId": 407533072
}
```

Response:

```json
{
	"errorId": 0,
	"errorCode": null,
	"errorDescription": null,
	"solution": {
		"token": "dD0xNjkzMjI1OT...mNjMTExMTM5ZmVkMDRlMg=="
	},
	"status": "ready"
}
```