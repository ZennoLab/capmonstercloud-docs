---
sidebar_position: 15
sidebar_label: TenDI
---

# TenDI - Tencent captcha
:::warning **Внимание!**
Данная задача будет выполняться с использованием наших прокси-серверов.
:::
## **Структура объекта**
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :- | 
|type|String|да|**CustomTask**|
|class|String|да|**TenDI**|
|websiteURL|String|да|Адрес основной страницы, на которой решается капча.|
|websiteKey|String|да|captchaAppId. Например `"websiteKey": "189123456"` - уникальный параметр для вашего сайта. Можно взять с html страницы с капчей или из трафика (см. описание ниже).|
|userAgent|String|нет|User-Agent браузера. **Передавайте только актуальный UA от ОС Windows. Сейчас таковым является версия**: `userAgentPlaceholder`|
### Как получить websiteKey(captchaAppId)
Включите инструменты разработчика, перейдите на вкладку Network, активируйте капчу и посмотрите запросы. В некотрых из них будет нужное вам значение параметра. В данном случае `websiteKey=aid`
![](tendi-devtools.png) 
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
        "class": "TenDI",
        "websiteURL": "https://domain.com",
        "websiteKey": "189123456",
        "userAgent": "userAgentPlaceholder"
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
Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение TenDI.
**Пример ответа:**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
       "data": {
            "randstr": "@EcL",
            "ticket": "tr03lHUhdnuW3neJZu.....7LrIbs*"
        },
        "headers": {
            "User-Agent": "userAgentPlaceholder"
        }
    }
}
```
## **Ценообразование**
|**Наименование** |**Стоимость за 1000 распознаваний, $**|
| :-: | :-: |
|TenDI|1,6|
