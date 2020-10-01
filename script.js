const burger = document.querySelector(".burger");
const header = document.querySelector(".header-container");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav-link");
burger.addEventListener("click", () => {
  header.classList.toggle("active");
  logo.classList.toggle("hide");
  nav.classList.toggle("nav-active");
});
