// Product Array
const products = [
    { id: 1, name: 'Smartphone' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smartwatch' },
    { id: 5, name: 'Tablet' }
];

// Populate Product Name Options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// current year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  
    // last modified date
    document.getElementById("lastModified").textContent =
      "Last Modified: " + document.lastModified;
});