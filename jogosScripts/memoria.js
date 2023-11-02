let pecaAtual = 0
let pecaAnterior = 0
let idAterior = ''
let pontos = 0
let pecas = document.getElementsByClassName('imgPecas')
let conjuntopecas = [
    '../recursos/p1.jpeg',
    '../recursos/p2.jpeg',
    '../recursos/p3.jpeg',
    '../recursos/p4.png'
]
function iniciar(){
    for(i=0;i<pecas.length;i++){
        pecas[i].src = '../recursos/logo.png'
    }
}

function virar(p,id){
    let peca = document.getElementById(id)

    peca.src = conjuntopecas[p - 1]
    pecaAtual = p
    if(pecaAnterior == 0){
        pecaAnterior = pecaAtual
        idAterior = peca
    } else if (pecaAnterior == pecaAtual){
        pontos += 1
        pecaAnterior = 0
        pecaAtual = 0
    } else {
        idAterior.src = '../recursos/logo.png'
        peca.src = '../recursos/logo.png'
        pecaAnterior = 0
        pecaAtual = 0
    }
    if(pontos == 4){

        salvar(4)
        vencer()
    }
}
function vencer(){
    let dica = document.getElementById('pergunta')
    dica.textContent = 'Dica: Estava com ele o tempo todo'
}