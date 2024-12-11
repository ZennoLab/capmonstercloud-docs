---
sidebar_position: 5
---

# Nome do Módulo

Passar o nome do módulo para reconhecer um captcha específico pode ser útil em casos de trabalho com um serviço específico (por exemplo, Google, SolveMedia, Whatsapp, etc.). Isso aumentará a velocidade e a qualidade do reconhecimento e reduzirá a probabilidade de erros.

## Como passar o nome do módulo para CapMonster Cloud, usando apenas o campo ApiKey

Para enviar ao CapMonsterCloud informações sobre o módulo que reconhecerá seu captcha, usando apenas o campo para especificar ApiKey, você pode adicionar o nome do módulo à chave no seguinte formato: `{apikey}__moduleName`

Por exemplo, “00f87cb0f01330d33709ce3339ad0c8c__solvemedia” (**!importante**, separe a chave da API e o nome do módulo com um **duplo sublinhado**)

A lista de nomes de módulos disponíveis:
<table>
    <tbody>
        <tr>
            <td align="center">amazon</td>
            <td align="center">![](images\module-name\amazon.png)</td>
        </tr>
        <tr>
            <td align="center">whatsapp</td>
            <td align="center">![](images\module-name\whatsapp.png)</td>
        </tr>
        <tr>
            <td align="center">botdetect</td>
            <td align="center">![](images\module-name\botdetect.png)</td>
        </tr>
        <tr>
            <td align="center">facebook</td>
            <td align="center">![](images\module-name\facebook.png)</td>
        </tr>
        <tr>
            <td align="center">gmx</td>
            <td align="center">![](images\module-name\gmx.png)</td>
        </tr>
        <tr>
            <td align="center">google</td>
            <td align="center">![](images\module-name\google.png)</td>
        </tr>
        <tr>
            <td align="center">hotmail</td>
            <td align="center">![](images\module-name\hotmail.png)</td>
        </tr>
        <tr>
            <td align="center">mailru</td>
            <td align="center">![](images\module-name\mailru.png)</td>
        </tr>
        <tr>
            <td align="center">okrus</td>
            <td align="center">![](images\module-name\okrus.png)</td>
        </tr>
		<tr>
            <td align="center">okeng</td>
            <td align="center">![](images\module-name\okeng.png)</td>
        </tr>
        <tr>
            <td align="center">ramblerrus</td>
            <td align="center">![](images\module-name\rambler.png)</td>
        </tr>
		<tr>
            <td align="center">ramblerrusnew</td>
            <td align="center">![](images\module-name\ramblerrusnew.png)</td>
        </tr>
        <tr>
            <td align="center">solvemedia</td>
            <td align="center">![](images\module-name\solvemedia.png)</td>
        </tr>
        <tr>
            <td align="center">steam</td>
            <td align="center">![](images\module-name\steam.png)</td>
        </tr>
        <tr>
            <td align="center">vk</td>
            <td align="center">![](images\module-name\vk.png)</td>
        </tr>
        <tr>
            <td align="center">yandex</td>
            <td align="center">![](images\module-name\yandex.png)</td>
        </tr>
        <tr>
            <td align="center">yandexnew (duas palavras)</td>
			<td rowspan="2" align="center">![](images\module-name\yandexwave.png)</td>
        </tr>
        <tr>
            <td align="center">yandexwave</td>
        </tr>
		<tr>
            <td align="center">partiallyblur</td>
			<td align="center">![](images\module-name\partiallyblur.png)</td>
        </tr>
        <tr>
            <td align="center">universal (todos os outros tipos de captcha de texto)</td>
            <td align="center">![](images\module-name\universal.png)</td>
        </tr>
    </tbody>
</table>

:::info Informação
Se você não conseguiu enviar um captcha para um módulo específico, por favor, escreva para nossa [equipe de suporte](https://helpdesk.zennolab.com/conversation/new), nós iremos ajudá-lo!
:::