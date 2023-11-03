---
sidebar_position: 3
sidebar_label: Инструкция по установке
---

# Инструкция по установке расширения CapMonster Cloud в браузер ProjectMaker

:::info

Расширение работает только с типом браузера Chromium!

:::

## **Способ №1: Установка с помощью CRX-файла.**
1. Скачать [CRX-файл CapMonster Cloud](https://chrome.google.com/webstore/detail/capmonster-cloud-%E2%80%94-automa/pabjfbciaedomjjfelfafejkppknjleh?hl=ru);

:::info
Инструкцию по установке CRX-файла можно посмотреть [тут](https://zennolab.atlassian.net/wiki/spaces/RU/pages/2081423361#%D0%9A%D0%B0%D0%BA-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-crx-%D1%84%D0%B0%D0%B9%D0%BB-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F).
:::

2. Открыть ProjectMaker;

1. Добавить экшен «Установить расширение»;

    1. В настройках экшена указать путь до CRX-файла;

1. Добавить экшен «Активировать расширение»;

1. В настройках экшена установить ID расширения «pabjfbciaedomjjfelfafejkppknjleh»;

1. Ввести API-key из личного кабинета CapMonster Cloud в открывшемся окне расширения.
## **Способ №2: Установка через интернет-магазин Google Chrome.**
1. Открыть ProjectMaker;
1. Перейти на страницу расширения <https://chrome.google.com/webstore/detail/capmonster-cloud-%E2%80%94-automa/pabjfbciaedomjjfelfafejkppknjleh?hl=ru> ;
1. Установить расширение, нажав кнопку «Установить»;
1. Добавить экшен «Активировать расширение»;

    1. В настройках экшена вставить ID расширения «pabjfbciaedomjjfelfafejkppknjleh»;

1. Ввести API-key из личного кабинета CapMonster Cloud в открывшемся окне расширения.
:::info
В новой версии расширения CapMonster Cloud добавлена возможность решения  reCAPTCHA2, reCAPTCHA Enterprise, hCaptcha с помощью кликов.
:::
![](Aspose.Words.d33c25f1-0d68-4361-bcfb-da50f3892df4.001.png) 
:::caution
Обратите внимание, что при установке расширения, по дефолту устанавливается тип решения  reCAPTCHA2, reCAPTCHA Enterprise, hCaptcha через клики.
:::
Для удобства использования расширения CapMonster Cloud в браузере ProjectMaker мы подготовили проект для автоматизации установки расширения, ввода Api-Key, а также выбор типа решения reCAPTCHA2, reCAPTCHA Enterprise, hCaptcha.

***Минимальная версия ZennoPoster 7.6.1***

![](Aspose.Words.d33c25f1-0d68-4361-bcfb-da50f3892df4.002.png)
:::caution
При установке расширения CapMonster Cloud через CRX-файл необходимо следить за актуальностью версии расширения. В случае обновления версии нужно заново скачать актуальный CRX-файл и переустановить его.
:::
:::caution
При использовании расширения CapMonster Cloud необходимо удалить из вашего проекта экшены распознавания капчи.
:::