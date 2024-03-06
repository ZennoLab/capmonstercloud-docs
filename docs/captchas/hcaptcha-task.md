---
sidebar_position: 4
sidebar_label: HCaptchaTask
---

# HCaptchaTask
Объект содержит данные о задаче на решение hCaptcha. Для обеспечения универсальности решения этого вида каптчи нам необходимо использовать все данные, которые Вы используете во время автоматизации заполнения формы на целевом сайте, включая прокси, user-agent браузера и cookies. Это позволит избежать любых проблем при изменении кода hCaptcha.

Каптча может решаться довольно долго по сравнению с обычной каптчей, но это компенсируется тем, что полученный g-captcha-response действует еще 60 секунд после решения каптчи.

**Важно!** Если у вас возникли проблемы с принятием токена hcaptcha, свяжитесь с службой поддержки CapMonster Cloud, указав url и sitekey. Мы постараемся решить данную проблему как можно скорее.

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**HCaptchaTaskProxyless** или **HCaptchaTask (При использовании прокси)**.|
|websiteURL|String|да|Адрес страницы на которой решается капча.|
|websiteKey|String|да|Ключ-идентификатор hCaptcha на целевой странице.|
|isInvisible|Bool|нет|true, если hCaptcha невидимая.|
|data|String|нет|<p>Дополнительный параметр, используемый в основном с `isInvisible=true`.</p>|
|proxyType|String|да (При использовании **HCaptchaTask**)|**http** - обычный http/https прокси<br />**https** - попробуйте эту опцию только если "http" не работает (требуется для некоторых кастомных прокси)<br />**socks4** - socks4 прокси<br />**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **HCaptchaTask**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **HCaptchaTask**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|userAgent|String|нет|**Передавайте только актуальный UA от ОС Windows. Сейчас таковым является 121 версия: “Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36”**|
|cookies|String|нет|<p>Дополнительные cookies которые мы должны использовать во время взаимодействия с целевой страницей.</p><p>**Формат**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|
|fallbackToActualUA|Bool|нет|<p>**true** - при указании данного параметра мы игнорируем неактуальный User Agent, который отправляют в запросе пользователи, и возвращаем с getTaskResult свой (актуальный). Это позволит улучшить принимаемость токенов.</p><p>**false** - мы подставляем User Agent, который указан в запросе. Если User Agent неактуален, то получите ошибку ERROR_WRONG_USERAGENT (USERAGENT IS EXPIRED в логе).</p>|

**Поддерживаемые типы**
<p>Поддерживаются следующие типы заданий:</p>

|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.001.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.002.png)|
| :- | :- |
|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.003.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.004.png)|
|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.005.png)|![](Aspose.Words.fa5d4495-c9e9-41f5-8cb9-c4b900b4bbcf.006.png)|
|![](25940532.png)|

## **Пример запроса**

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
### HCaptchaTask (С использованием прокси)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"HCaptchaTask",
        "websiteURL":"https://lessons.zennolab.com/captchas/hcaptcha/?level=easy",
        "websiteKey":"472fc7af-86a4-4382-9a49-ca9090474471",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "fallbackToActualUA":true,
        "proxyType":"http",
        "proxyAddress":"8.8.8.8",
        "proxyPort":8080,
        "proxyLogin":"proxyLoginHere",
        "proxyPassword":"proxyPasswordHere"
    }
}
```
### HCaptchaTaskProxyless (Без использования прокси)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"HCaptchaTaskProxyless",
        "websiteURL":"https://lessons.zennolab.com/captchas/hcaptcha/?level=easy",
        "websiteKey":"472fc7af-86a4-4382-9a49-ca9090474471",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "fallbackToActualUA":true
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
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение hCaptcha. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 80 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|gRecaptchaResponse|String|Хеш который необходимо подставить в форму с hCaptcha.|
|userAgent|String|Необходимо использовать при сабмите тот же *User Agent*, c которым решалась hCaptcha.|
|respKey|String|Результат функции "window.hcaptcha.getRespKey()" когда она доступна. Часть сайтов используют данное значение для дополнительной проверки.|


**Пример:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse": "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hKdwYXNza2V5xQb9JvlblBqjTdKpourvlRNpOZLvJb0yJRmsXVFVjyxFWlL1wdYBXaPyFtnxwy2ukbMgwWn62-cjSc98Iw2XIPYWg5MNDKS4_7tBIhjY0PienoKy1...",
    "respKey": "E0_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoidjQ3RjlqZGFYTllFQXlZZFYyRTlaWlBVQUdLaFpPakpRNjBXRTljVW40VnY3NnhuN2V3R0wwVWd1MW1Wai90WEdoYmt5a2NqVGlGdWpsSlpmVjcza...",
    "userAgent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  }
}
```
