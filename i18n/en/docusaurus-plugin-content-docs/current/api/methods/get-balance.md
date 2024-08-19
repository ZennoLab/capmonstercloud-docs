---
sidebar_position: 3
sidebar_label: getBalance
---

# getBalance : retrieve account balance

:::info Method address
```http
https://api.capmonster.cloud/getBalance
```

request format: `JSON POST`
:::

<!-- Адрес метода: <https://api.capmonster.cloud/getBalance>

формат запроса: JSON POST -->

## **Request parameters**

### `clientKey`
Type: `String` <br />
Required: `Yes`<br />
Unique key of your account

<!-- 
|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :-: | :-: | :-: | :-: |
|clientKey|String|Да|Уникальный ключ вашей учетной записи| -->

### **Body Example**

```json
{
  "clientKey": "API_KEY"
}
```

## **Response structure**

### `errorId`
Type: `Integer` <br />
Error identificator.<br />**0** - no error, no *errorCode* property<br />**1** - error, information about it is in the *errorCode* property

### `errorCode`
Type: `String` <br />
Error code. Check out [error list](../api-errors.md).

### `balance`
Type: `Decimal` <br />
Amount of money available

<!-- |**Свойство**|**Тип**|**Значение**|
| :-: | :-: | :-: |
|errorId|Integer|Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode*|
|errorCode|String|Код ошибки. См. [глоссарий ошибок](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310).|
|balance|Decimal|Количество доступных денег| -->

### **Example**

```json
{
 "errorId":0,
 "balance": 345.678
}
```
