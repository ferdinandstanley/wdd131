document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Current Year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Lazy Loading for Images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.loading = "lazy";
    });

    // Join Us Button Interaction
    const joinButton = document.querySelector(".join-us");
    joinButton.addEventListener("click", () => {
        alert("Thank you for joining our community!");
    });

    // Toggle Hamburger Menu
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navbar = document.getElementById("navbar");

    hamburgerBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
});
