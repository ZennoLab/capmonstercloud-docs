---
sidebar_position: 3
sidebar_label: getBalance
---

# getBalance : получение баланса

:::info Адрес метода
```http
https://api.capmonster.cloud/getBalance
```
формат запроса: `JSON POST`
:::

<!-- Адрес метода: <https://api.capmonster.cloud/getBalance>

формат запроса: JSON POST -->

## **Параметры запроса**

### `clientKey`
Type: `String` <br />
Обязательный: `Да`<br />
Уникальный ключ вашей учетной записи

<!-- 
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи| -->

### **Пример тела запроса**

```json
{
  "clientKey": "API_KEY"
}
```

## **Структура ответа**

### `errorId`
Type: `Integer` <br />
Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*

### `errorCode`
Type: `String` <br />
Код ошибки. См. [глоссарий ошибок](../api-errors.md).

### `balance`
Type: `Decimal` <br />
Количество доступных денег

<!-- |**Свойство**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|balance|Decimal|Количество доступных денег| -->

### **Пример**

```json
{
 "errorId":0,
 "balance": 345.678
}
```
