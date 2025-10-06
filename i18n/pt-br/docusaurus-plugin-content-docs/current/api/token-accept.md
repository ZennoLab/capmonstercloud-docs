﻿---
sidebar_position: 7
---
# Problemas de aceitação de token

Se você encontrar problemas com a aceitação de tokens, entre em contato com nossa equipe de suporte. Tomaremos rapidamente as ações necessárias para resolver o problema.

## O que fazer se um site aceitar apenas uma parte dos tokens do CapMonster Cloud?

## Descrição

Às vezes, um site pode rejeitar os tokens obtidos pelo CapMonster Cloud. Isso pode ocorrer de diferentes formas: o site pode aceitar apenas parte dos tokens ou aceitá-los de maneira aleatória. Nesses casos, pode ser útil usar o parâmetro `nocache`, que impede a reutilização de tokens antigos e aumenta a chance de que eles sejam aceitos com sucesso pelo site.

---

## Como passar um parâmetro?

### Via chave API

:::caution
Será aplicado a todos os captchas enviados.
:::

Você pode aplicar o parâmetro `nocache` a todas as captchas enviadas, adicionando-o ao final da sua chave de API usando dois sublinhados:

`API_KEY__nocache`

### Ao solicitar createTask

:::tip
Observe a propriedade *nocache* do objeto *task*
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

### Ao criar uma tarefa via API (usando parâmetros na URL)

Adicione `nocache=1` diretamente na URL da requisição à API:

:::tip
O parâmetro `nocache` deve ser adicionado no final da URL.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## Para quais tipos de captcha este parâmetro se aplica?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
<!-- - HCaptcha --> 