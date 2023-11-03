---
sidebar_position: 9
sidebar_label: FunCaptcha Click
---

# ComplexImageTask Funcaptcha: Funcaptcha solving
The object contains data about the FunCaptcha solving.

## **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the type of task object.|
|class|String|yes|funcaptcha|Specifies the class of task object.|
|imageUrls|Array|yes (if imagesBase64 is not filled)|[ “<https://i.postimg.cc/s2ZDrHXy/fc1.jpg>”, … ]|List with image addresses. Maximum one url per request!|
|imagesBase64|Array|yes (if imageUrls is not filled)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, … ]|List with images in base64 format. Maximum one element per request!|
|metadata.Task|String|yes|`Pick the image that is the correct way up` and others|Task text (<u>in English</u>).|
|userAgent|String|no|-|The browser User Agent used when uploading images if links were passed to imageUrls. You should use a modern browser signature or Google will return an error asking you to update your browser.|
|websiteURL|String|no|-|URL of the page where the captcha is solved.|

## **Request example**
:::info Method
<https://api.capmonster.cloud/createTask>
:::

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "funcaptcha",
    "imageUrls":[ "https://i.postimg.cc/s2ZDrHXy/fc1.jpg" ],
    "metadata": {
      "Task": "Pick the image that is the correct way up"
    },
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36."
  }
}
```

**Response example**
```json
{
  "errorId":0,
  "taskId":407533072
}
```

## **Getting the results**
:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|answer|Array|List in boolean values, true - means that you need to click on the image corresponding to this position.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, false, false, false, true, false ]
  }
}
```

## **Pricing**

|**Cost**|**Cost per 1000 images, $**|
| :-: | :-: |
|Funcaptcha|0,15|

