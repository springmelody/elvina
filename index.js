const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
console.log("b", burger);

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-open");
  nav.classList.toggle("nav--open");
});
