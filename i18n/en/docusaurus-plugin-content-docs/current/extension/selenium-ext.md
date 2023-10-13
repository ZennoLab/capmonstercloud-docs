# Integrating the extension into Selenium using Node.js

In this tutorial, we will show you how to integrate the browser extension using the Selenium WebDriver library and perform automated tasks on a specific website.

## Step 1: Installation

1. Install Node.js and npm (Node.js Package Manager) on your computer. You can download it from the [official website](https://nodejs.org/) Node.js.

2. Install the required packages using npm:

```shell
npm install selenium-webdriver
```
## Step 2: Changing extension parameters

Before you start automation with the extension, you need to add initial settings. You should add `clientKey` to the `defaultSettings.json` file.

To do this, you need to download the [extension archive](extension-main.md).

Unpack the extension and and in the root of the unpacked archive there will be a *defaultSettings.json* file where you can change the settings. [Here](initial-settings.md) you can find a description of the parameters.

After the settings have been successfully changed, you need to archive it back into a .zip file.

## Step 3: Setting Selenium WebDriver to work with the extension​

Now configure Selenium WebDriver to use the created browser profile.

To do this, create an *index.js* file with the following content:

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
  // Path to the extension .zip file
  const extensionPath = path.resolve(__dirname, './extension.zip');

  // Creating a browser options object
  const options = new chrome.Options();
  
  // Adding the extension to browser options
  options.addExtensions(extensionPath);

  // Creating a web driver instance
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Open Google page
    await driver.get('https://google.com/');
    
    // Example: find an element on the page and interacting with it
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium with extension', Key.RETURN);
    
    // Wait for search results
    await driver.wait(until.titleContains('Selenium with extension'), 5000);
  } finally {
    // Close the browser 
    await driver.quit();
  }
})();
```

## Step 4: Writing automated actions
Now when the browser extension is configured, you can use WebDriver methods to perform automated actions on your website.

Example of an automated action:

```js
// If you want to click on an element on the page
driver.findElement(By.xpath("//button[@id='my-button']")).click();
```

## Step 5: Running the script

To run our automatic script, which will launch the browser and perform the actions mentioned above, you need to write in the console:

```js
node index.js
```

We hope this guide was helpful to you. If you have any questions, please refer to the official Selenium documentation and your browser documentation.