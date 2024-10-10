# Как подключить CapMonster.cloud к нужной программе?
CapMonster.cloud работает абсолютно с любыми программами для распознавания капч. Чтобы подключить CapMonster.cloud к вашему софту, воспользуйтесь инструкцией ниже.
## **Подключение к программам с поддержкой CapMonster.Cloud** 
<details>
    <summary>ZennoPoster</summary>

![](./images/external-program/zennoposter.png)
</details>

<details>
    <summary>KeyCollector</summary>

Выберите “Использовать CapMonster.cloud“ и укажите ваш персональный API-ключ.

![](./images/external-program/Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.003.png)
</details>

<details>
    <summary>A-Parser</summary>

Для разгадывания reCAPTCHA выберите “Util::ReCaptca2“ и укажите ключ для соответствующего поля Provider.

![](./images/external-program/aparser.png) 

Для решения обычных капч нужно выбрать “Util::Antigate“ и указать “api.capmonster.cloud“ в качестве значения для “Antigate domain“. А в поле “key” - ваш личный API-ключ.

![](./images/external-program/aparser2.png)
</details>

<details>
    <summary>MailBot by Tavel</summary>

![](./images/external-program/Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.006.png)
</details>

## **Подключение к программам, в которых можно указать домен**
Скопируйте домен [api.capmonster.cloud](https://api.capmonster.cloud) и ключ для CapMonster.cloud:

Этот способ подходит для:

<details>
    <summary>ZennoDroid</summary>

![](./images/external-program/Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.007.png)
</details>

## **Подключение к другим программам в 3 шага**
1. Выберите в своём софте один из сервисов распознавания капчи, которые мы поддерживаем
   `Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha`.
1. Далее укажите ваш личный API ключ от сервиса CapMonsterCloud в соответствующем поле софта с которого будете слать капчи.
   1. **примечание для DeathByCaptcha:** для идентификации пользователя API DeathByCaptcha использует логин и пароль, а не API ключ. В этом случае укажите API ключ от сервиса CapMonsterCloud в графу пароль. А в поле логин можете ввести любое значение.
1. Последний шаг - сопоставить наш IP адрес с другим сервисом, чтобы CapMonster.Cloud смог перехватывать капчи от сервисов, указанных выше. Для этого выберите свою OC, щелкните по спойлеру и следуйте инструкции.

<details>
    <summary>У меня Windows</summary>

Перейдите в папку: C:\Windows\System32\drivers\etc\ и найдите там файл **hosts**. Откройте его с помощью блокнота и добавьте в самый конец строки:
```
# capmonster.cloud begin

65.21.216.235 rucaptcha.com

65.21.216.235 ripcaptcha.com

65.21.216.235 imacros2.rucaptcha.com

65.21.216.235 2captcha.com

65.21.216.235 imacros2.2captcha.com

65.21.216.235 dc.antigate.com

65.21.216.235 anti-captcha.net

65.21.216.235 antigate.com

65.21.216.235 anticaptcha.com

65.21.216.235 www.anti-captcha.net

65.21.216.235 www.antigate.com

65.21.216.235 www.anticaptcha.com

65.21.216.235 anti-captcha.com

65.21.216.235 api.anti-captcha.com

65.21.216.235 bypasscaptcha.com

65.21.216.235 www.bypasscaptcha.com

65.21.216.235 api.dbcapi.me

65.21.216.235 api.deathbycaptcha.com

65.21.216.235 api.deathbycaptcha.eu

65.21.216.235 api.dbc.me

# capmonster.cloud end
```
Сохраните.
:::info
В некоторых случаях могут потребоваться права администратора для сохранения файла. Тогда необходимо будет выполнить следующие простые шаги:

1. Начните вводить «Блокнот» в поле поиска на панели задач. Когда нужный результат будет найден, нажмите по нему правой кнопкой мыши и выберите пункт «Запуск от имени администратора».

  ![](./images/external-program/Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.008.png)

1. В меню блокнота выберите Файл — Открыть и укажите путь к файлу hosts в папке *C:\Windows\System32\drivers\etc.* Если в этой папке присутствует несколько файлов с таким именем, открывайте тот, который не имеет никакого расширения.
1. Внесите необходимые изменения в файл hosts и после чего сохраните файл через меню.
:::

Попробуйте зайти на любой из этих доменов. Если все сделано правильно - откроется белая страница. Если у вас не получилось, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!
</details>

<details>
    <summary>У меня MacOS</summary>

Откройте терминал Терминал используя поиск Spotlight или через Launchpad

![](./images/external-program/Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.009.png) 

В окне приложения введите команду открытия текстового редактора Nano: `sudo nano /etc/hosts`

После ввода команды нажмите клавишу «Ввод», введите свой пароль администратора и снова нажмите «Ввод». 

:::info
Процесс ввода пароля администратора визуально никак не отображается — это нормально. Просто введите пароль на клавиатуре, нажмите «Ввод» и всё сработает.
:::

Теперь вы находитесь в текстовом редакторе Nano.

:::info
Мышь и трекпад здесь не работают, можно использовать только клавиатуру Mac.
:::

Добавьте в самый конец документа строки:

```
# capmonster.cloud begin

65.21.216.235 rucaptcha.com

65.21.216.235 ripcaptcha.com

65.21.216.235 imacros2.rucaptcha.com

65.21.216.235 2captcha.com

65.21.216.235 imacros2.2captcha.com

65.21.216.235 dc.antigate.com

65.21.216.235 anti-captcha.net

65.21.216.235 antigate.com

65.21.216.235 anticaptcha.com

65.21.216.235 www.anti-captcha.net

65.21.216.235 www.antigate.com

65.21.216.235 www.anticaptcha.com

65.21.216.235 anti-captcha.com

65.21.216.235 api.anti-captcha.com

65.21.216.235 bypasscaptcha.com

65.21.216.235 www.bypasscaptcha.com

65.21.216.235 api.dbcapi.me

65.21.216.235 api.deathbycaptcha.com

65.21.216.235 api.deathbycaptcha.eu

65.21.216.235 api.dbc.me

# capmonster.cloud end
```

После внесения изменений нажмите сочетание клавиш Control+O, чтобы применить их. После этого нажмите Control+X и «Ввод» для выхода из редактора. 

Чтобы увидеть изменения, осталось очистить кеш ДНС. Для этого введите команду: `sudo killall -HUP mDNSResponder`. Это очистит кеш DNS на Mac и операционная система увидит внесённые изменения в файле Hosts.

Попробуйте зайти на любой из этих доменов. Если все сделано правильно - откроется белая страница. Если у вас не получилось, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!
</details>

<details>
    <summary>У меня Linux</summary>

Откройте терминал и введите команду открытия текстового редактора Nano: `sudo nano /etc/hosts`

После ввода команды нажмите клавишу «Ввод». Теперь вы находитесь в текстовом редакторе Nano. 

Добавьте в самый конец документа строки:
```
# capmonster.cloud begin

65.21.216.235 rucaptcha.com

65.21.216.235 ripcaptcha.com

65.21.216.235 imacros2.rucaptcha.com

65.21.216.235 2captcha.com

65.21.216.235 imacros2.2captcha.com

65.21.216.235 dc.antigate.com

65.21.216.235 anti-captcha.net

65.21.216.235 antigate.com

65.21.216.235 anticaptcha.com

65.21.216.235 www.anti-captcha.net

65.21.216.235 www.antigate.com

65.21.216.235 www.anticaptcha.com

65.21.216.235 anti-captcha.com

65.21.216.235 api.anti-captcha.com

65.21.216.235 bypasscaptcha.com

65.21.216.235 www.bypasscaptcha.com

65.21.216.235 api.dbcapi.me

65.21.216.235 api.deathbycaptcha.com

65.21.216.235 api.deathbycaptcha.eu

65.21.216.235 api.dbc.me

# capmonster.cloud end
```

После внесения изменений нажмите сочетание клавиш Control+X, а затем «Y» чтобы применить их. 

Теперь попробуйте зайти на любой из этих доменов. Если все сделано правильно - откроется белая страница. Если у вас не получилось, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!
</details>

Этот способ подходит для многих приложений, включая (не полный список):

- БроБот
- Жукладочник
- Определяйка
- PHP скрипты
- Словоёб
- Add2Board
- AddNews
- AddSite
- Advego Plagiatus
- All-in-One Checker
- AllSubmitter
- Botsapp для ВК
- BotZilla
- BrowserAutomationStudio
- CheckCheck
- ComparseR
- Dark Sender
- DVChecker
- eTXT Антиплагиат
- FastTrust
- GSA Search Engine Ranker (GSA SER)
- VKCH
- Human Emulator
- Hwaddurl
- LInviter VK
- LSender VK PRO
- LSSender
- MagadanLite
- MailBot Tavel
- Majento PositionMeter
- MultiCaptchaBot
- Netpeak Checker
- Page Weight
- Poster PRO
- Private Keeper
- Quick Sender
- Register-mail
- ScrapeBox
- SELKA
- Semonitor
- Sender.Services
- SEO PowerSuite
- SERP Parser
- Sobot
- Staf4 Registrator
- TOBBOT
- TOPBOT
- TopSite
- TrafficLinks
- VkButton
- VKClient
- Web Parser
- Xneolinks
- X Parser Light
- XSEOchecker
- XseoN
- И других…

:::info !

Если у вас не получилось подключить CapMonster.Cloud к вашему приложению, пожалуйста, напишите нам в [службу поддержки](https://helpdesk.zennolab.com/conversation/new), мы поможем вам в настройке!

:::


## **Частые ошибки подключения. Как их избежать?**

**Проблемы с сетью**: Если у вас возникают проблемы с подключением к CapMonster.Cloud, проверьте ваше интернет-соединение. Неустойчивая сеть или проблемы с маршрутизацией могут привести к неполадкам при работе с сервисом.

**Ошибка в конфигурации программы**: Неправильная конфигурация программы может привести к ошибкам при использовании CapMonster.Cloud. Проверьте настройки вашего софта и убедитесь, что все параметры правильно сконфигурированы для работы с сервисом.

**Превышение лимитов**: Возможно, вы превысили лимиты на использование сервиса CapMonster.Cloud. Проверьте ваш аккаунт на наличие активных лимитов и убедитесь, что они не исчерпаны.

**Проблемы с аутентификацией**: Убедитесь, что ваш API-ключ правильно скопирован и вставлен в настройках вашего софта.

**Ошибки в настройках прокси**: Если вы используете прокси-сервер для подключения к интернету, убедитесь, что настройки прокси указаны правильно в вашем софте и не блокируют доступ к CapMonster.Cloud.
