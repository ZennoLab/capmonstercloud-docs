---
sidebar_position: 4
---
# 错误描述
:::info 预防错误的建议：

- 确保您需要解决的验证码类型由 CapMonster Cloud 服务支持。
- 查阅更新的文档，以了解最新的 API 变更，并避免使用过时的方法或参数。
- 使用高质量的代理。
  :::
### `INVALID KEY`
API 错误代码：`ERROR_KEY_DOES_NOT_EXIST` <br />
系统中未找到账户授权密钥，或密钥格式不正确。
### `NO FUNDS`
API 错误代码：`ERROR_ZERO_BALANCE` <br />
账户余额为零。[充值](https://capmonster.cloud/SelectPaymentType)继续进行识别操作。
### `BIG IMAGE SIZE`
API 错误代码：`ERROR_TOO_BIG_CAPTCHA_FILESIZE` <br />
您上传的验证码大小超过 500,000 字节。 
### `ZERO IMAGE SIZE`
API 错误代码：`ERROR_ZERO_CAPTCHA_FILESIZE` <br />
您上传的验证码大小少于 100 字节。
### `CAPTCHA ID IS NOT FOUND`
API 错误代码：`ERROR_NO_SUCH_CAPCHA_ID`, `WRONG_CAPTCHA_ID` <br />
请求的验证码未找到。请确保您在上传后的 5 分钟内仅请求状态更新。
### `CAPTCHA UNSOLVABLE`
API 错误代码：`ERROR_CAPTCHA_UNSOLVABLE` <br />
该类型的验证码不受服务支持，或者图像中没有包含答案，可能是因为图像噪声太多。也可能是图像损坏或渲染不正确。
### `CAPTCHA IS NOT READY`
API 错误代码：`CAPTCHA_NOT_READY` <br />
验证码尚未解决。
### `REQUEST IS NOT ALLOWED FROM YOUR IP`
API 错误代码：`ERROR_IP_NOT_ALLOWED` <br />
当前账户密钥不允许从您的 IP 发出请求。打开您的账户设置，并[将您的 IP 添加到信任列表中](https://capmonster.cloud/Account/Settings)。
### `IP BANNED`
API 错误代码：`ERROR_IP_BANNED` <br />
您已超过使用错误 API 密钥的请求限制，请在控制面板中检查您的 API 密钥的正确性，并稍后再试。
### `INCORRECT METHOD`
API 错误代码：`ERROR_NO_SUCH_METHOD` <br />
不正确的 [验证码类型](/docs/captchas)（«type» 参数的值）。
### `REQUEST LIMIT EXCEEDED`
API 错误代码：`ERROR_TOO_MUCH_REQUESTS` <br />
您已超过了获取一个任务答案的请求限制。尝试在2秒内最多请求一次[任务结果](./methods/get-task-result.md)。
### `THE DOMAIN IS NOT ALLOWED`
API 错误代码：`ERROR_DOMAIN_NOT_ALLOWED` <br />
CapMonster Cloud 无法解决某些域名的验证码。如果您尝试为这样的域名创建任务，将返回此错误。
### `THE TOKEN IS EXPIRED`
API 错误代码：`ERROR_TOKEN_EXPIRED` <br />
验证码提供者服务器报告额外令牌已过期。请尝试使用新令牌创建任务。
### `NO FREE SERVERS`
API 错误代码：`ERROR_NO_SLOT_AVAILABLE` <br />
目前没有可用的服务器来识别此任务。请稍后再试。
### `INVALID RECAPTCHA SITEKEY`
API 错误代码：`ERROR_RECAPTCHA_INVALID_SITEKEY` <br />
无效的站点密钥。
### `INVALID RECAPTCHA DOMAIN`
API 错误代码：`ERROR_RECAPTCHA_INVALID_DOMAIN` <br />
站点密钥的域名无效。
### `RECAPTCHA TIMEOUT`
API 错误代码：`ERROR_RECAPTCHA_TIMEOUT` <br />
ReCaptcha 识别超时，可能是因为慢代理或 Google 服务器。
### `YOUR IP IS BLOCKED`
API 错误代码：`ERROR_IP_BLOCKED` <br />
由于错误次数过多，您的 IP 不允许访问此 API。
### `FAILED TO CONNECT PROXY`
API 错误代码：`ERROR_PROXY_CONNECT_REFUSED` <br />
无法连接到代理服务器，连接超时。
### `THE PROXY IP IS BANNED`
API 错误代码：`ERROR_PROXY_BANNED` <br />
目标验证码服务中禁止使用该代理 IP。
### `INCORRECT TASK TYPE`
API 错误代码：`ERROR_TASK_NOT_SUPPORTED` <br />
任务类型不正确或不受支持。请检查任务对象中的 «type» 属性。
### `ERROR_TASK_ABSENT`
API 错误代码：`ERROR_TASK_ABSENT` <br />
未找到任务对象或在 [createTask](./methods/create-task.md) 请求中发送了无效的 JSON。
### `USERAGENT IS EXPIRED`
API 错误代码：`ERROR_WRONG_USERAGENT` <br />
请求指定了无效的用户代理，请查看[文章](../captchas/hcaptcha-task.mdx)中的当前用户代理信息。
