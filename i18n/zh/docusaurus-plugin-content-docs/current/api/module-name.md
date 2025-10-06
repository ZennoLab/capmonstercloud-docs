---
sidebar_position: 5
sidebar_label: 模块名称传递
title: "为验证码识别传递模块名称"
description: "在处理特定服务（如 Google、SolveMedia、Whatsapp 等）的验证码时，传递模块名称可提高识别速度和准确性，并降低错误发生率。"
---

# 模块名称传递

在自动验证码识别中，处理精度和速度至关重要。不同服务使用各自的验证码类型，通用方案并不总能同样高效地处理。例如，来自 **Google**、**SolveMedia**、**Whatsapp** 或 **Yandex** 的验证码可能具有特殊特性，导致标准识别模块运行较慢或出现错误。

为了提高效率并降低识别错误率，CapMonster Cloud 允许指定专用模块处理您的验证码。系统将使用针对特定服务优化的识别算法，而不是通用方法。

## 如何在仅使用 ApiKey 字段的情况下传递模块名称

要在 CapMonster Cloud 中指定识别模块，可在 API 密钥后附加模块名称，格式如下：`{apikey}__模块名称`

例如：`00f87cb0f01330d33709ce3339ad0c8c__solvemedia`
(**重要**：API 密钥和模块名称需用 **双下划线** 分隔)

可用模块名称列表如下：

<table>
    <tbody>
        <tr>
            <td align="center">amazon</td>
            <td align="center">![](images\module-name\amazon.png)</td>
        </tr>
        <tr>
            <td align="center">apple</td>
            <td align="center">![](images\module-name\apple.png)</td>
        </tr>
        <tr>
            <td align="center">botdetect</td>
            <td align="center">![](images\module-name\botdetect.png)</td>
        </tr>                
        <tr>
            <td align="center">facebook</td>
            <td align="center">![](images\module-name\facebook.png)</td>
        </tr>
        <tr>
            <td align="center">gmx</td>
            <td align="center">![](images\module-name\gmx.png)</td>
        </tr>
        <tr>
            <td align="center">google</td>
            <td align="center">![](images\module-name\google.png)</td>
        </tr>
        <tr>
            <td align="center">hotmail</td>
            <td align="center">![](images\module-name\hotmail.png)</td>
        </tr>
        <tr>
            <td align="center">mailru</td>
            <td align="center">![](images\module-name\mailru.png)</td>
        </tr>
        <tr>
            <td align="center">okeng</td>
            <td align="center">![](images\module-name\okeng.png)</td>
        </tr>
        <tr>
            <td align="center">okrus</td>
            <td align="center">![](images\module-name\okrus.png)</td>
        </tr>
        <tr>
            <td align="center">partiallyblur</td>
            <td align="center">![](images\module-name\partiallyblur.png)</td>
        </tr>
        <tr>
            <td align="center">ramblerrus</td>
            <td align="center">![](images\module-name\rambler.png)</td>
        </tr>
        <tr>
            <td align="center">ramblerrusnew</td>
            <td align="center">![](images\module-name\ramblerrusnew.png)</td>
        </tr>
        <tr>
            <td align="center">solvemedia</td>
            <td align="center">![](images\module-name\solvemedia.png)</td>
        </tr>
        <tr>
            <td align="center">steam</td>
            <td align="center">![](images\module-name\steam.png)</td>
        </tr>
        <tr>
            <td align="center">vk</td>
            <td align="center">![](images\module-name\vk.png)</td>
        </tr>
        <tr>
            <td align="center">whatsapp</td>
            <td align="center">![](images\module-name\whatsapp.png)</td>
        </tr>
        <tr>
            <td align="center">wikimedia_paddle_ensemble</td>
            <td align="center">![](images\module-name\wikimedia.png)</td>
        </tr>
        <tr>
            <td align="center">yandex</td>
            <td align="center">![](images\module-name\yandex.png)</td>
        </tr>        
        <tr>
            <td align="center">yandexnew (双词验证码)</td>
            <td rowspan="2" align="center">![](images\module-name\yandexwave.png)</td>
        </tr>
        <tr>
            <td align="center">yandexwave</td>
        </tr>        
        <tr>
            <td align="center">captcha_math</td>
            <td align="center">![](images\module-name\captcha_math.png)</td>
        </tr>
        <tr>
            <td align="center">universal（其他所有文本验证码）</td>
            <td align="center">![](images\module-name\universal.png)</td>
        </tr>
    </tbody>
</table>

:::info 提示
如果无法将验证码发送到特定模块，请通过 [客服支持](https://helpdesk.zennolab.com/conversation/new) 联系我们，我们将协助您完成设置！
:::
