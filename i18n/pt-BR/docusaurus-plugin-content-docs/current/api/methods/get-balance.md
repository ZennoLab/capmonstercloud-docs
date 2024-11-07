---
sidebar_position: 3
sidebar_label: getBalance
---

# getBalance : recuperar saldo da conta

:::info Endereço do método
```http
https://api.capmonster.cloud/getBalance
```

Formato da solicitação: `JSON POST`
:::

## Parâmetros da solicitação

### `clientKey`
Tipo: `String` <br />
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
Tipo: `Integer` <br />
Identificador de erro.<br />**0** - sem erro, a propriedade *errorCode* não está presente<br />**1** - erro, as informações estão na propriedade *errorCode*

### `errorCode`
Tipo: `String` <br />
Código de erro. Verifique a [lista de erros](../api-errors.md).

### `balance`
Tipo: `Decimal` <br />
Valor disponível de saldo.


### Exemplo

```json
{
 "errorId": 0,
 "balance": 345.678
}
```