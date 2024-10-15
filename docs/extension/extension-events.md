---
sidebar_position: 6
---


# Получение событий из расширения

Получение событий из расширения помогает вашему коду быть в курсе происходящих событий (например, успешное решение капчи токеном или кликами) и реагировать на них соответствующим образом.

При решении различных типов капч расширение отправляет события на текущую активную страницу в глобальный объект window.

При необходимости, есть возможность подписаться на эти события через `window.addEventListener`

:::info
Никакие параметры в события не передаются
:::

### Пример
```js
window.addEventListener("onCMExtensionReady", () => {
  // DO SOMETHING
})
```

## Доступные события

### Глобальные
|**Событие**|**Описание**|
| :-: | :-: |
|`onCMExtensionReady`|Расширение полностью загрузилось и готово к работе|

### HCaptcha
|**Событие**|**Описание**|
| :-: | :-: |
|`onHCaptchaClickStart`|Начало решения hCaptcha кликами|
|`onHCaptchaClickBackendError`|Ошибка сервера при запросе результатов решения hCaptcha кликами|
|`onHCaptchaClickIncorrect`|Некорректное решение hCaptcha кликами|
|`onHCaptchaClickSuccess`|Успешное решение hCaptcha кликами|
|`onHCaptchaClick`|Нажатие на чекбокс hCaptcha при решении кликами|
|`onHCaptchaTokenStart`|Начало решения hCaptcha токеном|
|`onHCaptchaTokenSuccess`|Успешное решение hCaptcha токеном|
|`onHCaptchaTokenError`|Ошибка решения hCaptcha токеном|

### ReCaptcha
|**Событие**|**Описание**|
| :-: | :-: |
|`onReCaptchaClickStart`|Событие нажатия по изображению при решении ReCaptcha кликами|
|`onReCaptchaClick`|Событие нажатия кнопки submit или next при решении ReCaptcha кликами|
|`onReCaptchaClickIncorrect`|Некорректное решение ReCaptcha кликами|
|`onReCaptchaClickBackendError`|Ошибка решения ReCaptcha кликами|
|`onReCaptchaClickSuccess`|Успешное решение ReCaptcha кликами|
|`onRecaptchaTokenStart`|Начало решения ReCaptcha токеном|
|`onRecaptchaTokenSuccess`|Успешное решение ReCaptcha токеном|
|`onRecaptchaTokenError`|Ошибка решения ReCaptcha токеном|

### GeeTest
|**Событие**|**Описание**|
| :-: | :-: |
|`onGeeTestTokenStart`|Начало решения GeeTest токеном|
|`onGeeTestTokenSuccess`|Успешное решение GeeTest токеном|
|`onGeeTestTokenError`|Ошибка решения GeeTest токеном|

### Turnstile
|**Событие**|**Описание**|
| :-: | :-: |
|`onTurnstileTokenStart`|Начало решения Turnstile токеном|
|`onTurnstileTokenSuccess`|Успешное решение Turnstile токеном|
|`onTurnstileTokenError`|Ошибка решения Turnstile токеном|

### Image captcha
|**Событие**|**Описание**|
| :-: | :-: |
|`onImageTokenStart`|Начало решения Image капчи токеном|
|`onImageTokenSuccess`|Успешное решение Image капчи токеном|
|`onImageTokenError`|Ошибка решения Image капчи токеном|