---
sidebar_position: 3
sidebar_label: FunCaptchaTask
draft: true
---

# FunCaptchaTask
这种类型的任务用于解决 FunCaptcha。您的应用程序提交网站地址、公钥和代理信息。

解决任务的结果是提交表单的令牌。

:::warning **注意！**
如果代理是通过 IP 授权的，请务必将 **116.203.55.208** 添加到白名单中。
:::

## **对象结构**

|**参数**|**类型**|**必需**|**值**|
| :- | :- | :- | :- |
|type|String|是|**FunCaptchaTaskProxyless（不使用代理）**或 **FunCaptchaTask**（使用代理）。|
|websiteURL|String|是|包含 FunCaptcha 的网页地址。|
|funcaptchaApiJSSubdomain|String|否|funcaptcha.com 的特定子域，用于加载 JavaScript 验证码小部件。在名为 `fc-token` 的元素中可以找到它 - `surl` 后面的值。这在使用除了 `client-api.arkoselabs.com` 之外的域名时是必需的。|
|websitePublicKey|String|是|FunCaptcha 网站密钥。`<div id="funcaptcha" data-pkey="THAT_ONE"></div>`|
|data|String|否|FunCaptcha 实现可能需要的附加参数。<br/> 使用此属性将 "blob" 值作为字符串化数组发送。例如，它可能如下所示：`{"blob":"HERE_COMES_THE_blob_VALUE"}`\*|
|proxyType|String|是（如果使用 **FunCaptchaTask**）|代理类型<br/> **http** - 普通的 http/https 代理；<br/> **https** - 仅在 "http" 不起作用时尝试（某些自定义代理服务器要求）；<br /> **socks4** - socks4 代理；<br /> **socks5** - socks5 代理。|
|proxyAddress|String|是（如果使用 **FunCaptchaTask**）|<p>代理 IP 地址 IPv4/IPv6。不允许使用：</p><p> - IP 地址而不是主机名</p><p> - 透明代理（客户端 IP 可见）</p><p> - 来自本地网络的代理（192.., 10.., 127...）。</p>|
|proxyPort|Integer|是（如果使用 **FunCaptchaTask**）|代理端口。|
|proxyLogin|String|否|代理登录。|
|proxyPassword|String|否|代理密码。|
|userAgent|String|是|浏览器的 User-Agent，用于模拟。|
|cookies|String|否|<p>与目标页面交互期间必须使用的额外 cookie。</p><p> **格式**：cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **请求示例**

:::info 方法
```http
https://api.capmonster.cloud/createTask
```
:::

### FunCaptchaTask（带代理）
```json
{
  "clientKey":"API_KEY",
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
### FunCaptchaTaskProxyless（无代理）
```json
{
  "clientKey":"API_KEY",
  "task": {
    "type":"FunCaptchaTaskProxyless",
    "websiteURL":"http://mywebsite.com/",
    "funcaptchaApiJSSubdomain":"mywebsite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC"
  }
}
```

**响应示例**

```json
{
  "errorId":0,
  "taskId":407533072

}
```

## **获取结果**

:::info 方法
```http
https://api.capmonster.cloud/getTaskResult
```
:::

使用 [getTaskResult](../api/methods/get-task-result.md) 方法请求 FunCaptcha 的答案。根据服务负载，您将在 10 到 30 秒内收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|token|字符串|需要插入表单的 FunCaptcha 令牌。|

**示例：**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn\_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
```

## 支持的任务类型

