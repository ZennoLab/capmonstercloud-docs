---
sidebar_position: 0
# id: my-home-doc
# slug: /
---

# 入门指南

本章节包含服务的入门说明，以及发送验证码和识别验证码的主要方法介绍。

## 第一步：创建账号

在开始解决验证码之前，请先在 [CapMonster Cloud](https://capmonster.cloud/) 注册账号。  
然后前往您的 [控制面板](https://capmonster.cloud/Dashboard)，您可以在其中查看当前余额、API 密钥以及已解决和未解决任务的统计信息。

![](./images/dashboard.png)

## 第二步：充值账户

该服务支持多种付款方式。

![](./images/payment.png)

现在，您可以通过 [浏览器扩展](https://docs.capmonster.cloud/docs/extension) 或使用 API 自动解决验证码。

## 发送任务与获取结果的方法

:::info 方法地址
```http
https://api.capmonster.cloud
```
请求格式： `JSON POST`。
响应始终采用`JSON`格式。
:::

**解决验证码的步骤如下：**

1. 使用 [createTask](api/methods/create-task.md) 方法创建验证码任务；  
2. 等待一段时间，具体时间取决于系统负载，一般为 300 毫秒至 6 秒；  
3. 使用 [getTaskResult](api/methods/get-task-result.md) 获取验证码的解决结果；如果尚未解决，请返回第 2 步重试。

附加方法：

- [获取](api/methods/get-balance.md) 当前账户余额。

### 代码示例

为了方便快速集成 CapMonster.Cloud API，我们提供了多种语言的客户端库。  
以市场上最低的价格识别各种验证码类型！

|**语言**|**链接至存储库**|
| :- | :- |
|С#|- [Nuget](https://www.nuget.org/packages/Zennolab.CapMonsterCloud.Client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-dotnet) |
|Python|- [PyPl](https://pypi.org/project/capmonstercloudclient/)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-python)|
|JS|- [Npm](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-js)|
|GO|- [Pkg.go.dev](https://pkg.go.dev/github.com/ZennoLab/capmonstercloud-client-go)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-go)|
|PHP|- [Packagist](https://packagist.org/packages/zennolab/capmonstercloud.client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-php)|


## 验证码识别方式

### 1. 通过 Token

这是最基本的识别方式，要求您：

- 手动查找页面中的以下参数：  
  - `sitekey`（或 `websiteKey`）— 验证码唯一标识；  
  - `websiteURL` — 显示验证码的页面地址；  
- 分析 JavaScript 代码和网络请求以获取这些参数；  
- 使用参数向 CapMonster Cloud 发送任务；  
- 接收一个 **token** — 用于验证识别结果的唯一代码；  
- 执行 **autosubmit** — 将 token 提交回网站，完成验证。

> 适用于具备开发经验、能手动分析代码并构建交互逻辑的用户。

---

### 2. 通过点击模拟

该方法模拟用户行为（鼠标移动、点击、图像选择），通过官方浏览器扩展实现，无需：

- 手动查找 `sitekey` 或其他参数；  
- 分析 HTML 或 JavaScript；  
- 编写 autosubmit 提交逻辑。

该方法适用于以下场景：

- 网站使用了非标准验证码实现；  
- 参数被加密或动态加载；  
- 提交逻辑被深度隐藏在脚本中。

> 适合复杂站点和无编程经验的用户。

---

这两种方式均使用 CapMonster Cloud 进行识别，但配置难度不同。  
具体选择取决于网站实现方式和用户技术水平。

您也可以在 [ZennoPoster](https://zennolab.com/en/products/zennoposter/) 中使用点击方式。  
只需将 CapMonster Cloud 浏览器扩展安装到 Chromium 引擎的项目中，输入 API 密钥即可像在 Chrome 中一样操作。  
参见 [ProjectMaker 中扩展安装指南](extension/install-instruction.md)。

## ZennoPoster 中的 Token 提交示例

使用操作模块实现：

1. 在 ProjectMaker 中集成 CapMonster Cloud（“设置” → “验证码” → 选择 CapMonster Cloud 模块，输入 API 密钥）；

2. 添加操作：“清除 Cookie” → “打开页面”（例如 reCaptcha v.2 示例：[https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)）→ “识别 ReCaptcha”；

3. 在“识别 ReCaptcha”的属性中选择 CapMonsterCloud.dll，设置验证码类型（reCaptcha v.2）和识别方式（**在标签页中** 或 **通过 sitekey**）：

![](./images/getting-started-1.png)

4. 若选择 **通过 sitekey**，则填写验证码参数 (`sitekey`) 和页面 URL：

![](./images/getting-started-2.png)

### reCaptcha v.3

1. 添加操作：“清除 Cookie” → “打开页面” → “识别 ReCaptcha”（如：[https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta](https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta)）；

2. 在属性中选择 CapMonsterCloud.dll，设置验证码类型为 reCaptcha v.3，识别方式（在标签页中或通过 sitekey），并填写 `Action` 与 `minScore`：

![](./images/getting-started-3.png)

<!--
### hCaptcha

1. 在跳转到验证码页面后添加“识别 hCaptcha”操作；

2. 选择方式（在标签页中或通过 sitekey），若为后者，则需填写 sitekey 和 URL：

![](./images/getting-started-4.png)
-->

### 通过 HTTP 请求方式

部分验证码类型在 ProjectMaker 中没有预设操作，您可以使用扩展或手动构造请求实现：

1. 添加“变量处理”操作（添加操作 → 数据 → 变量处理），设置值为您的 CapMonster API 密钥：

![](./images/getting-started-5.png)

2. 添加“HTTP” → “POST 请求”操作（如有需要可添加代理）：

![](./images/getting-started-6.png)

3. 添加“JSON/XML 处理”操作（添加 → 数据 → JSON/XML 处理），选择“解析”，类型为 JSON，并从变量设置解析文本：

![](./images/getting-started-7.png)

4. 添加“变量处理”操作，设置值为 `{-Json.taskId-}`：

![](./images/getting-started-8.png)

5. 构造新的 POST 请求以获取结果：

![](./images/getting-started-9.png)

6. 添加 JSON/XML 处理中的“解析”：

![](./images/getting-started-10.png)

7. 使用“设置值”操作将 token 插入目标表单中（需根据页面代码调整）：

![](./images/getting-started-11.png)

## 视频教程：使用 API 和 ZennoPoster 解决验证码

以下视频展示如何通过 CapMonster Cloud 的 API 和 [ZennoPoster](https://zennolab.com/en/products/zennoposter/) 解决验证码，并提供快速设置和使用建议。

<video width="100%" height="400" controls>
  <source src="/videos/Capmonster Cloud-ZH.mp4" type="video/mp4" />
  您的浏览器不支持 video 标签。
</video>
