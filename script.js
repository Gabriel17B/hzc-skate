const menuButton = document.querySelector(".header__menu")
const menu = document.querySelector(".side__menu")

menuButton.addEventListener('click', () => {
    menu.classList.toggle('side__menu--active')
})