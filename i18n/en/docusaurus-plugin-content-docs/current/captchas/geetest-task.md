---
sidebar_position: 5
sidebar_label: GeeTestTask
---

# GeeTestTask
This type of task is for solving GeeTest captcha using your proxies.
Your application should send the site address, public domain key (`gt`), key (`challenge`) and proxy.

The result of solving the problem is three or five tokens for submitting the form.

:::warning **Attention!**
Proxies with IP authorization are not yet supported.
:::

## **Object structure**

:::info
- The `gt`, `challenge` and `geetestApiServerSubdomain` parameters are most often found inside the `initGeetest` JavaScript function.
- Also you can see in the HTML code of the page. You can find it in the `<sсript>` block, which appears after the page is fully loaded in the browser.
  V3

![](Aspose.Words.09e28b99-ec8b-4638-848b-cdd6fefc7ac8.001.png)

V4 (captcha_id = gt)

![](Aspose.Words.09e28b99-ec8b-4638-848b-cdd6fefc7ac8.002.png)
:::
|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**GeeTestTaskProxyless** or **GeeTestTask (When using proxy).**|
|websiteURL|String|yes|Address of the page on which the captcha is solved.|
|gt|String|yes|The GeeTest identifier key for the domain. Static value, rarely updated.<br />If v4 then this is the clientId parameter.|
|challenge|String|yes, only for V3|<p>A dynamic key.<br />Each time our API is called, we need to get a new key value. If the captcha is loaded on the page, then the `challenge` value is no longer valid and you will get the [error](../api/api-errors.md) `ERROR_TOKEN_EXPIRED`.</p><p>You will be charged for tasks with `ERROR_TOKEN_EXPIRED` error.</p><p>It is necessary to examine the requests and find the one in which this value is returned and, before each creation of the recognition task, execute this request and parse the challenge from it.</p>|
|geetestApiServerSubdomain|String|no|Optional parameter. <br />May be required for some sites.|
|geetestGetLib|String|no|Optional parameter. May be required for some sites. <br />Send JSON as a string.|
|version|Integer|no|Version number (default is 3). Possible values: 3, 4.|
|initParameters|Object|no|Additional parameters for version 4.|
|proxyType|String|yes (When using **GeeTestTask**)|**http** - regular http/https proxy;<br />**https** - try this option only if "http" doesn't work (required for some custom proxies);<br />**socks4** - socks4 proxy;<br />**socks5** - socks5 proxy.|
|proxyAddress|String|yes (When using **GeeTestTask**)|<p>IPv4/IPv6 proxy IP address. Not allowed:</p><p>- using of hostnames;</p><p>- using transparent proxies (where you can see the client's IP);</p><p>- using proxies on local machines.</p>|
|proxyPort|Integer|yes (When using **GeeTestTask**)|Proxy port.|
|proxyLogin|String|no|Proxy-server login.|
|proxyPassword|String|no|Proxy-server password.|
|userAgent|String|no|Browser User-Agent used to recognize captcha.|
## **GeeTest V3**
### **Request example**

:::info Method
`<https://api.capmonster.cloud/createTask>`
:::

### GeeTestTask (With proxy)

```json 
{
  "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
  "task": {
    "type":"GeeTestTask",
    "websiteURL":"https://example.com/geetest.php",
    "gt":"81dc9bdb52d04dc20036dbd8313ed055",
    "challenge":"d93591bdf7860e1e4ee2fca799911215",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
  }
}
```
### GeeTestTaskProxyless (Without proxy)
```json
{
    "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
    "task":
    {
        "type":"GeeTestTaskProxyless",
        "websiteURL":"https://example.com/geetest.php",
        "gt":"81dc9bdb52d04dc20036dbd8313ed055",
        "challenge":"d93591bdf7860e1e4ee2fca799911215"
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

### **Getting the result**
:::info Method
`<https://api.capmonster.cloud/getTaskResult>`
:::
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the result of GeeTest recognition. Depending on the system load, you will receive a response after a time in the range from 10 s to 30 s.

<table><tr>
<th><b>Property</b></th><th><b>Type</b></th><th><b>Description</b></th>
</tr>
<tr><td>challenge</td><td>String</td><td rowspan="3">All three parameters are required when submitting the form on the target site.</td></tr>
<tr><td>validate</td><td>String</td></tr>
<tr><td>seccode</td><td>String</td></tr>
</table>

**Example:**

```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "challenge":"0f759dd1ea6c4wc76cedc2991039ca4f23",
    "validate":"6275e26419211d1f526e674d97110e15",
    "seccode":"510cd9735583edcb158601067195a5eb|jordan"
  }
}
```

## **GeeTest V4**
### **Request example**
:::info Method
`<https://api.capmonster.cloud/createTask>`
:::

### GeeTestTask (With proxy)
```json
{
  "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
  "task": {
    "type":"GeeTestTaskProxyless",
    "websiteURL":"https://example.com/geetest.php",
    "gt":"81dc9bdb52d04dc20036dbd8313ed055",
    "version": 4,
    "initParameters": {
      "riskType": "slide"
    },
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
  }
}
```
### GeeTestTaskProxyless (Without proxy)
```json
{
    "clientKey":"YOUR_CAPMONSTER_CLOUD_API_KEY",
    "task":
    {
        "type":"GeeTestTaskProxyless",
        "websiteURL":"https://example.com/geetest.php",
        "gt":"81dc9bdb52d04dc20036dbd8313ed055",
        "version": 4,
        "initParameters": {
          "riskType": "slide"
        }
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

### **Getting the result**
:::info Method
`<https://api.capmonster.cloud/getTaskResult>`
:::
Use the [getTaskResult](../api/methods/get-task-result.md) to get the result of GeeTest recognition. Depending on the system load, you will receive a response after a time in the range from 10 s to 30 s.

<table>
<tr>
<th><b>Property</b></th><th><b>Type</b></th><th><b>Description</b></th>
</tr>
<tr>
<td>captcha_id</td><td>String</td><td rowspan="5">All five parameters are required when submitting the form on the target site.<br />input[name=captcha_id]<br />input[name=lot_number]<br />input[name=pass_token]<br />input[name=gen_time]<br />input[name=captcha_output]</td>
</tr>
<tr><td>lot_number</td><td>String</td></tr>
<tr><td>pass_token</td><td>String</td></tr>
<tr><td>gen_time</td><td>String</td></tr>
<tr><td>captcha_output</td><td>String</td></tr>
</table>

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "captcha_id":"f5c2ad5a8a3cf37192d8b9c039950f79",
    "lot_number":"bcb2c6ce2f8e4e9da74f2c1fa63bd713",
    "pass_token":"edc7a17716535a5ae624ef4707cb6e7e478dc557608b068d202682c8297695cf",
    "gen_time":"1683794919",
    "captcha_output":"XwmTZEJCJEnRIJBlvtEAZ662T...[cut]...SQ3fX-MyoYOVDMDXWSRQig56"
  }
}
```
