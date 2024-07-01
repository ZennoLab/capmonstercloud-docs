---
sidebar_position: 3
sidebar_label: getBalance
---

# getBalance : retrieve account balance

:::info Method address
```http
https://api.brocapgpt/getBalance
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

### **Body Example**

```json
{
  "clientKey": "67b6bcbb1a728ea8d563de6d169a2057"
}
```

## **Response structure**

### `errorId`
Type: `Integer` <br />
Error identificator.<br />**0** - no error, no *errorCode* property<br />**1** - error, information about it is in the *errorCode* property

### `errorCode`
Type: `String` <br />
Error code. Check out [error list](../api-errors).

### `balance`
Type: `Decimal` <br />
Amount of money available

### **Example**

```json
{
 "errorId":0,
 "balance": 345.678
}
```
