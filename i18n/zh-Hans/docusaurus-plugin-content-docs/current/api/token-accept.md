---
sidebar_position: 7
---
# 令牌接受问题

如果您遇到令牌无法接受的问题，请联系我们的支持团队。我们将立即采取必要的措施来解决这个问题。

## 如果某网站只接受来自CapMonster Cloud的一部分令牌怎么办？

## 描述

您从CapMonster Cloud获取一个令牌并将其发送到某个网站，但该网站拒绝了它。有时候，该网站可能会接受令牌，例如十次请求中可能有一次成功（在您的情况下成功率可能不同）。令牌的屏蔽或拒绝可能是因为来自同一IP地址的频繁请求，或者因为验证码质量较差（图像上的噪音），还有些网站可能会在没有通知的情况下使用动态验证码更新或添加额外的检查。在这种情况下，`nocache` 参数可以帮助您。

---

## 如何传递参数？

### 通过API密钥

:::caution 注意
将应用于所有发送的验证码。
:::

在使用的软件设置中，将 `nocache` 参数添加到API密钥的最后，使用双下划线：

`API_KEY__nocache`

### 创建任务时

:::tip 提示
注意 *task* 对象的 *nocache* 属性
:::

``` json
{
  "clientKey":"API_KEY",

  "task": 
  {
    "type":"NoCaptchaTaskProxyless",
    "websiteURL":"https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high",
    "websiteKey":"6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd",
    "nocache": true

  }
}
```

### 使用 RuCaptcha API 创建任务时（通过URL参数）

在URL中添加 `nocache=1`。

:::tip 提示
在下面的示例中，参数添加到URL的末尾。
:::

`http://api.capmonster.cloud/in.php?key=API_KEY&method=userrecaptcha&googlekey=6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd&pageurl=https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high&nocache=1`

---

## 此参数适用于哪些类型的验证码？

- [ReCaptchaV2](../captchas/no-captcha-task.mdx)
- [ReCaptchaV3](../captchas/recaptcha-v3-task.mdx)
- [HCaptcha](../captchas/hcaptcha-task.mdx)