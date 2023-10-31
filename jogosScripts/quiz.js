let pergunta = document.getElementById('pergunta')
let respostasDireitas = document.getElementById('respostasDir')
let respostaEsquerdas = document.getElementById('respostasEsq')

let perguntas = [
    {
        questao: 'Paulo, não vão comer nem beber até tirarem sua vida',
        respostaCerta: 'Os judeus',
        respostas: [
            'Os gregos',
            'Os Romanos',
            'Os Saduceus',
        ]
    },
    {
        questao:'O Senhor amou Salomão e lhe deu outro nome',
        respostaCerta: 'Jedidias',
        respostas: [
            'Israel',
            'Salomão',
            'Josias',
        ]
    },
    {
        questao:'Quantas vezes Elias orou para que chovesse',
        respostaCerta: '7',
        respostas: [
            '5',
            '12',
            '1',
        ]
    },
    {
        questao:'Foi escolhido para substituir Judas',
        respostaCerta: 'Matias',
        respostas: [
            'Barnabé',
            'Simão',
            'Estevão',
        ]
    },
    {
        questao:'Foram confundidos com Júpiter e Mercúrio',
        respostaCerta: 'Paulo e Barnabé',
        respostas: [
            'Paulo e Silas',
            'Paulo e Marcos',
            'Pedro e João',
        ]
    },
    {
        questao:'Quem dera fosse quente ou frio -> Igreja de Loadiceia',
        respostaCerta: 'Igreja de Laodiceia',
        respostas: [
            'Igreja de Éfeso',
            'Igreja de Tiatira',
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
        pergunta.appendChild(p)
    for(j=0;j<perguntas[i].respostas.length + 1;j++){
        respostasDireitas.innerHTML += `<button onclick="responder()">
            ${perguntas[i].respostas[j]}
        </button>`

    }
    
    // while(perguntasCorretas < 6){

    // }
}

function responder(){
    i += 1
    pergunta.innerHTML = ''
    respostasDireitas.innerHTML = ''
    carregar()
}