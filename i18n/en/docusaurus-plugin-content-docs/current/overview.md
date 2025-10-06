---
sidebar_position: 0
id: overview
title: What is CapMonster Cloud
sidebar_label: What is CapMonster Cloud
---

# What is CapMonster Cloud

**Welcome to the CapMonster Cloud documentation!** 
In this section, you will learn about the main features of CapMonster Cloud, its advantages, and how to quickly get started with the service.

CapMonster Cloud is a cloud service for automatic recognition of various types of captchas — from the most common to the more rare ones. Unlike solutions where you have to solve captchas manually, the service uses artificial intelligence algorithms. Thanks to this, captchas are solved with high accuracy, within seconds, and the risk of errors is minimized.

CapMonster Cloud helps you work with websites faster and more efficiently. The service takes over the routine tasks of solving captchas, so you can focus on growing your projects and business processes.

## Advantages of the service
---
**High speed — most solutions arrive in 1–5 seconds**

CapMonster Cloud is optimized for maximum processing speed. On average, solving a captcha takes just a few seconds, ensuring stable automation processes without delays or slowdowns. Even under heavy load, the service distributes tasks across servers so that waiting time remains minimal.

**Wide coverage — support for popular and rare captcha types**

CapMonster Cloud handles all sorts of captchas: from popular ones like [reCAPTCHA v2](./captchas/no-captcha-task)[/v3/](./captchas/recaptcha-v3-task)[v2 Enterprise](./captchas/recaptcha-v2-enterprise-task) and [Cloudflare Turnstile](./captchas/turnstile-task) to rarer ones like [Yidun](./captchas/yidun-task) or [GeeTest CAPTCHA](./captchas/geetest-task). You don’t need to look for separate solutions for each website — one service covers nearly all cases, saving you time and making automation much more convenient.

**Cloud-based service — no software installation required**

All you need is internet access and your API key. This means you can quickly integrate the service into your projects, run tasks from any device, and focus on automation without wasting time installing and configuring local software.

**Low prices and pay only for successful solutions**  

With CapMonster Cloud, you only pay for captchas that were successfully solved. No hidden fees or charges for failed attempts — you only pay for actual results.

**Built-in proxies**  

You don’t need to worry about buying proxy servers or extra configuration! You can start working with the service right away — built-in tools ensure stable captcha solving. At the same time, if you need to use your own proxies, the CapMonster Cloud API makes it easy to connect them. This is especially useful, for example, when your proxies are required for solving [DataDome](./captchas/datadome) or Cloudflare Challenge (getting [cf_clearance](./captchas/turnstile-task#option-3-challenge-cf_clearance)), or when built-in proxies are not suitable for a website or temporary service issues occur.

**Simple API — JSON requests and responses, easy to integrate with any language/framework**

The CapMonster Cloud API is designed to be simple and intuitive: all requests and responses come in JSON format. The service easily integrates with any programming language or framework — whether Node.js, Python, C#, and others. The straightforward request structure allows you to quickly create tasks, get results, and handle errors without unnecessary complexity.
  
**Browser extension for captcha solving and parameter mapping**

For convenient website interaction, CapMonster Cloud provides browser extensions (for Chrome and Firefox). They help automatically solve captchas, collect necessary parameters like `websitekey`, `action`, and others, as well as test the service directly in the browser.
  
**Official SDK libraries for maximum convenience**

CapMonster Cloud offers official SDKs for popular programming languages. They already include functions for task creation, result retrieval, and error handling, so you don’t need to spend much time writing code.

**Reliability — service runs 24/7 with distributed servers**

CapMonster Cloud runs on distributed infrastructure and is available 24/7. This ensures the service remains stable and reliable even under heavy load, processing a large number of captchas simultaneously without downtime or delays.

## Who benefits and when
---
**Automation developers**

Automate processes where interaction with web forms, logins, and registrations is required, saving time and team resources.

**QA engineers (for testing various services and websites)**

Speed up testing of your own or third-party websites, automatically solve captchas, and reduce manual workload.

**For ethical information gathering**

Collect the necessary data from websites legally and ethically by automatically bypassing captchas.

**For people who have difficulty solving captchas manually**

CapMonster Cloud helps those who struggle to solve captchas manually — for example, people with vision or motor limitations. The service automatically recognizes captchas and provides a solution. Continue working with websites easily and without unnecessary effort!

**Businesses — companies that need large-scale website interaction**

Optimize large-scale website operations: process tasks quickly, save time and resources, and get reliable captcha solutions without delays or errors.

## How it works (using the API)
--- 
1. You create a task and send it to the CapMonster Cloud API. In the task, you specify the captcha `type`, `URL`, `websitekey`, and other parameters.

2. The service automatically selects the optimal solving strategy: built-in proxies, recognition algorithms, etc.

3. Once the solution is ready, the API returns the result — usually a token (a string that you need to insert into a form field or send in a request) or cookies that also need to be set in the browser.

4. You use the token on the target website (insert it into a form, data, XHR, etc.).

If necessary, you can also request task status and get information about your balance. 

## Links
---
Useful links for quick start:

[*List of supported captchas*](https://docs.capmonster.cloud/docs/captchas)

[*How to register and get an API key*](https://docs.capmonster.cloud/docs/getting-start)

[*API overview*](https://docs.capmonster.cloud/docs/category/api)

[*How to install and use the browser extension*](https://docs.capmonster.cloud/docs/extension)

[*Libraries for easy integration into your code*](https://docs.capmonster.cloud/docs/getting-start/#code-examples)
