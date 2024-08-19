---
sidebar_position: 9
sidebar_label: ComplexImageTask Funcaptcha
draft: true
---

# ComplexImageTask Funcaptcha
Объект содержит данные о задаче на решение Funcaptcha.

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи.|
|class|String|да|funcaptcha|Определяет класс объекта задачи.|
|imageUrls|Array|да (если не заполнено imagesBase64)|[ “[https://i.postimg.cc/s2ZDrHXy/fc1.jpg](https://i.postimg.cc/s2ZDrHXy/fc1.jpg)”, … ]|[Цельное изображение](https://postimg.cc/5HbM53Lk) (в массиве).|
|imagesBase64|Array|да (если не заполнено imageUrls)|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”, … ]|[Цельное изображение](https://i.postimg.cc/s2ZDrHXy/fc1.jpg) в формате base64 (в массиве).|
|metadata.Task|String|да|`Pick the image that is the correct way up` и другие|Текст задания (<u>на английском</u>).|
|userAgent|String|нет|-|User-Agent браузера, используемый при загрузке изображений, если были переданы ссылки в imageUrls. Необходимо использовать подпись современного браузера, иначе Google будет возвращать ошибку, требуя обновить браузер.|
|websiteURL|String|нет|-|Адрес страницы на которой решается капча.|

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
    "class": "funcaptcha",
    "imageUrls":[ "https://i.postimg.cc/s2ZDrHXy/fc1.jpg" ],
    "metadata": {
      "Task": "Pick the image that is the correct way up"
    },
    "userAgent": "userAgentPlaceholder"
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

## **Получение результата**
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
    "answer": [ false, false, false, false, true, false ]
  }
}
```

## **Ценообразование**

|**Наименование**|**Стоимость за 1000 картинок, $**|
| :-: | :-: |
|funcaptcha|0,15|

