---
sidebar_position: 4
sidebar_label: Error descriptions
title: "Captcha Recognition Error descriptions"
description: "API error codes during captcha recognition, causes, and recommendations to prevent errors when integrating the API for solving and bypassing captchas on the CapMonster Cloud service website!"
---

# Error descriptions

:::info Recommendations for preventing errors:
- Make sure the captcha type you need to solve is supported by the CapMonster Cloud service. If this captcha type is not supported, please contact us — we will consider adding it.
- Check documentation updates regularly to stay informed about API changes and avoid using deprecated methods or parameters.
- Use high-quality proxies.

If the error persists and you’re unable to resolve it, please contact support via the [form](https://helpdesk.zennolab.com/conversation/new), our chat available on the [website](https://capmonster.cloud/) and in the [documentation](https://docs.capmonster.cloud/), or the [Telegram channel](https://t.me/capmonstercloud), providing:

- taskId
- task type (type)
- original image/input
- date/time of the task
- request body (if possible)
:::


### `INVALID KEY`
API error code: `ERROR_KEY_DOES_NOT_EXIST` <br />
API key not found or provided in an incorrect format. Make sure you are using the key from your [personal dashboard](https://dash.capmonster.cloud/) and that it is active. If the error persists, contact support providing *taskId* and the full request.

### `NO FUNDS`
API error code: `ERROR_ZERO_BALANCE` <br />
Insufficient funds on the account to solve captchas. [Top up your balance](https://capmonster.cloud/SelectPaymentType) and retry the task.

### `BIG IMAGE SIZE`
API error code: `ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
The uploaded image exceeds the maximum allowed size of 50 KB. Reduce the resolution or compress the file, then resubmit the task. This error occurs only for captchas with image uploads (*ImageToText, ComplexImageTask, ComplexImageTask Recaptcha,* etc.).

### `ZERO IMAGE SIZE`
API error code: `ERROR_ZERO_CAPTCHA_FILESIZE` <br />
The image size is too small (less than 100 bytes). Check that the file is valid and contains the captcha image.

### `CAPTCHA ID IS NOT FOUND`
API error code: `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
A task with this taskId does not exist or the storage period has expired (usually 5 minutes). Make sure you request the result immediately after submitting the task.

### `CAPTCHA UNSOLVABLE`
API error code: `ERROR_CAPTCHA_UNSOLVABLE` <br />
The service failed to solve the task. Possible reasons: captcha is not supported, image is empty/damaged, incorrect parameters specified, or a technical failure occurred. It is recommended to carefully check the submitted parameters or use the [parameter mapping](https://docs.capmonster.cloud/docs/extension/extension-main/#captcha-parameter-mapping) in the CapMonster Cloud browser extension. If the error repeats, contact support providing: *taskId, task type (type)*, original image or input data, date/time of the task, and request body.

### `CAPTCHA IS NOT READY`
API error code: `CAPTCHA_NOT_READY` <br />
The solution is still in process. Retry the request later, with an interval of at least 2 seconds.

### `REQUEST IS NOT ALLOWED FROM YOUR IP`
API error code: `ERROR_IP_NOT_ALLOWED` <br />
Request from this IP address with the current key is denied. Open the settings section in your personal dashboard and [add your IP to the trusted list](https://dash.capmonster.cloud/Account/Settings).

### `IP BANNED`
API error code: `ERROR_IP_BANNED` <br />
You have exceeded the request limit with an incorrect API key. Check the key in the [control panel](https://dash.capmonster.cloud/) and try again later.

### `INCORRECT METHOD`
API error code: `ERROR_NO_SUCH_METHOD` <br />
An incorrect task type (parameter *type*) is specified. Check the list of supported [captcha types](https://docs.capmonster.cloud/docs/captchas/) (parameter type value).

### `REQUEST LIMIT EXCEEDED`
API error code: `ERROR_TOO_MUCH_REQUESTS` <br />
You have exceeded the request limit for getting a response on one task. Try to request the [task result](./methods/get-task-result.md) no more often than once every 2 seconds.

### `THE DOMAIN IS NOT ALLOWED`
API error code: `ERROR_DOMAIN_NOT_ALLOWED` <br />
Solving captchas from certain domains is forbidden in CapMonster Cloud. When trying to create a task for such domains, you will receive this error.

### `THE TOKEN IS EXPIRED`
API error code: `ERROR_TOKEN_EXPIRED` <br />
The additional token has expired. Obtain a new token and submit the task again.

### `NO FREE SERVERS`
API error code: `ERROR_NO_SLOT_AVAILABLE` <br />
Currently, there are no free servers available to solve this task. Please contact support if you receive this error — we will consider expanding the infrastructure.

### `INVALID RECAPTCHA SITEKEY`
API error code: `ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
An invalid *websiteKey* was provided. Check the value in the captcha page source and provide it correctly. If you have difficulty finding the correct key, please contact support.

### `INVALID RECAPTCHA DOMAIN`
API error code: `ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
The domain does not match the specified *sitekey*, or the *websiteURL* parameter is in an incorrect format. Provide the full URL of the page with the captcha, including the protocol. **Only `http://` and `https://` are supported.**

### `RECAPTCHA TIMEOUT`
API error code: `ERROR_RECAPTCHA_TIMEOUT` <br />
The reCAPTCHA solving time has expired, possibly due to a slow proxy or Google servers' response. Try another proxy or retry the task later.

### `YOUR IP IS BLOCKED`
API error code: `ERROR_IP_BLOCKED` <br />
Access from this IP is blocked due to a high number of failed requests. Check task parameters and API key before resubmitting.

### `FAILED TO CONNECT PROXY`
API error code: `ERROR_PROXY_CONNECT_REFUSED` <br />
Failed to connect to the proxy: connection error or timeout. Check the IP, port, and proxy availability.

### `THE PROXY IP IS BANNED`
API error code: `ERROR_PROXY_BANNED` <br />
The specified proxy is banned on the captcha service. Use a different proxy.

### `MISSING PROXY`
API error code: `ERROR_PROXY_MISSING`<br />
Proxy parameters are missing in required fields or an incorrect *proxyType* is specified. Provide all required parameters: *proxyType*, *proxyAddress*, *proxyPort*. Verify the correctness of *proxyType*.

### `PROXY NOT AUTHORIZED`
API error code: `ERROR_PROXY_NOT_AUTHORISED`<br />
Incorrect proxy authorization data: *proxyLogin* or *proxyPassword*. Check *proxyLogin* and *proxyPassword*. Ensure the authorization data is correct and active.

### `PROXY READ TIMEOUT`
API error code: `ERROR_PROXY_READ_TIMEOUT`<br />
Incorrect *proxyAddress* or *proxyPort* causing connection timeout. Verify *proxyAddress* and *proxyPort*. Ensure the proxy is accessible and working properly.

### `INCORRECT TASK TYPE`
API error code: `ERROR_TASK_NOT_SUPPORTED` <br />
The specified task type is unsupported or invalid. Please check the value of the type property in the task object.

### `ERROR_TASK_ABSENT`
API error code: `ERROR_TASK_ABSENT` <br />
The task object is missing in the [createTask](./methods/create-task.md) request or the JSON is invalid. Check the request structure.

### `USERAGENT IS EXPIRED`
API error code: `ERROR_WRONG_USERAGENT`<br />
An invalid User Agent was provided in the request. You can find the current User Agent [here](https://capmonster.cloud/api/useragent/actual).
