---
sidebar_position: 0
id: overview
title: O que é CapMonster Cloud
sidebar_label: O que é CapMonster Cloud
---

# O que é CapMonster Cloud

**Bem-vindo à documentação do serviço CapMonster Cloud!**
Nesta seção, você conhecerá as principais funcionalidades do CapMonster Cloud, suas vantagens e informações sobre como começar a usar o serviço rapidamente.

O CapMonster Cloud é um serviço em nuvem para reconhecimento automático de diferentes tipos de captchas: desde os mais comuns até os mais raros. Ao contrário das soluções em que a verificação deve ser feita manualmente, o serviço utiliza algoritmos de inteligência artificial. Graças a isso, os captchas são resolvidos com alta precisão em questão de segundos, minimizando o risco de erros.

O CapMonster Cloud ajuda você a trabalhar com sites de forma mais rápida e eficiente. O serviço remove tarefas rotineiras relacionadas a captchas, permitindo que você se concentre no desenvolvimento de projetos e processos de negócios.

## Vantagens do serviço

---

**Alta velocidade — a maioria das soluções chega em 1–5 segundos**

O CapMonster Cloud é otimizado para processar tarefas rapidamente. Em média, a resolução de um captcha leva apenas alguns segundos, garantindo o funcionamento estável dos processos automatizados sem atrasos. Mesmo sob alta carga, o serviço distribui as tarefas entre os servidores, mantendo o tempo de espera mínimo.

**Amplo alcance — suporte a captchas populares e raros**

O CapMonster Cloud lida com diversos tipos de captchas: desde os populares [reCAPTCHA v2](./captchas/no-captcha-task), [v3](./captchas/recaptcha-v3-task), [v2 Enterprise](./captchas/recaptcha-v2-enterprise-task) e [Cloudflare Turnstile](./captchas/turnstile-task), até os mais raros — como [Yidun](./captchas/yidun-task) ou [GeeTest CAPTCHA](./captchas/geetest-task). Você não precisará buscar soluções separadas para cada site — um único serviço resolve quase todas as tarefas, economizando tempo e tornando a automação mais conveniente.

**Serviço em nuvem — não é necessário instalar software**

Tudo o que você precisa é de acesso à internet e sua chave API. Isso significa que você pode integrar rapidamente o serviço aos seus projetos, executar tarefas de qualquer dispositivo e focar na automação sem perder tempo com instalação e configuração de software local.

**Preços baixos e pagamento apenas por soluções bem-sucedidas**

Com o CapMonster Cloud, você paga apenas pelos captchas que foram resolvidos com sucesso. Sem taxas ocultas ou custos por tentativas falhas — apenas pelo resultado real.

**Proxies integrados**

Você não precisa se preocupar com a compra de proxies ou configurações adicionais! Pode começar a usar o serviço imediatamente — as ferramentas integradas garantem a resolução estável dos captchas. Caso seja necessário utilizar proxies próprios, a API do CapMonster Cloud permite conectá-los facilmente. Isso é relevante, por exemplo, quando seus proxies são obrigatórios para passar por [DataDome](./captchas/datadome) e Cloudflare Challenge (obtenção de [cf_clearance](./captchas/turnstile-task#opção-3-challenge)), ou quando os proxies integrados não funcionam em determinado site.

**API simples — requisições e respostas em JSON, fácil de integrar em qualquer linguagem/framework**

A API do CapMonster Cloud é clara e simples: todas as requisições e respostas vêm em formato JSON. O serviço se integra facilmente a qualquer linguagem de programação ou framework — seja Node.js, Python, C# ou outros. A estrutura simples das requisições permite criar tarefas, obter resultados e tratar erros sem complicações.

**Extensão de navegador com resolução de captchas e mapeamento de parâmetros**

Para facilitar o trabalho com páginas web, o CapMonster Cloud oferece extensões de navegador (para Chrome e Firefox). Elas ajudam a resolver captchas automaticamente e coletar parâmetros necessários: `websitekey`, `action` e outros, além de testar o funcionamento do serviço diretamente no navegador.

**SDKs oficiais para maior conveniência de uso**

O CapMonster Cloud oferece SDKs oficiais para linguagens de programação populares. Eles já possuem funções para criar tarefas, obter resultados e tratar erros, poupando tempo de desenvolvimento de código.

**Confiabilidade — serviço disponível 24/7 com servidores distribuídos**

O CapMonster Cloud opera em uma infraestrutura distribuída e está disponível 24 horas por dia. Isso garante estabilidade e confiabilidade, mesmo sob alta carga, processando grandes volumes de captchas sem interrupções ou atrasos.

## Para quem e quando é útil

---

**Desenvolvedores de automação**

Automatize processos que envolvem formulários web, logins e registros, economizando tempo e recursos da equipe.

**Engenheiros de QA (para testar serviços e sites próprios)**

Acelere testes de sites próprios ou de terceiros, processando captchas automaticamente e reduzindo a carga manual.

**Para coleta ética de informações**

Coleta dados de sites de maneira legal e ética, contornando captchas automaticamente.

**Para ajudar pessoas com dificuldade de resolver captchas manualmente**

O CapMonster Cloud auxilia quem tem dificuldade em resolver captchas manualmente — por exemplo, pessoas com limitações visuais ou motoras. O serviço resolve captchas automaticamente, permitindo continuar a usar sites facilmente.

**Para empresas que precisam trabalhar em grande escala com sites**

Otimize operações em massa: processe tarefas rapidamente, reduza custos e obtenha soluções confiáveis de captchas sem atrasos ou falhas.

## Como funciona (usando a API)

---

1. Você cria uma tarefa (task) e envia à API do CapMonster Cloud, especificando o `tipo` de captcha, `URL` da página, `websitekey` e outros parâmetros.

2. O serviço seleciona automaticamente a melhor estratégia de resolução: proxies integrados, algoritmos de reconhecimento, etc.

3. Quando a solução estiver pronta, a API retorna o resultado — geralmente um token — uma string que deve ser inserida no campo de formulário, enviada em uma requisição ou cookies que precisam ser aplicados no navegador.

4. Você utiliza o token obtido no site alvo (inserindo em form, data, XHR, etc.).

Se necessário, você pode consultar o status da tarefa e obter informações sobre saldo.

## Links

---

Links úteis para começar rapidamente:

[*Lista de captchas suportados*](https://docs.capmonster.cloud/pt-br/docs/captchas)

[*Como registrar-se e obter uma chave API*](https://docs.capmonster.cloud/pt-br/docs/getting-start)

[*Introdução à API*](https://docs.capmonster.cloud/pt-br/docs/category/api)

[*Como instalar e usar a extensão de navegador*](https://docs.capmonster.cloud/pt-br/docs/extension)

[*Bibliotecas para integração prática ao seu código*](https://docs.capmonster.cloud/pt-br/docs/getting-start/#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D0%BA%D0%BE%D0%B4%D0%B0)

