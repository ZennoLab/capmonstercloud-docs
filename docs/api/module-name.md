---
sidebar_position: 5
draft: true
---

# Передача имени модуля
## Как передать имя модуля в CapMonster Cloud, используя только ApiKey поле

Для того, чтобы передать в CapMonsterCloud информацию о модуле, который будет распознавать вашу капчу, используя только поле для указания ApiKey, вы можете дописать к ключу имя модуля в следующем формате: `{apikey}__имя-модуля`

Например, “00f87cb0f01330d33709ce3339ad0c8c__solvemedia” (**!важно**, API ключ и имя модуля разделить **двумя нижними подчеркиваниями**)

Список доступных имен модулей представлен ниже:

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
- yandexnew (двух-словная каптча)
- yandexwave
- universal (все остальные текстовые каптчи)

:::info Info
Если у вас не получилось отправить капчу на определенный модуль, пожалуйста, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!
:::