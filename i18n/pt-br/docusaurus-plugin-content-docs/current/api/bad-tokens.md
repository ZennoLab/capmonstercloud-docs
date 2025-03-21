﻿# Como relatar tokens incorretos

Faça uma reclamação sobre tokens incorretos fornecidos pela CapMonster Cloud quando eles não resultarem em uma verificação bem-sucedida no site ou forem frequentemente rejeitados.

Exemplos de situações em que você deve registrar uma reclamação:

- Um usuário recebeu um token de solução, mas o site ainda não o aceita como uma solução correta de captcha.

- Alguns sites estão aceitando os tokens com sucesso, enquanto outros os rejeitam.

- Rejeição em sites que anteriormente aceitavam tokens semelhantes com sucesso.


## Por que relatar?

Precisamos de relatórios para que possamos analisar automaticamente os dados sobre a qualidade dos tokens emitidos por nossa API. Os relatórios são processados automaticamente, e a equipe toma medidas para melhorar a qualidade dos tokens, seja atualizando o sistema para novas tarefas, aprimorando as grades, etc.

---

### Endereços dos métodos:


:::tip Para relatórios de captchas de imagem
```http
https://api.capmonster.cloud/reportIncorrectImageCaptcha
```
:::


:::tip Para relatórios de captchas com tokens: recaptcha (2, 3, enterprise), geetest, turnstile.
```http
https://api.capmonster.cloud/reportIncorrectTokenCaptcha
```

Caminhos também suportados:

[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha) - funcionam da mesma forma que [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha)
:::



`Formato da solicitação: JSON POST`

### Parâmetros da solicitação

| **Parâmetro** | **Tipo** | **Obrigatório** | **Valor** |
| :------------------------: | :--------------: | :--------------------------------: | :------------------------------------------------------------ |
|         clientKey         |      String      |                Sim                | Sua chave de conta única |
|           taskId           |     Integer     |                Sim                |              ID da tarefa              |

**Exemplo de solicitação:**

```json
{

  "clientKey": "API_KEY",
  "taskId": 7654321
  
}
```

**Estrutura da resposta:**

| **Propriedade** | **Tipo** | **Valor** |
| :------------------------: | :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          errorId          |     Integer     | ID do erro.<br />**0** - sem erros, sem a propriedade *errorCode*;<br />**1** - erro, informações sobre ele estão na propriedade *errorCode*. |
|         errorCode         |      String      | Código de erro. Confira os [tipos de erro](./api-errors.md). |
|           status           |      String      | **success** - o relatório foi aceito.<br />Se o relatório não foi aceito, o campo está ausente, e o motivo está no *errorCode* |

### Exemplo de resposta

<details>
  <summary>
    Resposta SEM erro
  </summary>

```json
{
  "errorId": 0,
  "status": "success"
}
```

</details>

<details>
  <summary>
    Resposta COM erro
  </summary>

```json
{
  "errorId": 1,
  "errorCode": "ERROR_KEY_DOES_NOT_EXIST"
}
```

</details>