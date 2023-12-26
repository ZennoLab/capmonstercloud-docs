---
sidebar_position: 0
sidebar_label: RecaptchaV2Task
---

# RecaptchaV2Task
Объект содержит данные о задаче на решение ReCaptcha2 от Google. Для обеспечения универсальности решения этого вида каптчи нам необходимо использовать все данные, которые Вы используете во время автоматизации заполнения формы на целевом сайте, включая прокси, user-agent браузера и cookies. Это позволит избежать любых проблем при изменении Google кода своей каптчи.

Каптча может решаться довольно долго по сравнению с обычной каптчей, но это компенсируется тем, что полученный g-captcha-response действует еще 60 секунд после решения каптчи.

:::warning **Внимание!**
Если прокси с авторизацией по IP, то необходимо обязательно добавить **116.203.55.208** в белый список.
:::

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**RecaptchaV2TaskProxyless** или **RecaptchaV2Task (При использовании прокси)**|
|websiteURL|String|да|Адрес страницы, на которой решается каптча|
|websiteKey|String|да|Ключ-идентификатор ReCaptcha2 на целевой странице.<br />`<div class="g-recaptcha" data-sitekey="ВОТ_ЭТОТ"></div>`|
|recaptchaDataSValue|String|нет|Некоторые реализации виджета ReCaptcha2 могут содержать дополнительный параметр "data-s" в div'е ReCaptcha2, который является одноразовым токеном и должен собираться каждый раз при решении ReCaptcha2.<br />`<div class="g-recaptcha" data-sitekey="some sitekey" data-s="ВОТ_ЭТОТ"></div>`|
|proxyType|String|да (При использовании **RecaptchaV2Task**)|**http** - обычный http/https прокси<br />**https** - попробуйте эту опцию только если "http" не работает (требуется для некоторых кастомных прокси)<br />**socks4** - socks4 прокси<br />**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **RecaptchaV2Task**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **RecaptchaV2Task**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|userAgent|String|нет|User-Agent браузера, используемый в эмуляции. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|cookies|String|нет|<p>Дополнительные cookies которые мы должны использовать во время взаимодействия с целевой страницей.</p><p>**Формат**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Пример запроса**

**Адрес** 
```http
https://api.capmonster.cloud/createTask
```

### RecaptchaV2Task
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2Task",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36"
  }
}
```

### RecaptchaV2TaskProxyless
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2TaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
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
Используйте метод [getTaskResult](../api/methods/get-task-result) чтобы получить решение ReCaptcha2. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 80 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|gRecaptchaResponse|String|Хеш который необходимо подставить в форму с ReCaptcha2 в `<textarea id="g-recaptcha-response" ..></textarea>` . Имеет длину от 500 до 2190 байт.|

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