let desafiosTag = document.getElementsByClassName('Desafio')
let secDesafio = document.getElementById('secaoDesafios')
let desblock = document.getElementById('desbloqueioDesafio') 
let bnt = document.getElementById('botoesSec')

let keys = ''

let block = ['Jo.3.16.','Sm119105','1Tm.4.12','1Tm.3.15','Sm.133.1']
// let block = ['','','','','']
let desafiosNomes = ['Quebra Cabeça', 'Labirinto']
let desafioAtual = -1

let statusDesafios = [0,0,0,0,0]

let quebracabeca = setInterval(null)
function desafios(d){
    switch (d){
        case 0:
            chave('desafio 1',1);
        break;
        case 1:
            chave('desafio 2', 2);
        break;
        case 2:
            chave('desafio 3',3);
        break;
        case 3:
            chave('desafio 4', 4);
        break;
        case 4:
            chave('desafio 5',5);
        break; 
    }
    
}

function chave(desafio,numDesafio){
    desblock.style.display = 'inline'
    desblock.innerHTML = 
    `<div class="Desafio"> 
        <img src="recursos/cadeadoFechado.png" alt="Cadeado Fechado">
        <p class="textoDesafio">${desafio}</p> 
    </div>
    <input type="text" id="senha"></input>`
    secDesafio.style.background = 'rgb(125,113,113, 0.77)'
    desafioAtual = numDesafio - 1
    keys = document.getElementById('senha')
    if(localStorage.getItem('DesafiosAbertos'))
        statusDesafios = JSON.parse(localStorage.getItem('DesafiosAbertos'))
    let desafiosDesbloqueados = setInterval(testes,100)
}

function testes(){
    if(keys.value == block[0] && desafioAtual == 0){
        desafioDesbloqueado(0)
        if(statusDesafios[0] != 2)
            statusDesafios[desafioAtual] = 1
    }
    if(keys.value == block[1] && desafioAtual == 1){
        if(statusDesafios[1] != 2)
            statusDesafios[desafioAtual] = 1
        desafioDesbloqueado(1)
    }
    if(keys.value == block[2] && desafioAtual == 2){
        if(statusDesafios[2] != 2)
            statusDesafios[desafioAtual] = 1
        desafioDesbloqueado(2)
    }
    if(keys.value == block[3] && desafioAtual == 3){
        if(statusDesafios[3] != 2)
            statusDesafios[desafioAtual] = 1
        desafioDesbloqueado(3)
    }
    if(keys.value == block[4] && desafioAtual == 4){
        if(statusDesafios[4] != 2)
            statusDesafios[desafioAtual] = 1
        desafioDesbloqueado(4)
    }
    localStorage.DesafiosAbertos = JSON.stringify(statusDesafios)
}

function desafioDesbloqueado(desafioAt){
    desblock.style.display = 'none'
    desblock.innerHTML = '' 
    switch(desafioAt){
        case 0:
            window.location.href = 'pages/quebraCabeca.html'           
        break;
        case 1:
            window.location.href = 'pages/labirinto.html'
        break;
        case 2:
            window.location.href = 'pages/Quiz.html'
        break;
        case 3:
            window.location.href = 'pages/pong.html'
        break;
        case 4:
            window.location.href = 'pages/ultima.html'
        break;
    }  
}
let img = document.getElementsByTagName('img')
function atualizar(){
    console.log(desafiosTag)
    for(i=0;i < desafiosTag.length; i++){
        if(localStorage.getItem('DesafiosAbertos')){
            statusDesafios = JSON.parse(localStorage.getItem('DesafiosAbertos'))
        } else break;
        if(statusDesafios[i] == 1){
            desafiosTag[i].classList.add('DesafioAtual')
            img[i].src = './recursos/cadeadoAberto.png'
        }
        if(statusDesafios[i] == 2){
            desafiosTag[i].classList.add('DesafioDestravado')
            img[i].src = './recursos/cadeadoAberto.png'
        }
    }
}
