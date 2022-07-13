(function(dom){
    'use strict';
    const mario = dom.querySelector('.super-mario');
    const pipe = dom.querySelector('.pipe-game');

    const jump = () => {
        mario.classList.add('jump-mario');

        setTimeout(() => {
            mario.classList.remove('jump-mario');
        }, 500);
    }

    const loopgame = setInterval (() => {
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const pipePosition = pipe.offsetLeft;

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.left = `${marioPosition}px`;

            mario.src = './images/mario-game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft ='45px';

            clearInterval(loopgame)
        }
    }, 10);

    document.addEventListener('keydown', jump);
})(document);