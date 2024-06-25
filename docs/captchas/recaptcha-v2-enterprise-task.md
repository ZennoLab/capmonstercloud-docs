---
sidebar_position: 2
sidebar_label: ReCaptchaV2EnterpriseTask
---

# RecaptchaV2EnterpriseTask
Объект содержит данные о задаче на решение ReCaptcha2 от Google версии Enterprise. Для обеспечения универсальности решения этого вида капчи нам необходимо использовать все данные, которые вы используете во время автоматизации заполнения формы на целевом сайте, включая прокси, user-agent браузера и cookies. Это позволит избежать любых проблем при изменении Google кода своей капчи.

Этот тип капчи не имеет визуальных отличий от ReCaptcha v.2, увидеть разницу можно с помощью кода капчи, например, в инструментах разработчика во вкладке “Сеть” в запросах: 

*URL Запроса (anchor): https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Lf26sUnAAAAAIKLuWNYgRsFUfmI-3Lex3xT5N-s&co=aHR0cHM6Ly8yY2FwdGNoYS5jb206NDQz&hl=en&v=1kRDYC3bfA-o6-tsWzIBvp7k&size=normal&cb=43r1q2d3mx66*

Капча может решаться довольно долго по сравнению с обычной капчей, но это компенсируется тем, что полученный g-captcha-response действует еще 60 секунд после решения капчи.

:::warning **Внимание!**
Если прокси с авторизацией по IP, то необходимо обязательно добавить **116.203.55.208** в белый список.
:::

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**RecaptchaV2EnterpriseTaskProxyless** или **RecaptchaV2EnterpriseTask (При использовании прокси)**|
|websiteURL|String|да|Адрес страницы, на которой решается капча|
|websiteKey|String|да|Ключ-идентификатор reCAPTCHA на целевой странице.<br />`<div class="g-recaptcha" data-sitekey="ВОТ_ЭТОТ"></div>`<br/>или `<iframe title="reCAPTCHA" src="...;k=6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH&amp;...` , где `6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH` - `websiteKey`|
|enterprisePayload|String|нет|Некоторые реализации виджета reCAPTCHA Enterprise могут содержать дополнительное поле s в структуре, которая передаётся в метод grecaptcha.enterprise.render вместе с sitekey.Например: `2JvUXHNTnZl1Jb6WEvbDyBMzrMTR7oQ78QRhBcG07rk9bpaAaE0LRq1ZeP5NYa0N` из: `<pre lang="js" ><code>grecaptcha.enterprise.render("some-div-id", {<br /> sitekey: "6Lc_aCMTAAAAABx7u2N0D1XnVbI_v6ZdbM6rYf16"<br/> theme: "dark"<br/> s: "2JvUXHNTnZl1Jb6WEvbDyB...ugQA"<br/>});</code></pre>`|
|apiDomain|String|нет|<p>Адрес домена с которого загружать reCAPTCHA Enterprise. Например:</p><p>- [www.google.com](http://www.google.com)</p><p>- [www.recaptcha.net](http://www.recaptcha.net)</p><p>Не используйте параметр, если не знаете зачем он нужен.</p>|
|proxyType|String|да (При использовании **RecaptchaV2EnterpriseTask**)|**http** - обычный http/https прокси<br />**https** - попробуйте эту опцию только если "http" не работает (требуется для некоторых кастомных прокси)<br />**socks4** - socks4 прокси<br/>**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **RecaptchaV2EnterpriseTask**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **RecaptchaV2EnterpriseTask**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|userAgent|String|нет|User-Agent браузера, используемый в эмуляции. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|cookies|String|нет|<p>Дополнительные cookies которые мы должны использовать во время взаимодействия с целевой страницей.</p><p>**Формат**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

Для `enterprisePayload` - необходимо заменять функцию `grecaptcha.enterprise.render` перед её вызовом на свою и забирать значение из её параметров. Функция существует после загрузки скрипта, а рендерится капча обычно сразу или по событию страницы, если капча отрендерится с текущим полем `s` на клиенте, то токен с большой вероятностью принят не будет.
Оригинальную функцию можно вызывать без поля `s`.

`apiDomain` – это домен, на котором размещается API-интерфейс для взаимодействия с reCAPTCHA, используется для верификации прохождения капчи пользователем. 

<details>
    <summary>Скрипт</summary>

```js
var __test_grc = undefined;

var __test_enterprise = undefined;

var __test_render = undefined;

var __test_render_widget = undefined;

var __test_render_args = undefined; // здесь будет лежать объект, с которым вызывается render.

var __test_handler = {
  get: function(target, name, receiver) {
    if (name == 'enterprise') {
      return __test_enterprise ? __test_enterprise : (__test_enterprise = new Proxy(target[name], __test_handler));
    } else if (name == 'render') {
      __test_render = target[name];
      return (function(a, b) {
        __test_render_args = b;
        __test_render_widget = a;
        return __test_render(a, {sitekey: b.sitekey}); });
    } else {
      return target[name];
    }
  }
};

Object.defineProperty(window, 'grecaptcha', {
  enumerable: true,
  configurable: false,
  get: function() {
    return __test_grc;
  },
  set: function(value) {
    __test_grc = new Proxy(value, __test_handler);
  }
});
```
  </details>





## **Пример запроса**

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::

### RecaptchaV2EnterpriseTask (С использованием прокси)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2EnterpriseTask",
    "websiteURL":"https://mydomain.com/page-with-recaptcha-enterprise",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "enterprisePayload": {
      "s": "SOME_ADDITIONAL_TOKEN"
    },
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"userAgentPlaceholder"
  }
}
```

### RecaptchaV2EnterpriseTaskProxyless (Без использования прокси)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2EnterpriseTaskProxyless",
    "websiteURL":"https://mydomain.com/page-with-recaptcha-enterprise",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "enterprisePayload": {
      "s": "SOME_ADDITIONAL_TOKEN"
    }
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
:::info Метод
`<https://api.capmonster.cloud/getTaskResult>`
:::

Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение ReCaptcha2. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 80 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|gRecaptchaResponse|String|Хеш который необходимо подставить в форму с reCAPTCHA Enterprise в `<textarea id="g-recaptcha-response" ..></textarea>` . Имеет длину от 500 до 2190 байт.|

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
