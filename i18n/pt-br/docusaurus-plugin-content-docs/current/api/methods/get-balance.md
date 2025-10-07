---
sidebar_position: 3
sidebar_label: getBalance
title: "Método getBalance - verifique o saldo para resolver captchas na API CapMonster Cloud"
description: "Descrição completa do método getBalance da API CapMonster Cloud. Aprenda como verificar o saldo da sua conta de captcha usando a API de forma prática no guia CapMonster Cloud Docs."
---

# getBalance : recuperar saldo da conta

:::info Endereço do método

```http
https://api.capmonster.cloud/getBalance
```

Formato da requisição: `JSON POST`
:::

## Parâmetros da requisição

### `clientKey`

Type: `String` <br />
Obrigatório: `Sim`<br />
Chave única da sua conta

### Exemplo de Corpo
```json
{
  "clientKey": "API_KEY"
}
```

## Estrutura da resposta

### `errorId`

Type: `Integer` <br />
Identificador de erro.<br />**0** - sem erro, nenhuma propriedade *errorCode*<br />**1** - erro, informações sobre ele estão na propriedade *errorCode*

### `errorCode`

Type: `String` <br />
Código do erro. Consulte a [lista de erros](../api-errors.md).

### `balance`

Type: `Decimal` <br />
Saldo disponível

### Exemplo

```json
{
 "errorId": 0,
 "balance": 345.678
}
```