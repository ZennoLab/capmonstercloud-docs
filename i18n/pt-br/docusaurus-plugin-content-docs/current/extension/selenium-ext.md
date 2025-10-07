---
sidebar_position: 7
---


# Integrando a extensão ao Selenium usando Node.js

Neste tutorial, mostraremos como integrar a extensão do navegador usando a biblioteca Selenium WebDriver e realizar tarefas automatizadas em um site específico.

## Etapa 1: Instalação

1. Instale o Node.js e o npm (Node.js Package Manager) no seu computador. Você pode baixá-los no [site oficial](https://nodejs.org/) do Node.js.

2. Instale os pacotes necessários usando o npm:

```bash
npm install selenium-webdriver
```
## Etapa 2: Alterando os parâmetros da extensão

Antes de começar a automatização com a extensão, é necessário adicionar as configurações iniciais da extensão, incluindo obrigatoriamente o `clientKey` no arquivo `defaultSettings.json`.

Para isso, é preciso baixar o [arquivo da extensão](extension-main.md) e descompactá-lo. Na raiz do arquivo descompactado, encontra-se o arquivo `defaultSettings.json`, onde você pode alterar as configurações (a descrição dos parâmetros está disponível na [página](ext-settings.md)).

Após fazer todas as alterações, salve-as e compacte novamente a extensão no formato ZIP.

## Etapa 3: Configurando o Selenium WebDriver para funcionar com a extensão

Agora configure o Selenium WebDriver para usar o perfil de navegador criado.
Para isso, crie um arquivo `index.js` com o seguinte conteúdo:

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
  // Caminho para o arquivo .zip da extensão
  const extensionPath = path.resolve(__dirname, './extension.zip');

  // Criando um objeto de opções do navegador
  const options = new chrome.Options();
  
  // Adicionando a extensão às opções do navegador
  options.addExtensions(extensionPath);

  // Criando uma instância do driver do navegador
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Abrir a página do Google
    await driver.get('https://google.com/');
    
    // Exemplo: encontrar um elemento na página e interagir com ele
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium com extensão', Key.RETURN);
    
    // Aguardar os resultados da pesquisa
    await driver.wait(until.titleContains('Selenium com extensão'), 5000);
  } finally {
    // Fechar o navegador
    await driver.quit();
  }
})();
```

## Etapa 4: Escrevendo ações automatizadas
Agora que a extensão do navegador está configurada, você pode usar os métodos do WebDriver para realizar ações automatizadas no seu site.

Exemplo de uma ação automatizada:

```js
// Se você quiser clicar em um elemento na página
driver.findElement(By.xpath("//button[@id='my-button']")).click();
```

## Etapa 5: Executando o script

Para executar o script automatizado que abrirá o navegador e realizará as ações descritas, digite o seguinte comando no terminal:

```bash
node index.js
```

Para atualizar a extensão sem perder as configurações e os dados, copie todos os arquivos necessários da versão antiga, depois faça o download da nova versão da extensão, descompacte-a e substitua a versão antiga pela nova.

Esperamos que este guia tenha sido útil. Se você tiver dúvidas, recomendamos consultar a documentação oficial do Selenium e a documentação do seu navegador.
