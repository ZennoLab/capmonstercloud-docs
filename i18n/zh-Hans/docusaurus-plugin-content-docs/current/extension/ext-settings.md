﻿---
sidebar_position: 5
---


# 扩展设置

## 可更改的设置：

|**键**|**类型**|**描述**|
| :-: | :-: | :-: |
|`isEnabled`|`布尔值`|扩展是否默认启用|
|`clientKey`|`字符串`|API 密钥|
|`captchaList`|`数组<字符串>`|启用的验证码列表（默认情况下所有验证码都启用）|
|`captchaExtra`|`对象<{[字符串]: 1 / 0}>`|可以通过点击解决的验证码列表（Token - 0, Click - 1）|
|`repeatsCount`|`数字`|错误后重复解决的次数|
|`isEnabledIgnoreList`|`布尔值`|是否启用 IgnoreList 字段中指定的网站黑名单|
|`ignoreList`|`数组<字符串>`|要忽略解决的网站列表|
|`proxy`|`对象`|代理设置|
|`isManualResolving`|`布尔值`|是否启用手动识别|
|`delayStartCount`|`数组<{[验证码类型]: 数字}>`|开始解决验证码前的延迟|
|`autoClick`|`数组<{[验证码类型]: 布尔值}>`|是否启用自动开始解决验证码的功能|
|`autoSolve`|`数组<{[验证码类型]: 布尔值}>`|是否启用自动解决验证码窗口的功能|
|`textCaptchaSaveOnSite`|`布尔值`|是否保存网站上选定的文本验证码元素|
|`delayAfterLoadPage`|`数字`|如果为网站保存了文本验证码，开始解决前的延迟|
|`recaptchaClickSelector`|`字符串`|开始解决 reCaptcha 时要点击的 DOM 元素选择器|
<!-- |`hCaptchaClickSelector`|`字符串`|开始解决 hCaptcha 时要点击的 DOM 元素选择器| -->
|`globalVariable`|`字符串`|通过全局对象与扩展交互的字段名称|

更改扩展设置有几种方法：
1. 安装扩展程序之前。
2. 当扩展已安装时。

## 安装之前更改设置

通过包（可通过[链接](https://drive.google.com/file/d/11pVyiPltRW_vEPPnRnQJLNiX0J0GVhBe/view?usp=drive_link) 下载）安装扩展时，可以设置扩展将使用的初始参数。为此，您需要解压缩包并编辑 defaultSettings.json 文件，然后重新打包。

### defaultSettings.json 设置文件的描述

设置文件如下所示：

```json title="defaultSettings.json"
{
  "isEnabled": true,
  "clientKey": "",
  "captchaList": [
    "ReCaptcha2",
    "ReCaptcha3",
    "ReCaptchaEnterprise",
    "FunCaptcha",
    "GeeTest",
    "ImageToText",
    "Turnstile"
  ],
  "captchaExtra": {
    "ReCaptcha2": 1,
    "FunCaptcha": 1
  },
  "repeatsCount": 0,
  "isEnabledIgnoreList": false,
  "ignoreList": [],
  "proxy": {
    "isEnabled": false,
    "type": "http",
    "address": "",
    "port": 3128,
    "login": "",
    "password": ""
  },
  "manualResolving": false
}
```
## 使用JavaScript更改设置

在当前活动页面上初始化扩展后，我们会有一个在扩展设置中设置的全局对象，默认是 CMExtension，我们可以通过它来操作扩展设置。

请注意，事件处理程序附加到属性，而不是数据内部。

### 例如：
```js
window.CMExtension.isEnabled = false;
```