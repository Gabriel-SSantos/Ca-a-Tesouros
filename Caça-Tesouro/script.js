
let canva = document.getElementById('canva')
let ctx = canva.getContext("2d")
let tela = document.getElementById('tela')

let altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let largura = document.body.clientWidth

canva.height = largura * 0.9
canva.width = canva.height

let imagem = new Image()
imagem.src = "./recursos/mapa.jpeg"
let espacos = canva.height/3
let recortes = [espacos*0,espacos,espacos*2]

let pontos = {x:0,y:0}

let posicao = {
    x: 0,
    y: 0
}

const pincel = {
    ativo: false,
    movendo: false,
    pos: {
        x: 0,
        y: 0
    },
    posAnterior: null
}


class quadros{
    constructor(x,y,l,a){
        this.x= x,
        this.y = y,
        this.l = l,
        this.a = a,
        this.color = 'black'
        this.forma = new Image(),
        this.recorte = {
            x: 0,
            y: 0
        }
        this.direcao = {
            dirX: 0,
            dirY: 0
        }
        this.obstaculoDir = false,
        this.obstaculoEsq = false,
        this.obstaculoCima = false,
        this.obstaculoBaixo = false
    }
    desenhar(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.l,this.a)
    }
    moverDireita(){
        if(this.x + this.l < canva.height && !this.obstaculoDir)
            this.x += this.l
    }
    moverEsquerda(){
        if(this.x > 0 && !this.obstaculoEsq)
            this.x -= this.l
    }
    moverCima(){
        if(this.y > 0 && !this.obstaculoCima)
            this.y -= this.a
    }
    moverBaixo(){
        if(this.y + this.a < canva.width && !this.obstaculoBaixo)
            this.y += this.a
    }
    moverQuadroX(x){
        if (x > 0){
            this.moverDireita()
        } else {
            this.moverEsquerda()
        }
    }
    moverQuadroY(y){
        if(y > 0){
            this.moverBaixo()
        } else {
            this.moverCima()
        }
    }
}


class Area extends quadros{
    constructor(x,y,l,a){
        super(x,y,l,a)
    }
    EntrarPorBaixo(Objeto){
        if(Objeto.y + Objeto.a >= this.y && Objeto.y < this.y && ((Objeto.x  < this.x + this.l && Objeto.x + Objeto.l > this.x)||(Objeto.x < this.x && Objeto.x + Objeto.l > this.x + this.l))){
           return true 
        }
    }
    EntrarPelaDireita(Objeto){
        if(Objeto.x + Objeto.l  > this.x && Objeto.x < this.x && ((Objeto.y + Objeto.a > this.y && Objeto.y < this.y + this.a)||(Objeto.y + Objeto.a > this.y + this.a && Objeto.y < this.y))){
            return true
        } 
    }
    EntrarPelaEsquerda(Objeto){
        if( Objeto.x + Objeto.l > this.x + this.l && Objeto.x - 4 <= this.x + this.l  && ((Objeto.y + Objeto.a > this.y && Objeto.y < this.y + this.a) || (Objeto.y + Objeto.a > this.y + this.a && Objeto.y < this.y)))
            return true
        } 
    
    EntrarPorCima(Objeto){
        if(Objeto.y  >= this.y + this.a && ((Objeto.x < this.x + this.l && Objeto.x + Objeto.l > this.x)||(Objeto.x < this.x && Objeto.x + Objeto.l > this.x + this.l))){
          return true 
        } 
    }
    EntrarPelaLateral(Objeto){
        if(this.EntrarPelaDireita(Objeto) || this.EntrarPelaEsquerda(Objeto))
            return true
    }
}


class Colisoes extends Area{
    constructor(x,y,a,l){
        super(x,y,a,l)
    }
    barrar(Objeto){
        if(super.EntrarPorBaixo(Objeto)){
            //Objeto.y = this.y - Objeto.a 
            Objeto.obstaculoBaixo = true
            return true 
        }else{
            Objeto.obstaculoBaixo = false
        } 
    }
    barrarLateral(Objeto){
        if(super.EntrarPelaDireita(Objeto)){
           // Objeto.x = this.x - Objeto.l
            Objeto.obstaculoDir = true 
            return true
        } 
        else {
              Objeto.obstaculoDir = false
        }
        if(super.EntrarPelaEsquerda(Objeto)){
           // Objeto.x = this.x + this.l 
            Objeto.obstaculoEsq = true 
            return true
        } 
        else{
            Objeto.obstaculoEsq = false
        }
    }
    barrarCima(Objeto){
        if(super.EntrarPorCima(Objeto)){
            //Objeto.y = this.y + this.a
            Objeto.obstaculoCima = true
            return true 
        }else{
            Objeto.obstaculoCima = false
        }
    }

