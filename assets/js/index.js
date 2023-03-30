let abrir=document.querySelector(".responsive");let cerrar=document.querySelector(".cerrar");let menu=document.querySelector(".navContacto");let itemsMenu=document.querySelectorAll(".item");abrir.addEventListener("click",mostrar);cerrar.addEventListener("click",ocultar);function mostrar(){menu.style.left='0px'}
function ocultar(){menu.style.left='-200%'}
itemsMenu.forEach(element=>{element.addEventListener("click",ocultar)})
