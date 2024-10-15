---
sidebar_position: 9
sidebar_label: ComplexImageTask Funcaptcha
draft: true
---

# ComplexImageTask Funcaptcha
O objeto contém dados sobre a resolução do FunCaptcha.

## **Estrutura do Objeto**

|**Parâmetro**|**Tipo**|**Obrigatório**|**Valores possíveis**|**Descrição**|
| :- | :- | :- | :- | :- |
|type|String|sim|ComplexImageTask|Especifica o tipo do objeto de tarefa.|
|class|String|sim|funcaptcha|Especifica a classe do objeto de tarefa.|
|imageUrls|Array|sim (se imagesBase64 não estiver preenchido)|[“[https://i.postimg.cc/s2ZDrHXy/fc1.jpg](https://i.postimg.cc/s2ZDrHXy/fc1.jpg)”, …]|[Imagem única](https://i.postimg.cc/s2ZDrHXy/fc1.jpg) (em um array).|
|imagesBase64|Array|sim (se imageUrls não estiver preenchido)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, … ]|[Imagem única](https://i.postimg.cc/s2ZDrHXy/fc1.jpg) no formato base64 (em um array).|
|metadata.Task|String|sim|`Escolha a imagem que está de cabeça para cima` e outros|Texto da tarefa (<u>em inglês</u>).|
|userAgent|String|não|-|O User Agent do navegador usado ao fazer upload das imagens se os links forem passados para imageUrls. Deve-se usar uma assinatura de navegador moderno ou o Google retornará um erro pedindo para atualizar o navegador.|
|websiteURL|String|não|-|URL da página onde o captcha é resolvido.|

## **Exemplo de solicitação**
:::info Método
```http
https://api.capmonster.cloud/createTask
```
:::

```json
{
  "clientKey":"API_KEY",
  "task": {
    "type": "ComplexImageTask",
    "class": "funcaptcha",
    "imageUrls":[ "https://i.postimg.cc/s2ZDrHXy/fc1.jpg" ],
    "metadata": {
      "Task": "Pick the image that is the correct way up"
    },
    "userAgent": "userAgentPlaceholder"
  }
}
```

**Exemplo de resposta**
```json
{
  "errorId":0,
  "taskId":407533072
}
```

## **Obtendo os resultados**
:::info Método
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Use o método [getTaskResult](../api/methods/get-task-result.md) para obter a solução do captcha. Dependendo da carga do sistema, você receberá uma resposta entre 300ms e 6s.

|**Propriedade**|**Tipo**|**Descrição**|
| :- | :- | :- |
|answer|Array|Lista de valores booleanos, `true` significa que você precisa clicar na imagem correspondente a essa posição.|

**Exemplo:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, false, false, false, true, false ]
  }
}
```

## **Preços**

|**Custo**|**Custo por 1000 imagens, $**|
| :-: | :-: |
|Funcaptcha|0,15|

