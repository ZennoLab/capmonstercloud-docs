---
sidebar_position: 3
sidebar_label: getBalance
title: "Метод getBalanse — проверка Баланса для Решения Капч в API Capmonster Cloud"
description: "Полное описание метода getBalance API Capmonster Cloud. Узнайте, как проверить баланс аккаунта для работы с капчами, используя удобный API в руководстве Capmonster Cloud Docs."
---

# getBalance : получение баланса

:::info Адрес метода
```http
https://api.capmonster.cloud/getBalance
```
формат запроса: `JSON POST`
:::

## Параметры запроса

### `clientKey`
Type: `String` <br />
Обязательный: `Да`<br />
Уникальный ключ вашей учетной записи

### Пример тела запроса

```json
{
  "clientKey": "API_KEY"
}
```

## Структура ответа

### `errorId`
Type: `Integer` <br />
Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Код ошибки. См. [глоссарий ошибок](../api-errors.md).

### `balance`
Type: `Decimal` <br />
Количество доступных денег

### Пример

```json
{
 "errorId":0,
 "balance": 345.678
}
```
