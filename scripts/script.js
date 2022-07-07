const closedBurguer = document.querySelector('#closed-burger');
const openBurguer = document.querySelector('#open-burger');
const openMenu = document.querySelector('.mobile_open_menu_container-div');
const closedMenu = document.querySelector('.mobile_closed_menu-nav');
const main = document.querySelector('main');

closedBurguer.onclick = () => {
    openMenu.classList.toggle('show');
    closedMenu.classList.toggle('hide');
}

openBurguer.onclick = () => {
    openMenu.classList.toggle('show');
    closedMenu.classList.toggle('hide');
}