let canva = document.getElementById('canva')
let ctx = canva.getContext("2d")
let tela = document.getElementById('tela')

let altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let largura = document.body.clientWidth

canva.height = largura * 0.9
canva.width = canva.height


class quadros{
    constructor(forma,x,y,l,a){
        this.x= x,
        this.y = y,
        this.l = l,
        this.a = a,
        
        this.forma = new Image(),
        this.forma.src = forma,
        this.obstaculoDir = false,
        this.obstaculoEsq = false,
        this.obstaculoCima = false,
        this.obstaculoBaixo = false
    }
    desenhar(){
        ctx.drawImage(this.forma,this.x,this.y,this.l,this.a)
    }
    moverDireita(vel){
        if(this.x + this.l < canva.height && !this.obstaculoDir){
            this.x += vel
            return true
        }
    }
    moverEsquerda(vel){
        if(this.x > 0 && !this.obstaculoEsq){
            this.x -= vel
            return true
        }
    }
    moverCima(vel){
        if(this.y > 0 && !this.obstaculoCima){
            this.y -= vel
            return true
        }
    }
    moverBaixo(vel){
        if(this.y + this.a < canva.width && !this.obstaculoBaixo){
            this.y += vel
            return true
        }
    }
    moverQuadroX(x){
        if (x > 0){
            this.moverDireita(this.l)
        } else {
            this.moverEsquerda(this.l)
        }
    }
    moverQuadroY(y){
        
        if(y > 0){
            this.moverBaixo(this.a)
        } else {
            this.moverCima(this.a)
        }
    }
}

class Personagem extends quadros{
    constructor({posicao, dimensao},forma){
        super(forma,posicao.x,posicao.y,dimensao.l,dimensao.a)
        this.vel = 1.2,
        this.dirX = 0,
        this.dirY = 0
    }
    atualizar(){
        if(this.dirX > 0){
            super.moverDireita(this.vel)
        }
        if(this.dirX < 0){
            super.moverEsquerda(this.vel)
        }
        if(this.dirY > 0){
            super.moverCima(this.vel)
        }
        if(this.dirY < 0){
            super.moverBaixo(this.vel)
        }
        super.desenhar()
    }
    
    
}

class Area extends quadros{
    constructor(forma,x,y,l,a){
        super(forma,x,y,l,a)
    }
    EntrarPorBaixo(Objeto){
        if(Objeto.y + Objeto.a + 1 > this.y && Objeto.y < this.y && ((Objeto.x  < this.x + this.l && Objeto.x + Objeto.l > this.x)||(Objeto.x < this.x && Objeto.x + Objeto.l > this.x + this.l))){
           return true 
        }
    }
    EntrarPelaDireita(Objeto){
        if(Objeto.x + Objeto.l == this.x && Objeto.y == this.y){
            return true
        } 
    }
    EntrarPelaEsquerda(Objeto){
        if( Objeto.x  == this.x + this.l && (this.y == Objeto.y))
            return true
        } 
    
    EntrarPorCima(Objeto){
        if(Objeto.y == this.y + this.a && (Objeto.x == this.x)){
            return true
        }
    }

    EntrarPelaLateral(Objeto){
        if(this.EntrarPelaDireita(Objeto) || this.EntrarPelaEsquerda(Objeto))
            return true
    }
}


class AreaPlataformaLabirinto extends quadros{
    constructor({posicao, dimensao},forma){
        super(forma,posicao.x,posicao.y,dimensao.l,dimensao.a)
    }
    EntrarPorBaixo(Objeto){
        if(Objeto.y + Objeto.a  >= this.y && Objeto.y < this.y && ((Objeto.x < this.x + this.l && Objeto.x + Objeto.l > this.x)||(Objeto.x < this.x && Objeto.x + Objeto.l > this.x + this.l))){
           return true 
        } 
    }
    EntrarPelaDireita(Objeto){
        if(Objeto.x + Objeto.l > this.x && Objeto.x < this.x && ((Objeto.y + Objeto.a > this.y && Objeto.y < this.y + this.a)||(Objeto.y + Objeto.a > this.y + this.a && Objeto.y < this.y))){
            return true
        } 
    }
    EntrarPelaEsquerda(Objeto){
        if( Objeto.x + Objeto.l > this.x + this.l && Objeto.x <= this.x + this.l  && ((Objeto.y + Objeto.a > this.y && Objeto.y < this.y + this.a) || (Objeto.y + Objeto.a > this.y + this.a && Objeto.y < this.y)))
            return true
        } 
    
    EntrarPorCima(Objeto){
        if(Objeto.y + Objeto.a > this.y + this.a && Objeto.y < this.y + this.a && ((Objeto.x < this.x + this.l && Objeto.x + Objeto.l > this.x)||(Objeto.x < this.x && Objeto.x + Objeto.l > this.x + this.l))){
          return true 
        } 
    }
    EntrarPelaLateral(Objeto){
        if(this.EntrarPelaDireita(Objeto) || this.EntrarPelaEsquerda(Objeto))
            return true
    }
}


