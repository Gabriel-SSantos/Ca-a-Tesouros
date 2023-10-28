let pecasCorretas = 0

let srcs = [
    "./recursos/peca1.png",
    "./recursos/peca2.png",
    "./recursos/peca3.png",
    "./recursos/peca4.png",
    "./recursos/peca5.png",
    "./recursos/peca6.png",
    "./recursos/peca7.png",
    "./recursos/peca8.png",
    "./recursos/peca9.png"
]
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


let quadro = [
    new Colisoes(srcs[2],0,0,espacos,espacos,recortes[2],0),
    new Colisoes(srcs[1],0,recortes[1],espacos,espacos,recortes[1],0),
    new Colisoes(srcs[0],0,recortes[2],espacos,espacos,0,0),
    new Colisoes(srcs[5],recortes[1],0,espacos,espacos,recortes[2],recortes[1]),
    new Colisoes(srcs[4],recortes[1],recortes[1],espacos,espacos,recortes[1],recortes[1]),
    new Colisoes(srcs[3],recortes[1],recortes[2],espacos,espacos,0,recortes[1]),
    new Colisoes(srcs[7],recortes[2],recortes[1],espacos,espacos,recortes[1],recortes[2]),
    new Colisoes(srcs[8],recortes[2],recortes[2],espacos,espacos,0,recortes[2])
]
i = 0
function desenho(){
    ctx.clearRect(0,0,canva.height,canva.width)
    exibir(quadro)
    colidirCom(quadro,quadro)
    //console.log(quadro[0].x + quadro[0].l + 'y: ' + quadro[0].y)
    // if(key.ArrowRight.pressionado )
    //     quadro[0].moverDireita()
    // if(key.ArrowLeft.pressionado)
    //     quadro[0].moverEsquerda()
    // if(key.ArrowUp.pressionado)
    //     quadro[0].moverCima()
    // if(key.ArrowDown.pressionado)
    //     quadro[0].moverBaixo()
    // ctx.fillText(`x: ${pincel.pos.x} y: ${pincel.pos.y}`,pincel.pos.x,pincel.pos.y,50)
    contarPontos(quadro)
    setInterval(desenho,100)
    //console.log(pontos)
    //ctx.drawImage(imagem,0,0,canva.height,canva.width)
}
//desenho()



