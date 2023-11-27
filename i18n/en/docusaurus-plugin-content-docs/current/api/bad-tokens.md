# How to report bad tokens

## **Why to report?**

We need reports so that we automatically analize data on the quality of token issued by our API. Reports are processed automatically, and the team takes actions to improve the quality of the tokens, whether it is updating the system for new tasks, improving grids, etc.

---

### **Method addresses:**


:::tip For captcha images reports
### [https://api.capmonster.cloud/reportIncorrectImageCaptcha](https://api.capmonster.cloud/reportIncorrectImageCaptcha)
:::

:::tip For token-captcha reports: recaptcha(2,3, enterprise), hcaptcha, geetest, funcaptcha, turnstile.
### [https://api.capmonster.cloud/reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha)

Also supported paths:

[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha), 
[https://api.capmonster.cloud/reportIncorrectHcaptcha](https://api.capmonster.cloud/reportIncorrectHcaptcha) - works the same as [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha)
:::


<!-- [https://api.capmonster.cloud/reportIncorrectImageCaptcha](https://api.capmonster.cloud/reportIncorrectImageCaptcha) - для жалоб на капчи-картинки -->

<!-- [https://api.capmonster.cloud/reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha) - для жалоб на токен-капчи: recaptcha(2,3, enterprise), hcaptcha, geetest, funcaptcha, turnstile.
Также поддерживаются пути:
[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha), [https://api.capmonster.cloud/reportIncorrectHcaptcha](https://api.capmonster.cloud/reportIncorrectHcaptcha) - работают аналогично [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha) -->

`Request format: JSON POST`

### **Request parameters**

| **Parameter** | **Type** | **Required** |                      **Value**                      |
| :------------------------: | :--------------: | :--------------------------------: | :------------------------------------------------------------------ |
|         clientKey         |      String      |                Yes                | Your unique account key |
|           taskId           |     Integer     |                Yes                |              Task ID              |

**Request example:**

```json
{

  "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
  "taskId": 7654321

}
```

**Response structure:**

| **Property** | **Type** |                                                                                                                 **Value**                                                                                                                 |
| :------------------------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          errorId          |     Integer     | Error ID.<br />**0** - no errors, no *errorCode* property;<br />**1** - error, information about it is in the *errorCode* property. |
|         errorCode         |      String      |                                                                  Error code. Check out [error types](./api-errors).                                                                  |
|           status           |      String      |                                           **success** - the report is accepted.<br />If the report is not accepted, then the field is missing, the reason is in the *errorCode*                           |

### **Response example**

<details>
  <summary>
    Response WITHOUT error
  </summary>

```json
{
  "errorId": 0,
  "status": "success"
}
```

</details>

<details>
  <summary>
    Response WITH an error
  </summary>

```json
{
  "errorId": 1,
  "errorCode": "ERROR_KEY_DOES_NOT_EXIST"
}
```

</details>
