﻿---
sidebar_position: 6
---

# Definindo um limite de desconto

## Como definir o limite de confiança na resposta abaixo do qual o dinheiro não será cobrado

Na *CapMonster.Cloud*, a aceitação de captchas depende de sua complexidade. Os clientes pagam apenas por captchas resolvidos corretamente.

Para que o CapMonster.Cloud retorne um resultado garantido correto, você pode passar, juntamente com a solicitação de reconhecimento do captcha, um parâmetro **recognizingThreshold** com um valor entre 0 e 100. Esse parâmetro permite que você defina o limite de confiança do sistema na resposta correta para o captcha e determina o valor mínimo abaixo do qual o dinheiro não será descontado do saldo.

---

### Exemplo

POST
```http
https://api.capmonster.cloud/createTask
```

```json
{

  "task": { 
    ...
    "recognizingThreshold" : 70
  },
  "clientKey":"API_KEY",
  "softId" : 345

}
```
---
Nesse caso, se o parâmetro for igual a 70, apenas respostas em que nosso sistema tem mais de 70% de certeza serão retornadas; caso contrário, será retornado o erro: “**ERROR_CAPTCHA_UNSOLVABLE**”.

Outra maneira de passar um limite é usar apenas o campo para especificar a ApiKey. Você pode adicionar a informação do limite no seguinte formato: `{apikey}__recognizingthreshold_{value}`

Por exemplo, “API_KEY\_\_recognizingthreshold\_70”.

Você também pode inserir o nome do módulo com a chave no seguinte formato: `{apikey}__module-name`.

A chave, o limite de confiança e o nome do módulo são indicados com o sublinhado “\_\_”.

Exemplo: “API_KEY\_\_solvemedia\_\_recognizingthreshold\_70”.

:::note
Se você não conseguir definir o limite de confiança da resposta, entre em contato com nossa **[equipe de suporte](https://helpdesk.zennolab.com/conversation/new)**, nós ajudaremos você a configurá-lo!
:::