
const key = {
    a:{
        pressionado: false
    },
    d:{
        pressionado: false
    },
    w:{
        pressionado: false
    },
    f:{
        pressionado: false
    },
    r:{
        pressionado: false
    },
    t:{
        pressionado: false
    },
    k:{
        pressionado: false
    },
    ç:{
        pressionado: false
    },
    l:{
        pressionado: false
    },
    ArrowRight:{
        pressionado: false
    },
    ArrowLeft:{
        pressionado: false
    },
    ArrowUp:{
        pressionado: false
    },
    ArrowDown:{
        pressionado: false
    }
} 

window.addEventListener('keydown',(evento)=>{
    switch (evento.key) {
        case 'd':
            key.d.pressionado = true
            break;
        case 'a':
            key.a.pressionado = true
            break;
        case 'w':
            key.w.pressionado = true
            break;
        case 'f':
            key.f.pressionado = true
            break;
        case 'r':
            key.r.pressionado = true
            break;
        case 't':
            key.t.pressionado = true
            break;
        case 'l':
            key.l.pressionado = true
            break;
        case 'ç':
            key.ç.pressionado = true
            break;
        case 'ArrowRight':
            key.ArrowRight.pressionado = true
            break;
        case 'ArrowLeft':
            key.ArrowLeft.pressionado = true
            break;
        case 'ArrowUp':
            key.ArrowUp.pressionado = true
            break;
        case 'ArrowDown':
            key.ArrowDown.pressionado = true
            break;
        case 'k':
            key.k.pressionado = true
        default:
            break;
    }
})

window.addEventListener('keyup',(evento)=>{
    switch (evento.key) {
        case 'd':
            key.d.pressionado = false
            break;
        case 'a':
            key.a.pressionado = false
            break;
        case 'w':
            key.w.pressionado = false
            break; 
        case 'f':
            key.f.pressionado = false
            break;
        case 'r':
            key.r.pressionado = false
            break;
        case 't':
            key.t.pressionado = false               
            break;
        case 'l':
            key.l.pressionado = false
            break;
        case 'ç':
            key.ç.pressionado = false
            break;
        case 'ArrowRight':
            key.ArrowRight.pressionado = false
            break;
        case 'ArrowLeft':
            key.ArrowLeft.pressionado = false
            break;
        case 'ArrowUp':
            key.ArrowUp.pressionado = false
            break;
        case 'ArrowDown':
            key.ArrowDown.pressionado = false
            break;
        case 'k':
            key.k.pressionado = false
        default:
            break;
    }
})

const pincel = {
    ativo: false,
    movendo: false,
    pos: {
        x: 0,
        y: 0
    },
    posAnterior: null
}
let mn = document.getElementById('main')
let desconto = 0

tela.onmousedown = (evento)=>{

    pincel.ativo = true;
    desconto = (mn.clientHeight + 80) - canva.height 
    pincel.posAnterior = {x:evento.clientX,y:evento.clientY}
};

tela.onmouseup = (evento)=>{
    pincel.pos.x = evento.pageX; 
    pincel.pos.y = evento.pageY;
    posicao = {
        x: pincel.pos.x - pincel.posAnterior.x,
        y: pincel.pos.y - pincel.posAnterior.y 
    }
};
tela.onmousemove  = (evento)=>{
    pincel.pos.x = evento.clientX - canva.height*0.1; 
    pincel.pos.y =  evento.clientY;
   
}

tela.addEventListener('touchstart',(evento)=>{
    evento.preventDefault()
    var toque = evento.changedTouches;
    pincel.ativo = true;
    desconto = (mn.clientHeight + 80) - canva.height 
    pincel.posAnterior = {x: toque[0].pageX, y: toque[0].pageY - desconto}
})

tela.addEventListener('touchend',(evento)=>{

    var toque = evento.changedTouches;
    pincel.pos.x = toque[0].pageX 
    pincel.pos.y = toque[0].pageY - desconto
    posicao = {
        x: pincel.pos.x - pincel.posAnterior.x,
        y: pincel.pos.y - pincel.posAnterior.y 
    }
})

tela.addEventListener('touchmove',(evento)=>{
    evento.preventDefault()
    var toque = evento.changedTouches;
    pincel.pos.x = toque[0].pageX - canva.height*0.1; 
    pincel.pos.y = toque[0].pageY - desconto;
    pincel.posAnterior = {x: pincel.pos.x, y: pincel.pos.y}
    
})