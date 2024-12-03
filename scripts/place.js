// current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = document.lastModified;
  
    const temperature = 10; // °C
    const windSpeed = 5; // km/h
  
    const calculateWindChill = (temp, wind) => {
      return wind > 4.8 && temp <= 10
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1)
        : "N/A";
    };
  
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);
  });
  