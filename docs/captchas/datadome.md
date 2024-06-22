---
sidebar_position: 14
sidebar_label: DataDome
---

import UserAgent from '@site/src/components/UserAgent';

# DataDome

Данный тип капчи в основном требует от пользователя решить головоломку, перемещая ползунок для подтверждения. 

![](datadome.png)

:::warning **Внимание!**
Данная задача будет выполняться с использованием наших прокси-серверов. Используйте полученные куки в своём проекте, чтобы автоматически пройти капчу.
:::

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :- | 
|type|String|да|**CustomTask**|
|class|String|да|**DataDome**|
|websiteURL|String|да|Адрес основной страницы, на которой решается капча.|
|metadata.htmlPageBase64|String|да (если не заполнено metadata.captchaUrl)|Объект, который содержит дополнительные данные о капче: `"htmlPageBase64": "..."` - закодированная в base64 html-страница, которая приходит с кодом 403 и заголовком Set-Cookie: datadome="..." в ответ на get-запрос к целевому сайту.|
|metadata.captchaUrl|String|да (если не заполнено metadata.htmlPageBase64)|`"captchaUrl"` - ссылка на капчу. Обычно имеет следующий вид: `"https://geo.captcha-delivery.com/captcha/?initialCid=..."`.|
|metadata.datadomeCookie|String|да|Ваши куки от datadome. Можно получить на странице с помощью "document.cookie" или в заголовке запроса Set-Cookie: "datadome=..." (см. пример запроса /createTask)|
|userAgent|String|нет|User-Agent браузера.<br /> **Передавайте только актуальный UA от ОС Windows. Сейчас таковым является**: userAgentPlaceholder |

## **Пример запроса на реальном сайте**

**Адрес:** 
```http
https://api.capmonster.cloud/createTask
```

```json
{
    "clientKey": "dce6bcbb1a728ea8d871de6d169a2057",
    "task": {
        "type": "CustomTask",
        "class": "DataDome",
        "websiteURL": "https://www.leboncoin.fr/",
        "userAgent": "userAgentPlaceholder",
        "metadata": {
            "htmlPageBase64": "PGh0bWw+PGhlYWQ+PHRpdGxlPmJs...PC9odG1sPg==",
            "datadomeCookie": "datadome=VYUWrgJ9ap4zmXq8Mgbp...64emvUPeON45z"
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
Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение DataDome.

**Пример ответа:**

```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
        "domains": {
            "site.com": {
                "cookies": {
                    "datadome": "t355hfeuUFbsWpoMzXyIWL_ewfwgre25345323rwgregeFEkG5iju9esKVfWMzuLAjcfCIJUIHU7332At1l~HY78g782hidwfeO4K2ZP_CFHYUFEgygfiYGfGYEUfgyefWrXG6_3sy; Max-Age=31536000; Domain=.site.com; Path=/; Secure; SameSite=Lax"
                }
            }
        }
    }
}
```
