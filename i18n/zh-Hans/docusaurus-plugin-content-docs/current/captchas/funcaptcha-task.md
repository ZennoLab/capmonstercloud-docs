---
sidebar_position: 3
sidebar_label: FunCaptchaTask
draft: true
---
# FunCaptchaTask
这种类型的任务用于解决 FunCaptcha。您的应用程序提交网站地址、公钥和代理信息。

解决任务的结果是提交表单的令牌。

:::警告**注意！**
如果代理是通过 IP 授权的，请务必将 **116.203.55.208** 添加到白名单中。
:::
## **对象结构**

|<h2>**参数**</h2>|<h2>**类型**</h2>|<h2>**必需**</h2>|<h2>**值**</h2>|
| :- | :- | :- | :- |
|<h2>type</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>**FunCaptchaTaskProxyless（不使用代理）**或 **FunCaptchaTask**（使用代理）。</h2>|
|<h2>websiteURL</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>包含 FunCaptcha 的网页地址。 </h2>|
|<h2>funcaptchaApiJSSubdomain</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>funcaptcha.com 的特定子域，用于加载 JavaScript 验证码小部件。在名为 `fc-token` 的元素中可以找到它 - `surl` 后面的值。这在使用除了 `client-api.arkoselabs.com` 之外的域名时是必需的。</h2>|
|<h2>websitePublicKey</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>FunCaptcha 网站密钥。`<div id="funcaptcha" data-pkey="THAT_ONE"></div>`</h2>|
|<h2>data</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>FunCaptcha 实现可能需要的附加参数。<br/> 使用此属性将 "blob" 值作为字符串化数组发送。例如，它可能如下所示：`{"blob":"HERE_COMES_THE_blob_VALUE"}`\*</h2>|
|<h2>proxyType</h2>|<h2>字符串</h2>|<h2>是（如果使用 **FunCaptchaTask**）</h2>|<h2>代理类型<br/> **http** - 普通的 http/https 代理；<br/> **https** - 仅在 "http" 不起作用时尝试（某些自定义代理服务器要求）；<br /> **socks4** - socks4 代理；<br /> **socks5** - socks5 代理。</h2>|
|<h2>proxyAddress</h2>|<h2>字符串</h2>|<h2>是（如果使用 **FunCaptchaTask**）</h2>|<h2><p>代理 IP 地址 IPv4/IPv6。不允许使用：</p><p> - IP 地址而不是主机名</p><p> - 透明代理（客户端 IP 可见）</p><p> - 来自本地网络的代理（192.., 10.., 127...）。</p></h2>|
|<h2>proxyPort</h2>|<h2>整数</h2>|<h2>是（如果使用 **FunCaptchaTask**）</h2>|<h2>代理端口。</h2>|
|<h2>proxyLogin</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>代理登录。</h2>|
|<h2>proxyPassword</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2>代理密码。</h2>|
|<h2>userAgent</h2>|<h2>字符串</h2>|<h2>是</h2>|<h2>浏览器的 User-Agent，用于模拟。</h2>|
|<h2>cookies</h2>|<h2>字符串</h2>|<h2>否</h2>|<h2><p>与目标页面交互期间必须使用的额外 cookie。</p><p> **格式**：cookiename1=cookievalue1; cookiename2=cookievalue2</p></h2>|
##
## **请求示例**
:::信息 方法
~~~ http
https://api.capmonster.cloud/createTask
~~~

:::
### FunCaptchaTask（带代理）
~~~ json
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
~~~
### FunCaptchaTaskProxyless（无代理）
~~~ json
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
~~~

**响应示例**
~~~ json
{
  "errorId":0,
  "taskId":407533072

}
~~~
## **获取结果**
:::信息 方法
~~~ http
https://api.capmonster.cloud/getTaskResult
~~~

:::

使用 [getTaskResult](../api/methods/get-task-result.md) 方法请求 FunCaptcha 的答案。根据服务负载，您将在 10 到 30 秒内收到响应。

|**属性**|**类型**|**描述**|
| :- | :- | :- |
|token|字符串|需要插入表单的 FunCaptcha 令牌。|

