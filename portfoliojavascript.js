let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

// Typing Text Code

const typed = new Typed(".multiple-text", {
    strings: ["Frontend developer", "Self-taught"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1600,
    loop: true, 
}); //Code got on GitHub profile from mattboldt

