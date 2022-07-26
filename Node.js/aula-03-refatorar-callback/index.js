function mensagemLuis(){
    const promiseMensagemLuis = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bebam água!');
            resolve();
        }, 0);
    });
    return promiseMensagemLuis;
}

function mensagemRafael(){
    console.log('Hidratado! Bora pra cima!');
}

mensagemLuis().then(mensagemRafael);
