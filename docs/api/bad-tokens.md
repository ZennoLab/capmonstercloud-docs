# Как жаловаться на плохие токены

## **Зачем жаловаться?**

Жалобы нужны, чтобы мы автоматически анализировали данные о качестве токенов выдаваемых нашим API. Жалобы автоматически обрабатываются, и командой принимаются действия по улучшению качества токенов, будь то доработка системы под новые задания, улучшение сеток и тд.

---

### **Адреса методов**


:::tip Для жалоб на капчи-картинки
```http
https://api.capmonster.cloud/reportIncorrectImageCaptcha
```
:::

:::tip Для жалоб на токен-капчи: recaptcha(2,3, enterprise), hcaptcha, geetest, turnstile.
```http
https://api.capmonster.cloud/reportIncorrectTokenCaptcha
```

Также поддерживаются пути:

https://api.capmonster.cloud/reportIncorrectRecaptcha , 
https://api.capmonster.cloud/reportIncorrectHcaptcha работают аналогично https://api.capmonster.cloud/reportIncorrectTokenCaptcha
:::


<!-- [https://api.capmonster.cloud/reportIncorrectImageCaptcha](https://api.capmonster.cloud/reportIncorrectImageCaptcha) - для жалоб на капчи-картинки -->

<!-- [https://api.capmonster.cloud/reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha) - для жалоб на токен-капчи: recaptcha(2,3, enterprise), hcaptcha, geetest, funcaptcha, turnstile.
Также поддерживаются пути:
[https://api.capmonster.cloud/reportIncorrectRecaptcha](https://api.capmonster.cloud/reportIncorrectRecaptcha), [https://api.capmonster.cloud/reportIncorrectHcaptcha](https://api.capmonster.cloud/reportIncorrectHcaptcha) - работают аналогично [reportIncorrectTokenCaptcha](https://api.capmonster.cloud/reportIncorrectTokenCaptcha) -->

`Формат запроса: JSON POST`

### **Параметры запроса**

| **Параметр** | **Тип** | **Обязательный** |                      **Значение**                      |
| :------------------------: | :--------------: | :--------------------------------: | :------------------------------------------------------------------ |
|         clientKey         |      String      |                Да                | Уникальный ключ вашей учетной записи |
|           taskId           |     Integer     |                Да                |              Идентификатор задания              |

**Пример запроса:**

```json
{

  "clientKey":"67b6bcbb1a728ea8d563de6d169a2057",
  "taskId": 7654321

}
```

**Структура ответа:**

| **Свойство** | **Тип** | **Значение** |
| :------------------------: | :--------------: | :------------: |
|          errorId          |     Integer     | Идентификатор ошибки.<br />**0** - ошибок нет, свойство *errorCode* отсутствует<br />**1** - ошибка, информация о ней находится в свойстве *errorCode* |
|         errorCode         |      String      |                                                                  Код ошибки. См.[глоссарий ошибок](api-errors.md).                                                                  |
|           status           |      String      |                                           **success** - жалоба принята.<br />Если жалоба не принята, то поле отсутствует, причина в *errorCode*                                           |

### **Пример ответа**

<details>
  <summary>
    Ответ БЕЗ ошибки
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
    Ответ, содержащий ошибку
  </summary>

```json
{
  "errorId": 1,
  "errorCode": "ERROR_KEY_DOES_NOT_EXIST"
}
```

</details>
