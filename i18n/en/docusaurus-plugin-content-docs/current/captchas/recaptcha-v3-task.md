---
sidebar_position: 1
sidebar_label: RecaptchaV3TaskProxyless
---


# RecaptchaV3TaskProxyless
The object contains data for Google ReCaptcha3 solving task. This task will be executed by our service using our own proxy servers.

When creating a task, unlike ReCaptcha2, you should additionally pass two parameters - pageAction and minScore.

## **Object structure**

<!-- |**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**RecaptchaV3TaskProxyless**.|
|websiteURL|String|yes|Address of a webpage with Google ReCaptcha.|
|websiteKey|String|yes|Recaptcha website key.<br/>https://www.google.com/recaptcha/api.js?render=THIS_ONE|
|minScore|Double|no|Value from 0.1 to 0.9.|
|pageAction|String|no|<p>Widget action value. Website owner defines what user is doing on the page through this parameter. Default value: *verify*</p><p>Example:<br/>*grecaptcha.execute('site_key', {action:'login_test'})*.</p>| -->

## **Request example**

**Address:** `<https://api.capmonster.cloud/createTask>`

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV3TaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta",
    "websiteKey":"6Le0xVgUAAAAAIt20XEB4rVhYOODgTl00d8juDob",
    "minScore": 0.3,
    "pageAction": "myverify"
  }
}
```

**Response example**

```json
{
  "errorId":0,
  "taskId":407533072
}
```
## **Getting the result**
Use the [getTaskResult](../api/methods/get-task-result.md) to request answer for ReCaptcha3. You will get response within 10 - 30 sec period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|gRecaptchaResponse|String|Hash which should be inserted into Recaptcha3 submit form in `<textarea id="g-recaptcha-response" ></textarea>`. It has a length of 500 to 2190 bytes.|

**Example:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```