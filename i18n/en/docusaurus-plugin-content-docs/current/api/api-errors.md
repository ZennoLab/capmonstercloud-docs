---
sidebar_position: 4
---

# Errors description

### `ERROR_KEY_DOES_NOT_EXIST`
Account authorization key not found in the system or has incorrect format.

### `ERROR_ZERO_BALANCE`
Account has zero balance. [Add funds](https://brocapgpt.com/en/dashboard/balance) to continue recognition. 

### `ERROR_TOO_BIG_CAPTCHA_FILESIZE`
The size of the captcha you are uploading is more than 500,000 bytes.

### `ERROR_ZERO_CAPTCHA_FILESIZE`
The size of the captcha you are uploading is less than 100 bytes.

### `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID`
The captcha that you are requesting was not found. Make sure you are requesting a status update only within 5 minutes of uploading.

### `ERROR_CAPTCHA_UNSOLVABLE`
This type of captchas is not supported by the service or the image does not contain an answer, perhaps it is too noisy. It could also mean that the image is corrupted or was incorrectly rendered. 

### `CAPTCHA_NOT_READY`
The captcha has not yet been solved.

### `ERROR_IP_NOT_ALLOWED`
Request with current account key is not allowed from your IP. 

### `ERROR_IP_BANNED`
You have exceeded the limit of requests with the wrong api key, check the correctness of your api key in the control panel and after some time, try again.

### `ERROR_NO_SUCH_METHOD`
Incorrect [captcha type](../captchas) (value of the «type» parameter).

### `ERROR_TOO_MUCH_REQUESTS`
You have exceeded the limit of requests to receive an answer for one task. Try to request [the result of the task](./methods/get-task-result) no more than 1 time in 2 seconds.

### `ERROR_DOMAIN_NOT_ALLOWED`
Captcha from some domains cannot be solved in BroCapGPT. If you try to create a task for such a domain, this error will return.

### `ERROR_TOKEN_EXPIRED`
Captcha provider server reported that the additional token has expired. Try creating task with a new token.

### `ERROR_NO_SLOT_AVAILABLE`
At the moment there are no available servers for recognizing this task. Try again after a while.

### `ERROR_RECAPTCHA_INVALID_SITEKEY`
Invalid sitekey.

### `ERROR_RECAPTCHA_INVALID_DOMAIN`
Invalid domain for sitekey.

### `ERROR_RECAPTCHA_TIMEOUT`
The timeout of the ReCaptcha recognition has been exceeded, most likely due to a slow proxy or Google server.

### `ERROR_IP_BLOCKED`
Your IP is not allowed to access this API due to a large number of errors.

### `ERROR_PROXY_CONNECT_REFUSED`
Unable to connect to proxy server, connection timeout.

### `ERROR_PROXY_BANNED`
The proxy IP is banned in the target captcha service. 

### `ERROR_TASK_NOT_SUPPORTED`
The task type is incorrect or not supported. Check the «type» property in the task object. 

### `ERROR_TASK_ABSENT`
Task object not found or invalid JSON was sent in [createTask](./methods/create-task) request.
