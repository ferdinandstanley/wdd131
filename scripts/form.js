const products = [
    { id: 1, name: 'Smartphone' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smartwatch' },
    { id: 5, name: 'Tablet' }
];

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
    // Current Year
    const currentYearEl = document.getElementById("currentyear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    } else {
        console.warn("Element with ID 'currentyear' not found.");
    }

    // Last Modified Date
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = "Last Modified: " + document.lastModified;
    } else {
        console.warn("Element with ID 'lastModified' not found.");
    }

    // Populate Product Name Options
    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use product.id for a unique value
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    } else {
        console.warn("Element with ID 'productName' not found.");
    }
});
