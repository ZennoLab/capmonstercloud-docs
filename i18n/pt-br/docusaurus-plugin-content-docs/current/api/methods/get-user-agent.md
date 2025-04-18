﻿---
sidebar_position: 4
sidebar_label: getUserAgent 
---

# getUserAgent

## Descrição

É importante que, ao enviar uma solicitação de reconhecimento de captcha, você especifique o *userAgent* (UA) atual do sistema operacional Windows.

Usar o *userAgent* atual do Windows ajuda a melhorar a precisão do reconhecimento de captcha e a reduzir o número de erros.
:::info ENDEREÇO DO MÉTODO
```http
https://capmonster.cloud/api/useragent/actual
```
:::

Para o tipo de captcha DataDome, um User-Agent diferente é usado. Você pode obter seu valor atual usando o seguinte método:
:::info ENDEREÇO DO MÉTODO
```http
https://capmonster.cloud/api/useragent/actual/datadome
```
:::