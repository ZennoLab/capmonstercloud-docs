---
sidebar_position: 4
---


# Receiving events from the extension

When solving various types of captchas, the extension sends events to the currently active page in the global window object.

If necessary, it is possible to subscribe to these events via `window.addEventListener`

:::info
No parameters are passed to events
:::

### **Example:**
```js
window.addEventListener("onCMExtensionReady", () => {
  // DO SOMETHING
})
```

## Available events

### Global
|**Event**|**Description**|
| :-: | :-: |
|`onCMExtensionReady`|The extension is fully loaded and ready to work|

### HCaptcha
|**Event**|**Description**|
| :-: | :-: |
|`onHCaptchaClickStart`|Start solving hCaptcha by clicks|
|`onHCaptchaClickBackendError`|Server error when requesting hCaptcha solution results by clicks|
|`onHCaptchaClickIncorrect`|Incorrect hCaptcha solving by clicks|
|`onHCaptchaClickSuccess`|Successful hCaptcha solving by clicks|
|`onHCaptchaClick`|Clicking on the hCaptcha checkbox when solving by clicks|
|`onHCaptchaTokenStart`|Start solving hCaptcha by token|
|`onHCaptchaTokenSuccess`|Successful hCaptcha solving by token|
|`onHCaptchaTokenError`|Error when solving hCaptcha by token|

### ReCaptcha
|**Event**|**Description**|
| :-: | :-: |
|`onReCaptchaClickStart`|Image click event when solving ReCaptcha by clicks|
|`onReCaptchaClick`|Submit or next button click event when solving ReCaptcha by clicks|
|`onReCaptchaClickIncorrect`|Incorrect ReCaptcha solving by clicks|
|`onReCaptchaClickBackendError`|Error when solving ReCaptcha by clicks|
|`onReCaptchaClickSuccess`|Successful solving ReCaptcha by clicks|
|`onRecaptchaTokenStart`|Start solving ReCaptcha by token|
|`onRecaptchaTokenSuccess`|Successful ReCaptcha solving by token|
|`onRecaptchaTokenError`|Error when solving ReCaptcha by token|

### GeeTest
|**Event**|**Description**|
| :-: | :-: |
|`onGeeTestTokenStart`|Start of the GeeTest solving by token|
|`onGeeTestTokenSuccess`|Successful solution of GeeTest by token|
|`onGeeTestTokenError`|Error when solving GeeTest by token|

### Turnstile
|**Event**|**Description**|
| :-: | :-: |
|`onTurnstileTokenStart`|Start of the Turnstile solving by token|
|`onTurnstileTokenSuccess`|Successful solution of Turnstile by token|
|`onTurnstileTokenError`|Error when solving Turnstile by token|

### Image captcha
|**Event**|**Description**|
| :-: | :-: |
|`onImageTokenStart`|Start of the Image captcha solving by token|
|`onImageTokenSuccess`|Successful solving Image captcha by token|
|`onImageTokenError`|Error when solving Image captcha by token|