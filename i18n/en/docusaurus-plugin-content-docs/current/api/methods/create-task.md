---
sidebar_position: 0
sidebar_label: createTask
title: "createTask: how to create a captcha task"
description: "createTask: The method creates a task to solve captcha of a certain type. The parameters include client data for authorisation, typed task data and other additional parameters."
---

# createTask : creating a task

## Description
The method creates a task for solving the selected captcha type. The parameters include client authentication data, typed task information, and, if necessary, additional parameters.

:::info Method address
```http
https://api.capmonster.cloud/createTask
```

Request format: `JSON POST`
:::


-----
## Request parameters

### `clientKey`
Type: `String` <br />
Required: `Yes`<br />
Your unique account key, API key (You can find it [here](https://capmonster.cloud/Dashboard))

### `task`
Type: `Task object` <br />
Required: `Yes`<br />
Task data array. See list of available object descriptions [here](../../captchas).

### `callbackUrl`
Type: `String` <br />
Required: `No`<br />
Web address for sending the captcha task result. Data is sent by POST request.<br />The content is identical to the response of the [getTaskResult](./get-task-result.md) method.<br />The content of the response is not checked and you should accept the request in 2 seconds then the connection will be closed.

Example of using the `callbackUrl` function:

```json
{
  "clientKey": "API_KEY",
  "task": {
    "type": "RecaptchaV2Task",
    "websiteURL": "https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey": "6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  },
  "callbackUrl": "https://yourwebsite.com/callback"
}
```

--- 

### Request examples

  <details>
    <summary>Solving normal captcha with an image</summary>

```json
    {
      "clientKey":"API_KEY",
      "task": 
      {
        "type":"ImageToTextTask",
        "body":"BASE64_BODY_HERE!"
      }
    }
```
  </details>

  <details>
    <summary>Solving ReCaptcha2</summary>

```json
    {
      "clientKey":"API_KEY",
      "task": 
      {
        "type":"RecaptchaV2Task",
        "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
      }
    }
```
  </details>

-----
## Response structure

### `errorId`
Type: `Integer` <br />
Required: `Yes`<br />
Error identificator.<br />**0** - no errors, the task has been successfully created, task ID located in *taskId* property<br />**1** - error, information about it is in the *errorCode* property

### `errorCode`
Type: `String` <br />
Required: `No`<br />
Error code. Check out [error list](../api-errors.md).

### `taskId`
Type: `Integer` <br />
Required: `Yes`<br />
Task ID for further use in [getTaskResult](./get-task-result.md) method.

---

### Response example

<details>
    <summary>Response WITHOUT any error</summary>

```json
    {
      "errorId": 0,
      "taskId": 7654321
    }
```
  </details>

  <details>
    <summary>Response WITH an error</summary>

```json
    {
        "errorId": 1,
        "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
        "errorDescription": "Account authorization key not found in the system or has incorrect format",
        "taskId": 0
    }
```
  </details>
