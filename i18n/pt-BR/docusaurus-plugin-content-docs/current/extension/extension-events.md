---
sidebar_position: 6
---


# Recebendo eventos da extensão

Receber eventos da extensão permite que seu código fique ciente dos eventos que estão acontecendo (como resolver com sucesso um captcha com um token ou cliques) e reaja de acordo.

Ao resolver vários tipos de captchas, a extensão envia eventos para a página atualmente ativa no objeto global `window`.

Se necessário, é possível se inscrever nesses eventos por meio do `window.addEventListener`.

:::info
Nenhum parâmetro é passado para os eventos.
:::

### **Exemplo:**
```js
window.addEventListener("onCMExtensionReady", () => {
  // FAÇA ALGO
})
```

## Eventos disponíveis

### Global
|**Evento**|**Descrição**|
| :-: | :-: |
|`onCMExtensionReady`|A extensão está totalmente carregada e pronta para funcionar|

### HCaptcha
|**Evento**|**Descrição**|
| :-: | :-: |
|`onHCaptchaClickStart`|Início da resolução de hCaptcha por cliques|
|`onHCaptchaClickBackendError`|Erro do servidor ao solicitar resultados da solução de hCaptcha por cliques|
|`onHCaptchaClickIncorrect`|Erro na resolução de hCaptcha por cliques|
|`onHCaptchaClickSuccess`|Resolução bem-sucedida de hCaptcha por cliques|
|`onHCaptchaClick`|Clicar na caixa de seleção do hCaptcha ao resolver por cliques|
|`onHCaptchaTokenStart`|Início da resolução de hCaptcha por token|
|`onHCaptchaTokenSuccess`|Resolução bem-sucedida de hCaptcha por token|
|`onHCaptchaTokenError`|Erro ao resolver hCaptcha por token|

### ReCaptcha
|**Evento**|**Descrição**|
| :-: | :-: |
|`onReCaptchaClickStart`|Evento de clique na imagem ao resolver ReCaptcha por cliques|
|`onReCaptchaClick`|Evento de clique no botão de enviar ou próximo ao resolver ReCaptcha por cliques|
|`onReCaptchaClickIncorrect`|Erro na resolução de ReCaptcha por cliques|
|`onReCaptchaClickBackendError`|Erro ao resolver ReCaptcha por cliques|
|`onReCaptchaClickSuccess`|Resolução bem-sucedida de ReCaptcha por cliques|
|`onRecaptchaTokenStart`|Início da resolução de ReCaptcha por token|
|`onRecaptchaTokenSuccess`|Resolução bem-sucedida de ReCaptcha por token|
|`onRecaptchaTokenError`|Erro ao resolver ReCaptcha por token|

### GeeTest
|**Evento**|**Descrição**|
| :-: | :-: |
|`onGeeTestTokenStart`|Início da resolução de GeeTest por token|
|`onGeeTestTokenSuccess`|Resolução bem-sucedida de GeeTest por token|
|`onGeeTestTokenError`|Erro ao resolver GeeTest por token|

### Turnstile
|**Evento**|**Descrição**|
| :-: | :-: |
|`onTurnstileTokenStart`|Início da resolução de Turnstile por token|
|`onTurnstileTokenSuccess`|Resolução bem-sucedida de Turnstile por token|
|`onTurnstileTokenError`|Erro ao resolver Turnstile por token|

### Captcha de Imagem
|**Evento**|**Descrição**|
| :-: | :-: |
|`onImageTokenStart`|Início da resolução de Captcha de Imagem por token|
|`onImageTokenSuccess`|Resolução bem-sucedida de Captcha de Imagem por token|
|`onImageTokenError`|Erro ao resolver Captcha de Imagem por token|