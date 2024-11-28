// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    hamburger.textContent = navMenu.style.display === "flex" ? "X" : "☰";
});

// Toggle the menu visibility
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});