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
    speed: 1,
    desenhar(){
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}
let cima = {
    x: 30*dimensionar,
    y: 12.5,
    altura: 7.5,
    largura: canva.width - 170*dimensionar,
    score: 0,
    speed: 3,
    desenhar(){
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}
let cima2 = {
    x: 175*dimensionar,
    y: 12.5,
    altura: 7.5,
    largura: canva.width - 230*dimensionar,
    score: 0,
    speed: 3,
    desenhar(){
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}
let baixo = {
    x: canva.width/2 - 12.5,
    y: canva.height - 45*dimensionar,
    altura: 7.5,
    largura: 35*dimensionar,
    score: 0,
    speed: 3,
    desenhar(){
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}

function movebloco(){
    if(pincel.ativo)
        baixo.x = pincel.pos.x
    if(key.ArrowLeft.pressionado && baixo.x > 0)
    {
        baixo.x -= baixo.speed
        console.log('opa')
    }
    if(key.ArrowRight.pressionado && baixo.x + baixo.largura < canva.width)
    {
       baixo.x += baixo.speed
    }
}
function movebola(){
    if(cima.y + cima.altura >= bola.y && cima.y <= bola.y + bola.altura && cima.x + cima.largura > bola.x && cima.x < bola.x)
    {
        bola.dirY = 1 
        bola.mod += 0.12
    } 
    if(cima2.y + cima2.altura >= bola.y && cima2.y <= bola.y + bola.altura && cima2.x + cima2.largura > bola.x && cima2.x < bola.x)
    {
        bola.dirY = 1 
        bola.mod += 0.12
    } 
    if(bola.y + bola.altura >= baixo.y && bola.y <= baixo.y && bola.x + bola.largura  <= baixo.x + baixo.largura + 6*dimensionar && bola.x > baixo.x - 6*dimensionar){
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

    if(bola.y + bola.altura > baixo.y + baixo.altura ){
        newgame("Player 1")
    } else if(bola.y < cima.y){
        newgame('Jogo')
    }
}
function newgame(winner){
    if(winner == "Player 1"){
        cima.score++
    } else{
        pincel.ativo = false
        baixo.score++
    }
    baixo.x = canva.width/2 - 12.5
    bola.y = canva.height/2 - bola.altura/2 
    bola.x = canva.width/2 - bola.largura/2
    bola.dirY = 1
    bola.mod = 0
}
function desenhar(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canva.width, canva.height)
    movebloco()
    movebola()
    ctx.fillStyle = "white"
    cima.desenhar()
    cima2.desenhar()
    baixo.desenhar()
    bola.desenhar()
    ctx.font = "20px Arial"
    ctx.fillText("Jogador: " + cima.score, 25, 40*dimensionar)
    ctx.fillText('Jogo: ' + baixo.score, canva.width - 50*dimensionar, 40*dimensionar) 
    if(baixo.score == 3){
        vencer()
    }
}
let pong = setInterval(desenhar, 15)

function vencer(){
    clearInterval(pong)
    //dica('../','music')
}

