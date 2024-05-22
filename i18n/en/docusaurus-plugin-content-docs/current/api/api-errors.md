---
sidebar_position: 4
---

# Errors description

:::info Recommendations on how to prevent errors:
- Ensure that the type of captcha you need to solve is supported by the CapMonster Cloud service.
- Check for updated documentation to stay up-to-date with the latest API changes and avoid using outdated methods or parameters.
- Use quality proxies.
:::

### `INVALID KEY`
API error code: `ERROR_KEY_DOES_NOT_EXIST` <br />
Account authorization key not found in the system or has incorrect format.

### `NO FUNDS`
API error code: `ERROR_ZERO_BALANCE` <br />
Account has zero balance. [Add funds](https://capmonster.cloud/SelectPaymentType) to continue recognition. 

### `BIG IMAGE SIZE`
API error code: `ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
The size of the captcha you are uploading is more than 500,000 bytes.

### `ZERO IMAGE SIZE`
API error code: `ERROR_ZERO_CAPTCHA_FILESIZE` <br />
The size of the captcha you are uploading is less than 100 bytes.

### `CAPTCHA ID IS NOT FOUND`
API error code: `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
The captcha that you are requesting was not found. Make sure you are requesting a status update only within 5 minutes of uploading.

### `CAPTCHA UNSOLVABLE`
API error code: `ERROR_CAPTCHA_UNSOLVABLE` <br />
This type of captchas is not supported by the service or the image does not contain an answer, perhaps it is too noisy. It could also mean that the image is corrupted or was incorrectly rendered. 

### `CAPTCHA IS NOT READY`
API error code: `CAPTCHA_NOT_READY` <br />
The captcha has not yet been solved.

### `REQUEST IS NOT ALLOWED FROM YOUR IP`
API error code: `ERROR_IP_NOT_ALLOWED` <br />
Request with current account key is not allowed from your IP. Open your account settings and [add your IP to the trusted list](https://capmonster.cloud/Account/Settings).

### `IP BANNED`
API error code: `ERROR_IP_BANNED` <br />
You have exceeded the limit of requests with the wrong api key, check the correctness of your api key in the control panel and after some time, try again.

### `INCORRECT METHOD`
API error code: `ERROR_NO_SUCH_METHOD` <br />
Incorrect [captcha type](/docs/captchas) (value of the «type» parameter).

### `REQUEST LIMIT EXCEEDED`
API error code: `ERROR_TOO_MUCH_REQUESTS` <br />
You have exceeded the limit of requests to receive an answer for one task. Try to request [the result of the task](./methods/get-task-result) no more than 1 time in 2 seconds.

### `THE DOMAIN IS NOT ALLOWED`
API error code: `ERROR_DOMAIN_NOT_ALLOWED` <br />
Captcha from some domains cannot be solved in CapMonster Cloud. If you try to create a task for such a domain, this error will return.

### `THE TOKEN IS EXPIRED`
API error code: `ERROR_TOKEN_EXPIRED` <br />
Captcha provider server reported that the additional token has expired. Try creating task with a new token.

### `NO FREE SERVERS`
API error code: `ERROR_NO_SLOT_AVAILABLE` <br />
At the moment there are no available servers for recognizing this task. Try again after a while.

### `INVALID RECAPTCHA SITEKEY`
API error code: `ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
Invalid sitekey.

### `INVALID RECAPTCHA DOMAIN`
API error code: `ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
Invalid domain for sitekey.

### `RECAPTCHA TIMEOUT`
API error code: `ERROR_RECAPTCHA_TIMEOUT` <br />
The timeout of the ReCaptcha recognition has been exceeded, most likely due to a slow proxy or Google server.

### `YOUR IP IS BLOCKED`
API error code: `ERROR_IP_BLOCKED` <br />
Your IP is not allowed to access this API due to a large number of errors.

### `FAILED TO CONNECT PROXY`
API error code: `ERROR_PROXY_CONNECT_REFUSED` <br />
Unable to connect to proxy server, connection timeout.

### `THE PROXY IP IS BANNED`
API error code: `ERROR_PROXY_BANNED` <br />
The proxy IP is banned in the target captcha service. 

### `INCORRECT TASK TYPE`
API error code: `ERROR_TASK_NOT_SUPPORTED` <br />
The task type is incorrect or not supported. Check the «type» property in the task object. 

### `ERROR_TASK_ABSENT`
API error code: `ERROR_TASK_ABSENT` <br />
Task object not found or invalid JSON was sent in [createTask](./methods/create-task) request.

### `USERAGENT IS EXPIRED`
API error code: `ERROR_WRONG_USERAGENT`<br />
The request specified an invalid User Agent, you can find out the current User Agent in the [article](../captchas/hcaptcha-task.md).