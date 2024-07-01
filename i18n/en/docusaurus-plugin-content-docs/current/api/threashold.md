---
sidebar_position: 6
---

# Setting a write-off threshold

## How to set confidence threshold in response below which money won't be charged

In *BroCapGPT* captchas acceptance depends on its complexity. Clients pay only for correctly solved captchas.

In order to have a guaranteed correct result, you can also pass the parameter  **recognizingThreshold** with a value from 0 to 100 along with the captcha recognition request.

---

### Example

POST
```http
https://api.brocapgpt/createTask
 ```

```json
{

  "task": { 
    ...
    "recognizingThreshold" : 70
  },
  "clientKey":"234234234234234234234234",
  "softId" : 345

}
```
---
In this case, if the parameter is equal to 70, then only answers in which our system is more than 70% sure will be returned, otherwise will be returned error: “**ERROR_CAPTCHA_UNSOLVABLE**”

Another way to pass a threshold is to use only the field to specify the ApiKey. You can add threshold information in the following format: `{apikey}__recognizingthreshold_{value}`

For example, “00f87cb0f01330d33709ce3339ad0c8c\_\_recognizingthreshold\_70”

You can also enter the name of the module with the key in the following format: `{apikey}__module-name`.

The key, the confidence threshold and the name of the module are indicated with the underscore “\_\_”

Example: “00f87cb0f01330d33709ce3339ad0c8c\_\_solvemedia\_\_recognizingthreshold\_70”

:::note
If you are unable to set the response confidence threshold, please write to our **[support team](https://helpdesk.zennolab.com/conversation/new)**, we will help you set it up!
:::

