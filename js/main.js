var elOpen = document.querySelector(".site-header__menu-btn");
var elNav = document.querySelector(".site-header__inner");


elOpen.addEventListener("click", ()=> {
    elNav.classList.toggle("site-header__inner--avtive")
})

