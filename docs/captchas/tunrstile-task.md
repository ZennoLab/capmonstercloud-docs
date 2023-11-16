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

![](turnstile-simple.png) 

**Стилизованные варианты:**

<figure>

![](turnstile-stylized.png)
<figcaption>Челлендж органично встроен в сам сайт</figcaption>

</figure>

<figure>

![](turnstile-stylized-2.png) 
<figcaption>Выглядит как обычная капча turnstile, но на самом деле это challenge</figcaption>

</figure>

Чтобы окончательно убедиться в наличии Cloudflare, можно открыть инструменты разработчика, посмотреть трафик, изучить код страницы и увидеть характерные признаки:

- Первый запрос к сайту возвращает код 403:

![](b61dae70-f056-4257-ab72-05beacb27a0d.png)

- Форма с id **challenge-form** имеет атрибут **action** (не путать с action из параметров для капчи turnstile), содержащий параметр `__cf_chl_f_tk=`:

![](1e4dc39f-0a4a-4c29-a48d-abc7a2ec6380.png)

- На странице находится два похожих тега `<script>`, которые создают новое значение в объекте `window`:

![](gif.gif) 

<details>
        <summary>Пример реализации решения с помощью Selenium на Node.js</summary>

```js

const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  const options = new chrome.Options();
  options.addArguments('--auto-open-devtools-for-tabs')

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    driver.executeScript(`
    window.turnstile = new Proxy(window.turnstile, {
      get(target, prop) {
        if (prop === 'render') {
          return function(a, b) {
            let p = {
              type: "TurnstileTaskProxyless",
              websiteKey: b.sitekey,
              websiteURL: window.location.href,
              data: b.cData,
              pagedata: b.chlPageData,
              action: b.action,
              userAgent: navigator.userAgent
          }
          
          console.log(JSON.stringify(p))
          window.params = p;
          window.turnstileCallback = b.callback;
            return target.render.apply(this, arguments);
          }
        }
        return target[prop];
      }
    });
    `)

    driver.get('SITE WITH CAPTCHA');
    

    const params = await driver.executeScript(`
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(window.params)
        }, 2000)
      })
    `);

    if (params) {
      const data = {
        clientKey: 'API KEY',
        task: {
          type: 'TurnstileTaskProxyless',
          websiteURL: params.websiteURL,
          websiteKey: params.websiteKey,
          data: params.data,
          action: params.action
        }
      }

      const createResult = await fetch('https://api.capmonster.cloud/createTask', {
        method: 'post',
        body: JSON.stringify(data)
      });

      const createTaskResult = await createResult.json()

      if (createTaskResult.taskId) {
        const asyncDelay = (timeout) =>
          new Promise(resolve => {
              setTimeout(() => {
                  resolve();
              }, timeout);
          });
        
        const getTaskResult = async (taskId) => {
          const taskResult = await fetch('https://api.capmonster.cloud/getTaskResult', {
            method: 'post',
            body: JSON.stringify({
              "clientKey":"API KEY",
              "taskId": createTaskResult.taskId
            })
          });
          const taskResponse = await taskResult.json();
          if (taskResponse.status === 'processing') {
            await asyncDelay(5000);
            return await getTaskResult(taskId)
          }
          return taskResponse;
        }
       
        const taskRes = await getTaskResult(createTaskResult.taskId)

        if (taskRes.solution) {
          await driver.executeScript(`
            window.turnstileCallback(${taskRes.solution.token});
          `);
        }
      }
      
    }

    //DO SOMETHING
  } finally {
    await driver.quit();
  }
})();

```

</details>