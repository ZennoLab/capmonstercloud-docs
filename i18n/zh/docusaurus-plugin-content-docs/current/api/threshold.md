﻿---

sidebar_position: 6
sidebar_label: 设置文本验证码识别置信度阈值
title: "在验证码识别中设置扣费阈值"
description: "了解如何在 CapMonster Cloud 服务中设置系统对验证码答案的置信度阈值，低于该阈值时不会扣除余额。"
---

# 设置文本验证码识别置信度阈值

## 如何设置置信度阈值

在我们的服务中，验证码识别成功的概率取决于其难度。只有成功识别的验证码才会从账户余额中扣费。如果系统对答案的置信度低于用户设定的阈值，则不会扣除费用。

:::warning **注意！**
参数 **recognizingThreshold** 仅适用于 **ImageToTextTask**（文本验证码）。对于其他类型的验证码（如 ReCaptcha、Turnstile 等），该参数不起作用，也不会影响结果。
:::

为了保证 CapMonster Cloud 返回可靠结果，您可以在发送验证码识别请求时传递参数 **recognizingThreshold**，取值范围为 **0** 到 **100**。该参数用于设置系统对答案的置信度阈值，低于该值时余额不会扣除。

---

### 示例

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

在此示例中，如果参数设为 **70**，系统仅返回置信度高于 70% 的答案，其余任务将返回错误：“**ERROR_CAPTCHA_UNSOLVABLE**”。

另一种传递阈值的方法是仅使用 ApiKey 字段，可按以下格式附加阈值信息："`{apikey}__recognizingthreshold_{value}`"

例如：`API_KEY__recognizingthreshold_70`

您也可以同时指定模块名称，格式如下："`{apikey}__模块名称`"

API 密钥、置信度阈值和模块名称使用双下划线 “__” 分隔

示例：`API_KEY__solvemedia__recognizingthreshold_70`
