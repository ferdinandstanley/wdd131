// current year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // last modified date
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("nav");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("hidden");
      hamburger.textContent = isExpanded ? "☰" : "X";
    });
  }

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt Germany",
      dedicated: "2019, October, 20",
      area: 32895,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6612.jpg",
    },
    {
      templeName: "San Diego California",
      location: "San Diego California",
      dedicated: "1993, April, 30",
      area: 72000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-52301.jpg",
    },
    {
      templeName: "Indianapolis Indiana",
      location: "ICarmel Indiana",
      dedicated: "2015, August, 23",
      area: 34000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/indianapolis-indiana-temple/indianapolis-indiana-temple-11080.jpg",
    },
  ];

  const templesContainer = document.getElementById("temples-container");

  if (templesContainer) {
    function displayTemples(filteredTemples) {
      templesContainer.innerHTML = "";

      filteredTemples.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.className = "temple-card";

        templeCard.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sq. ft.</p>
        `;

        templesContainer.appendChild(templeCard);
      });
    }

    displayTemples(temples);

    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        filterTemples(filter);
      });
    });

    function filterTemples(filter) {
      let filteredTemples;

      switch (filter) {
        case "old":
          filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900
          );
          break;
        case "new":
          filteredTemples = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000
          );
          break;
        case "large":
          filteredTemples = temples.filter((temple) => temple.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter((temple) => temple.area < 10000);
          break;
        case "all":
        default:
          filteredTemples = temples;
          break;
      }

      displayTemples(filteredTemples);
    }
  }
});
