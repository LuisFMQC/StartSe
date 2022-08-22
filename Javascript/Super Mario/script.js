(function(dom){
    'use strict';
    const mario = dom.querySelector('.super-mario');
    const pipe = dom.querySelector('.pipe-game');
    const temaSound = dom.querySelector('#tema');
    const jumpSound = dom.querySelector('#jump');
    const gameoverSound = dom.querySelector('#gameover-sound');
    const gameoverImg = dom.querySelector('#gameover-image');
    const restart = dom.querySelector('.restart');
    const music = dom.querySelector('#music');
    const effects = dom.querySelector('#effects');
    const url = window.location.href.toString().replace('/index.html', '');

    function muteEffects(){
        if(effects.src === `${url}/images/alto-falante.png`){
            effects.src = './images/alto-falante-mute.png';
            jumpSound.muted = true;
            gameoverSound.muted = true;
        }
        else {
            effects.src = './images/alto-falante.png';
            jumpSound.muted = false;
            gameoverSound.muted = false;
        } 
    }

    function muteMusic(){
        if(music.src === 'http://127.0.0.1:5500/StartSe/Javascript/Super%20Mario/images/effect.png'){
            music.src = './images/effect-mute.png';
            temaSound.muted = true;
        }
        else {
            music.src = './images/effect.png';
            temaSound.muted = false;
        }
    }

    function autoPlay(){
        temaSound.play();
    } 

    function restartGame(){
        dom.location.reload(false);
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
    effects.addEventListener('click', muteEffects);
    music.addEventListener('click', muteMusic);
})(document);