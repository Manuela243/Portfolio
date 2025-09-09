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
    strings: ["Self-taught", "Developer"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1600,
    loop: true, 
}); //Code got on GitHub profile from mattboldt

function showNotice() {
    document.getElementById("notice").style.display = "block";
}
  
function downloadCV() {
    // Google Drive direct download link
    const url = "https://drive.google.com/uc?export=download&id=1JjnAP3EzmuwXL5UdZeTGsK45j_x1Ycyg";
    
    // Open link in new tab to trigger download
    window.open(url, "_blank");
  }