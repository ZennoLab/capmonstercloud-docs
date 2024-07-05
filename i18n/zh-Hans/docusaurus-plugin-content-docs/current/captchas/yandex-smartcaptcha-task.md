---
sidebar_position: 13
sidebar_label: YandexSmartCaptchaTask
draft: true
---

# YandexSmartCaptchaTask

:::info
请注意，此验证码分为两种类型：

1. Yandex 服务

2. 外部网站

解决这些类型的方法是**不同的**。
:::

## Yandex 服务上的智能验证码

这种类型的验证码会在单独的页面上打开（例如，https://ya.ru/showcaptcha?…）。

<details>
    <summary>示例</summary>

![](appearance.png)
</details>

要创建解决此类验证码的请求，您需要以下数据：

|**参数**|**类型**|**必需**|**含义**|
| :- | :- | :- | :- | 
|type|String|是|**YandexSmartCaptchaTaskProxyless**|
|websiteURL|String|是|解决验证码的页面地址。例如，https://ya.ru/showcaptcha?…|
|websiteKey|String|是|**yandex**|
|htmlPageBase64|String|是|包含验证码的 HTML 页面的 Base64 编码。|
|userAgent|String|是|来自 Chromium 浏览器的用户代理。|

作为响应，您将收到以下对象：

|**参数**|**类型**|**描述**|
| :- | :- | :- | 
|cookies|Object|此属性包含一个对象，其中包含您需要在浏览器或请求头中设置的 cookie。目前仅包括 “spravka” cookies。|
|redirectedUrl|String|您需要使用设置的 cookie 前往的 URL。使用它。通常包含您最初请求的页面。|
|referrer|String|在访问重定向 URL 时**必须**使用的引荐页。

## 外部网站上的智能验证码

它看起来像许多其他类型的验证码。简单的带复选框的小部件：

<details>
    <summary>示例</summary>

![](appearance-ext-web.png)
</details>

这种类型的验证码可以通过令牌完美解决。解决此类验证码的请求看起来非常普通：

|**参数**|**类型**|**必需**|**含义**|
| :- | :- | :- | :- |
|type|String|是|YandexSmartCaptchaTaskProxyless|
|websiteURL|String|是|解决验证码的页面地址。|
|websiteKey|String|是|网站密钥，用于渲染验证码。在大多数情况下，从页面代码中获取。|

响应：

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|token|String|将令牌的值插入到验证码页面上的智能令牌字段中。|

## 请求示例

### Yandex 服务

**创建请求：**

:::info 方法
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
      "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      "htmlPageBase64":"PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db...0L2phdmFzY3JpcHQiPjwvc2NyaXB0PjwvYm9keT4="
   }
}
```

响应：

```json
{
    "errorId":0,
    "taskId":407533072
}
```

**结果**

使用[getTaskResult](../api/methods/get-task-result.md)方法获取解决方案。

```json
{
	"clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
	"taskId": 407533072
}
```

响应：

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

### 外部网站

**创建请求：**

:::info 方法
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

响应：

```json
{
    "errorId":0,
    "taskId":407533072
}
```

**结果**

使用[getTaskResult](../api/methods/get-task-result.md)方法获取解决方案。

```json
{
	"clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
	"taskId": 407533072
}
```

响应：

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