let desafiosTag = document.getElementsByClassName('Desafio')
let secDesafio = document.getElementById('secaoDesafios')
let jogos = document.getElementById('canvas')
let desblock = document.getElementById('desbloqueioDesafio') 
let bnt = document.getElementById('botoesSec')

let keys = ''

let block = ['Jo.3.16.','Sm119105','1Tm.4.12']
let desafiosNomes = ['Quebra Cabeça', 'Labirinto']
let desafioAtual = -1
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
function desafio2(){
    bnt.style.display = 'flex'
    desenharLabirinto()
}

function chave(desafio,numDesafio){
    desblock.style.display = 'inline'
    desblock.innerHTML = 
    `<div class="Desafio" onclick="desafio${numDesafio}()"> 
        <img src="recursos/cadeadoFechado.png" alt="Cadeado Fechado">
        <p class="textoDesafio">${desafio}</p> 
    </div>
    <input type="text" id="senha"></input>`
    secDesafio.style.background = 'rgb(125,113,113, 0.77)'
    desafioAtual = numDesafio - 1
    keys = document.getElementById('senha')
    let desafiosDesbloqueados = setInterval(testes,100)
}

function testes(){
    if(keys.value == block[0] && desafioAtual == 0){
        desafioDesbloqueado(0,'DesafioAtual')
        
        if(pecasCorretas == 9){
            clearInterval(quebracabeca)
            dica('./recursos/pistaExemplo.gif')
            let divDesafioConcluido = document.getElementsByClassName('DesafioAtual')[desafioAtual]
            desafioDesbloqueado(0,'DesafioDestravado')
        }
    }
    if(keys.value == block[1] && desafioAtual == 1){
        desafioDesbloqueado(1,'DesafioAtual')
    }
    

}

//desafioDesbloqueado()

function desafioDesbloqueado(desafioAt,statusClass){
    desblock.style.display = 'none'
    desblock.innerHTML = ''
    secDesafio.style.alignItems = 'center'
    secDesafio.style.backgroundColor = '#ffff'
    secDesafio.style.boxShadow = '0px 0px 0px'
    secDesafio.innerHTML = `<div class= '${statusClass}'> 
    <img src='recursos/cadeadoAberto.png' alt='Cadeado Aberto'>
    <p class='textoDesafio'>${desafiosNomes[desafioAt]}</p>
    </div>`
    jogos.style.display = 'inline';
    
    switch(desafioAt){
        case 0:
            let quebracabeca = setInterval(desenho,100)
        break;
        case 1:
            let labirintotime =  setInterval(desenharLabirinto,100)
        break;
    }
    
}


function dica(srcDica){
    let sectio = document.createElement('section')
    let pista = document.createElement('img')
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
