const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-open");
  nav.classList.toggle("nav--open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("nav--open");
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
