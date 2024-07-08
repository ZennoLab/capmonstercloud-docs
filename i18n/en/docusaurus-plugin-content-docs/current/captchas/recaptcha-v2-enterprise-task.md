---
sidebar_position: 2
sidebar_label: ReCaptchaV2EnterpriseTask
---

# RecaptchaV2EnterpriseTask
The object contains data for Google reCAPTCHA Enterprise solving task. To provide solid universality for solving this type of task we have reproduce every piece of environment used for an automation task you plan to complete. Including, proxy access, browser's user-agent, cookies (optionally). 

This type of captcha has no visual differences from ReCaptcha v.2, you can see the difference using the captcha code, for example in developer tools under the Network tab in Queries:

*Request URL (anchor): https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Lf26sUnAAAAAIKLuWNYgRsFUfmI-3Lex3xT5N-s&co=aHR0cHM6Ly8yY2FwdGNoYS5jb206NDQz&hl=en&v=1kRDYC3bfA-o6-tsWzIBvp7k&size=normal&cb=43r1q2d3mx66*

This type of captcha might be solved a bit longer than usual image captcha, but this issue is compensated by the fact that g-captcha-response value we send to you is valid for the next 60 seconds after we solves your ReCaptcha2.

:::warning **Attention!**
If the proxy is authorized by IP, then be sure to add 116.203.55.208 to the white list.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**RecaptchaV2EnterpriseTaskProxyless** or **RecaptchaV2EnterpriseTask (When using proxy)**.|
|websiteURL|String|yes|Address of a webpage with Google ReCaptcha Enterprise.|
|websiteKey|String|yes|Recaptcha website key.<br />`<div class="g-recaptcha" data-sitekey="THIS_ONE"></div>`<br/>or `<iframe title="reCAPTCHA" src="...;k=6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH&amp;...` , where `6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH` - `websiteKey`|
|enterprisePayload|String|no|Some implementations of the reCAPTCHA Enterprise widget may contain additional parameters that are passed to the “grecaptcha.enterprise.render” method along with the sitekey. For example: `<pre lang="js" ><code>grecaptcha.enterprise.render("some-div-id", {<br /> sitekey: "6Lc_aCMTAAAAABx7u2N0D1XnVbI_v6ZdbM6rYf16"<br/> theme: "dark"<br/> s: "2JvUXHNTnZl1Jb6WEvbDyB...ugQA"<br/>});</code></pre>`|
|apiDomain|String|no|<p>Domain address from which to load reCAPTCHA Enterprise. For example:</p><p>- [www.google.com](http://www.google.com)</p><p>- [www.recaptcha.net](http://www.recaptcha.net)</p><p>Don't use a parameter if you don't know why it's needed.</p>|
|proxyType|String|yes (for **RecaptchaV2EnterpriseTask**)|**http** - usual http/https proxy;<br />**https** - try this only if "http" doesn't work (required by some custom proxy servers);<br />**socks4** - socks4 proxy;<br/>**socks5** - socks5 proxy.|
|proxyAddress|String|yes (for **RecaptchaV2EnterpriseTask**)|<p>Proxy IP address IPv4/IPv6. Not allowed to use:</p><p>- host names instead of IPs;</p><p>- transparent proxies (where client IP is visible);</p><p>- proxies from local networks.</p>|
|proxyPort|Integer|yes (for **RecaptchaV2EnterpriseTask**)|Proxy port.|
|proxyLogin|String|no|Proxy login.|
|proxyPassword|String|no|Proxy password.|
|userAgent|String|no|Browser's User-Agent which is used in emulation. It is required that you use a signature of a modern browser, otherwise Google will ask you to "update your browser".|
|cookies|String|no|<p>Additional cookies which we must use during interaction with target page or Google.</p><p>**Format**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

For `enterprisePayload` - before calling it, you need to replace the `grecaptcha.enterprise.render` function with your own and take the value from its parameters. The function exists after loading the script, and the captcha is usually rendered immediately or based on a page event. If the captcha is rendered with the current field `s` on the client, then the token will most likely not be accepted.
The original function can be called without the `s` field.

`apiDomain` is the domain that hosts the API interface for interacting with reCAPTCHA, it is used to verify that the user passes the captcha.

<details>
    <summary>Script</summary>

```js
var __test_grc = undefined;

var __test_enterprise = undefined;

var __test_render = undefined;

var __test_render_widget = undefined;

var __test_render_args = undefined; // here will be the object with which render is called.

var __test_handler = {
  get: function(target, name, receiver) {
    if (name == 'enterprise') {
      return __test_enterprise ? __test_enterprise : (__test_enterprise = new Proxy(target[name], __test_handler));
    } else if (name == 'render') {
      __test_render = target[name];
      return (function(a, b) {
        __test_render_args = b;
        __test_render_widget = a;
        return __test_render(a, {sitekey: b.sitekey}); });
    } else {
      return target[name];
    }
  }
};

Object.defineProperty(window, 'grecaptcha', {
  enumerable: true,
  configurable: false,
  get: function() {
    return __test_grc;
  },
  set: function(value) {
    __test_grc = new Proxy(value, __test_handler);
  }
});
```
  </details>





## **Request example**

:::info Method
```http
https://api.capmonster.cloud/createTask
```
:::

### RecaptchaV2EnterpriseTask (with proxy)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2EnterpriseTask",
    "websiteURL":"https://mydomain.com/page-with-recaptcha-enterprise",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "enterprisePayload": {
      "s": "SOME_ADDITIONAL_TOKEN"
    },
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"userAgentPlaceholder"
  }
}
```

### RecaptchaV2EnterpriseTaskProxyless (without proxy)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2EnterpriseTaskProxyless",
    "websiteURL":"https://mydomain.com/page-with-recaptcha-enterprise",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "enterprisePayload": {
      "s": "SOME_ADDITIONAL_TOKEN"
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

## **Getting the result**
:::info Method
```http
https://api.capmonster.cloud/getTaskResult
```
:::

Use the [getTaskResult](../api/methods/get-task-result.md) method to request answer for ReCaptcha2. You will get response within 10 - 80 sec period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|gRecaptchaResponse|String|Hash which should be inserted into Recaptcha2 submit form in `<textarea id="g-recaptcha-response" ..></textarea>`. It has a length of 500 to 2190 bytes.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```
