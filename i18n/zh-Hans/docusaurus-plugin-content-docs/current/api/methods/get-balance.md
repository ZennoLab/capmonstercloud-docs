---
sidebar_position: 3
sidebar_label: 获取账户余额
---
# getBalance：获取账户余额
:::info 方法地址
``` http
https://api.capmonster.cloud/getBalance
```

请求格式：`JSON POST`
:::

<!-- 方法地址：<https://api.capmonster.cloud/getBalance> -->

请求格式：JSON POST 
## **请求参数**
### `clientKey`
类型: `字符串` <br />
必需: `是`<br />
您的账户的唯一密钥

<!--

|**参数**|**类型**|**必需**|**值**|
| :-: | :-: | :-: | :-: |
|clientKey|字符串|是|您的账户的唯一密钥| -->

### **请求示例**
``` json
{
  "clientKey": "67b6bcbb1a728ea8d563de6d169a2057"
}
```
## **响应结构**
### `errorId`
类型: `整数` <br />
错误标识符。<br />**0** - 无错误，*errorCode*属性不存在<br />**1** - 有错误，错误信息在 *errorCode* 属性中
### `errorCode`
类型: `字符串` <br />
错误代码。查看[错误列表](../api-errors.md)。
### `balance`
类型: `小数` <br />
可用余额

<!-- |**属性**|**类型**|**值**|
\| :-: | :-: | :-: |
|errorId|整数|错误标识符。<br />**0** - 无错误，*errorCode*属性不存在<br />**1** - 有错误，错误信息在 *errorCode* 属性中|
|errorCode|字符串|错误代码。查看[错误列表](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310)。|
|balance|小数|可用余额| -->
### **示例**
``` json
{
 "errorId":0,
 "balance": 345.678
}
```
