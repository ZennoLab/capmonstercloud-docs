﻿---
sidebar_position: 7
sidebar_label: Проблемы принимаемости токенов
title: "Метод Token Accept — проверка токенов для капч через API"
description: "Узнайте, как использовать метод Token Accept в API Capmonster Cloud для проверки валидности токенов капч. Подробное описание параметров и примеров."
---

# Проблемы принимаемости токенов

Если у вас возникают проблемы с принятием токена, пожалуйста, обратитесь в нашу службу поддержки. Мы оперативно примем необходимые меры для решения этой проблемы.

## Что делать, если сайт принимает только часть токенов из CapMonster Cloud?

## Описание

Иногда сайт может отклонять токены, полученные от CapMonster Cloud. Это может проявляться по-разному: сайт принимает лишь часть токенов или же иногда принимает их случайным образом. В таких случаях может помочь использование параметра `nocache`, который предотвращает повторное использование старых токенов и повышает шанс их успешного принятия сайтом.

---

## Как передать параметр?

### Через API ключ

:::caution
Будет применено ко всем отправляемым капчам.
:::

Вы можете применить `nocache` ко всем отправляемым капчам, дописав его в конец API-ключа через двойное подчёркивание:

`API_KEY__nocache`

### При запросе к createTask

:::tip
Обратите внимание на свойство *nocache* у объекта *task*
:::

```json
{
  "clientKey":"API_KEY",

  "task": 
  {
    "type":"RecaptchaV2Task",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### При создании задания по API (через URL параметры)

Добавьте `nocache=1` прямо в URL-запросе к API:

:::tip
Параметр nocache добавляется в самый конец URL.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## К каким типам капчи применим параметр?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
<!-- - HCaptcha --> 