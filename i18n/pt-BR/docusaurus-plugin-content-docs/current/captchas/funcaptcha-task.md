---
sidebar_position: 3
sidebar_label: FunCaptchaTask
draft: true
---

# FunCaptchaTask
Este tipo de tarefa resolve o FunCaptcha. Seu aplicativo envia o endereço do site, chave pública e proxy.

O resultado da solução da tarefa é um token para o formulário de envio.

:::warning **Atenção!**
Se o proxy for autorizado por IP, certifique-se de adicionar **116.203.55.208** à lista de permissões.
:::

## **Estrutura do Objeto**

|**Parâmetro**|**Tipo**|**Obrigatório**|**Valor**|
| :- | :- | :- | :- |
|type|String|sim|**FunCaptchaTaskProxyless** ou **FunCaptchaTask** (ao usar proxy).|
|websiteURL|String|sim|Endereço da página com FunCaptcha.|
|funcaptchaApiJSSubdomain|String|não|Um subdomínio especial do funcaptcha.com, de onde o widget JS deve ser carregado. Pode ser encontrado em um elemento chamado `fc-token` - o valor após o `surl`. É necessário se você usar um domínio diferente de `client-api.arkoselabs.com`.|
|websitePublicKey|String|sim|Chave do FunCaptcha.<br/> `<div id="funcaptcha" data-pkey="AQUELA_CHAVE"></div>`|
|data|String|não|Parâmetro adicional que pode ser exigido pela implementação do FunCaptcha.<br/> Use esta propriedade para enviar o valor "blob" como uma matriz em formato string. Veja o exemplo de como pode ser: `{"blob":"AQUI_VAI_O_VALOR_DO_blob"}`*|
|proxyType|String|sim (se estiver usando **FunCaptchaTask**)|Tipo do proxy<br/>**http** - proxy http/https usual;<br/>**https** - use isso apenas se "http" não funcionar (requerido por alguns servidores proxy personalizados);<br />**socks4** - proxy socks4;<br />**socks5** - proxy socks5.|
|proxyAddress|String|sim (se estiver usando **FunCaptchaTask**)|<p>Endereço IP do proxy IPv4/IPv6. Não é permitido usar:</p><p>- nomes de host em vez de IPs</p><p>- proxies transparentes (onde o IP do cliente é visível)</p><p>- proxies de redes locais (192.., 10.., 127...).</p>|
|proxyPort|Integer|sim (se estiver usando **FunCaptchaTask**)|Porta do proxy.|
|proxyLogin|String|não|Login do proxy.|
|proxyPassword|String|não|Senha do proxy.|
|userAgent|String|sim|User-Agent do navegador usado na emulação.|
|cookies|String|não|<p>Cookies adicionais que devem ser usados durante a interação com a página de destino.</p><p>**Formato**: cookiename1=cookievalue1; cookiename2=cookievalue2</p>|

## **Exemplo de Requisição**

:::info Método
```http
https://api.capmonster.cloud/createTask
```
:::

### FunCaptchaTask (Com proxy)
```json
{
  "clientKey":"API_KEY",
  "task": {
    "type":"FunCaptchaTask",
    "websiteURL":"http://meusite.com/",
    "funcaptchaApiJSSubdomain":"meusite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",
    "proxyType":"http",
    "proxyAddress":"8.8.8.8",
    "proxyPort":8080,
    "proxyLogin":"proxyLoginAqui",
    "proxyPassword":"proxySenhaAqui",
    "userAgent":"userAgentPlaceholder"
  }
}
```
### FunCaptchaTaskProxyless (sem proxy)
```json
{
  "clientKey":"API_KEY",
  "task": {
    "type":"FunCaptchaTaskProxyless",
    "websiteURL":"http://meusite.com/",
    "funcaptchaApiJSSubdomain":"meusite-api.funcaptcha.com",
    "data": "{\"blob\":\"dyXvXANMbHj1iDyz.Qj97JtSqR2n%2BuoY1V%2FbdgbrG7p%2FmKiqdU9AwJ6MifEt0np4vfYn6TTJDJEfZDlcz9Q1XMn9przeOV%2FCr2%2FIpi%2FC1s%3D\"}",
    "websitePublicKey":"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC"
  }
}
```

**Exemplo de Resposta**

```json
{
  "errorId":0,
  "taskId":407533072

}
```

## **Obtendo o resultado**

:::info Método
```http
https://api.capmonster.cloud/getTaskResult
```
:::

Use o método [getTaskResult](../api/methods/get-task-result.md) para solicitar a resposta do FunCaptcha. Você receberá a resposta dentro de um período de 10 - 30 segundos, dependendo da carga de trabalho do serviço.

