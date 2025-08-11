---
sidebar_position: 4
sidebar_label: 错误说明
title: "验证码识别错误说明"
description: "CapMonster Cloud 服务在识别验证码 API 时的错误代码、原因以及在网站 API 集成中预防错误的建议！"
---

# 错误说明

:::info 
防止错误的建议：
- 请确保您需要破解的验证码类型由 CapMonster Cloud 服务支持。如果该验证码类型不受支持，请联系我们——我们将考虑添加支持。
- 检查文档更新，以便及时了解 API 的最新更改，避免使用过时的方法或参数。
- 使用高质量的代理。

如果错误仍然存在且无法自行解决，请通过[表单](https://helpdesk.zennolab.com/conversation/new)、我们在[网站](https://capmonster.cloud/)和[文档](https://docs.capmonster.cloud/)中的聊天，或在 [Telegram 频道](https://t.me/capmonstercloud) 联系支持，并附上：

- taskId
- 任务类型 (type)
- 原始图片/输入
- 任务的日期/时间
- 请求正文（如可能）
:::


### `INVALID KEY`
API 错误代码: `ERROR_KEY_DOES_NOT_EXIST` <br />
未找到 API 密钥或格式不正确。请确认您使用的是[个人账户](https://dash.capmonster.cloud/)中的密钥，并且该密钥处于激活状态。如果错误仍然存在，请联系支持并提供 *taskId* 和完整请求。

### `NO FUNDS`
API 错误代码: `ERROR_ZERO_BALANCE` <br />
账户余额不足以进行识别。[充值](https://capmonster.cloud/SelectPaymentType) 后重试任务。

### `BIG IMAGE SIZE`
API 错误代码: `ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
上传的图片超过允许的 50 KB 大小。请降低分辨率或压缩文件后重新提交任务。此错误仅出现在需要上传图片的验证码中（*ImageToText、ComplexImageTask、ComplexImageTask Recaptcha* 等）。

### `ZERO IMAGE SIZE`
API 错误代码: `ERROR_ZERO_CAPTCHA_FILESIZE` <br />
图片大小过小（小于 100 字节）。请检查文件是否正确并包含验证码图片。

### `CAPTCHA ID IS NOT FOUND`
API 错误代码: `ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
不存在该 taskId 的任务或已过期（通常为 5 分钟）。请确保在提交任务后立即请求结果。

### `CAPTCHA UNSOLVABLE`
API 错误代码: `ERROR_CAPTCHA_UNSOLVABLE` <br />
服务无法解决该任务。可能原因：验证码不受支持、图片为空或损坏、参数错误或技术故障。建议仔细检查传递的参数，或使用 CapMonster Cloud 浏览器扩展中的[参数映射](https://docs.capmonster.cloud/zh/docs/extension/extension-main#%E9%AA%8C%E8%AF%81%E7%A0%81%E5%8F%82%E6%95%B0%E6%98%A0%E5%B0%84)。如果错误重复出现，请联系支持并附上 *taskId*、任务类型 (*type*)、原始图片或输入数据、任务日期/时间及请求正文。

### `CAPTCHA IS NOT READY`
API 错误代码: `CAPTCHA_NOT_READY` <br />
解决方案仍在处理中。请至少间隔 2 秒后再次请求。

### `REQUEST IS NOT ALLOWED FROM YOUR IP`
API 错误代码: `ERROR_IP_NOT_ALLOWED` <br />
当前 IP 使用此密钥的请求被拒绝。请在个人账户的设置中[将您的 IP 添加到白名单](https://dash.capmonster.cloud/Account/Settings)。

### `IP BANNED`
API 错误代码: `ERROR_IP_BANNED` <br />
您使用错误的 API 密钥超出了请求限制，请检查[控制面板](https://dash.capmonster.cloud/)中的密钥，并稍后重试。

### `INCORRECT METHOD`
API 错误代码: `ERROR_NO_SUCH_METHOD` <br />
任务类型（参数 *type*）不正确。请检查支持的[验证码类型列表](https://docs.capmonster.cloud/zh/docs/captchas/)（参数 *type* 的值）。

### `REQUEST LIMIT EXCEEDED`
API 错误代码: `ERROR_TOO_MUCH_REQUESTS` <br />
您对同一任务的结果请求频率过高。请不要超过每 2 秒请求一次[任务结果](./methods/get-task-result.md)。

### `THE DOMAIN IS NOT ALLOWED`
API 错误代码: `ERROR_DOMAIN_NOT_ALLOWED` <br />
CapMonster Cloud 禁止识别来自某些域名的验证码。当尝试为这些域名创建任务时，将会收到此错误。

### `THE TOKEN IS EXPIRED`
API 错误代码: `ERROR_TOKEN_EXPIRED` <br />
附加令牌已过期。请获取新令牌并重新提交任务。

### `NO FREE SERVERS`
API 错误代码: `ERROR_NO_SLOT_AVAILABLE` <br />
当前没有可用服务器处理该任务。如果收到此错误，请联系支持，我们将考虑扩展基础设施。

### `INVALID RECAPTCHA SITEKEY`
API 错误代码: `ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
提供的 *websiteKey* 不正确。请检查验证码页面代码中的值并正确传递。如果难以找到正确的 key，请联系支持。

### `INVALID RECAPTCHA DOMAIN`
API 错误代码: `ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
域名与指定的 *sitekey* 不匹配，或参数 *websiteURL* 格式错误。请提供包含协议的完整验证码页面 URL。**仅支持 `http://` 和 `https://`。**

### `RECAPTCHA TIMEOUT`
API 错误代码: `ERROR_RECAPTCHA_TIMEOUT` <br />
reCAPTCHA 解决超时，可能是代理速度慢或 Google 服务器响应延迟导致。请尝试更换代理或稍后重试。

### `YOUR IP IS BLOCKED`
API 错误代码: `ERROR_IP_BLOCKED` <br />
由于大量失败请求，该 IP 被封锁。请在重新提交前检查任务参数和 API 密钥。

### `FAILED TO CONNECT PROXY`
API 错误代码: `ERROR_PROXY_CONNECT_REFUSED` <br />
无法连接代理：连接错误或超时。请检查 IP、端口及代理可用性。

### `THE PROXY IP IS BANNED`
API 错误代码: `ERROR_PROXY_BANNED` <br />
该代理 IP 被验证码服务封锁。请使用其他代理。

### `MISSING PROXY`
API 错误代码: `ERROR_PROXY_MISSING`<br />
缺少必填的代理参数或 *proxyType* 错误。请填写所有必填参数：*proxyType*、*proxyAddress*、*proxyPort*，并检查 *proxyType* 的值是否正确。

### `PROXY NOT AUTHORIZED`
API 错误代码: `ERROR_PROXY_NOT_AUTHORISED`<br />
代理身份验证信息错误：*proxyLogin* 或 *proxyPassword*。请检查 *proxyLogin* 和 *proxyPassword*，确保其正确且有效。

### `PROXY READ TIMEOUT`
API 错误代码: `ERROR_PROXY_READ_TIMEOUT`<br />
*proxyAddress* 或 *proxyPort* 错误，导致连接超时。请检查并确保代理可用且稳定。

### `INCORRECT TASK TYPE`
API 错误代码: `ERROR_TASK_NOT_SUPPORTED` <br />
任务类型不受支持或不正确。请检查任务对象中的 type 属性值。

### `ERROR_TASK_ABSENT`
API 错误代码: `ERROR_TASK_ABSENT` <br />
在 [createTask](./methods/create-task.md) 请求中缺少 task 对象或 JSON 无效。请检查请求结构。

### `USERAGENT IS EXPIRED`
API 错误代码: `ERROR_WRONG_USERAGENT`<br />
请求中提供的 User Agent 无效。您可以在[这里](https://capmonster.cloud/api/useragent/actual)查看最新的 User Agent。
