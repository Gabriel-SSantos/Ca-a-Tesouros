let src = './recursos/parede.png'
let srcpersonagem = './recursos/personagem.png'
let dimensionar = canva.width/1500*2.4
let posicionar = canva.width/10
let bnt = document.getElementById('botoesSec')
console.log(dimensionar)

let paredesLabirinto = [
    new Parede({posicao: {x: 14*dimensionar + posicionar, y: 15*dimensionar}, dimensao: {l: 488*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 16*dimensionar + posicionar, y: 598*dimensionar}, dimensao: {l: 487*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 45*dimensionar + posicionar, y: 52*dimensionar}, dimensao: {l: 43*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 79*dimensionar + posicionar, y: 94*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 23*dimensionar + posicionar, y: 129*dimensionar}, dimensao: {l: 98*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 21*dimensionar + posicionar, y: 92*dimensionar}, dimensao: {l: 34*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 110*dimensionar + posicionar, y: 53*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 46*dimensionar + posicionar, y: 171*dimensionar}, dimensao: {l: 98*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 46*dimensionar + posicionar, y: 209*dimensionar}, dimensao: {l: 74*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 110*dimensionar + posicionar, y: 363*dimensionar}, dimensao: {l: 167*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 237*dimensionar + posicionar, y: 441*dimensionar}, dimensao: {l: 73*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 288*dimensionar}, dimensao: {l: 136*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 333*dimensionar + posicionar, y: 400*dimensionar}, dimensao: {l: 71*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 332*dimensionar + posicionar, y: 480*dimensionar}, dimensao: {l: 106*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 403*dimensionar}, dimensao: {l: 43*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 480*dimensionar}, dimensao: {l: 104*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 300*dimensionar + posicionar, y: 519*dimensionar}, dimensao: {l: 36*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 176*dimensionar + posicionar, y: 519*dimensionar}, dimensao: {l: 101*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 266*dimensionar + posicionar, y: 559*dimensionar}, dimensao: {l: 41*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 41*dimensionar + posicionar, y: 481*dimensionar}, dimensao: {l: 77*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 80*dimensionar + posicionar, y: 555*dimensionar}, dimensao: {l: 75*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 110*dimensionar + posicionar, y: 520*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 364*dimensionar + posicionar, y: 520*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 427*dimensionar + posicionar, y: 519*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 427*dimensionar + posicionar, y: 558*dimensionar}, dimensao: {l: 41*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 16*dimensionar + posicionar, y: 245*dimensionar}, dimensao: {l: 74*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 45*dimensionar + posicionar, y: 272*dimensionar}, dimensao: {l: 75*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 15*dimensionar + posicionar, y: 323*dimensionar}, dimensao: {l: 72*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 45*dimensionar + posicionar, y: 404*dimensionar}, dimensao: {l: 73*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 17*dimensionar + posicionar, y: 363*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 16*dimensionar + posicionar, y: 450*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 113*dimensionar + posicionar, y: 246*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 140*dimensionar + posicionar, y: 207*dimensionar}, dimensao: {l: 43*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 141*dimensionar + posicionar, y: 287*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 141*dimensionar + posicionar, y: 324*dimensionar}, dimensao: {l: 104*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 149*dimensionar + posicionar, y: 93*dimensionar}, dimensao: {l: 35*dimensionar, a: 11*dimensionar}},src),  
    new Parede({posicao: {x: 174*dimensionar + posicionar, y: 171*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 173*dimensionar + posicionar, y: 52*dimensionar}, dimensao: {l: 44*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 208*dimensionar + posicionar, y: 91*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 237*dimensionar + posicionar, y: 52*dimensionar}, dimensao: {l: 75*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 237*dimensionar + posicionar, y: 131*dimensionar}, dimensao: {l: 74*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 301*dimensionar + posicionar, y: 93*dimensionar}, dimensao: {l: 42*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 333*dimensionar + posicionar, y: 131*dimensionar}, dimensao: {l: 71*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 270*dimensionar + posicionar, y: 171*dimensionar}, dimensao: {l: 131*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 240*dimensionar + posicionar, y: 208*dimensionar}, dimensao: {l: 34*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 273*dimensionar + posicionar, y: 250*dimensionar}, dimensao: {l: 37*dimensionar, a: 11*dimensionar}},src),    
    new Parede({posicao: {x: 333*dimensionar + posicionar, y: 247*dimensionar}, dimensao: {l: 73*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 364*dimensionar + posicionar, y: 360*dimensionar}, dimensao: {l: 44*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 363*dimensionar + posicionar, y: 326*dimensionar}, dimensao: {l: 73*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 429*dimensionar + posicionar, y: 435*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src),     
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 404*dimensionar}, dimensao: {l: 40*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 436*dimensionar + posicionar, y: 364*dimensionar}, dimensao: {l: 58*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 396*dimensionar + posicionar, y: 288*dimensionar}, dimensao: {l: 70*dimensionar, a: 11*dimensionar}},src),     
    new Parede({posicao: {x: 457*dimensionar + posicionar, y: 325*dimensionar}, dimensao: {l: 38*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 365*dimensionar + posicionar, y: 209*dimensionar}, dimensao: {l: 74*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 394*dimensionar + posicionar, y: 92*dimensionar}, dimensao: {l: 43*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 401*dimensionar + posicionar, y: 53*dimensionar}, dimensao: {l: 70*dimensionar, a: 11*dimensionar}},src),
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 91*dimensionar}, dimensao: {l: 37*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 434*dimensionar + posicionar, y: 129*dimensionar}, dimensao: {l: 33*dimensionar, a: 11*dimensionar}},src), 
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 207*dimensionar}, dimensao: {l: 36*dimensionar, a: 11*dimensionar}},src),
    new Parede({posicao: {x: 492*dimensionar + posicionar, y: 20*dimensionar}, dimensao: {l: 11*dimensionar, a: 281*dimensionar}},src), 
    new Parede({posicao: {x: 14*dimensionar + posicionar, y: 15*dimensionar}, dimensao: {l: 11*dimensionar, a: 283*dimensionar}},src), 
    new Parede({posicao: {x: 15*dimensionar + posicionar, y: 324*dimensionar}, dimensao: {l: 11*dimensionar, a: 286*dimensionar}},src), 
    new Parede({posicao: {x: 492*dimensionar + posicionar, y: 325*dimensionar}, dimensao: {l: 11*dimensionar, a: 279*dimensionar}},src),
    new Parede({posicao: {x: 77*dimensionar + posicionar, y: 51*dimensionar}, dimensao: {l: 11*dimensionar, a: 54*dimensionar}},src), 
    new Parede({posicao: {x: 110*dimensionar + posicionar, y: 98*dimensionar}, dimensao: {l: 11*dimensionar, a: 40*dimensionar}},src),
    new Parede({posicao: {x: 140*dimensionar + posicionar, y: 54*dimensionar}, dimensao: {l: 11*dimensionar, a: 162*dimensionar}},src),
    new Parede({posicao: {x: 109*dimensionar + posicionar, y: 209*dimensionar}, dimensao: {l: 11*dimensionar, a: 163*dimensionar}},src),
    new Parede({posicao: {x: 139*dimensionar + posicionar, y: 367*dimensionar}, dimensao: {l: 11*dimensionar, a: 158*dimensionar}},src), 
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 558*dimensionar}, dimensao: {l: 11*dimensionar, a: 41*dimensionar}},src), 
    new Parede({posicao: {x: 236*dimensionar + posicionar, y: 520*dimensionar}, dimensao: {l: 11*dimensionar, a: 51*dimensionar}},src), 
    new Parede({posicao: {x: 296*dimensionar + posicionar, y: 565*dimensionar}, dimensao: {l: 11*dimensionar, a: 35*dimensionar}},src), 
    new Parede({posicao: {x: 364*dimensionar + posicionar, y: 520*dimensionar}, dimensao: {l: 11*dimensionar, a: 54*dimensionar}},src), 
    new Parede({posicao: {x: 269*dimensionar + posicionar, y: 324*dimensionar}, dimensao: {l: 11*dimensionar, a: 126*dimensionar}},src), 
    new Parede({posicao: {x: 299*dimensionar + posicionar, y: 365*dimensionar}, dimensao: {l: 11*dimensionar, a: 86*dimensionar}},src),
    new Parede({posicao: {x: 331*dimensionar + posicionar, y: 290*dimensionar}, dimensao: {l: 11*dimensionar, a: 120*dimensionar}},src),
    new Parede({posicao: {x: 393*dimensionar + posicionar, y: 405*dimensionar}, dimensao: {l: 11*dimensionar, a: 80*dimensionar}},src),
    new Parede({posicao: {x: 333*dimensionar + posicionar, y: 442*dimensionar}, dimensao: {l: 11*dimensionar, a: 131*dimensionar}},src),
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 407*dimensionar}, dimensao: {l: 11*dimensionar, a: 80*dimensionar}},src),
    new Parede({posicao: {x: 298*dimensionar + posicionar, y: 484*dimensionar}, dimensao: {l: 11*dimensionar, a: 45*dimensionar}},src),
    new Parede({posicao: {x: 172*dimensionar + posicionar, y: 369*dimensionar}, dimensao: {l: 11*dimensionar, a: 201*dimensionar}},src),
    new Parede({posicao: {x: 266*dimensionar + posicionar, y: 522*dimensionar}, dimensao: {l: 11*dimensionar, a: 40*dimensionar}},src),
    new Parede({posicao: {x: 53*dimensionar + posicionar, y: 519*dimensionar}, dimensao: {l: 11*dimensionar, a: 84*dimensionar}},src),
    new Parede({posicao: {x: 107*dimensionar + posicionar, y: 408*dimensionar}, dimensao: {l: 11*dimensionar, a: 82*dimensionar}},src),
    new Parede({posicao: {x: 80*dimensionar + posicionar, y: 431*dimensionar}, dimensao: {l: 11*dimensionar, a: 125*dimensionar}},src),
    new Parede({posicao: {x: 393*dimensionar + posicionar, y: 520*dimensionar}, dimensao: {l: 11*dimensionar, a: 79*dimensionar}},src),
    new Parede({posicao: {x: 427*dimensionar + posicionar, y: 482*dimensionar}, dimensao: {l: 11*dimensionar, a: 48*dimensionar}},src),
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 521*dimensionar}, dimensao: {l: 11*dimensionar, a: 47*dimensionar}},src),
    new Parede({posicao: {x: 364*dimensionar + posicionar, y: 404*dimensionar}, dimensao: {l: 11*dimensionar, a: 54*dimensionar}},src),
    new Parede({posicao: {x: 76*dimensionar + posicionar, y: 325*dimensionar}, dimensao: {l: 11*dimensionar, a: 90*dimensionar}},src),
    new Parede({posicao: {x: 172*dimensionar + posicionar, y: 207*dimensionar}, dimensao: {l: 11*dimensionar, a: 90*dimensionar}},src),
    new Parede({posicao: {x: 140*dimensionar + posicionar, y: 289*dimensionar}, dimensao: {l: 11*dimensionar, a: 45*dimensionar}},src),
    new Parede({posicao: {x: 234*dimensionar + posicionar, y: 290*dimensionar}, dimensao: {l: 11*dimensionar, a: 42*dimensionar}},src),
    new Parede({posicao: {x: 173*dimensionar + posicionar, y: 93*dimensionar}, dimensao: {l: 11*dimensionar, a: 87*dimensionar}},src),
    new Parede({posicao: {x: 205*dimensionar + posicionar, y: 173*dimensionar}, dimensao: {l: 11*dimensionar, a: 87*dimensionar}},src),
    new Parede({posicao: {x: 173*dimensionar + posicionar, y: 26*dimensionar}, dimensao: {l: 11*dimensionar, a: 33*dimensionar}},src),
    new Parede({posicao: {x: 206*dimensionar + posicionar, y: 53*dimensionar}, dimensao: {l: 11*dimensionar, a: 93*dimensionar}},src),
    new Parede({posicao: {x: 267*dimensionar + posicionar, y: 52*dimensionar}, dimensao: {l: 11*dimensionar, a: 90*dimensionar}},src),
    new Parede({posicao: {x: 300*dimensionar + posicionar, y: 93*dimensionar}, dimensao: {l: 11*dimensionar, a: 42*dimensionar}},src),
    new Parede({posicao: {x: 332*dimensionar + posicionar, y: 21*dimensionar}, dimensao: {l: 11*dimensionar, a: 73*dimensionar}},src),
    new Parede({posicao: {x: 363*dimensionar + posicionar, y: 53*dimensionar}, dimensao: {l: 11*dimensionar, a: 80*dimensionar}},src),
    new Parede({posicao: {x: 393*dimensionar + posicionar, y: 131*dimensionar}, dimensao: {l: 11*dimensionar, a: 52*dimensionar}},src),
    new Parede({posicao: {x: 237*dimensionar + posicionar, y: 132*dimensionar}, dimensao: {l: 11*dimensionar, a: 120*dimensionar}},src),
    new Parede({posicao: {x: 269*dimensionar + posicionar, y: 208*dimensionar}, dimensao: {l: 11*dimensionar, a: 53*dimensionar}},src),
    new Parede({posicao: {x: 331*dimensionar + posicionar, y: 172*dimensionar}, dimensao: {l: 11*dimensionar, a: 85*dimensionar}},src),
    new Parede({posicao: {x: 362*dimensionar + posicionar, y: 250*dimensionar}, dimensao: {l: 11*dimensionar, a: 120*dimensionar}},src),
    new Parede({posicao: {x: 426*dimensionar + posicionar, y: 326*dimensionar}, dimensao: {l: 11*dimensionar, a: 120*dimensionar}},src),
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 443*dimensionar}, dimensao: {l: 11*dimensionar, a: 54*dimensionar}},src),
    new Parede({posicao: {x: 457*dimensionar + posicionar, y: 288*dimensionar}, dimensao: {l: 11*dimensionar, a: 40*dimensionar}},src),
    new Parede({posicao: {x: 428*dimensionar + posicionar, y: 92*dimensionar}, dimensao: {l: 11*dimensionar, a: 199*dimensionar}},src),
    new Parede({posicao: {x: 394*dimensionar + posicionar, y: 53*dimensionar}, dimensao: {l: 11*dimensionar, a: 50*dimensionar}},src),
    new Parede({posicao: {x: 457*dimensionar + posicionar, y: 129*dimensionar}, dimensao: {l: 11*dimensionar, a: 56*dimensionar}},src),
    new Parede({posicao: {x: 458*dimensionar + posicionar, y: 211*dimensionar}, dimensao: {l: 11*dimensionar, a: 50*dimensionar}},src),
    new Parede({posicao: {x: 301*dimensionar + posicionar, y: 175*dimensionar}, dimensao: {l: 11*dimensionar, a: 48*dimensionar}},src),
    new Parede({posicao: {x: 299*dimensionar + posicionar, y: 258*dimensionar}, dimensao: {l: 11*dimensionar, a: 31*dimensionar}},src),
    new Parede({posicao: {x: 96*dimensionar + posicionar, y: 586*dimensionar}, dimensao: {l: 11*dimensionar, a: 14*dimensionar}},src),
    new Parede({posicao: {x: 127*dimensionar + posicionar, y: 19*dimensionar}, dimensao: {l: 11*dimensionar, a: 18*dimensionar}},src)
