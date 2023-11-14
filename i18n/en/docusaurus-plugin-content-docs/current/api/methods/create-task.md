---
sidebar_position: 0
sidebar_label: createTask
---

# createTask : creating a task

## **Description**
This method creates a task for solving selected captcha type. In the parameters you need to pass the client authorization data, typed task data and other optional parameters.

:::info Method address

## <https://api.capmonster.cloud/createTask> 

Request format: `JSON POST`
:::

<!-- Адрес метода: <https://api.capmonster.cloud/createTask> 
Формат запроса: JSON POST -->

-----
## **Request parameters**
<!-- 
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи, API ключ (найти можно [тут](https://capmonster.cloud/Dashboard))|
|task|Объект задачи|Да|Массив данных о задаче. Список типов задач капч [здесь](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/589856).|
|callbackUrl|String|Нет|Веб адрес для отправки результата задачи капчи. Данные отправляются POST запросом.<br />Содержимое идентично ответу метода [getTaskResult](file:///C:/wiki/spaces/APIS/pages/557078).<br />Содержимое ответа не проверяется и сервер должен успеть принять запрос за 2 секунды, затем соединение закрывается.| -->

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
Web address for sending the captcha task result. Data is sent by POST request.<br />The content is identical to the response of the [getTaskResult](./get-task-result) method.<br />The content of the response is not checked and you should accept the request in 2 seconds then the connection will be closed.

--- 

### **Request examples**

<!-- ```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
```

```mdx-code-block
  <Tabs>
    <TabItem value="apple" label="Solving a normal captcha with an image">
    <CodeBlock className="language-json">{JSON.stringify({
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": {
        "type":"ImageToTextTask",
        "body":"BASE64\_BODY\_HERE!"
      }
    }, null, 2)}</CodeBlock>
    </TabItem>
    <TabItem value="orange" label="Solving ReCaptcha2"><CodeBlock className="language-json">{JSON.stringify({
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": {
        "type":"NoCaptchaTaskProxyless","websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2\_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI\_iqRyTwd"
      }
    }
, null, 2)}</CodeBlock></TabItem>
  </Tabs>
``` -->


  <details>
    <summary>Solving normal captcha with an image</summary>

```json
    {
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
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
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": 
      {
        "type":"NoCaptchaTaskProxyless",
        "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
      }
    }
```
  </details>

-----
## **Response structure**

<!-- |**Параметр**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, задача успешно создана, идентификатор задачи находится в параметре *taskId*<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|taskId|Integer|Идентификатор задания для последующего использования в методе [getTaskResult](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult).| -->

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
