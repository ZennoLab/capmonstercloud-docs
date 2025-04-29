---
sidebar_position: 3
draft: true
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
|`hCaptchaClickSelector`|`String`|DOM Element selector to click when starting a hCaptcha solving|
|`globalVariable`|`String`|Name of the field for interaction with the extension via a global object|

There are several ways to change extension settings:
1. Before installing the extension.
2. When the extension is already installed.

## Changing settings before installation

When installing the extension via a package, it is possible to set the initial parameters with which the extension will work. To do this, you need to unpack the package and edit the defaultSettings.json file, and then pack it back.

### **Description of the settings file defaultSettings.json**

The settings file looks like this:

```json title="defaultSettings.json"
{
    "isEnabled": true,
    "clientKey": "",
    "captchaList": ["FunCaptcha"],
    "captchaExtra": {
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
    "isManualResolving": false,
    "delayAfterLoadPage": 2,
    "recaptchaClickSelector": ".recaptcha-checkbox-checkmark",
    "hCaptchaClickSelector": "div#checkbox",
    "globalVariable": "BroCapExtension",
    "delayStartCount": {
        "FunCaptcha": 0
    },
    "autoClick": {
        "FunCaptcha": true
    },
    "autoSolve": {
        "FunCaptcha": true
    },
    "delayBetweenClickEnabled": {
        "FunCaptcha": false
    },
    "delayBetweenClickValue": {
        "FunCaptcha": 0
    }
}
```
## Changing the settings using JS

After initializing the extension on the current active page, we have a global object that is set in the extension settings, by default BroCapExtension, with which we can manipulate the extension settings.

Note that event handlers are attached to the properties, not to the data inside.

### **Example:**
```js
window.BroCapExtension.isEnabled = false;
```
### **Example:**

```js
window.addEventListener("onCMExtensionReady", () => {
  // DO SOMETHING
})
```