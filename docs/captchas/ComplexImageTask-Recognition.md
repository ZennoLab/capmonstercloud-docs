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

### Пример запроса oocl_rotate_new

В запросе передаем два изображения: фон и круг.

**Ответ**: градусы, на которые необходимо повернуть круг по часовой стрелке.

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
    "clientKey": "API_KEY",
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

Пример фона (*background_base64*):

![](ex1.png)

Пример круга (*circle_base64*):

![](ex2.png)


### Пример запроса oocl_rotate_double_new

В запросе передаем три изображения: фон, кольцо, круг.

**Ответ**: градусы, на которые необходимо повернуть кольцо против часовой и круг по часовой.

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{ 
    "clientKey": "API_KEY",
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

Фон (*background_base64*):

![](ex3.png)

Кольцо (*ring_base64*):

![](ex4.png)

Круг (*circle_base64*):

![](ex5.png)


### Пример запроса betpunch_3x3_rotate

В запросе передаем девять изображений. Передавать изображения нужно в следующем порядке:
![](betpunch_3x3_rotate_example.png)

**Ответ**: *"answer":[X,X,X,X,X,X,X,X,X]*,
где *X* - целочисленное значение от 1 до 4 для каждого изображения.
*4* - означает, что картинку не нужно поворачивать;
*1-3* - количество поворотов картинки против часовой стрелки.

:::info Метод
```http
https://api.capmonster.cloud/createTask
```
:::
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "ComplexImageTask",
        "class": "recognition",
        "imagesBase64": [
			"{image_1_Base64}",
			"{image_2_Base64}",
			"{image_3_Base64}",
			"{image_4_Base64}",
			"{image_5_Base64}",
			"{image_6_Base64}",
			"{image_7_Base64}",
			"{image_8_Base64}",
			"{image_9_Base64}",
		],
        "metadata": {
            "Task": "betpunch_3x3_rotate"
        }
    }
}
```