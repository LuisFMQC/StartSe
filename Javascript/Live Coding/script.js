(function(dom){
    'use strict';
    const mario = dom.querySelector('.super-mario');
    const pipe = dom.querySelector('.pipe-game');
    const temaSound = dom.querySelector('#tema');
    const jumpSound = dom.querySelector('#jump');
    const gameoverSound = dom.querySelector('#gameover-sound');
    const gameoverImg = dom.querySelector('#gameover-image');
    const restart = dom.querySelector('.restart');

    function autoPlay(){
        temaSound.play();
    }

    function restartGame(){
        dom.location.reload(true);
    }
    
    const jump = () => {
        mario.classList.add('jump-mario');

        setTimeout(() => {
            mario.classList.remove('jump-mario');
        }, 500);

        jumpSound.play();
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

            jumpSound.src = ''
            temaSound.pause();  
            gameoverSound.play();
            gameoverImg.parentNode.removeAttribute('hidden', 'hidden');
            
        
            clearInterval(loopgame)
        }
    }, 10);

    autoPlay();
    dom.addEventListener('keydown', jump);
    restart.addEventListener('click', restartGame);
})(document);