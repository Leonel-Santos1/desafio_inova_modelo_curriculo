const botaoMenu = document.querySelector(".botao_menu");
const menuMobile = document.querySelector(".menu-navegacao-mobile");
var apresentacao = document.querySelector(".apresentacao");

let menuAberto = false;

botaoMenu.addEventListener("click", function () {
    menuAberto ? menuMobile.classList.add("invisible") : menuMobile.classList.remove("invisible");

    menuAberto ? botaoMenu.children[0].setAttribute("src", "images/icon_burger.svg") : botaoMenu.children[0].setAttribute("src", "images/close_icon.svg");

    menuAberto ? apresentacao.setAttribute("style", "padding-top: 12%") : apresentacao.setAttribute("style", "padding-top: 7%");

    menuAberto = !menuAberto;
});