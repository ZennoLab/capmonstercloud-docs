---
sidebar_position: 8
sidebar_label: HCaptcha ComplexImage
---

# **ComplexImageTask HCaptcha: решение каптчи hCaptcha**
Объект содержит данные о задаче на решение hCaptcha.

## **Пример изображения (первый тип)**

![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.001.png) 

### **Структура объекта первый тип**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи|
|class|String|да|hcaptcha|Определяет класс объекта задачи|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “https://i.postimg.cc/kg71cbRt/image-1.jpg”, “https://i.postimg.cc/6381Zx2j/image.jpg”, … ]|Список с адресами изображений. Максимум 18 элементов.|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, … ]|Список с изображениями в формате base64. Максимум 18 элементов.|
|metadata.Task|String|да|`Please click each image containing a mountain` и другие|Текст задания (<u>на английском</u>)|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы на которой решается каптча|

### **Пример запроса**

:::info Метод
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

**Пример ответа**

```json
{
  "errorId":0,
  "taskId":407533072
}
```

### **Получение результата**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|answer|Array|Список в булевыми значениями, true - означает, что нужно произвести клик на соответствующее этой позиции изображение|
|metadata||Объект, который определяет тип возвращаемого ответа|

**Пример:**

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

### **Ценообразование**

|**Наименование** |**Стоимость за 1000 картинок, $**|
| :-: | :-: |
|hCaptcha|0,02|

## **Примеры изображений (второй тип)**
|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.002.png)|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.003.png)|![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.004.png)|
| :-: | :-: | :-: |

### **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи|
|class|String|да|hcaptcha|Определяет класс объекта задачи|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “https://i.postimg.cc/vTn3YHr9/panda.jpg” ]|Список с адресами изображений. Максимум 18 элементов.|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ]|Список с изображениями в формате base64. Максимум 18 элементов.|
|metadata.Task|String|да|`Please click on the panda` и другие|Текст задания (<u>на английском</u>)|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы на которой решается каптча|

### **Пример запроса**

:::info Метод
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

**Пример ответа**
```json
{
  "errorId":0,
  "taskId":407533072
}
```

### **Получение результата**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|answer|Array|Список с координатами, по которым нужно произвести клик на соответствующем изображении|
|metadata|Object|Объект, который определяет тип возвращаемого ответа|

**Пример:**
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

### **Ценообразование:**

|**Наименование** |**Стоимость за 1000 картинок, $**|
| :-: | :-: |
|hCaptcha|0,02|

## **Пример изображения (третий тип)**

![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.005.png) 

### **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи|
|class|String|да|hcaptcha|Определяет класс объекта задачи|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “https://i.postimg.cc/4dmSy2YT/goat.jpg” ]|Список с адресами изображений. Максимум 18 элементов.|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…” ]|Список с изображениями в формате base64. Максимум 18 элементов.|
|metadata.Task|String|да|`What animal is shown in the image below?` и другие|Текст задания (<u>на английском</u>)|
|metadata.Classes|Array|да|[ "shark", "chicken", "goat", "hedgehog" ] и другие|Список со строковыми значениями, находящимися на правой половине каптчи (в том же порядке, как на изображении)|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы на которой решается каптча|

### **Пример запроса**

:::info Метод
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

**Пример ответа**
```json
{
  "errorId":0,
  "taskId":407533072
}
```

### **Получение результата**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|answer|Array|Список в булевыми значениями, true - означает, что нужно произвести клик на соответствующее этой позиции изображение|
|metadata|Object|Объект, который определяет тип возвращаемого ответа|

**Пример:**

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

### **Ценообразование:**

|**Наименование** |**Стоимость за 1000 картинок, $**|
| :-: | :-: |
|hCaptcha|0,02|

