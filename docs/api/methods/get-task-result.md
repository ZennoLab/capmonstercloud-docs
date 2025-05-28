---
sidebar_position: 1
sidebar_label: getTaskResult
---

# getTaskResult : получить результат задачи
## **Описание**
После создания задания на решение капчи необходимо периодически проверять статус до получения ответа.

:::info Адрес метода
```http
https://api.brocapgpt.com/getTaskResult
```
формат запроса: `JSON POST`
:::

:::caution
Лимит: 120 запросов на задачу.
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
Идентификатор задания полученный в методе [createTask](./create-task)

---
### **Пример запроса**

```json
{
  "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
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
Код ошибки. См. [глоссарий ошибок](../api-errors).

### `status`
Type: `String` <br />
**processing** - задача в процессе выполнения<br />**ready** - задача выполнена, решение находится в свойстве *solution*

### `solution`
Type: `Объект` <br />
Информация о решении задачи. Каждый тип задачи имеет разный формат.

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
