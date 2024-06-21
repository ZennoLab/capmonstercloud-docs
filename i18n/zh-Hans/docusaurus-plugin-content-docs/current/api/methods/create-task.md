---
sidebar_position: 0
sidebar_label: 创建任务
---

# createTask：创建任务
## **描述**
此方法用于创建解决所选验证码类型的任务。在参数中，您需要传递客户端授权数据、任务数据和其他可选参数。

:::info 方法地址
``` http
https://api.capmonster.cloud/createTask
```

请求格式：`JSON POST`
:::

<!-- 方法地址： <https://api.capmonster.cloud/createTask>
` `请求格式：JSON POST -->

-----
## **请求参数**
<!--

|**参数** |**类型**|**必填**|**值**|
| :-: | :-: | :-: | :-: |
|clientKey|字符串|是|您的唯一账户密钥，API密钥（您可以在[这里](https://capmonster.cloud/Dashboard)找到）。|
|task|任务对象|是|任务数据数组。查看可用对象描述的列表[这里](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/589856)。|
|callbackUrl|字符串|否|用于接收验证码任务结果的网址。数据通过POST请求发送。<br />内容与 [getTaskResult](file:///C:/wiki/spaces/APIS/pages/557078) 方法的响应相同。<br />响应内容不进行检查，服务器必须在2秒内接受请求，然后关闭连接。|-->

### `clientKey`
类型：`字符串` <br />
必填：`是`<br />
您的唯一账户密钥，API密钥（您可以在[这里](https://capmonster.cloud/Dashboard)找到）
### `task`
类型：`任务对象` <br />
必填：`是`<br />
任务数据数组。查看可用对象描述的列表[这里](../../captchas)。
### `callbackUrl`
类型：`字符串` <br />
必填：`否`<br />
用于接收验证码任务结果的网址。数据通过POST请求发送。<br />内容与 [getTaskResult](./get-task-result) 方法的响应相同。<br />响应内容不进行检查，服务器必须在2秒内接受请求，然后关闭连接。

以下是使用 `callbackUrl` 函数的示例：
``` json
{
  "clientKey": "67b6bcbb1a728ea8d563de6d169a2057",
  "task": {
    "type": "NoCaptchaTaskProxyless",
    "websiteURL": "https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey": "6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  },
  "callbackUrl": "https://yourwebsite.com/callback"
}
```

-----
### **请求示例**
<!-- ```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
~~~

```mdx-code-block
  <Tabs>
    <TabItem value="apple" label="解决带图像的普通验证码">
    <CodeBlock className="language-json">{JSON.stringify({
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": {
        "type":"ImageToTextTask",
        "body":"BASE64\_BODY\_HERE!"
      }
    }, null, 2)}</CodeBlock>
    </TabItem>
    <TabItem value="orange" label="解决 ReCaptcha2"><CodeBlock className="language-json">{JSON.stringify({
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": {
        "type":"NoCaptchaTaskProxyless","websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2\_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI\_iqRyTwd"
      }
    }
, null, 2)}</CodeBlock></TabItem>
  </Tabs>
``` -->


  <details>
    <summary>解决带图像的普通验证码</summary>

```json
    {
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": 
      {
        "type":"ImageToTextTask",
        "body":"BASE64_BODY_HERE!"
      }
    }
```

</details>

<details>
<summary>解决 ReCaptcha2</summary>

```json
{
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": 
      {
        "type":"RecaptchaV2Task",
        "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
      }
    }
```

</details>

-----
## **响应结构**
<!-- |**参数**|**类型**|**值**|
\| :-: | :-: | :-: |
|errorId|整数|错误标识符。<br />**0** - 没有错误，任务已成功创建，任务ID位于 *taskId*<br />**1** - 发生错误，有关错误的信息在 *errorCode* 属性中|
|errorCode|字符串|错误代码。查看[错误列表](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310)。|
|taskId|整数|任务ID，用于后续在 [getTaskResult](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) 方法中使用。| -->
### `errorId`
类型：`整数` <br />
必填：`是`<br />
错误标识符。<br />**0** - 没有错误，任务已成功创建，任务ID位于 *taskId* 属性中<br />**1** - 发生错误，有关错误的信息在 *errorCode* 属性中
### `errorCode`
类型：`字符串` <br />
必填：`否`<br />
错误代码。查看[错误列表](../api-errors)。
### `taskId`
类型：`整数` <br />
必填：`是`<br />
T任务ID，用于后续在 [getTaskResult](./get-task-result) 方法中使用。

-----
### **响应示例**
<details>
<summary>无任何错误的响应</summary>

``` json
{
      "errorId": 0,
      "taskId": 7654321
    }
```

</details>

<details>
<summary>有错误的响应</summary>

``` json
{
        "errorId": 1,
        "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
        "errorDescription": "系统中找不到账户授权密钥，或其格式不正确",
        "taskId": 0
    }
```

</details>