|**类型**|**描述**|
| :- | :- |
|![](Funcaptcha-task-types/matching-reflection.png)|选择与反射匹配的图像|
|![](Funcaptcha-task-types/different-object-silhouette.png)|选择具有不同对象轮廓的阴影|
|![](Funcaptcha-task-types/two-identical-objects.gif)|选择显示两个相同对象的方块|
|![](Funcaptcha-task-types/dice-same-icon.gif)|选择显示相同图标的骰子对|
|![](Funcaptcha-task-types/dice-to-4.jpg)|选择顶部面加起来为4的骰子对|
|![](Funcaptcha-task-types/dice-5.jpg)|选择顶部面加起来为5的骰子对|
|![](Funcaptcha-task-types/dice-6.jpg)|选择顶部面加起来为6的骰子对|
|![](Funcaptcha-task-types/dice-7.jpg)|选择顶部面加起来为7的骰子对|
|![](Funcaptcha-task-types/dice-8.jpg)|选择顶部面加起来为8的骰子对|
|![](Funcaptcha-task-types/dice-10.jpg)|选择顶部面加起来为10的骰子对|
|![](Funcaptcha-task-types/dice-14.jpg)|选择顶部面加起来为14的骰子对|
|![](Funcaptcha-task-types/darts.jpg)|选择使飞镖总数为8/10/12/14的图像|
|![](Funcaptcha-task-types/animals-directions.jpg)|选择所有动物都朝箭头指示方向行走的图像|
|![](Funcaptcha-task-types/shadows-icons-top.jpg)|选择与图像顶部图标匹配的阴影|
|![](Funcaptcha-task-types/matching-cards.jpg)|选择匹配的卡片|
|![](Funcaptcha-task-types/mouse-cheese.jpg)|选择能够到达迷宫中所有奶酪的老鼠|
|![](Funcaptcha-task-types/animal-wrong-head.jpg)|选择带有错误头部的动物|
|![](Funcaptcha-task-types/penguin.jpg)|选择企鹅|
|![](Funcaptcha-task-types/rotate-animal.jpg)|使用箭头将动物旋转到手指指向的方向|
|![](Funcaptcha-task-types/image-correct.gif)|选择正确方向的图像|
|![](Funcaptcha-task-types/spiral-galaxy.gif)|选择螺旋星系|
|![](Funcaptcha-task-types/one-rope.jpg)|选择只有一根绳子的图像|
|![](Funcaptcha-task-types/split-in-half.png)|选择图标一分为二的立方体|
|![](Funcaptcha-task-types/puzzle-wrong-pieces.png)|选择错误拼图|
|![](Funcaptcha-task-types/amount-animals.jpg)|选择动物数量与左侧图像匹配的图像|
|![](Funcaptcha-task-types/mouse-cheese-2.jpg)|选择不能到达奶酪的老鼠|
|![](Funcaptcha-task-types/total-fingers-3.jpg)|选择总手指数加起来为3的图像|
|![](Funcaptcha-task-types/wrong-shadow.jpg)|选择错误的阴影|
|![](Funcaptcha-task-types/square-three-objects.jpg)|选择显示三个相同对象的方块|
|![](Funcaptcha-task-types/move-person-cross.png)|使用箭头将人移动到十字标示的位置|
|![](Funcaptcha-task-types/move-person-circle.jpg)|使用箭头将人移动到彩色圆圈标示的图标位置|
|![](Funcaptcha-task-types/rotate-animal-2.png)|使用箭头将具有相同图标的动物旋转到手指指向的方向|
|![](Funcaptcha-task-types/number-objects.png)|使用箭头更改对象数量，直到与左侧图像匹配|
|![](Funcaptcha-task-types/dice-matches.png)|更改骰子直到数目与左侧图像相匹配|
|![](Funcaptcha-task-types/move-train.png)|使用箭头将火车移动到左侧图像指示的坐标|
|![](Funcaptcha-task-types/number-rocks.png)|将石头的数量与左侧图像上的数字匹配|
|![](Funcaptcha-task-types/move-person-indicated-seat.png)|使用箭头将人移动到指示的座位|
|![](Funcaptcha-task-types/koala.jpg)|选择考拉|
|![](Funcaptcha-task-types/ladybug.gif)|选择瓢虫|
|![](Funcaptcha-task-types/pig.jpg)|选择猪|
|![](Funcaptcha-task-types/zebra.jpg)|选择斑马|
|![](Funcaptcha-task-types/shark.jpg)|选择鲨鱼|
|![](Funcaptcha-task-types/dinosaur.jpg)|选择恐龙|
|![](Funcaptcha-task-types/duck.jpg)|选择鸭子|
|![](Funcaptcha-task-types/chicken.jpg)|选择鸡|
|![](Funcaptcha-task-types/rhino.jpg)|选择犀牛|
|![](Funcaptcha-task-types/dolphin.jpg)|选择海豚|
|![](Funcaptcha-task-types/grapes.jpg)|选择葡萄|
|![](Funcaptcha-task-types/goat.jpg)|选择山羊|
|![](Funcaptcha-task-types/elephant.jpg)|选择大象|
|![](Funcaptcha-task-types/seal.jpg)|选择海豹|
|![](Funcaptcha-task-types/bear.jpg)|选择熊|
|![](Funcaptcha-task-types/mouse.jpg)|选择老鼠|
|![](Funcaptcha-task-types/butterfly.jpg)|选择蝴蝶|
|![](Funcaptcha-task-types/monkey.jpg)|选择猴子|
|![](Funcaptcha-task-types/bread.jpg)|选择面包|
|![](Funcaptcha-task-types/lobster.jpg)|选择龙虾|
|![](Funcaptcha-task-types/kangaroo.jpg)|选择袋鼠|
|![](Funcaptcha-task-types/deer.jpg)|选择鹿|
|![](Funcaptcha-task-types/apple.jpg)|选择苹果|
|![](Funcaptcha-task-types/ant.jpg)|选择蚂蚁|
|![](Funcaptcha-task-types/snake.jpg)|选择蛇|
|![](Funcaptcha-task-types/icecream.jpg)|选择冰淇淋|
|![](Funcaptcha-task-types/owl.gif)|选择猫头鹰|
|![](Funcaptcha-task-types/pants.gif)|选择裤子|
|![](Funcaptcha-task-types/cactus.jpg)|选择仙人掌|
|![](Funcaptcha-task-types/calculator.jpg)|选择计算器|
|![](Funcaptcha-task-types/shoe.jpg)|选择鞋子|
|![](Funcaptcha-task-types/scissors.jpg)|选择剪刀|
|![](Funcaptcha-task-types/lion.gif)|选择狮子|
|![](Funcaptcha-task-types/crab.jpg)|选择螃蟹|
|![](Funcaptcha-task-types/donut.jpg)|选择甜甜圈|
|![](Funcaptcha-task-types/dog.jpg)|选择狗|
|![](Funcaptcha-task-types/bee.jpg)|选择蜜蜂|
|![](Funcaptcha-task-types/banana.jpg)|选择香蕉|
|![](Funcaptcha-task-types/parrot.gif)|选择鹦鹉|
|![](Funcaptcha-task-types/octopus.jpg)|选择章鱼|
|![](Funcaptcha-task-types/pencil.gif)|选择铅笔|
|![](Funcaptcha-task-types/lamp.gif)|选择灯|
|![](Funcaptcha-task-types/lock.gif)|选择锁|
|![](Funcaptcha-task-types/turtle.gif)|选择乌龟|
|![](Funcaptcha-task-types/camel.gif)|选择骆驼|
|![](Funcaptcha-task-types/horse.jpg)|选择马|
|![](Funcaptcha-task-types/pizza.jpg)|选择披萨|
|![](Funcaptcha-task-types/bat.jpg)|选择蝙蝠|
|![](Funcaptcha-task-types/watermelon.jpg)|选择西瓜|
|![](Funcaptcha-task-types/controller.gif)|选择控制器|
|![](Funcaptcha-task-types/rabbit.jpg)|选择兔子|
|![](Funcaptcha-task-types/pineapple.jpg)|选择菠萝|
|![](Funcaptcha-task-types/snail.jpg)|选择蜗牛|
|![](Funcaptcha-task-types/glasses.jpg)|选择眼镜|
|![](Funcaptcha-task-types/key.gif)|选择钥匙|
|![](Funcaptcha-task-types/hotdog.gif)|选择热狗|
|![](Funcaptcha-task-types/helmet.gif)|选择头盔|
|![](Funcaptcha-task-types/sock.gif)|选择袜子|
|![](Funcaptcha-task-types/starfish.gif)|选择海星|
|![](Funcaptcha-task-types/frog.gif)|选择青蛙|
|![](Funcaptcha-task-types/printer.jpg)|选择打印机|
|![](Funcaptcha-task-types/umbrella.gif)|选择雨伞|
|![](Funcaptcha-task-types/giraffe.jpg)|选择长颈鹿|
|![](Funcaptcha-task-types/spaceship.gif)|选择宇宙飞船|
|![](Funcaptcha-task-types/boat.gif)|选择船|
|![](Funcaptcha-task-types/wrong-shadow-2.jpg)|选择错误的阴影|
|![](Funcaptcha-task-types/helicopter.gif)|选择直升机|
|![](Funcaptcha-task-types/refrigerator.jpg)|选择冰箱|
|![](Funcaptcha-task-types/couch.jpg)|选择沙发|
|![](Funcaptcha-task-types/money.jpg)|选择钱币|
|![](Funcaptcha-task-types/mushroom.jpg)|选择蘑菇|
|![](Funcaptcha-task-types/fence.jpg)|选择栅栏|
|![](Funcaptcha-task-types/car.jpg)|选择汽车|
|![](Funcaptcha-task-types/wristwatch.jpg)|选择手表|
|![](Funcaptcha-task-types/alien.jpg)|选择外星人|
|![](Funcaptcha-task-types/fan.jpg)|选择风扇|
|![](Funcaptcha-task-types/crown.jpg)|选择皇冠|
|![](Funcaptcha-task-types/burger.jpg)|选择汉堡|
|![](Funcaptcha-task-types/train.jpg)|选择火车|
|![](Funcaptcha-task-types/trophy.jpg)|选择奖杯|
|![](Funcaptcha-task-types/aquarium.jpg)|选择水族馆|
|![](Funcaptcha-task-types/anchor.jpg)|选择锚|
|![](Funcaptcha-task-types/toaster.jpg)|选择烤箱|
|![](Funcaptcha-task-types/stapler.jpg)|选择订书机|
|![](Funcaptcha-task-types/bicycle.jpg)|选择自行车|
|![](Funcaptcha-task-types/guitar.jpg)|选择吉他|
|![](Funcaptcha-task-types/fire.jpg)|选择火焰|
|![](Funcaptcha-task-types/flower.jpg)|选择花朵|
|![](Funcaptcha-task-types/snowman.jpg)|选择雪人|
|![](Funcaptcha-task-types/ball.jpg)|选择球|
|![](Funcaptcha-task-types/ring.jpg)|选择戒指|
|![](Funcaptcha-task-types/camera.jpg)|选择相机|
|![](Funcaptcha-task-types/rotate-image.png)|类型的验证码，需要旋转图像|