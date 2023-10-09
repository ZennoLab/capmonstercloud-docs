---
sidebar_position: 3
sidebar_label: FunCaptcha
---

# FunCaptchaTask : solving FunCaptcha
This type solving task FunCaptcha. Your app submits website address, public key and proxy.

The result of solving task is a token for the submit form.

:::warning **Attention!**
If the proxy is authorized by IP, then be sure to add **116.203.55.208** to the white list.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**FunCaptchaTaskProxyless** or **FunCaptchaTask** (When using a proxy).|
|websiteURL|String|yes|Address of a webpage with FunCaptcha.|
|funcaptchaApiJSSubdomain|String|no|A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded.
Most FunCaptcha installations work from shared domains, so this option is only needed in certain rare cases.|
|websitePublicKey|String|yes|FunCaptcha website key. `<div id="funcaptcha" data-pkey="THAT_ONE"></div>`|
|data|String|no|Additional parameter that may be required by FunCaptcha implementation. 
Use this property to send "blob" value as a stringified array. See example how it may look like. {"\blob\":\"HERE_COMES_THE_blob_VALUE\"}*|
|proxyType|String|yes (if using **FunCaptchaTask**)| Type of the proxy<br/> **http** - usual http/https proxy;<br/>**https** - try this only if "http" doesn't work (required by some custom proxy servers);<br />**socks4** - socks4 proxy;<br />**socks5** - socks5 proxy.|
|proxyAddress|String|yes (If using **FunCaptchaTask**)|<p>Proxy IP address IPv4/IPv6. Not allowed to use:</p><p>- host names instead of IPs</p><p>- transparent proxies (where client IP is visible)</p><p>- proxies from local networks (192.., 10.., 127...).</p>|
|proxyPort|Integer|yes (If using **FunCaptchaTask**)|Proxy port.|
|proxyLogin|String|no|Proxy login.|
|proxyPassword|String|no|Proxy password.|
|userAgent|String|yes|Browser's User-Agent which is used in emulation. |
|cookies|String|no|<p>Additional cookies which we must use during interaction with target page.</p><p>**Format**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::

### FunCaptchaTask (With proxy)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"FunCaptchaTask",
    "websiteURL":"http://mywebsite.com/",
    "funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36"
  }
}
```
### FunCaptchaTaskProxyless (without proxy)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"FunCaptchaTaskProxyless",
    "websiteURL":"http://mywebsite.com/",
    "funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC"
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

## **Getting result**

:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::

Use the [getTaskResult](../api/methods/get-task-result.md) method to request answer for FunCaptcha. You will get response within 10 - 30 secs period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|token|String|FunCaptcha token that needs to be substituted into the form.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn\_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
```