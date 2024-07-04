---
sidebar_position: 0
sidebar_label: createTask
---

# createTask : creating a task

## **Description**
This method creates a task for solving selected captcha type. In the parameters you need to pass the client authorization data, typed task data and other optional parameters.

:::info Method address
```http
https://api.brocapgpt.com/createTask
```

Request format: `JSON POST`
:::

-----
## **Request parameters**

### `clientKey`
Type: `String` <br />
Required: `Yes`<br />
Your unique account key, API key (You can find it [here](https://brocapgpt.com/dashboard)

### `task`
Type: `Task object` <br />
Required: `Yes`<br />
Task data array. See list of available object descriptions [here](../../captchas).

### `callbackUrl`
Type: `String` <br />
Required: `No`<br />
Web address for sending the captcha task result. Data is sent by POST request.<br />The content is identical to the response of the [getTaskResult](./get-task-result) method.<br />The content of the response is not checked and you should accept the request in 2 seconds then the connection will be closed.

--- 

### **Request examples**
  <details>
    <summary>Solving FunCaptchaTask</summary>

```json
    {
		"clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
		"task": 
		{
			"type":"FunCaptchaTaskProxyless",
			"websiteURL":"http://mywebsite.com/",
			"funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
			"data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
			"websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC"
		}
	}
```
  </details>

  <details>
    <summary>Solving ComplexImageTask</summary>

```json
    {
		"clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
		"task": 
		{
			"type": "ComplexImageTask",
			"class": "funcaptcha",
			"imageUrls":[ "https://i.postimg.cc/s2ZDrHXy/fc1.jpg" ],
			"metadata": 
			{
			  "Task": "Pick the image that is the correct way up"
			},
			"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
		}
	}
```
  </details>

-----
## **Response structure**

### `errorId`
Type: `Integer` <br />
Required: `Yes`<br />
Error identificator.<br />**0** - no errors, the task has been successfully created, task ID located in *taskId* property<br />**1** - error, information about it is in the *errorCode* property

### `errorCode`
Type: `String` <br />
Required: `No`<br />
Error code. Check out [error list](../api-errors).

### `taskId`
Type: `Integer` <br />
Required: `Yes`<br />
Task ID for further use in [getTaskResult](./get-task-result) method.

---

### **Response example**

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
