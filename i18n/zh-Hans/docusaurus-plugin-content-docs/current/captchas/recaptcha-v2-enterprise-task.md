---
sidebar_position: 2
sidebar_label: ReCaptchaV2EnterpriseTask
---

# RecaptchaV2EnterpriseTask
该对象包含用于解决Google reCAPTCHA Enterprise任务的数据。为了提供解决此类任务的通用性，我们已经再现了您计划完成的自动化任务所需的每一个环境因素。包括代理访问、浏览器的用户代理、Cookies（可选）。

这种类型的验证码与ReCaptcha v.2在视觉上没有区别，您可以通过使用开发者工具中的网络选项卡下的查询来查看验证码代码的差异，例如：

*请求URL（锚点）：https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Lf26sUnAAAAAIKLuWNYgRsFUfmI-3Lex3xT5N-s&co=aHR0cHM6Ly8yY2FwdGNoYS5jb206NDQz&hl=en&v=1kRDYC3bfA-o6-tsWzIBvp7k&size=normal&cb=43r1q2d3mx66*

这种类型的验证码可能比普通的图片验证码解决时间稍长一些，但这个问题被我们在解决您的ReCaptcha2后发送给您的g-captcha-response值在接下来的60秒内有效这一事实所弥补。

:::warning **注意！**
如果代理通过IP授权，请务必将116.203.55.208添加到白名单中。
:::

## **对象结构**

|**参数**|**类型**|**必填**|**值**|
| :- | :- | :- | :- |
|type|String|是|**RecaptchaV2EnterpriseTaskProxyless** 或 **RecaptchaV2EnterpriseTask（使用代理时）。**|
|websiteURL|String|是|包含Google ReCaptcha Enterprise的网页地址。|
|websiteKey|String|是|Recaptcha 网站密钥。<br />`<div class="g-recaptcha" data-sitekey="THIS_ONE"></div>`<br/>或 `<iframe title="reCAPTCHA" src="...;k=6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH&amp;...`，其中 `6LdIFr0ZAAAAAO3vz0O0OQrtAefzdJcWQM2TMYQH` 即为 `websiteKey`|
|enterprisePayload|String|否|某些reCAPTCHA Enterprise小部件的实现可能包含传递给“grecaptcha.enterprise.render”方法的附加参数。例如: `<pre lang="js" ><code>grecaptcha.enterprise.render("some-div-id", {<br /> sitekey: "6Lc\_aCMTAAAAABx7u2N0D1XnVbI\_v6ZdbM6rYf16"<br/> theme: "dark"<br/> s: "2JvUXHNTnZl1Jb6WEvbDyB...ugQA"<br/>});</code></pre>`|
|apiDomain|String|否|<p>加载reCAPTCHA Enterprise的域地址。例如:</p><p>- [www.google.com](http://www.google.com)</p><p>- [www.recaptcha.net](http://www.recaptcha.net)</p><p>如果您不知道为什么需要这个参数，请不要使用。</p>|
|proxyType|String|是 (针对 **RecaptchaV2EnterpriseTask**)|**http** - 普通的http/https代理;<br />**https** - 仅在“http”不起作用时尝试此选项（某些自定义代理服务器需要）；<br />**socks4** - socks4代理;<br/>**socks5** - socks5代理。|
|proxyAddress|String|是 (针对 **RecaptchaV2EnterpriseTask**)|<p>代理IP地址 IPv4/IPv6。不允许使用:</p><p>- 主机名代替IP;</p><p>- 透明代理（客户端IP可见）；</p><p>- 来自本地网络的代理。</p>|
|proxyPort|Integer|是 (针对 **RecaptchaV2EnterpriseTask**)|代理端口。|
|proxyLogin|String|否|代理登录。|
|proxyPassword|String|否|代理密码。|
|userAgent|String|否|用于模拟的浏览器用户代理。必须使用现代浏览器的签名，否则Google会要求您“更新浏览器”。|
|cookies|String|否|<p>我们在与目标页面或Google交互期间必须使用的附加Cookies。</p><p>**格式**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

对于 `enterprisePayload` - 在调用它之前，您需要用自己的函数替换 `grecaptcha.enterprise.render` 函数，并从其参数中获取值。该函数在加载脚本后存在，验证码通常立即渲染或基于页面事件渲染。如果验证码在客户端使用当前字段 `s` 渲染，那么令牌很可能不会被接受。
可以在没有 `s` 字段的情况下调用原始函数。

`apiDomain` 是托管用于与reCAPTCHA交互的API接口的域，用于验证用户是否通过验证码。

<details>
    <summary>脚本</summary>

```js
var __test_grc = undefined;

var __test_enterprise = undefined;

var __test_render = undefined;

var __test_render_widget = undefined;

var __test_render_args = undefined; // 这里将是调用render时使用的对象。

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





## **请求示例**

:::info 方法
```http
https://api.capmonster.cloud/createTask
```
:::

### RecaptchaV2EnterpriseTask (使用代理)
```json
{
  "clientKey":"API_KEY",
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
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  }
}
```

### RecaptchaV2EnterpriseTaskProxyless (不使用代理)
```json
{
  "clientKey":"API_KEY",
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

**响应示例**

```json
{
  "errorId":0,
  "taskId":407533072
}
```

## **获取结果**
:::info 方法
``` http
https://api.capmonster.cloud/getTaskResult
```
:::

使用[getTaskResult](../api/methods/get-task-result.md)方法请求 ReCaptcha2 的答案。根据服务负载情况，您将在 10到80 秒内收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|gRecaptchaResponse|String|应插入到 Recaptcha2 提交表单中的哈希值 `<textarea id="g-recaptcha-response" ..></textarea>`。长度为 500 到 2190 字节。|

**示例：**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```
