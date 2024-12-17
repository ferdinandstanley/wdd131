document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Current Year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Lazy Loading for Images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.loading = "lazy";
    });

    // Join Button Interaction
    const joinButton = document.getElementById("joinButton");
    joinButton.addEventListener("click", () => {
        alert("Thank you for joining our community!");
    });
    
});

// Toggle navigation menu for mobile
const hamburgerBtn = document.getElementById('hamburger-btn');
const navbar = document.getElementById('navbar');

hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
