const header = document.querySelector('header');
const burger = document.querySelector('.burger-div');
const openMenu = document.querySelector('.mobile_open_menu-div');

burger.onclick = () => {
    header.classList.toggle('changeHeader');
    openMenu.classList.toggle('show');
}