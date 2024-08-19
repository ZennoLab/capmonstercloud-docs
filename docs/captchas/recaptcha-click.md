---
sidebar_position: 7
sidebar_label: ComplexImageTask Recaptcha
---

# ComplexImageTask Recaptcha
Объект содержит данные о задаче на решение ReCaptcha2 от Google.

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи.|
|class|String|да|recaptcha|Определяет класс объекта задачи.|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “[https://i.postimg.cc/yYjg75Kv/img1.jpg](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg)”]|Цельное изображение 4x4, [3x3](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg) или новой части капчи 1x1 (в массиве).|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”]|Цельное изображение 4x4, [3x3](https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg) или новой части капчи 1x1 в формате base64 (в массиве).|
|metadata.Grid|String|да|4x4, 3x3, 1x1|Размер сетки с изображениями.|
|metadata.TaskDefinition|String|да (если не заполнено metadata.Task)|`/m/015qff` и другие|<p>Техническое значение, определяющее тип задания</p><p>**Как получить TaskDefinition**</p><p>Данные можно найти в ответах на запросы `/recaptcha/{recaptchaApi}/reload` или `/recaptcha/{recaptchaApi}/userverify`, где recaptchaApi - это "enterprise" или "api2" в зависимости от типа Recaptcha. В ответе лежит json, в котором можно взять список TaskDefinition-ов для подгруженных капч.</p>|
|metadata.Task|String|да (если не заполнено metadata.TaskDefinition)|`Click on traffic lights` и другие|Текст задания (<u>на английском</u>).|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы, на которой решается капча.|

### **Описание параметров**

**imageUrls**: ссылки на изображения.

**imagesBase64**: изображения в формате Base64.

**metadata.Grid**: дополнительные метаданные, связанные с размерами сетки изображений.

**metadata.TaskDefinition**: идентификатор/тип описания задания, например: `/m/015qff` означает “Click on traffic lights”. 

![](taskdefinition.png)

**metadata.Task**: дополнительные метаданные, связанные с задачей.

**userAgent**: информация о пользовательском агенте. Актуальный userAgent: userAgentPlaceholder

**websiteURL**: адрес веб-страницы с капчей. 

## **Пример запроса**

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
  "clientKey":"API_KEY",
  "task": {
    "type": "ComplexImageTask",
    "class": "recaptcha",
    "imageUrls":[ "https://i.postimg.cc/yYjg75Kv/payloadtraffic.jpg" ],
    "metadata": {
      "Task": "Click on traffic lights",
      "Grid": "3x3",
      "TaskDefinition": "/m/015qff"
    },
    "userAgent": "userAgentPlaceholder",
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
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|answer|Array|Список в булевыми значениями, true - означает, что нужно произвести клик на соответствующее этой позиции изображение|

**Пример:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "answer": [ false, false, false, false, true, false, false, false, false ]
  }
}
```

## **Ценообразование**: 

||**Наименование**|**Стоимость за 1000 картинок, $**|**Стоимость за 1000 новых динамических картинок, $**|
| :-: | :-: | :-: | :-: |
|1|<p>reCAPTCHA 2 (3\*3)</p><p>![](Aspose.Words.3eba36bc-cab6-486e-9e8f-1e38b225e806.001.png)</p><p></p>|0,2|0,04 |
|2|<p>reCAPTCHA 2 (4\*4)</p><p>![](Aspose.Words.3eba36bc-cab6-486e-9e8f-1e38b225e806.002.png)</p>|0,1|неприменимо |

