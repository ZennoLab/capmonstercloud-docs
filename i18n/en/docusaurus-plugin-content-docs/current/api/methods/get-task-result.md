---
sidebar_position: 1
sidebar_label: getTaskResult
---

# getTaskResult : request task result
## **Description**
After you have created a task, you need to get its response by periodically checking the solving status.

:::info Method address
```http
https://api.capmonster.cloud/getTaskResult/
```
request format: `JSON POST`
:::

<!-- Адрес метода: <https://api.capmonster.cloud/getTaskResult/>
Формат запроса: JSON POST -->

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


<!-- |**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи|
|taskId|Integer|Да|Идентификатор задания полученный в методе [createTask](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/425989/createTask)| -->
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

<!-- |**Свойство**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|status|String|**processing** - задача в процессе выполнения<br />**ready** - задача выполнена, решение находится в свойстве *solution*|
|solution|Объект|Информация о решении задачи. Каждый тип задачи имеет разный формат.| -->
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

<!-- |<p>{</p><p>`    `"errorCode": "null",</p><p>`    `"errorDescription": "null",</p><p>`    `"errorId": 0,</p><p>`    `"status": "processing",</p><p>}</p>|
| :- | -->

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
