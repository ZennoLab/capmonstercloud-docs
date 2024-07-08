---
sidebar_position: 6
---
# 设置报销阈值
## 如何设置低于此阈值的响应不会被扣费的置信度阈值
在*CapMonster.Cloud*中，验证码的接受取决于其复杂性。客户仅支付正确解决的验证码费用。

为了使 CapMonster.cloud 返回保证正确的结果，您可以在验证码识别请求中传递一个名为**recognizingThreshold**的参数，其取值范围在 0 到 100 之间。该参数允许您设置系统对验证码正确答案的置信度阈值，并确定低于该阈值时不会从余额中扣除费用。

---
### 示例
POST
``` http
https://api.capmonster.cloud/createTask
```
``` json
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
在这种情况下，如果参数等于 70，则只会返回我们系统确定超过 70% 确信度的答案，否则将返回错误：“**ERROR\_CAPTCHA\_UNSOLVABLE**”

另一种通过阈值传递的方式是仅使用字段来指定 ApiKey。您可以以以下格式添加阈值信息：`{apikey}__recognizingthreshold_{value}`

例如，“00f87cb0f01330d33709ce3339ad0c8c\_\_recognizingthreshold\_70”

您还可以使用以下格式输入带有模块名称的密钥：`{apikey}__module-name`。

密钥、置信度阈值和模块名称用下划线 “\_\_” 标示

示例：“00f87cb0f01330d33709ce3339ad0c8c\_\_solvemedia\_\_recognizingthreshold\_70”

:::note 注意
如果您无法设置响应的置信度阈值，请联系我们的[**支持团队**](https://helpdesk.zennolab.com/conversation/new)，我们将帮助您进行设置！
:::
