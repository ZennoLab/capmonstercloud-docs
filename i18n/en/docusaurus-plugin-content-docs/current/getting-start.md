---
sidebar_position: 0
sidebar_label: Getting Started
---

# Getting started

This section contains instructions on how to get started with the service, as well as describes the main methods for sending captchas and recognizing them.

## Step 1. Create an account

Before solving captchas, register on [CapMonster Cloud](https://capmonster.cloud/) in a way convenient for you. Then go to your [Dashboard](https://capmonster.cloud/Dashboard), where you will find all the necessary information — current balance, API key, and statistics on solved and unsolved tasks.

![](./images/dashboard.png)

## Step 2. Top up your balance

The service supports several payment methods.

![](./images/payment.png)

Now you can solve captchas automatically using the [browser extension](https://docs.capmonster.cloud/docs/extension) or by creating tasks via API.

## Methods of sending and receiving results

:::info Method address
```http
https://api.capmonster.cloud
```
Request format: `JSON POST`.
Response is always in the `JSON` format.
:::

**To solve a captcha, you need to:**

1. Create a captcha task using the [createTask](api/methods/create-task.md) method.  
2. Wait some time. Depending on the system load, the response may come in 300 ms to 6 seconds.  
3. Request the captcha solution with the [getTaskResult](api/methods/get-task-result.md) method. If the captcha is not solved yet, go back to step 2.

Additional method:

- [Get](api/methods/get-balance.md) the current account balance.

### Code examples

For your convenience, we have created ready-made libraries for quick integration of the CapMonster.Cloud API into your code. Solve various captcha types at the lowest prices on the market!

|**Language**|**Link to the repository**|
| :- | :- | 
|С#|- [Nuget](https://www.nuget.org/packages/Zennolab.CapMonsterCloud.Client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-dotnet) |
|Python|- [PyPl](https://pypi.org/project/capmonstercloudclient/)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-python)|
|JS|- [Npm](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-js)|
|GO|- [Pkg.go.dev](https://pkg.go.dev/github.com/ZennoLab/capmonstercloud-client-go)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-go)|
|PHP|- [Packagist](https://packagist.org/packages/zennolab/capmonstercloud.client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-php)|

## Captcha recognition methods

### 1. Via token

This is the basic way to recognize captchas, which requires:

- Manually find parameters on the page such as:  
  - `sitekey` (or `websiteKey`) — unique captcha identifier;  
  - `websiteURL` — the page URL where the captcha is displayed;  
- Analyze JavaScript code and network requests to obtain these parameters;  
- Send a task to CapMonster Cloud with the necessary parameters;  
- Receive a **token** — a unique code confirming the captcha solution;  
- Perform **autosubmit** — send the token back to the site to confirm captcha completion.

> Suitable for developers ready to manually analyze code and build the logic for sending the solution.

---

### 2. Via clicks

This method simulates user actions (mouse movements, clicks, image selections). It is used through the official browser extension and does not require:

- Manual searching for `sitekey` or other parameters;  
- Analyzing HTML or JavaScript;  
- Implementing autosubmit logic.

This method is useful if:

- The site uses a non-standard captcha implementation;  
- Parameters are encrypted or dynamically inserted;  
- The submit function is deeply hidden in scripts.

> Optimal for complex cases and users without programming experience.

---

Both methods use CapMonster Cloud for recognition but differ in setup complexity.  
The choice depends on the specific site and the user’s skill level.

There is also a great option to apply the clicks method in [ZennoPoster](https://zennolab.com/en/products/zennoposter/). Just install our CapMonster Cloud extension (see section [CapMonster Cloud Extension Installation in ProjectMaker Browser](extension/install-instruction.md)) into your Chromium-based project, enter your API key, and use the extension similarly to how you use Chrome.

## Token submission examples in ZennoPoster

Using actions:

1. Integrate CapMonster Cloud in ProjectMaker (“Settings” → “Captchas” → Select CapMonster Cloud module, enter your API key);

2. Add actions “Clear Cookies” → “Navigate to page” (for example, for reCaptcha v.2 — [https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)) → “Recognize ReCaptcha”;

3. In the “Recognize ReCaptcha” action properties, select the CapMonsterCloud.dll module, specify captcha type (reCaptcha v.2) and solving method (**In tab** or **Via sitekey**):

![](./images/getting-started-1.png)

4. If choosing **Via sitekey**, specify captcha data (`sitekey`) and URL (the page where the captcha must be solved):

![](./images/getting-started-2.png)

### reCaptcha v.3

1. Add actions “Clear Cookies” → “Navigate to page” (for example, [https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta](https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta)) → “Recognize ReCaptcha”;

2. In the “Recognize ReCaptcha” properties, select CapMonsterCloud.dll module, specify captcha type (reCaptcha v.3), method (In tab or Via Sitekey), and also specify `Action` and `minScore`:

![](./images/getting-started-3.png)

<!-- ### hCaptcha

1. Add the action “Recognize hCaptcha” where the captcha page navigation is done;

2. In the action properties select method (In tab or Via Sitekey). When choosing Via Sitekey, specify the sitekey and URL with the captcha:

![](./images/getting-started-4.png) -->

### Via HTTP requests

For some captcha types, ready-made actions in ProjectMaker are missing, so you need to use the extension or compose requests manually.

1. Add “Variable Processing” action (Add Action → Data → Variable Processing), select “Set Value” and enter your CapMonster Cloud API key:

![](./images/getting-started-5.png)

2. Add “HTTP” → “POST Request” action (add proxy info if necessary):

![](./images/getting-started-6.png)

3. Add “JSON/XML Processing” action (Add Action → Data → JSON/XML Processing), choose “Parsing”, type “JSON”, and set the text to parse by selecting “Set Value from Variable”:

![](./images/getting-started-7.png)

4. Add “Variable Processing” action and set the value to `{-Json.taskId-}`:

![](./images/getting-started-8.png)

5. Create a new POST request for retrieving the result:

![](./images/getting-started-9.png)

6. Add “Parsing” in “JSON/XML Processing” action:

![](./images/getting-started-10.png)

7. Insert the token value into the required captcha form (after analyzing page code) using the “Set Value” action:

![](./images/getting-started-11.png)

