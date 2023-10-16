---
sidebar_position: 3
sidebar_label: FunCaptchaTask
---

# FunCaptchaTask : решение каптчи FunCaptcha
Этот тип задач решает FunCaptcha. Ваше приложение присылает адрес страницы, публичный ключ FunCaptcha и опционально прокси.

Результатом решения задачи является токен для сабмита формы.

:::warning **Внимание!**
Если прокси с авторизацией по IP, то необходимо обязательно добавить **116.203.55.208** в белый список.
:::

## **Структура объекта**

|**Параметр**|**Тип**|**Обязательный**|**Значение**|
| :- | :- | :- | :- |
|type|String|да|**FunCaptchaTaskProxyless** или **FunCaptchaTask (При использовании прокси)**|
|websiteURL|String|да|Адрес страницы на которой решается каптча|
|funcaptchaApiJSSubdomain|String|нет|Специальный сервисный URL, с которого должен загружаться JS виджет каптчи. Его можно найти в элементе с именем fc-token - значение после surl. Оно требуется, если используется домен отличный от client-api.arkoselabs.com|
|websitePublicKey|String|да|Ключ-идентификатор FunCaptcha на целевой странице. Его можно найти в блоке `<div id="funcaptcha" data-pkey="ВОТ\_ЗДЕСЬ"></div>` или в значении элементов с именем fc-token и verification-token, после параметра pk=|
|data|String|нет|Дополнительный параметр, который может требоваться для некоторых решений FunCaptcha.<br />Используйте это свойство для передачи параметра blob в виде массива, сведенного в строку. Пример:<br />*{"\blob\":\"HERE_COMES_THE_blob_VALUE\"}*|
|proxyType|String|да (При использовании **FunCaptchaTask**) |**http** - обычный http/https прокси<br/>**https** - попробуйте эту опцию только если "http" не работает (требуется для некоторых кастомных прокси)<br />**socks4** - socks4 прокси<br />**socks5** - socks5 прокси|
|proxyAddress|String|да (При использовании **FunCaptchaTask**)|<p>IP адрес прокси IPv4/IPv6. Не допускается:</p><p>- использование имен хостов</p><p>- использование прозрачных прокси (там где можно видеть IP клиента)</p><p>- использование прокси на локальных машинах</p>|
|proxyPort|Integer|да (При использовании **FunCaptchaTask**)|Порт прокси|
|proxyLogin|String|нет|Логин прокси-сервера|
|proxyPassword|String|нет|Пароль прокси-сервера|
|userAgent|String|да|User-Agent браузера, используемый в эмуляции. |
|cookies|String|нет|<p>Дополнительные cookies которые мы должны использовать во время взаимодействия с целевой страницей.</p><p>**Формат**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Пример запроса**

:::info Метод
<https://api.capmonster.cloud/createTask>
:::

### FunCaptchaTask (С использованием прокси)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"FunCaptchaTask",
    "websiteURL":"http://mywebsite.com/",
    "funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginHere",
    "proxyPassword":"proxyPasswordHere",
    "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36"
  }
}
```
### FunCaptchaTaskProxyless (Без использования прокси)
```json
{
  "clientKey":"dce6bcbb1a728ea8d871de6d169a2057",
  "task": {
    "type":"FunCaptchaTaskProxyless",
    "websiteURL":"http://mywebsite.com/",
    "funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC"
  }
}
```

**Пример ответа**

```json
{
  "errorId":0,
  "taskId":407533072

}
```

## **Получение результата**

:::info Метод
<https://api.capmonster.cloud/getTaskResult>
:::

Используйте метод [getTaskResult](https://capmonster.atlassian.net/wiki/spaces/APIS/pages/557078/getTaskResult) чтобы получить решение FunCaptcha. В зависимости от загрузки системы вы получите ответ через время в диапазоне от 10 с до 30 с.

|**Свойство**|**Тип**|**Описание**|
| :- | :- | :- |
|token|String|Токен FunCaptcha, который необходимо подставить в форму.|

**Пример:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
```

