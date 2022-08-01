const menu = document.querySelector(".cls")
const open = document.querySelector(".open")
const menubar = document.querySelector("#menubar")
menu.addEventListener("click", showmenu);
open.addEventListener("click", hidemenu)

function showmenu() {
    menubar.style.top = "59px"
    open.style.display = "inline"
    menu.style.display = "none"

}

function hidemenu() {
    menubar.style.top = "-300px"
    open.style.display = "none"
    menu.style.display = "inline"

}