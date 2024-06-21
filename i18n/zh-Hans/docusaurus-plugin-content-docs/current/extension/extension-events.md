---
sidebar_position: 4
---
# 接收来自扩展程序的事件
接收来自扩展程序的事件可以帮助您的代码了解正在发生的事件（例如成功解决验证码并获得令牌或点击事件）并相应地做出反应。

在解决各种类型的验证码时，扩展程序会将事件发送到全局窗口对象中的当前活动页面。

如果需要，可以通过 `window.addEventListener` 订阅这些事件

:::info 信息
事件不传递任何参数
:::
### **示例：**
``` js
window.addEventListener("onCMExtensionReady", () => {
  // 执行某些操作
 })
```
## 可用事件
### 全局

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onCMExtensionReady`</h3>|<h3>扩展程序完全加载并准备工作</h3>|
###
### HCaptcha

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onHCaptchaClickStart`</h3>|<h3>开始通过点击解决 hCaptcha</h3>|
|<h3>`onHCaptchaClickBackendError`</h3>|<h3>请求 hCaptcha 解决结果时服务器错误</h3>|
|<h3>`onHCaptchaClickIncorrect`</h3>|<h3>通过点击解决 hCaptcha 不正确</h3>|
|<h3>`onHCaptchaClickSuccess`</h3>|<h3>通过点击成功解决 hCaptcha</h3>|
|<h3>`onHCaptchaClick`</h3>|<h3>在解决 hCaptcha 时点击复选框</h3>|
|<h3>`onHCaptchaTokenStart`</h3>|<h3>开始通过令牌解决 hCaptcha</h3>|
|<h3>`onHCaptchaTokenSuccess`</h3>|<h3>通过令牌成功解决 hCaptcha</h3>|
|<h3>`onHCaptchaTokenError`</h3>|<h3>通过令牌解决 hCaptcha 时出错</h3>|
###
### ReCaptcha

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onReCaptchaClickStart`</h3>|<h3>通过点击解决 ReCaptcha 时的图像点击事件</h3>|
|<h3>`onReCaptchaClick`</h3>|<h3>通过点击解决 ReCaptcha 时提交或下一个按钮点击事件</h3>|
|<h3>`onReCaptchaClickIncorrect`</h3>|<h3>通过点击解决 ReCaptcha 不正确</h3>|
|<h3>`onReCaptchaClickBackendError`</h3>|<h3>通过点击解决 ReCaptcha 时出错</h3>|
|<h3>`onReCaptchaClickSuccess`</h3>|<h3>通过点击成功解决 ReCaptcha</h3>|
|<h3>`onRecaptchaTokenStart`</h3>|<h3>开始通过令牌解决 ReCaptcha</h3>|
|<h3>`onRecaptchaTokenSuccess`</h3>|<h3>通过令牌成功解决 ReCaptcha</h3>|
|<h3>`onRecaptchaTokenError`</h3>|<h3>通过令牌解决 ReCaptcha 时出错</h3>|
###
### GeeTest

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onGeeTestTokenStart`</h3>|<h3>开始通过令牌解决 GeeTest</h3>|
|<h3>`onGeeTestTokenSuccess`</h3>|<h3>通过令牌成功解决 GeeTest</h3>|
|<h3>`onGeeTestTokenError`</h3>|<h3>通过令牌解决 GeeTest 时出错</h3>|
###
### Turnstile

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onTurnstileTokenStart`</h3>|<h3>开始通过令牌解决 Turnstile</h3>|
|<h3>`onTurnstileTokenSuccess`</h3>|<h3>通过令牌成功解决 Turnstile</h3>|
|<h3>`onTurnstileTokenError`</h3>|<h3>通过令牌解决 Turnstile 时出错</h3>|
###
### 图像验证码

|<h3>**事件**</h3>|<h3>**描述**</h3>|
| :-: | :-: |
|<h3>`onImageTokenStart`</h3>|<h3>开始通过令牌解决图像验证码</h3>|
|<h3>`onImageTokenSuccess`</h3>|<h3>通过令牌成功解决图像验证码</h3>|
|<h3>`onImageTokenError`</h3>|<h3>通过令牌解决图像验证码时出错</h3>|
###
