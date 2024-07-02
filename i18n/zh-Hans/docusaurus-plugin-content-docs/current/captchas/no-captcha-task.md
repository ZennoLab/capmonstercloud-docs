---
sidebar_position: 0
sidebar_label: RecaptchaV2Task
---
# RecaptchaV2Task
该对象包含 Google ReCaptcha2 解决任务的数据。为确保解决此类验证码的普遍性，您需要使用在自动填写目标网站表单时使用的所有数据，包括代理、浏览器用户代理和 cookies。这将有助于避免在 Google 更改其验证码代码时出现任何问题。

相比于普通的图像验证码，此类验证码可能需要更长时间来解决，但通过我们发送给您的 g-captcha-response 值，在解决您的 ReCaptcha2 后的下一个 60 秒内仍然有效，可以弥补这一问题。

:::warning 警告**注意！**
如果代理由 IP 授权，请确保将 **116.203.55.208** 添加到白名单中。
:::
## **对象结构**

|<h2>**参数**</h2>|<h2>**类型**</h2>|<h2>**必需**</h2>|<h2>**是**</h2>|
| :- | :- | :- | :- |
|<h2>type</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>**RecaptchaV2TaskProxyless**或**RecaptchaV2Task（使用代理时）**。</h2>|
|<h2>websiteURL</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>带有验证码的网页地址。</h2>|
|<h2>websiteKey</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>ReCaptcha 网站密钥。<br />`<div class="g-recaptcha" data-sitekey="THIS_ONE"></div>`</h2>|
|<h2>recaptchaDataSValue</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>某些自定义实现可能包含 ReCaptcha2 div 中的额外 "data-s" 参数，实际上是一次性令牌，每次解决 ReCaptcha2 都必须获取。<br />`<div class="g-recaptcha" data-sitekey="some sitekey" data-s="THIS_ONE"></div>`</h2>|
|<h2>proxyType</h2>|<h2>字符串</h2>|<h2>是（对于**RecaptchaV2Task**）</h2>|<h2>**http** - 普通的 http/https 代理；<br />**https** - 仅在 "http" 不起作用时尝试（某些自定义代理服务器要求）；<br />**socks4** - socks4 代理；<br />**socks5** - socks5 代理。</h2>|
|<h2>proxyAddress</h2>|<h2>字符串</h2>|<h2>是（对于**RecaptchaV2Task**）</h2>|<h2><p>代理 IP 地址 IPv4/IPv6。不允许：</p><p> - 使用主机名；</p><p> - 使用透明代理（其中客户端 IP 可见）；</p><p>- 使用来自本地网络的代理。</p></h2>|
|<h2>proxyPort</h2>|<h2>整数</h2>|<h2>是（对于**RecaptchaV2Task**）</h2>|<h2>代理端口。</h2>|
|<h2>proxyLogin</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>代理登录。</h2>|
|<h2>proxyPassword</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>代理密码。</h2>|
|<h2>userAgent</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>用于仿真的浏览器用户代理。必须使用现代浏览器的签名，否则 Google 将要求您 "更新您的浏览器"。 </h2>|
|<h2>cookies</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2><p>额外的 Cookie，我们在与目标页面或谷歌的交互过程中必须使用</p><p>**格式**：cookiename1=cookievalue1; cookiename2=cookievalue2</p></h2>|
|<h2>isInvisible</h2>|<h2>布尔值</h2>|<h2>否</h2>|<h2>"true" 如果验证码是隐形的，即没有确认复选框，而是有一个隐藏字段。如果怀疑是机器人，则进行额外检查。</h2>|
##
## **请求示例**
**地址**： 
``` http
https://api.capmonster.cloud/createTask
```
### RecaptchaV2Task
``` json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2Task",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  }
}
```
### RecaptchaV2TaskProxyless
``` json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"RecaptchaV2TaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd"
  }
}
```

**响应示例**
``` json
{
  "errorId":0,
  "taskId":407533072
}
```
## **获取结果**
使用[getTaskResult](../api/methods/get-task-result.md)方法请求 ReCaptcha2 的答案。您将在服务工作负载下的10到80秒内收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|gRecaptchaResponse|字符串|应插入到 Recaptcha2 提交表单中的哈希值，格式如 `<textarea id="g-recaptcha-response" ..></textarea>`。长度为500到2190字节。|

**示例：**
``` json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "gRecaptchaResponse":"3AHJ_VuvYIBNBW5yyv0zRYJ75VkOKvhKj9_xGBJKnQimF72rfoq3Iy-DyGHMwLAo6a3"
  }
}
```
