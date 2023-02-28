const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

burger.addEventListener("click", function() {
  menu.classList.toggle("active");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
});
