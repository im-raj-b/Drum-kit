'use strict';

const playSound = function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

document.addEventListener('keydown', playSound);

function removeClass(e) {
    //console.log(e);
    if (e.propertyName !== 'transform') return;//skip if transform property not there
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeClass));

