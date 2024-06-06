---
sidebar_position: 5
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
            <td align="center">![](images\amazon.png)</td>
        </tr>
        <tr>
            <td align="center">whatsapp</td>
            <td align="center">![](images\whatsapp.png)</td>
        </tr>
        <tr>
            <td align="center">botdetect</td>
            <td align="center">![](images\botdetect.png)</td>
        </tr>
        <tr>
            <td align="center">facebook</td>
            <td align="center">![](images\facebook.png)</td>
        </tr>
        <tr>
            <td align="center">gmx</td>
            <td align="center">![](images\gmx.png)</td>
        </tr>
        <tr>
            <td align="center">google</td>
            <td align="center">![](images\google.png)</td>
        </tr>
        <tr>
            <td align="center">hotmail</td>
            <td align="center">![](images\hotmail.png)</td>
        </tr>
        <tr>
            <td align="center">mailru</td>
            <td align="center">![](images\mailru.png)</td>
        </tr>
        <tr>
            <td align="center">ok</td>
            <td rowspan="2" align="center">![](images\ok.png)</td>
        </tr>
        <tr>
            <td align="center">oknew</td>
        </tr>
        <tr>
            <td align="center">ramblerrus</td>
            <td align="center">![](images\rambler.png)</td>
        </tr>
        <tr>
            <td align="center">solvemedia</td>
            <td align="center">![](images\solvemedia.png)</td>
        </tr>
        <tr>
            <td align="center">steam</td>
            <td align="center">![](images\steam.png)</td>
        </tr>
        <tr>
            <td align="center">vk</td>
            <td align="center">![](images\vk.png)</td>
        </tr>
        <tr>
            <td align="center">yandex</td>
            <td align="center">![](images\yandex.png)</td>
        </tr>
        <tr>
            <td align="center">yandexnew (two words)</td>
			<td rowspan="2" align="center">![](images\yandexwave.png)</td>
        </tr>
        <tr>
            <td align="center">yandexwave</td>
        </tr>
        <tr>
            <td align="center">universal (all other text captcha types)</td>
            <td align="center">![](images\universal.png)</td>
        </tr>
    </tbody>
</table>

:::info Info
If you were unable to send a captcha to a specific module, please write to our [support team](https://helpdesk.zennolab.com/conversation/new), we will help you!
:::