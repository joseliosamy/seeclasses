

const effect = document.querySelector('.effect');

effect.style = 'animation:load 1s;'
setTimeout(()=>{
    effect.parentElement.removeChild(effect)
}, 800)