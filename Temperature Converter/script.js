const celsiusField = document.querySelector("#value");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#button");
const tempType = document.querySelector("#temp-type");
const clock = document.querySelector("#clock"); 

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = ""; 
});
window.addEventListener("load", () => {
    if (degree.value === "") {
      convertBtn.setAttribute("disabled", "");
      setTimeout(() => {
        convertBtn.removeAttribute('disabled');
      }, 4000);
    }
  });
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
      convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000);
  });
  
function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
      if (tempType.value === "fahrenheit") {
        const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
      } else if (tempType.value === "kelvin") {
        const KelvinToCelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
      }
    }, 1200)
  }
  // Function to update the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Pad single digit minutes with a leading zero
    const time = `${hours}:${minutes} ${amOrPm}`;
    clock.textContent = time;
  }
  
  // Update the clock immediately and then every second
  updateClock(); // Update immediately to avoid initial delay
  setInterval(updateClock, 1000); // Update every second