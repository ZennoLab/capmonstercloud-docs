﻿---
sidebar_position: 2
sidebar_label: Captcha recognition via API of other services
title: "Captcha recognition via API of other services"
description: "Learn how to use external services with CapMonster.Cloud. A complete guide on how to integrate and automate when recognising and bypassing captchas."
---

# Captcha recognition via API of other services
CapMonster Cloud supports API: Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha. Thus, you can solve captcha through CapMonster.Cloud, even if your program doesn't have integration with our service.

You just need to install ![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.001.png) [**CapMonsterInterceptor**](https://static.zenno.services/ccl/interceptor.msi) (OC Windows)
![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.002.png) Other platforms support are in development.

During the installation process, you’ll need to specify the API key of your account, which you can find in your [personal area](https://capmonster.cloud/Dashboard).

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.003.png)

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.004.png) 

When completed, a CapMonsterInterceptor shortcut will be created on the desktop. After launch, the program will be available in the tray. No settings are required.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.005.png) 

When CapMonsterInterceptor is running, all captchas sent for recognition to *Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha* services will be intercepted and redirected to CapMonster.Cloud.

## Example
Just select one of the recognition services in your program where you need to enter a captcha. In our example, it will be *DeathByCaptcha*.

- **Note for DeathByCaptcha** to identify a user, the DeathByCaptcha API uses username and password, not an API key. In this case, you need to fill 2 fields with random values.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.006.png) 

Enter any API-key (For example, qwerty).

Now you can run your program. All captchas sent to another service (DeathByCaptcha in our example) will be intercepted and sent to CapMonster Cloud.  

By double-clicking on the CapMonsterInterceptor icon in the tray, you can see the statistics of intercepted captchas sent for recognition.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.007.png) 

## Questions and answers

<details>
    <summary>How to change the API-key specified when installing CapMonsterInterceptor?</summary>

Double click on the CapMonsterInterceptor tray icon. In the program window, find the «Settings» block, change the key and click «Save».

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.009.png) 
</details>

<details>
    <summary>What to do if occured an error: An attempt was made to access a socket using a method prohibited by access rights?</summary>

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.010.png) 

If an error occurs during the launch, it means, that port 80 and/or 443 is occupied by another app.

To fix this error, it is necessary to end the process, that occupies these ports.  

Run the command line via the start menu →  search → cmd

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.011.png) 

Enter the command netstat -a -o | findstr :443

The ***-a*** key indicates that we are interested in all active connections, ***-o*** — for each of them we need to display the PID (process ID).
**findstr :443** will show us only the process that occupies the port we need.

The PID of the process will be displayed in the right column, as in the screenshot. 
Remember it or write it down.

Open the task manager, go to the «Details» tab, find the process with the necessary ID and end the task.

![](./images/external-services/Aspose.Words.99efaca6-356f-455c-b8b5-a03b46d29ad6.012.png)

</details>
