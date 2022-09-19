const hamburger = document.getElementById("hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active")
}