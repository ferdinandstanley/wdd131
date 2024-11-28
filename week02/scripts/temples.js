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

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
        hamburger.setAttribute("aria-expanded", !expanded);
        nav.classList.toggle("hidden");
    });
});