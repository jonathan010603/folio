const logo_burger_div = document.querySelector('.logo_burger');
const burger = document.querySelector('.burger-div');
const openMenu = document.querySelector('.mobile_open_menu-div');

burger.onclick = () => {
    logo_burger_div.classList.toggle('changeHeader');
    openMenu.classList.toggle('show');
}