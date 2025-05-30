﻿---
sidebar_position: 0
sidebar_label: createTask
title: "createTask: как создать задачу на решение капчи" 
description: "createTask: метод создаёт задачу для решения капчи определённого типа. В параметрах указываются данные клиента для авторизации, типизированные данные задачи и другие дополнительные параметры."
---

# createTask : создание задачи

## **Описание**
Метод создает задачу на решение выбранного типа капчи. В параметрах передаются авторизационные данные клиента, типизированные данные задачи и другие необязательные параметры.

:::info Адрес метода
```http
https://api.capmonster.cloud/createTask
```
формат запроса: `JSON POST`
:::

-----
## Параметры запроса

### `clientKey`
Type: `String` <br />
Обязательный: `Да`<br />
Уникальный ключ вашей учетной записи, API ключ (найти можно [тут](https://capmonster.cloud/Dashboard))

### `task`
Type: `Объект задачи` <br />
Обязательный: `Да`<br />
Массив данных о задаче. Список типов задач капч [здесь](../../captchas).

### `callbackUrl`
Type: `String` <br />
Обязательный: `Нет`<br />
Веб адрес для отправки результата задачи капчи. Данные отправляются POST запросом.<br />Содержимое идентично ответу метода [getTaskResult](./get-task-result.md).<br />Содержимое ответа не проверяется и сервер должен успеть принять запрос за 2 секунды, затем соединение закрывается.

Пример использования функции `callbackUrl`:

```json
{
  "clientKey": "API_KEY",
  "task": {
    "type": "NoCaptchaTaskProxyless",
    "websiteURL": "https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey": "6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  },
  "callbackUrl": "https://yourwebsite.com/callback"
}
```

--- 

### Примеры запросов

  <details>
    <summary>
      Задача решения обычной капчи с изображением
    </summary>

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
    <summary>
      Задача решения ReCaptcha2
    </summary>

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
## Структура ответа

### `errorId`
Type: `Integer` <br />
Обязательный: `Да`<br />
Идентификатор ошибки.<br />**0** - ошибок нет, задача успешно создана, идентификатор задачи находится в параметре *taskId*<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Обязательный: `Нет`<br />
Код ошибки. См. [глоссарий ошибок](../api-errors.md).

### `taskId`
Type: `Integer` <br />
Обязательный: `Да`<br />
Идентификатор задания для последующего использования в методе [getTaskResult](./get-task-result.md).

---

### Пример ответа

<details>
    <summary>Ответ БЕЗ ошибки</summary>

```json
    {
      "errorId": 0,
      "taskId": 7654321
    }
```
  </details>

  <details>
    <summary>Ответ, содержащий ошибку</summary>

```json
    {
        "errorId": 1,
        "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
        "errorDescription": "Account authorization key not found in the system or has incorrect format",
        "taskId": 0
    }
```
  </details>
