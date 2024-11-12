---
sidebar_position: 8
---


# 已知问题


<details>
        <summary>store.steampowered.com</summary>

我们的服务仅能解决英文验证码；在该网站上，验证码语言的确定不是来自系统设置，而是来自网站上选择的语言，因此为了正确解决问题，请务必选择英文。

</details>

<details>
        <summary>错误 'Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'click')'</summary>

如果在通过 CapMonster Cloud 扩展使用点击方法 (ComplexImageTask) 解验证码时出现错误 'Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'click')'，如截图所示，建议在扩展中设置 'Delay between click' 值 —— 这可能有助于解决问题。
![](./images/known-issues/Uncaught.png)
</details>
