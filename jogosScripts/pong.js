let dimensionar = canva.width/290
let posicionar = canva.width/10
let teclas = {}
let bola={
    x: canva.width/2 - 10*dimensionar,
    y: canva.height/2 - 10*dimensionar,
    altura: 10*dimensionar,
    largura: 10*dimensionar,
    dirx: -1,
    dirY: 1,
    mod: 0,
    speed: 1
}
let esquerda = {
    x: 0,
    y: 12.5,
    altura: 7.5,
    largura: canva.width,
    score: 0,
    speed: 3
}
let direita = {
    x: canva.width/2 - 12.5,
    y: canva.height - 45*dimensionar,
    altura: 7.5,
    largura: 35*dimensionar,
    score: 0,
    speed: 3
}

function movebloco(){
    if(pincel.ativo)
        direita.x = posicao.x
    if(key.ArrowLeft.pressionado && direita.x > 0)
    {
        direita.x -= direita.speed
        console.log('opa')
    }
    if(key.ArrowRight.pressionado && direita.x + direita.largura < canva.width)
    {
       direita.x += direita.speed
    }
}
function movebola(){
    if(esquerda.y + esquerda.altura >= bola.y && esquerda.y <= bola.y + bola.altura && esquerda.y + esquerda.altura > bola.y)
    {
        bola.dirY = 1 
        bola.mod += 0.12
    } 
    if(bola.y + bola.altura >= direita.y && bola.y <= direita.y && bola.x + bola.largura <= direita.x + direita.largura && bola.x > direita.x){
        bola.dirY = -1
        bola.mod += 0.12
    }
    if(bola.x <= 0){
        bola.dirx = 1
        bola.mod += 0.12
    } 
    if(bola.x + bola.largura >= canva.width){
        bola.dirx = -1
        bola.mod += 0.12
    }

    bola.x += (bola.speed + bola.mod) * bola.dirx
    bola.y += (bola.speed + bola.mod) * bola.dirY

    if(bola.y + bola.altura > direita.y + direita.altura + 20 ){
        newgame("Player 2")
    } 
}
function newgame(winner){
    if(winner == "Player 1"){
        esquerda.score++
    } else{
        direita.score++
    }
    direita.x = canva.width/2 - 12.5
    bola.y = canva.height/2 - bola.altura/2 
    bola.x = canva.width/2 - bola.largura/2
    bola.mod = 0
}
function desenhar(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canva.width, canva.height)
    movebloco()
    movebola()
    ctx.fillStyle = "white"
    ctx.fillRect(esquerda.x,esquerda.y,esquerda.largura,esquerda.altura)
    ctx.fillRect(direita.x,direita.y,direita.largura,direita.altura)
    ctx.fillRect(bola.x,bola.y,bola.largura,bola.altura)
    ctx.font = "10px Arial"
    ctx.fillText("Player  1: " + esquerda.score, 25, 10)
    ctx.fillText('Player 2: ' + direita.score, canva.width - 80, 10) 
}
setInterval(desenhar, 15)

