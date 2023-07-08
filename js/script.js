// select html elements

const navToggle = document.querySelector(".nav-open");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("show-navbar");
});
