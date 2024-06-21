---
sidebar_position: 1
sidebar_label: 请求任务结果
---
# getTaskResult：请求任务结果
## **描述**
创建任务后，您需要通过定期检查解决状态来获取其响应。

:::info 信息 方法地址
``` http
https://api.capmonster.cloud/getTaskResult
```

请求格式：`JSON POST`
:::

<!-- 方法地址：<https://api.capmonster.cloud/getTaskResult/>
请求格式：JSON POST -->

:::caution 注意
限制：每个任务最多120次请求。如果超过限制，用户账户可能会被暂时锁定。
:::

---
## **请求参数：**
### `clientKey`
类型: `字符串` <br />
必需: `是`<br />
您账户的唯一密钥。
### `taskId`
类型: `整数` <br />
必需: `是`<br />
在 [createTask](./create-task.md)方法中获得的任务 ID。
<!-- |**参数**|**类型**|**必需**|**值**|
\| :-: | :-: | :-: | :-: |
|clientKey|字符串|是|您账户的唯一密钥|
|taskId|整数|是|在 [createTask](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/425989/createTask)方法中获得的任务 ID| -->
----------------------------------------------------------------------------------------------------------------------
### **请求示例**
``` json
{
  "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
  "taskId": 7654321
}
```

---
## **响应结构**
### `errorId`
类型: `整数` <br />
错误标识符。<br />**0** - 无错误，*errorCode* 属性不存在；<br />**1** - 发生错误，错误信息在 *errorCode* 属性中。
### `errorCode`
类型: `字符串` <br />
错误代码。请查看 [错误列表](../api-errors.md)。
### `status`
类型: `字符串` <br />
**processing** -  任务尚未完成；<br />**ready** - 任务完成，解决方案可以在 *solution* 属性中找到。
### `solution`
类型: `对象` <br />
任务结果数据。不同类型的任务有不同的格式。
<!-- |**属性**|**类型**|**值**|
\| :-: | :-: | :-: |
|errorId|整数|错误标识符。<br />**0** - 无错误，*errorCode* 属性不存在<br />**1** - 发生错误，错误信息在 *errorCode* 属性中|
|errorCode|字符串|错误代码。请查看 [错误列表](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/295310)。|
|status|字符串|**processing** - 任务尚未完成<br />**ready** - 任务完成，解决方案可以在 *solution* 属性中找到|
|solution|对象|任务结果数据。不同类型的任务有不同的格式。| -->
------------------------------------------------------------------------------------------------
### **响应示例：**
处理中的响应
``` json
{
  "errorCode": null,
  "errorDescription": null,
  "errorId": 0,
  "status": "processing"
}
```

<!-- |<p>{</p><p>    "errorCode": "null",</p><p>    "errorDescription": "null",</p><p>    "errorId": 0,</p><p>    "status": "processing",</p><p>}</p>|
| :- | -->

成功的响应
``` json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
