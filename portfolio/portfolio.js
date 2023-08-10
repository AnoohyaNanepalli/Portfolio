let naviconconEl = document.getElementById("portfolio-icon-con");
let iconbarEl = document.getElementById("iconbar");
let iconxEl = document.getElementById("iconx");
let navlinksEl = document.getElementById("navlinks");
naviconconEl.addEventListener("click", () => {
    iconbarEl.classList.toggle("hide");
    iconxEl.classList.toggle("hide");
    navlinksEl.classList.toggle("hide");
});


window.addEventListener("scroll",function(){
    let navbarEl=document.getElementById("navbar");
    navbarEl.classList.toggle("sticky",window.scroll);
})