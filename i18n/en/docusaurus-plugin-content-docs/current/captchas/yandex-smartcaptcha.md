---
sidebar_position: 12
sidebar_label: ComplexImageTask YSC
draft: true
---

# ComplexImageTask YSC

The object contains data about the Yandex SmartCaptcha task solving.

**Image example**

![](example-image.png)

## **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- |:- |
|type|String|yes|ComplexImageTask|Defines the task object type.|
|class|String|yes|yandexsmartcaptcha|Defines the task object class.|
|imagesBase64|Array|yes|[ “iVBORw0KGgoAAAANSUhEUgAAASwLbb” ]|List with one image in base64 format.|

## **Request example**

:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::

```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "ComplexImageTask",
        "class": "yandexsmartcaptcha",
        "imagesBase64": ["iVBORw0KGgoAAAANSUhEUgAAASwLbb..."]
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

## **Getting the result**

Use the [getTaskResult](../api/methods/get-task-result.md) method to get the captcha solution. Depending on the system load, you will receive a response after a time ranging from 300ms to 6s.

|**Property**|**Type**|**Description**|
| :- | :- | :- | 
|answer|Array|List of coordinates.|
|metadata|Null|Doesn't provide useful information.|

**Example**

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

## **Pricing**

|**Name**|**Cost per 1000 images, $**|
| :- | :- | 
|**Yandex SmartCaptcha** (click)|0.2|

## **Image format**
The captcha with the task is sent in one picture. The size on Yandex services is 300x220, on external sites 320x220.. <br/>
The distance from the image to the container with the task text should be 4px (margin-top). The original is 13px.

![](image-format.png)

## **Using ZennoPoster**

We need to prepare a task, take a screenshot of the element and send it to CapMonster Cloud for recognition. <br/>

To prepare a task for sending and receiving an image in base64, you can use the following C# snippet:  <br/>

```csharp
// Let's find the element with the task (highlighted by the lower red frame in the screenshot above)
HtmlElement taskContainer = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha-SilhouetteTask\"]", 0);
// Set the appropriate style for it
taskContainer.SetAttribute("style", "margin-top: 4px;");

// Find the container with the main image
HtmlElement image = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha AdvancedCaptcha_silhouette\"]", 0);
// Get base64 of the required size
return image.DrawPartToBitmap(0, 0, 300, 220, false);
```

If you save the result of executing the action into the *imageBase64* variable, then sending a POST request to  */createTask* will look like this:

<details>
    <summary>"POST-request" action setting to send captchas to CapMonster Cloud</summary>

![](post-request-ex.png)
</details>

After receiving the result, you can use the following C# snippet to click on the coordinates:  

```csharp
// Getting the value of the variable where the result is placed
// from /getTaskResult
string jsonStr = project.Variables["cmcloudTaskResult"].Value;
// Upload JSON
project.Json.FromString(jsonStr);

// Find the container with the task and get its coordinates
HtmlElement imageContainer = instance.ActiveTab.FindElementByXPath("//div[@class=\"AdvancedCaptcha AdvancedCaptcha_silhouette\"]", 0);
int imageContainerX = int.Parse(imageContainer.GetAttribute("left"));
int imageContainerY = int.Parse(imageContainer.GetAttribute("top"));

for (int i = 0; i < project.Json.solution.answer.Count; ++i) {
	int X = Convert.ToInt32(project.Json.solution.answer[i].X);
	int Y = Convert.ToInt32(project.Json.solution.answer[i].Y);
	
	// You need to add the coordinates from the service to the element coordinates,
	// because we sent not the whole page for recognition, 
	// but a specific container with a captcha
	instance.ActiveTab.FullEmulationMouseMove(imageContainerX + X, imageContainerY + Y);
	instance.ActiveTab.FullEmulationMouseClick("left", "click");
}

// Submit captcha
HtmlElement submitBtn = instance.ActiveTab.GetDocumentByAddress("0").FindElementByTag("form", 0).FindChildByAttribute("span", "class", "CaptchaButton-SubmitContent", "regexp", 0);
instance.ActiveTab.FullEmulationMouseMoveToHtmlElement(submitBtn);
instance.ActiveTab.FullEmulationMouseClick("left", "click");
```

[Final test project](https://drive.google.com/drive/folders/1QNNcBXBGjGZMc6AQ7bdYtr4YEQEumxT4) (don't forget to enter your API key from CapMonster.Cloud).<br/>


## **Using other programs**

Most automation frameworks (Selenium/Puppeteer/Playwright, etc.) provide options for creating a screenshot.<br/>

For example, this way you can get an image with a task in playwright:

```csharp
// Set the necessary style to the element
const taskTextContainer = await page.locator('//div[@class="AdvancedCaptcha-SilhouetteTask"]');
await taskTextContainer.evaluate((element) => {
  element.style.marginTop = "4px";
}, {}, { timeout: 5000 });

// Get the image 
const taskContainer = await page.locator('//div[@class="AdvancedCaptcha AdvancedCaptcha_silhouette"]');
const imageWithExtraStuff = await screenshotContainer.screenshot({ scale: "css", timeout: 5000});
```

Afterwards you need to crop the picture. To do this, you can use the [sharp library](https://www.npmjs.com/package/sharp):

```csharp
const sharpImageFull = sharp(imageWithExtraStuff);
const sharpImageCropped = sharpImageFull
  .trim({ background: "#FFFFFF", threshold: 0 })
  .extract({ top: 0, left: 0, height: 220, width: 300 });
  ```