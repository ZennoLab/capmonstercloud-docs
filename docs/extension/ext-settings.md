﻿---
sidebar_position: 3
---


# Настройки расширения

## Настройки, доступные для изменения:

|**Ключ**|**Тип**|**Описание**|
| :-: | :-: | :-: |
|`isEnabled`|`Boolean`|Включено расширение по умолчанию или нет|
|`clientKey`|`String`|API key|
|`captchaList`|`Array<String>`|Список капч, которые включены (по умолчанию все капчи включены)|
|`captchaExtra`|`Object<{[String]: 1 / 0}>`|Список капч, которые можно решать кликами (Token - 0, Click - 1)|
|`repeatsCount`|`Number`|Количество повторных решений после ошибки|
|`isEnabledIgnoreList`|`Boolean`|Включен ли черный список сайтов, указанный в поле ignoreList|
|`ignoreList`|`Array<String>`|Список сайтов для игнорирования решения|
|`proxy`|`Object`|Настройки прокси|
|`isManualResolving`|`Boolean`|Включено ли ручное распознавание|
|`delayStartCount`|`Array<{[CaptchaType]: Number}>`|Задержка перед решением капчи|
|`autoClick`|`Array<{[CaptchaType]: Boolean}>`|Включена ли возможность автоматического начала решения капчи|
|`autoSolve`|`Array<{[CaptchaType]: Boolean}>`|Включена ли возможность автоматического решения окна капчи|
|`textCaptchaSaveOnSite`|`Boolean`|Сохранять ли выбранные элементы на сайте для текстовой капчи|
|`delayAfterLoadPage`|`Number`|Задержка перед началом решения текстовой капчи, если она была сохранена для сайта |
|`recaptchaClickSelector`|`String`|DOM Селектор элемента для нажатия при начале решения Recaptcha|
|`hCaptchaClickSelector`|`String`|DOM Селектор элемента для нажатия при начале решения hCaptcha|
|`globalVariable`|`String`|Название поля для взаимодействия с расширением через глобальный объект|

Есть несколько путей изменения настроек расширения:
1. Перед установкой расширения
1. Когда расширение уже установлено

## Изменение настроек перед установкой

При установке расширения через пакет, есть возможность задать начальные параметры, с которыми будет работать расширение. Для этого необходимо распаковать пакет и отредактировать файл defaultSettings.json, после чего обратно запаковать.

### **Описание файла настроек defaultSettings.json**
Файл настроек выглядит следующим образом:

```json title="defaultSettings.json"
{
    "isEnabled": true,
    "clientKey": "",
    "captchaList": ["FunCaptcha"],
    "captchaExtra": {
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
    "isManualResolving": false,
    "delayAfterLoadPage": 2,
    "recaptchaClickSelector": ".recaptcha-checkbox-checkmark",
    "hCaptchaClickSelector": "div#checkbox",
    "globalVariable": "BroCapExtension",
    "delayStartCount": {
        "FunCaptcha": 0
    },
    "autoClick": {
        "FunCaptcha": true
    },
    "autoSolve": {
        "FunCaptcha": true
    },
    "delayBetweenClickEnabled": {
        "FunCaptcha": false
    },
    "delayBetweenClickValue": {
        "FunCaptcha": 0
    }
}
```
## Измeнение настроек с помощью JS

После инициализации расширения на текущей активной странице у нас появляется глобальный объект который задается в настройках расширения, по умолчанию BroCapExtension, с помощью которого мы можем манипулировать настройками расширения.

Помните, что обработчики перехвата событий навешаны на сами свойства, а не на данные внутри.
### **Пример:**
```js
window.BroCapExtension.isEnabled = false;
```
### **Пример:**
```js
window.addEventListener("onCMExtensionReady", () => {
  // DO SOMETHING
})
```
