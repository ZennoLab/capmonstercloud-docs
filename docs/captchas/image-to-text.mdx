---
sidebar_position: 10
sidebar_label: ImageToTextTask
---

# ImageToTextTask

Это обычная капча, представляющая собой изображение с текстом, который нужно ввести в соответствующую строку. 

![](text-captcha-2.png)

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :-: | :-: | :-: | :-: | :-: |
|type|String|да|**ImageToTextTask**|Определяет тип объекта задачи|
|body|String|да|-|Содержимое файла капчи закодированное в base64*. Убедитесь что шлете его без переносов строки.|
|capMonsterModule|String|нет|yandex, special и другие|Имя модуля, например “yandex“. Альтернативный способ передачи имени модуля и список всех доступных модулей можно найти [здесь](../api/module-name.md)|
|recognizingThreshold|Int|нет|0-100|Порог распознавания капчи с возможным значением от 0 до 100. Например, если в систему было отправлено значение 90, и задача решилась с уверенностью 80, то деньги за решение не спишутся. В этом случае пользователь получит ответ ERROR_CAPTCHA_UNSOLVABLE.|
|case|Boolean|нет|true, false|Учитывать регистр при решении или нет. |
|numeric|Int|нет|0, 1|1 - если капча состоит только из цифр|
|math|Boolean|нет|true, false|false — не определено<br />true — капча требует совершения математического действия (например: капча 2 + 6 = вернёт значение 8)|

*Base64 - это способ кодирования данных, позволяющий представить бинарные данные в виде текста. Пример получения изображения капчи в формате base64 с помощью консоли в *Инструментах разработчика*:

```
const captchaUrl = 'https://example.com/captcha.jpg';

function loadAndEncodeCaptchaToBase64(url) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);

            reader.onloadend = function() {
                const base64Data = reader.result;                
                console.log('Base64 Encoded Captcha:', base64Data);

                          };
        })
        .catch(error => {
            console.error('Error occurred while loading or encoding the captcha:', error);
        });
}

loadAndEncodeCaptchaToBase64(captchaUrl);

```

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
    "type":"ImageToTextTask",
    "body":"BASE64_BODY_HERE!"
  }
}
```


**Пример ответа**
```json
{
  "errorId":0,
  "taskId":53456
}
```

## **Получение результата**
:::info Метод
```http
https://api.capmonster.cloud/getTaskResult
```
:::
Используйте метод [getTaskResult](../api/methods/get-task-result.md) чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300 мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :-: | :-: | :-: |
|text|String|Текст решения капчи|

**Пример:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "text":"answer"
  }
}
```
