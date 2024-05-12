const headerMenu = document.querySelector('#header-menu');
const BtnMenu = document.querySelector('.menu');

BtnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    headerMenu.classList.toggle('none');
    
})