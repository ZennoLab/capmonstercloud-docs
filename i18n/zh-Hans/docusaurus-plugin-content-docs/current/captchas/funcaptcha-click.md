---
sidebar_position: 9
sidebar_label: ComplexImageTask Funcaptcha
draft: true
---

# 复杂图片任务 FunCaptcha
该对象包含关于 FunCaptcha 解决的数据。

## **对象结构**

|**参数**|**类型**|**必需**|**可能的值**|**描述**|
| :- | :- | :- | :- | :- |
|type|String|是|ComplexImageTask|指定任务对象的类型。|
|class|String|是|funcaptcha|指定任务对象的类别。|
|imageUrls|Array|是（如果未填充 imagesBase64）|[“[https://i.postimg.cc/s2ZDrHXy/fc1.jpg](https://i.postimg.cc/s2ZDrHXy/fc1.jpg)”, …]|[单张图片](https://i.postimg.cc/s2ZDrHXy/fc1.jpg) （在数组中）|
|imagesBase64|Array|是（如果未填充 imageUrls）|[“/9j/4AAQSkZJRgABAQEAAAAAAAD…”, …]|[单张图片](https://i.postimg.cc/s2ZDrHXy/fc1.jpg) 以Base64格式 （在数组中）。|
|metadata.Task|String|是|`选择正确朝向的图像`等|任务文本（<u>英文</u>）。|
|userAgent|String|否|-|如果链接传递给了 imageUrls，上传图片时使用的浏览器用户代理。应该使用现代浏览器的用户代理，否则谷歌会返回一个错误，要求您更新浏览器。|
|websiteURL|String|否|-|解决验证码的页面的 URL。|

## **请求示例**
:::info 请求方法
```http
https://api.capmonster.cloud/createTask
```
:::

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "funcaptcha",
    "imageUrls":[ "https://i.postimg.cc/s2ZDrHXy/fc1.jpg" ],
    "metadata": {
      "Task": "选择正确朝上的图像"
    },
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36."
  }
}
```

**响应示例**
```json
{
  "errorId":0,
  "taskId":407533072
}
```

## **获取结果**
:::info 请求方法
```http
https://api.capmonster.cloud/getTaskResult
```
:::
使用 [getTaskResult](../api/methods/get-task-result.md) 方法获取验证码解决方案。根据系统负载情况，您将在300毫秒至6秒之间收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|answer|Array|布尔值列表，true 表示您需要点击对应位置的图像。|

**示例：**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, false, false, false, true, false ]
  }
}
```

## **定价**

|**费用**|**每1000个图像的费用, $**|
| :-: | :-: |
|Funcaptcha|0.15|

