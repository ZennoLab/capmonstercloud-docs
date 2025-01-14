---
sidebar_position: 4
sidebar_label: getUserAgent 
---

# getUserAgent

## 描述

重要的是，在发送验证码识别请求时，请从Windows操作系统指定当前用户代理(UA)。
使用当前的Windows用户代理有助于提高验证码识别的准确性并减少错误数量。
:::info 方法地址
```http
https://capmonster.cloud/api/useragent/actual
```
:::

对于DataDome验证码类型，使用了不同的用户代理（userAgent）。您可以使用以下方法获取其当前值：
:::info 方法地址
```http
https://capmonster.cloud/api/useragent/actual/datadome
```
:::