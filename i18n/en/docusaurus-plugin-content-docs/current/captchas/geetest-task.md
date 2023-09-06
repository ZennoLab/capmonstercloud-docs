---
sidebar_position: 5
sidebar_label: GeeTest
---

# GeeTestTask: решение каптчи GeeTest
Этот тип задач используется для решения каптчи GeeTest с использованием Ваших прокси.
Ваше приложение должно прислать адрес сайта, публичный ключ домена (gt), ключ (challenge) и прокси.

Результатом решения задачи является три или пять токенов для сабмита формы.

:::warning **Внимание!**
Прокси с авторизацией по IP пока не поддерживаются.
:::

## **Структура объекта**

:::info
- Параметры gt, challenge и geetestApiServerSubdomain чаще всего находятся внутри JavaScript функции initGeetest.
- Также, эти параметры можно получить из HTML кода страницы. Их можно найти в блоке <sсript>, который появляется после полной загрузки страницы в браузере.
  V3

![](Aspose.Words.09e28b99-ec8b-4638-848b-cdd6fefc7ac8.001.png)

V4 (captcha\_id = gt)

![](Aspose.Words.09e28b99-ec8b-4638-848b-cdd6fefc7ac8.002.png)
:::
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**GeeTestTaskProxyless** или **GeeTestTask (При использовании прокси)**|
|websiteURL|String|да|Адрес страницы на которой решается каптча|
|gt|String|да|Ключ-идентификатор GeeTest для домена. Статическое значение, редко обновляется.<br />Если v4 то это параметр clientId|
|challenge|String|да, только для V3|<p>Меняющийся ключ.<br />При каждом обращении к нашему API нужно получать новое значение ключа. Если каптча загружена на странице, то значение challenge уже недействительно и Вы получите в ответ [ошибку](file:///C:/wiki/spaces/APIS/pages/295310) ERROR\_TOKEN\_EXPIRED.</p><p>За задачи с ошибкой ERROR\_TOKEN\_EXPIRED плата взимается как за успешно решённые задачи.</p><p>Нужно изучить запросы и найти тот, в котором возвращается это значение и перед каждым созданием задачи на распознавания выполнять этот запрос и парсить challenge из него.</p>|
|geetestApiServerSubdomain|String|нет|Необязательный параметр. <br />Может потребоваться для некоторых сайтов.|
|geetestGetLib|String|нет|Необязательный параметр. Может потребоваться для некоторых сайтов. <br />Отправляйте JSON в виде строки.|
|version|Integer|нет|Номер версии (по умолчанию равен 3). Возможные значения: 3, 4.|
|initParameters|Object|нет|Дополнительные параметры для 4 версии.|
|proxyType|String|да (При использовании **GeeTestTask**)|**http** - обычный http/https прокси<br />**https** - попробуйте эту опцию только если "http" не работает (требуется для некоторых кастомных прокси)<br />**socks4** - socks4 прокси<br />**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **GeeTestTask**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **GeeTestTask**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|userAgent|String|нет|User-Agent браузера, используемый для решения каптчи.|
## **GeeTest V3**
### **Пример запроса**

:::info Метод
<https://api.capmonster.cloud/createTask>
:::

### GeeTestTask (С использованием прокси)

```json 
{
  "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
  "task": {
    "type":"GeeTestTask",
    "websiteURL":"https://example.com/geetest.php",
    "gt":"81dc9bdb52d04dc20036dbd8313ed055",
    "challenge":"d93591bdf7860e1e4ee2fca799911215",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
  }
}
```
### GeeTestTaskProxyless (Без использования прокси)
```json
{
    "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
    "task":
    {
        "type":"GeeTestTaskProxyless",
        "websiteURL":"https://example.com/geetest.php",
        "gt":"81dc9bdb52d04dc20036dbd8313ed055",
        "challenge":"d93591bdf7860e1e4ee2fca799911215"
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

### **Получение результата**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) чтобы получить решение GeeTest. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 30 с.

<table><tr><th><b>Свойство</b></th><th><b>Тип</b></th><th><b>Описание</b></th></tr>
<tr><td>challenge</td><td>Строка</td><td rowspan="3">Все три параметра необходимы при отправке формы на целевом сайте.</td></tr>
<tr><td>validate</td><td>Строка</td></tr>
<tr><td>seccode</td><td>Строка</td></tr>
</table>

**Пример:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "challenge":"0f759dd1ea6c4wc76cedc2991039ca4f23",
    "validate":"6275e26419211d1f526e674d97110e15",
    "seccode":"510cd9735583edcb158601067195a5eb|jordan"
  }
}
```

## **GeeTest V4**
### **Пример запроса**
:::info Метод
<https://api.capmonster.cloud/createTask>
:::

### GeeTestTask (С использованием прокси)
```json
{
  "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
  "task": {
    "type":"GeeTestTaskProxyless",
    "websiteURL":"https://example.com/geetest.php",
    "gt":"81dc9bdb52d04dc20036dbd8313ed055",
    "version": 4,
    "initParameters": {
      "riskType": "slide"
    },
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
  }
}
```
### GeeTestTaskProxyless (Без использования прокси)
```json
{
    "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
    "task":
    {
        "type":"GeeTestTaskProxyless",
        "websiteURL":"https://example.com/geetest.php",
        "gt":"81dc9bdb52d04dc20036dbd8313ed055",
        "version": 4,
        "initParameters": {
          "riskType": "slide"
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

### **Получение результата**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) чтобы получить решение GeeTest. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 30 с.

<table><tr><th><b>Свойство</b></th><th><b>Тип</b></th><th><b>Описание</b></th></tr>
<tr><td>captcha_id</td><td>Строка</td><td rowspan="5">Все пять параметров необходимы при отправке формы на целевом сайте.<br />input[name=captcha_id]<br />input[name=lot_number]<br />input[name=pass_token]<br />input[name=gen_time]<br />input[name=captcha_output]</td></tr>
<tr><td>lot_number</td><td>Строка</td></tr>
<tr><td>pass_token</td><td>Строка</td></tr>
<tr><td>gen_time</td><td>Строка</td></tr>
<tr><td>captcha_output</td><td>Строка</td></tr>
</table>

**Пример:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "captcha_id":"f5c2ad5a8a3cf37192d8b9c039950f79",
    "lot_number":"bcb2c6ce2f8e4e9da74f2c1fa63bd713",
    "pass_token":"edc7a17716535a5ae624ef4707cb6e7e478dc557608b068d202682c8297695cf",
    "gen_time":"1683794919",
    "captcha_output":"XwmTZEJCJEnRIJBlvtEAZ662T...[cut]...SQ3fX-MyoYOVDMDXWSRQig56"
  }
}
```
