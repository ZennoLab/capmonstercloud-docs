---
sidebar_position: 8
---


# Известные проблемы


<details>
        <summary>store.steampowered.com</summary>

Наш сервис умеет решать только капчи на английском языке, на данном сайте определение языка капчи идет не от системных настроек, а от выбранного на сайте языка, поэтому для корректного решение обязательно выбирайте английский язык.

</details>

<details>
        <summary>Ошибка 'Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'click')'</summary>

Если при решении капчи методом кликов (ComplexImageTask) через расширение CapMonster Cloud возникает ошибка 'Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'click')', как показано на скриншоте, рекомендуется установить значение 'Задержка между кликами' в расширении — это может помочь решить проблему.
![](./images/known-issues/Uncaught.png)
</details>
