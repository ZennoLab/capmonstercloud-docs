---
sidebar_position: 4
sidebar_label: Начальные настройки
---

# Начальные настройки при установке расширения через пакет
При установке расширения через пакет, есть возможность задать начальные параметры, с которыми будет работать расширение. Для этого необходимо распаковать пакет и отредактировать файл defaultSettings.json, после чего обратно запаковать.
### **Описание файла настроек defaultSettings.json**
Файл настроек выглядит следующим образом:

```json title="defaultSettings.json"
{
  "isEnabled": true,
  "clientKey": "",
  "captchaList": [
    "ReCaptcha2",
    "ReCaptcha3",
    "ReCaptchaEnterprise",
    "FunCaptcha",
    "HCaptcha",
    "GeeTest",
    "ImageToText",
    "Turnstile"
  ],
  "captchaExtra": {
    "ReCaptcha2": 1,
    "HCaptcha": 1,
    "FunCaptcha": 1
  },
  "repeatsCount": 0,
  "isEnabledIgnoreList": false,
  "ignoreList": [],
  "proxy": {
    "isEnabled": false,
    "type": "http",
    "address": "",
    "port": 3128,
    "login": "",
    "password": ""
  },
  "manualResolving": false
}
```

|**Ключ**|**Тип**|**Описание**|
| :-: | :-: | :-: |
|isEnabled|`Boolean`|Включено расширение по умолчанию или нет|
|clientKey|`String`|API key|
|captchaList|Array(String)|Список капч, которые включены (По умолчанию все капчи включены)|
|captchaExtra|Array({(String): 1 | 0})|Список капч, у которых есть возможность решения кликами (Token - 0, Click - 1)|
|repeatsCount|`Number`|Количество повторных решений после ошибки|
|isEnabledIgnoreList|Boolean|Включен ли черный список сайтов, указанный в поле ignoreList|
|ignoreList|Array(String)|Список сайтов для игнорирования решения|
|proxy|`Object`|Настройки прокси|
|manualResolving|`Boolean`|Включено ли ручное распознавание|

