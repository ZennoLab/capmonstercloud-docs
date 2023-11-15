---
sidebar_position: 1
sidebar_label: ReCaptchaV3TaskProxyless
---


# RecaptchaV3TaskProxyless
Объект содержит данные о задаче на решение ReCaptcha3 от Google. Такая задача будет выполняться нашим сервисом с использованием наших собственных прокси-серверов.

При создании задачи, в отличии от ReCaptcha2, необходимо дополнительно передавать два параметра - pageAction и minScore.

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**RecaptchaV3TaskProxyless**|
|websiteURL|String|да|Адрес страницы, на которой решается каптча|
|websiteKey|String|да|Ключ-идентификатор ReCaptcha3 на целевой странице.<br/>https://www.google.com/recaptcha/api.js?render=ВОТ_ЭТОТ|
|minScore|Double|нет|Может иметь значение от 0.1 до 0.9.|
|pageAction|String|нет|<p>Значение параметра action, которое передаётся виджетом ReCaptcha в Google, и которое потом видит владелец сайта при проверке токена. Значение по-умолчанию: *verify*</p><p>Пример в html:<br/>*grecaptcha.execute('site_key', {action:'login_test'})*.</p>|

## **Пример запроса**

**Адрес** <https://api.capmonster.cloud/createTask>

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

**Пример ответа**

```json
{
  "errorId":0,
  "taskId":407533072
}
```
## **Получение результата**
Используйте метод [getTaskResult](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) чтобы получить решение ReCaptcha3. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 30 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|gRecaptchaResponse|String|Хеш который необходимо подставить в форму с ReCaptcha3 в  `<textarea id="g-recaptcha-response" ></textarea>` . Имеет длину от 500 до 2190 байт.|

**Пример:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```