class Parede extends AreaPlataformaLabirinto{
    constructor({posicao, dimensao},forma){
        super({posicao, dimensao},forma)
    }
    barrar(Objeto){
        if(super.EntrarPorBaixo(Objeto)){
            Objeto.y = this.y - Objeto.a 
            Objeto.obstaculoBaixo = true
            return true 
        } else {
            Objeto.obstaculoBaixo = false
        }
    }
    barrarLateral(Objeto){
        if(super.EntrarPelaDireita(Objeto)){
            Objeto.x = this.x - Objeto.l - 0.5
            Objeto.obstaculoDir = true 
            return true
        } 
        else {
              Objeto.obstaculoDir = false
        }
        if(super.EntrarPelaEsquerda(Objeto)){
            Objeto.x = this.x + this.l 
            Objeto.obstaculoEsq = true 
            return true
        } 
        else{
            Objeto.obstaculoEsq = false
        }
    }
    barrarCima(Objeto){
        if(super.EntrarPorCima(Objeto)){
            Objeto.y = this.y + this.a
            Objeto.obstaculoCima = true
            return true 
        }else{
            Objeto.obstaculoCima = false
        }
    }
    atualizar(){
        super.desenhar()
    }
}

class Chave extends Area{
    constructor({posicao, dimensao},forma){
        super(forma,posicao.x,posicao.y, dimensao.l,dimensao.a)
        this.ativo = true
    }
    atualizar(Objeto){
        super.desenhar()
        if(this.ativo){ 
            if(super.EntrarPelaLateral(Objeto) ||
            super.EntrarPorBaixo(Objeto) ||
            super.EntrarPorCima(Objeto))
            {
                this.ativo = false
            }
        }
    }
}

class Premio extends Chave{
    constructor({posicao, dimensao},forma){
        super({posicao, dimensao},forma)
    }
    atualizar(Objeto){
        super.atualizar(Objeto)
        if(!this.ativo){
            return true
        }
    }

}


class Colisoes extends Area{
    constructor(forma,x,y,a,l,corretox,corretoy){
        super(forma,x,y,a,l)
        this.correto = {
            x: corretox,
            y: corretoy
        },
        this.posicionado = false,
        this.meuPonto = 0
        
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
    barrarDir(Objeto){
        if(super.EntrarPelaDireita(Objeto)){
           // Objeto.x = this.x - Objeto.l
            Objeto.obstaculoDir = true 
            return true
        } 
        else {
              Objeto.obstaculoDir = false
        }
    }
    barrarEsq(Objeto){
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
        this.Testecorreto()
    }
    Testecorreto(){
        if(this.x == this.correto.x && this.y == this.correto.y){
            if(!this.posicionado){
                this.meuPonto = 1
                this.posicionado = true
            }
        }else{
            this.posicionado = false
            this.meuPonto = 0
        }
    }
    clicando(){
        if(pincel.ativo){
            if(pincel.pos.x > this.x && pincel.pos.x < this.x + this.l && pincel.pos.y > this.y && pincel.pos.y < this.y + this.a){
                pincel.ativo = false
                if(!super.moverDireita(this.l))
                    super.moverEsquerda(this.l)
                if(!super.moverBaixo(this.a))
                    super.moverCima(this.a)
           }
        }
    }
}

function colidir(vetor,colisor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].barrar(colisor))
            break;
    }
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].barrarLateral(colisor))
            break;
    }
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].barrarCima(colisor))
            break;
    }
}
function colidirCom(vetor,colisor){
    for(let j =0; j< colisor.length; j++){    
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrar(colisor[j]))
                break;
        }
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrarDir(colisor[j]))
                break;
        }
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i].barrarEsq(colisor[j]))
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

function gerenciarChaves(v,Objeto,portas){
    for(i=0;i<v.length;i++){
        if(v[i].ativo){
            v[i].atualizar(Objeto)
        } else {
            console.log(v)
            v.pop()
            portas.pop()
        }

    }
}

function salvar(desafio){
    let bnt = document.getElementsByTagName('button')[0]
    let statusDesafios = JSON.parse(localStorage.getItem('DesafiosAbertos'))
    statusDesafios[desafio] = 2
    localStorage.DesafiosAbertos = JSON.stringify(statusDesafios)
    bnt.style.display = 'inline'
}

function contarPontos(v){
    let soma = 0
    for(i=0;i<v.length;i++){
        soma += v[i].meuPonto
    }
    pecasCorretas = soma
    if(pecasCorretas == 8){
        quadro.push(new Colisoes(srcs[6],recortes[2],recortes[2],espacos,espacos,recortes[2],recortes[2]))
    }
    
}

function dica(srcDica,tipo){
    let sectio = document.createElement('section')
    let pista 
    if(tipo == 'gif'){
        pista = document.createElement('img')
        console.log('gif')
    } else if (tipo == 'music'){
        pista = document.createElement('audio')
        pista.controls = 'true'
    }
    pista.src = srcDica
    pista.style.marginTop = '20%'
    pista.style.width = '96%'
    pista.style.height = '54%'
    sectio.style.position = 'absolute'
    sectio.style.backgroundColor = 'rgba(89, 78, 78, 0.090)'
    sectio.style.height = '100%'
    sectio.style.width = '100%'
    sectio.style.textAlign = 'center'
    sectio.appendChild(pista)
    tela.insertBefore(sectio,canva)
}
