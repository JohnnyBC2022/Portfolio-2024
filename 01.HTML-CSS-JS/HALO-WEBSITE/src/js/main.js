const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");


/* Dentro de la función del evento, e es el objeto de evento. preventDefault() se llama para evitar que la acción predeterminada del clic ocurra. En el contexto de un enlace (<a>), esto evitará que el navegador siga el enlace de los items */
bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});
moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});