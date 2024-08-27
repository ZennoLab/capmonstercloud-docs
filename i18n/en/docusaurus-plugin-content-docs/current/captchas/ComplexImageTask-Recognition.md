---
sidebar_position: 7
sidebar_label: ComplexImageTask Recognition
---

# ComplexImageTask Recognition

## **Object structure**

|**Parameter**|**Type**|**Required**|**Possible values**|**Description**|
| :- | :- | :- | :- | :- |
|type|String|yes|ComplexImageTask|Specifies the task object type.|
|class|String|yes|recognition|Specifies the task object class.|
|imagesBase64|Array|yes|[ “/9j/4AAQSkZJRgABAQEAAAAAAAD…”]|Images array in base64 encoding.|
|metadata.Task|String|yes|`oocl_rotate_new` and others|Task name (<u>in English</u>).|

## **Available task types**

### **Example of oocl_rotate_new request**

In the request we pass two images: background and circle.

**Response**: degrees by which the circle should be rotated clockwise.

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

Background example (*background_base64*):

![](ex1.png)

Circle example (*circle_base64*):

![](ex2.png)


### **Example of oocl_rotate_double_new request**

In the request we pass three images: background, ring, circle.

**Response**: degrees by which the ring should be turned counterclockwise and the circle clockwise.

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

Background (*background_base64*):

![](ex3.png)

Ring (*ring_base64*):

![](ex4.png)

Circle (*circle_base64*):

![](ex5.png)