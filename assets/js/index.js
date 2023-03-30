let abrir = document.querySelector(".responsive");
let cerrar = document.querySelector(".cerrar");
let menu = document.querySelector(".navContacto");
let itemsMenu = document.querySelectorAll(".item");


abrir.addEventListener("click", mostrar);
cerrar.addEventListener("click", ocultar);


// Función que muestra el menú responsive
function mostrar() {
    menu.style.left = '0px';
}
// Función que oculta el menú responsive
function ocultar() {
    menu.style.left = '-200%';
}
// Un foreach para recorrer todos los elementos del menú, para cuando se
// haga click en alguno se oculte
itemsMenu.forEach(element => {
    element.addEventListener("click", ocultar);
});

// Creando el slider de SwiperJS
var swiper = new Swiper(".mySwiper", {
    loop: true,
    fade: "true",
    autoplay: {
        delay: 5000, // Tiempo de espera entre cada slide
        disableOnInteraction: false, // No detener la reproducción cuando el usuario interactúa con el slide
    },
});