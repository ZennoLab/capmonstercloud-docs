---
sidebar_position: 4
title: "Описание ошибок распознавания капч"
description: "Коды ошибок API при распознавании капч, причины и рекомендации по предотвращению ошибок при интеграции API для решения и обхода капч на сайте сервиса Capmonster Cloud!"
---

# Описание ошибок

:::info Рекомендации по предотвращению ошибок:
- Убедитесь, что тип капчи, который вам нужно разгадать, поддерживается сервисом CapMonster Cloud.
- Проверяйте обновление документации, чтобы быть в курсе последних изменений в API и избежать использования устаревших методов или параметров.
- Используйте качественные прокси.
:::

### `INVALID KEY`
Код ошибки в API: `ERROR_KEY_DOES_NOT_EXIST` <br />
API-ключ не существует в системе или имеет неверный формат. Проверьте корректность его написания.

### `NO FUNDS`
Код ошибки в API: `ERROR_ZERO_BALANCE` <br />
Баланс учетной записи равен нулю. [Пополните баланс](https://capmonster.cloud/SelectPaymentType) своего кабинета, чтобы продолжить распознавание.

### `BIG IMAGE SIZE`
Код ошибки в API: `ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
Размер капчи которую вы загружаете более 50,000 байт.

### `ZERO IMAGE SIZE`
Код ошибки в API: `ERROR_ZERO_CAPTCHA_FILESIZE` <br />
Размер капчи которую вы загружаете менее 100 байт.

### `CAPTCHA ID IS NOT FOUND`
Код ошибки в API: `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
Капча с таким ID не была найдена в системе. Убедитесь что вы запрашиваете состояние капчи в течение 5 минут после загрузки.

### `CAPTCHA UNSOLVABLE`
Код ошибки в API: `ERROR_CAPTCHA_UNSOLVABLE` <br />
Данный тип капч не поддерживается сервисом или картинка не содержит ответа, то есть является шумом. Возможно она является поврежденной или неправильно отрисованной.

### `CAPTCHA IS NOT READY`
Код ошибки в API: `CAPTCHA_NOT_READY` <br />
Решение данной капчи еще не готово.

### `REQUEST IS NOT ALLOWED FROM YOUR IP`
Код ошибки в API: `ERROR_IP_NOT_ALLOWED` <br />
Запрос с этого IP адреса с текущим ключом отклонен. Откройте раздел настроек в личном кабинете и [добавьте свой IP в список доверенных](https://capmonster.cloud/Account/Settings).

### `IP BANNED`
Код ошибки в API: `ERROR_IP_BANNED` <br />
Вы превысили лимит запросов с неправильным API-ключом, проверьте правильность ключа в панели управления и через некоторое время повторите попытку.

### `INCORRECT METHOD`
Код ошибки в API: `ERROR_NO_SUCH_METHOD` <br />
Неправильно указан [тип капчи](../captchas) (значение параметра «type»).

### `REQUEST LIMIT EXCEEDED`
Код ошибки в API: `ERROR_TOO_MUCH_REQUESTS` <br />
Вы превысили лимит запросов на получение ответа по одной задаче. Попробуйте запрашивать [результат задачи](./methods/get-task-result.md) не чаще 1 раза в 2 секунды.

### `THE DOMAIN IS NOT ALLOWED`
Код ошибки в API: `ERROR_DOMAIN_NOT_ALLOWED` <br />
Капчу с некоторых доменов нельзя разгадывать в CapMonster Cloud. При попытке создать задание для такого домена вернётся эта ошибка.

### `THE TOKEN IS EXPIRED`
Код ошибки в API: `ERROR_TOKEN_EXPIRED` <br />
При попытке распознать капчу её провайдер сообщил, что истёк срок действия дополнительного токена. Попробуйте отправить капчу с новым токеном.

### `NO FREE SERVERS`
Код ошибки в API: `ERROR_NO_SLOT_AVAILABLE` <br />
На данный момент нет свободных серверов для распознавания этого задания. Повторите попытку через некоторое время.

### `INVALID RECAPTCHA SITEKEY`
Код ошибки в API: `ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
Неверный sitekey.

### `INVALID RECAPTCHA DOMAIN`
Код ошибки в API: `ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
Домен не соответствует sitekey.

### `RECAPTCHA TIMEOUT`
Код ошибки в API: `ERROR_RECAPTCHA_TIMEOUT` <br />
Превышен таймаут решения рекапчи, скорее всего из-за медленного прокси-сервера или сервера Google.

### `YOUR IP IS BLOCKED`
Код ошибки в API: `ERROR_IP_BLOCKED` <br />
Доступ к API с этого IP запрещен из-за большого количества ошибок.

### `FAILED TO CONNECT PROXY`
Код ошибки в API: `ERROR_PROXY_CONNECT_REFUSED` <br />
Не удалось подключиться к прокси-серверу, таймаут соединения. 

### `THE PROXY IP IS BANNED`
Код ошибки в API: `ERROR_PROXY_BANNED` <br />
IP прокси забанен на целевом сервисе капчи. 

### `INCORRECT TASK TYPE`
Код ошибки в API: `ERROR_TASK_NOT_SUPPORTED` <br />
Тип задачи не поддерживается или указан неверно. Проверьте свойство «type» в объекте задачи. 

### `ERROR_TASK_ABSENT`
Код ошибки в API: `ERROR_TASK_ABSENT` <br />
Объект task не найден или отправлен невалидный JSON в запросе [createTask](./methods/create-task.md).

### `USERAGENT IS EXPIRED`
Код ошибки в API: `ERROR_WRONG_USERAGENT`<br />
В запросе указан невалидный User Agent, ознакомиться с текущим User Agent вы можете в [статье](./methods/get-user-agent.md).