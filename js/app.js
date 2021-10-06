document.querySelector('#open').addEventListener('click', ()=>{
    document.querySelector('.mobile-menu').classList.add('slide')
})
document.querySelector('#close').addEventListener('click', ()=>{
    document.querySelector('.mobile-menu').classList.remove('slide')
})