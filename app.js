const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".nav-a").forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navUl.classList.remove("active");
  })
);
