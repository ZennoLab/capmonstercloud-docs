﻿# 如何报告错误的令牌

当CapMonster Cloud提供的令牌未能成功验证网站或经常被拒绝时，请提交关于错误令牌的投诉。

应提交投诉的情况示例：

- 用户收到了解决方案令牌，但网站仍然不将其视为正确的验证码解决方案。

- 一些网站成功接受令牌，而其他网站拒绝了它们。

- 在先前成功接受类似令牌的网站上被拒绝。


## 为什么要报告？

我们需要报告，以便自动分析由我们的API发行的令牌质量数据。报告会自动处理，团队会采取措施改进令牌的质量，无论是更新系统以适应新任务，改进网格等。

---

### 方法地址：


:::tip 提示 用于验证码图片报告
```http
https://api.capmonster.cloud/reportIncorrectImageCaptcha
```
:::


:::tip 提示 用于令牌验证码报告：recaptcha(2,3, enterprise), hcaptcha, geetest, turnstile.
```http
https://api.capmonster.cloud/reportIncorrectTokenCaptcha
```

此外支持的路径：

[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha),
[https://api.capmonster.cloud/reportIncorrectHcaptcha](https://api.capmonster.cloud/reportIncorrectHcaptcha) - 与 [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha) 功能相同。
:::



`请求格式：JSON POST`

### 请求参数

|**参数**|**类型**|**必需**|**值**|
| :-: | :-: | :-: | :- |
|clientKey|String|是|您的唯一帐户密钥|
|taskId|Integer|是|任务ID|

**请求示例：**

```json
{

  "clientKey":"API_KEY",
  "taskId": 7654321

}
```

**响应结构：**

|**属性**|**类型**|**值**|
| :-: | :-: | :- |
|errorId|Integer|错误ID。<br />**0** - 没有错误，没有 *errorCode* 属性；<br />**1** - 出现错误，有关错误的信息在 *errorCode* 属性中。|
|errorCode|String|错误代码。请查看[错误类型](./api-errors.md)。|
|status|String|**success** - 报告已接受。<br />如果报告未被接受，则此字段缺失，原因在 *errorCode* 中|

### 响应示例

<details>
  <summary>
    无错误的响应
  </summary>

```json
{
  "errorId": 0,
  "status": "success"
}
```

</details>

<details>
  <summary>
    带有错误的响应
  </summary>

```json
{
  "errorId": 1,
  "errorCode": "ERROR_KEY_DOES_NOT_EXIST"
}
```

</details>
