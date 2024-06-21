---
sidebar_position: 7
sidebar_label: ComplexImageTask Recaptcha
---

# ComplexImageTask Recaptcha
The object contains data about the task for solving ReCaptcha2 from Google.

## **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the task object type.|
|class|String|yes|recaptcha|Specifies the task object class.|
|imageUrls|Array|yes (if imagesBase64 is not filled)|[ “[https://i.postimg.cc/yYjg75Kv/img1.jpg](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg)”]|Single image 4x4, [3x3](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg) or a new 1x1 captcha part (in an array).|
|imagesBase64|Array|yes (if imageUrls is not filled)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”]|Single image 4x4, [3x3](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg) or a new 1x1 captcha part in base64 format (in an array).|
|metadata.Grid|String|yes|4x4, 3x3, 1x1|Image grid size.|
|metadata.TaskDefinition|String|yes (if metadata.Task is not filled)|`/m/015qff` and others|<p>Technical value that defines the task type</p><p>**How to get TaskDefinition**</p><p>The data can be found in responses to `/recaptcha/{recaptchaApi}/reload` or `/recaptcha/{recaptchaApi}/userverify` requests, where recaptchaApi is "enterprise" or "api2" depending on the Recaptcha type. The response contains json, in which one can take a list of TaskDefinitions for loaded captchas.</p>|
|metadata.Task|String|yes (if metadata.TaskDefinition is not filled)|`Click on traffic lights` and others|Task text (<u>in English</u>).|
|userAgent|String|no|-|The browser User-Agent to use when loading images if links were passed in imageUrls. It is required to use a modern browser signature, otherwise Google will return an error asking for a browser update.|
|websiteURL|String|no|-|URL of the page where the captcha is solved.|

### **Description of parameters**

**imageUrls**: links to images.

**imagesBase64**: images in Base64 format.

**metadata.Grid**: additional metadata related to image grid sizes.

**metadata.TaskDefinition**: task description identifier/type, e.g.: `/m/015qff` means "Click on traffic lights".

![](taskdefinition.png)

**metadata.Task**: additional metadata related to the task.

**userAgent**: information about the user agent. Current userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36

**websiteURL**: address of the web page with the captcha.

## **Request example**

:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "recaptcha",
    "imageUrls":[ "https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg" ],
    "metadata": {
      "Task": "Click on traffic lights",
      "Grid": "3x3",
      "TaskDefinition": "/m/015qff"
    },
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "websiteUrl": "https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=middle"
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
### **Getting a result**
:::info Method
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|answer|Array|List with boolean values, "true" means that you need to click on the image corresponding to this position.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, false, false, false, true, false, false, false, false ]
  }
}
```

## **Pricing**: 

||**Name**|**Cost per 1000 images, $**|**Cost per 1000 new dynamic images, $**|
| :-: | :-: | :-: | :-: |
|1|<p>reCAPTCHA 2 (3\*3)</p><p>![](Aspose.Words.3eba36bc-cab6-486e-9e8f-1e38b225e806.001.png)</p><p></p>|0,2|0,04 |
|2|<p>reCAPTCHA 2 (4\*4)</p><p>![](Aspose.Words.3eba36bc-cab6-486e-9e8f-1e38b225e806.002.png)</p>|0,1|not applicable|