**示例：**
~~~ json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn\_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
~~~
## 支持的任务类型

|<h2>**类型**</h2>|<h2>**描述**</h2>|
| :- | :- |
|<h2>![](Funcaptcha-task-types/matching-reflection.png)</h2>|<h2>选择与反射匹配的图像</h2>|
|<h2>![](Funcaptcha-task-types/different-object-silhouette.png)</h2>|<h2>选择具有不同对象轮廓的阴影</h2>|
|<h2>![](Funcaptcha-task-types/two-identical-objects.gif)</h2>|<h2>选择显示两个相同对象的方块</h2>|
|<h2>![](Funcaptcha-task-types/dice-same-icon.gif)</h2>|<h2>选择显示相同图标的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-to-4.jpg)</h2>|<h2>选择顶部面加起来为4的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-5.jpg)</h2>|<h2>选择顶部面加起来为5的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-6.jpg)</h2>|<h2>选择顶部面加起来为6的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-7.jpg)</h2>|<h2>选择顶部面加起来为7的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-8.jpg)</h2>|<h2>选择顶部面加起来为8的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-10.jpg)</h2>|<h2>选择顶部面加起来为10的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/dice-14.jpg)</h2>|<h2>选择顶部面加起来为14的骰子对</h2>|
|<h2>![](Funcaptcha-task-types/darts.jpg)</h2>|<h2>选择使飞镖总数为8/10/12/14的图像</h2>|
|<h2>![](Funcaptcha-task-types/animals-directions.jpg)</h2>|<h2>选择所有动物都朝箭头指示方向行走的图像</h2>|
|<h2>![](Funcaptcha-task-types/shadows-icons-top.jpg)</h2>|<h2>选择与图像顶部图标匹配的阴影</h2>|
|<h2>![](Funcaptcha-task-types/matching-cards.jpg)</h2>|<h2>选择匹配的卡片</h2>|
|<h2>![](Funcaptcha-task-types/mouse-cheese.jpg)</h2>|<h2>选择能够到达迷宫中所有奶酪的老鼠</h2>|
|<h2>![](Funcaptcha-task-types/animal-wrong-head.jpg)</h2>|<h2>选择带有错误头部的动物</h2>|
|<h2>![](Funcaptcha-task-types/penguin.jpg)</h2>|<h2>选择企鹅</h2>|
|<h2>![](Funcaptcha-task-types/rotate-animal.jpg)</h2>|<h2>使用箭头将动物旋转到手指指向的方向</h2>|
|<h2>![](Funcaptcha-task-types/image-correct.gif)</h2>|<h2>选择正确方向的图像</h2>|
|<h2>![](Funcaptcha-task-types/spiral-galaxy.gif)</h2>|<h2>选择螺旋星系</h2>|
|<h2>![](Funcaptcha-task-types/one-rope.jpg)</h2>|<h2>选择只有一根绳子的图像</h2>|
|<h2>![](Funcaptcha-task-types/split-in-half.png)</h2>|<h2>选择图标一分为二的立方体</h2>|
|<h2>![](Funcaptcha-task-types/puzzle-wrong-pieces.png)</h2>|<h2>选择错误拼图</h2>|
|<h2>![](Funcaptcha-task-types/amount-animals.jpg)</h2>|<h2>选择动物数量与左侧图像匹配的图像</h2>|
|<h2>![](Funcaptcha-task-types/mouse-cheese-2.jpg)</h2>|<h2>选择不能到达奶酪的老鼠</h2>|
|<h2>![](Funcaptcha-task-types/total-fingers-3.jpg)</h2>|<h2>选择总手指数加起来为3的图像</h2>|
|<h2>![](Funcaptcha-task-types/wrong-shadow.jpg)</h2>|<h2>选择错误的阴影</h2>|
|<h2>![](Funcaptcha-task-types/square-three-objects.jpg)</h2>|<h2>选择显示三个相同对象的方块</h2>|
|<h2>![](Funcaptcha-task-types/move-person-cross.png)</h2>|<h2>使用箭头将人移动到十字标示的位置</h2>|
|<h2>![](Funcaptcha-task-types/move-person-circle.jpg)</h2>|<h2>使用箭头将人移动到彩色圆圈标示的图标位置</h2>|
|<h2>![](Funcaptcha-task-types/rotate-animal-2.png)</h2>|<h2>使用箭头将具有相同图标的动物旋转到手指指向的方向</h2>|
|<h2>![](Funcaptcha-task-types/number-objects.png)</h2>|<h2>使用箭头更改对象数量，直到与左侧图像匹配</h2>|
|<h2>![](Funcaptcha-task-types/dice-matches.png)</h2>|<h2>更改骰子直到数目与左侧图像相匹配</h2>|
|<h2>![](Funcaptcha-task-types/move-train.png)</h2>|<h2>使用箭头将火车移动到左侧图像指示的坐标</h2>|
|<h2>![](Funcaptcha-task-types/number-rocks.png)</h2>|<h2>将石头的数量与左侧图像上的数字匹配</h2>|
|<h2>![](Funcaptcha-task-types/move-person-indicated-seat.png)</h2>|<h2>使用箭头将人移动到指示的座位</h2>|
|<h2>![](Funcaptcha-task-types/koala.jpg)</h2>|<h2>选择考拉</h2>|
|<h2>![](Funcaptcha-task-types/ladybug.gif)</h2>|<h2>选择瓢虫</h2>|
|<h2>![](Funcaptcha-task-types/pig.jpg)</h2>|<h2>选择猪</h2>|
|<h2>![](Funcaptcha-task-types/zebra.jpg)</h2>|<h2>选择斑马</h2>|
|<h2>![](Funcaptcha-task-types/shark.jpg)</h2>|<h2>选择鲨鱼</h2>|
|<h2>![](Funcaptcha-task-types/dinosaur.jpg)</h2>|<h2>选择恐龙</h2>|
|<h2>![](Funcaptcha-task-types/duck.jpg)</h2>|<h2>选择鸭子</h2>|
|<h2>![](Funcaptcha-task-types/chicken.jpg)</h2>|<h2>选择鸡</h2>|
|<h2>![](Funcaptcha-task-types/rhino.jpg)</h2>|<h2>选择犀牛</h2>|
|<h2>![](Funcaptcha-task-types/dolphin.jpg)</h2>|<h2>选择海豚</h2>|
|<h2>![](Funcaptcha-task-types/grapes.jpg)</h2>|<h2>选择葡萄</h2>|
|<h2>![](Funcaptcha-task-types/goat.jpg)</h2>|<h2>选择山羊</h2>|
|<h2>![](Funcaptcha-task-types/elephant.jpg)</h2>|<h2>选择大象</h2>|
|<h2>![](Funcaptcha-task-types/seal.jpg)</h2>|<h2>选择海豹</h2>|
|<h2>![](Funcaptcha-task-types/bear.jpg)</h2>|<h2>选择熊</h2>|
|<h2>![](Funcaptcha-task-types/mouse.jpg)</h2>|<h2>选择老鼠</h2>|
|<h2>![](Funcaptcha-task-types/butterfly.jpg)</h2>|<h2>选择蝴蝶</h2>|
|<h2>![](Funcaptcha-task-types/monkey.jpg)</h2>|<h2>选择猴子</h2>|
|<h2>![](Funcaptcha-task-types/bread.jpg)</h2>|<h2>选择面包</h2>|
|<h2>![](Funcaptcha-task-types/lobster.jpg)</h2>|<h2>选择龙虾</h2>|
|<h2>![](Funcaptcha-task-types/kangaroo.jpg)</h2>|<h2>选择袋鼠</h2>|
|<h2>![](Funcaptcha-task-types/deer.jpg)</h2>|<h2>选择鹿</h2>|
|<h2>![](Funcaptcha-task-types/apple.jpg)</h2>|<h2>选择苹果</h2>|
|<h2>![](Funcaptcha-task-types/ant.jpg)</h2>|<h2>选择蚂蚁</h2>|
|<h2>![](Funcaptcha-task-types/snake.jpg)</h2>|<h2>选择蛇</h2>|
|<h2>![](Funcaptcha-task-types/icecream.jpg)</h2>|<h2>选择冰淇淋</h2>|
|<h2>![](Funcaptcha-task-types/owl.gif)</h2>|<h2>选择猫头鹰</h2>|
|<h2>![](Funcaptcha-task-types/pants.gif)</h2>|<h2>选择裤子</h2>|
|<h2>![](Funcaptcha-task-types/cactus.jpg)</h2>|<h2>选择仙人掌</h2>|
|<h2>![](Funcaptcha-task-types/calculator.jpg)</h2>|<h2>选择计算器</h2>|
|<h2>![](Funcaptcha-task-types/shoe.jpg)</h2>|<h2>选择鞋子</h2>|
|<h2>![](Funcaptcha-task-types/scissors.jpg)</h2>|<h2>选择剪刀</h2>|
|<h2>![](Funcaptcha-task-types/lion.gif)</h2>|<h2>选择狮子</h2>|
|<h2>![](Funcaptcha-task-types/crab.jpg)</h2>|<h2>选择螃蟹</h2>|
|<h2>![](Funcaptcha-task-types/donut.jpg)</h2>|<h2>选择甜甜圈</h2>|
|<h2>![](Funcaptcha-task-types/dog.jpg)</h2>|<h2>选择狗</h2>|
|<h2>![](Funcaptcha-task-types/bee.jpg)</h2>|<h2>选择蜜蜂</h2>|
|<h2>![](Funcaptcha-task-types/banana.jpg)</h2>|<h2>选择香蕉</h2>|
|<h2>![](Funcaptcha-task-types/parrot.gif)</h2>|<h2>选择鹦鹉</h2>|
|<h2>![](Funcaptcha-task-types/octopus.jpg)</h2>|<h2>选择章鱼</h2>|
|<h2>![](Funcaptcha-task-types/pencil.gif)</h2>|<h2>选择铅笔</h2>|
|<h2>![](Funcaptcha-task-types/lamp.gif)</h2>|<h2>选择灯</h2>|
|<h2>![](Funcaptcha-task-types/lock.gif)</h2>|<h2>选择锁</h2>|
|<h2>![](Funcaptcha-task-types/turtle.gif)</h2>|<h2>选择乌龟</h2>|
|<h2>![](Funcaptcha-task-types/camel.gif)</h2>|<h2>选择骆驼</h2>|
|<h2>![](Funcaptcha-task-types/horse.jpg)</h2>|<h2>选择马</h2>|
|<h2>![](Funcaptcha-task-types/pizza.jpg)</h2>|<h2>选择披萨</h2>|
|<h2>![](Funcaptcha-task-types/bat.jpg)</h2>|<h2>选择蝙蝠</h2>|
|<h2>![](Funcaptcha-task-types/watermelon.jpg)</h2>|<h2>选择西瓜</h2>|
|<h2>![](Funcaptcha-task-types/controller.gif)</h2>|<h2>选择控制器</h2>|
|<h2>![](Funcaptcha-task-types/rabbit.jpg)</h2>|<h2>选择兔子</h2>|
|<h2>![](Funcaptcha-task-types/pineapple.jpg)</h2>|<h2>选择菠萝</h2>|
|<h2>![](Funcaptcha-task-types/snail.jpg)</h2>|<h2>选择蜗牛</h2>|
|<h2>![](Funcaptcha-task-types/glasses.jpg)</h2>|<h2>选择眼镜</h2>|
|<h2>![](Funcaptcha-task-types/key.gif)</h2>|<h2>选择钥匙</h2>|
|<h2>![](Funcaptcha-task-types/hotdog.gif)</h2>|<h2>选择热狗</h2>|
|<h2>![](Funcaptcha-task-types/helmet.gif)</h2>|<h2>选择头盔</h2>|
|<h2>![](Funcaptcha-task-types/sock.gif)</h2>|<h2>选择袜子</h2>|
|<h2>![](Funcaptcha-task-types/starfish.gif)</h2>|<h2>选择海星</h2>|
|<h2>![](Funcaptcha-task-types/frog.gif)</h2>|<h2>选择青蛙</h2>|
|<h2>![](Funcaptcha-task-types/printer.jpg)</h2>|<h2>选择打印机</h2>|
|<h2>![](Funcaptcha-task-types/umbrella.gif)</h2>|<h2>选择雨伞</h2>|
|<h2>![](Funcaptcha-task-types/giraffe.jpg)</h2>|<h2>选择长颈鹿</h2>|
|<h2>![](Funcaptcha-task-types/spaceship.gif)</h2>|<h2>选择宇宙飞船</h2>|
|<h2>![](Funcaptcha-task-types/boat.gif)</h2>|<h2>选择船</h2>|
|<h2>![](Funcaptcha-task-types/wrong-shadow-2.jpg)</h2>|<h2>选择错误的阴影</h2>|
|<h2>![](Funcaptcha-task-types/helicopter.gif)</h2>|<h2>选择直升机</h2>|
|<h2>![](Funcaptcha-task-types/refrigerator.jpg)</h2>|<h2>选择冰箱</h2>|
|<h2>![](Funcaptcha-task-types/couch.jpg)</h2>|<h2>选择沙发</h2>|
|<h2>![](Funcaptcha-task-types/money.jpg)</h2>|<h2>选择钱币</h2>|
|<h2>![](Funcaptcha-task-types/mushroom.jpg)</h2>|<h2>选择蘑菇</h2>|
|<h2>![](Funcaptcha-task-types/fence.jpg)</h2>|<h2>选择栅栏</h2>|
|<h2>![](Funcaptcha-task-types/car.jpg)</h2>|<h2>选择汽车</h2>|
|<h2>![](Funcaptcha-task-types/wristwatch.jpg)</h2>|<h2>选择手表</h2>|
|<h2>![](Funcaptcha-task-types/alien.jpg)</h2>|<h2>选择外星人</h2>|
|<h2>![](Funcaptcha-task-types/fan.jpg)</h2>|<h2>选择风扇</h2>|
|<h2>![](Funcaptcha-task-types/crown.jpg)</h2>|<h2>选择皇冠</h2>|
|<h2>![](Funcaptcha-task-types/burger.jpg)</h2>|<h2>选择汉堡</h2>|
|<h2>![](Funcaptcha-task-types/train.jpg)</h2>|<h2>选择火车</h2>|
|<h2>![](Funcaptcha-task-types/trophy.jpg)</h2>|<h2>选择奖杯</h2>|
|<h2>![](Funcaptcha-task-types/aquarium.jpg)</h2>|<h2>选择水族馆</h2>|
|<h2>![](Funcaptcha-task-types/anchor.jpg)</h2>|<h2>选择锚</h2>|
|<h2>![](Funcaptcha-task-types/toaster.jpg)</h2>|<h2>选择烤箱</h2>|
|<h2>![](Funcaptcha-task-types/stapler.jpg)</h2>|<h2>选择订书机</h2>|
|<h2>![](Funcaptcha-task-types/bicycle.jpg)</h2>|<h2>选择自行车</h2>|
|<h2>![](Funcaptcha-task-types/guitar.jpg)</h2>|<h2>选择吉他</h2>|
|<h2>![](Funcaptcha-task-types/fire.jpg)</h2>|<h2>选择火焰</h2>|
|<h2>![](Funcaptcha-task-types/flower.jpg)</h2>|<h2>选择花朵</h2>|
|<h2>![](Funcaptcha-task-types/snowman.jpg)</h2>|<h2>选择雪人</h2>|
|<h2>![](Funcaptcha-task-types/ball.jpg)</h2>|<h2>选择球</h2>|
|<h2>![](Funcaptcha-task-types/ring.jpg)</h2>|<h2>选择戒指</h2>|
|<h2>![](Funcaptcha-task-types/camera.jpg)</h2>|<h2>选择相机</h2>|
|<h2>![](Funcaptcha-task-types/rotate-image.png)</h2>|<h2>类型的验证码，需要旋转图像</h2>|
##
