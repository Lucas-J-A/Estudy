//Função aceionado quando botão hamburgue for clicado

function toggleMenu() {
    //declaração das variaveis com valor dos ID do hamburgue icone e menu link
    const menu = document.querySelector(".menu__links");
    const icon = document.querySelector(".hamburger__icon");
    //com metodo toggle atribui uma classe chamada open caso não houver se já existe ela remove .
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}