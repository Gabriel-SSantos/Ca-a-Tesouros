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
        if(this.x + this.l < canva.height && !this.obstaculoDir)
            this.x += vel
    }
    moverEsquerda(vel){
        if(this.x > 0 && !this.obstaculoEsq)
            this.x -= vel
    }
    moverCima(vel){
        if(this.y > 0 && !this.obstaculoCima){
            this.y -= vel
        }
    }
    moverBaixo(vel){
        if(this.y + this.a < canva.width && !this.obstaculoBaixo)
            this.y += vel
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
        this.vel = 0.5,
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
                console.log('Obj esquerda ' + this.obstaculoEsq + ' Obj direita ' + this.obstaculoDir)
                if(Math.pow(posicao.x,2) > Math.pow(posicao.y,2)){
                    super.moverQuadroX(posicao.x)
                }
                else 
                    super.moverQuadroY(posicao.y)
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
function contarPontos(v){
    let soma = 0
    for(i=0;i<v.length;i++){
        soma += v[i].meuPonto
    }
    pecasCorretas = soma
    console.log(soma)
    if(pecasCorretas == 8){
        quadro.push(new Colisoes(srcs[6],recortes[2],recortes[2],espacos,espacos,recortes[2],recortes[2]))
        console.log('parabens')
    }
}