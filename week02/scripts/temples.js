// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav");

    // navigation menu visibility
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("hidden");
        hamburger.textContent = isExpanded ? "☰" : "X";
    });
});
