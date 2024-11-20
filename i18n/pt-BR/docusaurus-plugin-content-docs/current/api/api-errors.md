---
sidebar_position: 4
---

# Descrição de Erros

:::info Recomendações sobre como evitar erros:
- Certifique-se de que o tipo de captcha que você precisa resolver é suportado pelo serviço CapMonster Cloud.
- Verifique a documentação atualizada para ficar por dentro das últimas mudanças na API e evitar o uso de métodos ou parâmetros desatualizados.
- Use proxies de qualidade.
:::

### `CHAVE INVÁLIDA`
Código de erro da API: `ERROR_KEY_DOES_NOT_EXIST` <br />
A chave de autorização da conta não foi encontrada no sistema ou tem formato incorreto.

### `SEM FUNDOS`
Código de erro da API: `ERROR_ZERO_BALANCE` <br />
A conta está com saldo zero. [Adicione fundos](https://capmonster.cloud/SelectPaymentType) para continuar o reconhecimento.

### `TAMANHO DA IMAGEM MUITO GRANDE`
Código de erro da API: `ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
O tamanho do captcha que você está enviando é superior a 500.000 bytes.

### `TAMANHO DA IMAGEM ZERO`
Código de erro da API: `ERROR_ZERO_CAPTCHA_FILESIZE` <br />
O tamanho do captcha que você está enviando é inferior a 100 bytes.

### `ID DO CAPTCHA NÃO ENCONTRADO`
Código de erro da API: `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
O captcha que você está solicitando não foi encontrado. Certifique-se de que você está solicitando uma atualização de status apenas dentro de 5 minutos após o upload.

### `CAPTCHA INRECONHECÍVEL`
Código de erro da API: `ERROR_CAPTCHA_UNSOLVABLE` <br />
Esse tipo de captcha não é suportado pelo serviço ou a imagem não contém uma resposta; talvez esteja muito ruidosa. Também pode significar que a imagem está corrompida ou foi renderizada incorretamente.

### `CAPTCHA NÃO ESTÁ PRONTA`
Código de erro da API: `CAPTCHA_NOT_READY` <br />
O captcha ainda não foi resolvido.

### `SOLICITAÇÃO NÃO PERMITIDA DO SEU IP`
Código de erro da API: `ERROR_IP_NOT_ALLOWED` <br />
Solicitação com a chave de conta atual não é permitida do seu IP. Abra as configurações da sua conta e [adicione seu IP à lista de confiáveis](https://capmonster.cloud/Account/Settings).

### `IP BANIDO`
Código de erro da API: `ERROR_IP_BANNED` <br />
Você excedeu o limite de solicitações com a chave da API incorreta; verifique a correção da sua chave da API no painel de controle e, após algum tempo, tente novamente.

### `MÉTODO INCORRETO`
Código de erro da API: `ERROR_NO_SUCH_METHOD` <br />
Tipo de [captcha](/docs/captchas) incorreto (valor do parâmetro «type»).

### `LIMITE DE SOLICITAÇÕES EXCEDIDO`
Código de erro da API: `ERROR_TOO_MUCH_REQUESTS` <br />
Você excedeu o limite de solicitações para receber uma resposta para uma tarefa. Tente solicitar [o resultado da tarefa](./methods/get-task-result.md) no máximo 1 vez a cada 2 segundos.

### `DOMÍNIO NÃO PERMITIDO`
Código de erro da API: `ERROR_DOMAIN_NOT_ALLOWED` <br />
Captchas de alguns domínios não podem ser resolvidos no CapMonster Cloud. Se você tentar criar uma tarefa para tal domínio, este erro será retornado.

### `TOKEN EXPIRADO`
Código de erro da API: `ERROR_TOKEN_EXPIRED` <br />
O servidor do provedor de captcha informou que o token adicional expirou. Tente criar a tarefa com um novo token.

### `SEM SERVIDORES LIVRES`
Código de erro da API: `ERROR_NO_SLOT_AVAILABLE` <br />
No momento, não há servidores disponíveis para reconhecer essa tarefa. Tente novamente depois de um tempo.

### `SITEKEY RECAPTCHA INVÁLIDO`
Código de erro da API: `ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
Sitekey inválido.

### `DOMÍNIO RECAPTCHA INVÁLIDO`
Código de erro da API: `ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
Domínio inválido para sitekey.

### `TIMER DE RECAPTCHA EXCEDIDO`
Código de erro da API: `ERROR_RECAPTCHA_TIMEOUT` <br />
O tempo limite para reconhecimento do ReCaptcha foi excedido, provavelmente devido a um proxy lento ou servidor do Google.

### `SEU IP ESTÁ BLOQUEADO`
Código de erro da API: `ERROR_IP_BLOCKED` <br />
Seu IP não tem permissão para acessar esta API devido a um grande número de erros.

### `FALHA AO CONECTAR AO PROXY`
Código de erro da API: `ERROR_PROXY_CONNECT_REFUSED` <br />
Não foi possível conectar ao servidor proxy, tempo limite de conexão.

### `O IP DO PROXY ESTÁ BANIDO`
Código de erro da API: `ERROR_PROXY_BANNED` <br />
O IP do proxy está banido no serviço de captcha alvo.

### `TIPO DE TAREFA INCORRETO`
Código de erro da API: `ERROR_TASK_NOT_SUPPORTED` <br />
O tipo de tarefa está incorreto ou não é suportado. Verifique a propriedade «type» no objeto da tarefa.

### `ERROR_TASK_ABSENT`
Código de erro da API: `ERROR_TASK_ABSENT` <br />
Objeto da tarefa não encontrado ou JSON inválido foi enviado na solicitação [createTask](./methods/create-task.md).

### `USERAGENT EXPIRADO`
Código de erro da API: `ERROR_WRONG_USERAGENT`<br />
A solicitação especificou um User Agent inválido; você pode descobrir o User Agent atual no [artigo](./methods/get-user-agent.mdx).