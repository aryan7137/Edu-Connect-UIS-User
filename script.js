const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  });
});

