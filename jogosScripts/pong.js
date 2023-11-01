let dimensionar = canva.width/1500*2.45
let posicionar = canva.width/10
let teclas = {}
let bola={
    x: canva.width/2 - 10/dimensionar,
    y: canva.height/2 - 10/dimensionar,
    altura: 10/dimensionar,
    largura: 10/dimensionar,
    dirx: -1,
    dirY: 1,
    mod: 0,
    speed: 1
}
let esquerda = {
    x: 2.5,
    y: canva.height/2 - 12.5,
    altura: 25,
    largura: 7.5,
    score: 0,
    speed: 3
}
let direita = {
    x: 290,
    y: canva.height/2 - 12.5,
    altura: 25,
    largura: 7.5,
    score: 0,
    speed: 3
}

function movebloco(){
    if(key.ArrowUp.pressionado && esquerda.y > 0)
    {
        esquerda.y -= esquerda.speed
    }
    if(key.ArrowDown.pressionado && esquerda.y + esquerda.altura < canva.height)
    {
       esquerda.y += esquerda.speed
    }
    if(38 in teclas && direita.y > 0){
        direita.y -= direita.speed
    }
    if(40 in teclas && direita.y + direita.altura < canva.height){
        direita.y += direita.speed
    }
}
function movebola(){
    if(esquerda.x + esquerda.largura >= bola.x && esquerda.y <= bola.y + bola.altura && esquerda.y + esquerda.altura > bola.y)
    {
        bola.dirx = 1 
        bola.mod += 0.09
    } 
    if(bola.y + bola.altura >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.largura >= direita.x){
        bola.dirx = -1
        bola.mod += 0.09
    }
    if(bola.y <= 0){
        bola.dirY = 1
        bola.mod += 0.09
    } 
    if(bola.y + bola.altura >= canva.height){
        bola.dirY = -1
        bola.mod += 0.09
    }
    bola.x += (bola.speed + bola.mod) * bola.dirx
    bola.y += (bola.speed + bola.mod) * bola.dirY
    if(bola.x < esquerda.x + esquerda.largura - 2.5){
        newgame("Player 2")
    } else if(bola.x + bola.largura > direita.x + 7.5){
        newgame('Player 1')
    }
}
function newgame(winner){
    if(winner == "Player 1"){
        esquerda.score++
    } else{
        direita.score++
    }
    esquerda.y = canva.height/2 - esquerda.altura/2 
    direita.y = esquerda.y
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

