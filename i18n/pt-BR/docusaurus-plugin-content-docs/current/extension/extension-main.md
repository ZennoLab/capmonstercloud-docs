---
sidebar_position: 0
---

# Extensão do navegador Chrome
## **Descrição**
Com esta extensão, você pode reconhecer captchas automaticamente diretamente no navegador.

A extensão funciona no navegador Google Chrome.

-----
## **Instalação automática**
**Importante!** Não é possível instalar extensões no modo de navegação anônima e no modo visitante.

1. Abra a [Chrome Web Store](https://chrome.google.com/webstore/detail/capmonster-cloud-%E2%80%94-automa/pabjfbciaedomjjfelfafejkppknjleh?hl=en).
2. Clique em **Instalar**.

Para começar a usar a extensão, clique em seu ícone à direita da barra de endereços. Vá para as [configurações](extension-main.md#configurações).

*Se por algum motivo não for possível instalar a extensão pela Chrome Web Store, use as instruções para instalação manual.*

<details>
    <summary>Instalação manual</summary>

1. Baixe o [arquivo com a extensão](https://drive.google.com/file/d/10xXeDqllYo6Ilvr5lUXEVIFw283QzPFL/view?usp=drive_link).

2. Descompacte-o para qualquer pasta.
   
   **ATENÇÃO**: a pasta não deve ser excluída, caso contrário, a extensão deixará de funcionar.
3. No navegador Google Chrome, abra a página “Extensões”. Existem várias maneiras de fazer isso:
   1. Digite chrome://extensions na barra de endereços do navegador e pressione Enter.
   2. No menu: clique nos três pontos verticais no canto superior direito (perto da foto do perfil), depois em "Mais Ferramentas", e em seguida "Extensões".

  ![](./images/extension-main-firefox/359d5afb-d644-45c2-a882-e7fc3da759eb.png)

   3. Ou vá para as configurações do Google Chrome e selecione "Extensões" (na parte inferior) no menu à direita.

  ![](./images/extension-main-firefox/61a9b824-b0d2-4808-8bb8-feac4b25d0b7.png)

4. Ative o “Modo de desenvolvedor”.
5. Em seguida, clique em “Carregar sem compactação”.

  ![](./images/extension-main-firefox/load-unpacked.png)

6. Encontre e escolha a pasta onde você descompactou a extensão.
7. Depois disso, a extensão deve aparecer na lista das extensões instaladas.

![](./images/extension-main-firefox/919a2eab-1651-4b48-8980-b69346d700fd.png)

  </details>

<details>
    <summary>Atualização manual da extensão</summary>

Se você estiver instalando a extensão sobre a versão anterior, ao atualizar os arquivos originais da extensão, também precisará clicar no botão de atualização na página "Extensões" (como abrir esta página está descrito acima na seção "Instalação manual").

![](./images/extension-main-firefox/manual-update.png)
</details>

-----
## **Configurações**
<details>
    <summary>Como fixar a extensão</summary>

Por padrão, a extensão instalada é ocultada. Para fixá-la, você deve clicar no botão “Fixar”:

![](./images/extension-main-firefox/pin1.png)
</details>

Após iniciar a extensão, você verá esta janela:

![](./images/extension-main-firefox/ext.screen.en.png)
### <a name="id-browserextension-apikey"></a>**Chave API**
Insira a chave da API no campo correspondente (1), pressione o botão salvar (2). Se você inseriu a chave correta, seu saldo será exibido abaixo (3).

![](./images/extension-main-firefox/api-key.png)
### <a name="id-browserextension-automaticcaptchasolving"></a>**Solução automática de captchas**
Aqui você pode selecionar os tipos de captchas que a extensão reconhecerá automaticamente.

![](./images/extension-main-firefox/extension.example.png)

:::info !

Pode ser necessário recarregar a página com captcha para que as alterações tenham efeito!

:::
### <a name="id-browserextension-repeatcaptchasolvingincaseofanerror"></a>**Repetir solução de captcha em caso de erro**
Se a primeira tentativa de resolver o captcha falhar, a extensão enviará tarefas repetidas até que o captcha seja resolvido, ou até que o limite especificado nesta configuração seja atingido.
### <a name="id-browserextension-proxy"></a>**Proxy**
![](./images/extension-main-firefox/proxy.png) 

Aqui você pode especificar o proxy que será enviado junto com a tarefa de reconhecimento.

O "Login" e a "Senha" são opcionais.
### <a name="id-browserextension-blacklistcontrol"></a>**Controle de lista negra**
Usando a lista negra, você pode configurar a extensão para ignorar captchas em sites específicos.

Após ativar esta opção, aparecerá um campo para inserir os sites:

![](./images/extension-main-firefox/blacklist-control.png)

Os domínios devem ser especificados junto com o protocolo (https:// ou http://).
Você pode usar máscaras:

- ? - qualquer um caractere, exceto ponto final
- \* - qualquer número de caracteres

Exemplos:

|**Filtro**|**Descrição**|
| :-: | :-: |
|`https://zennolab.com`|Proibição da extensão no site `https://zennolab.com`|
|`https://*.zennolab.com`|Proibição da extensão em todos os subdomínios `https://zennolab.com`|
|`https://www.google.*`|Proibição da extensão de funcionar no Google em todas as zonas (ru, com, com.ua, etc.)|

Quando erros ocorrerem na solução de captchas, veja o [glossário de erros](/api/api-errors.md).
