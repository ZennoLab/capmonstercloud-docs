---
sidebar\_position: 0
# id: my-home-doc
# slug: /
---

# Getting Started

This section provides instructions on how to get started with the service and describes the main methods for submitting captchas and retrieving their solutions.

## Step 1. Create an account

Before you begin solving captchas, register on [CapMonster Cloud](https://capmonster.cloud/) using your preferred method. Then navigate to the [Dashboard](https://capmonster.cloud/Dashboard), where you'll find all the necessary information - current balance, API key, and statistics on successfully solved and unsolved tasks.

![](./images/dashboard.png)

## Step 2. Top up your balance

The service supports several payment methods for topping up your account.

![](./images/payment.png)

Now you can solve captchas automatically using the [browser extension](https://docs.capmonster.cloud/docs/extension) or by creating tasks through the API.

## Methods for submitting and retrieving results

:::info Endpoint URL
```http
https://api.capmonster.cloud
```
:::

**To solve a captcha, you need to**:

1. Create a captcha task using the [createTask](api/methods/create-task.md) method.
2. Wait for a short period. Depending on system load, you will receive a response in 300ms to 6s.
3. Request the captcha solution using the [getTaskResult](api/methods/get-task-result.md) method. If the captcha is not yet solved, go back to step 2.

Additional method:

* Retrieve your current account balance using [getBalance](api/methods/get-balance.md).

### Code Examples

For your convenience, we've created ready-made libraries for quick API integration with CapMonster.Cloud in your code. Solve various captcha types at the lowest prices on the market!

| **Language** | **Repository Link**                                                                                                                                    |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| C#           | - [Nuget](https://www.nuget.org/packages/Zennolab.CapMonsterCloud.Client)<br/>- [GitHub](https://github.com/ZennoLab/capmonstercloud-client-dotnet)    |
| Python       | - [PyPI](https://pypi.org/project/capmonstercloudclient/)<br/>- [GitHub](https://github.com/ZennoLab/capmonstercloud-client-python)                    |
| JS           | - [npm](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)<br/>- [GitHub](https://github.com/ZennoLab/capmonstercloud-client-js)      |
| Go           | - [Pkg.go.dev](https://pkg.go.dev/github.com/ZennoLab/capmonstercloud-client-go)<br/>- [GitHub](https://github.com/ZennoLab/capmonstercloud-client-go) |
| PHP          | - [Packagist](https://packagist.org/packages/zennolab/capmonstercloud.client)<br/>- [GitHub](https://github.com/ZennoLab/capmonstercloud-client-php)   |

## Captcha recognition methods

### 1. Token-based method

This is the basic captcha recognition approach, where you need to:

* Manually locate parameters on the page, such as:

  * `sitekey` (or `websiteKey`) — the unique identifier of the captcha;
  * `websiteURL` — the URL of the page displaying the captcha;
* Analyze the JavaScript code and network requests to obtain these details;
* Submit a task to CapMonster Cloud with the required parameters;
* Receive a **token** in response — a unique code confirming the captcha solution;
* Perform **autosubmit** — send the token back to the website to confirm the captcha has been passed.

> Suitable for developers ready to manually parse code and implement the submission logic.

---

### 2. Click-based method

This method simulates user actions (mouse movements, clicks, image selections). It is used via the official browser extension and does not require:

* Manual extraction of the `sitekey` or other parameters;
* Analysis of HTML or JavaScript;
* Implementation of the autosubmit mechanism.

This method is useful when:

* The site uses a non-standard captcha implementation;
* Parameters are encrypted or dynamically injected;
* The submit functionality is deeply hidden in scripts.

> Ideal for complex cases and users without programming experience.

---

Both methods utilize CapMonster Cloud for recognition but differ in setup complexity. Choose the method based on the specific site and the user's skill level.

You can also apply the click-based method in [ZennoPoster](https://zennolab.com/en/products/zennoposter/). Simply install our CapMonster Cloud extension (see [Browser Extension Installation Guide](extension/install-instruction.md)) in your Chromium project, enter your API key, and use the extension within your project just like in a regular Chrome browser.

## Examples of submitting tokens in ZennoPoster

### Using actions:

1. Integrate CapMonster Cloud into ProjectMaker ("Settings" → "Captchas" → select the CapMonster Cloud module, enter your API key).

2. Add the actions “Clear Cookies” → “Navigate to Page” (e.g., for reCaptcha v2 – [https://lessons.zennolab.com/captchas/recaptcha/v2\_simple.php?level=high](https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high)) → “Solve ReCaptcha”.

3. In the “Solve ReCaptcha” action properties, select the CapMonsterCloud.dll module, specify the captcha type (reCaptcha v2) and solving method (**On Page** or **Via Sitekey**):

![](./images/getting-started-1.png)

4. If choosing **Via Sitekey**, provide the captcha data (sitekey) and URL where the captcha is located:

![](./images/getting-started-2.png)

### reCaptcha v3

1. Add the actions “Clear Cookies” → “Navigate to Page” (e.g., [https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta](https://lessons.zennolab.com/captchas/recaptcha/v3.php?level=beta)) → “Solve ReCaptcha”.

2. In the “Solve ReCaptcha” action properties, select the CapMonsterCloud.dll module, specify the captcha type (reCaptcha v3), solving method (On Page or Via Sitekey), and also provide the Action and minScore:

![](./images/getting-started-3.png)

### Using HTTP requests

For some captcha types, there are no ready-made actions in ProjectMaker; in that case, you need to use the extension or manually compose HTTP requests for captcha solving.

1. “Variable Handling” ("Add Action" → "Data" → "Variable Handling"), in the properties select "Set Value" and enter your CapMonster Cloud API key:

![](./images/getting-started-5.png)

2. “Add Action” → “HTTP” → “POST Request” (include your proxy settings if necessary):

![](./images/getting-started-6.png)

3. Add “JSON/XML Processing” (“Add Action” → “Data” → “JSON/XML Processing”), choose “Parsing”, type “JSON”, and for the content to parse, right-click and select “Set Value From Variable”:

![](./images/getting-started-7.png)

4. Add a “Variable Handling” action, setting the value to `{-Json.taskId-}`:

![](./images/getting-started-8.png)

5. Form a new POST request to retrieve the result:

![](./images/getting-started-9.png)

6. Add “Parsing” in the “JSON/XML Processing” action:

![](./images/getting-started-10.png)

7. Finally, inject the token value into the target captcha form (after inspecting the page code) using the “Set Value” action, for example:

![](./images/getting-started-11.png)

## Video guide: solving captchas via API and ZennoPoster

This video demonstrates solving captchas with CapMonster Cloud using the API and [ZennoPoster](https://zennolab.com/en/products/zennoposter/), and offers practical tips for quick setup and application of the service. <video width="100%" height="400" controls> <source src="/videos/Capmonster Cloud-EN.mp4" type="video/mp4" />
Your browser does not support the video tag. </video>
