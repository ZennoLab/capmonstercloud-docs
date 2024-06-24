---
sidebar_position: 16
sidebar_label: AmazonTask
---

# AmazonTask | AWS WAF Captcha and Challenge
Решение капчи и челленджа в AWS WAF
:::warning **Внимание!**
Данная задача будет выполняться с использованием наших прокси-серверов. 
:::
## **Структура объекта**
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :- | 
|type|String|да|**AmazonTaskProxyless**|
|websiteURL|String|да|Адрес основной страницы, на которой решается капча.|
|challengeScript|String|да|Ссылка на challenge.js (см. описание под таблицей)|
|captchaScript|String|да|Ссылка на captcha.js (см. описание  под таблицей)|
|websiteKey|String|да|Строка, которую можно получить из html страницы с капчей или с помощью javascript, выполнив `window.gokuProps.key`|
|context|String|да|Строка, которую можно получить из html страницы с капчей или с помощью javascript, выполнив `window.gokuProps.context`|
|iv|String|да|Строка, которую можно получить из html страницы с капчей или с помощью javascript, выполнив `window.gokuProps.iv`|
|cookieSolution|Boolean|нет|По умолчанию **false**. Если вам требуются куки "aws-waf-token", то укажите значение **true**. Иначе в ответ вы получите "captcha_voucher" и "existing_token".|
### Как получить параметры websiteKey, context, iv и challengeScript
При переходе на сайт вы получаете ответ 405 и html страницу с капчей. Именно из неё можно достать все параметры:
![](aws1.png) 
![](aws2.png) 
## **Пример запроса**
:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "AmazonTaskProxyless",
        "websiteURL": "https://efw47fpad9.execute-api.us-east-1.amazonaws.com/latest",
        "challengeScript": "https://41bcdd4fb3cb.610cd090.us-east-1.token.awswaf.com/41bcdd4fb3cb/0d21de737ccb/cd77baa6c832/challenge.js",
        "captchaScript": "https://41bcdd4fb3cb.610cd090.us-east-1.captcha.awswaf.com/41bcdd4fb3cb/0d21de737ccb/cd77baa6c832/captcha.js",
        "websiteKey": "AQIDA...wZwdADFLWk7XOA==",
        "context": "qoJYgnKsc...aormh/dYYK+Y=",
        "iv": "CgAAXFFFFSAAABVk",
        "cookieSolution": true
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
Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение AmazonTask.

**Пример ответа:**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
        "cookies": {
            "aws-waf-token": "10115f5b-ebd8-45c7-851e-cfd4f6a82e3e:EAoAua1QezAhAAAA:dp7sp2rXIRcnJcmpWOC1vIu+yq/A3EbR6b6K7c67P49usNF1f1bt/Af5pNcZ7TKZlW+jIZ7QfNs8zjjqiu8C9XQq50Pmv2DxUlyFtfPZkGwk0d27Ocznk18/IOOa49Rydx+/XkGA7xoGLNaUelzNX34PlyXjoOtL0rzYBxMAQy0D1tn+Q5u97kJBjs5Mytqu9tXPIPCTSn4dfXv5llSkv9pxBEnnhwz6HEdmdJMdfur+YRW1MgCX7i3L2Y0/CNL8kd8CEhTMzwyoXekrzBM="
        },
        "userAgent": "userAgentPlaceholder"
    }
}
```