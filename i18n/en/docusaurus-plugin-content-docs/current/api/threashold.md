﻿---
sidebar_position: 6
title: "Setting the threshold for charging money during captcha recognition"
description: "Learn how to set the Capmonster Cloud captcha recognition and traversal service to a threshold of system confidence in the answer, below which money is not deducted."
---

# Setting a write-off threshold

## How to set confidence threshold in response below which money won't be charged

In *CapMonster.Cloud* captchas acceptance depends on its complexity. Clients pay only for correctly solved captchas.

In order for CapMonster.cloud to return a guaranteed correct result, you can pass along with the captcha recognition request also a **recognizingThreshold** parameter with a value between 0 and 100. This parameter allows you to set the threshold of the system's confidence in the correct answer for the captcha and determines the minimum value below which money will not be deducted from the balance. 

---

### Example

POST
```http
https://api.capmonster.cloud/createTask
 ```

```json
{

  "task": { 
    ...
    "recognizingThreshold" : 70
  },
  "clientKey":"API_KEY",
  "softId" : 345

}
```
---
In this case, if the parameter is equal to 70, then only answers in which our system is more than 70% sure will be returned, otherwise will be returned error: “**ERROR_CAPTCHA_UNSOLVABLE**”

Another way to pass a threshold is to use only the field to specify the ApiKey. You can add threshold information in the following format: `{apikey}__recognizingthreshold_{value}`

For example, “API_KEY\_\_recognizingthreshold\_70”

You can also enter the name of the module with the key in the following format: `{apikey}__module-name`.

The key, the confidence threshold and the name of the module are indicated with the underscore “\_\_”

Example: “API_KEY\_\_solvemedia\_\_recognizingthreshold\_70”

:::note
If you are unable to set the response confidence threshold, please write to our **[support team](https://helpdesk.zennolab.com/conversation/new)**, we will help you set it up!
:::

