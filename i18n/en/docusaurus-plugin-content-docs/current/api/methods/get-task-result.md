﻿---
sidebar_position: 1
sidebar_label: getTaskResult
---

# getTaskResult : request task result
## **Description**
After you have created a task, you need to get its response by periodically checking the solving status.

:::info Method address
```http
https://api.brocapgpt/getTaskResult
```
request format: `JSON POST`
:::

:::caution
Limit: 120 requests per task.
:::

---

## **Request parameters:**

### `clientKey`
Type: `String` <br />
Required: `Yes`<br />
Unique key of your account.

### `taskId`
Type: `Integer` <br />
Required: `Yes`<br />
ID which was obtained in [createTask](./create-task) method.

---
### **Request example**

```json
{
  "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
  "taskId": 7654321
}
```
--- 
## **Response structure**

### `errorId`
Type: `Integer` <br />
Error identificator.<br />**0** - no errors, no *errorCode* property;<br />**1** - error, information about it is in the *errorCode* property.

### `errorCode`
Type: `String` <br />
Error code. Check out [error list](../api-errors).

### `status`
Type: `String` <br />
**processing** -  task is not ready yet;<br />**ready** - task complete, solution object can be found in *solution* property.

### `solution`
Type: `Объект` <br />
Task result data. Different for each type of task.

---
### **Response example:**

Response is in process

```json
{
  "errorCode": null,
  "errorDescription": null,
  "errorId": 0,
  "status": "processing"
}
```

Successful response

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
