const li = document.querySelectorAll(".lilinks");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const linnk = document.getElementById("imgay");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        linnk.classList.add("helo");
    } else {
        linnk.classList.remove("helo");
    }

    lastScrollY = window.scrollY;
});

