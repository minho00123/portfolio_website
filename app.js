// HAMBURGER
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

// SCROLL
const root = document.documentElement;
const marqueElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marque-elements-displayed"
);

const marqueContent = document.querySelector(".marque-content");

root.style.setProperty("--marque-elements", marqueContent.children.length);

for (let i = 0; i < marqueElementsDisplayed; i++) {
  marqueContent.appendChild(marqueContent.children[i].cloneNode(true));
}
