---
sidebar_position: 6
sidebar_label: TurnstileTask
---

# TurnstileTask | Cloudflare Challenge
Автоматически поддерживаются все подтипы Turnstile: manual, non-interactive и invisible. Поэтому нет необходимости указывать подтип для обычной капчи.
:::caution Внимание
Если вы решаете Turnstile на страницах cloudflare 5s challenge, то не забывайте указывать `cloudflareTaskType` и связанные с ним поля. userAgent указывать **обязательно**.
:::
### **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**TurnstileTaskProxyless** или **TurnstileTask (При использовании прокси)**|
|websiteURL|String|да|Адрес страницы, на которой решается капча|
|websiteKey|String|да|Ключ Turnstile|
|proxyType|String|да (При использовании **TurnstileTask**)|**http** - обычный http/https прокси<br/>**https** - попробуйте эту опцию, только если "http" не работает (требуется для некоторых кастомных прокси)<br/>**socks4** - socks4 прокси<br/>**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **TurnstileTask**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там, где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **TurnstileTask**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|cloudflareTaskType|String|нет|**cf_clearance** - если требуются куки;<br/>**token** - если требуется токен от Turnstile|
|htmlPageBase64|String|да, если *cloudflareTaskType* равен* **cf_clearance**|Закодированная в base64 html страница с капчей.|
|userAgent|String|да, если указан *cloudflareTaskType*|Поддерживаются только последние UA от Chrome.|
|pageAction|String|да, если *cloudflareTaskType* равен* **token**|Поле `action`, которое можно найти в callback функции для загрузки капчи.<br/>Если используется *cloudflareTaskType*, то `action` обычно “managed“ или “non-interactive“.|
|data|String|да, если *cloudflareTaskType* равен* **token**|Значение поля *data* можно взять из параметра `cData`.|
|pageData|String|да, если *cloudflareTaskType* равен* **token**|Значение поля *pageData* можно взять из параметра `chlPageData`.|

Прокси для получения токена передавать не обязательно.

Эти параметры находятся в объекте, который передаётся во время создания капчи в функцию `window.turnstile.render(el, paramsObj)`. Получить их можно, например, с помощью выполнения JavaScript перед загрузкой остальных скриптов:

```js
(function () {
  const obj = {
    render: function () {
      const { action, cData, chlPageData } = arguments[1];
        const params = [
          ["action", action],
          ["data", cData],
          ["pageData", chlPageData],
        ];
        console.table(params)
    }
  };

  Object.defineProperty(window, "turnstile", {
    get: () => {
      return obj;
    },
  });
})();
```



## **Обычный Turnstile:**
### **Пример запроса**
:::info Метод
<https://api.capmonster.cloud/createTask>
:::

### TurnstileTask (С использованием прокси)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"http://tsmanaged.zlsupport.com",
    "websiteKey":"0x4AAAAAAABUYP0XeMJF0xoy",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere"
  }
}
```
### TurnstileTaskProxyless (Без использования прокси)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"TurnstileTaskProxyless",
        "websiteURL":"http://tsmanaged.zlsupport.com",
        "websiteKey":"0x4AAAAAAABUYP0XeMJF0xoy"
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

## **Cloudflare challenge**
### **Пример запроса**
:::info Метод
<https://api.capmonster.cloud/createTask>
:::

### TurnstileTask (С использованием прокси)
```json 
  {
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"https://nowsecure.nl",
    "websiteKey":"0x4AAAAAAADnPIDROrmt1Wwj",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "cloudflareTaskType": "cf_clearance",
    "htmlPageBase64": "PCFET0NUWVBFIGh0...vYm9keT48L2h0bWw+",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  }
}
```

### TurnstileTaskProxyless (Без использования прокси)
```json 
  {
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"https://nowsecure.nl",
    "websiteKey":"0x4AAAAAAADnPIDROrmt1Wwj",
    "cloudflareTaskType": "cf_clearance",
    "htmlPageBase64": "PCFET0NUWVBFIGh0...vYm9keT48L2h0bWw+",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  }
}
```

## **Получение результата**
Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение Turnstile. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 5 до 20 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|cf_clearance|String|Специальные куки cloudflare, которые вы можете подставить в свой браузер|
|token|String|Используйте токен при вызове callback функции|
## **Когда нужно указывать cloudflareTaskType, а когда нет? Или как отличить обычный Turnstile от Cloudflare Challenge.**
Cloudflare challenge может выглядеть по-разному. 

**Обычный вариант:**

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.001.png) 

**Стилизованные варианты:**

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.002.png) 

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.003.png) 

Чтобы окончательно убедиться в наличии Cloudflare, можно открыть инструменты разработчика, посмотреть трафик, изучить код страницы и увидеть характерные признаки:

- Первый запрос к сайту возвращает код 403:

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.004.png)

- Форма с id **challenge-form** имеет атрибут **action** (не путать с action из параметров для капчи turnstile), содержащий параметр `__cf_chl_f_tk=`:

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.005.png)

- На странице находится два похожих тега `<script>`, которые создают новое значение в объекте `window`:

![](Aspose.Words.3953d396-96cb-4bd4-a13b-aa5740b71be8.006.png) 