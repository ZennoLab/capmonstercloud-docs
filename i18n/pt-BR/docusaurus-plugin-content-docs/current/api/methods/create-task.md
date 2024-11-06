---
sidebar_position: 0
sidebar_label: createTask
---

# createTask : criando uma tarefa

## Descrição
Este método cria uma tarefa para resolver o tipo de captcha selecionado. Nos parâmetros, é necessário passar os dados de autorização do cliente, os dados da tarefa e outros parâmetros opcionais.

:::info Endereço do método
```http
https://api.capmonster.cloud/createTask
```

Formato da solicitação: `JSON POST`
:::

-----
## Parâmetros da solicitação

### `clientKey`
Tipo: `String` <br />
Obrigatório: `Sim`<br />
Sua chave de conta única, chave da API (Você pode encontrá-la [aqui](https://capmonster.cloud/Dashboard))

### `task`
Tipo: `Objeto Tarefa` <br />
Obrigatório: `Sim`<br />
Array de dados da tarefa. Veja a lista de descrições de objetos disponíveis [aqui](../../captchas).

### `callbackUrl`
Tipo: `String` <br />
Obrigatório: `Não`<br />
Endereço web para o envio do resultado da tarefa do captcha. Os dados são enviados por solicitação POST.<br />O conteúdo é idêntico à resposta do método [getTaskResult](./get-task-result.md).<br />O conteúdo da resposta não é verificado, e o servidor deve aceitar a solicitação em 2 segundos; após isso, a conexão será encerrada.

Exemplo de uso da função `callbackUrl`:

```json
{
  "clientKey": "API_KEY",
  "task": {
    "type": "NoCaptchaTaskProxyless",
    "websiteURL": "https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey": "6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  },
  "callbackUrl": "https://yourwebsite.com/callback"
}
```

--- 

### Exemplos de solicitação

<details>
  <summary>Resolvendo captcha normal com uma imagem</summary>

```json
    {
      "clientKey":"API_KEY",
      "task": 
      {
        "type":"ImageToTextTask",
        "body":"BASE64_BODY_HERE!"
      }
    }
```
</details>

<details>
  <summary>Resolvendo ReCaptcha2</summary>

```json
    {
      "clientKey":"API_KEY",
      "task": 
      {
        "type":"RecaptchaV2Task",
        "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
        "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
      }
    }
```
</details>

-----
## Estrutura da resposta

### `errorId`
Tipo: `Integer` <br />
Obrigatório: `Sim`<br />
Identificador de erro.<br />**0** - sem erros, a tarefa foi criada com sucesso, o ID da tarefa está localizado na propriedade *taskId*<br />**1** - erro, as informações sobre ele estão na propriedade *errorCode*

### `errorCode`
Tipo: `String` <br />
Obrigatório: `Não`<br />
Código de erro. Verifique a [lista de erros](../api-errors.md).

### `taskId`
Tipo: `Integer` <br />
Obrigatório: `Sim`<br />
ID da tarefa para uso posterior no método [getTaskResult](./get-task-result.md).

---

### Exemplo de resposta

<details>
    <summary>Resposta SEM erro</summary>

```json
    {
      "errorId": 0,
      "taskId": 7654321
    }
```
</details>

<details>
    <summary>Resposta COM erro</summary>

```json
    {
        "errorId": 1,
        "errorCode": "ERROR_KEY_DOES_NOT_EXIST",
        "errorDescription": "Chave de autorização da conta não encontrada no sistema ou com formato incorreto",
        "taskId": 0
    }
```
</details>