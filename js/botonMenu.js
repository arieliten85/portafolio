const iconoMenu = document.querySelector('#icono-menu')
const menu = document.querySelector('.menuSmall');

iconoMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
});



const menuLinks = document.querySelectorAll(".menu a[href ^='#']")

const oberver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        const id = entry.target.getAttribute("id")
        const menuLinks = document.querySelector(`.menu a[href="#${id}"]`)

        if (entry.isIntersecting) {
            menuLinks.classList.add("selected")
        } else {
            menuLinks.classList.remove("selected")
        }
    })

},{rootMargin: "-50% 0px -50% 0px"})


menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function () {
        menu.classList.remove("active");
    })

    const hash = menuLinks.getAttribute("href");
    const target = document.querySelector(hash);

    if (target) {
        oberver.observe(target);
    }
})





// navegacion

window.addEventListener("scroll", menuFixed);

function menuFixed() {
  let navegacion = document.querySelector(".nav-menu");
  navegacion.classList.toggle("fixed", window.scrollY > 100);

}















