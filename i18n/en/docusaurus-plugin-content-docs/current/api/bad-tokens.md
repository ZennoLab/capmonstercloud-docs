# How to report bad tokens

File a complaint about incorrect tokens provided by CapMonster Cloud when they do not result in successful verification on the site or are frequently rejected.

Examples of situations when you should file a complaint:

- A user has received a solution token, but the site still does not pass it as a correct captcha solution.

- Some sites are successfully accepting tokens, while others are rejecting them.

- Rejection on sites that have previously successfully accepted similar tokens.


## Why to report?

We need reports so that we automatically analize data on the quality of token issued by our API. Reports are processed automatically, and the team takes actions to improve the quality of the tokens, whether it is updating the system for new tasks, improving grids, etc.

---

### Method addresses


:::tip For captcha images reports
```http
https://api.capmonster.cloud/reportIncorrectImageCaptcha
```
:::


:::tip For token-captcha reports: recaptcha(2,3, enterprise), geetest, turnstile.
```http
https://api.capmonster.cloud/reportIncorrectTokenCaptcha
```

Also supported paths:

[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha) - works the same as [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha)
:::



`Request format: JSON POST`

### Request parameters

| **Parameter** | **Type** | **Required** |                      **Value**                      |
| :------------------------: | :--------------: | :--------------------------------: | :------------------------------------------------------------------ |
|         clientKey         |      String      |                Yes                | Your unique account key |
|           taskId           |     Integer     |                Yes                |              Task ID              |

**Request example:**

```json
{

  "clientKey":"API_KEY",
  "taskId": 7654321

}
```

**Response structure:**

| **Property** | **Type** |                                                                                                                 **Value**                                                                                                                 |
| :------------------------: | :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          errorId          |     Integer     | Error ID.<br />**0** - no errors, no *errorCode* property;<br />**1** - error, information about it is in the *errorCode* property. |
|         errorCode         |      String      |                                                                  Error code. Check out [error types](./api-errors.md).                                                                  |
|           status           |      String      |                                           **success** - the report is accepted.<br />If the report is not accepted, then the field is missing, the reason is in the *errorCode*                           |

### Response example

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
