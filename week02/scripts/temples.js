// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav");

    // Toggle navigation menu visibility
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !isExpanded); // Update ARIA attribute
        navMenu.classList.toggle("hidden"); // Toggle the "hidden" class
        hamburger.textContent = isExpanded ? "☰" : "X"; // Update the button text
    });
});
