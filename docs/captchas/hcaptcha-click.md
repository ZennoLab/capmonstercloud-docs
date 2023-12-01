---
sidebar_position: 8
sidebar_label: ComplexImageTask HCaptcha
---

# ComplexImageTask HCaptcha
Объект содержит данные о задаче на решение hCaptcha.

## **Запрос на создание задачи**
### **Структура отправляемого объекта**
:::info Метод
<https://api.capmonster.cloud/createTask>
:::
|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи|
|class|String|да|hcaptcha|Определяет класс объекта задачи|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “[https://i.postimg.cc/kg71cbRt/image-1.jpg](https://i.postimg.cc/kg71cbRt/image-1.jpg)”,… ]|Список с адресами изображений. Максимум 18 элементов.|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”,… ]|Список с изображениями в формате base64. Максимум 18 элементов.|
|metadata.Task|String|да|`Please click on the panda` и другие|Текст задания (<u>на английском</u>)|
|exampleImageUrls|Array|не всегда|[ “[https://i.postimg.cc/GmBgwnDm/4type-example-image.png](https://i.postimg.cc/GmBgwnDm/4type-example-image.png)”]|Список с адресами изображений. Должен содержать 1 элемент.|
|exampleImagesBase64|Array|не всегда|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”]|Список с изображениями в формате base64. Должен содержать 1 элемент.|
|metadata.Classes|Array|не всегда|[ "shark", "chicken", "goat", "hedgehog" ] и другие|Список со строковыми значениями, находящимися на правой половине каптчи (в том же порядке, как на изображении)|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы на которой решается каптча|

## **Запрос на получение ответа**
:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

### **Структура объекта solution**
|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|answer|Array of objects|Список ответов на каждое из переданных изображений.|
|metadata.AnswerType|string|Тип возвращаемого ответа.|

### **Типы ответов**
|**Тип ответа**|**Формат ответа**|**Пример ответа**|**Описание**|
| :- | :- | :- | :- |
|Grid|Array of boolean|`[true, false, true]`|Список в булевыми значениями, true - означает, что нужно произвести клик на соответствующее этой позиции изображение|
|Coordinate|Array of objects|`[{ "X":371, "Y":505.0000112 }]`|Список с координатами, по которым нужно произвести клик на соответствующем изображении|

### **Пример ответа**
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

## **Пример изображения (первый тип)**

![](Aspose.Words.e3dd6ce8-93b3-4001-a846-cb36c3e4b7b5.001.png) 

:::info Правильно выберите тип задания
Данный тип заданий не содержит референсного изображения, такого как в [четвертом типе](#пример-изображения-четвертый-тип)
:::

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
Тип получаемого ответа - [**Grid**](#типы-ответов).

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
Тип получаемого ответа - [**Coordinate**](#типы-ответов).

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

Этот тип капч должен содержать поле **metadata.Classes**.

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
Тип получаемого ответа - [**Grid**](#типы-ответов).

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

## **Пример изображения (четвертый тип)**

![](hcaptcha-task-types/4type.png)

Для данного запроса обязательное поле **exampleImageUrls** или **exampleImagesBase64**. Оно должно содержать одну картинку.

Поле **imageUrls** или **imagesBase64** должно содержать 9 картинок.

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
    "imageUrls": [
      "https://i.postimg.cc/13LCy70c/4type-image-00.png",
      "https://i.postimg.cc/1zwWX0Jx/4type-image-01.png",
      "https://i.postimg.cc/MTw9QcFn/4type-image-02.png",
      "https://i.postimg.cc/kGXwT099/4type-image-03.png",
      "https://i.postimg.cc/3NS1VtJG/4type-image-04.png",
      "https://i.postimg.cc/m2k8CW8y/4type-image-05.png",
      "https://i.postimg.cc/rm9QC8BQ/4type-image-06.png",
      "https://i.postimg.cc/tR2Bs4tg/4type-image-07.png",
      "https://i.postimg.cc/m2nVSpnf/4type-image-08.png" ],
    "exampleImageUrls": [ "https://i.postimg.cc/GmBgwnDm/4type-example-image.png" ],
    "metadata": {
      "Task": "Please select all images that appear warmer in comparison to other images"
    }
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
Тип получаемого ответа - [**Grid**](#типы-ответов).

**Пример:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": { 
    "answer": [ false, true, true, false, false, false, true, false, false ],
    "metadata": { "AnswerType": "Grid" }
  }
}
```

### **Ценообразование:**

|**Наименование** |**Стоимость за 1000 картинок, $**|
| :-: | :-: |
|hCaptcha|0,02|

