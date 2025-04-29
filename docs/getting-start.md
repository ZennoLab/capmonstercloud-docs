---
sidebar_position: 0
# id: my-home-doc
# slug: /
---

# Начало работы

В данном разделе вы можете изучить способы отправки капч в BroCapGPT и методы распознавания.

:::info Адрес метода
```http
https://api.brocapgpt.com
```
Формат запроса: `JSON POST`.
Формат ответа всегда в формате `JSON`.
:::


**Чтобы решить капчу, вам нужно**:

1. Создать задачу капчи методом [createTask](api/methods/create-task.md).
2. Подождать некоторое время. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 300мс до 6с.
3. Запросить решение капчи методом [getTaskResult](api/methods/get-task-result.md). Если капча еще не была решена, перейти к п.2.

Дополнительный метод:

- [Получить](api/methods/get-balance.md) актуальный баланс аккаунта.

### Примеры кода

Для вашего удобства мы создали готовые библиотеки для быстрой интеграции API BroCapGPT в свой код. Распознавайте FunCaptcha по самым низким ценам на рынке!

|**Язык**|**Ссылка на репозиторий**|
| :- | :- | 
|С#|- [Nuget](https://www.nuget.org/packages/Zennolab.CapMonsterCloud.Client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-dotnet) |
|Python|- [PyPl](https://pypi.org/project/capmonstercloudclient/)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-python)|
|JS|- [Npm](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)<br /> - [Github](https://github.com/ZennoLab/capmonstercloud-client-js)|

