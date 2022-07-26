function mensagemLuis(callback){
    setTimeout(() => {
        console.log('Bebam água!');
        callback();
    }, 0);
}

function mensagemRafael(){
    console.log('Hidratado! Bora pra cima!');
}

mensagemLuis(mensagemRafael);