---
sidebar_position: 15
sidebar_label: TenDI
---

# TenDI - 腾讯验证码
:::warning **注意！**
此任务将使用我们的代理服务器执行。
:::
## **对象结构**
|**参数**|**类型**|**必需**|**值**|
| :-: | :-: | :-: | :- |
|type|String|是|**CustomTask**|
|class|String|是|**TenDI**|
|websiteURL|String|是|解决验证码的主页地址。|
|websiteKey|String|是|captchaAppId。例如 `"websiteKey": "189123456"` - 是您网站的唯一参数。您可以从带有验证码的HTML页面或流量中获取它（参见下面的描述）。|
|userAgent|String|否|浏览器用户代理。**仅传递来自Windows操作系统的实际UA。现在这是126版本**： `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36`|
### 如何获取网站密钥（captchaAppId）
打开开发者工具，转到网络标签，激活验证码并查看请求。其中一些将包含您需要的参数值。在这种情况下，`websiteKey=aid`
![](tendi-devtools.png)
## **请求示例**
**地址：**
```http
https://api.capmonster.cloud/createTask
```
```json
{
    "clientKey": "API_KEY",
    "task": {
        "type": "CustomTask",
        "class": "TenDI",
        "websiteURL": "https://domain.com",
        "websiteKey": "189123456",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    }
}
```
**响应示例**
```json
{
    "errorId":0,
    "taskId":407533072
}
```
## **获取结果**
使用[getTaskResult](../api/methods/get-task-result.md)方法获取TenDI的解决方案。
**响应示例：**
```json
{
    "errorId":0,
    "status":"ready",
    "solution": {
       "data": {
            "randstr": "@EcL",
            "ticket": "tr03lHUhdnuW3neJZu.....7LrIbs*"
        },
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
        }
    }
}
```
## **定价**
|**名称**|**每1000次识别的成本, $**|
| :-: | :-: |
|TenDI|1.6|