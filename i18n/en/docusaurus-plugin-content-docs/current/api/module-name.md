---
sidebar_position: 5
---

# Passing module name

Passing the module name to recognize a specific captcha can be useful in cases of working with a specific service (e.g. Google, SolveMedia, Whatsapp, etc.).  This will increase the speed and quality of recognition and reduce the probability of errors. 

## How to pass module name to CapMonster Cloud, using ApiKey field only

In order to send to CapMonsterCloud information about the module that will recognize your captcha, using only the field to specify ApiKey, you can add the module name to the key in the following format: `{apikey}__moduleName`

For example, “00f87cb0f01330d33709ce3339ad0c8c__solvemedia” (**!important**, separate the API key and module name with a **double underscore**)

The list of available module names:

- amazon
- whatsapp
- botdetect
- facebook
- gmx
- google
- hotmail
- mailru
- ok
- oknew
- ramblerrus
- solvemedia
- steam
- vk
- yandex
- yandexnew (two words)
- yandexwave
- universal (all other text captcha types)

:::info Info
If you were unable to send a captcha to a specific module, please write to our [support team](https://helpdesk.zennolab.com/conversation/new), we will help you!
:::