---
sidebar_position: 10
sidebar_label: ImageToTextTask
---

# ImageToTextTask

这是常规验证码，即包含文本的图片，需要输入相应的文本。

![](text-captcha-2.png)

## **对象结构**

|**参数**|**类型**|**必填**|**可能的值**|**描述**|
| :-: | :-: | :-: | :-: | :-: |
|type|String|是|**ImageToTextTask**|定义任务类型。|
|body|String|是|-|以base64编码的文件主体。确保发送时没有换行符。|
|CapMonsterModule|String|否|yandex, special 等|识别模块的名称，例如“yandex”。可以通过[这里](../api/module-name.md)找到模块名称及所有可用模块的列表。|
|recognizingThreshold|Int|否|0-100|验证码识别阈值，可取值范围为0到100。例如，如果将 recognizingThreshold 设置为90，并且任务以80的置信度解决，则不会收费。在这种情况下，用户会收到 ERROR\_CAPTCHA\_UNSOLVABLE 的响应。|
|Case|Boolean|否|true, false|true - 如果验证码区分大小写。|
|numeric|Int|否|0, 1|1 - 如果验证码仅包含数字。|
|math|Boolean|否|true, false|false — 未定义；<br />true — 如果验证码需要数学操作（例如：验证码 2 + 6 = 将返回值 8）。|

Base64 是一种数据编码方法，允许将二进制数据表示为文本。以下是使用*开发者工具*中的控制台获取验证码图像的 base64 格式的示例：

```
const captchaUrl = 'https://example.com/captcha.jpg';

function loadAndEncodeCaptchaToBase64(url) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function() {
                const base64Data = reader.result;                
                console.log('Base64 编码的验证码:, base64Data);

                          };
        })
        .catch(error => {
            console.error('加载或编码验证码时出错:', error);
        });
}

loadAndEncodeCaptchaToBase64(captchaUrl);

```


## **请求示例**

:::info 方法
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
  "clientKey":"API_KEY",
  "task": {
    "type":"ImageToTextTask",
    "body":"BASE64_BODY_HERE!"
  }
}
```


**响应示例**
```json
{
  "errorId":0,
  "taskId":53456
}
```

## **获取结果**
:::info 方法
~~~ http
https://api.capmonster.cloud/getTaskResult
~~~

:::
使用[getTaskResult](../api/methods/get-task-result.md)方法获取验证码的解决方案。根据系统负载，您将在300毫秒到6秒的时间范围内收到答案。

|**属性**|**类型**|**描述**|
| :-: | :-: | :-: |
|text|String|验证码答案|

**示例：**
```http
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
