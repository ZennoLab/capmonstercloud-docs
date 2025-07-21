---
sidebar_position: 5
sidebar_label: Passing module name
title: "Passing the module name for captcha recognition"
description: "Passing the module name to recognize a specific captcha can be useful in cases of working with a specific service (e.g. Google, SolveMedia, Whatsapp, etc.).  This will increase the speed and quality of recognition and reduce the probability of errors." 
---

# Passing module name

Passing the module name to recognize a specific captcha can be useful in cases of working with a specific service (e.g. Google, SolveMedia, Whatsapp, etc.).  This will increase the speed and quality of recognition and reduce the probability of errors. 

## How to pass module name to CapMonster Cloud, using ApiKey field only

In order to send to CapMonsterCloud information about the module that will recognize your captcha, using only the field to specify ApiKey, you can add the module name to the key in the following format: `{apikey}__moduleName`

For example, “00f87cb0f01330d33709ce3339ad0c8c__solvemedia” (**!important**, separate the API key and module name with a **double underscore**)

The list of available module names:
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
            <td align="center">wikimedia_paddle_ensemble</td>
            <td align="center">![](images\module-name\wikimedia.png)</td>
        </tr>
        <tr>
            <td align="center">yandex</td>
            <td align="center">![](images\module-name\yandex.png)</td>
        </tr>        
        <tr>
            <td align="center">yandexnew (two-word captcha)</td>
            <td rowspan="2" align="center">![](images\module-name\yandexwave.png)</td>
        </tr>
        <tr>
            <td align="center">yandexwave</td>
        </tr>        
        <tr>
            <td align="center">captcha_math</td>
            <td align="center">![](images\module-name\captcha_math.png)</td>
        </tr>
        <tr>
            <td align="center">universal (all other text captchas)</td>
            <td align="center">![](images\module-name\universal.png)</td>
        </tr>
    </tbody>
</table>

:::info Info
If you were unable to send a captcha to a specific module, please write to our [support team](https://helpdesk.zennolab.com/conversation/new), we will help you!
:::