---
sidebar_position: 0
sidebar_label: createTask
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

<!-- Адрес метода: <https://api.capmonster.cloud/createTask> 
Формат запроса: JSON POST -->

-----
## **Параметры запроса**
<!-- 
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи, API ключ (найти можно [тут](https://capmonster.cloud/Dashboard))|
|task|Объект задачи|Да|Массив данных о задаче. Список типов задач капч [здесь](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/589856).|
|callbackUrl|String|Нет|Веб адрес для отправки результата задачи капчи. Данные отправляются POST запросом.<br />Содержимое идентично ответу метода [getTaskResult](file:///C:/wiki/spaces/APIS/pages/557078).<br />Содержимое ответа не проверяется и сервер должен успеть принять запрос за 2 секунды, затем соединение закрывается.| -->

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
Веб адрес для отправки результата задачи капчи. Данные отправляются POST запросом.<br />Содержимое идентично ответу метода [getTaskResult](./get-task-result).<br />Содержимое ответа не проверяется и сервер должен успеть принять запрос за 2 секунды, затем соединение закрывается.

--- 

### **Примеры запросов**

<!-- ```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
```

```mdx-code-block
  <Tabs>
    <TabItem value="apple" label="Задача решения обычной капчи с изображением">
    <CodeBlock className="language-json">{JSON.stringify({
      "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
      "task": {
        "type":"ImageToTextTask",
        "body":"BASE64\_BODY\_HERE!"
      }
    }, null, 2)}</CodeBlock>
    </TabItem>
    <TabItem value="orange" label="Задача решения ReCaptcha2"><CodeBlock className="language-json">{JSON.stringify({
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
    <summary>
      Задача решения обычной капчи с изображением
    </summary>

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
    <summary>
      Задача решения ReCaptcha2
    </summary>

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
## **Структура ответа**

<!-- |**Параметр**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, задача успешно создана, идентификатор задачи находится в параметре *taskId*<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|taskId|Integer|Идентификатор задания для последующего использования в методе [getTaskResult](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult).| -->

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
