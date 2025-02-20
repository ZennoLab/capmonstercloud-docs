﻿---
sidebar_position: 9
sidebar_label: Reasons for blocking
title: "Reasons for blocking captcha recognition"
description: "How can I find out the reason for a captcha recognition ban using Capmonster Cloud API? Read about the reasons of blocking when bypassing captchas in the service documentation."
---

# Reasons for blocking
## ![](./images/block-reason/Aspose.Words.bbd9194a-7e5f-4818-92e0-dfa2931e5a81.001.png) How to find out the reason for the ban?
In case of blocking, you’ll see a notification in your [personal account](https://capmonster.cloud/Dashboard).
Ban history is available in the settings.

![](./images/block-reason/ban-history.png) 
## ![](./images/block-reason/Aspose.Words.bbd9194a-7e5f-4818-92e0-dfa2931e5a81.003.png) The main reasons for getting a ban:

- **KeyDoesntExist** (multiple requests without a key / with an invalid key)
- **ZeroBalance** (multiple requests with zero balance)
- **WrongTaskId**
  - when exceeding the limit of the 120 requests per task
  - multiple requests to getTaskResult with wrong TaskId
- **BadProxy** (multiple requests with a banned proxy)

Users receive a ban for repeated actions for a limited period of time.
## ![](./images/block-reason/Aspose.Words.bbd9194a-7e5f-4818-92e0-dfa2931e5a81.004.png) When will the ban be removed?

The duration of the block is 10 minutes, provided that you do not continue to break the rules described above.


<details>
  <summary>
    I am constantly banned. What should I do?
  </summary>

The reason is that your app/script sends multiple incorrect API requests. 

**I am a user**

If you are not the developer of the app/script that sends captchas, contact their support and explain that the captcha recognition service blocks you for multiple incorrect requests (read the explanation of the reasons for getting a ban).

**I am a developer**

If you are a developer, make changes yourself according to the rules and limits:

- Make sure your app or script is sending correct requests to the API. Make sure all parameters are correct, including keys, task IDs, and other required data.

- Observe the limits on the number of requests per task and other restrictions set by the captcha recognition service. If your app sends too many requests, it can lead to blocking.

- Make sure you use reliable proxy servers to avoid blocking due to the use of banned proxies.

To see examples of valid queries, see [Captcha Types](https://docs.capmonster.cloud/docs/captchas). 

  </details>


