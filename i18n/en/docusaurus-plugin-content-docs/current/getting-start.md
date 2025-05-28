---
sidebar_position: 0
---

# Getting Start

In this section, you'll learn how to send captchas to BroCapGPT and explore various methods for solving them.

:::info Method address
```http
https://api.brocapgpt.com
```
Request format: `JSON POST`.
Response is always in the `JSON` format.
:::


## **How to Solve a CAPTCHA**

1. Create a captcha task using the [createTask](api/methods/create-task.md) method.
2. Wait for a while. Depending on the system load, you will receive an answer a response after a time in the range from 300ms to 6s within 300 ms to 6 s.
3. Request the captcha solution with [getTaskResult](api/methods/get-task-result.md). If captchas are not solved yet, go to step #2. 

Additional method:

- [Check](api/methods/get-balance.md) account balance.

### Code examples

For your convenience, we provide ready-to-use libraries that allow you to quickly integrate the BroCapGPT API into your codebase. Recognize FunCaptcha at the lowest prices on the market!

|**Language**|**Link to the repository**|
| :- | :- | 
|С#|- [Nuget](https://www.nuget.org/packages/Zennolab.CapMonsterCloud.Client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-dotnet) |
|Python|- [PyPl](https://pypi.org/project/capmonstercloudclient/)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-python)|
|JS|- [Npm](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-js)|

