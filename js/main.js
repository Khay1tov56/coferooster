var elOpen = document.querySelector(".site-header__menu-btn");
var elClose = document.querySelector(".modal__btn");
var elList = document.querySelector(".modal");

elOpen.addEventListener("click", ()=> {
    elList.classList.add("modal__item")
})

elClose.addEventListener("click", ()=> {
    elList.classList.remove("modal__item")
})