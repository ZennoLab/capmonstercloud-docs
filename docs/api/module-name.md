---
sidebar_position: 5
sidebar_label: Передача имени модуля
title: "Передача имени модуля для распознавания капчи"
description: "Передача имени модуля для распознавания конкретной капчи может быть полезна в случаях работы с определенным сервисом (например, Google, SolveMedia, Whatsapp и т. д.). Это повысит скорость и качество распознавания и снизит вероятность возникновения ошибок."
---

# Передача имени модуля

Передача имени модуля для распознавания конкретной капчи может быть полезна в случаях работы с определенным сервисом (например, Google, SolveMedia, Whatsapp и т. д.).  Это повысит скорость и качество распознавания и снизит вероятность возникновения ошибок. 

## Как передать имя модуля в CapMonster Cloud, используя только ApiKey поле

Для того, чтобы передать в CapMonsterCloud информацию о модуле, который будет распознавать вашу капчу, используя только поле для указания ApiKey, вы можете дописать к ключу имя модуля в следующем формате: `{apikey}__имя-модуля`

Например, “00f87cb0f01330d33709ce3339ad0c8c__solvemedia” (**!важно**, API ключ и имя модуля разделить **двумя нижними подчеркиваниями**)

Список доступных имен модулей представлен ниже:
<table>
    <tbody>
        <tr>
            <td align="center">amazon</td>
            <td align="center">![](images\module-name\amazon.png)</td>
        </tr>
		<tr>
            <td align="center">apple</td>
			<td align="center">![](images\module-name\apple.png)</td>
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
            <td align="center">okeng</td>
            <td align="center">![](images\module-name\okeng.png)</td>
        </tr>
        <tr>
            <td align="center">okrus</td>
            <td align="center">![](images\module-name\okrus.png)</td>
        </tr>
		<tr>
            <td align="center">partiallyblur</td>
			<td align="center">![](images\module-name\partiallyblur.png)</td>
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
            <td align="center">whatsapp</td>
            <td align="center">![](images\module-name\whatsapp.png)</td>
        </tr>
        <tr>
            <td align="center">yandex</td>
            <td align="center">![](images\module-name\yandex.png)</td>
        </tr>		
        <tr>
            <td align="center">yandexnew (двух-словная капча)</td>
			<td rowspan="2" align="center">![](images\module-name\yandexwave.png)</td>
        </tr>
        <tr>
            <td align="center">yandexwave</td>
        </tr>		
        <tr>
            <td align="center">universal (все остальные текстовые капчи)</td>
            <td align="center">![](images\module-name\universal.png)</td>
        </tr>
    </tbody>
</table>

:::info Info
Если у вас не получилось отправить капчу на определенный модуль, пожалуйста, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!
:::