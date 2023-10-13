let burger_icon = document.querySelector(".burger")
let burger_content = document.querySelector(".burger_menu")
let close_menu = document.querySelector(".close_burger")


burger_icon.addEventListener("click",()=>{
    burger_content.classList.add("active")
    document.body.style.overflow = "hidden"
})

close_menu.addEventListener("click",()=>{
    burger_content.classList.remove("active")
    document.body.style.overflow = "auto"
})