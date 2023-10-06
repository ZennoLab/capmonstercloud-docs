# Interacting with the extension using JS
After the extension is initialized on the current active page, we have a global CMExtension object with which we can manipulate the extension settings.

## Settings available for change:

|**Key**|**Type**|**Description**|
| :-: | :-: | :-: |
|isEnabled|Boolean|Is the extension enabled by default or not.|
|clientKey|String|API key|
|captchaList|`Array<String>`|List of captchas that are enabled (by default all capthas are enabled).|
|captchaExtra|Object<{[String]: 1 | 0}>|List of captchas that can be solved by clicks
(Token - 0, Click - 1).|
|repeatsCount|Number|Number of repeated solutions after an error.|
|isEnabledIgnoreList|Boolean|Whether the blacklist of sites specified in the IgnoreList field is enabled.|
|ignoreList|`Array<String>`|List of sites to ignore the solving.|
|proxy|Object|Proxy settings.|
|isManualResolving|Boolean|Is manual recognition enabled.|
|delayStartCount|Array<{[CaptchaType]: Number}>|Delay before solving captcha.|
|autoClick|Array<{[CaptchaType]: Boolean}>|Is the ability to automatically start captcha solving enabled.|
|autoSolve|Array<{[CaptchaType]: Boolean}>|Is the ability to automatically solve the captcha window enabled.|
|textCaptchaSaveOnSite|Boolean|Whether to save the selected elements on the site for text captcha.|
|delayAfterLoadPage|Number|Delay before starting to solve a text captcha, if it was saved for the site.|
|recaptchaClickSelector|String|DOM Element selector to click when starting a ReCaptcha solving.|
|hCaptchaClickSelector|String|DOM Element selector to click when starting a hCaptcha solving.|
|globalVariable|String|Name of the field for interaction with extension via a global object.|

Note that event handlers are attached to the properties, not to the data inside. 
### **Example:**
```js
window.CMExtension.isEnabled = false;
```
In addition to settings, there are events that we can subscribe to:

|**Event**|**Description**|
| :-: | :-: |
|onCMExtensionReady|The extension is fully loaded and ready to go.|
|onHCaptchaClickStart|Start the hCaptcha solving.|
|onHCaptchaClickBackendError|Server error when requesting hCaptcha solving results.|
|onHCaptchaClickIncorrect|Incorrect hCaptcha solving.|
|onHCaptchaClickSuccess|Successful hCaptcha solving.|
|onHCaptchaClick|Click on the hCaptcha checkbox.|
### **Example:**
```js
window.addEventListener("onCMExtensionReady", () => {
  // DO SOMETHING
})
```
