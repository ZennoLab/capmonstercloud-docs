# How to connect CapMonster.cloud to a program?
CapMonster.cloud is compatible with all captcha solvers. To connect CapMonster.clod to your program, follow the guide below.
## **Connecting to programs supporting CapMonster.Cloud** 
<details>
    <summary>ZennoPoster</summary>

![](zennoposter.png)
</details>

<details>
    <summary>KeyCollector</summary>

Select “Use CapMonster.cloud” and enter your personal API key.

![](Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.003.png)
</details>

<details>
    <summary>A-Parser</summary>

To solve a reCAPTCHA, select Util::ReCaptcha2 and specify the key for the Provider field.

![](aparser.png) 

To solve standard captchas, select “Util::Antigate“ and specify “api.capmonster.cloud“ as the value for “Antigate domain“. In the "key" field, specify your personal API key.

![](aparser2.png)
</details>

<details>
    <summary>MailBot by Tavel</summary>

![](Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.006.png)
</details>

## **Connecting to programs where you can specify a domain**
Copy the domain [api.capmonster.cloud](https://api.capmonster.cloud) and key for CapMonster.cloud.

This method works for:

<details>
    <summary>ZennoDroid</summary>

![](Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.007.png)
</details>

## **Connecting to other programs in 3 steps**
1. In your program, select one of the captcha solvers that we support:
   `Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha`.
1. Then specify your personal API key for CapMonsterCloud in the relevant field in your program from which you will send captchas.
   1. **note for DeathByCaptcha:** to identify a user, DeathByCaptcha API employs a username and password, not an API key. In this case, specify the API key for CapMonsterCloud in the password field. Enter any value in the username field.
1. Last step: match our IP with another service so CapMonster.Cloud can get captchas from the aforementioned services. For that, select your operating system, hit the spoiler, and follow the instruction.

<details>
    <summary>I have Windows</summary>

Go here: C:\Windows\System32\drivers\etc\ and find the file **hosts**. Open it with Notepad and add the following lines to the document end:

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
Save.
:::info
In some cases, you may need admin rights to save the file. In this case, you will have to follow this simple instructions:

1. Start typing "Notepad" in the search bar of your taskbar. Once the result is found, RMB-click on it and click "Run as administrator."

  ![](Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.008.png)

1. In the Notepad upper menu, click File — Open and specify the path to "hosts": *C:\Windows\System32\drivers\etc.* If there are several files with this name in the folder, open the file that has no extension.
1. Make changes to "hosts" and then save the file in the menu.
:::

Try visiting any of these domains. If everything is correct, a white page will open. If you couldn't do it, contact [support](https://helpdesk.zennolab.com/conversation/new), we will help you with all configurations!
</details>

<details>
    <summary>I have MacOS</summary>

Open Terminal via Spotlight or Launchpad.

![](Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.009.png) 

In the application window, enter the command for opening Nano text editor: `sudo nano /etc/hosts`

After you enter the command, click Enter, type your admin password, and hit Enter again.  

:::info
The process of entering the admin password is not shown. Just enter the password, click Enter, and you will get into the system. 
:::

Now you are in Nano text editor.

:::info
Neither mouse nor trackpad work here. You can only use the keyboard.
:::

Add the following lines to the end of the document:

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

After changes are made, click Ctrl+O to apply them. After that, click Ctrl+X and Enter to leave the editor.

To see the changes, clear the DNS cache. For that, enter the command: `sudo killall -HUP mDNSResponder`. It will clear the DNS cache on your Mac, and the operating system will see the changes in Hosts.

Try visiting any of these domains. If everything is correct, a white page will open. If you couldn't do it, contact [support](https://helpdesk.zennolab.com/conversation/new), we will help you with all configurations.
</details>

<details>
    <summary>I have Linux</summary>

In the application window, enter the command for opening Nano text editor: `sudo nano /etc/hosts`

After you enter the command, click Enter. Now you are in Nano text editor.  

Add the following lines to the end of the document:
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

After changes are made, click Ctrl+X and then Y to apply them.  

Try visiting any of these domains. If everything is correct, a white page will open. If you couldn't do it, contact [support](https://helpdesk.zennolab.com/conversation/new), we will help you with all configurations.
</details>

This method works for many apps, including the following:

- BroBot
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
- Botsapp for VK
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
- And others...

:::info !

If you couldn't connect CapMonster.Cloud to your app, contact [support](https://helpdesk.zennolab.com/conversation/new), we will help you with all configurations.

:::

[ref1]: Aspose.Words.65ffb1d6-0a55-415c-84ac-f87a8022a7cc.001.png
