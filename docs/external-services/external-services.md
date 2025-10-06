﻿---
sidebar_position: 2
sidebar_label: Распознавание капч через API других сервисов
title: "Распознавание капч через API других сервисов"
description: "CapMonster Cloud поддерживает API сервисов - Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha. Таким образом, вы можете разгадывать капчу через CapMonster Cloud, даже если в вашей программе нет интеграции с нашим сервисом."
---

# Распознавание капч через API других сервисов
CapMonster Cloud поддерживает API следующих сервисов: **Anti-Captcha (v1.0, v2.0)**, **RuCaptcha**, **RipCaptcha**, **2Captcha**, **BypassCaptcha**, **DeathByCaptcha**. Таким образом, вы можете обрабатывать капчу через CapMonster Cloud, даже если ваша программа не имеет прямой интеграции с нашим сервисом.

Для упрощения работы с веб-сайтами и автоматизации взаимодействия с капчами можно использовать **CapMonsterInterceptor** — это программное обеспечение (ПО), которое перехватывает капчи на стороне клиента и автоматически передаёт их в CapMonster Cloud для обработки.

Для этого необходимо установить ![(синяя звезда)](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.001.png) [**CapMonsterInterceptor**](https://static.zenno.services/ccl/interceptor.msi) (OC Windows)
![(синяя звезда)](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.002.png) Поддержка других платформ в разработке.

В процессе установки потребуется указать API-ключ вашего аккаунта, который вы сможете найти в [личном кабинете](https://capmonster.cloud/Dashboard).

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.003.png)

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.004.png) 

По завершению на рабочем столе будет создан ярлык CapMonsterInterceptor. После запуска программа будет доступна в трее. Никаких настроек не требуется.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.005.png) 

Когда CapMonsterInterceptor запущен, все капчи, отправленные на распознавание в сервисы *Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha*, будут перехватываться и перенаправляться в CapMonster Cloud.

## Пример
Просто выберите один из сервисов распознавания в своей программе, где требуется ввод капчи. В нашем примере это будет *DeathByCaptcha*.

- **примечание для DeathByCaptcha:** для идентификации пользователя API DeathByCaptcha использует логин и пароль, а не API ключ. В этом случае нужно заполнить 2 поля случайными значениями.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.006.png) 

Введите любой API-ключ (*Например, qwerty*).

Теперь можете запускать свою программу. Все капчи, отправленные на другой сервис (в примере DeathByCaptcha), будут перехватываться и отправляться в CapMonsterCloud. 

Щёлкнув 2 раза по иконке CapMonsterInterceptor в трее, вы сможете увидеть статистику перехваченных капч, отправленных на распознавание.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.007.png) 


## Ответы на вопросы

<details>
    <summary>Как изменить API-ключ, указанный при установке CapMonsterInterceptor?</summary>

Щелкните 2 раза по иконке CapMonsterInterceptor в трее. В окне программы найдите блок «Settings», замените ключ на новый и нажмите кнопку «Save».

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.009.png) 
</details>

<details>
    <summary>Что делать, если возникла ошибка: Сделана попытка доступа к сокету методом, запрещённым правами доступа.</summary>

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.010.png) 

Если при запуске возникнет ошибка, это означает, что 80 и\или 443 порт занят другим приложением.

Для исправления данной ошибки необходимо завершить процесс, который занимает данные порты.

Запускаем командную строку через меню пуск → поиск → cmd

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.011.png) 

Вводим команду netstat -a -o | findstr :443

Ключ ***-a*** указывает, что нас интересуют все активные подключения, ***-o*** — для каждого из них нужно отобразить *PID* (идентификатор процесса).
**findstr :443** покажет нам только тот процесс, который занимает нужный нам порт.

В правой колонке отобразится PID процесса, как на скриншоте.
Запомните его или запишите.

Открываем диспетчер задач, переходим во вкладку **Подробности**, находим процесс с нужным идентификатором и завершаем задачу.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.012.png)

</details>
