const container = document.querySelector(".container");
const toggleContainer = document.querySelector("#toggle-container");
const toggleCircle = document.querySelector("#toggle-circle");
const icon = document.querySelector(".ri-sun-fill");

const toggleDarkMode = () => {
  // Toggle icon class
  if (icon.classList.contains("ri-sun-fill")) {
    icon.classList.remove("ri-sun-fill");
    icon.classList.add("ri-sun-cloudy-fill");
  } else if (icon.classList.contains("ri-sun-cloudy-fill")) {
    icon.classList.remove("ri-sun-cloudy-fill");
    icon.classList.add("ri-sun-fill");
  }

  // Toggle container classes
  container.classList.toggle("dark-bg");
  container.style.transition = "2s";
  toggleContainer.classList.toggle("light-dark-bg");
  toggleCircle.classList.toggle("dark-red-icon");

  // Toggle justify content and apply transition
  if (toggleContainer.style.justifyContent === "end") {
    toggleContainer.style.justifyContent = "start";
  } else {
    toggleContainer.style.justifyContent = "end";
  }
};

toggleCircle.addEventListener("click", toggleDarkMode);
