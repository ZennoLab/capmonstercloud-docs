---
sidebar_position: 1
sidebar_label: Firefox 浏览器扩展
---

# Firefox 浏览器扩展

## 描述
通过此扩展，您可以直接在浏览器中自动识别验证码。

该扩展适用于Mozilla Firefox浏览器。

-----
## 自动安装
1. 打开 [Firefox 插件商店](https://addons.mozilla.org/en-US/firefox/addon/capmonster-cloud/)。
2. 点击 **Add to Firefox**。
3. 在模态窗口中点击 "Add" 按钮确认添加扩展。
   
   ![](./images/extension-main-firefox/modal.png)

要开始使用扩展，请点击地址栏右侧的扩展图标。前往 [设置页面](extension-firefox.md#设置)。

*如果因某些原因无法从 Firefox 插件商店安装扩展，请使用手动安装的说明。*

<details>
    <summary>手动安装</summary>

1. 下载带有扩展的[存档文件](https://drive.google.com/file/d/1Esu3x15oEbtXaoDUbyJD7dsy07mt02jY/view?usp=drive_link).

1. 打开 Firefox 浏览器并进入扩展管理：
   ![](./images/extension-main-firefox/extension-menu.png)
   
1. 点击齿轮按钮，在打开的下拉列表中选择 "从文件安装附加组件..."
   ![](./images/extension-main-firefox/extension-installation.png)
   
1. 选择已下载的带有扩展的存档文件。

1. 下载完扩展后，转到 "管理您的扩展程序" 并点击安装的扩展。
   ![](./images/extension-main-firefox/extension1.png)
   
1. 进入 "权限" 选项卡，确保所有权限已被授予。
   ![](./images/extension-main-firefox/extension2.png)
</details>

<details>
    <summary>扩展程序的手动更新</summary>

如果您正在安装扩展的更新版本，那么在更新原始扩展文件后，您还需要在 "扩展" 页面上点击更新按钮（如何打开此页面在上面的 "手动安装" 部分已经描述）。
</details>

-----
## 设置
<details>
    <summary>如何固定扩展</summary>

默认情况下，新安装的扩展会自动固定在浏览器面板上。
![](./images/extension-main-firefox/extension-panel.png)
</details>

启动扩展后，您将看到此窗口：

![](./images/extension-main-firefox/ext.screen.enf.png)
### <a name="id-browserextension-apikey"></a>API 密钥
在相应的字段中输入 API 密钥(1)，点击保存按钮(2)。如果您输入了正确的密钥，您的余额将显示在下方(3)。

![](./images/extension-main-firefox/api-key.png)
### <a name="id-browserextension-automaticcaptchasolving"></a>自动识别验证码
在这里，您可以选择扩展将自动识别的验证码类型。

![](./images/extension-main-firefox/extension.examplef.png)

:::info !

您可能需要重新加载带有验证码的页面以使更改生效！

:::
### <a name="id-browserextension-repeatcaptchasolvingincaseofanerror"></a>在出现错误时重复解决验证码
如果第一次尝试解决验证码失败，扩展将发送重复的任务，直到验证码解决成功，或者直到达到此设置中指定的限制为止。
### <a name="id-browserextension-proxy"></a>代理
![](./images/extension-main-firefox/proxy.png)

在这里，您可以指定将与识别任务一起发送的代理设置。

“登录”和“密码”是可选的。
### <a name="id-browserextension-blacklistcontrol"></a>黑名单控制
使用黑名单，您可以配置扩展程序在特定网站上忽略验证码。

启用此选项后，将会出现一个输入网站的字段：

![](./images/extension-main-firefox/blacklist-control.png)

域名必须与协议（https:// 或 http://） 一起指定。
您可以使用通配符：

- ? - 代表除句点以外的任何字符
- \* - 代表任意数量的任意字符

示例：

|**过滤器**|**描述**|
| :-: | :-: |
|`https://zennolab.com`|禁止在 `https://zennolab.com` 网站上使用扩展|
|`https://*.zennolab.com`|禁止在所有子域名 `https://zennolab.com` 上使用扩展|
|`https://www.google.*`|禁止在所有 Google 域名下（ru、com、com.ua 等）使用扩展|

当解决验证码时出现错误，请参阅[错误术语表](/api/api-errors.md)。