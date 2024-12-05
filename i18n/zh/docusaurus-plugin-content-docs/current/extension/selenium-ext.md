---
sidebar_position: 7
---


# 将扩展程序集成到 Selenium 中使用 Node.js

在本教程中，我们将向您展示如何使用 Selenium WebDriver 库集成浏览器扩展程序并在特定网站上执行自动化任务。

## 一步：安装

1. 在您的计算机上安装 Node.js 和 npm（Node.js 包管理器）。您可以从[官方网站](https://nodejs.org/)下载 Node.js。

2. 使用 npm 安装所需的软件包：

```bash
npm install selenium-webdriver
```
## 第二步：更改扩展参数

在开始使用扩展进行自动化之前，您需要添加初始设置。您应该在`defaultSettings.json`文件中添加`clientKey`。

为此，您需要下载[扩展程序压缩包](extension-main.md)。

解压扩展程序，在解压后的根目录中会有一个`defaultSettings.json`文件，您可以在其中更改设置。[这里](ext-settings.md)可以找到参数的描述。

成功更改设置后，您需要将其重新压缩为 .zip 文件。

## 第三步：设置 Selenium WebDriver 以使用扩展程序

现在配置 Selenium WebDriver 以使用创建的浏览器配置文件。

为此，创建一个`index.js`文件，内容如下：

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
  // 扩展程序 .zip 文件的路径
  const extensionPath = path.resolve(__dirname, './extension.zip');

  // 创建浏览器选项对象
  const options = new chrome.Options();
  
  // 将扩展程序添加到浏览器选项中
  options.addExtensions(extensionPath);

  // 创建 WebDriver 实例
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // 打开 Google 页面
    await driver.get('https://google.com/');
    
    // 示例：在页面上查找元素并与之交互
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('带扩展的 Selenium', Key.RETURN);
    
    // 等待搜索结果
    await driver.wait(until.titleContains('带扩展的 Selenium'), 5000);
  } finally {
    // 关闭浏览器
    await driver.quit();
  }
})();
```

## 第四步：编写自动化操作
现在，当浏览器扩展已配置完毕，您可以使用 WebDriver 方法在您的网站上执行自动化操作。

自动化操作示例：

```js
// 如果您想点击页面上的一个元素
driver.findElement(By.xpath("//button[@id='my-button']")).click();
```

## 第五步：运行脚本

要运行我们的自动脚本，该脚本将启动浏览器并执行上述操作，您需要在控制台中输入：

```bash
node index.js
```

要在不丢失数据的情况下更新扩展，您需要从旧版本复制所有设置和数据，下载新版本的扩展，解压缩并用新版本替换旧版本。

我们希望本指南对您有所帮助。如果您有任何问题，请参考官方 Selenium 文档和您的浏览器文档。