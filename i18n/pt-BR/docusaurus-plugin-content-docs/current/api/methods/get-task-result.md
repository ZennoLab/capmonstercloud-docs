---
sidebar_position: 1
sidebar_label: getTaskResult
---

# getTaskResult : solicitar resultado da tarefa
## **Descrição**
Depois de criar uma tarefa, você precisa obter a resposta verificando periodicamente o status da solução.

:::info Endereço do método
```http
https://api.capmonster.cloud/getTaskResult
```
Formato da solicitação: `JSON POST`
:::


:::caution
Limite: 120 solicitações por tarefa. Se o limite for excedido, a conta do usuário poderá ser bloqueada temporariamente.
:::

---

## **Parâmetros da solicitação:**

### `clientKey`
Tipo: `String` <br />
Obrigatório: `Sim`<br />
Chave única da sua conta.

### `taskId`
Tipo: `Integer` <br />
Obrigatório: `Sim`<br />
ID obtido no método [createTask](./create-task.md).

---

### **Exemplo de solicitação**

```json
{
  "clientKey":"API_KEY",
  "taskId": 7654321
}
```
---
## **Estrutura da resposta**

### `errorId`
Tipo: `Integer` <br />
Identificador de erro.<br />**0** - sem erros, a propriedade *errorCode* não está presente;<br />**1** - erro, as informações estão na propriedade *errorCode*.

### `errorCode`
Tipo: `String` <br />
Código de erro. Verifique a [lista de erros](../api-errors.md).

### `status`
Tipo: `String` <br />
**processing** - tarefa ainda não está pronta;<br />**ready** - tarefa concluída, o objeto de solução pode ser encontrado na propriedade *solution*.

### `solution`
Tipo: `Objeto` <br />
Dados do resultado da tarefa. Diferente para cada tipo de tarefa.

---
### **Exemplo de resposta**

Resposta em processo

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
