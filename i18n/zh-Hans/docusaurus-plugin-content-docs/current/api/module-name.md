---
sidebar_position: 5
---
# 传递模块名称
在处理特定服务（例如 Google、SolveMedia、Whatsapp 等）时，将模块名称传递给识别特定验证码可能会很有用。这将提高识别速度和质量，并减少错误的可能性。
## 如何仅使用 ApiKey 字段将模块名称传递给 CapMonster Cloud
为了向 CapMonsterCloud 发送有关将识别验证码的模块的信息，只使用指定 ApiKey 的字段，您可以按以下格式将模块名称添加到密钥中： `{apikey}__moduleName`

例如，“00f87cb0f01330d33709ce3339ad0c8c\_\_solvemedia”（**重要**，用**双下划线**分隔 API 密钥和模块名称）

可用模块名称列表：
<table>
	<tbody>
		<tr>
			<td align="center">amazon</td>
			<td align="center">![](images\module-name\amazon.png)</td>
		</tr>
		<tr>
			<td align="center">whatsapp</td>
			<td align="center">![](images\module-name\whatsapp.png)</td>
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
			<td align="center">okrus</td>
			<td align="center">![](images\module-name\okrus.png)</td>
		</tr>
		<tr>
			<td align="center">okeng</td>
			<td align="center">![](images\module-name\okeng.png)</td>
		</tr>
		<tr>
			<td align="center">ramblerrus</td>
			<td align="center">![](images\module-name\rambler.png)</td>
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
			<td align="center">yandex</td>
			<td align="center">![](images\module-name\yandex.png)</td>
		</tr>
		<tr>
			<td align="center">yandexnew (两个单词)</td>
			<td rowspan="2" align="center">![](images\module-name\yandexwave.png)</td>
		</tr>
		<tr>
			<td align="center">yandexwave</td>
		</tr>
		<tr>
            <td align="center">partiallyblur</td>
			<td align="center">![](images\module-name\partiallyblur.png)</td>
        </tr>
		<tr>
			<td align="center">universal (所有其他文本验证码类型)</td>
			<td align="center">![](images\module-name\universal.png)</td>
		</tr>
	</tbody>
</table>

:::info 提示
如果您无法将验证码发送到特定模块，请联系我们的[支持团队](https://helpdesk.zennolab.com/conversation/new)，我们会帮助您！
:::
