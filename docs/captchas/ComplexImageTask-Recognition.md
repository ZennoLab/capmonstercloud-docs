---
sidebar_position: 7
sidebar_label: ComplexImageTask Recognition
---

# ComplexImageTask Recognition

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- | :- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи.|
|class|String|да|recognition|Определяет класс объекта задачи.|
|imagesBase64|Array|да|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”]|Массив изображений в кодировке base64.|
|metadata.Task|String|да|`oocl_rotate_new` и другие|Имя задания (<u>на английском</u>).|

## **Доступные типы заданий**

### **Пример запроса oocl_rotate_new**

В запросе передаем два изображения: фон и круг.

**Ответ**: градусы, на которые необходимо повернуть круг по часовой стрелке.

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
     "clientKey": "{apiKey}",
    "task": {
        "type": "ComplexImageTask",
        "class": "recognition",
        "imagesBase64": [
"{background_base64}",
"{circle_base64}"
],
        "metadata": {
            "Task": "oocl_rotate_new"
        }
    }
}
```

Пример фона(*background_base64*):

![](ex1.png)

Пример круга(*circle_base64*):

![](ex2.png)


### **Пример запроса oocl_rotate_double_new**

В запросе передаем три изображения: фон, кольцо, круг.

**Ответ**: градусы, на которые необходимо повернуть кольцо против часовой и круг по часовой.

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{ 
    "clientKey": "{apiKey}",
    "task": {
        "type": "ComplexImageTask",
        "class": "recognition",
        "imagesBase64": [
"{background_base64}",
"{ring_base64}",
"{circle_base64}"
],
        "metadata": {
            "Task": "oocl_rotate_double_new"
        }
    }
}
```

Фон(*background_base64*):

![](ex3.png)

Кольцо(*ring_base64*):

![](ex4.png)

Круг(*circle_base64*):

![](ex5.png)
