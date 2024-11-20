---
sidebar_position: 3
sidebar_label: 扩展中的自动提交功能
---

# 扩展中的自动提交功能
在解决 CAPTCHA 后，常常需要执行特定的目标操作（如按下按钮）。 CapMonster Cloud 扩展允许您在 CAPTCHA 解决后选择一个元素进行自动点击。

## 选择自动提交元素的说明
1. 进入包含 CAPTCHA 的网站。 
2. 右键单击 CAPTCHA 解决后应点击的按钮（或其他元素）。 
3. 在弹出的菜单中，选择“CapMonster Cloud - automated captcha solver”->“Select element for submit”。  
![](./images/autosubmit/submit1.png) 

4. 之后，表单上会出现一条信息提示“Element for auto submit”，并附带一个“Remove”按钮，该按钮可以用来移除自动提交的元素。  
![](./images/autosubmit/submit2.png) 

5. 在该页面上，后续的 CAPTCHA 解决后，扩展将自动点击所选的提交元素。  
![](./images/autosubmit/submit3.gif)

## 自动提交的可用性
目前，自动提交功能只能在使用令牌解决 CAPTCHA 时，通过 **Google Chrome** 扩展使用。
自动提交适用于以下 CAPTCHA 类型：
- ReCaptcha,
- GeeTest,
- Turnstile.
