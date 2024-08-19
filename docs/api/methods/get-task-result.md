---
sidebar_position: 1
sidebar_label: getTaskResult
---

# getTaskResult : получить результат задачи
## **Описание**
После того как создали задание на решение, необходимо получить его ответ периодически проверяя статус решения.

:::info Адрес метода
```http
https://api.capmonster.cloud/getTaskResult
```
формат запроса: `JSON POST`
:::

<!-- Адрес метода: <https://api.capmonster.cloud/getTaskResult/>
Формат запроса: JSON POST -->

:::caution
Лимит: 120 запросов на задачу. При превышении лимита аккаунт пользователя может быть временно заблокирован. 
:::

---

## **Параметры запроса:**

### `clientKey`
Type: `String` <br />
Обязательный: `Да`<br />
Уникальный ключ вашей учетной записи

### `taskId`
Type: `Integer` <br />
Обязательный: `Да`<br />
Идентификатор задания полученный в методе [createTask](./create-task.md)


<!-- |**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи|
|taskId|Integer|Да|Идентификатор задания полученный в методе [createTask](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/425989/createTask)| -->
---
### **Пример запроса**

```json
{
  "clientKey":"API_KEY",
  "taskId": 7654321
}
```
--- 
## **Структура ответа**

### `errorId`
Type: `Integer` <br />
Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Код ошибки. См. [глоссарий ошибок](../api-errors.md).

### `status`
Type: `String` <br />
**processing** - задача в процессе выполнения<br />**ready** - задача выполнена, решение находится в свойстве *solution*

### `solution`
Type: `Объект` <br />
Информация о решении задачи. Каждый тип задачи имеет разный формат.

<!-- |**Свойство**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|status|String|**processing** - задача в процессе выполнения<br />**ready** - задача выполнена, решение находится в свойстве *solution*|
|solution|Объект|Информация о решении задачи. Каждый тип задачи имеет разный формат.| -->
---
### **Пример ответа:**

Ответ в процессе выполнения

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

Успешный ответ

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
