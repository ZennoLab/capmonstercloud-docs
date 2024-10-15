---
sidebar_position: 1
sidebar_label: Firefox browser extension
---

# Extensão do navegador Firefox

## **Descrição**
Com esta extensão, você pode reconhecer captchas automaticamente diretamente no navegador.

A extensão funciona no navegador Mozilla Firefox.

-----
## **Instalação automática**
1. Abra a [Loja de Add-ons do Firefox](https://addons.mozilla.org/en-US/firefox/addon/capmonster-cloud/).
2. Clique em **Adicionar ao Firefox**.
3. Confirme a adição da extensão clicando no botão "Adicionar" na janela modal.
   ![](./images/extension-main-firefox/modal.png)

Para começar a usar a extensão, clique em seu ícone à direita da barra de endereços. Vá para as [configurações](extension-firefox.md#configurações).

*Se por algum motivo não for possível instalar a extensão pela Loja de Add-ons do Firefox, use as instruções para instalação manual.*

<details>
    <summary>Instalação manual</summary>

1. Baixe o [arquivo com a extensão](https://drive.google.com/file/d/1rWLOr6p0z8tA6vHooYAJWkcQ3NiWlBK-/view?usp=drive_link).

1. Abra o navegador Firefox e vá trabalhar com as extensões:
   ![](./images/extension-main-firefox/extension-menu.png)
   
1. Clique no botão de engrenagem e, na lista suspensa que se abre, selecione "Instalar add-on a partir do arquivo..."
   ![](./images/extension-main-firefox/extension-installation.png)
   
1. Selecione o arquivo baixado com a extensão.

1. Após baixar a extensão, vá para "Gerenciar suas Extensões" e clique na extensão instalada.
   ![](./images/extension-main-firefox/extension1.png)
   
1. Vá para a aba "Permissões" e certifique-se de que todas as permissões estão concedidas.
   ![](./images/extension-main-firefox/extension2.png)
</details>

<details>
    <summary>Atualização manual da extensão</summary>

Se você estiver instalando a extensão sobre a versão anterior, ao atualizar os arquivos originais da extensão, também precisará clicar no botão de atualização na página "Extensões" (como abrir esta página está descrito acima na seção "Instalação manual").
</details>

-----
## **Configurações**
<details>
    <summary>Como fixar a extensão</summary>

Por padrão, uma extensão recém-instalada é fixada automaticamente no painel do navegador. 
   ![](./images/extension-main-firefox/extension-panel.png)
</details>

Após iniciar a extensão, você verá esta janela:

![](./images/extension-main-firefox/ext.screen.enf.png)
### <a name="id-browserextension-apikey"></a>**Chave API**
Insira a chave da API no campo correspondente (1), pressione o botão salvar (2). Se você inseriu a chave correta, seu saldo será exibido abaixo (3).

![](./images/extension-main-firefox/api-key.png)
### <a name="id-browserextension-automaticcaptchasolving"></a>**Solução automática de captchas**
Aqui você pode selecionar os tipos de captchas que a extensão reconhecerá automaticamente.

![](./images/extension-main-firefox/extension.examplef.png)

:::info !

Pode ser necessário recarregar a página com captcha para que as alterações tenham efeito!

:::
### <a name="id-browserextension-repeatcaptchasolvingincaseofanerror"></a>**Repetir solução de captcha em caso de erro**
Se a primeira tentativa de resolver o captcha falhar, a extensão enviará tarefas repetidas até que o captcha seja resolvido ou até que o limite especificado nesta configuração seja atingido.
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