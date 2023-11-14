---
sidebar_position: 12
sidebar_label: Yandex SmartCaptcha ComplexImage
draft: true
---

# ComplexImageTask: решение Yandex SmartCaptcha

Объект содержит данные о задаче на решение Yandex SmartCaptcha.

**Пример изображения**

![](example-image.png)

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Возможные значения**|**Описание**|
| :- | :- | :- | :- |:- |
|type|String|да|ComplexImageTask|Определяет тип объекта задачи.|
|class|String|да|yandexsmartcaptcha|Определяет класс объекта задачи.|
|imagesBase64|Array|да|[ “iVBORw0KGgoAAAANSUhEUgAAASwLbb” ]|Список с одним изображением в формате base64.|

## **Пример запроса**

:::info Метод
<https://api.capmonster.cloud/createTask>
:::

```json
{
    "clientKey": "b06025dbcd87ee02a315f0faadefa63c",
    "task": {
        "type": "ComplexImageTask",
        "class": "yandexsmartcaptcha",
        "imagesBase64": ["iVBORw0KGgoAAAANSUhEUgAAASwLbb..."]
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

Используйте метод [getTaskResult](../api/methods/get-task-result.md), чтобы получить решение капчи. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- | 
|answer|Array|Список координат.|
|metadata|Null|Не несет полезной информации.|

**Пример**

```json
{
	"solution": {
		"answer": [
			{
				"X": 98,
				"Y": 140
			},
			{
				"X": 103,
				"Y": 54
			},
			{
				"X": 273,
				"Y": 117
			},
			{
				"X": 32,
				"Y": 89
			},
			{
				"X": 189,
				"Y": 149
			}
		],
		"metadata": null
	},
	"cost": 0.0002,
	"status": "ready",
	"errorId": 0,
	"errorCode": null,
	"errorDescription": null
}
```

## **Ценообразование**

|**Наименование**|**Стоимость за 1000 картинок, $**|
| :- | :- | 
|**Yandex SmartCaptcha** (click)|0.2|

## **Формат картинки**
Капча с заданием передается одной картинкой. Размер на сервисах яндекса 300x220, на сторонних сайтах 320x220. <br/>
Расстояние от картинки до контейнера с текстом задания нужно сделать 4px(margin-top). В оригинале 13px.

![](image-format.png)

## **Работа с ZennoPoster**

Нам требуется подготовить задание, сделать скриншот элемента и отправить его на распознавание в CapmonsterCloud. <br/>

Для подготовки задания к отправке и получении картинки в base64 можно воспользоваться следующим C# сниппетом: <br/>

```C#
// Найдём элемент с заданием(выделен нижней красной рамкой на скриншоте выше)
HtmlElement taskContainer = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha-SilhouetteTask\"]", 0);
// Установим ему соответствующий стиль
taskContainer.SetAttribute("style", "margin-top: 4px;");

// Найдём контейнер с главной картинкой
HtmlElement image = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha AdvancedCaptcha_silhouette\"]", 0);
// Получим base64 нужного размера
return image.DrawPartToBitmap(0, 0, 300, 220, false);
```

Если сохранить результат выполнения этого кубика в переменную *imageBase64*, то отправка POST-запроса на */createTask* будет выглядеть следующим образом:

<details>
    <summary>Настройка кубика POST-запрос для отправки капчи в CapMonster Cloud</summary>

![](cube-settings.png)
</details>

После получения результата распознавания можно воспользоваться следующим C# сниппетом для прокликивания координат: 

```C#
// Получаем значение переменной, в которой хранится результат
// от /getTaskResult
string jsonStr = project.Variables["cmcloudTaskResult"].Value;
// Загружаем JSON
project.Json.FromString(jsonStr);

// Находим контейнер с заданием и получаем его координаты
HtmlElement imageContainer = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha AdvancedCaptcha_silhouette\"]", 0);
int imageContainerX = int.Parse(imageContainer.GetAttribute("left"));
int imageContainerY = int.Parse(imageContainer.GetAttribute("top"));

for (int i = 0; i < project.Json.solution.answer.Count; ++i) {
	int X = Convert.ToInt32(project.Json.solution.answer[i].X);
	int Y = Convert.ToInt32(project.Json.solution.answer[i].Y);
	
	// К координатам элемента нужно прибавить координаты от сервиса,
	// ведь мы отправляли на распознавание не всю страницу, а конкретный 
	// контейнер с капчей
	instance.ActiveTab.FullEmulationMouseMove(imageContainerX + X, imageContainerY + Y);
	instance.ActiveTab.FullEmulationMouseClick("left", "click");
}

// Отправляем капчу
HtmlElement submitBtn = instance.ActiveTab.GetDocumentByAddress("0").FindElementByTag("form", 0).FindChildByAttribute("span", "class", "CaptchaButton-SubmitContent", "regexp", 0);
instance.ActiveTab.FullEmulationMouseMoveToHtmlElement(submitBtn);
instance.ActiveTab.FullEmulationMouseClick("left", "click");
```

[Итоговый тестовый проект](https://drive.google.com/drive/folders/1QNNcBXBGjGZMc6AQ7bdYtr4YEQEumxT4) (не забудьте прописать свой API ключ от CapMonster Cloud).<br/>

## **Работа с другими программами**

Большинство фреймворков для автоматизации(Selenium/Puppeteer/Playwright и тд) предоставляют возможности для создания скриншота. <br/>

Например, таким образом можно получить картинку с заданием в playwright:

```C#
// Установить нужный стиль элементу
const taskTextContainer = await page.locator('//div[@class="AdvancedCaptcha-SilhouetteTask"]');
await taskTextContainer.evaluate((element) => {
  element.style.marginTop = "4px";
}, {}, { timeout: 5000 });

// Получить картинку 
const taskContainer = await page.locator('//div[@class="AdvancedCaptcha AdvancedCaptcha_silhouette"]');
const imageWithExtraStuff = await screenshotContainer.screenshot({ scale: "css", timeout: 5000});
```

После картинку нужно обрезать. Для этого воспользуемся библиотекой [sharp](https://www.npmjs.com/package/sharp):

```C#
const sharpImageFull = sharp(imageWithExtraStuff);
const sharpImageCropped = sharpImageFull
  .trim({ background: "#FFFFFF", threshold: 0 })
  .extract({ top: 0, left: 0, height: 220, width: 300 });
  ```