let desafios = document.getElementsByClassName('Desafio')
let secDesafio = document.getElementById('secaoDesafios')
let jogos = document.getElementById('canvas')
console.log(desafios)

function desafio1(){
    secDesafio.innerHTML = "<div class= 'Desafio' style='width: 60%;'> <img src='recursos/image_1-removebg-preview 2.png' alt='Cadeado Aberto'><p class='textoDesafio'>Desafio 1</p></div>"
    jogos.style.display = 'inline';
    
    desenho()
}