## Поддерживаемые типы заданий

|**Тип**|**Описание**|
| :- | :- |
|![](Funcaptcha-task-types/matching-reflection.png)|Выберите изображение с соответствующим отражением|
|![](Funcaptcha-task-types/different-object-silhouette.png)|Выберите тень с другим силуэтом объекта|
|![](Funcaptcha-task-types/two-identical-objects.gif)|Выберите квадрат, на котором изображены два одинаковых объекта|
|![](Funcaptcha-task-types/dice-same-icon.gif)|Выберите пару кубиков с одинаковыми значками сверху|
|![](Funcaptcha-task-types/dice-to-4.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 4|
|![](Funcaptcha-task-types/dice-5.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 5|
|![](Funcaptcha-task-types/dice-6.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 6|
|![](Funcaptcha-task-types/dice-7.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 7|
|![](Funcaptcha-task-types/dice-8.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 8|
|![](Funcaptcha-task-types/dice-10.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 10|
|![](Funcaptcha-task-types/dice-14.jpg)|Выберите пару кубиков, сумма верхних сторон которых равна 14|
|![](Funcaptcha-task-types/darts.jpg)|Выберите изображение, где сумма дартс равна 8/10/12/14|
|![](Funcaptcha-task-types/animals-directions.jpg)|Выберите изображение, на котором все животные идут по направлению стрелки|
|![](Funcaptcha-task-types/shadows-icons-top.jpg)|Выберите тень, соответствующую значкам в верхней части изображения|
|![](Funcaptcha-task-types/matching-cards.jpg)|Выберите совпадающие карты|
|![](Funcaptcha-task-types/mouse-cheese.jpg)|Выберите мышь, которая может добраться до всех кусочков сыра в лабиринте|
|![](Funcaptcha-task-types/animal-wrong-head.jpg)|Выберите животное с неправильной головой|
|![](Funcaptcha-task-types/penguin.jpg)|Выберите пингвина|
|![](Funcaptcha-task-types/rotate-animal.jpg)|Используйте стрелки, чтобы повернуть животное лицом в направлении руки|
|![](Funcaptcha-task-types/image-correct.gif)|Выберите изображение, которое расположено правильно|
|![](Funcaptcha-task-types/spiral-galaxy.gif)|Выберите спиральную галактику|
|![](Funcaptcha-task-types/one-rope.jpg)|Выберите изображение только с одной веревкой|
|![](Funcaptcha-task-types/split-in-half.png)|Выберите куб со значками, разделенными пополам|
|![](Funcaptcha-task-types/puzzle-wrong-pieces.png)|Выберите пазл с неправильными частями|
|![](Funcaptcha-task-types/amount-animals.jpg)|Выберите изображение, где цифра соответствует количеству животных|
|![](Funcaptcha-task-types/mouse-cheese-2.jpg)|Выберите мышь, которая не сможет добраться до сыра|
|![](Funcaptcha-task-types/total-fingers-3.jpg)|Выберите изображение, на котором общее количество пальцев равно 3|
|![](Funcaptcha-task-types/wrong-shadow.jpg)|Выберите неправильную тень|
|![](Funcaptcha-task-types/square-three-objects.jpg)|Выберите один квадрат, на котором изображены три одинаковых объекта|
|![](Funcaptcha-task-types/move-person-cross.png)|Используйте стрелки, чтобы переместить человека в место, указанное крестиком|
|![](Funcaptcha-task-types/move-person-circle.jpg)|Используйте стрелки, чтобы переместить человека к значку, обозначенному цветным кружком|
|![](Funcaptcha-task-types/rotate-animal-2.png)|Используйте стрелки, чтобы повернуть животное с таким же значком по направлению руки|
|![](Funcaptcha-task-types/number-objects.png)|Используйте стрелки, чтобы изменить количество объектов, пока оно не совпадет с левым изображением|
|![](Funcaptcha-task-types/dice-matches.png)|Меняйте кубики, пока количество не совпадет с числом на изображении слева|
|![](Funcaptcha-task-types/move-train.png)|Используйте стрелки, чтобы переместить транспорт к координатам, указанным на левом изображении|
|![](Funcaptcha-task-types/number-rocks.png)|Выберите изображение, на котором количество камней совпадает с числом слева|
|![](Funcaptcha-task-types/koala.jpg)|Выберите коалу|
|![](Funcaptcha-task-types/ladybug.gif)|Выберите божью коровку|
|![](Funcaptcha-task-types/pig.jpg)|Выберите свинью|
|![](Funcaptcha-task-types/zebra.jpg)|Выберите зебру|
|![](Funcaptcha-task-types/shark.jpg)|Выберите акулу|
|![](Funcaptcha-task-types/dinosaur.jpg)|Выберите динозавра|
|![](Funcaptcha-task-types/duck.jpg)|Выберите утку|
|![](Funcaptcha-task-types/chicken.jpg)|Выберите курицу|
|![](Funcaptcha-task-types/rhino.jpg)|Выберите носорога|
|![](Funcaptcha-task-types/dolphin.jpg)|Выберите дельфина|
|![](Funcaptcha-task-types/grapes.jpg)|Выберите виноград|
|![](Funcaptcha-task-types/goat.jpg)|Выберите козу|
|![](Funcaptcha-task-types/elephant.jpg)|Выберите слона|
|![](Funcaptcha-task-types/seal.jpg)|Выберите тюленя|
|![](Funcaptcha-task-types/bear.jpg)|Выберите медведя|
|![](Funcaptcha-task-types/mouse.jpg)|Выберите мышь|
|![](Funcaptcha-task-types/butterfly.jpg)|Выберите бабочку|
|![](Funcaptcha-task-types/monkey.jpg)|Выберите обезьяну|
|![](Funcaptcha-task-types/bread.jpg)|Выберите хлеб|
|![](Funcaptcha-task-types/lobster.jpg)|Выберите омара|
|![](Funcaptcha-task-types/kangaroo.jpg)|Выберите кенгуру|
|![](Funcaptcha-task-types/deer.jpg)|Выберите оленя|
|![](Funcaptcha-task-types/apple.jpg)|Выберите яблоко|
|![](Funcaptcha-task-types/ant.jpg)|Выберите муравья|
|![](Funcaptcha-task-types/snake.jpg)|Выберите змею|
|![](Funcaptcha-task-types/icecream.jpg)|Выберите мороженое|
|![](Funcaptcha-task-types/owl.gif)|Выберите сову|
|![](Funcaptcha-task-types/pants.gif)|Выберите штаны|
|![](Funcaptcha-task-types/cactus.jpg)|Выберите кактус|
|![](Funcaptcha-task-types/calculator.jpg)|Выберите калькулятор|
|![](Funcaptcha-task-types/shoe.jpg)|Выберите обувь|
|![](Funcaptcha-task-types/scissors.jpg)|Выберите ножницы|
|![](Funcaptcha-task-types/lion.gif)|Выберите льва|
|![](Funcaptcha-task-types/crab.jpg)|Выберите краба|
|![](Funcaptcha-task-types/donut.jpg)|Выберите пончик|
|![](Funcaptcha-task-types/dog.jpg)|Выберите собаку|
|![](Funcaptcha-task-types/bee.jpg)|Выберите пчелу|
|![](Funcaptcha-task-types/banana.jpg)|Выберите банан|
|![](Funcaptcha-task-types/parrot.gif)|Выберите попугая|
|![](Funcaptcha-task-types/octopus.jpg)|Выберите осьминога|
|![](Funcaptcha-task-types/pencil.gif)|Выберите карандаш|
|![](Funcaptcha-task-types/lamp.gif)|Выберите лампу|
|![](Funcaptcha-task-types/lock.gif)|Выберите замок|
|![](Funcaptcha-task-types/turtle.gif)|Выберите черепаху|
|![](Funcaptcha-task-types/camel.gif)|Выберите верблюда|
|![](Funcaptcha-task-types/horse.jpg)|Выберите лошадь|
|![](Funcaptcha-task-types/pizza.jpg)|Выберите пиццу|
|![](Funcaptcha-task-types/bat.jpg)|Выберите летучую мышь|
|![](Funcaptcha-task-types/watermelon.jpg)|Выберите арбуз|
|![](Funcaptcha-task-types/controller.gif)|Выберите контроллер|
|![](Funcaptcha-task-types/rabbit.jpg)|Выберите кролика|
|![](Funcaptcha-task-types/pineapple.jpg)|Выберите ананас|
|![](Funcaptcha-task-types/snail.jpg)|Выберите улитку|
|![](Funcaptcha-task-types/glasses.jpg)|Выберите очки|
|![](Funcaptcha-task-types/key.gif)|Выберите ключ|
|![](Funcaptcha-task-types/hotdog.gif)|Выберите хотдог|
|![](Funcaptcha-task-types/helmet.gif)|Выберите шлем|
|![](Funcaptcha-task-types/sock.gif)|Выберите носки|
|![](Funcaptcha-task-types/starfish.gif)|Выберите морскую звезду|
|![](Funcaptcha-task-types/frog.gif)|Выберите лягушку|
|![](Funcaptcha-task-types/printer.jpg)|Выберите принтер|
|![](Funcaptcha-task-types/umbrella.gif)|Выберите зонт|
|![](Funcaptcha-task-types/giraffe.jpg)|Выберите жирафа|
|![](Funcaptcha-task-types/spaceship.gif)|Выберите космический корабль|
|![](Funcaptcha-task-types/boat.gif)|Выберите лодку|
|![](Funcaptcha-task-types/wrong-shadow-2.jpg)|Выберите неправильную тень|
|![](Funcaptcha-task-types/helicopter.gif)|Выберите вертолет|
|![](Funcaptcha-task-types/refrigerator.jpg)|Выберите холодильник|
|![](Funcaptcha-task-types/couch.jpg)|Выберите диван|
|![](Funcaptcha-task-types/money.jpg)|Выберите деньги|
|![](Funcaptcha-task-types/mushroom.jpg)|Выберите грибы|
|![](Funcaptcha-task-types/fence.jpg)|Выберите забор|
|![](Funcaptcha-task-types/car.jpg)|Выберите машину|
|![](Funcaptcha-task-types/wristwatch.jpg)|Выберите наручные часы|
|![](Funcaptcha-task-types/alien.jpg)|Выберите пришельца|
|![](Funcaptcha-task-types/fan.jpg)|Выберите вентилятор|
|![](Funcaptcha-task-types/crown.jpg)|Выберите корону|
|![](Funcaptcha-task-types/burger.jpg)|Выберите бургер|
|![](Funcaptcha-task-types/train.jpg)|Выберите поезд|
|![](Funcaptcha-task-types/trophy.jpg)|Выберите трофей|
|![](Funcaptcha-task-types/aquarium.jpg)|Выберите аквариум|
|![](Funcaptcha-task-types/anchor.jpg)|Выберите якорь|
|![](Funcaptcha-task-types/toaster.jpg)|Выберите тостер|
|![](Funcaptcha-task-types/stapler.jpg)|Выберите степлер|
|![](Funcaptcha-task-types/bicycle.jpg)|Выберите велосипед|
|![](Funcaptcha-task-types/guitar.jpg)|Выберите гитару|
|![](Funcaptcha-task-types/fire.jpg)|Выберите огонь|
|![](Funcaptcha-task-types/flower.jpg)|Выберите цветок|
|![](Funcaptcha-task-types/snowman.jpg)|Выберите снеговика|
|![](Funcaptcha-task-types/ball.jpg)|Выберите мяч|
|![](Funcaptcha-task-types/ring.jpg)|Выберите кольца|
|![](Funcaptcha-task-types/camera.jpg)|Выберите камеру|
|![](Funcaptcha-task-types/rotate-image.png)|Вид капчи, для решения которой нужно поворачивать изображение|