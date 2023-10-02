---
sidebar_position: 8
sidebar_label: HCaptcha Click
---

# **ComplexImageTask HCaptcha: hCaptcha solving**
The object contains data about the task for solving hCaptcha. 

## **Image example (first type)**

![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.001.png) 

### **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the task object type.|
|class|String|yes|hcaptcha|Specifies the task object class.|
|imageUrls|Array|yes (if imagesBase64 is not filled)|[ “<https://i.postimg.cc/kg71cbRt/image-1.jpg>”, “<https://i.postimg.cc/6381Zx2j/image.jpg>”, … ]|List with image URLs. Max 18 elements per request.|
|imagesBase64|Array|yes (if imageUrls is not filled)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, … ]|List with images in base64 format. Max 18 elements per request.|
|metadata.Task|String|yes|Please click each image containing a mountain and others|Task text (in English).|
|userAgent|String|no|-|The browser User-Agent to use when loading images if links were passed in imageUrls. It is required to use a modern browser signature, otherwise Google will return an error asking for a browser update.|
|websiteURL|String|no|-|URL of the page where the captcha is solved.|

### **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "hcaptcha",
    "imageUrls":[ "https://i.postimg.cc/kg71cbRt/image-1.jpg", "https://i.postimg.cc/6381Zx2j/image.jpg" ],
    "metadata": {
      "Task": "Please click each image containing a mountain"
    },
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36.",
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
:::info Wethod
<https://api.capmonster.cloud/getTaskResult>
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|answer|Array|List with boolean values, "true" means that you need to click on the image corresponding to this position.|
|metadata||An object that specifies the type of response to return.|

**Example:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, true ],
    "metadata": { "AnswerType": "Grid" }
  }
}
```

### **Pricing**

|**Name** |**Cost per 1000 images, $**|
| :-: | :-: |
|hCaptcha|0,02|

## **Image example (second type)**
|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.002.png)|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.003.png)|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.004.png)|
| :-: | :-: | :-: |

### **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the task object type.|
|class|String|yes|hcaptcha|Specifies the task object class.|
|imageUrls|Array|yes (if imagesBase64 is not filled)|[ “<https://i.postimg.cc/vTn3YHr9/panda.jpg>” ]|List with image URLs. Max 18 elements per request.|
|imagesBase64|Array|yes (if imageUrls is not filled)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ]|List with images in base64 format. Max 18 elements per request.|
|metadata.Task|String|yes|Please click on the panda и другие|Task text (in English).|
|userAgent|String|no|-|The browser User-Agent to use when loading images if links were passed in imageUrls. It is required to use a modern browser signature, otherwise Google will return an error asking for a browser update.|
|websiteURL|String|no|-|URL of the page where the captcha is solved|

### **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "hcaptcha",
    "imagesBase64": [ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ],
    "metadata": {
      "Task": "Please click on the panda"
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

### **Getting a result**
:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|answer|Array|List with boolean values, "true" means that you need to click on the image corresponding to this position.|
|metadata|Object|An object that specifies the type of response to return.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": { 
    "answer": [ { "X":371, "Y":505.0000112 } ],
    "metadata": { "AnswerType": "Coordinate" }
  }
}
```

### **Pricing:**

|**Name** |**Cost per 1000 images, $**|
| :-: | :-: |
|hCaptcha|0,02|

## **Image example (third type)**

![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.005.png) 

### **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the task object type.|
|class|String|yes|hcaptcha|Specifies the task object class.|
|imageUrls|Array|yes (if imagesBase64 is not filled)|[ “<https://i.postimg.cc/4dmSy2YT/goat.jpg>” ]|List with image URLs. Max 18 elements per request.|
|imagesBase64|Array|yes (if imageUrls is not filled)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ]|List with images in base64 format. Max 18 elements per request.|
|metadata.Task|String|yes|What animal is shown in the image below? and others|Task text (in English).|
|metadata.Classes|Array|yes|[ "shark", "chicken", "goat", "hedgehog" ] and others|List with string values located on the right half of the captcha (in the same order as in the image).|
|userAgent|String|no|-|The browser User-Agent to use when loading images if links were passed in imageUrls. It is required to use a modern browser signature, otherwise Google will return an error asking for a browser update.|
|websiteURL|String|no|-|URL of the page where the captcha is solved.|

### **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::

```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type": "ComplexImageTask",
    "class": "hcaptcha",
    "imagesBase64": [ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ],
    "metadata": {
      "Task": "What animal is shown in the image below?",
      "Classes": [ "shark", "chicken", "goat", "hedgehog" ]
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

### **Getting a result**
:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|answer|Array|List with boolean values, "true" means that you need to click on the image corresponding to this position.|
|metadata|Object|An object that specifies the type of response to return.|

**Example:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": { 
    "answer": [ false, false, true, false ],
    "metadata": { "AnswerType": "Grid" }
  }
}
```

### **Pricing:**

|**Name** |**Cost per 1000 images, $**|
| :-: | :-: |
|hCaptcha|0,02|

