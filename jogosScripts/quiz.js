let pergunta = document.getElementById('pergunta')
let respostasDireitas = document.getElementById('respostasDir')
let respostaEsquerdas = document.getElementById('respostasEsq')
let voltar = document.getElementById('voltar')
let desafioNome = document.getElementsByClassName('DesafioAtual')[0]
let perguntas = [
    {
        questao: 'Paulo, não vão comer nem beber até tirarem sua vida',
        respostaCerta: 'Os judeus',
        respostas: [
            'Os gregos',
            'Os Romanos',
            'Os Judeus',
            'Os Saduceus',
        ]
    },
    {
        questao:'O Senhor amou Salomão e lhe deu outro nome',
        respostaCerta: 'Jedidias',
        respostas: [
            'Israel',
            'Salomão',
            'Jedidias',
            'Josias',
        ]
    },
    {
        questao:'Quantas vezes Elias orou para que chovesse',
        respostaCerta: '7',
        respostas: [
            '5',
            '12',
            '7',
            '1',
        ]
    },
    {
        questao:'Foi escolhido para substituir Judas',
        respostaCerta: 'Matias',
        respostas: [
            'Barnabé',
            'Simão',
            'Matias',
            'Estevão',
        ]
    },
    {
        questao:'Foram confundidos com Júpiter e Mercúrio',
        respostaCerta: 'Paulo e Barnabé',
        respostas: [
            'Paulo e Silas',
            'Paulo e Marcos',
            'Paulo e Barnabé',
            'Pedro e João',
        ]
    },
    {
        questao:'Quem dera fosse quente ou frio',
        respostaCerta: 'Igreja de Laodiceia',
        respostas: [
            'Igreja de Éfeso',
            'Igreja de Tiatira',
            'Igreja de Laodiceia',
            'Igreja de Sarde',
        ]
    }
]
let resp
let perguntasCorretas = 0
let i = 0
function carregar(){
    let p = document.createElement('p')
        p.textContent = `${perguntas[i].questao}`
        //pergunta.style.background = '#ffffff'
        pergunta.appendChild(p)
    for(j=0;j<perguntas[i].respostas.length - 2;j++){
        respostasDireitas.innerHTML += `<button class="BotaoQuiz" onclick="responder(0)">
            ${perguntas[i].respostas[j]}
        </button>`
    }
    respostaEsquerdas.innerHTML += `<button class="BotaoQuiz" onclick="responder(0)">
    ${perguntas[i].respostas[3]}</button>`
    respostaEsquerdas.innerHTML += `<button class="BotaoQuiz" onclick="responder(1)">
    ${perguntas[i].respostas[2]}</button>`
}

function responder(r){
    i += 1
    pergunta.innerHTML = ''
    respostasDireitas.innerHTML = ''
    respostaEsquerdas.innerHTML = ''
    perguntasCorretas += r
    
    if(perguntasCorretas < 4){
        if(r == 1)
            pergunta.style.background = '#69FF8A'
        else
            pergunta.style.background = '#FFC4C4'
        if(i == perguntas.length){
            i = 0
            perguntasCorretas = 0
        }
        carregar()
    }
    else{
        vencer()
    }
    
    
}
function vencer(){
    let dica = document.createElement('img')
    dica.src = '../recursos/dica.gif'
    let p = document.createElement('p')
        p.textContent = `Parabéns`
        pergunta.style.background = '#ffffff'
        pergunta.appendChild(p)
        pergunta.appendChild(dica)

        desafioNome.classList.remove('DesafioAtual')
        desafioNome.classList.add('DesafioDestravado')

        let statusDesafios = JSON.parse(localStorage.getItem('DesafiosAbertos'))
        statusDesafios[2] = 2
        localStorage.DesafiosAbertos = JSON.stringify(statusDesafios)
    

        voltar.style.display = 'inline';
}