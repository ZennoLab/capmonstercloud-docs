---
sidebar_position: 17
sidebar_label: BasiliskTask
---
# Basilisk - FaucetPay Captcha
:::warning **Внимание!**
Данная задача будет выполняться с использованием наших прокси-серверов.
:::
## **Структура объекта**
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :- | 
|type|String|да|**CustomTask**|
|class|String|да|**Basilisk**|
|websiteURL|String|да|Адрес основной страницы, на которой решается капча.|
|websiteKey|String|да|Можно найти в html коде в атрибуте **data-sitekey** контейнера с капчей или в payload POST-запроса на `https://basiliskcaptcha.com/challenge/check-site` в поле **site_key**|
|userAgent|String|нет|User-Agent браузера. **Передавайте только актуальный UA от ОС Windows. Сейчас таковым является 124 версия**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36`|
## **Пример запроса**
**Адрес:** 
```http
https://api.capmonster.cloud/createTask
```
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "CustomTask",
        "class": "Basilisk",
        "websiteURL": "https://domain.io/account/register",
        "websiteKey": "b7890hre5cf2544b2759c19fb2600897",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
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
Используйте метод [getTaskResult](../api/methods/get-task-result), чтобы получить решение Basilisk.
**Пример ответа:**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
       "data": {
            "captcha_response": "5620301f30daf284b829fba66fa9b3d0"
        },
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        }
    }
}
```