    atualizar(){
        super.desenhar()
        this.clicando()
        
    }
    clicando(){
        if(pincel.ativo){
            if(pincel.pos.x > this.x && pincel.pos.x < this.x + this.l && pincel.pos.y > this.y && pincel.pos.y < this.y + this.a){
                this.color = 'red'
                pincel.ativo = false
                if(Math.pow(posicao.x,2) > Math.pow(posicao.y,2)){
                    console.log(posicao.x)
                    super.moverQuadroX(posicao.x)
                }
                else 
                    super.moverQuadroY(posicao.y)
            }
        }
    }
}

function colidirCom(vetor,colisor){
    for(let j =0; j< colisor.length; j++){    
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrar(colisor[j]))
                break;
        }
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrarLateral(colisor[j]))
                break;
        }
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrarCima(colisor[j]))
                break;
        }
    }
}

function exibir(v){
    for(i=0;i<v.length;i++){
        v[i].atualizar()
    }
}

let quadro = [
    new Colisoes(0,0,espacos,espacos),
    new Colisoes(0,recortes[1],espacos,espacos),
    new Colisoes(0,recortes[2],espacos,espacos),
    new Colisoes(recortes[1],0,espacos,espacos),
    new Colisoes(recortes[1],recortes[1],espacos,espacos),
    new Colisoes(recortes[1],recortes[2],espacos,espacos),
    //new Colisoes(recortes[2],0,espacos,espacos),
    new Colisoes(recortes[2],recortes[1],espacos,espacos),
    new Colisoes(recortes[2],recortes[2],espacos,espacos)
]
i = 0
function desenho(){
    ctx.clearRect(0,0,canva.height,canva.width)
    exibir(quadro)
    colidirCom(quadro,quadro)
    if(key.ArrowRight.pressionado )
        quadro[0].moverDireita()
    if(key.ArrowLeft.pressionado)
        quadro[0].moverEsquerda()
    if(key.ArrowUp.pressionado)
        quadro[0].moverCima()
    if(key.ArrowDown.pressionado)
        quadro[0].moverBaixo()
    ctx.fillText(`x: ${pincel.pos.x} y: ${pincel.pos.y}`,pincel.pos.x,pincel.pos.y,50)
    
    //console.log(pontos)
    //ctx.drawImage(imagem,0,0,canva.height,canva.width)
}
desenho()



setInterval(desenho,100)
let desafios = document.getElementsByClassName('Desafio')
console.log(desafios)
function desafio1(){
    desafios.style.background= '#FFC4C4'
}

tela.onmousedown = (evento)=>{
    pincel.ativo = true;
    pincel.posAnterior = {x:evento.clientX - 9,y:evento.clientY - 9}
};

tela.onmouseup = (evento)=>{
    pincel.pos.x = evento.clientX - 9; 
    pincel.pos.y = evento.clientY - 9;
    posicao = {
        x: pincel.pos.x - pincel.posAnterior.x,
        y: pincel.pos.y - pincel.posAnterior.y 
    }
};
tela.onmousemove  = (evento)=>{
    pincel.pos.x = evento.clientX - 9; 
    pincel.pos.y = evento.clientY - 9;
    console.log('opa')
}

tela.addEventListener('touchstart',(evento)=>{
    evento.preventDefault()
    var toque = evento.changedTouches;
    pincel.posAnterior = {x: toque[0].pageX, y: toque[0].pageY}
})

tela.addEventListener('touchend',()=>{
    pincel.posAnterior = null 
    
})

tela.addEventListener('touchmove',(evento)=>{
    evento.preventDefault()
    var toque = evento.changedTouches;
    pincel.pos.x = toque[0].pageX; 
    pincel.pos.y = toque[0].pageY;
    pincel.posAnterior = {x: pincel.pos.x, y: pincel.pos.y}
    
})