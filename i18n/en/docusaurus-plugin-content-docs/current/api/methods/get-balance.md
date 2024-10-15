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


## Request parameters

### `clientKey`
Type: `String` <br />
Required: `Yes`<br />
Unique key of your account

### Body Example

```json
{
  "clientKey": "API_KEY"
}
```

## Response structure

### `errorId`
Type: `Integer` <br />
Error identificator.<br />**0** - no error, no *errorCode* property<br />**1** - error, information about it is in the *errorCode* property

### `errorCode`
Type: `String` <br />
Error code. Check out [error list](../api-errors.md).

### `balance`
Type: `Decimal` <br />
Amount of money available


### Example

```json
{
 "errorId":0,
 "balance": 345.678
}
```
