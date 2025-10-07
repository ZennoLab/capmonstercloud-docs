﻿---
sidebar_position: 1
sidebar_label: getTaskResult
title: "getTaskResult: como obter o resultado de uma tarefa de resolução de captcha"
description: "Saiba como usar o método getTaskResult na API CapMonster Cloud para obter o resultado de uma tarefa. Descrição detalhada dos parâmetros, respostas e exemplos de requisição. Solução rápida e prática de captchas online!"
---

# getTaskResult : obter o resultado da tarefa

## **Descrição**

Após criar uma tarefa, é necessário verificar periodicamente seu status para obter o resultado final.

:::info Endereço do método

```http
https://api.capmonster.cloud/getTaskResult
```

Formato da requisição: `JSON POST`
:::

:::caution
Limite: 120 solicitações por tarefa. Se o limite for excedido, a conta do usuário poderá ser bloqueada temporariamente.
:::
---

## Parâmetros da requisição:

### `clientKey`

Type: `String` <br />
Obrigatório: `Sim`<br />
Chave única da sua conta

### `taskId`

Type: `Integer` <br />
Obrigatório: `Sim`<br />
Identificador da tarefa obtido através do método [createTask](./create-task.md)

---

### Exemplo de requisição

```json
{
  "clientKey":"API_KEY",
  "taskId": 7654321
}
```

---

## Estrutura da resposta

### `errorId`

Type: `Integer` <br />
Identificador de erro.<br />**0** - sem erros, a propriedade *errorCode* não existe<br />**1** - erro, informações disponíveis na propriedade *errorCode*

### `errorCode`

Type: `String` <br />
Código do erro. Consulte o [glossário de erros](../api-errors.md).

### `status`

Type: `String` <br />
**processing** - tarefa em andamento<br />**ready** - tarefa concluída, solução disponível na propriedade *solution*

### `solution`

Type: `Object` <br />
Informações sobre a solução da tarefa. Cada tipo de tarefa possui um formato diferente.

---

### Exemplo de resposta:

Tarefa em processamento

```json
{
  "errorCode": null,
  "errorDescription": null,
  "errorId": 0,
  "status": "processing"
}
```

Resposta bem-sucedida

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