|**Propriedade**|**Tipo**|**Descrição**|
| :- | :- | :- |
|token|String|Token FunCaptcha que precisa ser inserido no formulário.|

**Exemplo:**
```json
{
  "errorId":0,
  "status":"ready",
  "solution": {
    "token":"36859d1086acb06e7.08293101|r=ap-southeast-1|metabgclr=%23ffffff|guitextcolor=%23555555|metaiconclr=%23cccccc|meta=3|pk=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|injs=https://funcaptcha.com/fc/api/nojs/?pkey=69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC|rid=11|cdn\_url=https://cdn.funcaptcha.com/fc|surl=https://funcaptcha.com"
  }
}
```

## Tipos de tarefas suportadas

|**Tipo**|**Descrição**|  
| :- | :- |  
|![](Funcaptcha-task-types/matching-reflection.png)|Escolha a imagem com o reflexo correspondente|  
|![](Funcaptcha-task-types/different-object-silhouette.png)|Escolha a sombra com uma silhueta de objeto diferente|  
|![](Funcaptcha-task-types/two-identical-objects.gif)|Escolha um quadrado que mostra dois objetos idênticos|  
|![](Funcaptcha-task-types/dice-same-icon.gif)|Escolha o par de dados com o mesmo ícone voltado para cima|  
|![](Funcaptcha-task-types/dice-to-4.jpg)|Escolha o par de dados cujas faces superiores somam 4|  
|![](Funcaptcha-task-types/dice-5.jpg)|Escolha o par de dados cujas faces superiores somam 5|  
|![](Funcaptcha-task-types/dice-6.jpg)|Escolha o par de dados cujas faces superiores somam 6|  
|![](Funcaptcha-task-types/dice-7.jpg)|Escolha o par de dados cujas faces superiores somam 7|  
|![](Funcaptcha-task-types/dice-8.jpg)|Escolha o par de dados cujas faces superiores somam 8|  
|![](Funcaptcha-task-types/dice-10.jpg)|Escolha o par de dados cujas faces superiores somam 10|  
|![](Funcaptcha-task-types/dice-14.jpg)|Escolha o par de dados cujas faces superiores somam 14|  
|![](Funcaptcha-task-types/darts.jpg)|Escolha a imagem onde os dardos somam 8/10/12/14|  
|![](Funcaptcha-task-types/animals-directions.jpg)|Escolha a imagem onde todos os animais estão caminhando na mesma direção da seta|  
|![](Funcaptcha-task-types/shadows-icons-top.jpg)|Escolha a sombra que corresponde aos ícones no topo da imagem|  
|![](Funcaptcha-task-types/matching-cards.jpg)|Escolha as cartas correspondentes|  
|![](Funcaptcha-task-types/mouse-cheese.jpg)|Escolha o rato que pode alcançar todos os queijos no labirinto|  
|![](Funcaptcha-task-types/animal-wrong-head.jpg)|Selecione o animal com a cabeça errada|  
|![](Funcaptcha-task-types/penguin.jpg)|Escolha o pinguim|  
|![](Funcaptcha-task-types/rotate-animal.jpg)|Use as setas para girar o animal para a direção da mão|  
|![](Funcaptcha-task-types/image-correct.gif)|Escolha a imagem que está na posição correta|  
|![](Funcaptcha-task-types/spiral-galaxy.gif)|Escolha a galáxia espiral|  
|![](Funcaptcha-task-types/one-rope.jpg)|Escolha a imagem com apenas uma corda|  
|![](Funcaptcha-task-types/split-in-half.png)|Escolha o cubo com ícones divididos ao meio|  
|![](Funcaptcha-task-types/puzzle-wrong-pieces.png)|Escolha o quebra-cabeça com as peças erradas|  
|![](Funcaptcha-task-types/amount-animals.jpg)|Escolha a imagem onde o número corresponde à quantidade de animais|  
|![](Funcaptcha-task-types/mouse-cheese-2.jpg)|Escolha o rato que não consegue alcançar o queijo|  
|![](Funcaptcha-task-types/total-fingers-3.jpg)|Escolha a imagem onde o total de dedos somam 3|  
|![](Funcaptcha-task-types/wrong-shadow.jpg)|Escolha a sombra errada|  
|![](Funcaptcha-task-types/square-three-objects.jpg)|Escolha um quadrado que mostra três objetos idênticos|  
|![](Funcaptcha-task-types/move-person-cross.png)|Use as setas para mover a pessoa até o local indicado pela cruz|  
|![](Funcaptcha-task-types/move-person-circle.jpg)|Use as setas para mover a pessoa até o ícone indicado pelo círculo colorido|  
|![](Funcaptcha-task-types/rotate-animal-2.png)|Use as setas para girar o animal com o mesmo ícone para que fique na direção da mão|  
|![](Funcaptcha-task-types/number-objects.png)|Use as setas para ajustar o número de objetos até corresponder à imagem à esquerda|  
|![](Funcaptcha-task-types/dice-matches.png)|Altere os dados até que o número corresponda à imagem à esquerda|  
|![](Funcaptcha-task-types/move-train.png)|Use as setas para mover o trem até as coordenadas indicadas na imagem à esquerda|  
|![](Funcaptcha-task-types/number-rocks.png)|Ajuste o número de pedras para corresponder ao número à esquerda|  
|![](Funcaptcha-task-types/move-person-indicated-seat.png)|Use as setas para mover a pessoa até o assento indicado|  
|![](Funcaptcha-task-types/koala.jpg)|Escolha o coala|  
|![](Funcaptcha-task-types/ladybug.gif)|Escolha a joaninha|  
|![](Funcaptcha-task-types/pig.jpg)|Escolha o porco|  
|![](Funcaptcha-task-types/zebra.jpg)|Escolha a zebra|  
|![](Funcaptcha-task-types/shark.jpg)|Escolha o tubarão|  
|![](Funcaptcha-task-types/dinosaur.jpg)|Escolha o dinossauro|  
|![](Funcaptcha-task-types/duck.jpg)|Escolha o pato|  
|![](Funcaptcha-task-types/chicken.jpg)|Escolha a galinha|  
|![](Funcaptcha-task-types/rhino.jpg)|Escolha o rinoceronte|  
|![](Funcaptcha-task-types/dolphin.jpg)|Escolha o golfinho|  
|![](Funcaptcha-task-types/grapes.jpg)|Escolha as uvas|  
|![](Funcaptcha-task-types/goat.jpg)|Escolha a cabra|  
|![](Funcaptcha-task-types/elephant.jpg)|Escolha o elefante|  
|![](Funcaptcha-task-types/seal.jpg)|Escolha a foca|  
|![](Funcaptcha-task-types/bear.jpg)|Escolha o urso|  
|![](Funcaptcha-task-types/mouse.jpg)|Escolha o rato|  
|![](Funcaptcha-task-types/butterfly.jpg)|Escolha a borboleta|  
|![](Funcaptcha-task-types/monkey.jpg)|Escolha o macaco|  
|![](Funcaptcha-task-types/bread.jpg)|Escolha o pão|  
|![](Funcaptcha-task-types/lobster.jpg)|Escolha a lagosta|  
|![](Funcaptcha-task-types/kangaroo.jpg)|Escolha o canguru|  
|![](Funcaptcha-task-types/deer.jpg)|Escolha o cervo|  
|![](Funcaptcha-task-types/apple.jpg)|Escolha a maçã|  
|![](Funcaptcha-task-types/ant.jpg)|Escolha a formiga|  
|![](Funcaptcha-task-types/snake.jpg)|Escolha a cobra|  
|![](Funcaptcha-task-types/icecream.jpg)|Escolha o sorvete|  
|![](Funcaptcha-task-types/owl.gif)|Escolha a coruja|  
|![](Funcaptcha-task-types/pants.gif)|Escolha as calças|  
|![](Funcaptcha-task-types/cactus.jpg)|Escolha o cacto|  
|![](Funcaptcha-task-types/calculator.jpg)|Escolha a calculadora|  
|![](Funcaptcha-task-types/shoe.jpg)|Escolha o sapato|  
|![](Funcaptcha-task-types/scissors.jpg)|Escolha a tesoura|  
|![](Funcaptcha-task-types/lion.gif)|Escolha o leão|  
|![](Funcaptcha-task-types/crab.jpg)|Escolha o caranguejo|  
|![](Funcaptcha-task-types/donut.jpg)|Escolha o donut|  
|![](Funcaptcha-task-types/dog.jpg)|Escolha o cachorro|  
|![](Funcaptcha-task-types/bee.jpg)|Escolha a abelha|  
|![](Funcaptcha-task-types/banana.jpg)|Escolha a banana|  
|![](Funcaptcha-task-types/parrot.gif)|Escolha o papagaio|  
|![](Funcaptcha-task-types/octopus.jpg)|Escolha o polvo|  
|![](Funcaptcha-task-types/pencil.gif)|Escolha o lápis|  
|![](Funcaptcha-task-types/lamp.gif)|Escolha a lâmpada|  
|![](Funcaptcha-task-types/lock.gif)|Escolha o cadeado|  
|![](Funcaptcha-task-types/turtle.gif)|Escolha a tartaruga|  
|![](Funcaptcha-task-types/camel.gif)|Escolha o camelo|  
|![](Funcaptcha-task-types/horse.jpg)|Escolha o cavalo|  
|![](Funcaptcha-task-types/pizza.jpg)|Escolha a pizza|  
|![](Funcaptcha-task-types/bat.jpg)|Escolha o morcego|  
|![](Funcaptcha-task-types/watermelon.jpg)|Escolha a melancia|  
|![](Funcaptcha-task-types/controller.gif)|Escolha o controle|  
|![](Funcaptcha-task-types/rabbit.jpg)|Escolha o coelho|  
|![](Funcaptcha-task-types/pineapple.jpg)|Escolha o abacaxi|  
|![](Funcaptcha-task-types/snail.jpg)|Escolha o caracol|  
|![](Funcaptcha-task-types/glasses.jpg)|Escolha os óculos|  
|![](Funcaptcha-task-types/key.gif)|Escolha a chave|  
|![](Funcaptcha-task-types/hotdog.gif)|Escolha o cachorro-quente|  
|![](Funcaptcha-task-types/helmet.gif)|Escolha o capacete|  
|![](Funcaptcha-task-types/sock.gif)|Escolha a meia|  
|![](Funcaptcha-task-types/starfish.gif)|Escolha a estrela-do-mar|  
|![](Funcaptcha-task-types/frog.gif)|Escolha o sapo|  
|![](Funcaptcha-task-types/printer.jpg)|Escolha a impressora|  
|![](Funcaptcha-task-types/umbrella.gif)|Escolha o guarda-chuva|  
|![](Funcaptcha-task-types/giraffe.jpg)|Escolha a girafa|  
|![](Funcaptcha-task-types/spaceship.gif)|Escolha a nave espacial|  
|![](Funcaptcha-task-types/boat.gif)|Escolha o barco|  
|![](Funcaptcha-task-types/wrong-shadow-2.jpg)|Escolha a sombra errada|  
|![](Funcaptcha-task-types/helicopter.gif)|Escolha o helicóptero|  
|![](Funcaptcha-task-types/refrigerator.jpg)|Escolha a geladeira|  
|![](Funcaptcha-task-types/couch.jpg)|Escolha o sofá|  
|![](Funcaptcha-task-types/money.jpg)|Escolha o dinheiro|  
|![](Funcaptcha-task-types/mushroom.jpg)|Escolha o cogumelo|  
|![](Funcaptcha-task-types/fence.jpg)|Escolha a cerca|  
|![](Funcaptcha-task-types/car.jpg)|Escolha o carro|  
|![](Funcaptcha-task-types/wristwatch.jpg)|Escolha o relógio de pulso|  
|![](Funcaptcha-task-types/alien.jpg)|Escolha o alienígena|  
|![](Funcaptcha-task-types/fan.jpg)|Escolha o ventilador|  
|![](Funcaptcha-task-types/crown.jpg)|Escolha a coroa|  
|![](Funcaptcha-task-types/burger.jpg)|Escolha o hambúrguer|  
|![](Funcaptcha-task-types/train.jpg)|Escolha o trem|  
|![](Funcaptcha-task-types/trophy.jpg)|Escolha o troféu|  
|![](Funcaptcha-task-types/aquarium.jpg)|Escolha o aquário|  
|![](Funcaptcha-task-types/anchor.jpg)|Escolha a âncora|  
|![](Funcaptcha-task-types/toaster.jpg)|Escolha a torradeira|  
|![](Funcaptcha-task-types/stapler.jpg)|Escolha o grampeador|  
|![](Funcaptcha-task-types/bicycle.jpg)|Escolha a bicicleta|  
|![](Funcaptcha-task-types/guitar.jpg)|Escolha o violão|  
|![](Funcaptcha-task-types/fire.jpg)|Escolha o fogo|  
|![](Funcaptcha-task-types/flower.jpg)|Escolha a flor|  
|![](Funcaptcha-task-types/snowman.jpg)|Escolha o boneco de neve|  
|![](Funcaptcha-task-types/ball.jpg)|Escolha a bola|  
|![](Funcaptcha-task-types/ring.jpg)|Escolha o anel|  
|![](Funcaptcha-task-types/camera.jpg)|Escolha a câmera|  
|![](Funcaptcha-task-types/rotate-image.png)|Tipo de captcha onde você precisa girar a imagem|  