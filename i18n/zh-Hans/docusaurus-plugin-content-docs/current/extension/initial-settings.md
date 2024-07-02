---
sidebar_position: 4
sidebar_label: Initial settings
---

# Initial settings when installing the extension via a package
When installing the extension via a package, it is possible to set the initial parameters for the extension. To do this, you need to extract files from the package, edit the defaultSettings.json file and then add to archive. 
### **Description of the settings file defaultSettings.json**
The setting file looks like this:

```json title="defaultSettings.json"
{
  "isEnabled": true,
  "clientKey": "",
  "captchaList": [
    "ReCaptcha2",
    "ReCaptcha3",
    "ReCaptchaEnterprise",
    "FunCaptcha",
    "HCaptcha",
    "GeeTest",
    "ImageToText",
    "Turnstile"
  ],
  "captchaExtra": {
    "ReCaptcha2": 1,
    "HCaptcha": 1,
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

|**Key**|**Type**|**Description**|
| :-: | :-: | :-: |
|isEnabled|`Boolean`|Is the extension is enabled by default or not.|
|clientKey|`String`|API key.|
|captchaList|Array(String)|List of captchas that are enabled (by default, all captchas are enabled).|
|captchaExtra|Array({(String): 1 | 0})|List of captchas that can be solved by clicks (Token - 0, Click - 1).|
|repeatsCount|`Number`|Number of repeated solutions after an error.|
|isEnabledIgnoreList|Boolean|Whether the blacklist of sites specified in the ignoreList field is enabled.|
|ignoreList|Array(String)|List of sites to ignore the decision.|
|proxy|`Object`|Proxy settings.|
|manualResolving|`Boolean`|Is manual recognition is enabled.|

