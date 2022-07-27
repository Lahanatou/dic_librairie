let btn = document.querySelector("#hamburger")
let nav = document.querySelector(".header-link")
btn.addEventListener('click',()=>{
    nav.classList.toggle("header-link")
    nav.classList.toggle("active-link")
    btn.classList.toggle("active")
})