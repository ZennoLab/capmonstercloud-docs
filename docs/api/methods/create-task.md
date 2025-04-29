---
sidebar_position: 0
sidebar_label: createTask
---

# createTask : создание задачи

## **Описание**
Метод создает задачу на решение выбранного типа капчи. В параметрах передаются авторизационные данные клиента, типизированные данные задачи и другие необязательные параметры.

:::info Адрес метода
```http
https://api.brocapgpt.com/createTask
```
формат запроса: `JSON POST`
:::

-----
## **Параметры запроса**

### `clientKey`
Type: `String` <br />
Обязательный: `Да` <br />
Уникальный ключ вашей учетной записи, API ключ (найти можно [тут](https://brocapgpt.com/dashboard)

### `task`
Type: `Объект задачи` <br />
Обязательный: `Да`<br />
Массив данных о задаче. Список типов задач капч [здесь](../../captchas).

### `callbackUrl`
Type: `String` <br />
Обязательный: `Нет`<br />
Веб адрес для отправки результата задачи капчи. Данные отправляются POST запросом.<br />Содержимое идентично ответу метода [getTaskResult](./get-task-result).<br />Содержимое ответа не проверяется и сервер должен успеть принять запрос за 2 секунды, затем соединение закрывается.

--- 

### **Примеры запросов**
  <details>
    <summary>
      Задача решения FunCaptchaTask
    </summary>

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


-----
## **Структура ответа**

### `errorId`
Type: `Integer` <br />
Обязательный: `Да`<br />
Идентификатор ошибки.<br />**0** - ошибок нет, задача успешно создана, идентификатор задачи находится в параметре *taskId*<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Обязательный: `Нет`<br />
Код ошибки. См. [глоссарий ошибок](../api-errors).

### `taskId`
Type: `Integer` <br />
Обязательный: `Да`<br />
Идентификатор задания для последующего использования в методе [getTaskResult](./get-task-result).

---

### **Пример ответа**

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
