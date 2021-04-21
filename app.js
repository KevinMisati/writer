//navbar
const hurmbuger = document.querySelector(".hurmbuger");
const body=document.querySelector("body");
const headerLinks = document.querySelectorAll(".nav-link");


hurmbuger.addEventListener("click", () => {
    body.classList.toggle("display-menu");
    
})

for (let i = 0;i<headerLinks.length;i++){
    headerLinks[i].addEventListener("click", () => {
        body.classList.remove("display-menu");
        console.log("jsjsjsjs");
    });
}

let typed = new Typed(".first", {
    strings:[
        "Hi there,"
    ],
})