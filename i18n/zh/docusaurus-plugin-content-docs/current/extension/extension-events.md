---
sidebar_position: 6
---


# 接收来自扩展程序的事件

接收来自扩展程序的事件可以帮助您的代码了解正在发生的事件（例如成功解决验证码并获得令牌或点击事件）并相应地做出反应。

在解决各种类型的验证码时，扩展程序会将事件发送到全局窗口对象中的当前活动页面。

如果需要，可以通过 `window.addEventListener` 订阅这些事件

:::info 信息
事件不传递任何参数
:::

### 示例：
```js
window.addEventListener("onCMExtensionReady", () => {
  // 执行某些操作
 })
```

## 可用事件

### 全局
|**事件**|**描述**|
| :-: | :-: |
|`onCMExtensionReady`|扩展程序完全加载并准备工作|

<!-- ### HCaptcha
|**事件**|**描述**|
| :-: | :-: |
|`onHCaptchaClickStart`|开始通过点击解决 hCaptcha|
|`onHCaptchaClickBackendError`|请求 hCaptcha 解决结果时服务器错误|
|`onHCaptchaClickIncorrect`|通过点击解决 hCaptcha 不正确|
|`onHCaptchaClickSuccess`|通过点击成功解决 hCaptcha|
|`onHCaptchaClick`|在解决 hCaptcha 时点击复选框|
|`onHCaptchaTokenStart`|开始通过令牌解决 hCaptcha|
|`onHCaptchaTokenSuccess`|通过令牌成功解决 hCaptcha|
|`onHCaptchaTokenError`|通过令牌解决 hCaptcha 时出错| -->

### ReCaptcha
|**事件**|**描述**|
| :-: | :-: |
|`onReCaptchaClickStart`|通过点击解决 ReCaptcha 时的图像点击事件|
|`onReCaptchaClick`|通过点击解决 ReCaptcha 时提交或下一个按钮点击事件|
|`onReCaptchaClickIncorrect`|通过点击解决 ReCaptcha 不正确|
|`onReCaptchaClickBackendError`|通过点击解决 ReCaptcha 时出错|
|`onReCaptchaClickSuccess`|通过点击成功解决 ReCaptcha|
|`onRecaptchaTokenStart`|开始通过令牌解决 ReCaptcha|
|`onRecaptchaTokenSuccess`|通过令牌成功解决 ReCaptcha|
|`onRecaptchaTokenError`|通过令牌解决 ReCaptcha 时出错|

### GeeTest
|**事件**|**描述**|
| :-: | :-: |
|`onGeeTestTokenStart`|开始通过令牌解决 GeeTest|
|`onGeeTestTokenSuccess`|通过令牌成功解决 GeeTest|
|`onGeeTestTokenError`|通过令牌解决 GeeTest 时出错|

### Turnstile
|**事件**|**描述**|
| :-: | :-: |
|`onTurnstileTokenStart`|开始通过令牌解决 Turnstile|
|`onTurnstileTokenSuccess`|通过令牌成功解决 Turnstile|
|`onTurnstileTokenError`|通过令牌解决 Turnstile 时出错|

### 图像验证码
|**事件**|**描述**|
| :-: | :-: |
|`onImageTokenStart`|开始通过令牌解决图像验证码|
|`onImageTokenSuccess`|通过令牌成功解决图像验证码|
|`onImageTokenError`|通过令牌解决图像验证码时出错|