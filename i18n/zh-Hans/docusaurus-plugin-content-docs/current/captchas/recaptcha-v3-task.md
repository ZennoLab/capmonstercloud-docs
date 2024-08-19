---
sidebar_position: 1
sidebar_label: RecaptchaV3TaskProxyless
---


# RecaptchaV3TaskProxyless
该对象包含用于解决 Google ReCaptcha3 任务的数据。此任务将通过我们的服务使用我们自己的代理服务器执行。

与 ReCaptcha2 不同，ReCaptcha3 不需要站点访问者执行任何操作，它在页面背景中隐式工作，收集和分析用户数据，以确定其是否为人类或机器人。基于这些分析，网站会得到一个信任评级（从 0.1 到 0.9）。

创建任务时，您还应额外传递两个参数 - pageAction 和 minScore。

## **对象结构**

|**参数**|**类型**|**必需**|**值**|
| :- | :- | :- | :- |
|type|String|是|**RecaptchaV3TaskProxyless**。|
|websiteURL|String|是|带有 Google ReCaptcha 的网页地址。|
|websiteKey|String|是|Recaptcha 网站密钥。<br/>https://www.google.com/recaptcha/api.js?render=THIS_ONE|
|minScore|Double|否|从 0.1 到 0.9 的值。|
|pageAction|String|否|<p>小部件操作值。网站所有者通过此参数定义用户在页面上的活动。默认值: *verify*</p><p>示例:<br/>*`grecaptcha.execute('site_key', {action:'login_test'})`*。</p>|

## **请求示例**

**地址：**
```http
https://api.capmonster.cloud/createTask
```

```json
{
  "clientKey":"API_KEY",
  "task": {
    "type":"RecaptchaV3TaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta",
    "websiteKey":"6Le0xVgUAAAAAIt20XEB4rVhYOODgTl00d8juDob",
    "minScore": 0.3,
    "pageAction": "myverify"
  }
}
```

**响应示例**

```json
{
  "errorId":0,
  "taskId":407533072
}
```
## **获取结果**
使用 [getTaskResult](../api/methods/get-task-result.md) 请求获取 ReCaptcha3 的答案。根据服务负载情况，您将在 10 到 30 秒内收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|gRecaptchaResponse|String|应插入到 Recaptcha3 提交表单中的哈希值 `<textarea id="g-recaptcha-response"></textarea>`。长度为 500 到 2190 字节。|

**示例：**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```