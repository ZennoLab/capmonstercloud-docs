---
sidebar_position: 14
sidebar_label: DataDome
---

# DataDome

:::warning **Внимание!**
Данная задача будет выполняться с использованием наших прокси-серверов. Используйте полученные куки в своём проекте, чтобы автоматически пройти капчу.
:::

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: | 
|type|String|да|**CustomTask**|
|class|String|да|**DataDome**|
|websiteURL|String|да|Адрес основной страницы, на которой решается капча|
|metadata|Object|да|Объект, который содержит дополнительные данные о капче - captchaUrl: `"captchaUrl": "..."` <br /> Ссылку можно взять со страницы с капчей. Зачастую имеет вид `https://geo.captcha-delivery.com/captcha/?initialCid=...`|
|userAgent|String|нет|User-Agent браузера.<br /> **Передавайте только актуальный UA от ОС Windows. Сейчас таковым является 120 версия**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36`|

## **Пример запроса**

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
        "websiteURL": "site.com",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "metadata": {
            "captchaUrl": "https://geo.captcha-delivery.com/captcha/?initialCid=12434324"
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
Используйте метод [getTaskResult](../api/methods/get-task-result), чтобы получить решение DataDome.

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
    },
    "status": "ready"
}
```
