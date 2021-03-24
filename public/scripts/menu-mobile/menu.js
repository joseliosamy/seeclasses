

const burguer = document.querySelector('.burguer');
const menuUl = document.querySelector('.menu');
menuUl.style.right = '-204px'
burguer.addEventListener('click', ()=>{
    if(menuUl.style.right == '-204px'){
        menuUl.style.right = '0'
        burguer.className = 'burguer bx bx-menu-alt-left'
    }
    else{
        menuUl.style.right = '-204px'
        burguer.className = 'burguer bx bx-menu-alt-right'
    }
})
