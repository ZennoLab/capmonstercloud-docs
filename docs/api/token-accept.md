---
sidebar_position: 7
---
# Проблемы принимаемости токенов

Если у вас возникают проблемы с принятием токена, пожалуйста, обратитесь в нашу службу поддержки. Мы оперативно примем необходимые меры для решения этой проблемы.

## Что делать, если сайт принимает только часть токенов из CapMonster Cloud?

## Описание

Вы получаете токен от CapMonster Cloud, отправляете его сайту, но последний его отклоняет. Причём иногда сайт может принять токен, например, в 1 случае из 10 (процент успеха в вашем случае может быть другим). Блокировка или отклонение токенов может происходить по причине частых запросов с одного IP-адреса, из-за низкого качества капчи (шум на изображении), также некоторые сайты могут использовать динамическое обновление капчи или добавлять дополнительные проверки без уведомления. В этом случае вам может помочь параметр `nocache`.

---

## Как передать параметр?

### Через API ключ

:::caution
Будет применено ко всем отправляемым капчам.
:::

В настройках используемого софта допишите параметр nocache, через двойное подчёркивание, в самом конце API ключа:

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
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### При создании задания по API Rucaptcha (через URL параметры)

В URL надо добавить `nocache=1`

:::tip
В примере ниже параметр добавлен в самый конец.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## К каким типам капчи применим параметр?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
<!-- - [HCaptcha](../captchas/hcaptcha-task.mdx) --> 