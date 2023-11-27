---
sidebar_position: 3
sidebar_label: FunCaptchaTask
---

# FunCaptchaTask
This type solving task FunCaptcha. Your app submits website address, public key and proxy.

The result of solving task is a token for the submit form.

:::warning **Attention!**
If the proxy is authorized by IP, then be sure to add **116.203.55.208** to the white list.
:::

## **Object structure**

|**Parameter**|**Type**|**Required**|**Value**|
| :- | :- | :- | :- |
|type|String|yes|**FunCaptchaTaskProxyless** or **FunCaptchaTask** (When using a proxy).|
|websiteURL|String|yes|Address of a webpage with FunCaptcha.|
|funcaptchaApiJSSubdomain|String|no|A special subdomain of funcaptcha.com, from which the JS captcha widget should be loaded. It can be found in an element named `fc-token` - the value after the `surl`. It is required if you use a domain other than `client-api.arkoselabs.com`.|
|websitePublicKey|String|yes|FunCaptcha website key. `<div id="funcaptcha" data-pkey="THAT_ONE"></div>`|
|data|String|no|Additional parameter that may be required by FunCaptcha implementation.<br/> Use this property to send "blob" value as a stringified array. See example how it may look like: {"\blob\":\"HERE_COMES_THE_blob_VALUE\"}*|
|proxyType|String|yes (if using **FunCaptchaTask**)| Type of the proxy<br/> **http** - usual http/https proxy;<br/>**https** - try this only if "http" doesn't work (required by some custom proxy servers);<br />**socks4** - socks4 proxy;<br />**socks5** - socks5 proxy.|
|proxyAddress|String|yes (If using **FunCaptchaTask**)|<p>Proxy IP address IPv4/IPv6. Not allowed to use:</p><p>- host names instead of IPs</p><p>- transparent proxies (where client IP is visible)</p><p>- proxies from local networks (192.., 10.., 127...).</p>|
|proxyPort|Integer|yes (If using **FunCaptchaTask**)|Proxy port.|
|proxyLogin|String|no|Proxy login.|
|proxyPassword|String|no|Proxy password.|
|userAgent|String|yes|Browser's User-Agent which is used in emulation. |
|cookies|String|no|<p>Additional cookies which we must use during interaction with target page.</p><p>**Format**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Request example**

:::info Method
<https://api.capmonster.cloud/createTask>
:::

### FunCaptchaTask (With proxy)
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
### FunCaptchaTaskProxyless (without proxy)
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

**Response example**

```json
{
  "errorId":0,
  "taskId":407533072

}
```

## **Getting result**

:::info Method
<https://api.capmonster.cloud/getTaskResult>
:::

Use the [getTaskResult](../api/methods/get-task-result.md) method to request answer for FunCaptcha. You will get response within 10 - 30 secs period depending on service workload.

|**Property**|**Type**|**Description**|
| :- | :- | :- |
|token|String|FunCaptcha token that needs to be substituted into the form.|

**Example:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn\_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
```

## Supported task types

|**Type**|**Description**|
| :- | :- |
|![](Funcaptcha-task-types/matching-reflection.png)|Pick the image with the matching reflection|
|![](Funcaptcha-task-types/different-object-silhouette.png)|Pick the shadow with a different object silhouette|
|![](Funcaptcha-task-types/two-identical-objects.gif)|Pick one square that shows two identical objects|
|![](Funcaptcha-task-types/dice-same-icon.gif)|Pick the dice pair with the same icon facing up|
|![](Funcaptcha-task-types/dice-to-4.jpg)|Pick the dice pair whose top sides add up to 4|
|![](Funcaptcha-task-types/dice-5.jpg)|Pick the dice pair whose top sides add up to 5|
|![](Funcaptcha-task-types/dice-6.jpg)|Pick the dice pair whose top sides add up to 6|
|![](Funcaptcha-task-types/dice-7.jpg)|Pick the dice pair whose top sides add up to 7|
|![](Funcaptcha-task-types/dice-8.jpg)|Pick the dice pair whose top sides add up to 8|
|![](Funcaptcha-task-types/dice-10.jpg)|Pick the dice pair whose top sides add up to 10|
|![](Funcaptcha-task-types/dice-14.jpg)|Pick the dice pair whose top sides add up to 14|
|![](Funcaptcha-task-types/darts.jpg)|Pick the image where the darts add up to 8/10/12/14|
|![](Funcaptcha-task-types/animals-directions.jpg)|Pick the image where all animals are walking in the same direction as the arrow|
|![](Funcaptcha-task-types/shadows-icons-top.jpg)|Pick the shadow that matches the icons at the top of the image|
|![](Funcaptcha-task-types/matching-cards.jpg)|Pick the matching cards|
|![](Funcaptcha-task-types/mouse-cheese.jpg)|Pick the mouse that can reach all the cheese in the maze|
|![](Funcaptcha-task-types/animal-wrong-head.jpg)|Select the animal with the wrong head|
|![](Funcaptcha-task-types/penguin.jpg)|Pick the penguin|
|![](Funcaptcha-task-types/rotate-animal.jpg)|Use the arrows to rotate the animal to face in the direction of the hand|
|![](Funcaptcha-task-types/image-correct.gif)|Pick the image that is the correct way up|
|![](Funcaptcha-task-types/spiral-galaxy.gif)|Pick the spiral galaxy|
|![](Funcaptcha-task-types/one-rope.jpg)|Pick the image with only one rope|
|![](Funcaptcha-task-types/split-in-half.png)|Pick the cube with icons split in half|
|![](Funcaptcha-task-types/puzzle-wrong-pieces.png)|Pick the puzzle with the wrong pieces|
|![](Funcaptcha-task-types/amount-animals.jpg)|Pick the image where the number matches the amount of animals|
|![](Funcaptcha-task-types/mouse-cheese-2.jpg)|Pick the mouse that can't reach the cheese|
|![](Funcaptcha-task-types/total-fingers-3.jpg)|Select the image where the total fingers add up to 3|
|![](Funcaptcha-task-types/wrong-shadow.jpg)|Pick the wrong shadow|
|![](Funcaptcha-task-types/square-three-objects.jpg)|Pick one square that shows three of the same object|
|![](Funcaptcha-task-types/move-person-cross.png)|Use the arrows to move the person to the spot indicated by the cross|
|![](Funcaptcha-task-types/move-person-circle.jpg)|Use the arrows to move the person to the icon indicated by the colored circle|
|![](Funcaptcha-task-types/rotate-animal-2.png)|Use the arrows to rotate the animal with the same icon to face where the hand is pointing|
|![](Funcaptcha-task-types/number-objects.png)|Use the arrows to change the number of objects until it matches the left image|
|![](Funcaptcha-task-types/dice-matches.png)|Change the dice until the count matches the image on the left|
|![](Funcaptcha-task-types/move-train.png)|Use the arrows to move the train to the coordinates indicated in the left image|
|![](Funcaptcha-task-types/number-rocks.png)|Match the number of rocks with the number on the left|
|![](Funcaptcha-task-types/move-person-indicated-seat.png)|Using the arrows move the person to the indicated seat|
|![](Funcaptcha-task-types/koala.jpg)|Pick the koala|
|![](Funcaptcha-task-types/ladybug.gif)|Pick the ladybug|
|![](Funcaptcha-task-types/pig.jpg)|Pick the pig|
|![](Funcaptcha-task-types/zebra.jpg)|Pick the zebra|
|![](Funcaptcha-task-types/shark.jpg)|Pick the shark|
|![](Funcaptcha-task-types/dinosaur.jpg)|Pick the dinosaur|
|![](Funcaptcha-task-types/duck.jpg)|Pick the duck|
|![](Funcaptcha-task-types/chicken.jpg)|Pick the chicken|
|![](Funcaptcha-task-types/rhino.jpg)|Pick the rhino|
|![](Funcaptcha-task-types/dolphin.jpg)|Pick the dolphin|
|![](Funcaptcha-task-types/grapes.jpg)|Pick the grapes|
|![](Funcaptcha-task-types/goat.jpg)|Pick the goat|
|![](Funcaptcha-task-types/elephant.jpg)|Pick the elephant|
|![](Funcaptcha-task-types/seal.jpg)|Pick the seal|
|![](Funcaptcha-task-types/bear.jpg)|Pick the bear|
|![](Funcaptcha-task-types/mouse.jpg)|Pick the mouse|
|![](Funcaptcha-task-types/butterfly.jpg)|Pick the butterfly|
|![](Funcaptcha-task-types/monkey.jpg)|Pick the monkey|
|![](Funcaptcha-task-types/bread.jpg)|Pick the bread|
|![](Funcaptcha-task-types/lobster.jpg)|Pick the lobster|
|![](Funcaptcha-task-types/kangaroo.jpg)|Pick the kangaroo|
|![](Funcaptcha-task-types/deer.jpg)|Pick the deer|
|![](Funcaptcha-task-types/apple.jpg)|Pick the apple|
|![](Funcaptcha-task-types/ant.jpg)|Pick the ant|
|![](Funcaptcha-task-types/snake.jpg)|Pick the snake|
|![](Funcaptcha-task-types/icecream.jpg)|Pick the ice cream|
|![](Funcaptcha-task-types/owl.gif)|Pick the owl|
|![](Funcaptcha-task-types/pants.gif)|Pick the pants|
|![](Funcaptcha-task-types/cactus.jpg)|Pick the cactus|
|![](Funcaptcha-task-types/calculator.jpg)|Pick the calculator|
|![](Funcaptcha-task-types/shoe.jpg)|Pick the shoe|
|![](Funcaptcha-task-types/scissors.jpg)|Pick the scissors|
|![](Funcaptcha-task-types/lion.gif)|Pick the lion|
|![](Funcaptcha-task-types/crab.jpg)|Pick the crab|
|![](Funcaptcha-task-types/donut.jpg)|Pick the donut|
|![](Funcaptcha-task-types/dog.jpg)|Pick the dog|
|![](Funcaptcha-task-types/bee.jpg)|Pick the bee|
|![](Funcaptcha-task-types/banana.jpg)|Pick the banana|
|![](Funcaptcha-task-types/parrot.gif)|Pick the parrot|
|![](Funcaptcha-task-types/octopus.jpg)|Pick the octopus|
|![](Funcaptcha-task-types/pencil.gif)|Pick the pencil|
|![](Funcaptcha-task-types/lamp.gif)|Pick the lamp|
|![](Funcaptcha-task-types/lock.gif)|Pick the lock|
|![](Funcaptcha-task-types/turtle.gif)|Pick the turtle|
|![](Funcaptcha-task-types/camel.gif)|Pick the camel|
|![](Funcaptcha-task-types/horse.jpg)|Pick the horse|
|![](Funcaptcha-task-types/pizza.jpg)|Pick the pizza|
|![](Funcaptcha-task-types/bat.jpg)|Pick the bat|
|![](Funcaptcha-task-types/watermelon.jpg)|Pick the watermelon|
|![](Funcaptcha-task-types/controller.gif)|Pick the controller|
|![](Funcaptcha-task-types/rabbit.jpg)|Pick the rabbit|
|![](Funcaptcha-task-types/pineapple.jpg)|Pick the pineapple|
|![](Funcaptcha-task-types/snail.jpg)|Pick the snail|
|![](Funcaptcha-task-types/glasses.jpg)|Pick the glasses|
|![](Funcaptcha-task-types/key.gif)|Pick the key|
|![](Funcaptcha-task-types/hotdog.gif)|Pick the hotdog|
|![](Funcaptcha-task-types/helmet.gif)|Pick the helmet|
|![](Funcaptcha-task-types/sock.gif)|Pick the sock|
|![](Funcaptcha-task-types/starfish.gif)|Pick the starfish|
|![](Funcaptcha-task-types/frog.gif)|Pick the frog|
|![](Funcaptcha-task-types/printer.jpg)|Pick the printer|
|![](Funcaptcha-task-types/umbrella.gif)|Pick the umbrella|
|![](Funcaptcha-task-types/giraffe.jpg)|Pick the giraffe|
|![](Funcaptcha-task-types/spaceship.gif)|Pick the spaceship|
|![](Funcaptcha-task-types/boat.gif)|Pick the boat|
|![](Funcaptcha-task-types/wrong-shadow-2.jpg)|Pick the wrong shadow|
|![](Funcaptcha-task-types/helicopter.gif)|Pick the helicopter|
|![](Funcaptcha-task-types/refrigerator.jpg)|Pick the refrigerator|
|![](Funcaptcha-task-types/couch.jpg)|Pick the couch|
|![](Funcaptcha-task-types/money.jpg)|Pick the money|
|![](Funcaptcha-task-types/mushroom.jpg)|Pick the mushroom|
|![](Funcaptcha-task-types/fence.jpg)|Pick the fence|
|![](Funcaptcha-task-types/car.jpg)|Pick the car|
|![](Funcaptcha-task-types/wristwatch.jpg)|Pick the wristwatch|
|![](Funcaptcha-task-types/alien.jpg)|Pick the alien|
|![](Funcaptcha-task-types/fan.jpg)|Pick the fan|
|![](Funcaptcha-task-types/crown.jpg)|Pick the crown|
|![](Funcaptcha-task-types/burger.jpg)|Pick the burger|
|![](Funcaptcha-task-types/train.jpg)|Pick the train|
|![](Funcaptcha-task-types/trophy.jpg)|Pick the trophy|
|![](Funcaptcha-task-types/aquarium.jpg)|Pick the aquarium|
|![](Funcaptcha-task-types/anchor.jpg)|Pick the anchor|
|![](Funcaptcha-task-types/toaster.jpg)|Pick the toaster|
|![](Funcaptcha-task-types/stapler.jpg)|Pick the stapler|
|![](Funcaptcha-task-types/bicycle.jpg)|Pick the bicycle|
|![](Funcaptcha-task-types/guitar.jpg)|Pick the guitar|
|![](Funcaptcha-task-types/fire.jpg)|Pick the fire|
|![](Funcaptcha-task-types/flower.jpg)|Pick the flower|
|![](Funcaptcha-task-types/snowman.jpg)|Pick the snowman|
|![](Funcaptcha-task-types/ball.jpg)|Pick the ball|
|![](Funcaptcha-task-types/ring.jpg)|Pick the ring|
|![](Funcaptcha-task-types/camera.jpg)|Pick the camera|
|![](Funcaptcha-task-types/rotate-image.png)|Type of captcha, where you need to rotate the image|