//     {posicao: {x: 458, y: 59}, dimensao: {l: 13, a: 17}}

// {posicao: {x: 80, y: 436}, dimensao: {l: 14, a: 15}} 
// {posicao: {x: 45, y: 480}, dimensao: {l: 15, a: 15}}
    
     
     
]

let personagem = new Personagem({posicao: {x: posicionar, y: 306*dimensionar}, dimensao: {l: 15*dimensionar, a: 15*dimensionar}},srcpersonagem)

function desenharLabirinto(){
    bnt.style.display = 'flex'
    ctx.clearRect(0,0,canva.width,canva.height)
    exibir(paredesLabirinto)
    personagem.atualizar()
    colidir(paredesLabirinto,personagem)
    //console.log(quadro[0].x + quadro[0].l + 'y: ' + quadro[0].y)
    if(key.ArrowRight.pressionado)
    {
        personagem.moverDireita(0.3)
        personagem.dirX = 1
        personagem.dirY = 0
    }
    if(key.ArrowLeft.pressionado)
    {
        personagem.moverEsquerda(0.3)
        personagem.dirX = -1
        personagem.dirY = 0
    }
    if(key.ArrowUp.pressionado)
    {
        personagem.moverCima(0.3)
        personagem.dirY = 1
        personagem.dirX = 0
    }
    if(key.ArrowDown.pressionado)
    {
        personagem.moverBaixo(0.3)
        personagem.dirY = -1
        personagem.dirX = 0
    }


    setInterval(desenharLabirinto,100)
}
//desenharLabirinto()

function mover(p){
    if(p == 0){
        personagem.dirX = -1
        personagem.dirY = 0
    }
    if(p == 1){
        personagem.dirX = 1
        personagem.dirY = 0
    }
    if(p == 2){
        personagem.dirY = 1
        personagem.dirX = 0
    }
    if(p == 3){
        personagem.dirY = -1
        personagem.dirX = 0
    }
}
