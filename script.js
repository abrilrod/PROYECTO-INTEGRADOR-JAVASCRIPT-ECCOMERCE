document.addEventListener("DOMContentLoaded", function() {
    console.log("Script cargado");
    const hamburger = document.querySelector(".hamburger");
    const navBarMenu = document.querySelector(".navbar");

    console.log(hamburger, navBarMenu);
    hamburger.addEventListener("click", function() {
        navBarMenu.classList.toggle("active");
    });
});