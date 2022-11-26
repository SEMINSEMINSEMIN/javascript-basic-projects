import toggleMenu from "./Components/toggleMenu.js";

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const toggleBtn = document.querySelector(".nav-toggle");
const toggleTarget = document.querySelector(".links-cont ul");
toggleBtn.addEventListener("click", (e) => {
  toggleMenu(toggleTarget);
});
