---
sidebar_position: 6
sidebar_label: Turnstile
---

# TurnstileTask | Cloudflare Challenge
All Turnstile subtypes are automatically supported: manual, non-interactive и invisible. Therefore, there is no need to specify a subtype for a normal captcha. 

:::caution Attention
If you solve Turnstile on the cloudflare 5s challenge pages, don’t forget to specify `cloudflareTaskType` and related fields. userAgent is **required**.
:::
### **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**TurnstileTaskProxyless** or **TurnstileTask (When using a proxy)**.|
|websiteURL|String|yes|The page address, where the captcha is solved.|
|websiteKey|String|yes|Turnstile key.|
|proxyType|String|yes (for **TurnstileTask**)|**http** - regular http/https proxy;<br/>**https** - try this option only if "http" doesn’t work (required for some custom proxies);<br/>**socks4** - socks4 proxy;<br/>**socks5** - socks5 proxy.|
|proxyAddress|String|yes (for **TurnstileTask**)|<p>The IP address of the IPv4/IPv6 proxy. Not allowed:</p><p>- using hostnames;</p><p>- using transparent proxies (where you can see the client's IP);</p><p>- using proxies on local machines.</p>|
|proxyPort|Integer|yes (for **TurnstileTask**)|Proxy port.|
|proxyLogin|String|no|Proxy login.|
|proxyPassword|String|no|Proxy password.|
|cloudflareTaskType|String|no|**cf_clearance** - if cookies are required;<br/>**token** - if required token from Turnstile.|
|htmlPageBase64|String|yes, if *cloudflareTaskType* is equal to* **cf_clearance**|Base64 encoded html page with captcha.|
|userAgent|String|yes, if *cloudflareTaskType* is specified.|Only the latest UAs from Chrome are supported.|
|pageAction|String|yes, if *cloudflareTaskType* is equal to* **token**|The `action` field, that can be found in the callback function to load the captcha.<br/>If *cloudflareTaskType* is used, then `action` is usually “managed“ or “non-interactive“.|
|data|String|yes, if *cloudflareTaskType* is equal to* **token**|The value of the *data* field can be taken from the `cData` parameter.|
|pageData|String|yes, if *cloudflareTaskType* is equal to* **token**|The value of the *pageData* field can be taken from the `chlPageData` parameter.|

Proxy for token method is not required.

These parameters are in the object that is passed during captcha creation in `window.turnstile.render(el, paramsObj)` function.  You can get them, for example, by executing JavaScript before loading other scripts:

```js
(function () {
  const obj = {
    render: function () {
      const { action, cData, chlPageData } = arguments[1];
        const params = [
          ["action", action],
          ["data", cData],
          ["pageData", chlPageData],
        ];
        console.table(params)
    }
  };

  Object.defineProperty(window, "turnstile", {
    get: () => {
      return obj;
    },
  });
})();
```


## **Normal Turnstile**
### **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::

### TurnstileTask (with a proxy)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"http://tsmanaged.zlsupport.com",
    "websiteKey":"0x4AAAAAAABUYP0XeMJF0xoy",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere"
  }
}
```
### TurnstileTaskProxyless (without a proxy)
```json
{
    "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
    "task":
    {
        "type":"TurnstileTaskProxyless",
        "websiteURL":"http://tsmanaged.zlsupport.com",
        "websiteKey":"0x4AAAAAAABUYP0XeMJF0xoy"
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

## **Cloudflare challenge**
### **Request example**
:::info Method
<https://api.capmonster.cloud/createTask>
:::

### TurnstileTask (with a proxy)
```json 
  {
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"https://nowsecure.nl",
    "websiteKey":"0x4AAAAAAADnPIDROrmt1Wwj",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "cloudflareTaskType": "cf_clearance",
    "htmlPageBase64": "PCFET0NUWVBFIGh0...vYm9keT48L2h0bWw+",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  }
}
```

### TurnstileTaskProxyless (without a proxy)
```json 
  {
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"TurnstileTask",
    "websiteURL":"https://nowsecure.nl",
    "websiteKey":"0x4AAAAAAADnPIDROrmt1Wwj",
    "cloudflareTaskType": "cf_clearance",
    "htmlPageBase64": "PCFET0NUWVBFIGh0...vYm9keT48L2h0bWw+",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  }
}
```

## **Getting a result**
Use the [getTaskResult](../api/methods/get-task-result.md) method to get the Turnstile solution. Depending on the system load, you will receive a response after a time ranging from 5 to 20 seconds.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|cf_clearance|String|Special cloudflare cookies, that you can set.|
|token|String|Pass this token to the callback function.|
## **When specify cloudflareTaskType and when not? Or how to distinguish a normal Turnstile from a Cloudflare Challenge.**
Cloudflare Challenge may look different. 

**Simple variant:**

![](turnstile-simple.png) 

**Stylized variants:**

![](turnstile-stylized.png)

![](turnstile-stylized-2.png) 

To finally verify the presence of Cloudflare, you can open the developer tools, see the traffic, examine the page code and see the characteristic features:

- The first request to the site returns a 403 code:

![](b61dae70-f056-4257-ab72-05beacb27a0d.png)

- The form with the id **challenge-form** has an **action** attribute, containing the  `__cf_chl_f_tk=` parameter:

![](1e4dc39f-0a4a-4c29-a48d-abc7a2ec6380.png)

- There are two similar `<script>`, tags on the page that create a new value in the window object:

![](gif.gif) 