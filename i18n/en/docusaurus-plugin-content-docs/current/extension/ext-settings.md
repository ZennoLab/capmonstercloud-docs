﻿---
sidebar_position: 5
---


# Extension settings

## Settings available for change:

|**Key**|**Type**|**Description**|
| :-: | :-: | :-: |
|`isEnabled`|`Boolean`|Is the extension enabled by default or not|
|`clientKey`|`String`|API key|
|`captchaList`|`Array<String>`|List of captchas that are enabled (by default all capthas are enabled)|
|`captchaExtra`|`Object<{[String]: 1 / 0}>`|List of captchas that can be solved by clicks (Token - 0, Click - 1)|
|`repeatsCount`|`Number`|Number of repeated solutions after an error|
|`isEnabledIgnoreList`|`Boolean`|Whether the blacklist of sites specified in the IgnoreList field is enabled|
|`ignoreList`|`Array<String>`|List of sites to ignore the solving|
|`proxy`|`Object`|Proxy settings|
|`isManualResolving`|`Boolean`|Is manual recognition enabled|
|`delayStartCount`|`Array<{[CaptchaType]: Number}>`|Delay before solving captcha|
|`autoClick`|`Array<{[CaptchaType]: Boolean}>`|Is the ability to automatically start captcha solving enabled|
|`autoSolve`|`Array<{[CaptchaType]: Boolean}>`|Is the ability to automatically solve the captcha window enabled|
|`textCaptchaSaveOnSite`|`Boolean`|Whether to save the selected elements on the site for text captcha|
|`delayAfterLoadPage`|`Number`|Delay before starting to solve a text captcha, if it was saved for the site|
|`recaptchaClickSelector`|`String`|DOM Element selector to click when starting a Recaptcha solving|
|`globalVariable`|`String`|Name of the field for interaction with the extension via a global object|
<!-- |`hCaptchaClickSelector`|`String`|DOM Element selector to click when starting a hCaptcha solving| -->

There are several ways to change extension settings:
1. Before installing the extension.
2. When the extension is already installed.

## Changing settings before installation

When installing the extension via a package (downloadable [at the link](https://drive.google.com/file/d/11pVyiPltRW_vEPPnRnQJLNiX0J0GVhBe/view?usp=drive_link)), it is possible to set the initial parameters with which the extension will work. To do this, you need to unpack the package and edit the defaultSettings.json file, and then repackage it.

### Description of the settings file defaultSettings.json

The settings file looks like this:

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
## Changing the settings using JS

The name of the global variable must be specified in the extension, for example, CMExtension. 
![](./images/ext-settings/GlobalObjectName.png) 

After initializing the extension on the currently active page, the specified global variable appears, which allows us to manipulate the extension's settings.

Note that event handlers are attached to the properties, not to the data inside.

### Example
```js
window.CMExtension.isEnabled = false;
```