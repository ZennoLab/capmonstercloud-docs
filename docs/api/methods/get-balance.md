﻿---
sidebar_position: 3
sidebar_label: getBalance
---

# getBalance : получение баланса

:::info Адрес метода
```http
https://api.brocapgpt/getBalance
```
формат запроса: `JSON POST`
:::

## **Параметры запроса**

### `clientKey`
Type: `String` <br />
Обязательный: `Да`<br />
Уникальный ключ вашей учетной записи

### **Пример тела запроса**

```json
{
  "clientKey": "67b6bcbb1a728ea8d563de6d169a2057"
}
```

## **Структура ответа**

### `errorId`
Type: `Integer` <br />
Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Код ошибки. См. [глоссарий ошибок](../api-errors).

### `balance`
Type: `Decimal` <br />
Количество доступных денег

### **Пример**

```json
{
 "errorId":0,
 "balance": 345.678
}
```
