---
sidebar_position: 7
---
# Problemas de aceitação de token

Se você encontrar problemas com a aceitação de tokens, entre em contato com nossa equipe de suporte. Tomaremos rapidamente as ações necessárias para resolver o problema.

## O que fazer se um site aceitar apenas uma parte dos tokens do CapMonster Cloud?

## Descrição

Você recebe um token do CapMonster Cloud e o envia para um site, mas o site o rejeita. Às vezes, o site pode aceitar o token, por exemplo, em um caso a cada 10 (a taxa de sucesso no seu caso pode ser diferente). O bloqueio ou a rejeição de tokens pode ocorrer devido a solicitações frequentes de um único endereço IP ou devido à baixa qualidade do captcha (ruído na imagem). Além disso, alguns sites podem usar atualizações dinâmicas de captcha ou adicionar verificações adicionais sem aviso prévio. Nesse caso, o parâmetro `nocache` pode ajudar.

---

## Como passar um parâmetro?

### Via chave API

:::caution
Será aplicado a todos os captchas enviados.
:::

Nas configurações do software utilizado, adicione o parâmetro nocache, com um duplo sublinhado, no final da chave API:

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
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### Ao criar uma tarefa usando a API RuCaptcha (via parâmetros de URL)

Adicione `nocache=1` à URL.

:::tip
No exemplo abaixo, o parâmetro é adicionado ao final.
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## Para quais tipos de captcha este parâmetro se aplica?

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
- [HCaptcha](../captchas/hcaptcha-task.mdx)