---
sidebar_position: 7
---
# Проблемы принимаемости токенов

## Что делать, если сайт принимает только часть токенов из CapMonster Cloud?

## **Описание**

Вы получаете токен от CapMonster Cloud, отправляете его сайту, но последний его отклоняет. При чём иногда сайт может принять токен, например, в одном случае из 10 (процент успеха в Вашем случае может быть другим).
В этом случае Вам может помочь параметр nocache

---

## **Как передать параметр?**

### **Через API ключ**

:::caution
Будет применено ко всем отправляемым капчам.
:::

В настройках используемого софта допишите параметр nocache, через двойное подчёркивание, в самом конце API ключа:

dce6bcbb1a728ea8d871de6d169a2057\_\_nocache

### **При запросе к createTask**

:::tip
Обратите внимание на свойство *nocache* у объекта *task*
:::

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",

  "task": {
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2\\_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI\\_iqRyTwd",
    "nocache": true

  }
}
```

### **При создании задания по API Rucaptcha (через URL параметры)**

В URL надо добавить nocache=1

В примере ниже параметр добавлен в самый конец.

`http://api.capmonster.cloud/in.php?key=dce6bcbb1a728ea8d871de6d169a2057&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI\_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2\_simple.php?level=high&nocache=1`

---

## **К каким типам капчи применим параметр?**

- RecaptchaV2 ([с прокси](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/680460291/NoCaptchaTask+Google) и [без них](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/240648206/NoCaptchaTaskProxyless+Google))
- [RecaptchaV3](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/566493185/RecaptchaV3TaskProxyless+Google+3)
- Hcaptcha ([с прокси](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/1203601411/HCaptchaTask+hCaptcha) и [без них](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/1203273729/HCaptchaTaskProxyless+hCaptcha))
- Funcaptcha ([с прокси](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/725319857/FunCaptchaTask+FunCaptcha) и [без них](https://zennolab.atlassian.net/wiki/spaces/APIS/pages/636813317/FunCaptchaTaskProxyless+FunCaptcha))
