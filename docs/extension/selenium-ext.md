﻿---
sidebar_position: 4
draft: true
---


# Интеграция расширения в Selenium с использованием Node.js

 В этом руководстве мы покажем вам, как интегрировать браузерное расширение с помощью библиотеки Selenium WebDriver и выполнить автоматизированные задачи на конкретном веб-сайте.

## Шаг 1: Установка зависимостей
1. Установите Node.js и npm (Node.js Package Manager) на вашем компьютере. Вы можете скачать их с [официального сайта](https://nodejs.org/) Node.js.

1. Установите необходимые пакеты, используя npm:

```bash
npm install selenium-webdriver
```
## Шаг 2: Изменение параметров расширения
Прежде чем начать автоматизацию с расширением, необходимо добавить начальные настройки расширения, обязательно нужно добавить `clientKey` в файл `defaultSettings.json`.

Для этого необходимо скачать [архив расширения](extension-main.md).

Распаковать расширение и в корне распакованного архива будет файл `defaultSettings.json` в нем можно менять настройки, с описанием параметров можно ознакомиться на [странице](ext-settings.md).

После того как настройки успешно изменены, необходимо запаковать обратно в zip-архив.

## Шаг 3: Настройка Selenium WebDriver для работы с расширением
Теперь настроим Selenium WebDriver для использования созданного профиля браузера.<br />
Для этого создадим файл `index.js` со следующим содержанием: 


```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
  // Путь к файлу расширения zip
  const extensionPath = path.resolve(__dirname, './extension.zip');

  // Создание объекта опций браузера
  const options = new chrome.Options();
  
  // Добавление расширения в опции браузера
  options.addExtensions(extensionPath);

  // Создание экземпляра веб-драйвера
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Открыть страницу Google
    await driver.get('https://google.com/');
    
    // Пример: поиск элемента на странице и взаимодействие с ним
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium with extension', Key.RETURN);
    
    // Дождитесь результатов поиска
    await driver.wait(until.titleContains('Selenium with extension'), 5000);
  } finally {
    // Закрыть браузер после использования
    await driver.quit();
  }
})();
```

## Шаг 4: Написание автоматизированных действий
Теперь, когда у вас есть настроенный браузер с расширением, вы можете использовать методы WebDriver для выполнения автоматизированных действий на веб-сайте.

Пример автоматизированного действия:

```js
// Предположим, вы хотите кликнуть по элементу на странице
driver.findElement(By.xpath("//button[@id='my-button']")).click();
```

## Шаг 5: Запуск скрипта
Для запуска нашего автоматизированного скрипта, который запустит браузер и выполнит действия которые мы описали необходимо написать в консоли:

```bash
node index.js
```

Надеемся, что данное руководство было полезным для вас. Если у вас возникли вопросы, обращайтесь к официальной документации Selenium и документации вашего браузера.